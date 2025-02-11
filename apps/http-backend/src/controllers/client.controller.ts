import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createProject = async(req:Request, res:Response) : Promise<void> =>{
    try {
        const userId = req.userId;

        const {title, description, budget, duration, skillsRequired} = req.body;

        if(!title || !description || !budget || !duration || !skillsRequired){
            res.status(400).json({
                message : "All fields requied",
                success : false,
            });
            return;
        }
        
        const project = await prisma.project.create({
            data : {
                userId : Number(userId),
                title,
                description,
                budget : Number(budget),
                duration,
                skillsRequired
            }
        });

        res.status(200).json({
            message : "Project created successfully.",
            success : true,
            project,
        })

    } catch (error) {
        console.log(error); 
    }
};

export const getClientProjects = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const userId = req.userId;
  
      const projects = await prisma.project.findMany({
        where: {
          userId: Number(userId),
          freelancer : {
            isNot : null
          }
        },
        include: {
          freelancer: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
  
      res.status(200).json({
          projects
      });
    } catch (error) {
      console.log(error);
    }
  };

export const acceptProposal = async (
    req: Request,
    res: Response
  ): Promise<void> =>{

    try {
        const {projectId, proposalId} = req.params;
        const project = await prisma.project.findUnique({
            where : {
                id : Number(projectId),
            },
        });

        if(!project){
            res.status(404).json({
                message: "Project not found",
                sucess : false,
            })
            return ;
        }
        if(project?.freelancerId != null){
            res.status(400).json({
                success : false,
                message : "Project already assigned to a freelancer",
            });
            return;
        };

        const proposal = await prisma.proposal.findUnique({
            where : {
                id : Number(proposalId),
            }
        });

        if(!proposal){
            res.status(404).json({
                message : "Proposal not found",
                success : false,
                });
                return;
        }


        const [updatedProject, updatedProposal] = await prisma.$transaction([
            prisma.project.update({
              where: {
                id: Number(projectId),
              },
              data: {
                freelancerId: Number(proposal.freelancerId),
                status: 'IN_PROGRESS',
                assignedAt: new Date(),
              },
            }),
      
            prisma.proposal.update({
              where: {
                id: Number(proposalId),
              },
              data: {
                status: 'ACCEPTED',
              },
            }),
          ]);
        
    
        res.status(200).json({
            success: true,
            message: "Freelancer assigned successfully",
            project: updatedProject,
        });

    } catch (error) {
        console.log(error);
    }
  }
  
export const getProposals = async (
    req: Request,
    res: Response
  ): Promise<void> =>{
    try {
        const {projectId} = req.params;

        const proposals = await prisma.proposal.findMany({
            where : {
                projectId : Number(projectId),
            },
            include : {
              freelancer : {
                select : {
                  name : true,
                  ratingCount : true,
                  role : true
                }
              }
            }
        });

        res.status(200).json({
            proposals,
        })
    } catch (error) {
        console.log(error);
    }
  }

export const getClientPendingProject = async (
  req: Request,
  res: Response
): Promise<void> =>{
  try {
    const userId = req.userId;

    const projects = await prisma.project.findMany({
      where : {
        userId : Number(userId),
        freelancer : null,
      }
    });

    res.status(200).json({
      projects,
    })
  } catch (error) {
    console.log(error);
    
  }
}