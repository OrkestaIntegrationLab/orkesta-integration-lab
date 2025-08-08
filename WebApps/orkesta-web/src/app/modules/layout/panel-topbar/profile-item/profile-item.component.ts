import { Component, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/shared/auth.service';
import { LayoutService } from '../../shared/layout.service';
import { MenuService } from '../../panel-menu/menu.service';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent implements OnInit {


  @Input() userName: string;
  @Input() userImage: string;
  @Input() appVersion: string;

  constructor( public app: LayoutComponent, 
    private router: Router, 
    private _authService: AuthService,
    private _layoutService: LayoutService,
    private menuService: MenuService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    //this._layoutService.removeStateAccessFromStorage();
    //this._authService.removeUserStateFromStorage();
    this.menuService.reset();
    window.location.replace('');
  }

   onOpenProfile() {
    this.router.navigate(['/profile/me']);
  }    

}
