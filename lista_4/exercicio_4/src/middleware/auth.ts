import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Usuário não autenticado" });
  req.userId = token; // Token é o userId nesse exemplo simples
  next();
}
