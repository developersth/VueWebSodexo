import axios from 'axios';
const env = require('@/config/env');
export const HTTP = axios.create({
  baseURL: env.baseURL,
  headers: {'Authorization': env.Authorization},
  timeout: 120000
});