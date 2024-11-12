import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionRowCreateNestedManyWithoutNutirtionInput } from '../nutrition-row/nutrition-row-create-nested-many-without-nutirtion.input';

@InputType()
export class NutritionCreateInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionRowCreateNestedManyWithoutNutirtionInput, {nullable:true})
    usedRow?: NutritionRowCreateNestedManyWithoutNutirtionInput;
}
