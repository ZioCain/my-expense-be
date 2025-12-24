import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HeaderCheckMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const secretHeader = req.headers['who-dis'];
		const expectedValue = 'eWVhaCwgaXQncyBtZQ==';

		if (!req.originalUrl.includes('/files/') && secretHeader !== expectedValue) {
			throw new UnauthorizedException('Invalid or missing required header');
		}

		next();
	}
}