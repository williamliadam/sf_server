import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { MealPlanResolver } from './mealPlan.resolver'
import { MealPlanService } from './mealPlan.service'

@Module({
  providers: [MealPlanResolver, MealPlanService, PrismaService]
})
export class MealPlanModule { }

