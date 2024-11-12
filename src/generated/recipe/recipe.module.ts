import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { RecipeResolver } from './recipe.resolver'
import { RecipeService } from './recipe.service'

@Module({
  providers: [RecipeResolver, RecipeService, PrismaService]
})
export class RecipeModule { }

