import { describe, it, expect, expectTypeOf } from 'vitest';
import { Person, filterPersons, persons } from '../../src/06/index';

type User = { type: 'user'; name: string; age: number; occupation: string };
type Admin = { type: 'admin'; name: string; age: number; role: string };

describe('Exercise 06 - Function Overloads', () => {
  it('should filter users when personType is "user"', () => {
    const users = filterPersons(persons, 'user', { age: 25 });
    expectTypeOf(users).toEqualTypeOf<User[]>();

    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('Max Mustermann');
    expect(users[0].type).toBe('user');
  });

  it('should filter admins when personType is "admin"', () => {
    const admins = filterPersons(persons, 'admin', { age: 32 });
    expectTypeOf(admins).toEqualTypeOf<Admin[]>();

    expect(admins).toHaveLength(1);
    expect(admins[0].name).toBe('Jane Doe');
    expect(admins[0].type).toBe('admin');
  });

  it('should work with partial criteria', () => {
    const allUsers = filterPersons(persons, 'user', {});
    const allAdmins = filterPersons(persons, 'admin', {});

    expect(allUsers.length).toBeGreaterThan(0);
    expect(allAdmins.length).toBeGreaterThan(0);

    allUsers.forEach(user => expect(user.type).toBe('user'));
    allAdmins.forEach(admin => expect(admin.type).toBe('admin'));
  });
});
