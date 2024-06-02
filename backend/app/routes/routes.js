// conjunto de rutas que utilizara la aplicacion
import { Router } from 'express';


export var router = Router();

import {authRouther} from './auth'
import {productRouther} from './product';
import {servicetRouther} from './service';

router.use('/auth', authRouther );
router.use('/product', productRouther);
router.use('/service', servicetRouther);