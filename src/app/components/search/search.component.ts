import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

artistas: any[] = []

  constructor(private spotservice: SpotifyService ) {


  }

  ngOnInit() {
  }

  buscar(termino: string = ""){
    this.spotservice.getArtista(termino)
      .subscribe( (data: any) => {
          this.artistas = data.artists.items;

      })

      console.log(this.artistas);
  }

}
