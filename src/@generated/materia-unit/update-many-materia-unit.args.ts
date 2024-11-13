import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitUpdateManyMutationInput } from './materia-unit-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MateriaUnitWhereInput } from './materia-unit-where.input';

@ArgsType()
export class UpdateManyMateriaUnitArgs {
	@Field(() => MateriaUnitUpdateManyMutationInput, { nullable: false })
	@Type(() => MateriaUnitUpdateManyMutationInput)
	data!: MateriaUnitUpdateManyMutationInput;

	@Field(() => MateriaUnitWhereInput, { nullable: true })
	@Type(() => MateriaUnitWhereInput)
	where?: MateriaUnitWhereInput;
}
