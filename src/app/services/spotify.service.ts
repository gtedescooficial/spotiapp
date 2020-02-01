import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  url: string = 'https://api.spotify.com/v1/';

limit: number = 20;
token: string = "Bearer QBZn06Sktyn1k_xcRNjspBUOSARfw-t-bmyzOUrm3eM_HK7uBylX4Nzp5vzIzXjh9tVoXj7o2ePYX61WYE";

  constructor(private http: HttpClient) {
    console.log('servicio spotify pronto para uso')
  }




  getNewReleases() {

   /*  const headers = new HttpHeaders({
      'Authorization': this.token
    }); */

    const headers = this.getHeaders();

    return this.http.get(`${this.url}browse/new-releases?&limit=${this.limit}`, { headers })

    .pipe( map( (data: any) =>{
      return data['albums'].items
    }) )

  }
getHeaders(){
  return new HttpHeaders({
    'Authorization': this.token
  });
}

  getArtista(termino: string = ""){

    const headers = this.getHeaders();

   return this.http.get(`${this.url}search?q=${termino}&type=artist`, { headers })
   .pipe( map( (data: any) =>{
      return data['artists'].items;
    }) )
  }

  getFullArtist(id: string = ""){
    const headers = this.getHeaders();

    return this.http.get(`${this.url}artists/${id}`,{headers});

  }

  getTracks(id: string){
    const headers = this.getHeaders();

    return this.http.get(`${this.url}artists/${id}/top-tracks?country=BR`,{ headers } )
    .pipe( map( data =>{
      return data['tracks'];
    }))
  }

}
