import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [UserService]
})
export class PanelComponent {

  title = 'Historial';
  public identity: any;
  public token: any;
  constructor(
    private router: Router,
    public _userService: UserService
  ) {
    this.loadUser();
  }

  ngOnInit() {
    (this.identity&&this.token) ? '' : this.router.navigate(['login']);
  }

  ngDoCheck() {
    this.loadUser();
  }


  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  onSubmit() {

  }


}
