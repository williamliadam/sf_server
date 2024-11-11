import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "src/post/entities/post.entity";

@ObjectType()
export class Ingredient {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}
