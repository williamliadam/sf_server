import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Nutrition } from '../nutrition/nutrition.model';
import { Material } from '../material/material.model';

@ObjectType()
export class NutritionRow {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    nutirtionId!: number;

    @Field(() => Int, {nullable:false})
    percent!: number;

    @Field(() => Int, {nullable:false})
    belongToId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Nutrition, {nullable:false})
    nutirtion?: Nutrition;

    @Field(() => Material, {nullable:false})
    belongMaterial?: Material;
}
