import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path: '',
    component: MessagesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesPageRoutingModule { }
