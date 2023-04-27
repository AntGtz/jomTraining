import { Component, Input, OnInit } from '@angular/core';
import { RicmorService } from './../../services/ricmor.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricmor-card',
  templateUrl: './ricmor-card.component.html',
  styleUrls: ['./ricmor-card.component.scss'],
})
export class RicmorCardComponent  implements OnInit {

  @Input() character: any;
  constructor(
    private RicmorService: RicmorService,
    private loadCtrl: LoadingController,
    private router: Router
    ) { }

    goToPage() {
      this.router.navigate(['/episodios']);
    }
  

  ngOnInit() {}

}


