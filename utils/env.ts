import * as dotenv from 'dotenv';
import * as path from 'path';

// Load env file dynamically based on ENV (e.g., .env.qa, .env.dev)
const ENV = process.env.ENV || 'dev';
const envFile = path.resolve(__dirname, `../.env.${ENV}`);
dotenv.config({ path: envFile });

export const BASE_URL = process.env.BASE_URL || '';
export const STANDARD_USER = process.env.STANDARD_USER || '';
export const STANDARD_PASS = process.env.STANDARD_PASS || '';
export const ADMIN_USER = process.env.ADMIN_USER || '';
export const ADMIN_PASS = process.env.ADMIN_PASS || '';
export const GUEST_USER = process.env.GUEST_USER || '';
export const GUEST_PASS = process.env.GUEST_PASS || '';