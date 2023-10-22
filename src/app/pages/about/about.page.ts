import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/core/interface/authors';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public authors:Authors[]
    ) {}

  ngOnInit():void {
    this.authors = [
      {name:"Jesús", surname:"Herrera Sánchez", github:new URL("https://github.com/Jesushs4")},
      {name:"Denisa Ramona", surname:"Belean", github:new URL("https://github.com/denibel04")}
    ]
  }

}
