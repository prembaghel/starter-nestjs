import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    imageUrl: string;

    @Column()
    audioUrl: string;

}