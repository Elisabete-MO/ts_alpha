import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { getDB } from "../database/db";
import { User, UserResponse } from "../models/user";
import { validateEmail, validateName, validatePassword } from "../utils/validators";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

// Função para transformar User em UserResponse
const toUserResponse = (user: User): UserResponse => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

// POST /users - Cadastro
router.post("/users", async (req: Request, res: Response) => {
  const { name, email, password } = req.body as Partial<User>;

  if (!name || !email || !password)
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  if (!validateName(name)) return res.status(400).json({ error: "Nome inválido" });
  if (!validateEmail(email)) return res.status(400).json({ error: "Email inválido" });
  if (!validatePassword(password)) return res.status(400).json({ error: "Senha inválida" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuid();
  const db = getDB();

  try {
    await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)", [
      id,
      name,
      email,
      hashedPassword,
    ]);
    res.status(201).json({ id, name, email });
  } catch (err) {
    res.status(400).json({ error: "Email já cadastrado" });
  }
});

// POST /login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body as Partial<User>;
  if (!email || !password) return res.status(400).json({ error: "Email e senha são obrigatórios" });

  const db = getDB();

  const user = await db.get<User>("SELECT * FROM users WHERE email = ?", email);
  if (!user) return res.status(401).json({ error: "Credenciais inválidas" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Credenciais inválidas" });

  res.cookie("token", user.id, { httpOnly: true });
  res.json({ id: user.id });
});

// DELETE /logout
router.delete("/logout", (_req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logout realizado com sucesso" });
});

// GET /users
router.get("/users", async (_req: Request, res: Response) => {
  const db = getDB();

  const users = await db.all<User[]>("SELECT * FROM users");
  res.json(users.map(toUserResponse));
});

// PATCH /users/:id
router.patch("/users/:id", authMiddleware, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body as Partial<User>;

  const db = getDB();

  const user = await db.get<User>("SELECT * FROM users WHERE id = ?", id);
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

  if (name && !validateName(name)) return res.status(400).json({ error: "Nome inválido" });
  if (email && !validateEmail(email)) return res.status(400).json({ error: "Email inválido" });
  if (password && !validatePassword(password)) return res.status(400).json({ error: "Senha inválida" });

  const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;

  await db.run(
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
    name ?? user.name,
    email ?? user.email,
    hashedPassword,
    id
  );

  const updatedUser = await db.get<User>("SELECT * FROM users WHERE id = ?", id);
  res.json(toUserResponse(updatedUser!));
});

// DELETE /users/:id
router.delete("/users/:id", authMiddleware, async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = getDB();

  const user = await db.get<User>("SELECT * FROM users WHERE id = ?", id);
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

  await db.run("DELETE FROM users WHERE id = ?", id);
  res.json(toUserResponse(user));
});

export default router;
