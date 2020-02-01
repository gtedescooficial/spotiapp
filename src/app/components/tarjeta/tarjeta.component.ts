import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent {

  @Input() items: any[] = []
  constructor(private router: Router) { }

  verItem(item: any){

    if(item.type === 'artist'){
      // console.log(item )
      let idartist = item.id;
      this.router.navigate(['/artista', idartist]  );
    }else if(item.type ==='album'){
      // console.log(item)
    }
  }


}
