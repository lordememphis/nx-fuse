import { NgModule } from '@angular/core';
import { FusePlatformService } from './platform.service';

@NgModule({
  providers: [FusePlatformService],
})
export class FusePlatformModule {
  /**
   * Constructor
   */
  constructor(private _fusePlatformService: FusePlatformService) {}
}
