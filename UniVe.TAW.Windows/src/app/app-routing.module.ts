import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './ui/identity/signup/signup.component';
import { LoginComponent } from './ui/identity/login/login.component';
import { MatchFinderComponent } from './ui/game/match-finder/match-finder.component';
import { FleetConfiguratorComponent } from './ui/game/match/fleet-configurator/fleet-configurator.component';
import { OwnTurnControllerComponent } from './ui/game/match/own-turn-controller/own-turn-controller.component';
import ViewsRoutingKeys from './ViewsRoutingKeys';
import { RoutingHelper, RouteParam, RouteStep } from './Routing';
import RoutingParamKeys from '../assets/unive.taw.webservice/application/routing/RoutingParamKeys';
import { MatchComponent } from './ui/game/match/match.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import ServiceConstants from './services/ServiceConstants';
import { RankingsComponent } from './ui/identity/rankings/rankings.component';
import { MatchHistoryComponent } from './ui/identity/users/match-history/match-history.component';
import { ProfileComponent } from './ui/identity/users/profile/profile.component';
import { ChatComponent } from './ui/chat/chat.component';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { LoggedOutGuardService } from './services/logged-out-guard.service';

const routes: Routes = [
    { path: '', redirectTo: ViewsRoutingKeys.MatchFinder, pathMatch: 'full' },
    {
        path: ViewsRoutingKeys.Signup,
        component: SignupComponent,
        canActivate: [LoggedOutGuardService]
    },
    {
        path: ViewsRoutingKeys.Login,
        component: LoginComponent,
        canActivate: [LoggedOutGuardService]
    },
    {
        path: ViewsRoutingKeys.MatchFinder,
        component: MatchFinderComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path: RoutingHelper.buildRoute([
            new RouteStep(ViewsRoutingKeys.Match),
            new RouteParam(RoutingParamKeys.matchId)
        ]),
        component: MatchComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path: ViewsRoutingKeys.Rankings,
        component: RankingsComponent
    },
    {
        path: RoutingHelper.buildRoute([
            new RouteStep(ViewsRoutingKeys.Users),
            new RouteParam(RoutingParamKeys.userId)
        ]),
        component: ProfileComponent
    },
    // {
    //   path: RoutingHelper.buildRoute([
    //     new RouteStep(ViewsRoutingKeys.Users),
    //     new RouteStep(RoutingParamKeys.self)
    //   ]),
    //   component: ProfileComponent,
    //   canActivate: [LoggedInGuardService]
    // },
    {
        path: RoutingHelper.buildRoute([
            new RouteStep(ViewsRoutingKeys.Chat)
        ]),
        component: ChatComponent,
        canActivate: [LoggedInGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false }),
        SocketIoModule.forRoot({ url: ServiceConstants.ServerAddress, options: {} })],
    exports: [RouterModule]
})
export class AppRoutingModule { }