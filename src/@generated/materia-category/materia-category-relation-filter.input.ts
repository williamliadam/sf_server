import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';

@InputType()
export class MateriaCategoryRelationFilter {
	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	is?: MateriaCategoryWhereInput;

	@Field(() => MateriaCategoryWhereInput, { nullable: true })
	isNot?: MateriaCategoryWhereInput;
}
