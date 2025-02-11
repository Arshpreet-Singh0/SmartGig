import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req?.params?.page as unknown as string, 10) || 1; // Ensure `page` is a number, defaulting to 1 if undefined
    const pageSize = 9;

    // Retrieve both the list of projects and the total count
    const [projects, totalProjects] = await prisma.$transaction([
      prisma.project.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          User: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      }),
      prisma.project.count(),
    ]);

    res.status(200).json({
      totalProjects,
      projects,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(projectId),
      },
      include: {
        User: {
          select: {
            name: true,
            id: true,
            email: true,
          },
        },
      },
    });

    res.status(200).json({
      project,
    });
  } catch (error) {
    console.log(error);
  }
};
