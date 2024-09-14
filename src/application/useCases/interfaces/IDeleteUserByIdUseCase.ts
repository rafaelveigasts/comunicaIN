type DeleteUserByIdDTO = {
  id: string
}


export interface IDeleteUserByIdUseCase {
  execute({id} :DeleteUserByIdDTO): Promise<void>;
}