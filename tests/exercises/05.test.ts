import { describe, it, expect, expectTypeOf } from 'vitest';
import { Person, filterUsers, persons, isUser } from '../../src/05/index';

type User = { type: 'user'; name: string; age: number; occupation: string };

describe('Exercise 05 - Partial and Omit utility types', () => {
  it('should have correct filterUsers function type', () => {
    expectTypeOf(filterUsers).toEqualTypeOf<
      (persons: Person[], criteria: Partial<Omit<User, 'type'>>) => User[]
    >();
  });

  it('should filter users by partial criteria', () => {
    // Filter by age
    const youngUsers = filterUsers(persons, { age: 23 });
    expect(youngUsers.length).toBeGreaterThan(0);
    expect(youngUsers.every(user => user.age === 23)).toBe(true);

    // Filter by occupation
    const astronauts = filterUsers(persons, { occupation: 'Astronaut' });
    expect(astronauts).toHaveLength(1);
    expect(astronauts[0].name).toBe('Kate Müller');

    // Filter by multiple criteria
    const specificUsers = filterUsers(persons, {
      age: 25,
      occupation: 'Chimney sweep',
    });
    expect(specificUsers).toHaveLength(1);
    expect(specificUsers[0].name).toBe('Max Mustermann');

    // No matches
    const noMatch = filterUsers(persons, { age: 999 });
    expect(noMatch).toHaveLength(0);
  });

  it('should only return User types, not Admin types', () => {
    const allFilteredUsers = filterUsers(persons, {});
    const actualUsers = persons.filter(isUser);
    expect(allFilteredUsers).toHaveLength(actualUsers.length);

    allFilteredUsers.forEach(user => {
      expect(user.type).toBe('user');
    });
  });
});
