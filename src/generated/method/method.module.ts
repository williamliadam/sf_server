import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MethodResolver } from './method.resolver'
import { MethodService } from './method.service'

@Module({
  providers: [MethodResolver, MethodService, PrismaService]
})
export class MethodModule { }

