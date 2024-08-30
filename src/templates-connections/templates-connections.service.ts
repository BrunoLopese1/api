import { Injectable } from '@nestjs/common';
import { CreateTemplatesConnectionDto } from './dto/create-templates-connection.dto';
import { UpdateTemplatesConnectionDto } from './dto/update-templates-connection.dto';

@Injectable()
export class TemplatesConnectionsService {
  create(createTemplatesConnectionDto: CreateTemplatesConnectionDto) {
    return 'This action adds a new templatesConnection';
  }

  findAll() {
    return `This action returns all templatesConnections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} templatesConnection`;
  }

  update(
    id: number,
    updateTemplatesConnectionDto: UpdateTemplatesConnectionDto,
  ) {
    return `This action updates a #${id} templatesConnection`;
  }

  remove(id: number) {
    return `This action removes a #${id} templatesConnection`;
  }
}
