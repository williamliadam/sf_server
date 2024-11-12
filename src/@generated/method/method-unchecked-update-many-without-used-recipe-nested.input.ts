import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
import { Type } from 'class-transformer';
import { MethodCreateOrConnectWithoutUsedRecipeInput } from './method-create-or-connect-without-used-recipe.input';
import { MethodUpsertWithWhereUniqueWithoutUsedRecipeInput } from './method-upsert-with-where-unique-without-used-recipe.input';
import { MethodCreateManyUsedRecipeInputEnvelope } from './method-create-many-used-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodUpdateWithWhereUniqueWithoutUsedRecipeInput } from './method-update-with-where-unique-without-used-recipe.input';
import { MethodUpdateManyWithWhereWithoutUsedRecipeInput } from './method-update-many-with-where-without-used-recipe.input';
import { MethodScalarWhereInput } from './method-scalar-where.input';

@InputType()
export class MethodUncheckedUpdateManyWithoutUsedRecipeNestedInput {

    @Field(() => [MethodCreateWithoutUsedRecipeInput], {nullable:true})
    @Type(() => MethodCreateWithoutUsedRecipeInput)
    create?: Array<MethodCreateWithoutUsedRecipeInput>;

    @Field(() => [MethodCreateOrConnectWithoutUsedRecipeInput], {nullable:true})
    @Type(() => MethodCreateOrConnectWithoutUsedRecipeInput)
    connectOrCreate?: Array<MethodCreateOrConnectWithoutUsedRecipeInput>;

    @Field(() => [MethodUpsertWithWhereUniqueWithoutUsedRecipeInput], {nullable:true})
    @Type(() => MethodUpsertWithWhereUniqueWithoutUsedRecipeInput)
    upsert?: Array<MethodUpsertWithWhereUniqueWithoutUsedRecipeInput>;

    @Field(() => MethodCreateManyUsedRecipeInputEnvelope, {nullable:true})
    @Type(() => MethodCreateManyUsedRecipeInputEnvelope)
    createMany?: MethodCreateManyUsedRecipeInputEnvelope;

    @Field(() => [MethodWhereUniqueInput], {nullable:true})
    @Type(() => MethodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [MethodWhereUniqueInput], {nullable:true})
    @Type(() => MethodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [MethodWhereUniqueInput], {nullable:true})
    @Type(() => MethodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [MethodWhereUniqueInput], {nullable:true})
    @Type(() => MethodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [MethodUpdateWithWhereUniqueWithoutUsedRecipeInput], {nullable:true})
    @Type(() => MethodUpdateWithWhereUniqueWithoutUsedRecipeInput)
    update?: Array<MethodUpdateWithWhereUniqueWithoutUsedRecipeInput>;

    @Field(() => [MethodUpdateManyWithWhereWithoutUsedRecipeInput], {nullable:true})
    @Type(() => MethodUpdateManyWithWhereWithoutUsedRecipeInput)
    updateMany?: Array<MethodUpdateManyWithWhereWithoutUsedRecipeInput>;

    @Field(() => [MethodScalarWhereInput], {nullable:true})
    @Type(() => MethodScalarWhereInput)
    deleteMany?: Array<MethodScalarWhereInput>;
}
