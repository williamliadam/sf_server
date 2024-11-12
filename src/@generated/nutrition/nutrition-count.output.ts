import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionCount {

    @Field(() => Int, {nullable:false})
    usedRow?: number;
}
