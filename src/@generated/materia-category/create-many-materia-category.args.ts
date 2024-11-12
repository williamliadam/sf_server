import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaCategoryCreateManyInput } from './materia-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMateriaCategoryArgs {

    @Field(() => [MateriaCategoryCreateManyInput], {nullable:false})
    @Type(() => MateriaCategoryCreateManyInput)
    data!: Array<MateriaCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
