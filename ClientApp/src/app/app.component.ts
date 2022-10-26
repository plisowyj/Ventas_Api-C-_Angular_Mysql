import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Gestión Stock/Venta';
  public identity: any;
  public token:any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {

  }

  ngDoCheck() {
    
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
  }
}
