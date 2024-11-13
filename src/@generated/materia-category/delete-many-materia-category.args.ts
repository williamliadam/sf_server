import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMateriaCategoryArgs {
	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	@Type(() => MateriaCategoryWhereInput)
	where?: MateriaCategoryWhereInput;
}
