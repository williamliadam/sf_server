import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MateriaCategory } from '../materia-category/materia-category.model';
import { NutritionRow } from '../nutrition-row/nutrition-row.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { MaterialCount } from './material-count.output';

@ObjectType()
export class Material {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    nickName!: string;

    @Field(() => Int, {nullable:false})
    materiaCategoryId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => MateriaCategory, {nullable:false})
    category?: MateriaCategory;

    @Field(() => [NutritionRow], {nullable:true})
    nutritionMatrix?: Array<NutritionRow>;

    @Field(() => [Ingredient], {nullable:true})
    ingredients?: Array<Ingredient>;

    @Field(() => MaterialCount, {nullable:false})
    _count?: MaterialCount;
}
