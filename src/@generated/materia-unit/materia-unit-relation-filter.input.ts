import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';

@InputType()
export class MateriaUnitRelationFilter {

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    is?: MateriaUnitWhereInput;

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    isNot?: MateriaUnitWhereInput;
}
