import { registerEnumType } from '@nestjs/graphql';

export enum MateriaCategoryScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    lastId = "lastId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MateriaCategoryScalarFieldEnum, { name: 'MateriaCategoryScalarFieldEnum', description: undefined })
