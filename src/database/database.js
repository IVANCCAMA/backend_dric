import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


sequelize.authenticate()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection failed:", err);
  });