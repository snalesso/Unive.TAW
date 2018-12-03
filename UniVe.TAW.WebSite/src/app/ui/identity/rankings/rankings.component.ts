import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import * as game from '../../../../assets/imported/unive.taw.webservice/infrastructure/game';
import * as game_client from '../../../../assets/imported/unive.taw.webservice/infrastructure/game.client';
import ServiceConstants from '../../../services/ServiceConstants';
import RoutingParamKeys from '../../../../assets/imported/unive.taw.webservice/application/routing/RoutingParamKeys';
import * as DTOs from '../../../../assets/imported/unive.taw.webservice/application/DTOs';
import * as utils from '../../../../assets/imported/unive.taw.webservice/infrastructure/utils';
import * as ngHttp from '@angular/common/http';
import * as ngxSocketIO from 'ngx-socket-io';
import ServiceEventKeys from '../../../../assets/imported/unive.taw.webservice/application/services/ServiceEventKeys';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  private _rankings: DTOs.IUserRanking[];

  constructor(
    //private readonly _router: Router,
    //private readonly _activatedRoute: ActivatedRoute,
    //private readonly _authService: AuthService,
    //private readonly _gameService: GameService,
    private readonly _identityService: IdentityService) { }

  public get UserRankings() { return this._rankings; }

  ngOnInit() {

    // this._identityService.getUserProfile(this._authService.LoggedUser.Id)
    //   .subscribe(response => {

    //     console.log(response.Content);
    //   });

    this._identityService.getRankings()
      .subscribe(response => {

        this._rankings = response.Content;
      });

    // this._identityService.getCazzo()
    //   .subscribe(response => {

    //     console.log(response.Content);
    //   });

    // this._identityService.getDiocane()
    //   .subscribe(response => {

    //     console.log(response.Content);
    //   });

  }

}