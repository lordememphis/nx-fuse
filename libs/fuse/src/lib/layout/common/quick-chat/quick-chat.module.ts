import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FuseDrawerModule } from '../../../components/drawer';
import { FuseScrollbarModule } from '../../../directives/scrollbar';
import { SharedModule } from '../../../shared/shared.module';
import { QuickChatComponent } from './quick-chat.component';

@NgModule({
  declarations: [QuickChatComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FuseDrawerModule,
    FuseScrollbarModule,
    SharedModule,
  ],
  exports: [QuickChatComponent],
})
export class QuickChatModule {}
