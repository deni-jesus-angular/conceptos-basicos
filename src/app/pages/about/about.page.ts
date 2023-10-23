import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/core/services/authors.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public authorsService:AuthorsService
    ) {}

  ngOnInit():void {
    this.authorsService.getAll().subscribe(authorsService=>{})
  }

}
