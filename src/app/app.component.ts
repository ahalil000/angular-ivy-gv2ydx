import { Component, VERSION } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Service } from './service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  displayObservable$: Observable<number>;

  constructor(private api: Service) {
    //this.displayObservable$ = api.getDataObject();

    this.displayObservable$ = api.getDataObject().pipe(
      map((res) => {
        console.log('value from service = ' + res);
        return res;
      })
    );
    // api.getDataObject().subscribe((res) => {
    //   console.log('value from service = ' + res);
    // });
  }

  sendValue(val: any) {
    let num: number = Math.floor(Math.random() * 100);
    console.log('value sent to service = ' + num);
    this.api.setDataObject(num);
  }
}
