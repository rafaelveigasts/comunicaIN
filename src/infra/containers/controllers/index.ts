import { container } from "tsyringe";
import { Controller } from "@/application/protocols/controller";
import { CreateUserController } from "@/application/controllers/CreateUserController";
import { ListUsersController } from "@/application/controllers/ListUsersController";
import { ListUserByIdController } from "@/application/controllers/ListUserByIdController";
import { UpdateUserController } from "@/application/controllers/UpdateUserController";
import { DeleteByIdController } from "@/application/controllers/DeleteByIdController";

container.registerSingleton<Controller>('ICreateUserController', CreateUserController);
container.registerSingleton<Controller>('IUpdateUserController', UpdateUserController);
container.registerSingleton<Controller>('IListUsersController', ListUsersController);
container.registerSingleton<Controller>('IListUserByIdController', ListUserByIdController);
container.registerSingleton<Controller>('IDeleteByIdController', DeleteByIdController);
