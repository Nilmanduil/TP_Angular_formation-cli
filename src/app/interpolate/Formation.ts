export default class Formation {
  nom: string;
  description: string;
  prix: number;
  dateDebut: string;
  dateFin: string;

  constructor({nom, description, prix = 0, dateDebut = "", dateFin = ""}) {
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.dateDebut = (dateDebut ? dateDebut : "01/01/1970");
    this.dateFin = (dateFin ? dateFin : "01/01/1970");
  }
}
