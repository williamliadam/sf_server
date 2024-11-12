import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { BodyDetailResolver } from './bodyDetail.resolver'
import { BodyDetailService } from './bodyDetail.service'

@Module({
  providers: [BodyDetailResolver, BodyDetailService, PrismaService]
})
export class BodyDetailModule { }

