import {Injectable} from 'angular2/core';
import { THEMES } from '../../data/themes';

export interface ITechnology {
  slug: string;
  title: string;
  logo: string;
  description: string;
}

@Injectable()
export class TechnologiesStore {
  fetch(): Promise<ITechnology[]> {
    return Promise.resolve(THEMES);
  }
}
