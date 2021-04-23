import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesPage } from './messages.page';

import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: MessagesPage }]),
    MessagesPageRoutingModule,
  ],
  declarations: [
    MessagesPage,
    MessageComponent,
  ]
})
export class MessagesPageModule { }
