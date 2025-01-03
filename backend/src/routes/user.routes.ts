import express from 'express';
import { getUserProfile, signin, signup, updateUserProfile } from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/isAuthenticated';
const router = express.Router();

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/update-profile').patch(isAuthenticated, updateUserProfile);

router.route('/:id').get(getUserProfile);

export default router;