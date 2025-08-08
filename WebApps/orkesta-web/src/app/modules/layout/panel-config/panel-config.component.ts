import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';


@Component({
  selector: 'app-panel-config',
  templateUrl: './panel-config.component.html',
  styleUrls: ['./panel-config.component.scss'],
    animations: [
    trigger('children', [
        state('hiddenAnimated', style({
            opacity: 0,
            transform: ' translateX(-50%) translateY(-50%)'
        })),
        state('visibleAnimated', style({
            opacity: 1,
            transform: 'translateX(-50%) translateY(-50%) scale(1)',
        })),
        transition('visibleAnimated => hiddenAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
        transition('hiddenAnimated => visibleAnimated', animate('150ms cubic-bezier(0, 0, 0.2, 1)'))
    ])
]
})
export class PanelConfigComponent implements OnInit {

  darkColors: any;

  lightColors: any;

  customColors: any;

  menuColors: any;

  componentThemes: any;

  constructor(public app: LayoutComponent) { }

  ngOnInit(): void {

      this.lightColors = [
          {name: 'Blue', file: 'blue', color: '#5e81ac'},
          {name: 'Green', file: 'green', color: '#A3BE8C'},
          {name: 'Yellow', file: 'yellow', color: '#EBCB8B'},
          {name: 'Cyan', file: 'cyan', color: '#88C0D0'},
          {name: 'Purple', file: 'purple', color: '#B48EAD'},
          {name: 'Orange', file: 'orange', color: '#D08770'},
          {name: 'Teal', file: 'teal', color: '#88D0BD'},
          {name: 'Magenta', file: 'magenta', color: '#BD69AE'},
          {name: 'Lime', file: 'lime', color: '#B9BE7F'},
          {name: 'Brown', file: 'brown', color: '#BE9B7F'},
          {name: 'Red', file: 'red', color: '#F28686'},
          {name: 'Indigo', file: 'indigo', color: '#8886F2'},
      ];

      this.darkColors = [
          {name: 'Blue', file: 'blue', color: '#5e81ac'},
          {name: 'Green', file: 'green', color: '#A3BE8C'},
          {name: 'Yellow', file: 'yellow', color: '#EBCB8B'},
          {name: 'Cyan', file: 'cyan', color: '#88C0D0'},
          {name: 'Purple', file: 'purple', color: '#B48EAD'},
          {name: 'Orange', file: 'orange', color: '#D08770'},
          {name: 'Teal', file: 'teal', color: '#88D0BD'},
          {name: 'Magenta', file: 'magenta', color: '#BD69AE'},
          {name: 'Lime', file: 'lime', color: '#B9BE7F'},
          {name: 'Brown', file: 'brown', color: '#BE9B7F'},
          {name: 'Red', file: 'red', color: '#F28686'},
          {name: 'Indigo', file: 'indigo', color: '#8886F2'},
      ];

      this.customColors = [
          {name: 'Chile', file: 'chile', image: 'chile.png'},
          {name: 'Naples', file: 'naples', image: 'naples.png'},
          {name: 'Georgia', file: 'georgia', image: 'georgia.png'},
          {name: 'Infinity', file: 'infinity', image: 'infinity.png'},
          {name: 'Chicago', file: 'chicago', image: 'chicago.png'},
          {name: 'Majesty', file: 'majesty', image: 'majesty.png'},
          {name: 'Fish', file: 'fish', image: 'fish.png'},
          {name: 'Dawn', file: 'dawn', image: 'dawn.png'},
          {name: 'Record', file: 'record', image: 'record.png'},
          {name: 'Pool', file: 'pool', image: 'pool.png'},
          {name: 'Metal', file: 'metal', image: 'metal.png'},
          {name: 'China', file: 'china', image: 'china.png'},
          {name: 'Table', file: 'table', image: 'table.png'},
          {name: 'Panorama', file: 'panorama', image: 'panorama.png'},
          {name: 'Barcelona', file: 'barcelona', image: 'barcelona.png'},
          {name: 'Underwater', file: 'underwater', image: 'underwater.png'},
          {name: 'Symmetry', file: 'symmetry', image: 'symmetry.png'},
          {name: 'Rain', file: 'rain', image: 'rain.png'},
          {name: 'Utah', file: 'utah', image: 'utah.png'},
          {name: 'Wave', file: 'wave', image: 'wave.png'},
          {name: 'Flora', file: 'flora', image: 'flora.png'},
          {name: 'Speed', file: 'speed', image: 'speed.png'},
          {name: 'Canopy', file: 'canopy', image: 'canopy.png'},
          {name: 'SanPaolo', file: 'sanpaolo', image: 'sanpaolo.png'},
          {name: 'Basketball', file: 'basketball', image: 'basketball.png'},
          {name: 'Misty', file: 'misty', image: 'misty.png'},
          {name: 'Summit', file: 'summit', image: 'summit.png'},
          {name: 'Wall', file: 'wall', image: 'wall.png'},
          {name: 'Ferris', file: 'ferris', image: 'ferris.png'},
          {name: 'Ship', file: 'ship', image: 'ship.png'},
          {name: 'NY', file: 'ny', image: 'ny.png'},
          {name: 'Cyan', file: 'cyan', image: 'cyan.png'},
          {name: 'Violet', file: 'violet', image: 'violet.png'},
          {name: 'Red', file: 'red', image: 'red.png'},
          {name: 'Blue', file: 'blue', image: 'blue.png'},
          {name: 'Porsuk', file: 'porsuk', image: 'porsuk.png'},
          {name: 'Pink', file: 'pink', image: 'pink.png'},
          {name: 'Purple', file: 'purple', image: 'purple.png'},
          {name: 'Orange', file: 'orange', image: 'orange.png'},
      ];

      this.menuColors = this.lightColors;

      this.componentThemes = [
          {name: 'Blue', file: 'blue', color: '#5E81AC'},
          {name: 'Green', file: 'green', color: '#99CE6B'},
          {name: 'Yellow', file: 'yellow', color: '#EBCB8B'},
          {name: 'Cyan', file: 'cyan', color: '#88C0D0'},
          {name: 'Purple', file: 'purple', color: '#B48EAD'},
          {name: 'Orange', file: 'orange', color: '#D08770'},
          {name: 'Teal', file: 'teal', color: '#88D0BD'},
          {name: 'Magenta', file: 'magenta', color: '#BD69AE'},
          {name: 'Lime', file: 'lime', color: '#B9BE7F'},
          {name: 'Brown', file: 'brown', color: '#BE9B7F'},
          {name: 'Red', file: 'red', color: '#F28686'},
          {name: 'Indigo', file: 'indigo', color: '#8886F2'},
      ];
    
  }

  
  changeLayout(event, mode) {
      this.app.darkMode = mode;
      if (mode === true) {
          this.app.menuColorMode = 'dark';
          this.app.menuColor = 'layout-menu-dark';
          this.app.layoutColor = this.darkColors[0].file;
          this.menuColors = this.darkColors;
          this.changeLightDarkLayout('layout-css', this.darkColors[0].file, 'layout-dark');
          this.changeLightDarkTheme('theme-css', 'theme-dark');
      } 
      else {
          this.app.menuColorMode = 'light';
          this.app.menuColor = 'layout-menu-light';
          this.app.layoutColor = this.lightColors[0].file;
          this.menuColors = this.lightColors;
          this.changeLightDarkLayout('layout-css', this.lightColors[0].file, 'layout-light');
          this.changeLightDarkTheme('theme-css', 'theme-light');
      }

      event.preventDefault();
  }

  
  changeLightDarkTheme(id, value) {
      const element = document.getElementById(id);
      const urlTokens = element.getAttribute('href').split('/');
      urlTokens[urlTokens.length - 1] = value + '.css';
      const newURL = urlTokens.join('/');

      this.replaceLink(element, newURL);
  }

  changeLightDarkLayout(id, color, mode) {
      const element = document.getElementById(id);
      const urlTokens = element.getAttribute('href').split('/');
      urlTokens[urlTokens.length - 2] = color;
      urlTokens[urlTokens.length - 1] = mode + '.css';
      const newURL = urlTokens.join('/');

      this.replaceLink(element, newURL);
  }
    onConfigButtonClick(event) {
      this.app.configActive = !this.app.configActive;
      event.preventDefault();
  }

  onConfigCloseClick(event) {
      this.app.configActive = false;
      event.preventDefault();
  }

  
  changeMenuColor(event, color) {
      if (this.app.menuColorMode !== 'custom') {
          this.app.menuColor = 'layout-menu-' + this.app.menuColorMode;
          if (this.app.menuColorMode === 'dark') {
              this.app.layoutColor = color;
              this.changeStyleSheetsColor('layout-css', color);
          } else {
              this.app.layoutColor = color;
              this.changeStyleSheetsColor('layout-css', color);
          }
      } 
      else {
          this.app.layoutColor = color;
          this.app.menuColor = 'layout-menu-' + color;
      }

      event.preventDefault();
  }

    changeMenuColorMode(event, mode) {
      this.app.menuColorMode = mode;
      if(mode !== 'custom') {
          if (mode === 'light') {
              this.menuColors = this.lightColors;
              this.changeMenuColor(event, this.lightColors[0].file);
          }
          else {
              this.menuColors = this.darkColors;
              this.changeMenuColor(event, this.darkColors[0].file);
          }
      }
      else {
              this.menuColors = this.customColors;
              this.changeMenuColor(event, this.customColors[0].file);
      }
  }

  changeComponentTheme(event, color) {
      this.app.themeColor = color;
      this.changeStyleSheetsColor('theme-css', color);

      event.preventDefault();
  }

  changeStyleSheetsColor(id, value) {
      const element = document.getElementById(id);
      const urlTokens = element.getAttribute('href').split('/');
      urlTokens[urlTokens.length - 2] = value;
      const newURL = urlTokens.join('/');

      this.replaceLink(element, newURL);
  }



    replaceLink(linkElement, href) {
      if (this.isIE()) {
          linkElement.setAttribute('href', href);
      } 
      else {
          const id = linkElement.getAttribute('id');
          const cloneLinkElement = linkElement.cloneNode(true);

          cloneLinkElement.setAttribute('href', href);
          cloneLinkElement.setAttribute('id', id + '-clone');

          linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

          cloneLinkElement.addEventListener('load', () => {
              linkElement.remove();
              cloneLinkElement.setAttribute('id', id);
          });
      }
  }

  isIE() {
      return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }



}
