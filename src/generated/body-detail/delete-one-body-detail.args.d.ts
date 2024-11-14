import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
export declare class DeleteOneBodyDetailArgs {
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
}
