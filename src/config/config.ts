import 'dotenv/config';

export const config = {
  database: {
    url: process.env.DB_URL || 'sqlite::memory:',
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
