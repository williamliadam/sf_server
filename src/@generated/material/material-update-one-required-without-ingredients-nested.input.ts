import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutIngredientsInput } from './material-create-or-connect-without-ingredients.input';
import { MaterialUpsertWithoutIngredientsInput } from './material-upsert-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateToOneWithWhereWithoutIngredientsInput } from './material-update-to-one-with-where-without-ingredients.input';

@InputType()
export class MaterialUpdateOneRequiredWithoutIngredientsNestedInput {

    @Field(() => MaterialCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => MaterialCreateWithoutIngredientsInput)
    create?: MaterialCreateWithoutIngredientsInput;

    @Field(() => MaterialCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput;

    @Field(() => MaterialUpsertWithoutIngredientsInput, {nullable:true})
    @Type(() => MaterialUpsertWithoutIngredientsInput)
    upsert?: MaterialUpsertWithoutIngredientsInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MaterialUpdateToOneWithWhereWithoutIngredientsInput, {nullable:true})
    @Type(() => MaterialUpdateToOneWithWhereWithoutIngredientsInput)
    update?: MaterialUpdateToOneWithWhereWithoutIngredientsInput;
}
