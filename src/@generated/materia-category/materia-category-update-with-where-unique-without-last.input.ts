import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaCategoryUpdateWithoutLastInput } from './materia-category-update-without-last.input';

@InputType()
export class MateriaCategoryUpdateWithWhereUniqueWithoutLastInput {
	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: false })
	@Type(() => MateriaCategoryWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MateriaCategoryUpdateWithoutLastInput, { nullable: false })
	@Type(() => MateriaCategoryUpdateWithoutLastInput)
	data!: MateriaCategoryUpdateWithoutLastInput;
}
