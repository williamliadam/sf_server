import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MealTemplateService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MealTemplateFindFirstArgs) {
    return await this.prisma.mealTemplate.findFirst(args)
  }

  findUnique(args: Prisma.MealTemplateFindUniqueArgs) {
    return this.prisma.mealTemplate.findUnique(args)
  }

  findMany(args: Prisma.MealTemplateFindManyArgs) {
    return this.prisma.mealTemplate.findMany(args)
  }

  groupBy(args: Prisma.MealTemplateGroupByArgs) {
    // @ts-ignore
    return this.prisma.mealTemplate.groupBy(args)
  }

  aggregate(args: Prisma.MealTemplateAggregateArgs) {
    return this.prisma.mealTemplate.aggregate(args)
  }

  create(args: Prisma.MealTemplateCreateArgs) {
    return this.prisma.mealTemplate.create(args)
  }

  createMany(args: Prisma.MealTemplateCreateManyArgs) {
    return this.prisma.mealTemplate.createMany(args)
  }

  update(args: Prisma.MealTemplateUpdateArgs) {
    return this.prisma.mealTemplate.update(args)
  }

  updateMany(args: Prisma.MealTemplateUpdateManyArgs) {
    return this.prisma.mealTemplate.updateMany(args)
  }

  upsert(args: Prisma.MealTemplateUpsertArgs) {
    return this.prisma.mealTemplate.upsert(args)
  }

  delete(args: Prisma.MealTemplateDeleteArgs) {
    return this.prisma.mealTemplate.delete(args)
  }

  deleteMany(args: Prisma.MealTemplateDeleteManyArgs) {
    return this.prisma.mealTemplate.deleteMany(args)
  }
}
