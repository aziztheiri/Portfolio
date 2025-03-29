import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navList') navList!: ElementRef;

  ngAfterViewInit() {
    this.hamburger.nativeElement.addEventListener('click', () => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.hamburger.nativeElement.classList.toggle('active');
    this.navList.nativeElement.classList.toggle('active');
  }
}
