import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

const PORT = 3000;
app.listen(3000, () => console.log(`Server is running! PORT${PORT}`));  