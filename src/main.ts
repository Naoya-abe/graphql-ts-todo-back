import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORSの設定
  app.enableCors({ credentials: true, origin: ['http://localhost:3000'] });
  // DTO、バリデーションの設定。whitelist:trueとすることでクライアントから送信されたデータの内DTOに含まれないデータは省かれる
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
