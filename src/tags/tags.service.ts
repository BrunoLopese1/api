import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tags } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private tagsRepository: Repository<Tags>,
  ) {}

  create(createTagDto: CreateTagDto) {
    const tag = this.tagsRepository.create(createTagDto);
    return this.tagsRepository.save(tag);
  }

  async findAll(page: number, take: number): Promise<Tags[]> {
    const [tags, total] = await this.tagsRepository.findAndCount({
      skip: (page - 1) * take,
      take,
    });

    return tags;
  }

  findOne(id: number) {
    return this.tagsRepository.findOneBy({ id });
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<Tags> {
    const tag = await this.tagsRepository.findOne({ where: { id } });

    if (!tag) {
      throw new Error('Tag não encontrada');
    }

    Object.assign(tag, updateTagDto);

    return this.tagsRepository.save(tag);
  }

  remove(id: number) {
    return this.tagsRepository.delete(id);
  }
}
