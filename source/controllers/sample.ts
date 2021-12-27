import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `sample health check route called`);

    return res.status(200).json({
        messsage: 'pong'
    });
};

export default { sampleHealthCheck };
