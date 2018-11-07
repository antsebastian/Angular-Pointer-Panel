import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { PointerPanelList } from './pointer-panel-list/pointer-panel-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PointerPanelItem } from './pointer-panel-list/pointer-panel-item';
import { PointerPanelDetails } from './pointer-panel-list/pointer-panel-details';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    PointerPanelList,
    PointerPanelItem,
    PointerPanelDetails,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatBadgeModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
