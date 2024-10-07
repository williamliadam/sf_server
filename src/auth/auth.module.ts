import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Module({
	imports: [
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' },
		}),
		UserModule,
	],
	providers: [
    AuthService,
		{
      provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
  controllers: [AuthController],

})
export class AuthModule {}
