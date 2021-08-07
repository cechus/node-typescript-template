import dotenv from "dotenv"
dotenv.config()

const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
}

export default ENV
