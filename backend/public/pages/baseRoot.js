import { config } from 'dotenv';

config()

export const BASE_URL = process.env.PROD_APP_BACKEND || 'http://127.0.0.1:3000';