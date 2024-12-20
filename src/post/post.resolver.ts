import { Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from '../@generated/post/post.model';
import { User } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/user.decorator.graphql';

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
