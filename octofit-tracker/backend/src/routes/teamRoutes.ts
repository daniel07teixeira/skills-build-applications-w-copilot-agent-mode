import { Router } from 'express';
import Team from '../models/Team';

const router = Router();

router.get('/', async (_, res) => {
  const teams = await Team.find().populate('members', 'name grade');
  res.json(teams);
});

router.post('/', async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create team', details: error });
  }
});

export default router;
