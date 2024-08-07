// conjunto de rutas que utilizara la aplicacion
import { Router } from 'express';


export const router = Router();

import {authRouther} from './auth/index.js'
import {productRouther} from './product/index.js';
import {servicetRouther} from './service/index.js';
import {likeRouther} from './user/likes/index.js'
import { profileRouther } from './user/profile/index.js';

router.use('/auth', authRouther );
router.use('/product', productRouther);
router.use('/service', servicetRouther);
router.use('/likes', likeRouther)
router.use('/perfil', profileRouther)