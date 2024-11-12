import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMethodArgs {

    @Field(() => MethodWhereUniqueInput, {nullable:false})
    @Type(() => MethodWhereUniqueInput)
    where!: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
}
