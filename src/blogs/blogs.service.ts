import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) { }

    async  findAll(): Promise<Blog[]> {
        return await this.blogRepository.find();
    }

    async  create(blog: Blog): Promise<Blog> {
        return await this.blogRepository.save(blog);
    }

    async update(blog: Blog): Promise<UpdateResult> {
        return await this.blogRepository.update(blog.id, blog);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.blogRepository.delete(id);
    }
}
