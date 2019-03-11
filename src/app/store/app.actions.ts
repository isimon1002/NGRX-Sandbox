import { Action } from '@ngrx/store';

export const SAVE_NAME = 'SAVE_NAME';

export class SaveName implements Action {
    readonly type = SAVE_NAME;

    constructor(public payload: String) {}
}


export type AppActions = SaveName;
