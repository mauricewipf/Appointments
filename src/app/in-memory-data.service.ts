import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appointments = [
      {
        id: 11,
        day: '2016-05-04',
        time: '1288323623006',
        name: 'Reifenwechsel',
      },
      {
        id: 12,
        day: '2017-12-14',
        time: '1288323623006',
        name: 'Reifenwechsel',
      },
      {
        id: 13,
        day: '2016-09-20',
        time: '1288323623006',
        name: 'Ölwechsel',
      },
      {
        id: 14,
        day: '2016-12-31',
        time: '1288323623006',
        name: 'Waschen',
      },
      {
        id: 15,
        day: '2017-01-01',
        time: '1288323623006',
        name: 'Inspektion',
      },
    ];
    return {appointments};
  }
}
