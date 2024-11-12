import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyDetailWhereInput } from './body-detail-where.input';
import { Type } from 'class-transformer';
import { BodyDetailUpdateWithoutUserInput } from './body-detail-update-without-user.input';

@InputType()
export class BodyDetailUpdateToOneWithWhereWithoutUserInput {

    @Field(() => BodyDetailWhereInput, {nullable:true})
    @Type(() => BodyDetailWhereInput)
    where?: BodyDetailWhereInput;

    @Field(() => BodyDetailUpdateWithoutUserInput, {nullable:false})
    @Type(() => BodyDetailUpdateWithoutUserInput)
    data!: BodyDetailUpdateWithoutUserInput;
}
