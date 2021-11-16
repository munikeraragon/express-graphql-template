import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { User, UserInput } from "../entities/User";

const users: { [userName: string]: User } = {};

@Resolver()
export class UserResolver {
  @Mutation((returns) => User)
  async createUser(@Arg("userInput") userInput: UserInput): Promise<User> {
    /*
        Save user in local variable. Ideally, you would save the user in a database.
            Ex:
                return await UserService.findOrCreate(userInput);
    */
    const userId = Object.keys(users).length + 1;

    users[userId] = {
      ...userInput,
      id: userId,
      creationDate: new Date(),
    };

    return users[userId];
  }

  @Query((returns) => User)
  async getUser(@Arg("userId") userId: number): Promise<User> {
    /*
        Get user from local variable. Ideally, you would get the user from a database.
            Ex:
                return await UserService.find(userId);
    */
    return users[userId];
  }

  @Mutation((returns) => String)
  async deleteUser(@Arg("userId") userId: number): Promise<string> {
    /*
        Delete user from local variable. Ideally, you would delete the user from a database.
            Ex:
                return await UserService.find(userId);
    */
    if (userId in users) {
      delete users[userId];
      return `Succesfully deleted user:${userId}`;
    }

    return `Failed to deleted user:${userId}. User does not exists.`;
  }
}
