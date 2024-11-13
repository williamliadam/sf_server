import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialScalarWhereInput } from './material-scalar-where.input';
import { Type } from 'class-transformer';
import { MaterialUpdateManyMutationInput } from './material-update-many-mutation.input';

@InputType()
export class MaterialUpdateManyWithWhereWithoutCategoryInput {
	@Field(() => MaterialScalarWhereInput, { nullable: false })
	@Type(() => MaterialScalarWhereInput)
	where!: MaterialScalarWhereInput;

	@Field(() => MaterialUpdateManyMutationInput, { nullable: false })
	@Type(() => MaterialUpdateManyMutationInput)
	data!: MaterialUpdateManyMutationInput;
}
