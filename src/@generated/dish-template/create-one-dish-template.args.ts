import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateCreateInput } from './dish-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDishTemplateArgs {
	@Field(() => DishTemplateCreateInput, { nullable: false })
	@Type(() => DishTemplateCreateInput)
	data!: DishTemplateCreateInput;
}
