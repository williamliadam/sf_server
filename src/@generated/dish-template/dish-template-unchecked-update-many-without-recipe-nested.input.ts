import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateOrConnectWithoutRecipeInput } from './dish-template-create-or-connect-without-recipe.input';
import { DishTemplateUpsertWithWhereUniqueWithoutRecipeInput } from './dish-template-upsert-with-where-unique-without-recipe.input';
import { DishTemplateCreateManyRecipeInputEnvelope } from './dish-template-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithWhereUniqueWithoutRecipeInput } from './dish-template-update-with-where-unique-without-recipe.input';
import { DishTemplateUpdateManyWithWhereWithoutRecipeInput } from './dish-template-update-many-with-where-without-recipe.input';
import { DishTemplateScalarWhereInput } from './dish-template-scalar-where.input';

@InputType()
export class DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput {

    @Field(() => [DishTemplateCreateWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateCreateWithoutRecipeInput)
    create?: Array<DishTemplateCreateWithoutRecipeInput>;

    @Field(() => [DishTemplateCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutRecipeInput>;

    @Field(() => [DishTemplateUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<DishTemplateUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => DishTemplateCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => DishTemplateCreateManyRecipeInputEnvelope)
    createMany?: DishTemplateCreateManyRecipeInputEnvelope;

    @Field(() => [DishTemplateWhereUniqueInput], {nullable:true})
    @Type(() => DishTemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [DishTemplateWhereUniqueInput], {nullable:true})
    @Type(() => DishTemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [DishTemplateWhereUniqueInput], {nullable:true})
    @Type(() => DishTemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [DishTemplateWhereUniqueInput], {nullable:true})
    @Type(() => DishTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [DishTemplateUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<DishTemplateUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [DishTemplateUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => DishTemplateUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<DishTemplateUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [DishTemplateScalarWhereInput], {nullable:true})
    @Type(() => DishTemplateScalarWhereInput)
    deleteMany?: Array<DishTemplateScalarWhereInput>;
}
