import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryScalarWhereInput } from './materia-category-scalar-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryUpdateManyMutationInput } from './materia-category-update-many-mutation.input';

@InputType()
export class MateriaCategoryUpdateManyWithWhereWithoutLastInput {

    @Field(() => MateriaCategoryScalarWhereInput, {nullable:false})
    @Type(() => MateriaCategoryScalarWhereInput)
    where!: MateriaCategoryScalarWhereInput;

    @Field(() => MateriaCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => MateriaCategoryUpdateManyMutationInput)
    data!: MateriaCategoryUpdateManyMutationInput;
}
