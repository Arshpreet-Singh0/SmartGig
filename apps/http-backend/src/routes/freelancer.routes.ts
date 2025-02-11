import express, { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createProposal, deleteProposal, getFreelancerAssignedProjects, getProjectProposal, getProposalByProjectId, updateProposal } from "../controllers/freelancer.controller";

const router : Router = express.Router();

router.route('/:projectId').post(isAuthenticated, createProposal);

router.route('/proposal').get(isAuthenticated, getProjectProposal);

router.route('/proposal/:projectId').get(isAuthenticated, getProposalByProjectId);

router.route('/proposal/:proposalId').put(isAuthenticated, updateProposal);

router.route('/proposal/:proposalId').delete(isAuthenticated, deleteProposal);

router.route('/assigned-project').get(isAuthenticated, getFreelancerAssignedProjects);

export default router;