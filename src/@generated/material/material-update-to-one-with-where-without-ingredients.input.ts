import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';
import { MaterialUpdateWithoutIngredientsInput } from './material-update-without-ingredients.input';

@InputType()
export class MaterialUpdateToOneWithWhereWithoutIngredientsInput {
	@Field(() => MaterialWhereInput, { nullable: true })
	@Type(() => MaterialWhereInput)
	where?: MaterialWhereInput;

	@Field(() => MaterialUpdateWithoutIngredientsInput, { nullable: false })
	@Type(() => MaterialUpdateWithoutIngredientsInput)
	data!: MaterialUpdateWithoutIngredientsInput;
}
