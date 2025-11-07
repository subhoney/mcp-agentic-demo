import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Serve static files from public directory
    app.useStaticAssets(join(__dirname, '..', 'public'));
    
    // Serve reveal.js static files from node_modules
    app.useStaticAssets(join(__dirname, '..', 'node_modules'), {
        prefix: '/node_modules/'
    });
    
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
  │   ✨ Now with reveal.js presentation mode!            │
  │                                                         │
  └─────────────────────────────────────────────────────────┘
  `);
}
bootstrap();
