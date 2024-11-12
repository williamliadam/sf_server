import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MateriaCategoryCreateManyLastInput } from './materia-category-create-many-last.input';
import { Type } from 'class-transformer';

@InputType()
export class MateriaCategoryCreateManyLastInputEnvelope {

    @Field(() => [MateriaCategoryCreateManyLastInput], {nullable:false})
    @Type(() => MateriaCategoryCreateManyLastInput)
    data!: Array<MateriaCategoryCreateManyLastInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
