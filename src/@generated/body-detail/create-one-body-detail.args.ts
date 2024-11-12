import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailCreateInput } from './body-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBodyDetailArgs {

    @Field(() => BodyDetailCreateInput, {nullable:false})
    @Type(() => BodyDetailCreateInput)
    data!: BodyDetailCreateInput;
}
