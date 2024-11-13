import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';

@InputType()
export class MateriaCategoryListRelationFilter {
	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	every?: MateriaCategoryWhereInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	some?: MateriaCategoryWhereInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	none?: MateriaCategoryWhereInput;
}
