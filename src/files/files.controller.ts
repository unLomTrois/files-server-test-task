import { Response } from 'express';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get()
  async getList(): Promise<{ files: string[] }> {
    return { files: await this.filesService.getList() };
  }

  @Get(':filename')
  async get(@Res() res: Response, @Param('filename') filename: string) {
    const file = await this.filesService.get(filename);
    res.contentType(file.contentType);
    res.send(file.data);
  }
}
