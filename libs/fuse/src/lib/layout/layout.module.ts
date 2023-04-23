import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsModule } from './common/settings/settings.module';
import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { CenteredLayoutModule } from './layouts/horizontal/centered/centered.module';
import { EnterpriseLayoutModule } from './layouts/horizontal/enterprise/enterprise.module';
import { MaterialLayoutModule } from './layouts/horizontal/material/material.module';
import { ModernLayoutModule } from './layouts/horizontal/modern/modern.module';
import { ClassicLayoutModule } from './layouts/vertical/classic/classic.module';
import { ClassyLayoutModule } from './layouts/vertical/classy/classy.module';
import { CompactLayoutModule } from './layouts/vertical/compact/compact.module';
import { DenseLayoutModule } from './layouts/vertical/dense/dense.module';
import { FuturisticLayoutModule } from './layouts/vertical/futuristic/futuristic.module';
import { ThinLayoutModule } from './layouts/vertical/thin/thin.module';

const layoutModules = [
  // Empty
  EmptyLayoutModule,

  // Horizontal navigation
  CenteredLayoutModule,
  EnterpriseLayoutModule,
  MaterialLayoutModule,
  ModernLayoutModule,

  // Vertical navigation
  ClassicLayoutModule,
  ClassyLayoutModule,
  CompactLayoutModule,
  DenseLayoutModule,
  FuturisticLayoutModule,
  ThinLayoutModule,
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, SettingsModule, ...layoutModules],
  exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {}
