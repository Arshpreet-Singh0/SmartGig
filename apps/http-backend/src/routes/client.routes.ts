import express, { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { acceptProposal, createProject, getClientPendingProject, getClientProjects, getProposals } from "../controllers/client.controller";

const router : Router = express.Router();

router.route("/").post(isAuthenticated, createProject);

router.route('/projects').get(isAuthenticated, getClientProjects);

router.route('/pending-projects').get(isAuthenticated, getClientPendingProject);

router.route('/proposals/:projectId').get(getProposals);

router.route('/accept-proposal/:projectId/:proposalId').post(isAuthenticated, acceptProposal);


export default router;