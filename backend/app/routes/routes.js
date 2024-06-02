// conjunto de rutas que utilizara la aplicacion
import { Router } from 'express';


export const router = Router();

import {authRouther} from './auth/index.js'
import {productRouther} from './product/index.js';
import {servicetRouther} from './service/index.js';

router.use('/auth', authRouther );
router.use('/product', productRouther);
router.use('/service', servicetRouther);