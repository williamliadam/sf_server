import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowUpdateInput } from './nutrition-row-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';

@ArgsType()
export class UpdateOneNutritionRowArgs {

    @Field(() => NutritionRowUpdateInput, {nullable:false})
    @Type(() => NutritionRowUpdateInput)
    data!: NutritionRowUpdateInput;

    @Field(() => NutritionRowWhereUniqueInput, {nullable:false})
    @Type(() => NutritionRowWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
}
