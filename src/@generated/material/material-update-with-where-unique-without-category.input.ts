import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialUpdateWithoutCategoryInput } from './material-update-without-category.input';

@InputType()
export class MaterialUpdateWithWhereUniqueWithoutCategoryInput {
	@Field(() => MaterialWhereUniqueInput, { nullable: false })
	@Type(() => MaterialWhereUniqueInput)
	where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

	@Field(() => MaterialUpdateWithoutCategoryInput, { nullable: false })
	@Type(() => MaterialUpdateWithoutCategoryInput)
	data!: MaterialUpdateWithoutCategoryInput;
}
