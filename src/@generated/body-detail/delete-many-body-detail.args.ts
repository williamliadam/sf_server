import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBodyDetailArgs {

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    where?: BodyDetailWhereInput;
}
