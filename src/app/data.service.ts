import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

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
    const relacionamento = this.relacionamentos();
    return {
      classe, serie,estudante, materia, professor, relacionamento
    };
}

  public classes():Array<{id:number, name:string}>{
    return [
      {
        id: 1,
        name: 'A',
      },
      {
        id: 2,
        name: 'B'
      },
      {
        id: 3,
        name: 'C',
      },
      {
        id: 4,
        name: 'D',
      },
      {
        id: 5,
        name: 'E',
      },
      {
        id: 6,
        name: 'F',
      }
    ];
  }

  public series():Array<{id:number, name:string}>{
    return [
      {
        "id":1,
        "name":"Ensino Fundamental"
      },
      {
        "id":2,
        "name":"1° ano do ensino médio"
      },
      {
        "id":3,
        "name":"2° ano ensino médio"
      },
      {
        "id":4,
        "name":"3° ano do ensino médio"
      },
      {
        "id":5,
        "name":"Cursinho"
      },
      {
        "id":8,
        "name":"4º ano do ensino fundamental"
      },
      {
        "id":9,
        "name":"5º ano do ensino fundamental"
      },
      {
        "id":10,
        "name":"6º ano do ensino fundamental"
      },
      {
        "id":11,
        "name":"7º ano do ensino fundamental"
      },
      {
        "id":12,
        "name":"8º ano do ensino fundamental"
      },
      {
        "id":13,
        "name":"9º ano do ensino fundamental"
      },
      {
        "id":6,
        "name":"Estudo em casa"
      },
      {
        "id":7,
        "name":"Outros"
      }
    ];
  }

  public materias():Array<{id:number, name:string}>{
    return [
      {
        "id":1,
        "name":"Matemática"
      },
      {
        "id":2,
        "name":"Português"
      },
      {
        "id":3,
        "name":"História"
      },
      {
        "id":4,
        "name":"Geografia"
      }
    ];
  }

  public estudantes():Array<{id: number, ra:number, name: string, serieId:number, classeId: number}>{
    return [
        {
          "id":1,
          "ra":12346,
          "name":"Nome do aluno 1",
          "serieId":1,
          "classeId":1
        },
        {
          "id":2,
          "ra":456798,
          "name":"Nome do aluno 2",
          "serieId":2,
          "classeId":1
        },
        {
          "id":3,
          "ra":752156,
          "name":"Nome do aluno 3",
          "serieId":3,
          "classeId":2
        },
        {
          "id":4,
          "ra":852348,
          "name":"Nome do aluno 4",
          "serieId":4,
          "classeId":2
        },
        {
          "id":5,
          "ra":454643,
          "name":"Nome do aluno 5",
          "serieId":6,
            "classeId":2
        }
    ]
  }

  public professores():Array<{id: number, name: string}>{
    return [
      {
        "id":1,
        "name":"Professor 1"
      },
      {
        "id":2,
        "name":"Professor 2"
      },
      {
        "id":3,
        "name":"Professor 3"
      },
      {
        "id":4,
        "name":"Professor 4"
      },
      {
        "id":5,
        "name":"Professor 5"
      },
      {
        "id":6,
        "name":"Professor 6"
      }
    ]
  }


  public relacionamentos():Array<{id: number, professorId: number, materiaId: number, series: Array<{serieId: number, classes:Array<{classeId: number}>}>}>{
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
