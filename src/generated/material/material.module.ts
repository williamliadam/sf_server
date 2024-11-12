import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MaterialResolver } from './material.resolver'
import { MaterialService } from './material.service'

@Module({
  providers: [MaterialResolver, MaterialService, PrismaService]
})
export class MaterialModule { }

