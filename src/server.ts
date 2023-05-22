import "dotenv/config";
import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
