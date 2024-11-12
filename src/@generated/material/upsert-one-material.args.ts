import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateInput } from './material-create.input';
import { MaterialUpdateInput } from './material-update.input';

@ArgsType()
export class UpsertOneMaterialArgs {

    @Field(() => MaterialWhereUniqueInput, {nullable:false})
    @Type(() => MaterialWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MaterialCreateInput, {nullable:false})
    @Type(() => MaterialCreateInput)
    create!: MaterialCreateInput;

    @Field(() => MaterialUpdateInput, {nullable:false})
    @Type(() => MaterialUpdateInput)
    update!: MaterialUpdateInput;
}
