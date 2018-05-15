import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class TrackerService {
    promiseList: Array<Promise<any> | Subscription>;
    delayPromise: number | any;
    durationPromise: number | any;
    delayJustFinished: boolean;
    minDuration: number;
    private isBusyStarted;
    onStartBusy: EventEmitter<any>;
    onStopBusy: EventEmitter<any>;
    onCheckPending: EventEmitter<{}>;
    reset(options: IPromiseTrackerOptions): void;
    isActive(): boolean;
    private addPromise(promise);
    private finishPromise(promise);
}
export interface IPromiseTrackerOptions {
    minDuration: number;
    delay: number;
    promiseList: Promise<any>[];
}
