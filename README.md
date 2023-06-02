# Apollo Server

Projeto criado com finalidade de utilizar GraphQL para fazer request á [Swapi](https://swapi.dev/) Rest API.

## Como fazer deploy?
Uso vercel para fazer deploy, teoricamente para você subir esse projeto na vercel vai ser necessário somente dois passos (caso já se tenha uma conta na vercel):
1. `npm i -g vercel`
2. `vercel`

E então seguir os passos que o CLI apresenta para você e seu projeto deve estar funcionando.

## Como usar?

Para rodar o projeto localmente é necessário rodar `npm i` e em seguida para iniciar o servidor local `npm run dev`.
Ou se você quer dar uma olhada rápida, é possivel acessar o [Sandbox Explorer](https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Fapollo-server-phi.vercel.app%2F) e fazer uma request (visite o fim do README para um exemplo).

## Pontos fortes

- Cacheamento de cada request feita
- Resolução de nested queries

### Explicação detalhada

Como uma API externa está sendo utilizada, foi feito o uso de cache, em respeito ao desenvolvedor da API Swapi, e por performance, já que essa API não tem dados sendo inseridos dinamicamente.
O cache é guardado em memória, sendo assim, toda vez que a API for reiniciada, ou uma nova versão subir, os dados terão que ser cacheados novamente, o que é feito dinamicamente pelo sistema.

E a resolução de queries, pois em alguns use cases especificos está API facilita a vida de quem está utilizando, por exemplo:

Normalmente, ao fazer uma request a API Swapi a um endpoint onde vários personagens são retornados ao mesmo tempo, você encontraria vários URLs sendo retornados ao invés do seu planeta de origem, ou veiculos utilizados.
Algo assim:
```
{
  ...
  results: [
   ...
   {
    "homeworld": "https://swapi.dev/api/planets/1/",
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ]
  }
  ...
  ]
}
```

Porém, com esse projeto, os valores são retornados 
```
{
  "results":[
  ...
    {
      "starships":[
        {
          "name":"X-wing"
        },
        {
          "name":"Imperial shuttle"
        }
      ],
      "homeworld":{
        "name":"Tatooine"
      }
    }
  ...
  ]
}
```

OBS. essa request foi feita com essa Query:
```
query AllPeople {
  allPeople {
    results {
      starships {
        name
      }
      homeworld {
        name
      }
    }
  }
}
```
