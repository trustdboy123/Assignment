import express from 'express';
import { createUser, getAllUsers } from '../controller/userController.js';

const route = express.Router();

route.route('/').get(getAllUsers).post(createUser);

export const UserRoute = route;