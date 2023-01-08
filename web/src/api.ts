export interface Cat {
  id: string;
  name: string;
  breed: string;
  birthdate: Date;
  registeredAt: Date;
}

export interface Pagination {
  page: number;
  limit: number;
}

export function getCats({ page, limit }: Pagination): Promise<Cat[]> {
  return fetch(`http://localhost:3000/cats?_page=${page}&_limit=${limit}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(
          `Error on fetching cats: ${res.statusText} ${res.status}`,
          {
            cause: {
              res,
            },
          }
        );
      }
      return res;
    })
    .then(response => response.json());
}
