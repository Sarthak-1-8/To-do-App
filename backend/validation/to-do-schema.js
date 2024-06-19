import z from 'zod';

export const createTask=z.object({
    tittle:z.string(),
    description:z.string()
});

export const updateTask= z.object({
    id:z.string()
});