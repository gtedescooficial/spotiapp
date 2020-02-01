import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
id: string ;
artista: any ;
tracks: any;

  constructor(private router:ActivatedRoute, private spotservice: SpotifyService) {

      this.router.params.subscribe( params => {
        this.id = params['id'];

      });

      this.artista = this.getArtista( this.id);
      this.tracks = this.getTracks(this.id)

    }

    getTracks(id: string){
      this.spotservice.getTracks(id)
      .subscribe( resp => {
        this.tracks = resp;
        console.log(this.tracks);
      })
    }
        getArtista(id: string){
          this.spotservice.getFullArtist(id)
          .subscribe( resp =>{
            this.artista = resp;
            console.log( resp )
          })
        }





}
