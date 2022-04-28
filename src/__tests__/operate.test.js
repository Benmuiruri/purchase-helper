import operate from '../logic/operate';

describe('Tests calculator operations', () => {
  test('Adds two numbers, 2 + 2 to equal 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('Subtract two numbers, 2 - 2 to equal 0', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('Multiply two numbers, 2 x 2 to equal 4', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('Divides two numbers 2 ÷ 2 to equal 1', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('Divide a number by 0 throws error', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('Through error if operator is unknown', () => {
    expect(() => operate(2, 2, 'X')).toThrow();
  });
});
