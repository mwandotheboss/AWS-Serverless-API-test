import { createServer, proxy } from 'aws-serverless-express';
import app from './src/index';

const server = createServer(app);

export function handler(event, context) {
  return proxy(server, event, context);

};