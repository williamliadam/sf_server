import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTemplateUpdateManyMutationInput } from './dish-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DishTemplateWhereInput } from './dish-template-where.input';

@ArgsType()
export class UpdateManyDishTemplateArgs {
	@Field(() => DishTemplateUpdateManyMutationInput, { nullable: false })
	@Type(() => DishTemplateUpdateManyMutationInput)
	data!: DishTemplateUpdateManyMutationInput;

	@Field(() => DishTemplateWhereInput, { nullable: true })
	@Type(() => DishTemplateWhereInput)
	where?: DishTemplateWhereInput;
}
