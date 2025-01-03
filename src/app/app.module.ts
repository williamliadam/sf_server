import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { AuthModule } from '../auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { BodyDetailModule } from '../body-detail/body-detail.module';
import { RecipeModule } from '../recipe/recipe.module';
import { RedisCache, WeChatModule } from 'nest-wechat';
import { Cache } from 'cache-manager';
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env.local', '.env'],
			isGlobal: true,
		}),
		CacheModule.register({
			ttl: 30, // seconds
			max: 10, // maximum number of items in cache
			store: redisStore,
			host: process.env.REDIS_HOST,
			port: Number(process.env.REDIS_PORT),
			isGlobal: true,
		}),
		MailerModule.forRoot({
			transport: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				secure: false,
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASSWORD,
				},
			},
			defaults: {
				from: process.env.SMTP_USER,
			},
			template: {
				dir: `${process.cwd()}/templates/`,
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				},
			},
		}),
		WeChatModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService, CACHE_MANAGER],
			useFactory: (configService: ConfigService, cache: Cache) => ({
				appId: configService.get('WX_APPID'),
				secret: configService.get('WX_SECRET'),
				token: configService.get('WX_TOKEN'),
				encodingAESKey: configService.get('WX_AESKEY'),
				cacheAdapter: new RedisCache(cache),
				debug: true,
			}),
			isGlobal: true,
		}),
		UserModule,
		PostModule,
		RecipeModule,
		AuthModule,
		BodyDetailModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), '../schema.gql'),
			sortSchema: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
