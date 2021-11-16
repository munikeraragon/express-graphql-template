import { ObjectType, Field, ID, InputType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field({ nullable: false })
  firstName!: string;

  @Field({ nullable: false })
  lastName!: string;

  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  creationDate: Date;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  firstName!: string;

  @Field({ nullable: false })
  lastName!: string;

  @Field({ nullable: false })
  userName!: string;

  @Field({ nullable: false })
  email!: string;
}
