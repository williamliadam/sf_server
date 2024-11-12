import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NutritionRow } from '../nutrition-row/nutrition-row.model';
import { NutritionCount } from './nutrition-count.output';

@ObjectType()
export class Nutrition {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [NutritionRow], {nullable:true})
    usedRow?: Array<NutritionRow>;

    @Field(() => NutritionCount, {nullable:false})
    _count?: NutritionCount;
}
