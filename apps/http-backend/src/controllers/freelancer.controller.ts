import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getFreelancerAssignedProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        freelancerId: Number(req.userId),
      },
      include: {
        User: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        assignedAt: "desc",
      },
    });

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { coverLetter, proposedBudget, proposedTimeline } = req.body;
    const { projectId } = req.params;
    const freelancerId = req.userId;

    if (!coverLetter || !proposedBudget || !proposedTimeline) {
      res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
      return;
    }

    const proposal = await prisma.proposal.findFirst({
      where: {
        projectId: Number(projectId),
        freelancerId: Number(freelancerId),
      },
    });

    if (proposal) {
      res.status(400).json({
        message: "Proposal already exist for this project.",
        success: false,
      });
      return;
    }

    const p = await prisma.proposal.create({
      data: {
        projectId: Number(projectId),
        freelancerId: Number(freelancerId),
        coverLetter,
        proposedBudget: Number(proposedBudget),
        proposedTimeline,
      },
    });

    res.status(200).json({
      message: "Proposal submitted successfully.",
      success: true,
      proposal: p,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSubmittedProposal = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const proposals = await prisma.proposal.findMany({
      where: {
        freelancerId: Number(userId),
      },
      include: {
        project: true,
      },
    });

    res.status(200).json({
      proposals,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProjectProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.userId;

    const proposals = await prisma.proposal.findMany({
      where: {
        freelancerId: Number(userId),
      },
      include: {
        project: {
          include: {
            User: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json({
      proposals,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { proposalId } = req.params;
    const userId = req.userId;

    const [response, proposals] = await prisma.$transaction([
      prisma.proposal.delete({
        where: {
          id: Number(proposalId),
          freelancerId: Number(userId),
        },
      }),
      prisma.proposal.findMany({
        where: {
          freelancerId: Number(userId),
        },
        include: {
          project: {
            include: {
              User: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      }),
    ]);

    if (!response) {
      res.status(404).json({
        message: "Proposal not found",
      });
      return;
    }
    res.status(200).json({
      message: "Proposal deleted successfully",
      success: true,
      proposals,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProposalByProjectId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { projectId } = req.params;
    const userId = req.userId;

    const proposal = await prisma.proposal.findFirst({
      where: {
        projectId: Number(projectId),
        freelancerId: Number(userId),
      },
    });

    res.status(200).json({
      proposal,
      success: true,
    });
  } catch (error) {}
};

export const updateProposal = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { coverLetter, proposedBudget, proposedTimeline } = req.body;
    const { proposalId } = req.params;
    const freelancerId = req.userId;

    const proposal = await prisma.proposal.update({
      where: {
        id: Number(proposalId),
        freelancerId: Number(freelancerId),
      },
      data: {
        coverLetter,
        proposedBudget: Number(proposedBudget),
        proposedTimeline,
      },
    });

    if (!proposal) {
      res.status(400).json({
        message: "Proposal not found",
        success: false,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Proposal updated successfully",
      proposal,
    });
  } catch (error) {
    console.log(error);
  }
};
