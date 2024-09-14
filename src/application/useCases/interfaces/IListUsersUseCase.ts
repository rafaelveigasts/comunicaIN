import {  User } from "@prisma/client";

export interface IListUsersUseCase {
  execute(): Promise<User[]>;
}