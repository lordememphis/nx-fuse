import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {
  appConfig,
  CoreModule,
  FuseConfigModule,
  FuseMockApiModule,
  FuseModule,
  LayoutComponent,
  LayoutModule,
  mockApiServices,
} from '@nx-fuse/fuse';
import { AppComponent } from './app.component';
import { InitialDataResolver } from './app.resolvers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LayoutComponent,
          resolve: {
            initialData: InitialDataResolver,
          },
          children: [
            {
              path: 'example',
              loadComponent: async () =>
                (await import('@nx-fuse/admin/example')).AdminExampleComponent,
            },
          ],
        },
      ],
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled',
      },
    ),
    FuseModule,
    FuseConfigModule.forRoot(appConfig),
    FuseMockApiModule.forRoot(mockApiServices),
    CoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
