import { describe, it, expect, vi, expectTypeOf } from 'vitest';
import { Person, logPerson, persons } from '../../src/03/index';

describe('Exercise 03 - Type Guards (in operator)', () => {
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

  it('should work with actual data and show additional information', () => {
    // Runtime tests
    expect(persons).toHaveLength(4);

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Test User type (with occupation)
    logPerson(persons[0]);
    expect(consoleSpy).toHaveBeenCalledWith(
      ' - Max Mustermann, 25, Chimney sweep'
    );

    // Test Admin type (with role)
    logPerson(persons[1]);
    expect(consoleSpy).toHaveBeenCalledWith(' - Jane Doe, 32, Administrator');

    consoleSpy.mockRestore();
  });
});
