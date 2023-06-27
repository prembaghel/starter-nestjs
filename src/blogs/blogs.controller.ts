import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService: BlogsService){}

    @Get()
    index(): Promise<Blog[]> {
      return this.blogsService.findAll();
    } 
    
    @Post('create')
    async create(@Body() blogData: Blog): Promise<any> {
      return this.blogsService.create(blogData);
    } 

    @Put(':id/update')
    async update(@Param('id') id, @Body() blogData: Blog): Promise<any> {
        blogData.id = Number(id);
        return this.blogsService.update(blogData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.blogsService.delete(id);
    } 
}
