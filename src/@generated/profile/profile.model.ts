import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Goal } from '../prisma/goal.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: true })
	avatar!: string | null;

	@Field(() => String, { nullable: true })
	nickName!: string | null;

	@Field(() => Int, { nullable: false })
	userId!: number;

	@Field(() => Date, { nullable: false })
	createdAt!: Date;

	@Field(() => Date, { nullable: false })
	updatedAt!: Date;

	@Field(() => Goal, { nullable: false, defaultValue: 'KEEP' })
	goal!: keyof typeof Goal;

	@Field(() => User, { nullable: false })
	user?: User;
}
