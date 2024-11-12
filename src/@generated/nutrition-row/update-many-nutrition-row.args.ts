import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionRowUpdateManyMutationInput } from './nutrition-row-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionRowWhereInput } from './nutrition-row-where.input';

@ArgsType()
export class UpdateManyNutritionRowArgs {

    @Field(() => NutritionRowUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionRowUpdateManyMutationInput)
    data!: NutritionRowUpdateManyMutationInput;

    @Field(() => NutritionRowWhereInput, {nullable:true})
    @Type(() => NutritionRowWhereInput)
    where?: NutritionRowWhereInput;
}
