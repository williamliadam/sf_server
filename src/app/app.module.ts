import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [ConfigModule.forRoot(), UserModule, PostModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
