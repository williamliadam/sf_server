import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateWithoutLastInput } from './materia-category-create-without-last.input';
import { Type } from 'class-transformer';
import { MateriaCategoryCreateOrConnectWithoutLastInput } from './materia-category-create-or-connect-without-last.input';
import { MateriaCategoryUpsertWithWhereUniqueWithoutLastInput } from './materia-category-upsert-with-where-unique-without-last.input';
import { MateriaCategoryCreateManyLastInputEnvelope } from './materia-category-create-many-last-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MateriaCategoryWhereUniqueInput } from './materia-category-where-unique.input';
import { MateriaCategoryUpdateWithWhereUniqueWithoutLastInput } from './materia-category-update-with-where-unique-without-last.input';
import { MateriaCategoryUpdateManyWithWhereWithoutLastInput } from './materia-category-update-many-with-where-without-last.input';
import { MateriaCategoryScalarWhereInput } from './materia-category-scalar-where.input';

@InputType()
export class MateriaCategoryUpdateManyWithoutLastNestedInput {
	@Field(() => [MateriaCategoryCreateWithoutLastInput], { nullable: true })
	@Type(() => MateriaCategoryCreateWithoutLastInput)
	create?: Array<MateriaCategoryCreateWithoutLastInput>;

	@Field(() => [MateriaCategoryCreateOrConnectWithoutLastInput], {
		nullable: true,
	})
	@Type(() => MateriaCategoryCreateOrConnectWithoutLastInput)
	connectOrCreate?: Array<MateriaCategoryCreateOrConnectWithoutLastInput>;

	@Field(() => [MateriaCategoryUpsertWithWhereUniqueWithoutLastInput], {
		nullable: true,
	})
	@Type(() => MateriaCategoryUpsertWithWhereUniqueWithoutLastInput)
	upsert?: Array<MateriaCategoryUpsertWithWhereUniqueWithoutLastInput>;

	@Field(() => MateriaCategoryCreateManyLastInputEnvelope, { nullable: true })
	@Type(() => MateriaCategoryCreateManyLastInputEnvelope)
	createMany?: MateriaCategoryCreateManyLastInputEnvelope;

	@Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	set?: Array<Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>>;

	@Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	disconnect?: Array<
		Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>
	>;

	@Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	delete?: Array<
		Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>
	>;

	@Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
	@Type(() => MateriaCategoryWhereUniqueInput)
	connect?: Array<
		Prisma.AtLeast<MateriaCategoryWhereUniqueInput, 'id' | 'code'>
	>;

	@Field(() => [MateriaCategoryUpdateWithWhereUniqueWithoutLastInput], {
		nullable: true,
	})
	@Type(() => MateriaCategoryUpdateWithWhereUniqueWithoutLastInput)
	update?: Array<MateriaCategoryUpdateWithWhereUniqueWithoutLastInput>;

	@Field(() => [MateriaCategoryUpdateManyWithWhereWithoutLastInput], {
		nullable: true,
	})
	@Type(() => MateriaCategoryUpdateManyWithWhereWithoutLastInput)
	updateMany?: Array<MateriaCategoryUpdateManyWithWhereWithoutLastInput>;

	@Field(() => [MateriaCategoryScalarWhereInput], { nullable: true })
	@Type(() => MateriaCategoryScalarWhereInput)
	deleteMany?: Array<MateriaCategoryScalarWhereInput>;
}
