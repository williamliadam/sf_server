import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DishTemplateService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.DishTemplateFindFirstArgs) {
    return await this.prisma.dishTemplate.findFirst(args)
  }

  findUnique(args: Prisma.DishTemplateFindUniqueArgs) {
    return this.prisma.dishTemplate.findUnique(args)
  }

  findMany(args: Prisma.DishTemplateFindManyArgs) {
    return this.prisma.dishTemplate.findMany(args)
  }

  groupBy(args: Prisma.DishTemplateGroupByArgs) {
    // @ts-ignore
    return this.prisma.dishTemplate.groupBy(args)
  }

  aggregate(args: Prisma.DishTemplateAggregateArgs) {
    return this.prisma.dishTemplate.aggregate(args)
  }

  create(args: Prisma.DishTemplateCreateArgs) {
    return this.prisma.dishTemplate.create(args)
  }

  createMany(args: Prisma.DishTemplateCreateManyArgs) {
    return this.prisma.dishTemplate.createMany(args)
  }

  update(args: Prisma.DishTemplateUpdateArgs) {
    return this.prisma.dishTemplate.update(args)
  }

  updateMany(args: Prisma.DishTemplateUpdateManyArgs) {
    return this.prisma.dishTemplate.updateMany(args)
  }

  upsert(args: Prisma.DishTemplateUpsertArgs) {
    return this.prisma.dishTemplate.upsert(args)
  }

  delete(args: Prisma.DishTemplateDeleteArgs) {
    return this.prisma.dishTemplate.delete(args)
  }

  deleteMany(args: Prisma.DishTemplateDeleteManyArgs) {
    return this.prisma.dishTemplate.deleteMany(args)
  }
}
