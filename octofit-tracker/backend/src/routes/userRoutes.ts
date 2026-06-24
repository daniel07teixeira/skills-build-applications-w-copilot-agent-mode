import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/', async (_, res) => {
  const users = await User.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user', details: error });
  }
});

export default router;
