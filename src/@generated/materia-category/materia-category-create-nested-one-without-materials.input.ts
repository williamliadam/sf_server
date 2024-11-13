import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from './materia-category-create-or-connect-without-materials.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';

@InputType()
export class MateriaCategoryCreateNestedOneWithoutMaterialsInput {
	@Field(() => MateriaCategoryCreateWithoutMaterialsInput, { nullable: true })
	@Type(() => MateriaCategoryCreateWithoutMaterialsInput)
	create?: MateriaCategoryCreateWithoutMaterialsInput;

	@Field(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput, {
		nullable: true,
	})
	@Type(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput)
	connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput;

	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	connect?: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;
}
