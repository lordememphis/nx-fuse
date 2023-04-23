import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseLoadingBarComponent } from './loading-bar.component';

@NgModule({
  declarations: [FuseLoadingBarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [FuseLoadingBarComponent],
})
export class FuseLoadingBarModule {}
