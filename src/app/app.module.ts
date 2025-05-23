import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HistoryComponent } from './history/history.component';
import { CommunityComponent } from './community/community.component';
import { FeaturesComponent } from './features/features.component';
import { AddonsComponent } from './addons/addons.component';
import { RulesComponent } from './rules/rules.component';
import { JoinComponent } from './join/join.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    HeaderComponent,
    NavigationComponent,
    HistoryComponent,
    CommunityComponent,
    FeaturesComponent,
    AddonsComponent,
    RulesComponent,
    JoinComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
