import { Component, Input,OnInit } from '@angular/core';
import { RicmorEpisodesService } from './../../services/ricmor-episodes.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-morric-card',
  templateUrl: './morric-card.component.html',
  styleUrls: ['./morric-card.component.scss'],
})
export class MorricCardComponent  implements OnInit {
  @Input() location: any;
  constructor(
    private RicmorEpisodesService: RicmorEpisodesService,
    private loadCtrl: LoadingController,
    private router: Router,
    private location2: Location
  ) { }

  goToMainPage() {
    this.location2.back();
  }

  ngOnInit() {}

}