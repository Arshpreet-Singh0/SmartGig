import express, { Router } from 'express';
import { getUserProfile, getUserProfilebyId, signin, signup, updateClientProfile, updateUserProfile } from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/isAuthenticated';
const router : Router = express.Router();

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/update-profile').patch(isAuthenticated, updateUserProfile);

router.route('/client/update-profile').patch(isAuthenticated, updateClientProfile);

router.route('/:id').get(getUserProfilebyId);

router.route('/').get( isAuthenticated, getUserProfile);

export default router;