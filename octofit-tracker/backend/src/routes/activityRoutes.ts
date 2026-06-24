import { Router } from 'express';
import Activity from '../models/Activity';
import User from '../models/User';

const router = Router();

router.get('/', async (_, res) => {
  const activities = await Activity.find().populate('user', 'name email');
  res.json(activities);
});

router.post('/', async (req, res) => {
  try {
    const { user, type, durationMinutes, distanceKm, notes } = req.body;
    const basePoints = type === 'Running' ? 5 : type === 'Walking' ? 3 : 4;
    const points = basePoints * Math.max(1, durationMinutes / 10);

    const activity = await Activity.create({ user, type, durationMinutes, distanceKm, notes, points });
    await User.findByIdAndUpdate(user, { $inc: { points } });

    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: 'Unable to log activity', details: error });
  }
});

export default router;
