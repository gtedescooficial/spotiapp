
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { SpotifyService } from '../../services/spotify.service';
import { ErrorComponent } from '../shared/error/error.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
releases: any = [];
loading: boolean = false;
error: boolean = false;

   constructor(private spotservice: SpotifyService)
     {
       this.loading = true;
      this.spotservice.getNewReleases()
      .subscribe( (data: any) => {


          this.releases = data;
          this.loading = false;
      }, error =>{
        console.log(error);
        this.error = true;
        this.loading = false;
      })

      //console.log(this.releases);

      /* Token
      BQB1aLSZVkxFJomDj_dZZnGN-EaVZQTmlfN-PWiX_b09z9EgMwZD04RnAEVutlZCNxa0-UaRH3sS0Vggv28 */
   }

  ngOnInit() {


  }

}
