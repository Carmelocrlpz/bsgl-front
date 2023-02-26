import { Component, OnInit } from '@angular/core';
import { CorreosService } from '../../services/correos.services';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  response: any;
  data: any;

  constructor(private _correosService: CorreosService) {

  }

  ngOnInit() {
    this._correosService.getCorreos().subscribe(
      response => {
        if (response) {
          this.response = response;
          this.data = this.response.data;
        }

      },
      err => { }
    );


  }
}
