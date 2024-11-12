import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { BodyDetail } from '../body-detail/body-detail.model';
import { Post } from '../post/post.model';
import { Recipe } from '../recipe/recipe.model';
import { MealTemplate } from '../meal-template/meal-template.model';
import { MealPlan } from '../meal-plan/meal-plan.model';
import { DishPlan } from '../dish-plan/dish-plan.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    wxId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => BodyDetail, {nullable:true})
    bodyDetail?: BodyDetail | null;

    @Field(() => [Post], {nullable:true})
    myPosts?: Array<Post>;

    @Field(() => [Recipe], {nullable:true})
    myRecipes?: Array<Recipe>;

    @Field(() => [MealTemplate], {nullable:true})
    myMealTemplates?: Array<MealTemplate>;

    @Field(() => [MealPlan], {nullable:true})
    myMealPlans?: Array<MealPlan>;

    @Field(() => [DishPlan], {nullable:true})
    chargeDishPlans?: Array<DishPlan>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
