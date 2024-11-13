import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MaterialListRelationFilter } from '../material/material-list-relation-filter.input';
import { MateriaCategoryListRelationFilter } from './materia-category-list-relation-filter.input';
import { MateriaCategoryNullableRelationFilter } from './materia-category-nullable-relation-filter.input';

@InputType()
export class MateriaCategoryWhereInput {
	@Field(() => [MateriaCategoryWhereInput], { nullable: true })
	AND?: Array<MateriaCategoryWhereInput>;

	@Field(() => [MateriaCategoryWhereInput], { nullable: true })
	OR?: Array<MateriaCategoryWhereInput>;

	@Field(() => [MateriaCategoryWhereInput], { nullable: true })
	NOT?: Array<MateriaCategoryWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	code?: StringFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => IntNullableFilter, { nullable: true })
	lastId?: IntNullableFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => MaterialListRelationFilter, { nullable: true })
	materials?: MaterialListRelationFilter;

	@Field(() => MateriaCategoryListRelationFilter, { nullable: true })
	next?: MateriaCategoryListRelationFilter;

	@Field(() => MateriaCategoryNullableRelationFilter, { nullable: true })
	last?: MateriaCategoryNullableRelationFilter;
}
