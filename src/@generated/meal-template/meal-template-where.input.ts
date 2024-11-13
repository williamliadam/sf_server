import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DishTemplateListRelationFilter } from '../dish-template/dish-template-list-relation-filter.input';

@InputType()
export class MealTemplateWhereInput {
	@Field(() => [MealTemplateWhereInput], { nullable: true })
	AND?: Array<MealTemplateWhereInput>;

	@Field(() => [MealTemplateWhereInput], { nullable: true })
	OR?: Array<MealTemplateWhereInput>;

	@Field(() => [MealTemplateWhereInput], { nullable: true })
	NOT?: Array<MealTemplateWhereInput>;

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter;

	@Field(() => StringFilter, { nullable: true })
	name?: StringFilter;

	@Field(() => IntFilter, { nullable: true })
	userId?: IntFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter;

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter;

	@Field(() => UserRelationFilter, { nullable: true })
	createBy?: UserRelationFilter;

	@Field(() => DishTemplateListRelationFilter, { nullable: true })
	dishTemplates?: DishTemplateListRelationFilter;
}
