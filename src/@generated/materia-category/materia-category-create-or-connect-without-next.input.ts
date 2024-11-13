import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';

@InputType()
export class MateriaCategoryCreateOrConnectWithoutNextInput {
	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: false })
	@Type(() => MateriaCategoryWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MateriaCategoryCreateWithoutNextInput, { nullable: false })
	@Type(() => MateriaCategoryCreateWithoutNextInput)
	create!: MateriaCategoryCreateWithoutNextInput;
}
