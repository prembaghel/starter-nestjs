import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsModule } from './blogs/blogs.module';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContactsModule,
    BlogsModule,
    CreaturesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
