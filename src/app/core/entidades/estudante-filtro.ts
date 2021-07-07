import { ObjectUtil } from "@util";
import { Classe } from "./classe";
import { Serie } from "./serie";

export class EstudanteFiltro{
    public serieId:number;
    public classeId: number;

    constructor(referenciaDoFormularioNaPagina: Partial<{serie: Serie, classe:Classe}>) {
        if (referenciaDoFormularioNaPagina) {
            if (referenciaDoFormularioNaPagina.hasOwnProperty('serie') && typeof referenciaDoFormularioNaPagina == 'object')
                this.serieId = ObjectUtil.buscarValor(referenciaDoFormularioNaPagina, 'serie.id');

            if (referenciaDoFormularioNaPagina.hasOwnProperty('classe') && typeof referenciaDoFormularioNaPagina == 'object')
                this.classeId = ObjectUtil.buscarValor(referenciaDoFormularioNaPagina, 'classe.id');
        }
    }
}