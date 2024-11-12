import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { Type } from 'class-transformer';
import { MateriaUnitUpdateWithoutIngredientsInput } from './materia-unit-update-without-ingredients.input';

@InputType()
export class MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput {

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    @Type(() => MateriaUnitWhereInput)
    where?: MateriaUnitWhereInput;

    @Field(() => MateriaUnitUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => MateriaUnitUpdateWithoutIngredientsInput)
    data!: MateriaUnitUpdateWithoutIngredientsInput;
}
