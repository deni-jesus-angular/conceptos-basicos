import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Characters } from 'src/app/core/interface/characters';

@Component({
  selector: 'app-crud-info',
  templateUrl: './crud-info.component.html',
  styleUrls: ['./crud-info.component.scss'],
})
export class CrudInfoComponent  implements OnInit {

  @Input() character:Characters | null=null;

  @Output() onCharClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor(
    
  ) { }

  ngOnInit() {}

  onCharClick() {
    this.onCharClicked.emit();
  }

}
