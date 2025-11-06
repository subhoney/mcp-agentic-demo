import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
    @Get()
    getWelcomePage(@Res() res: Response) {
        return res.sendFile(join(__dirname, '..', 'views', 'index.html'));
    }
}
