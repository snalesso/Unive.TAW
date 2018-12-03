import { Component, OnInit, OnDestroy, Input, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import * as game from '../../../../assets/scripts/unive.taw.webservice/infrastructure/game';
import * as game_client from '../../../../assets/scripts/unive.taw.webservice/infrastructure/game.client';
import ServiceConstants from '../../../services/ServiceConstants';
import RoutingParamKeys from '../../../../assets/scripts/unive.taw.webservice/application/routing/RoutingParamKeys';
import * as DTOs from '../../../../assets/scripts/unive.taw.webservice/application/DTOs';
import * as utils from '../../../../assets/scripts/unive.taw.webservice/infrastructure/utils';
import * as ngHttp from '@angular/common/http';
import * as ngxSocketIO from 'ngx-socket-io';
import ServiceEventKeys from '../../../../assets/scripts/unive.taw.webservice/application/services/ServiceEventKeys';
import { Subscription, Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IdentityService } from 'src/app/services/identity.service';
import { ChatService } from 'src/app/services/chat.service';
import { List } from '@ionic/angular';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  constructor() { }

  @Input()
  public Reverse: boolean;

  //private _messages: DTOs.IChatHistoryMessageDto[];
  @Input()
  public Messages: DTOs.IChatMessageDto[];

  public get SortedMessages(): DTOs.IChatMessageDto[] {
    return this.Reverse ? this.Messages.slice().reverse() : this.Messages;
  }

  ngOnInit() {
  }

}