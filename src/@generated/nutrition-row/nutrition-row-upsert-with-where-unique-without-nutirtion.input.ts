import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionRowUpdateWithoutNutirtionInput } from './nutrition-row-update-without-nutirtion.input';
import { NutritionRowCreateWithoutNutirtionInput } from './nutrition-row-create-without-nutirtion.input';

@InputType()
export class NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput {

    @Field(() => NutritionRowWhereUniqueInput, {nullable:false})
    @Type(() => NutritionRowWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;

    @Field(() => NutritionRowUpdateWithoutNutirtionInput, {nullable:false})
    @Type(() => NutritionRowUpdateWithoutNutirtionInput)
    update!: NutritionRowUpdateWithoutNutirtionInput;

    @Field(() => NutritionRowCreateWithoutNutirtionInput, {nullable:false})
    @Type(() => NutritionRowCreateWithoutNutirtionInput)
    create!: NutritionRowCreateWithoutNutirtionInput;
}
