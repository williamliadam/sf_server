import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from './materia-unit-create-or-connect-without-ingredients.input';
import { MateriaUnitUpsertWithoutIngredientsInput } from './materia-unit-upsert-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput } from './materia-unit-update-to-one-with-where-without-ingredients.input';

@InputType()
export class MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput {

    @Field(() => MateriaUnitCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => MateriaUnitCreateWithoutIngredientsInput)
    create?: MateriaUnitCreateWithoutIngredientsInput;

    @Field(() => MateriaUnitCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => MateriaUnitCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput;

    @Field(() => MateriaUnitUpsertWithoutIngredientsInput, {nullable:true})
    @Type(() => MateriaUnitUpsertWithoutIngredientsInput)
    upsert?: MateriaUnitUpsertWithoutIngredientsInput;

    @Field(() => MateriaUnitWhereUniqueInput, {nullable:true})
    @Type(() => MateriaUnitWhereUniqueInput)
    connect?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput, {nullable:true})
    @Type(() => MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput)
    update?: MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput;
}
