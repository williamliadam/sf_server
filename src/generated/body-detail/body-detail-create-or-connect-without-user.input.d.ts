import { Prisma } from '@prisma/client';
import { BodyDetailWhereUniqueInput } from './body-detail-where-unique.input';
import { BodyDetailCreateWithoutUserInput } from './body-detail-create-without-user.input';
export declare class BodyDetailCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<BodyDetailWhereUniqueInput, 'id' | 'userId'>;
    create: BodyDetailCreateWithoutUserInput;
}
