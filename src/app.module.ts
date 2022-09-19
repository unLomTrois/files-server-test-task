import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';

@Module({
  imports: [FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
