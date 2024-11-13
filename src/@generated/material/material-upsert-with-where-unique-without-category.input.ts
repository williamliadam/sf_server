import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialUpdateWithoutCategoryInput } from './material-update-without-category.input';
import { MaterialCreateWithoutCategoryInput } from './material-create-without-category.input';

@InputType()
export class MaterialUpsertWithWhereUniqueWithoutCategoryInput {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MaterialUpdateWithoutCategoryInput, { nullable: false })
	@Type(() => MaterialUpdateWithoutCategoryInput)
	update!: MaterialUpdateWithoutCategoryInput;

	@Field(() => MaterialCreateWithoutCategoryInput, { nullable: false })
	@Type(() => MaterialCreateWithoutCategoryInput)
	create!: MaterialCreateWithoutCategoryInput;
}
