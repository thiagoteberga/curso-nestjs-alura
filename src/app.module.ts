import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST || 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER || 'tteberga',
      password: process.env.DATABASE_PASSWORD || 'tteberga',
      database: process.env.DATABASE || 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
