import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

/** @type { import("drizzle-kit").Config } */
const config = {
  schema: "./src/database/schema.js",
  out: "./src/database/migrations",
  tablesFilter: ["sideproject_*"],
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};

export default config;
