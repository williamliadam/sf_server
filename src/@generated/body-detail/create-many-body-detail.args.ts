import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailCreateManyInput } from './body-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBodyDetailArgs {

    @Field(() => [BodyDetailCreateManyInput], {nullable:false})
    @Type(() => BodyDetailCreateManyInput)
    data!: Array<BodyDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
