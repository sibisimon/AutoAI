import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-side',
  templateUrl: './side.component.html'
})
export class SideComponent {
  today: number = Date.now();
}