import { describe, it, expect, vi, expectTypeOf } from 'vitest';
import {
  Person,
  isAdmin,
  isUser,
  logPerson,
  persons,
} from '../../src/04/index';

describe('Exercise 04 - Type Predicates', () => {
  it('should have correct Person type with discriminated union', () => {
    expectTypeOf<Person>().toEqualTypeOf<
      | { type: 'user'; name: string; age: number; occupation: string }
      | { type: 'admin'; name: string; age: number; role: string }
    >();
  });

  it('should have correct type guard functions', () => {
    expectTypeOf(isAdmin).toEqualTypeOf<
      (
        person: Person
      ) => person is { type: 'admin'; name: string; age: number; role: string }
    >();
    expectTypeOf(isUser).toEqualTypeOf<
      (person: Person) => person is {
        type: 'user';
        name: string;
        age: number;
        occupation: string;
      }
    >();
  });

  it('should work with type guards', () => {
    const user = persons[0];
    const admin = persons[1];

    expect(isUser(user)).toBe(true);
    expect(isAdmin(user)).toBe(false);

    expect(isAdmin(admin)).toBe(true);
    expect(isUser(admin)).toBe(false);
  });

  it('should filter and log correctly', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const users = persons.filter(isUser);
    const admins = persons.filter(isAdmin);

    expect(users).toHaveLength(2);
    expect(admins).toHaveLength(2);

    logPerson(users[0]);
    expect(consoleSpy).toHaveBeenCalledWith(
      ' - Max Mustermann, 25, Chimney sweep'
    );

    logPerson(admins[0]);
    expect(consoleSpy).toHaveBeenCalledWith(' - Jane Doe, 32, Administrator');

    consoleSpy.mockRestore();
  });
});
