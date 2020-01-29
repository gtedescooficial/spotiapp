import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

limit: number = 20;

  constructor(private http: HttpClient) {
    console.log('servicio spotify pronto para uso')
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBYPmwqUgH4guMlWfYvWQn8_ycUxiUf_cPPOeNeAoIvp2O0HjBm0BZEZFl9FTmX8hszdMUcTWY-JskUh9Q'
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=${this.limit}`, { headers })

    .pipe( map( (data: any) =>{
      return data['albums'].items
    }) )

  }


  getArtista(termino: string = ""){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBYPmwqUgH4guMlWfYvWQn8_ycUxiUf_cPPOeNeAoIvp2O0HjBm0BZEZFl9FTmX8hszdMUcTWY-JskUh9Q'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
   /*  .pipe( map( (data: any) =>{
      return data;
    }) ) */
  }

}
