import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { Toast } from './toast.component';
import {
  DefaultNoComponentGlobalConfig,
  GlobalConfig,
  TOAST_CONFIG,
} from './toastr-config';

export const DefaultGlobalConfig: GlobalConfig = {
  ...DefaultNoComponentGlobalConfig,
  toastComponent: Toast,
};

@NgModule({
  imports: [CommonModule],
  declarations: [Toast],
  exports: [Toast],
  entryComponents: [Toast],
  providers: [
    {
      provide: TOAST_CONFIG,
      useValue: {
        default: DefaultGlobalConfig,
        config: {
          timeOut: 5000,
          closeButton: true,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
        },
      },
    },
  ],
})
export class ToastrModule {}
