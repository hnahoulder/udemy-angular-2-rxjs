import {Component} from '@angular/core';
// import {MyCustomerObserver} from './mycustomermobserver';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    createObservable() {
        /*let numbers = [1, 2, 3];
        let numbers$ = Observable.from(numbers);

        // numbers$.subscribe(new MyCustomerObserver());
        numbers$.subscribe(
            value => console.log(`Value: ${value}`),
            error2 => console.error(`Error: ${error2}`),
            () => console.log('Complete')
        );*/
        let numbers = [1, 2, 100, 3];
        let numbers$ = Observable.create((observer: any) => {
            for (let n of numbers) {
                n > 10 ? observer.error('Trop grand') : observer.next(n);
            }
            observer.complete();
        });
        numbers$.subscribe(
            val => console.log(val),
            err => console.error(err),
            () => console.log('Complete')
        );
    }

}
