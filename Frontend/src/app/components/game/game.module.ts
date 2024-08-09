import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { MessageModule } from '../message/message.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GameComponent], 
  imports: [
    CommonModule,
    GameRoutingModule,
    MessageModule,
    HttpClientModule
  ]
})
export class GameModule { }
