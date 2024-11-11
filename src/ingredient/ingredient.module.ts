import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { AuthorsResolver } from './ingredient.resolver';
import { PrismaService } from '../prisma/prisma.service';
@Module({
  providers: [IngredientService, AuthorsResolver, PrismaService]
})
export class IngredientModule { }
