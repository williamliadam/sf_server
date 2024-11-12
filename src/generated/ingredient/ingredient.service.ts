import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.IngredientFindFirstArgs) {
    return await this.prisma.ingredient.findFirst(args)
  }

  findUnique(args: Prisma.IngredientFindUniqueArgs) {
    return this.prisma.ingredient.findUnique(args)
  }

  findMany(args: Prisma.IngredientFindManyArgs) {
    return this.prisma.ingredient.findMany(args)
  }

  groupBy(args: Prisma.IngredientGroupByArgs) {
    // @ts-ignore
    return this.prisma.ingredient.groupBy(args)
  }

  aggregate(args: Prisma.IngredientAggregateArgs) {
    return this.prisma.ingredient.aggregate(args)
  }

  create(args: Prisma.IngredientCreateArgs) {
    return this.prisma.ingredient.create(args)
  }

  createMany(args: Prisma.IngredientCreateManyArgs) {
    return this.prisma.ingredient.createMany(args)
  }

  update(args: Prisma.IngredientUpdateArgs) {
    return this.prisma.ingredient.update(args)
  }

  updateMany(args: Prisma.IngredientUpdateManyArgs) {
    return this.prisma.ingredient.updateMany(args)
  }

  upsert(args: Prisma.IngredientUpsertArgs) {
    return this.prisma.ingredient.upsert(args)
  }

  delete(args: Prisma.IngredientDeleteArgs) {
    return this.prisma.ingredient.delete(args)
  }

  deleteMany(args: Prisma.IngredientDeleteManyArgs) {
    return this.prisma.ingredient.deleteMany(args)
  }
}
