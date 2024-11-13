import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitCreateInput } from './materia-unit-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMateriaUnitArgs {
	@Field(() => MateriaUnitCreateInput, { nullable: false })
	@Type(() => MateriaUnitCreateInput)
	data!: MateriaUnitCreateInput;
}
