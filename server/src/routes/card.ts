import { Router } from 'express';
import { createCard, getCard, getCards } from '../controllers/card';

const router = Router();

router.get('/card/:id', getCard);
router.get('/all', getCards);
router.post('/create', createCard);

export default router;
