import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import Formation from '../interpolate/Formation';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormationItemComponent implements OnInit {

  @Input()
  formation: Formation;

  @Output()
  formationSelected: EventEmitter<Formation> = new EventEmitter<Formation>();

  selectFormation() {
    this.formationSelected.emit(this.formation);
  }
  constructor() {  }

  ngOnInit() {
  }

}
