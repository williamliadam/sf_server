import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutUsedRecipeInput } from './ingredient-create-without-used-recipe.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from './ingredient-create-or-connect-without-used-recipe.input';
import { IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput } from './ingredient-upsert-with-where-unique-without-used-recipe.input';
import { IngredientCreateManyUsedRecipeInputEnvelope } from './ingredient-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput } from './ingredient-update-with-where-unique-without-used-recipe.input';
import { IngredientUpdateManyWithWhereWithoutUsedRecipeInput } from './ingredient-update-many-with-where-without-used-recipe.input';
import { IngredientScalarWhereInput } from './ingredient-scalar-where.input';

@InputType()
export class IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput {

    @Field(() => [IngredientCreateWithoutUsedRecipeInput], {nullable:true})
    @Type(() => IngredientCreateWithoutUsedRecipeInput)
    create?: Array<IngredientCreateWithoutUsedRecipeInput>;

    @Field(() => [IngredientCreateOrConnectWithoutUsedRecipeInput], {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutUsedRecipeInput)
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUsedRecipeInput>;

    @Field(() => [IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput], {nullable:true})
    @Type(() => IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput)
    upsert?: Array<IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput>;

    @Field(() => IngredientCreateManyUsedRecipeInputEnvelope, {nullable:true})
    @Type(() => IngredientCreateManyUsedRecipeInputEnvelope)
    createMany?: IngredientCreateManyUsedRecipeInputEnvelope;

    @Field(() => [IngredientWhereUniqueInput], {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

    @Field(() => [IngredientWhereUniqueInput], {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

    @Field(() => [IngredientWhereUniqueInput], {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

    @Field(() => [IngredientWhereUniqueInput], {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;

    @Field(() => [IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput], {nullable:true})
    @Type(() => IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput)
    update?: Array<IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput>;

    @Field(() => [IngredientUpdateManyWithWhereWithoutUsedRecipeInput], {nullable:true})
    @Type(() => IngredientUpdateManyWithWhereWithoutUsedRecipeInput)
    updateMany?: Array<IngredientUpdateManyWithWhereWithoutUsedRecipeInput>;

    @Field(() => [IngredientScalarWhereInput], {nullable:true})
    @Type(() => IngredientScalarWhereInput)
    deleteMany?: Array<IngredientScalarWhereInput>;
}
