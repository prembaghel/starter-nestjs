import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsModule } from './blogs/blogs.module';
import { CreaturesModule } from './creatures/creatures.module';
import { AppDataSource } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    
    ContactsModule,
    BlogsModule,
    CreaturesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
