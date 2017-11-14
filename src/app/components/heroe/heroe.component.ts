import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../providers/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeroeComponent {

  heroe:any={};

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService
   ) {

      this.activatedRoute.params.subscribe(params => {
        this.heroe= this._heroesService.getHeroe(params['id'] );
        console.log(this.heroe);
      });

   }

}
