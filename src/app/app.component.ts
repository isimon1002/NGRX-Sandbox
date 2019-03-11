import * as AppActions from './store/app.actions';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAppReducer from './store/app.reducer';
import { NgForm } from '@angular/forms';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  state: Subscription;
  name: string;
  constructor(private stored: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.state = this.stored.select('app').subscribe(
      data => {
          console.log(data);
          this.name = data.name;
        });
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.stored.dispatch(new AppActions.SaveName(form.value.name));
  }
  }
