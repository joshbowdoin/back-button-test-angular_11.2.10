import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsPage } from './posts.page';
import { PostsPageRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PostsPageRoutingModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule { }
