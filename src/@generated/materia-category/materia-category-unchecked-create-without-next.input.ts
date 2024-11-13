import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MaterialUncheckedCreateNestedManyWithoutCategoryInput } from '../material/material-unchecked-create-nested-many-without-category.input';

@InputType()
export class MateriaCategoryUncheckedCreateWithoutNextInput {
	@Field(() => Int, { nullable: true })
	id?: number;

	@Field(() => String, { nullable: false })
	code!: string;

	@Field(() => String, { nullable: false })
	name!: string;

	@Field(() => Int, { nullable: true })
	lastId?: number;

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string;

	@Field(() => MaterialUncheckedCreateNestedManyWithoutCategoryInput, {
		nullable: true,
	})
	materials?: MaterialUncheckedCreateNestedManyWithoutCategoryInput;
}
