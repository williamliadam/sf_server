import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';

@InputType()
export class MaterialCreateOrConnectWithoutCategoryInput {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MaterialCreateWithoutCategoryInput, { nullable: false })
	@Type(() => MaterialCreateWithoutCategoryInput)
	create!: MaterialCreateWithoutCategoryInput;
}
