import { numberToMonth, timeDiff } from '../lib/time';


describe('timeDiff', () => {
  // Helper function to create timestamps
  const createTimestamp = (days = 0, hours = 0, minutes = 0, seconds = 0) => {
    return new Date(2024, 0, 1, hours, minutes, seconds).getTime() + (days * 24 * 60 * 60 * 1000);
  };

  describe('non-rounded output', () => {
    it('handle zero difference', () => {
      const start = createTimestamp();
      expect(timeDiff(start, start)).toBe('0 seconds');
    });

    it('format seconds correctly', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 0, 0, 45);
      expect(timeDiff(start, end)).toBe('45 seconds');
    });

    it('format minutes and seconds correctly', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 0, 2, 30);
      expect(timeDiff(start, end)).toBe('2 minutes 30 seconds');
    });

    it('format hours, minutes, and seconds correctly', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 2, 15, 30);
      expect(timeDiff(start, end)).toBe('2 hours 15 minutes 30 seconds');
    });

    it('format days, hours, minutes, and seconds correctly', () => {
      const start = createTimestamp();
      const end = createTimestamp(3, 2, 15, 30);
      expect(timeDiff(start, end)).toBe('3 days 2 hours 15 minutes 30 seconds');
    });

    it('handle singular units correctly', () => {
      const start = createTimestamp();
      const end = createTimestamp(1, 1, 1, 1);
      expect(timeDiff(start, end)).toBe('1 day 1 hour 1 minute 1 second');
    });
  });

  describe('rounded output', () => {
    it('round to days', () => {
      const start = createTimestamp();
      const end = createTimestamp(3, 12, 30, 45);
      expect(timeDiff(start, end, true)).toBe('3 days');
    });

    it('round to hours when less than a day', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 5, 30, 45);
      expect(timeDiff(start, end, true)).toBe('5 hours');
    });

    it('round to minutes when less than an hour', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 0, 30, 45);
      expect(timeDiff(start, end, true)).toBe('30 minutes');
    });

    it('round to seconds when less than a minute', () => {
      const start = createTimestamp();
      const end = createTimestamp(0, 0, 0, 45);
      expect(timeDiff(start, end, true)).toBe('45 seconds');
    });

    it('handle zero difference when rounded', () => {
      const start = createTimestamp();
      expect(timeDiff(start, start, true)).toBe('0 seconds');
    });
  });

  describe('edge cases', () => {
    it('handle negative time differences', () => {
      const start = createTimestamp(1);
      const end = createTimestamp(0);
      expect(timeDiff(start, end)).toBe('1 day');
    });

    it('handle very large time differences', () => {
      const start = createTimestamp();
      const end = createTimestamp(999, 23, 59, 59);
      expect(timeDiff(start, end)).toBe('999 days 23 hours 59 minutes 59 seconds');
    });
  });
});


describe('numberToMonth', () => {
  it('"January" for input 1', () => {
    expect(numberToMonth(1)).toBe('January');
  });

  it('"February" for input 2', () => {
    expect(numberToMonth(2)).toBe('February');
  });

  it('"March" for input 3', () => {
    expect(numberToMonth(3)).toBe('March');
  });

  it('"April" for input 4', () => {
    expect(numberToMonth(4)).toBe('April');
  });

  it('"May" for input 5', () => {
    expect(numberToMonth(5)).toBe('May');
  });

  it('"June" for input 6', () => {
    expect(numberToMonth(6)).toBe('June');
  });

  it('"July" for input 7', () => {
    expect(numberToMonth(7)).toBe('July');
  });

  it('"August" for input 8', () => {
    expect(numberToMonth(8)).toBe('August');
  });

  it('"September" for input 9', () => {
    expect(numberToMonth(9)).toBe('September');
  });

  it('"October" for input 10', () => {
    expect(numberToMonth(10)).toBe('October');
  });

  it('"November" for input 11', () => {
    expect(numberToMonth(11)).toBe('November');
  });

  it('"December" for input 12', () => {
    expect(numberToMonth(12)).toBe('December');
  });

  it('null for input 0', () => {
    expect(numberToMonth(0)).toBeNull();
  });

  it('null for input 13', () => {
    expect(numberToMonth(13)).toBeNull();
  });

  it('null for negative input', () => {
    expect(numberToMonth(-1)).toBeNull();
  });

  it('null for non-integer input', () => {
    expect(numberToMonth(2.5)).toBeNull();
    expect(numberToMonth(3.1)).toBeNull();
  });
});
