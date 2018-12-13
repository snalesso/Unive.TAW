import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { GameService } from '../../../../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import RoutingParamKeys from '../../../../../assets/unive.taw.webservice/application/routing/RoutingParamKeys';
import * as game_client from '../../../../../assets/unive.taw.webservice/infrastructure/game.client';
import ViewsRoutingKeys from '../../../../ViewsRoutingKeys';
import * as DTOs from '../../../../../assets/unive.taw.webservice/application/DTOs';
import * as net from '../../../../../assets/unive.taw.webservice/infrastructure/net';
import * as game from '../../../../../assets/unive.taw.webservice/infrastructure/game';
import { AuthService } from '../../../../services/auth.service';
import * as ngHttp from '@angular/common/http';
import * as ngxSocketIO from 'ngx-socket-io';
import ServiceEventKeys from '../../../../../assets/unive.taw.webservice/application/services/ServiceEventKeys';
import { ChatService } from '../../../../services/chat.service';
import { IdentityService } from '../../../../services/identity.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {

  private _userId: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    //private readonly _gameService: GameService,
    private readonly _authService: AuthService,
    private readonly _identityService: IdentityService,
    //private readonly _router: Router
  ) {
  }

  @Input()
  public set UserId(value: string) {
    this._userId = value;
    this.updateMatchHistory();
  }
  public get UserId() { return this._userId; }

  private _endedMatchSummaries: DTOs.IEndedMatchSummaryDto[];
  public get EndedMatchSummaries() { return this._endedMatchSummaries; }

  ngOnInit() {
  }

  private updateMatchHistory() {

    if (this.UserId) {

      this._endedMatchSummaries = null;

      this._identityService.getMatchHistory(this._userId)
        .subscribe(
          response => {
            this._endedMatchSummaries = response.Content;
          },
          (error: ngHttp.HttpErrorResponse) => { });
    }
  }

}