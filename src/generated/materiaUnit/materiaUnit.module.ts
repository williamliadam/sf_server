import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MateriaUnitResolver } from './materiaUnit.resolver'
import { MateriaUnitService } from './materiaUnit.service'

@Module({
  providers: [MateriaUnitResolver, MateriaUnitService, PrismaService]
})
export class MateriaUnitModule { }

