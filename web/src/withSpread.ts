import { CatGroupByBreed, renderCatsByBreed } from "./renderCatsByBreed";

import { getCats, Pagination } from "./api";

export function loadData(
  buttonElement: HTMLButtonElement,
  listElement: HTMLUListElement,
  { page, limit }: Pagination
) {
  const run = async () => {
    const cats = await getCats({ page, limit });
    console.time("runWithSpread");
    const catsByBreed = cats.reduce<CatGroupByBreed>((acc, cat) => {
      // Does breed exists?
      if (acc[cat.breed]) {
        // Yes, add cat to breed
        return {
          ...acc,
          [cat.breed]: [...acc[cat.breed], cat],
        };
      } else {
        // No, create breed and add cat
        return {
          ...acc,
          [cat.breed]: [cat],
        };
      }
    }, {});
    console.timeEnd("runWithSpread");
    renderCatsByBreed(listElement, catsByBreed);
  };
  buttonElement.addEventListener("click", () => run());
}
