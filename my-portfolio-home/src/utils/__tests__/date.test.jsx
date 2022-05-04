import * as dateUtils from '../date';

describe('Date Utils', () => {
  describe('monthDiff function', () => {
    it('should return month ranges between 2 dates', () => {
      const result = dateUtils.generateMonths('12/2021', '12/2022');
      expect(result).toEqual('12 mths');
    });
    
    it('should return 1 month with singular form', () => {
      const result = dateUtils.generateMonths('12/2021', '1/2022');
      expect(result).toEqual('1 mth');
    });

    it('should compare with current date when toDate is invalid', () => {
      jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-03-01').getTime());

      const result = dateUtils.generateMonths('12/2021');
      expect(result).toEqual('2 mths');
    
    });
  });
});
