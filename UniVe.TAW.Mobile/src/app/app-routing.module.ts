import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import ViewsRoutingKeys from './ViewsRoutingKeys';
import { LoginPage } from './ui/identity/login/login.page';
import { SignupPage } from './ui/identity/signup/signup.page';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import ServiceConstants from './services/ServiceConstants';
import { RoutingHelper, RouteStep, RouteParam } from './Routing';
import RoutingParamKeys from '../assets/unive.taw.webservice/application/routing/RoutingParamKeys';
import { LoggedOutGuard } from './guards/logged-out.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ProfilePage } from './ui/identity/users/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: ViewsRoutingKeys.MatchFinder,
    pathMatch: 'full'
  },
  {
    path: ViewsRoutingKeys.Signup,
    component: SignupPage,
    canActivate: [LoggedOutGuard]
  },
  {
    path: ViewsRoutingKeys.Login,
    component: LoginPage,
    canActivate: [LoggedOutGuard]
  },
  {
    path: ViewsRoutingKeys.MatchFinder,
    loadChildren: './ui/game/match-finder/match-finder.module#MatchFinderPageModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: ViewsRoutingKeys.Chat,
    loadChildren: './ui/chat/chat.module#ChatPageModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: RoutingHelper.buildRoute([
      new RouteStep(ViewsRoutingKeys.Match),
      new RouteParam(RoutingParamKeys.matchId)
    ]),
    loadChildren: './ui/game/match/match.module#MatchPageModule',
    canActivate: [LoggedInGuard]
  },
  {
    path: ViewsRoutingKeys.Rankings,
    loadChildren: './ui/identity/rankings/rankings.module#RankingsPageModule',
  },
  // {
  //   path: RoutingHelper.buildRoute([
  //     new RouteStep(ViewsRoutingKeys.Users),
  //     new RouteStep(RoutingParamKeys.self)
  //   ]),
  //   component: ProfilePage,
  //   canActivate: [LoggedInGuard]
  // },
  {
    path: RoutingHelper.buildRoute([
      new RouteStep(ViewsRoutingKeys.Users),
      new RouteParam(RoutingParamKeys.userId)
    ]),
    component: ProfilePage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot({ url: ServiceConstants.ServerAddress, options: {} })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
