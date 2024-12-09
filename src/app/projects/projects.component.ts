import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  project1Images: string[] = [
    'assets/images/login.png',
    'assets/images/homeUser.png',
    'assets/images/ProduitUser.png',
    'assets/images/Donate.png',
    'assets/images/ajoutProduit.png',
    'assets/images/Homeadmin.png',
    'assets/images/adminMarchandise.png',
  ];

  project2Images: string[] = [
    'assets/images/p1.png',
    'assets/images/p2.png',
    'assets/images/p3.png',
    'assets/images/p4.png',
    'assets/images/p5.png',
  ];
  project3Images: string[] = [
    'assets/images/loginp.png',
    'assets/images/eventp.png',
    'assets/images/profilep.png',
    'assets/images/t2.png',
    'assets/images/t1.png',
    'assets/images/t4.png',
    'assets/images/t3.png'
  ];
  project4Images: string[] = [
    'assets/images/d1.png',
    'assets/images/d2.png',
    'assets/images/d3.png',
    'assets/images/d4.png'
  ];
  project5Images: string[] = [
    'assets/images/s1.png',
    'assets/images/s2.png',
    'assets/images/s3.png'
  
  ];
  project6Images: string[] = [
    'assets/images/f1.png',
    'assets/images/f2.png',
    'assets/images/f3.png',
    'assets/images/f4.png',
    'assets/images/f5.png'
  
  ];


  currentImageIndex: number = 0;
  currentImage: string = '';
    isModalOpen: boolean = false;
  isProject1Active: boolean = true;
  openLightbox(index: number, project: number): void {
    this.isModalOpen = true;
    this.currentImageIndex = index;
  
    if (project === 1) {
      this.currentImage = this.project1Images[index];
    } else if (project === 2) {
      this.currentImage = this.project2Images[index];
    } else if (project === 3) {
      this.currentImage = this.project3Images[index];
    }
    else if (project === 4) {
      this.currentImage = this.project4Images[index];
    }
    else if (project === 5) {
      this.currentImage = this.project5Images[index];
    }
    else if (project === 6) {
      this.currentImage = this.project6Images[index];
    }
  }
  
  

  closeLightbox(): void {
    this.isModalOpen = false;
  }

  nextImage(event: MouseEvent): void {
    event.stopPropagation(); // Prevents closing the modal when clicking the next button
    
    if (this.currentImageIndex !== undefined) {
      if (this.currentImage === this.project1Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project1Images.length;
        this.currentImage = this.project1Images[this.currentImageIndex];
      } else if (this.currentImage === this.project2Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project2Images.length;
        this.currentImage = this.project2Images[this.currentImageIndex];
      } else if (this.currentImage === this.project3Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project3Images.length;
        this.currentImage = this.project3Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project4Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project4Images.length;
        this.currentImage = this.project4Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project5Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project5Images.length;
        this.currentImage = this.project5Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project6Images[this.currentImageIndex]) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project6Images.length;
        this.currentImage = this.project6Images[this.currentImageIndex];
      }
    }
  }
  
  previousImage(event: MouseEvent): void {
    event.stopPropagation(); // Prevents closing the modal when clicking the previous button
    
    if (this.currentImageIndex !== undefined) {
      if (this.currentImage === this.project1Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project1Images.length) % this.project1Images.length;
        this.currentImage = this.project1Images[this.currentImageIndex];
      } else if (this.currentImage === this.project2Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project2Images.length) % this.project2Images.length;
        this.currentImage = this.project2Images[this.currentImageIndex];
      } else if (this.currentImage === this.project3Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project3Images.length) % this.project3Images.length;
        this.currentImage = this.project3Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project4Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project4Images.length) % this.project4Images.length;
        this.currentImage = this.project4Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project5Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project5Images.length) % this.project5Images.length;
        this.currentImage = this.project5Images[this.currentImageIndex];
      }
      else if (this.currentImage === this.project6Images[this.currentImageIndex]) {
        this.currentImageIndex =
          (this.currentImageIndex - 1 + this.project6Images.length) % this.project6Images.length;
        this.currentImage = this.project6Images[this.currentImageIndex];
      }
    }
  }
  
}
