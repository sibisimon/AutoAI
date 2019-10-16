import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-side',
  templateUrl: './side.component.html'
})
export class SideComponent {
  status:number = 1;
  selectActive(num){
    this.status = num;       
  }
}