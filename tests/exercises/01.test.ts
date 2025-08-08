import { describe, it, expect, expectTypeOf } from 'vitest';
import { User, logPerson, users } from '../../src/01/index';

describe('Exercise 01 - Basic Types', () => {
  it('should have correct User interface', () => {
    expectTypeOf<User>().toEqualTypeOf<{
      name: string;
      age: number;
      occupation: string;
    }>();
  });

  it('should have properly typed users array', () => {
    expectTypeOf(users).toEqualTypeOf<User[]>();
  });

  it('should have properly typed logPerson function', () => {
    expectTypeOf(logPerson).toEqualTypeOf<(user: User) => void>();
  });

  it('should work with actual data', () => {
    expect(users).toHaveLength(2);

    const firstUser: User = users[0];
    expect(firstUser.name).toBe('Max Mustermann');
    expect(firstUser.age).toBe(25);
    expect(firstUser.occupation).toBe('Chimney sweep');

    const secondUser: User = users[1];
    expect(secondUser.name).toBe('Kate Müller');
    expect(secondUser.age).toBe(23);
    expect(secondUser.occupation).toBe('Astronaut');

    // Test that logPerson works
    expect(() => logPerson(firstUser)).not.toThrow();
  });
});
