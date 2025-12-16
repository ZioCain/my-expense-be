import { Controller, Delete, Get, MaxFileSizeValidator, Param, ParseFilePipe, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Media } from './media.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import type { Response } from 'express';
import * as fs from 'fs';

const BASE_PATH:string = './uploads/images';

@Controller('files')
export class FileController {

	constructor(
		@InjectRepository(Media)
		private repo: Repository<Media>,
	) { }

	@Post('')
	@UseInterceptors(
		FileInterceptor('image', {
			storage: diskStorage({
				destination: BASE_PATH,
				filename: (req, file, callback) => {
					// Generate a unique filename using timestamp + original extension
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					const extension = extname(file.originalname);
					const filename = `${uniqueSuffix}${extension}`;
					callback(null, filename);
				},
			}),
			fileFilter: (req, file, callback) => {
				// Simple filter for common image types
				if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
					return callback(new Error('Only image files are allowed!'), false);
				}
				callback(null, true);
			},
		}),
	)
	async uploadCustomFile(
		@UploadedFile(
			new ParseFilePipe({
				validators: [
					// Enforce a maximum file size of 10MB
					new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }),
				],
			}),
		)
		file: Express.Multer.File,
	) {
		console.log(file);
		const record = this.repo.create({
			path: file.filename
		});
		this.repo.save(record);
		return {
			message: 'File uploaded successfully',
			filename: file.filename,
		};
	}

	@Get()
	async listFiles(): Promise<Media[]> {
		return this.repo.find();
	}

	@Get(":filename")
	downloadFile(@Param('filename') filename: string, @Res() res: Response) {
		const filePath = join(process.cwd(), 'uploads/images', filename);
		res.download(filePath, filename, (err) => {
			if (err) {
				// Handle error, e.g., file not found
				res.status(404).send('File not found');
			}
		});
	}

	@Delete(":id")
	async deleteFile(@Param('id') id: string, @Res() res: Response){
		const file = await this.repo.findOneBy({id});
		let deleted: boolean = false;
		try{
			fs.unlinkSync(`${BASE_PATH}/${file?.path}`);
			deleted = true;
		}catch(err){
			console.log("Cannot delete file");
		}
		return this.repo.delete(id);
	}
}