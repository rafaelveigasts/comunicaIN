import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validationToken = () => {
  
  return async (req: Request, res: Response, next: NextFunction) => {

    if(!req.headers.authorization){
      return res.status(401).json({
        message: 'Token not found',
      });
    }

    const token = req.headers.authorization.split(' ')[1];

    if(token) {
      try {
        const decoded = jwt.verify(token, 'senha_secreta');
        req.body = decoded;
      } catch(err) {
        return res.status(401).json({
          message: 'Token invalid',
        });
      }
    }

    next();
  };
};

export default validationToken;