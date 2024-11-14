import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostCreateManyAuthorInputEnvelope } from './post-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
export declare class PostUpdateManyWithoutAuthorNestedInput {
    create?: Array<PostCreateWithoutAuthorInput>;
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<PostScalarWhereInput>;
}
