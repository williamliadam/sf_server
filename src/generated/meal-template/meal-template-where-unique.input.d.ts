import { MealTemplateWhereInput } from './meal-template-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DishTemplateListRelationFilter } from '../dish-template/dish-template-list-relation-filter.input';
export declare class MealTemplateWhereUniqueInput {
    id?: number;
    AND?: Array<MealTemplateWhereInput>;
    OR?: Array<MealTemplateWhereInput>;
    NOT?: Array<MealTemplateWhereInput>;
    name?: StringFilter;
    userId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    createBy?: UserRelationFilter;
    dishTemplates?: DishTemplateListRelationFilter;
}
