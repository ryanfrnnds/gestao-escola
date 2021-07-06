import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Classe, Serie } from '@entidade';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  public createDb() {
    const classe = this.classes();
    const serie = this.series();
    const estudante = this.estudantes();
    const materia = this.materias();
    const professor = this.professores();
    const relacionomento = this.relacionomentos();
    return {
      classe, serie,estudante, materia, professor, relacionomento
    };
}

  public classes():Array<Classe>{
    return [
      {
        id: 1,
        nome: 'A',
      },
      {
        id: 2,
        nome: 'B'
      },
      {
        id: 3,
        nome: 'C',
      },
      {
        id: 4,
        nome: 'D',
      },
      {
        id: 5,
        nome: 'E',
      },
      {
        id: 6,
        nome: 'F',
      }
    ];
  }

  public series():Array<Serie>{
    return [
      {
        "id":1,
        "nome":"Ensino Fundamental"
      },
      {
        "id":2,
        "nome":"1° ano do ensino médio"
      },
      {
        "id":3,
        "nome":"2° ano ensino médio"
      },
      {
        "id":4,
        "nome":"3° ano do ensino médio"
      },
      {
        "id":5,
        "nome":"Cursinho"
      },
      {
        "id":8,
        "nome":"4º ano do ensino fundamental"
      },
      {
        "id":9,
        "nome":"5º ano do ensino fundamental"
      },
      {
        "id":10,
        "nome":"6º ano do ensino fundamental"
      },
      {
        "id":11,
        "nome":"7º ano do ensino fundamental"
      },
      {
        "id":12,
        "nome":"8º ano do ensino fundamental"
      },
      {
        "id":13,
        "nome":"9º ano do ensino fundamental"
      },
      {
        "id":6,
        "nome":"Estudo em casa"
      },
      {
        "id":7,
        "nome":"Outros"
      }
    ];
  }

  public materias():Array<{id:number, nome:string}>{
    return [
      {
        "id":1,
        "nome":"Matemática"
      },
      {
        "id":2,
        "nome":"Português"
      },
      {
        "id":3,
        "nome":"História"
      },
      {
        "id":4,
        "nome":"Geografia"
      }
    ];
  }

  public estudantes():Array<{id: number, ra:number, nome: string, serieId:number, classeId: number}>{
    return [
        {
          "id":1,
          "ra":12346,
          "nome":"Nome do aluno 1",
          "serieId":1,
          "classeId":1
        },
        {
          "id":2,
          "ra":456798,
          "nome":"Nome do aluno 2",
          "serieId":2,
          "classeId":1
        },
        {
          "id":3,
          "ra":752156,
          "nome":"Nome do aluno 3",
          "serieId":3,
          "classeId":2
        },
        {
          "id":4,
          "ra":852348,
          "nome":"Nome do aluno 4",
          "serieId":4,
          "classeId":2
        },
        {
          "id":5,
          "ra":454643,
          "nome":"Nome do aluno 5",
          "serieId":6,
            "classeId":2
        }
    ]
  }

  public professores():Array<{id: number, nome: string}>{
    return [
      {
        "id":1,
        "nome":"Professor 1"
      },
      {
        "id":2,
        "nome":"Professor 2"
      },
      {
        "id":3,
        "nome":"Professor 3"
      },
      {
        "id":4,
        "nome":"Professor 4"
      },
      {
        "id":5,
        "nome":"Professor 5"
      },
      {
        "id":6,
        "nome":"Professor 6"
      }
    ]
  }


  public relacionomentos():Array<{id: number, professorId: number, materiaId: number, series: Array<{serieId: number, classes:Array<{classeId: number}>}>}>{
    return [
      {
        "id": 1,
        "professorId": 1,
        "materiaId": 1,
        "series": [
          {
            "serieId": 1,
            "classes": [
              {
                "classeId": 1
              },
              {
                "classeId": 2
              },
              {
                "classeId": 3
              }
            ]
          },
          {
            "serieId": 2,
            "classes": [
              {
                "classeId": 1
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "professorId": 2,
        "materiaId": 2,
        "series": [
          {
            "serieId": 8,
            "classes": [
              {
                "classeId": 1
              },
              {
                "classeId": 2
              }
            ]
          },
          {
            "serieId": 9,
            "classes": [
              {
                "classeId": 1
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "professorId": 3,
        "materiaId": 3,
        "series": [
          {
            "serieId": 12,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 13,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 5,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 6,
            "classes": [
              {
                "classeId": 1
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "professorId": 4,
        "materiaId": 4,
        "series": [
          {
            "serieId": 1,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 2,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 3,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
          {
            "serieId": 4,
            "classes": [
              {
                "classeId": 1
              }
            ]
          },
           {
            "serieId": 5,
            "classes": [
              {
                "classeId": 1
              }
            ]
          }
        ]
      }
    ]
  }
}
