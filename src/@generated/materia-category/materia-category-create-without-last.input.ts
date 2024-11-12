import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateNestedManyWithoutCategoryInput } from '../material/material-create-nested-many-without-category.input';
import { MateriaCategoryCreateNestedManyWithoutLastInput } from './materia-category-create-nested-many-without-last.input';

@InputType()
export class MateriaCategoryCreateWithoutLastInput {

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

    @Field(() => MateriaCategoryCreateNestedManyWithoutLastInput, {nullable:true})
    next?: MateriaCategoryCreateNestedManyWithoutLastInput;
}
