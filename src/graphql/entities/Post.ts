import { ObjectType, InputType, Field, ID } from "type-graphql";

@ObjectType()
export class Post {
  @Field((type) => ID)
  id!: number;

  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: false })
  content!: string;

  @Field((type) => [String])
  tags!: string[];

  @Field({ nullable: false })
  creationDate: Date;
}

@InputType()
export class PostInput {
  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: false })
  content!: string;

  @Field((type) => [String])
  tags!: string[];
}
