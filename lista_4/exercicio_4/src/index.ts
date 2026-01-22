import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import { initDB } from "./database/db";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(userRoutes);

const PORT = 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});