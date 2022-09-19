import { Injectable, NotFoundException } from '@nestjs/common';
import * as mime from 'mime-types';
import * as fs from 'fs';
import { FileDto } from './dto/file.dto';

import { readdir, readFile } from 'node:fs/promises';

@Injectable()
export class FilesService {
  private readonly fileDir = 'private/resources';

  //Gets
  async get(filename: string): Promise<FileDto> {
    const path = `${this.fileDir}/${filename}`;
    if (!fs.existsSync(path))
      throw new NotFoundException(`File ${filename} not found`);

    return Object.assign(new FileDto(), {
      contentType: mime.lookup(path),
      data: await this.readResource(path),
    });
  }

  async getList(): Promise<string[]> {
    return readdir('private/resources');
  }

  //Methods
  async readResource(path: string): Promise<Buffer> {
    return readFile(path);
  }
}
