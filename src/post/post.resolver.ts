import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from 'src/@generated/post/post.model';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';
import { CurrentUser } from 'src/auth/decorators/user.decorator.graphql';
import { User } from '@prisma/client';

@Resolver(() => Post)
export class PostResolver {
	constructor(private readonly postService: PostService) {}

	@Query(() => [Post], { nullable: true })
	async getPosts(@CurrentUser() user: User) {
		return this.postService.findAll({
			where: {
				authorId: user.id,
			},
		});
	}
}
