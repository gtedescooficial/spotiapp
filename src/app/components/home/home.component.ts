import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
releases: any = [];

   constructor(private spotservice: SpotifyService)
     {
      this.spotservice.getNewReleases()
      .subscribe( (data: any) => {
          console.log(data)
          this.releases = data;
      })

      console.log(this.releases);

      /* Token
      BQB1aLSZVkxFJomDj_dZZnGN-EaVZQTmlfN-PWiX_b09z9EgMwZD04RnAEVutlZCNxa0-UaRH3sS0Vggv28 */
   }

  ngOnInit() {


  }

}
