import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-frutafruto',
  templateUrl: './frutafruto.component.html',
  styleUrls: ['./frutafruto.component.css']
})
export class FrutafrutoComponent implements OnInit {
  tigelaAbacate: boolean = false;
  saladaKiwi: boolean = false;
  mixVegetais: boolean = false;
  pimentoes: boolean = false;
  oriental: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  receitaAbacate() {
    this.tigelaAbacate = !this.tigelaAbacate;
  }
  receitaKiwi() {
    this.saladaKiwi = !this.saladaKiwi;
  }
  receitaVegetais() {
    this.mixVegetais = !this.mixVegetais;
  }
  receitaPimentoes() {
    this.pimentoes = !this.pimentoes;
  }
  receitaOriental() {
    this.oriental = !this.oriental;
  }
}


