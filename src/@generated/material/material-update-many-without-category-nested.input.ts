import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutCategoryInput } from './material-create-or-connect-without-category.input';
import { MaterialUpsertWithWhereUniqueWithoutCategoryInput } from './material-upsert-with-where-unique-without-category.input';
import { MaterialCreateManyCategoryInputEnvelope } from './material-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithWhereUniqueWithoutCategoryInput } from './material-update-with-where-unique-without-category.input';
import { MaterialUpdateManyWithWhereWithoutCategoryInput } from './material-update-many-with-where-without-category.input';
import { MaterialScalarWhereInput } from './material-scalar-where.input';

@InputType()
export class MaterialUpdateManyWithoutCategoryNestedInput {
	@Field(() => [MaterialCreateWithoutCategoryInput], { nullable: true })
	@Type(() => MaterialCreateWithoutCategoryInput)
	create?: Array<MaterialCreateWithoutCategoryInput>;

	@Field(() => [MaterialCreateOrConnectWithoutCategoryInput], {
		nullable: true,
	})
	@Type(() => MaterialCreateOrConnectWithoutCategoryInput)
	connectOrCreate?: Array<MaterialCreateOrConnectWithoutCategoryInput>;

	@Field(() => [MaterialUpsertWithWhereUniqueWithoutCategoryInput], {
		nullable: true,
	})
	@Type(() => MaterialUpsertWithWhereUniqueWithoutCategoryInput)
	upsert?: Array<MaterialUpsertWithWhereUniqueWithoutCategoryInput>;

	@Field(() => MaterialCreateManyCategoryInputEnvelope, { nullable: true })
	@Type(() => MaterialCreateManyCategoryInputEnvelope)
	createMany?: MaterialCreateManyCategoryInputEnvelope;

	@Field(() => [MaterialWhereUniqueInput], { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	set?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;

	@Field(() => [MaterialWhereUniqueInput], { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	disconnect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;

	@Field(() => [MaterialWhereUniqueInput], { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	delete?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;

	@Field(() => [MaterialWhereUniqueInput], { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;

	@Field(() => [MaterialUpdateWithWhereUniqueWithoutCategoryInput], {
		nullable: true,
	})
	@Type(() => MaterialUpdateWithWhereUniqueWithoutCategoryInput)
	update?: Array<MaterialUpdateWithWhereUniqueWithoutCategoryInput>;

	@Field(() => [MaterialUpdateManyWithWhereWithoutCategoryInput], {
		nullable: true,
	})
	@Type(() => MaterialUpdateManyWithWhereWithoutCategoryInput)
	updateMany?: Array<MaterialUpdateManyWithWhereWithoutCategoryInput>;

	@Field(() => [MaterialScalarWhereInput], { nullable: true })
	@Type(() => MaterialScalarWhereInput)
	deleteMany?: Array<MaterialScalarWhereInput>;
}
