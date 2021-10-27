import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model';
import { ProdutosService } from "./produtos.service";

@Controller('produtos') //Recebe como parâmetro a URL
export class ProdutosController {

    constructor(private produtosService: ProdutosService){

    }

    //Para que o controller tenha um retorno, precisamos de um método
    //Importar o controller *ProdutosController* no src\app.module.ts
    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos();
    }

    //Possui parametro na URL
    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criarProduto(@Body() produto : Produto) {
        this.produtosService.criar(produto);
    }

    @Put()
    alterarProduto(@Body() produto : Produto): Produto {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagarProduto(@Param() params){
        this.produtosService.apagar(params.id);
    }

}