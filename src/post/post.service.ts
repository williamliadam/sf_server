import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
	constructor(private prisma: PrismaService) {}

	create(data: Prisma.PostCreateInput): Promise<Post> {
		return this.prisma.post.create({
			data,
		});
	}

	findAll(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.PostWhereUniqueInput;
		where?: Prisma.PostWhereInput;
		orderBy?: Prisma.PostOrderByWithRelationInput;
	}): Promise<Post[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.post.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}

	findOne(
		userWhereUniqueInput: Prisma.PostWhereUniqueInput,
	): Promise<Post | null> {
		return this.prisma.post.findUnique({
			where: userWhereUniqueInput,
		});
	}

	update(params: {
		where: Prisma.PostWhereUniqueInput;
		data: Prisma.PostUpdateInput;
	}): Promise<Post> {
		const { where, data } = params;
		return this.prisma.post.update({
			data,
			where,
		});
	}

	remove(where: Prisma.PostWhereUniqueInput): Promise<Post> {
		return this.prisma.post.delete({
			where,
		});
	}
}
