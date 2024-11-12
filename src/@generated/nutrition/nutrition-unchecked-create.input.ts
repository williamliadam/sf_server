import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput } from '../nutrition-row/nutrition-row-unchecked-create-nested-many-without-nutirtion.input';

@InputType()
export class NutritionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput, {nullable:true})
    usedRow?: NutritionRowUncheckedCreateNestedManyWithoutNutirtionInput;
}
