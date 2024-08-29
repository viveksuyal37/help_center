import { RequestHandler } from 'express';
import AppError from '../middlewares/globalAppError';
import prisma from '../prismaClient';
import { cardSchema } from '../types/card.types';

export const getCards: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query.card as string;

    if (query) {
      const cards = await prisma.card.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: query,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
      return res.status(200).json(cards);
    }

    const cards = await prisma.card.findMany();
    res.status(200).json(cards);
  } catch (err) {
    return next(new AppError('Internal server error', 500));
  }
};

export const getCard: RequestHandler = async (req, res, next) => {
  try {
    const card = await prisma.card.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!card) {
      return next(new AppError('No such card exists', 404));
    }
    res.status(200).json(card);
  } catch (err) {
    return next(new AppError('Internal server error', 500));
  }
};

export const createCard: RequestHandler = async (req, res, next) => {
  try {
    const { success, data, error } = cardSchema.safeParse(req.body);

    if (!success) {
      return next(new AppError('Invalid inputs', 400));
    }

    const card = await prisma.card.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
    res
      .status(201)
      .json({ message: 'help center topic created successfully', card });
  } catch (err) {
    return next(new AppError('Internal server error', 500));
  }
};
