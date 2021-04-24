import { Request, Response, NextFunction } from 'express';

import AppError from '../../../errors/AppError';

function globalError(
  err: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
}

export default globalError;
