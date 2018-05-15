import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrackerService } from '../service/tracker.service';
export interface IBusyContext {
    message: string;
}
export declare class BusyContainerDirective {
}
export declare class BusyComponent implements OnDestroy {
    private config;
    private tracker;
    private readonly cdr;
    wrapperClass: string;
    sub: Subscription;
    private busyContainer;
    constructor(config: any, tracker: TrackerService, cdr: ChangeDetectorRef);
    isActive(): boolean;
    ngOnDestroy(): void;
}
