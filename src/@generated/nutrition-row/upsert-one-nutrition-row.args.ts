import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowCreateInput } from './nutrition-row-create.input';
import { NutritionRowUpdateInput } from './nutrition-row-update.input';

@ArgsType()
export class UpsertOneNutritionRowArgs {

    @Field(() => NutritionRowWhereUniqueInput, {nullable:false})
    @Type(() => NutritionRowWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

    @Field(() => NutritionRowCreateInput, {nullable:false})
    @Type(() => NutritionRowCreateInput)
    create!: NutritionRowCreateInput;

    @Field(() => NutritionRowUpdateInput, {nullable:false})
    @Type(() => NutritionRowUpdateInput)
    update!: NutritionRowUpdateInput;
}
