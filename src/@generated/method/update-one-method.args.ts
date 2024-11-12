import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodUpdateInput } from './method-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';

@ArgsType()
export class UpdateOneMethodArgs {

    @Field(() => MethodUpdateInput, {nullable:false})
    @Type(() => MethodUpdateInput)
    data!: MethodUpdateInput;

    @Field(() => MethodWhereUniqueInput, {nullable:false})
    @Type(() => MethodWhereUniqueInput)
    where!: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
}
