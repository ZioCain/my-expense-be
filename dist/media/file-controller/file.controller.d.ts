import { Media } from './media.entity';
import { Repository } from 'typeorm';
import type { Response } from 'express';
export declare class FileController {
    private repo;
    constructor(repo: Repository<Media>);
    uploadCustomFile(file: Express.Multer.File): Promise<{
        message: string;
        filename: string;
    }>;
    listFiles(): Promise<Media[]>;
    downloadFile(filename: string, res: Response): void;
    deleteFile(id: string, res: Response): Promise<import("typeorm").DeleteResult>;
}
