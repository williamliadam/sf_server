import { BodyDetailUpdateInput } from './body-detail-update.input';
import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
export declare class UpdateOneBodyDetailArgs {
    data: BodyDetailUpdateInput;
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
