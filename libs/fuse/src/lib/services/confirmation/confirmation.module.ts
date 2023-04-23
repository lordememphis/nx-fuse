import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FuseConfirmationService } from './confirmation.service';
import { FuseConfirmationDialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [FuseConfirmationDialogComponent],
  imports: [MatButtonModule, MatDialogModule, MatIconModule, CommonModule],
  providers: [FuseConfirmationService],
})
export class FuseConfirmationModule {
  /**
   * Constructor
   */
  constructor(private _fuseConfirmationService: FuseConfirmationService) {}
}
