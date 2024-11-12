import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BodyDetailUpdateManyMutationInput } from './body-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BodyDetailWhereInput } from './body-detail-where.input';

@ArgsType()
export class UpdateManyBodyDetailArgs {

    @Field(() => BodyDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => BodyDetailUpdateManyMutationInput)
    data!: BodyDetailUpdateManyMutationInput;

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    where?: BodyDetailWhereInput;
}
