import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryUpdateInput } from './materia-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';

@ArgsType()
export class UpdateOneMateriaCategoryArgs {
	@Field(() => MateriaCategoryUpdateInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateInput)
	data!: MateriaCategoryUpdateInput;

	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: false })
	@Type(() => MateriaCategoryWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
