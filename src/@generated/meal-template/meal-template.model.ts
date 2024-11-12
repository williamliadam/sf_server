import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { DishTemplate } from '../dish-template/dish-template.model';
import { MealTemplateCount } from './meal-template-count.output';

@ObjectType()
export class MealTemplate {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    createBy?: User;

    @Field(() => [DishTemplate], {nullable:true})
    dishTemplates?: Array<DishTemplate>;

    @Field(() => MealTemplateCount, {nullable:false})
    _count?: MealTemplateCount;
}
