import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { Creature } from './creature.entity';

@Controller('creatures')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}

  @Get()
  index(): Promise<Creature[]> {
    return this.creaturesService.findAll();
  }  
    
  @Post('create')
  async create(@Body() creatureData: Creature): Promise<any> {
    return this.creaturesService.create(creatureData);
  } 

  @Put(':id/update')
  async update(@Param('id') id, @Body() creatureData: Creature): Promise<any> {
      creatureData.id = Number(id);
      console.log('Update #' + creatureData.id)
      return this.creaturesService.update(creatureData);
  }  

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.creaturesService.delete(id);
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creaturesService.findOne(+id);
  }

}
