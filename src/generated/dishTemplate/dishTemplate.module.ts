import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { DishTemplateResolver } from './dishTemplate.resolver'
import { DishTemplateService } from './dishTemplate.service'

@Module({
  providers: [DishTemplateResolver, DishTemplateService, PrismaService]
})
export class DishTemplateModule { }

