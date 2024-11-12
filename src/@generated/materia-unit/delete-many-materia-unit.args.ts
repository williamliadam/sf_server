import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMateriaUnitArgs {

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    @Type(() => MateriaUnitWhereInput)
    where?: MateriaUnitWhereInput;
}
