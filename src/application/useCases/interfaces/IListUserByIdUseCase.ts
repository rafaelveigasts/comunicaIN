import {  User } from "@prisma/client";

type ListUserByIdDTO = {
  id: string
}


export interface IListUserByIdUseCase {
  execute({id} :ListUserByIdDTO): Promise<User>;
}