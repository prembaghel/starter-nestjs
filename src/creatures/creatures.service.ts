import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Creature } from './creature.entity';

@Injectable()
export class CreaturesService {
  constructor(
    @InjectRepository(Creature)
    private creatureRepository: Repository<Creature>,
  ) { }

  async findAll() {
    return await this.creatureRepository.find();
  }

  async  create(creature: Creature): Promise<Creature> {
    return await this.creatureRepository.save(creature);
  }

  findOne(id: number) {
    return `This action returns a #${id} creature`;
  }

  async update(creature: Creature): Promise<UpdateResult> {
    return await this.creatureRepository.update(creature.id, creature);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.creatureRepository.delete(id);
  }

}
