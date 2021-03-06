import { Injectable } from '@angular/core';
import * as ng_http from '@angular/common/http';

import * as identityDTOs from '../../assets/unive.taw.webservice/application/DTOs/identity';
import * as gameDTOs from '../../assets/unive.taw.webservice/application/DTOs/game';
import * as chatDTOs from '../../assets/unive.taw.webservice/application/DTOs/chat';

import * as net from '../../assets/unive.taw.webservice/infrastructure/net';
import * as game from '../../assets/unive.taw.webservice/infrastructure/game';
import * as game_client from '../../assets/unive.taw.webservice/infrastructure/game.client';
import * as identity from '../../assets/unive.taw.webservice/infrastructure/identity';
import ServiceConstants from './ServiceConstants';

//import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
//import 'socket.io-client';
import * as ngxSocketIO from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(
    private readonly _http: ng_http.HttpClient,
    private readonly _authService: AuthService,
    private readonly _socketIOService: ngxSocketIO.Socket
  ) {
  }

  public getUserProfile(userId: string) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId;
    const options = {
      headers: new ng_http.HttpHeaders()
        .set('Content-Type', 'application/json')
      //et('Authorization', 'Bearer ' + this._authService.Token)
    };

    return this._http.get<net.HttpMessage<identityDTOs.IUserProfile>>(endPoint, options);
  }

  public getRankings() {
    const endPoint = ServiceConstants.ServerAddress + "/users/rankings";
    const options = {
      headers: new ng_http.HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this._authService.Token)
    };

    return this._http.get<net.HttpMessage<identityDTOs.IUserRanking[]>>(endPoint, options);
  }

  public getUserPowers(userId: string) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId + "/powers";
    const options = {
      headers: new ng_http.HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this._authService.Token)
    };

    return this._http.get<net.HttpMessage<identityDTOs.IUserPowers>>(endPoint, options);
  }

  public getMatchHistory(userId: string = this._authService.LoggedUser.Id) {

    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId + "/matchHistory";
    const options = {
      headers: new ng_http.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http.get<net.HttpMessage<gameDTOs.IEndedMatchSummaryDto[]>>(endPoint, options);
  }

  public ban(userId: string, banDurationHours: number) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId + "/ban";
    const options = {
      headers: new ng_http.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._authService.Token
      })
    };

    return this._http.post<net.HttpMessage<Date>>(endPoint, { BanDurationHours: banDurationHours, UserId: userId } as identityDTOs.IUserBanRequest, options);
  }

  public unban(userId: string, banDurationHours: number) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId + "/ban";
    const options = {
      headers: new ng_http.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._authService.Token
      })
    };

    return this._http.post<net.HttpMessage<Date>>(endPoint, { BanDurationHours: 0, UserId: userId } as identityDTOs.IUserBanRequest, options);
  }

  public assignRole(userId: string, newRole: identity.UserRole) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId + "/role";
    const options = {
      headers: new ng_http.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._authService.Token
      })
    };

    return this._http.post<net.HttpMessage<identity.UserRole>>(endPoint, { NewRole: newRole } as identityDTOs.IRoleAssignmentRequestDto, options);
  }

  public deleteUser(userId: string) {
    const endPoint = ServiceConstants.ServerAddress + "/users/" + userId;
    const options = {
      headers: new ng_http.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this._authService.Token
      })
    };

    return this._http.delete<net.HttpMessage<boolean>>(endPoint, options);
  }
}