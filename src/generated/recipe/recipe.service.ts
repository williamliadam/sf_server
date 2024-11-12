import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.RecipeFindFirstArgs) {
    return await this.prisma.recipe.findFirst(args)
  }

  findUnique(args: Prisma.RecipeFindUniqueArgs) {
    return this.prisma.recipe.findUnique(args)
  }

  findMany(args: Prisma.RecipeFindManyArgs) {
    return this.prisma.recipe.findMany(args)
  }

  groupBy(args: Prisma.RecipeGroupByArgs) {
    // @ts-ignore
    return this.prisma.recipe.groupBy(args)
  }

  aggregate(args: Prisma.RecipeAggregateArgs) {
    return this.prisma.recipe.aggregate(args)
  }

  create(args: Prisma.RecipeCreateArgs) {
    return this.prisma.recipe.create(args)
  }

  createMany(args: Prisma.RecipeCreateManyArgs) {
    return this.prisma.recipe.createMany(args)
  }

  update(args: Prisma.RecipeUpdateArgs) {
    return this.prisma.recipe.update(args)
  }

  updateMany(args: Prisma.RecipeUpdateManyArgs) {
    return this.prisma.recipe.updateMany(args)
  }

  upsert(args: Prisma.RecipeUpsertArgs) {
    return this.prisma.recipe.upsert(args)
  }

  delete(args: Prisma.RecipeDeleteArgs) {
    return this.prisma.recipe.delete(args)
  }

  deleteMany(args: Prisma.RecipeDeleteManyArgs) {
    return this.prisma.recipe.deleteMany(args)
  }
}
