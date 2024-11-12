import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MateriaUnitService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.MateriaUnitFindFirstArgs) {
    return await this.prisma.materiaUnit.findFirst(args)
  }

  findUnique(args: Prisma.MateriaUnitFindUniqueArgs) {
    return this.prisma.materiaUnit.findUnique(args)
  }

  findMany(args: Prisma.MateriaUnitFindManyArgs) {
    return this.prisma.materiaUnit.findMany(args)
  }

  groupBy(args: Prisma.MateriaUnitGroupByArgs) {
    // @ts-ignore
    return this.prisma.materiaUnit.groupBy(args)
  }

  aggregate(args: Prisma.MateriaUnitAggregateArgs) {
    return this.prisma.materiaUnit.aggregate(args)
  }

  create(args: Prisma.MateriaUnitCreateArgs) {
    return this.prisma.materiaUnit.create(args)
  }

  createMany(args: Prisma.MateriaUnitCreateManyArgs) {
    return this.prisma.materiaUnit.createMany(args)
  }

  update(args: Prisma.MateriaUnitUpdateArgs) {
    return this.prisma.materiaUnit.update(args)
  }

  updateMany(args: Prisma.MateriaUnitUpdateManyArgs) {
    return this.prisma.materiaUnit.updateMany(args)
  }

  upsert(args: Prisma.MateriaUnitUpsertArgs) {
    return this.prisma.materiaUnit.upsert(args)
  }

  delete(args: Prisma.MateriaUnitDeleteArgs) {
    return this.prisma.materiaUnit.delete(args)
  }

  deleteMany(args: Prisma.MateriaUnitDeleteManyArgs) {
    return this.prisma.materiaUnit.deleteMany(args)
  }
}
