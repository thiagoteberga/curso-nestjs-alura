import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';
import { LivrosService } from "./livros.service";

@Controller('livros') //Recebe como parâmetro a URL
export class LivrosController {

    constructor(private livrosService: LivrosService){

    }

    //Para que o controller tenha um retorno, precisamos de um método
    //Importar o controller *LivrosController* no src\app.module.ts
    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    //Possui parametro na URL
    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    async criarLivro(@Body() livro : Livro) {
        this.livrosService.criar(livro);
    }

    @Put()
    async alterarLivro(@Body() livro : Livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    async apagarLivro(@Param() params){
        this.livrosService.apagar(params.id);
    }

}