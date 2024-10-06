/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:w4tMpy2IzkhS@ep-lively-dew-a55eqmei-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
};