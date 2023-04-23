import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FuseLoadingInterceptor } from './loading.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FuseLoadingInterceptor,
      multi: true,
    },
  ],
})
export class FuseLoadingModule {}
