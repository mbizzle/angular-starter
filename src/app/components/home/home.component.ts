import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// tslint:disable-next-line:max-line-length
const places = ['Aspen', 'Berlin', 'Beverly Hills', 'Cabo San Lucas', 'Cannes', 'Como', 'Cotswolds', 'Gstaad', 'London', 'Manhattan', 'Marbella', 'Miami', 'Mustique', 'Paris', 'San Francisco', 'Tuscany'];

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.scss' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public destination: any;
  public date: any;
  /**
   * TypeScript public modifiers
   */
  constructor(
    config: NgbTypeaheadConfig
  ) {
    config.showHint = true;
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
  public search = (text$: Observable<string>) =>
    text$
      .debounceTime(100)
      .distinctUntilChanged()
      .map((term) => term.length < 1 ? []
        : places.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  public submitState(dest: string, date: string) {
    console.log('submitState', dest, date);
  }
}
