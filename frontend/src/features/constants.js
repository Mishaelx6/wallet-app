export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://bank-app-server.vercel.app/'
