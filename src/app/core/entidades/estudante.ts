import { ObjectUtil } from "@util";
import { Classe } from "./classe";
import { EstudanteBDMemory } from "./estudante-bd-memory";
import { Serie } from "./serie";

export class Estudante{
    public id?: number;
    public ra?:number;
    public nome?: string;
    public serie?:Serie; 
    public classe?:Classe;

    constructor(estudanteBDMemory: Partial<EstudanteBDMemory> = null, classes: Array<Classe> = null , series: Array<Serie> = null) {
        this.id = ObjectUtil.buscarValor(estudanteBDMemory, 'id');
        this.ra = ObjectUtil.buscarValor(estudanteBDMemory, 'ra');
        this.nome = ObjectUtil.buscarValor(estudanteBDMemory, 'nome');
        // Atributos como SERIE e CLASSE que representam um RELACIONAMENTO.
        // Como eu não estou usando uma estrutura em BACK onde eu escrevo o relacionamento via ORM
        // vou ter que fazelos na "mão" no FRONT. Pois não encontrei na LIB angular-in-memory-web-api algo que configure relacionamentos entre entidades.

        this.classe = classes != null && Array.isArray(classes) ? classes.filter(classe => classe.id == estudanteBDMemory.classeId)[0] : null;
        this.serie = series != null && Array.isArray(series) ? series.filter(serie => serie.id == estudanteBDMemory.serieId)[0] : null;
    }
}