import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MateriaCategoryCount {

    @Field(() => Int, {nullable:false})
    materials?: number;

    @Field(() => Int, {nullable:false})
    next?: number;
}
