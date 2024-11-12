import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryWhereInput } from './materia-category-where.input';
import { Type } from 'class-transformer';
import { MateriaCategoryUpdateWithoutNextInput } from './materia-category-update-without-next.input';

@InputType()
export class MateriaCategoryUpdateToOneWithWhereWithoutNextInput {

    @Field(() => MateriaCategoryWhereInput, {nullable:true})
    @Type(() => MateriaCategoryWhereInput)
    where?: MateriaCategoryWhereInput;

    @Field(() => MateriaCategoryUpdateWithoutNextInput, {nullable:false})
    @Type(() => MateriaCategoryUpdateWithoutNextInput)
    data!: MateriaCategoryUpdateWithoutNextInput;
}
