import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "src/post/entities/post.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { Ingredient } from "./entities/ingredient.entity";

@Resolver(() => Ingredient)
export class AuthorsResolver {
  constructor(
    private prisma: PrismaService
  ) { }

  @Query(returns => Ingredient)
  async ingredient(@Args('id') id: number) {
    return this.prisma.ingredient.findUnique({
      where: { id }
    })
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() ingredient: Ingredient) {
    const { id } = ingredient;
    return this.prisma.user.findMany({
      where: { bodyDetail: { height: 20 } }
    })
  }
}