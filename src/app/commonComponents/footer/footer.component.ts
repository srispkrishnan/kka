import { Component, OnInit } from '@angular/core';
import { facebookPage } from 'src/app/app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  fbLink = facebookPage;
  currentYear = (new Date()).getFullYear();

  ngOnInit() {}

}
