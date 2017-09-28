import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appointments = [
      {
        date: new Date('2015-08-20T12:00:00Z'),
        name: 'Reifenwechsel',
      },
      {
        date: new Date('2017-12-14T23:55:00Z'),
        name: 'Reifenwechsel',
      },
      {
        date: new Date('2016-09-20T08:50:00Z'),
        name: 'Ölwechsel',
      },
      {
        date: new Date('2017-11-30T10:10:00Z'),
        name: 'Waschen',
      },
      {
        date: new Date('2017-01-01T13:00:00Z'),
        name: 'Inspektion',
      },
    ];
    return {appointments};
  }
}
