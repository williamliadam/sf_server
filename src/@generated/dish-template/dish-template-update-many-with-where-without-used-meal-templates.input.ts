import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishTemplateScalarWhereInput } from './dish-template-scalar-where.input';
import { Type } from 'class-transformer';
import { DishTemplateUpdateManyMutationInput } from './dish-template-update-many-mutation.input';

@InputType()
export class DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput {
	@Field(() => DishTemplateScalarWhereInput, { nullable: false })
	@Type(() => DishTemplateScalarWhereInput)
	where!: DishTemplateScalarWhereInput;

	@Field(() => DishTemplateUpdateManyMutationInput, { nullable: false })
	@Type(() => DishTemplateUpdateManyMutationInput)
	data!: DishTemplateUpdateManyMutationInput;
}
