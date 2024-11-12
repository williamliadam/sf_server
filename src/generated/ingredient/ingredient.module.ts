import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { IngredientResolver } from './ingredient.resolver'
import { IngredientService } from './ingredient.service'

@Module({
  providers: [IngredientResolver, IngredientService, PrismaService]
})
export class IngredientModule { }

