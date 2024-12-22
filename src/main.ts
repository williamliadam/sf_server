import { NestFactory } from '@nestjs/core';
import * as fs from 'node:fs';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

const httpsOptions = {
	key: fs.readFileSync('/home/secrets/private.pem'),
	cert: fs.readFileSync('/home/secrets/public.pem'),
};
async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			https: httpsOptions
		}),
		{ cors: true }
	);
	app.useGlobalPipes(new ValidationPipe());
	const config = new DocumentBuilder()
		.setTitle('SF_Server')
		.setDescription('single food app server')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	await app.listen(process.env.APP_PORT || 3000, '0.0.0.0');
}
bootstrap();
