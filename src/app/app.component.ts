import { Component, EventEmitter, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

/**
Mock data type for individual star wars character.
 **/
export class StarWarsModel {

  @Output() deleteCardClicked: EventEmitter<StarWarsModel> = new EventEmitter();

  constructor(public jsonData: any) {
  }
  // TODO: temporary place for item events until I figure out best way to pass item events into item template.
  deleteCard($event) {
    $event.stopPropagation();   // TODO: need a declarative way to stop event propagation.
    this.deleteCardClicked.emit(this);
    // return false; didn't work to stop event
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cards: Array<StarWarsModel> = new Array<StarWarsModel>();
  $cards = of(this.cards);

  uniqueId = 0;

  constructor( private http: HttpClient ) {

    // get the mock data
    this.getJSON().subscribe(data => {
      data.forEach(item  => {
        const icm = new StarWarsModel(item);
        this.subscribeToDeleteCard(icm);
        this.cards.push(icm);
      });
    });
    }


  addCard() {
    const jsonData =
      JSON.parse('{ "name":"' + 'Card ' + this.uniqueId++ +  '", "avatarSrc":"./assets/hanssolo_a.jpg", ' +
        '"fullSrc":"./assets/hanssolo.jpg", "subtitle": "Test pointer position", ' +
        '"fullDesc": "Test pointer position when adding a new card. ' +
        'The card should position itself correctly around the pointer panel."}');

    const icm = new StarWarsModel(jsonData);
    this.subscribeToDeleteCard(icm);
    this.cards.push(icm);
  }

  private subscribeToDeleteCard(icm) {
    icm.deleteCardClicked.subscribe((c) => {
      const index = this.cards.indexOf(icm);
      this.cards.splice(index, 1);
      icm.deleteCardClicked.unsubscribe();
    }, () => {
    }, () => {
      console.log('delete click complete');
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/starwars.json');
  }
}
