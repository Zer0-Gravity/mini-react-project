import type { Application } from "express";
import express from "express";

const app: Application = express();
const PORT = process.env.PORT || 3500;

app.use(express());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Listen server from port 3500
app.listen(PORT, () => console.log(`Server start at por ${PORT}`));
