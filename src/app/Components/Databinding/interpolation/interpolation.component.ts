import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  dynName: string = "Rutuja Nandiwadekar"

  customMethod() {
    return "This is " + this.dynName
  }

  status:boolean=false;

}
