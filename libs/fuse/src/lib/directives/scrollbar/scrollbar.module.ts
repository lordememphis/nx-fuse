import { NgModule } from '@angular/core';
import { FuseScrollbarDirective } from './scrollbar.directive';

@NgModule({
  declarations: [FuseScrollbarDirective],
  exports: [FuseScrollbarDirective],
})
export class FuseScrollbarModule {}
