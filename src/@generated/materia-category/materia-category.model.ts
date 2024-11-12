import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Material } from '../material/material.model';
import { MateriaCategoryCount } from './materia-category-count.output';

@ObjectType()
export class MateriaCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    lastId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Material], {nullable:true})
    materials?: Array<Material>;

    @Field(() => [MateriaCategory], {nullable:true})
    next?: Array<MateriaCategory>;

    @Field(() => MateriaCategory, {nullable:true})
    last?: MateriaCategory | null;

    @Field(() => MateriaCategoryCount, {nullable:false})
    _count?: MateriaCategoryCount;
}
