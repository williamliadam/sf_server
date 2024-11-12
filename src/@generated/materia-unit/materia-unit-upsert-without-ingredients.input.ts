import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaUnitUpdateWithoutIngredientsInput } from './materia-unit-update-without-ingredients.input';
import { Type } from 'class-transformer';
import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
import { MateriaUnitWhereInput } from './materia-unit-where.input';

@InputType()
export class MateriaUnitUpsertWithoutIngredientsInput {

    @Field(() => MateriaUnitUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => MateriaUnitUpdateWithoutIngredientsInput)
    update!: MateriaUnitUpdateWithoutIngredientsInput;

    @Field(() => MateriaUnitCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => MateriaUnitCreateWithoutIngredientsInput)
    create!: MateriaUnitCreateWithoutIngredientsInput;

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    @Type(() => MateriaUnitWhereInput)
    where?: MateriaUnitWhereInput;
}
