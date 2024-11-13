import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { Type } from 'class-transformer';
import { DishTemplateCreateInput } from './dish-template-create.input';
import { DishTemplateUpdateInput } from './dish-template-update.input';

@ArgsType()
export class UpsertOneDishTemplateArgs {
	@Field(() => DishTemplateWhereUniqueInput, { nullable: false })
	@Type(() => DishTemplateWhereUniqueInput)
	where!: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;

	@Field(() => DishTemplateCreateInput, { nullable: false })
	@Type(() => DishTemplateCreateInput)
	create!: DishTemplateCreateInput;

	@Field(() => DishTemplateUpdateInput, { nullable: false })
	@Type(() => DishTemplateUpdateInput)
	update!: DishTemplateUpdateInput;
}
