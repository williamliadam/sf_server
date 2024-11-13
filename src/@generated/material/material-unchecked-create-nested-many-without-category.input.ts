import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutCategoryInput } from './material-create-or-connect-without-category.input';
import { MaterialCreateManyCategoryInputEnvelope } from './material-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@InputType()
export class MaterialUncheckedCreateNestedManyWithoutCategoryInput {
	@Field(() => [MaterialCreateWithoutCategoryInput], { nullable: true })
	@Type(() => MaterialCreateWithoutCategoryInput)
	create?: Array<MaterialCreateWithoutCategoryInput>;

	@Field(() => [MaterialCreateOrConnectWithoutCategoryInput], {
		nullable: true,
	})
	@Type(() => MaterialCreateOrConnectWithoutCategoryInput)
	connectOrCreate?: Array<MaterialCreateOrConnectWithoutCategoryInput>;

	@Field(() => MaterialCreateManyCategoryInputEnvelope, { nullable: true })
	@Type(() => MaterialCreateManyCategoryInputEnvelope)
	createMany?: MaterialCreateManyCategoryInputEnvelope;

	@Field(() => [MaterialWhereUniqueInput], { nullable: true })
	@Type(() => MaterialWhereUniqueInput)
	connect?: Array<Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>>;
}
