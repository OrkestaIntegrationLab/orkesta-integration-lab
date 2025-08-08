import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/design/utilities/breadcrumb.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
     this.breadcrumbService.setItems([
      { label: 'Inicio', routerLink: ['/home/dashboard'] }
  ]);
   }

  ngOnInit(): void {
  }

}
