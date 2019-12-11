import { createAction, props } from '@ngrx/store';
import { Image } from 'src/app/models/image';

export const loaded = createAction('[Image] Loaded Images', props<{ payload: Image[] }>());
export const load = createAction('[Image] Load Images', props<{ payload: string }>());
export const error = createAction('[Image] Load Error', props<{ payload: any }>());
