import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller('post')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Post()
	create(
		@Body() postData: { title: string; content?: string; authorEmail: string },
	): Promise<PostModel> {
		const { title, content, authorEmail } = postData;
		return this.postService.create({
			title,
			content,
			author: {
				connect: { email: authorEmail },
			},
		});
	}
	@Get('feed')
	async getPublishedPosts(): Promise<PostModel[]> {
		return this.postService.findAll({
			where: { published: true },
		});
	}

	@Get('filtered-posts/:searchString')
	async getFilteredPosts(
		@Param('searchString') searchString: string,
	): Promise<PostModel[]> {
		return this.postService.findAll({
			where: {
				OR: [
					{
						title: { contains: searchString },
					},
					{
						content: { contains: searchString },
					},
				],
			},
		});
	}

	@Put('publish/:id')
	async publishPost(@Param('id') id: string): Promise<PostModel> {
		return this.postService.update({
			where: { id: Number(id) },
			data: { published: true },
		});
	}

	@Delete(':id')
	async deletePost(@Param('id') id: string): Promise<PostModel> {
		return this.postService.remove({ id: Number(id) });
	}
}
