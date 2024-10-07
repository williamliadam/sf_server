import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [ConfigModule.forRoot(), UserModule, PostModule, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
