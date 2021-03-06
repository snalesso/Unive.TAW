import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { GameService } from '../../../../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import RoutingParamKeys from '../../../../../assets/unive.taw.webservice/application/routing/RoutingParamKeys';
import * as game_client from '../../../../../assets/unive.taw.webservice/infrastructure/game.client';
import ViewsRoutingKeys from '../../../../ViewsRoutingKeys';

import * as identityDTOs from '../../../../../assets/unive.taw.webservice/application/DTOs/identity';
import * as gameDTOs from '../../../../../assets/unive.taw.webservice/application/DTOs/game';
import * as chatDTOs from '../../../../../assets/unive.taw.webservice/application/DTOs/chat';

import * as net from '../../../../../assets/unive.taw.webservice/infrastructure/net';
import * as game from '../../../../../assets/unive.taw.webservice/infrastructure/game';
import { AuthService } from '../../../../services/auth.service';
import * as ngHttp from '@angular/common/http';
import * as ngxSocketIO from 'ngx-socket-io';
import Events from '../../../../../assets/unive.taw.webservice/application/Events';
import { ChatService } from '../../../../services/chat.service';
import { BehaviorSubject, Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-match-chat',
  templateUrl: './match-chat.component.html',
  styleUrls: ['./match-chat.component.scss']
})
export class MatchChatComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription[] = [];

  private _youGotANewMessageEventKey: string;

  constructor(
    private readonly _authService: AuthService,
    private readonly _chatService: ChatService,
    private readonly _socketIOService: ngxSocketIO.Socket
  ) {
  }

  private _chatMessages: chatDTOs.IChatMessageDto[] = [];
  public get ChatMessages() { return this._chatMessages; }

  private _whenInterlocutorIdChaged: BehaviorSubject<string> = new BehaviorSubject(null);
  @Input()
  public set InterlocutorId(value: string) {
    this._whenInterlocutorIdChaged.next(value);
  }
  public get InterlocutorId() { return this._whenInterlocutorIdChaged.value; }

  public MessageText: string;

  private _isSendingMessage: boolean = false;
  public get IsSendingMessage(): boolean { return this._isSendingMessage; }

  public get CanSendMessage(): boolean { return !this.IsSendingMessage && this.MessageText != null && this.MessageText.length > 0; }

  public handleWhenChatFormMessageIsSent(sentMessage: chatDTOs.IChatMessageDto) {
    this._chatMessages.push(sentMessage);
  }

  public sendMessage(/*text: string*/) {

    if (!this.CanSendMessage)
      return;

    this._isSendingMessage = true;

    this._chatService.sendMessage(this.InterlocutorId, this.MessageText)
      .subscribe(
        response => {
          this.MessageText = null;
          this._chatMessages.push(response.Content);
          this._isSendingMessage = false;
        },
        (error: ngHttp.HttpErrorResponse) => {
          this._isSendingMessage = false;
        });
  }

  private updateChatMessages() {

    this._chatMessages = [];

    if (this.InterlocutorId) {
      this._chatService.getChatHistoryWith(this.InterlocutorId)
        .subscribe(
          response => {

            this._chatMessages = response.Content;

            if (!this._youGotANewMessageEventKey) {

              this._youGotANewMessageEventKey = Events.chatEventForUser(Events.YouGotANewMessage, this._authService.LoggedUser.Id);
              this._socketIOService.on(
                this._youGotANewMessageEventKey,
                (newMessage: chatDTOs.IChatMessageDto) => {
                  this._chatMessages.push(newMessage);
                });
            }
          },
          (error: ngHttp.HttpErrorResponse) => { });
    }
  }

  ngOnInit() {
    this._subscriptions.push(this._whenInterlocutorIdChaged.subscribe(() => this.updateChatMessages()));
  }

  ngOnDestroy(): void {
    for (let subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
    if (this._youGotANewMessageEventKey) {
      this._socketIOService.removeListener(this._youGotANewMessageEventKey);
      this._youGotANewMessageEventKey = null;
    }
  }

}
