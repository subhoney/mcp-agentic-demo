import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Serve static files
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('html');

    await app.listen(3000);
    console.log(`
  ┌─────────────────────────────────────────────────────────┐
  │                                                         │
  │   🚀 Syniti Lunch & Learn Application Started!        │
  │                                                         │
  │   📍 URL: http://localhost:3000                        │
  │                                                         │
  │   📚 Topic: MCP Servers & Agentic AI                   │
  │                                                         │
  └─────────────────────────────────────────────────────────┘
  `);
}
bootstrap();
