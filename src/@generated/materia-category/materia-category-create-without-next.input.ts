import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateNestedManyWithoutCategoryInput } from '../material/material-create-nested-many-without-category.input';
import { MateriaCategoryCreateNestedOneWithoutNextInput } from './materia-category-create-nested-one-without-next.input';

@InputType()
export class MateriaCategoryCreateWithoutNextInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MaterialCreateNestedManyWithoutCategoryInput, {nullable:true})
    materials?: MaterialCreateNestedManyWithoutCategoryInput;

    @Field(() => MateriaCategoryCreateNestedOneWithoutNextInput, {nullable:true})
    last?: MateriaCategoryCreateNestedOneWithoutNextInput;
}
