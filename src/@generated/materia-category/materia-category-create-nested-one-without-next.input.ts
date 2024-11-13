import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutNextInput } from './materia-category-create-without-next.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutNextInput } from './materia-category-create-or-connect-without-next.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';

@InputType()
export class MateriaCategoryCreateNestedOneWithoutNextInput {
	@Field(() => MateriaCategoryCreateWithoutNextInput, { nullable: true })
	@Type(() => MateriaCategoryCreateWithoutNextInput)
	create?: MateriaCategoryCreateWithoutNextInput;

	@Field(() => MateriaCategoryCreateOrConnectWithoutNextInput, {
		nullable: true,
	})
	@Type(() => MateriaCategoryCreateOrConnectWithoutNextInput)
	connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput;

	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
