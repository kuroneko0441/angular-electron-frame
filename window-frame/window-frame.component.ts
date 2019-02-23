import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { remote } from 'electron';
import BrowserWindow = Electron.BrowserWindow;

@Component({
    selector: 'app-windows-frame',
    templateUrl: './window-frame.component.html',
    styleUrls: [ './window-frame.component.scss' ],
})
export class WindowFrameComponent implements OnInit {
    @Input() public appName: string = '';
    @Input() public color: string = '#254053';

    public maximized: boolean;

    private window: BrowserWindow;

    public ngOnInit(): void {
        this.window = remote.getCurrentWindow();

        this.maximized = this.window.isMaximized();

        this.window.on('maximize', () => this.maximized = true);
        this.window.on('unmaximize', () => this.maximized = false);
    }

    public onMinimizeBtnClick(event: MouseEvent): void {
        this.window.minimize();
    }

    public onMaximizeBtnClick(): void {
        this.window.maximize();
        this.maximized = true;
    }

    public onUnmaximizeBtnClick(): void {
        this.window.unmaximize();
        this.maximized = false;
    }

    public onCloseBtnClick(): void {
        this.window.close();
    }
}
