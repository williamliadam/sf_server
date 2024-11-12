import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MealTemplateResolver } from './mealTemplate.resolver'
import { MealTemplateService } from './mealTemplate.service'

@Module({
  providers: [MealTemplateResolver, MealTemplateService, PrismaService]
})
export class MealTemplateModule { }

