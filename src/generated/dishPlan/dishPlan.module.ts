import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { DishPlanResolver } from './dishPlan.resolver'
import { DishPlanService } from './dishPlan.service'

@Module({
  providers: [DishPlanResolver, DishPlanService, PrismaService]
})
export class DishPlanModule { }

