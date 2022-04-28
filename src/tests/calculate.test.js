import calculate from '../logic/calculate';

describe('Tests calculator logic', () => {
  test('Reset display when AC is clicked', () => {
    const obj = {
      total: 15,
      next: 5,
      operation: '+',
    };
    const resultObj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toMatchObject(resultObj);
  });
  test('If an operation is clicked, update next', () => {
    const obj = {
      total: null,
      next: '2',
      operation: '+',
    };
    const resultObj = {
      total: null,
      next: '22',
      operation: '+',
    };
    expect(calculate(obj, '2')).toMatchObject(resultObj);
  });
  test('If there is no operation, update next and clear the value', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };
    const resultObj = {
      total: null,
      next: '22',
    };
    expect(calculate(obj, '2')).toMatchObject(resultObj);
  });
  test('= with no operation, nothing to do', () => {
    const obj = {
      total: null,
      next: '-',
      operation: null,
    };
    const resultObj = {};
    expect(calculate(obj, '=')).toMatchObject(resultObj);
  });
  test('User clicks an operation button and there is an existing operation', () => {
    const obj = {
      total: 4,
      next: null,
      operation: '+',
    };
    const resultObj = {
      total: 4,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '+')).toMatchObject(resultObj);
  });
});
