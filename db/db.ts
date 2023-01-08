import { faker } from "@faker-js/faker";

interface DB {
  cats: Cat[];
}

interface Cat {
  id: string;
  name: string;
  breed: string;
  birthdate: Date;
  registeredAt: Date;
}

export function createRandomCat(): Cat {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const db: DB = {
  cats: Array.from(Array(1000000).keys()).map(() => createRandomCat()),
};
