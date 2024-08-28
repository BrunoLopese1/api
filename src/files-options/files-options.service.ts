import { Injectable } from '@nestjs/common';
import { CreateFilesOptionDto } from './dto/create-files-option.dto';
import { UpdateFilesOptionDto } from './dto/update-files-option.dto';

@Injectable()
export class FilesOptionsService {
  create(createFilesOptionDto: CreateFilesOptionDto) {
    return 'This action adds a new filesOption';
  }

  findAll() {
    return `This action returns all filesOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filesOption`;
  }

  update(id: number, updateFilesOptionDto: UpdateFilesOptionDto) {
    return `This action updates a #${id} filesOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} filesOption`;
  }
}
