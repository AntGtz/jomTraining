import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.page.html',
  styleUrls: ['./pasarela.page.scss'],
})
export class PasarelaPage implements OnInit {
  showMainButton: boolean = true; // variable para darle funcion al boton de añadir archivos
  views: number = 1;
  selectedFiles: File[] = []; //guardar archivos seleccionados por el usuario
  imageArray: any[] = [];
  @ViewChild('mySwiper') swiper!: ElementRef;
  constructor() { }

async onFileSelected(event: any) {
  const files: FileList = event.target.files;
  this.showMainButton = false;

  for (let i = 0; i < files.length; i++) {
    
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageUrl = URL.createObjectURL(files[i]);
      this.imageArray.push(imageUrl);
    };
    reader.readAsDataURL(files[i]);
  }
  this.views = 1.5
  console.log(this.views)
  this.selectedFiles = Array.from(files);
}


  async removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.imageArray.splice(index, 1);
    this.swiper.nativeElement.swiper.update();
    
    setTimeout(() => {
    this.updateSwiper();
    });
   await this.updateSwiper();
  }

  async updateSwiper() {
    const swiper = this.swiper.nativeElement.swiper;
    await swiper.update();
  }

  async updateConsole() {
       for (let i = 0; i < this.imageArray.length; i++) { //se usa lenght para hacer llamado a varios tipos de caracteres
      console.log(`Posición ${i+1}: ${this.imageArray[i]}`);
    }
  }

  ngOnInit() {
    this.loadImages();
  }

  async loadImages() {
    const images = [
      {
        sequence: 1,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-1.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-1.png"
      },
      {
        sequence: 2,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-2.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-2.png"
      },
      {
        sequence: 3,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-3.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-3.png"
    },
    {
        sequence: 4,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-4.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-4.png"
    },
    {
        sequence: 5,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-5.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-5.png"
    },
    {
        sequence: 6,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-6.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-6.png"
    },
    {
        sequence: 7,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-7.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-7.png"
    },
    {
        sequence: 8,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-8.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-8.png"
    },
    {
        sequence: 9,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-9.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-9.png"
    },
    {
        sequence: 10,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-10.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-10.png"
    },
    {
        sequence: 11,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-11.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-11.png"
    },
    {
        sequence: 12,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-12.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-12.png"
    },
    {
        sequence: 13,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-13.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-13.png"
    },
    {
        sequence: 14,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-14.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-14.png"
    },
    {
        sequence: 15,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-15.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-15.png"
    },
    {
        sequence: 16,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-16.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-16.png"
    },
    {
        sequence: 17,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-17.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-17.png"
    },
    {
        sequence: 18,
        description: null,
        original: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/original-374-18.png",
        thumbnail: "https://s3.us-west-2.amazonaws.com/qaassets.jom.mx/properties/374/thumbnail-374-18.png"
    }
      
    ];
  
    for (const image of images) {
      const response = await fetch(image.original);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      this.imageArray.push(imageUrl);
    }
  }

}
