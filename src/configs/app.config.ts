export const config = {
  server: {
    port: process.env.PORT || 3000
  },
  cors: {
    origins: ['http://localhost:4200', 'http://localhost:9000', 'http://datamarket-front:80']
  },
  database: {
    dbHost: process.env.DB_URI || '127.0.0.1:27017',
    dbName: process.env.DB_NAME || 'test',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || ''
  },
  isDevEnvironment: process.env.NODE_ENV === 'development'
};
