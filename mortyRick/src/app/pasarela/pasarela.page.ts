import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.page.html',
  styleUrls: ['./pasarela.page.scss'],
})
export class PasarelaPage implements OnInit {
  selectedFiles: File[] = [];
  imageArray: any[] = [];
  mySwiper!: Swiper;
  constructor() { }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;

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
    this.mySwiper.removeSlide(index);
    this.mySwiper.update();
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
 
    this.mySwiper = new Swiper('.swiper-container', {
    });
  }

}
