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

    @Column()
    likeCount: number;
    
    @Column({ type: 'varchar', length: 50,  nullable: true })
    creatorName: string;

    @Column({ type: 'varchar', length: 50,  nullable: true  })
    creatorEmail: string;

    @Column({ type: 'date', nullable: true })
    createdDate: Date;

    @Column({ type: 'date', nullable: true })
    updatedDate: Date;
}