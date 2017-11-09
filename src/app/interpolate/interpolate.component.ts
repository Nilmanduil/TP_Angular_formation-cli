import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Formation from './Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterpolateComponent implements OnInit {

  prenom = 'Test prénom';
  nom = 'Test nom';
  formation: Formation = new Formation({nom: "Angular", description: 'Formation pour DTA Ingénierie'});
  formationJS: Formation;

  constructor() { }

  getFullname(): string {
    return this.prenom + ' ' + this.nom;
  }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS= new Formation({nom: 'Module JavaScript', description: "Formation très utile"});
    }, 3000);
  }

}
