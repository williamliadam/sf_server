import { Injectable, Logger } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CurrentUser } from '../auth/decorators/user.decorator.graphql';
import { User } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) { }
  private readonly logger = new Logger(RecipeService.name)

  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  async findAll(userId: number) {
    const recipes = await this.prisma.recipe.findMany({
      where: {
        authorId: userId,
      },
    });
    this.logger.log(recipes);
    return recipes;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
