/**
 * Created by crystal on 2017/11/9.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const HEROES = [
      { id: 1, name: 'name1',des:'test'},
      { id: 2, name: 'name2',des:'test2'},
    ];

    return {HEROES};
  }
}
