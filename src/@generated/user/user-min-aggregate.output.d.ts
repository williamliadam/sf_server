import { Role } from '../prisma/role.enum';
export declare class UserMinAggregate {
    id?: number;
    email?: string;
    name?: string;
    password?: string;
    phone?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
}
