import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';
import { AuthModule } from 'src/auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
@Module({
	imports: [ConfigModule.forRoot(), MailerModule.forRoot({
		transport: {
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: false, // upgrade later with STARTTLS
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		},
		defaults: {
			from: process.env.SMTP_FROM,
		},
		template: {
			dir: `${process.cwd()}../templates/`,
			adapter: new HandlebarsAdapter(), // or new PugAdapter()
			options: {
				strict: true,
			},
		},
	}), UserModule, PostModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
