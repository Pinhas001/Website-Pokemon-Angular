import { Lista, ListaPoke } from './../_models/lista';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './../services/pokemon.service';
import { Poke } from '../_models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public poke : Poke[];
  public search : string;
  public list : ListaPoke[];
  public next : string;
  public pokemon: Poke;
  public page: number;


  constructor(private PokemonService : PokemonService) {   
    this.poke = [];
    this.search = '';
    this.page = 0;
  }


  ngOnInit(): void { 
    this.getLista();

  }

  getPokemon(){
    this.PokemonService.getPokemon(this.search)
      .subscribe(data => this.poke = data.Search );
  }

  getLista(){
    this.PokemonService.getList(this.page)
      .subscribe(data => {
        this.list = data.results;
        this.list.map(item => this.PokemonService.getPokemonByLink(item.url).subscribe(data => item.info = data))
        this.page += 1;
      })
  }

  getLista2(){
    this.page -= 1;
    this.PokemonService.getList(this.page)
      .subscribe(data => {
        this.list = data.results;
        this.list.map(item => this.PokemonService.getPokemonByLink(item.url).subscribe(data => item.info = data))
      })
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 
}

