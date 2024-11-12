import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { NutritionResolver } from './nutrition.resolver'
import { NutritionService } from './nutrition.service'

@Module({
  providers: [NutritionResolver, NutritionService, PrismaService]
})
export class NutritionModule { }

