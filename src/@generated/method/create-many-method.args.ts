import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MethodCreateManyInput } from './method-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMethodArgs {

    @Field(() => [MethodCreateManyInput], {nullable:false})
    @Type(() => MethodCreateManyInput)
    data!: Array<MethodCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
