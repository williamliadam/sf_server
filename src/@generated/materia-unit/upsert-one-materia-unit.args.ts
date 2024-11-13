import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaUnitCreateInput } from './materia-unit-create.input';
import { MateriaUnitUpdateInput } from './materia-unit-update.input';

@ArgsType()
export class UpsertOneMateriaUnitArgs {
	@Field(() => MateriaUnitWhereUniqueInput, { nullable: false })
	@Type(() => MateriaUnitWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MateriaUnitCreateInput, { nullable: false })
	@Type(() => MateriaUnitCreateInput)
	create!: MateriaUnitCreateInput;

	@Field(() => MateriaUnitUpdateInput, { nullable: false })
	@Type(() => MateriaUnitUpdateInput)
	update!: MateriaUnitUpdateInput;
}
