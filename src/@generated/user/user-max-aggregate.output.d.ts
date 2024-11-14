import { Role } from '../prisma/role.enum';
export declare class UserMaxAggregate {
    id?: number;
    email?: string;
    name?: string;
    password?: string;
    phone?: string;
    wxId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
}
