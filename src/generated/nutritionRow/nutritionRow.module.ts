import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { NutritionRowResolver } from './nutritionRow.resolver'
import { NutritionRowService } from './nutritionRow.service'

@Module({
  providers: [NutritionRowResolver, NutritionRowService, PrismaService]
})
export class NutritionRowModule { }

