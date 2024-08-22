import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento = {
    id: '1',
    Conteudo: 'Aprendendo Angular',
    autoria:  'Dev',
    modelo: 'modelo2'
  }

  criarPensamento() {
    alert("Pensamento criado")
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
