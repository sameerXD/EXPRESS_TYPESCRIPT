import express from 'express';
const router = express.Router();

import sampleController from '../controllers/sample';

router.get('/ping', sampleController.sampleHealthCheck);

export default router;
