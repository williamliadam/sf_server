import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from './materia-unit-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';

@InputType()
export class MateriaUnitCreateNestedOneWithoutIngredientsInput {
	@Field(() => MateriaUnitCreateWithoutIngredientsInput, { nullable: true })
	@Type(() => MateriaUnitCreateWithoutIngredientsInput)
	create?: MateriaUnitCreateWithoutIngredientsInput;

	@Field(() => MateriaUnitCreateOrConnectWithoutIngredientsInput, {
		nullable: true,
	})
	@Type(() => MateriaUnitCreateOrConnectWithoutIngredientsInput)
	connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput;

	@Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
	@Type(() => MateriaUnitWhereUniqueInput)
	connect?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
}
