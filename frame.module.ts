import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WindowFrameComponent } from './window-frame/window-frame.component';

@NgModule({
    declarations: [ WindowFrameComponent ],
    imports: [ CommonModule ],
    exports: [ WindowFrameComponent ],
    providers: [],
})
export class FrameModule {}
