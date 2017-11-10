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
  nameColor = "red";
  formation: Formation = new Formation({nom: "Angular", description: 'Formation pour DTA Ingénierie'});
  formationJS: Formation;
  textHidden = true;
  buttonLabel = "Afficher";
  formations: Array<Formation> = [];

  constructor() { }

  getFullname(): string {
    return this.prenom + ' ' + this.nom;
  }
  changeNameColor(): void {
    this.nameColor = (this.nameColor === "red" ? "green" : "red");
  }

  ngOnInit() {
    setInterval( () => {
      this.changeNameColor();
      }, 500);
    setTimeout(() => {
      this.formationJS = new Formation({nom: 'Module JavaScript', description: "Formation très utile"});
    }, 3000);

    setTimeout(() => {this.formations.push(new Formation({nom: "Angular", description: 'Formation pour DTA Ingénierie', prix: 500, dateDebut: "01/01/2017", dateFin: "01/03/2017"}));}, 1000);
    setTimeout(() => {this.formations.push(new Formation({nom: "JS", description: 'Formation pour DTA Ingénierie', prix: 1500, dateDebut: "01/04/2017", dateFin: "01/15/2017"}));}, 2000);
    setTimeout(() => {this.formations.push(new Formation({nom: "Cordova", description: 'Formation pour DTA Ingénierie', prix: 700, dateDebut: "01/15/2017", dateFin: "01/20/2017"}));}, 3000);
    setTimeout(() => {this.formations.push(new Formation({nom: "Swift", description: 'Formation pour DTA Ingénierie', prix: 3000, dateDebut: "02/01/2017", dateFin: "02/25/2017"}));}, 4000);
    setTimeout(() => {this.formations.push(new Formation({nom: "Android", description: 'Formation pour DTA Ingénierie', prix: 500, dateDebut: "03/01/2017", dateFin: "03/03/2017"}));}, 5000);
  }

  toggleMyText(): void {
    this.textHidden = !this.textHidden;
    this.buttonLabel = (this.textHidden ? "Afficher" : "Cacher");
  }

  mouseOutOfText(): void {
    console.log('Fin survol');
  }

  mouseOnText(): void {
    console.log('Début survol');
  }

  getColorByElement(first, last): string {
    if (first) {
      return "red";
    } else if (last) {
      return "green";
    } else {
      return "black";
    }
  }

  getBackgroundByElement(odd): string {
    return (odd ? "grey" : "white");
  }
}
