import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  isMobilePortrait = false;
  
  showMenuButton = false;

  isMenuOpen = false;

  constructor(private responsive: BreakpointObserver){

  }
  

  ngOnInit(): void {
    
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait
    ])
      .subscribe(result => {
        
        this.showMenuButton = false;
        this.isMobilePortrait = false;

        if (result.matches) {
          this.showMenuButton = true;
          this.isMobilePortrait = true;
        }

      })

  }






  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Is menu open? ' + this.isMenuOpen);
   
  }
}
