import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IngredientListRelationFilter } from '../ingredient/ingredient-list-relation-filter.input';

@InputType()
export class MateriaUnitWhereInput {

    @Field(() => [MateriaUnitWhereInput], {nullable:true})
    AND?: Array<MateriaUnitWhereInput>;

    @Field(() => [MateriaUnitWhereInput], {nullable:true})
    OR?: Array<MateriaUnitWhereInput>;

    @Field(() => [MateriaUnitWhereInput], {nullable:true})
    NOT?: Array<MateriaUnitWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    toKilo?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IngredientListRelationFilter, {nullable:true})
    ingredients?: IngredientListRelationFilter;
}
