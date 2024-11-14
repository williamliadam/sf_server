import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailCreateInput } from './body-detail-create.input';
import { BodyDetailUpdateInput } from './body-detail-update.input';
export declare class UpsertOneBodyDetailArgs {
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    create: BodyDetailCreateInput;
    update: BodyDetailUpdateInput;
}
