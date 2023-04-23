import { NgModule } from '@angular/core';
import { FuseFindByKeyPipe } from './find-by-key.pipe';

@NgModule({
  declarations: [FuseFindByKeyPipe],
  exports: [FuseFindByKeyPipe],
})
export class FuseFindByKeyPipeModule {}
