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
export class InMemoryHolidayService implements InMemoryDbService {
  createDb() {
    const holidays = [
      new Date('2017-10-31'),
      new Date('2017-11-01'),
      new Date('2017-12-25'),
      new Date('2017-11-26'),
      new Date('2017-11-27'),
      new Date('2017-11-28'),
      new Date('2018-01-01'),
      new Date('2018-03-30'),
      new Date('2018-04-02'),
      new Date('2018-05-01'),
    ];
    return {holidays};
  }
}
