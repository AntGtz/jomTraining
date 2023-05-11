import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.page.html',
  styleUrls: ['./pasarela.page.scss'],
})
export class PasarelaPage implements OnInit {
  showMainButton: boolean = true;
  selectedFiles: File[] = [];
  imageArray: any[] = [];
  @ViewChild('mySwiper') swiper!: ElementRef;
  constructor() { }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.showMainButton = false;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageArray.push(e.target.result);
      };

      reader.readAsDataURL(files[i]);
    }
    this.selectedFiles = Array.from(files);
  }
  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.imageArray.splice(index, 1);
    this.swiper.nativeElement.swiper.update();
    
    setTimeout(() => {
      this.updateSwiper();
    });

  }

  updateSwiper() {
    const swiper = this.swiper.nativeElement.swiper;
    swiper.update();
  }

  ngOnInit() {
  }

}
