import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("Livro 1","Livro Iniciando com TDD",10.10),
        new Produto("Livro 2","Livro Iniciando com DEVOPS",20.20),
        new Produto("Livro 3","Livro Iniciando com SQL",30.30)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop(); // Retorna o ultimo item da lista
    }
}