import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateInput } from './materia-category-create.input';
import { MateriaCategoryUpdateInput } from './materia-category-update.input';

@ArgsType()
export class UpsertOneMateriaCategoryArgs {
	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: false })
	@Type(() => MateriaCategoryWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MateriaCategoryCreateInput, { nullable: false })
	@Type(() => MateriaCategoryCreateInput)
	create!: MateriaCategoryCreateInput;

	@Field(() => MateriaCategoryUpdateInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateInput)
	update!: MateriaCategoryUpdateInput;
}
