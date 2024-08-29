import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamento = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Leandro',
      modelo: 'modelo3'
    },
    {
      conteudo: 'IIS - Rodam as aplicações GSUB (crítica), "portalocn" (não há código de aplicação, apesar de mostrar informações do banco do SQDO) e A17367 ("gissub-pdp"), ASP Clássico, https://gissub.petrobras.biz, https://gissub-pdp.petrobras.biz, https://gissub-car.petrobras.biz e https://gissub-noaa.petrobras.biz;',
      autoria: 'Monica',
      modelo: 'modelo2'
    }
  ];
}
