import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryCreateInput } from './materia-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMateriaCategoryArgs {
	@Field(() => MateriaCategoryCreateInput, { nullable: false })
	@Type(() => MateriaCategoryCreateInput)
	data!: MateriaCategoryCreateInput;
}
