import { describe, it, expect, vi, expectTypeOf } from 'vitest';
import { Person, logPerson, persons } from '../../src/02/index';

describe('Exercise 02 - Union Types', () => {
  it('should have correct Person type (User | Admin)', () => {
    expectTypeOf<Person>().toEqualTypeOf<
      | { name: string; age: number; occupation: string }
      | { name: string; age: number; role: string }
    >();
  });

  it('should have correct persons array type', () => {
    expectTypeOf(persons).toEqualTypeOf<Person[]>();
  });

  it('should have correct logPerson function type', () => {
    expectTypeOf(logPerson).toEqualTypeOf<(person: Person) => void>();
  });

  it('should work with actual data', () => {
    // Runtime tests
    expect(persons).toHaveLength(4);

    // Test User type
    expect(persons[0]).toEqual({
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
    });

    // Test Admin type
    expect(persons[1]).toEqual({
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator',
    });

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logPerson(persons[0]);
    expect(consoleSpy).toHaveBeenCalledWith(' - Max Mustermann, 25');
    consoleSpy.mockRestore();
  });
});
