import express from "express";
import { success } from "consola";

// initialize app
const app = express();

const PORT = 4000;

const startApp = () => {
  app.listen(PORT, () =>
    success({
      message: `🚀 Server ready at http://localhost:${PORT}`,
      badge: true,
    })
  );
};

startApp();
