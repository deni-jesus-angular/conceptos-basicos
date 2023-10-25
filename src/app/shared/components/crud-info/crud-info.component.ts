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
  @Output() onEditClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor(
    
  ) { }

  ngOnInit() {}

  onCharClick() {
    //event.nativeEvent.stopImmediatePropagation();
    //event.stopPropagation();
    this.onCharClicked.emit();
    
    console.log("Clic en el botón de personaje  ");
    
  }

  onEditClick(event:any) {
    //event.preventDefault();
    event.stopPropagation();
    this.onEditClicked.emit();
    
    console.log("Clic en el botón de edición");
  }

}
