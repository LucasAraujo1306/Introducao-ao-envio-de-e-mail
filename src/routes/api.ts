import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/contato', EmailController.contado);

export default router;