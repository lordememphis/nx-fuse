import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseLoadingBarModule } from '../../../components/loading-bar';
import { SharedModule } from '../../../shared/shared.module';
import { EmptyLayoutComponent } from './empty.component';

@NgModule({
  declarations: [EmptyLayoutComponent],
  imports: [RouterModule, FuseLoadingBarModule, SharedModule],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
