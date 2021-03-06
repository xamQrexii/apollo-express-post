import express from "express";
import { success } from "consola";
import { PORT } from "./config";

// initialize app
const app = express();

const startApp = () => {
  app.listen(PORT, () =>
    success({
      message: `🚀 Server ready at http://localhost:${PORT}`,
      badge: true,
    })
  );
};

startApp();
