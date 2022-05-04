import * as scrollUtils from '../scroll';
import { JSDOM } from 'jsdom';

describe('Scroll Utils', () => {
  describe('checkScrollDirectionIsUp', () => {
    it('should return false when deltaY is not smaller than 0', () => {
      const result = scrollUtils.checkScrollDirectionIsUp({ deltaY: 1 });
      expect(result).toBeFalsy();
    });
    
    it('should return true when deltaY is smaller than 0', () => {
      const result = scrollUtils.checkScrollDirectionIsUp({ deltaY: -1 });
      expect(result).toBeTruthy();
    });
  });

  describe('isScrollTop', () => {
    it('should return true when scrollTop is smaller than 10', () => {
      const result = scrollUtils.isScrollTop({ documentElement: { scrollTop: 9 } });
      expect(result).toBeTruthy();
    });
  });

  describe('isScrollBottom', () => {
    it('should return true when scrollHeight is smaller than scrollTop, clientHeight, and delta total', () => {
      const result = scrollUtils.isScrollBottom({ 
        documentElement: { 
          scrollTop: 100,
          clientHeight: 100,
          scrollHeight: 200,
        } 
      });
      expect(result).toBeTruthy();
    });
  });
});
