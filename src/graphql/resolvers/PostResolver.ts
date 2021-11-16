import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Post, PostInput } from "../entities/Post";

const posts: { [postName: string]: Post } = {};

@Resolver()
export class PostResolver {
  @Mutation((returns) => Post)
  async createPost(
    @Arg("postInput") postInput: PostInput,
    @Arg("userName") userName: string
  ): Promise<Post> {
    /*
        Save user in local variable. Ideally, you would save the user in a database.
            Ex:
                return await UserService.findOrCreate(userInput);
    */
    const postId = Object.keys(posts).length + 1;

    posts[postId] = {
      ...postInput,
      id: postId,
      creationDate: new Date(),
      userName,
    };

    return posts[postId];
  }

  @Query((returns) => Post)
  async getPost(@Arg("postId") postId: number): Promise<Post> {
    /*
        Get user from local variable. Ideally, you would get the user from a database.
            Ex:
                return await UserService.find(userId);
    */
    return posts[postId];
  }

  @Mutation((returns) => String)
  async deletePost(@Arg("postId") postId: number): Promise<string> {
    /*
        Delete user from local variable. Ideally, you would delete the user from a database.
            Ex:
                return await UserService.find(userId);
    */
    if (postId in posts) {
      delete posts[postId];
      return `Succesfully deleted post:${postId}`;
    }

    return `Failed to deleted post:${postId}. Post does not exists.`;
  }
}
