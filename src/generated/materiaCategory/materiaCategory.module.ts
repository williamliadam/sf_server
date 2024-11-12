import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MateriaCategoryResolver } from './materiaCategory.resolver'
import { MateriaCategoryService } from './materiaCategory.service'

@Module({
  providers: [MateriaCategoryResolver, MateriaCategoryService, PrismaService]
})
export class MateriaCategoryModule { }

