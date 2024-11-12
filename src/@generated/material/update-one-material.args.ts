import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialUpdateInput } from './material-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@ArgsType()
export class UpdateOneMaterialArgs {

    @Field(() => MaterialUpdateInput, {nullable:false})
    @Type(() => MaterialUpdateInput)
    data!: MaterialUpdateInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:false})
    @Type(() => MaterialWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
