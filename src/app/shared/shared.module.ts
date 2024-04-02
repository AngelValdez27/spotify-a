import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

/* Exportación de componentes compartidos a carpeta modules */

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe
  ]
})
export class SharedModule { }
