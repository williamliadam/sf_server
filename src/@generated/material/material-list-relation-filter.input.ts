import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';

@InputType()
export class MaterialListRelationFilter {

    @Field(() => MaterialWhereInput, {nullable:true})
    every?: MaterialWhereInput;

    @Field(() => MaterialWhereInput, {nullable:true})
    some?: MaterialWhereInput;

    @Field(() => MaterialWhereInput, {nullable:true})
    none?: MaterialWhereInput;
}
