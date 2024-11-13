import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateCreateManyInput } from './dish-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDishTemplateArgs {
	@Field(() => [DishTemplateCreateManyInput], { nullable: false })
	@Type(() => DishTemplateCreateManyInput)
	data!: Array<DishTemplateCreateManyInput>;

	@Field(() => Boolean, { nullable: true })
	skipDuplicates?: boolean;
}
