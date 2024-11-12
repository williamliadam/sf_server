import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateManyCategoryInput } from './material-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class MaterialCreateManyCategoryInputEnvelope {

    @Field(() => [MaterialCreateManyCategoryInput], {nullable:false})
    @Type(() => MaterialCreateManyCategoryInput)
    data!: Array<MaterialCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
