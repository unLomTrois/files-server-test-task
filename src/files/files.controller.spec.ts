/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { Response } from 'express';
import { FileDto } from './dto/file.dto';

describe('FilesController', () => {
  let filesController: FilesController;
  let filesService: FilesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [FilesController],
      providers: [FilesService],
    }).compile();

    filesController = moduleRef.get<FilesController>(FilesController);
    filesService = await moduleRef.resolve(FilesService);
  });

  it('should be defined', () => {
    expect(filesController).toBeDefined();
  });

  describe('getList', () => {
    it('should return a list of files', async () => {
      const result = {
        files: [
          '274fa73e699fc04ad8caa976f46d7087467268af.gif',
          '2981c30294ab58ec864e2f9df455fff512f61020.txt',
          '2981c30294ab58ec864e2f9df755fff512f61020.gif',
          '2981c30294ab58ec864e2f9df755fff542f61020.jpg',
          'f2e260820616a14016648f606ddd02fb3dce45f0.png',
        ],
      };
      expect(await filesController.getList()).toEqual(result);
    });
  });

  describe('getFile [text]', () => {
    const result: FileDto = {
      contentType: 'text/plain',
      data: Buffer.from('Съешь ещё этих французских булок да выпей же чаю'),
    };

    it("Content-Type should be equal 'text/plain'", async () => {
      const file = await filesService.get(
        '2981c30294ab58ec864e2f9df455fff512f61020.txt',
      );
      expect(file.contentType).toEqual(result.contentType);
    });

    it('should return a file content', async () => {
      const file = await filesService.get(
        '2981c30294ab58ec864e2f9df455fff512f61020.txt',
      );
      expect(file.data).toEqual(result.data);
    });
  });
});
