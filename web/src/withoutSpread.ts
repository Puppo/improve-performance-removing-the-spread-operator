import { getCats, Pagination } from "./api";
import { CatGroupByBreed, renderCatsByBreed } from "./renderCatsByBreed";

export function loadData(
  buttonElement: HTMLButtonElement,
  listElement: HTMLUListElement,
  { page, limit }: Pagination
) {
  const run = async () => {
    const cats = await getCats({ page, limit });
    console.time("runWithoutSpread");
    const catsByBreed = cats.reduce<CatGroupByBreed>((acc, cat) => {
      // Does breed exists?
      if (acc[cat.breed]) acc[cat.breed].push(cat); // Yes, add cat to breed
      // No, create breed and add cat
      else acc[cat.breed] = [cat];

      return acc;
    }, {});
    console.timeEnd("runWithoutSpread");
    renderCatsByBreed(listElement, catsByBreed);
  };
  buttonElement.addEventListener("click", () => run());
}
