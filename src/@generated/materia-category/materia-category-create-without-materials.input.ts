import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateNestedManyWithoutLastInput } from './materia-category-create-nested-many-without-last.input';
import { MateriaCategoryCreateNestedOneWithoutNextInput } from './materia-category-create-nested-one-without-next.input';

@InputType()
export class MateriaCategoryCreateWithoutMaterialsInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MateriaCategoryCreateNestedManyWithoutLastInput, {nullable:true})
    next?: MateriaCategoryCreateNestedManyWithoutLastInput;

    @Field(() => MateriaCategoryCreateNestedOneWithoutNextInput, {nullable:true})
    last?: MateriaCategoryCreateNestedOneWithoutNextInput;
}
