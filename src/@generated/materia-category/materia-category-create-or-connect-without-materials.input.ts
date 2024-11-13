import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateWithoutMaterialsInput } from './materia-category-create-without-materials.input';

@InputType()
export class MateriaCategoryCreateOrConnectWithoutMaterialsInput {
	@Field(() => MateriaCategoryWhereUniqueInput, { nullable: false })
	@Type(() => MateriaCategoryWhereUniqueInput)
	where!: Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MateriaCategoryCreateWithoutMaterialsInput, { nullable: false })
	@Type(() => MateriaCategoryCreateWithoutMaterialsInput)
	create!: MateriaCategoryCreateWithoutMaterialsInput;
}
