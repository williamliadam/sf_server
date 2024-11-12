import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MaterialListRelationFilter } from '../material/material-list-relation-filter.input';
import { MateriaCategoryListRelationFilter } from './materia-category-list-relation-filter.input';
import { MateriaCategoryNullableRelationFilter } from './materia-category-nullable-relation-filter.input';

@InputType()
export class MateriaCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [MateriaCategoryWhereInput], {nullable:true})
    AND?: Array<MateriaCategoryWhereInput>;

    @Field(() => [MateriaCategoryWhereInput], {nullable:true})
    OR?: Array<MateriaCategoryWhereInput>;

    @Field(() => [MateriaCategoryWhereInput], {nullable:true})
    NOT?: Array<MateriaCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lastId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MaterialListRelationFilter, {nullable:true})
    materials?: MaterialListRelationFilter;

    @Field(() => MateriaCategoryListRelationFilter, {nullable:true})
    next?: MateriaCategoryListRelationFilter;

    @Field(() => MateriaCategoryNullableRelationFilter, {nullable:true})
    last?: MateriaCategoryNullableRelationFilter;
}
