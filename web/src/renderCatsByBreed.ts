import type { Cat } from "./api";

export interface CatGroupByBreed {
  [breed: string]: Cat[];
}

export function renderCatsByBreed(
  element: HTMLUListElement,
  catsByBreed: CatGroupByBreed
): void {
  element.innerHTML = "";
  Object.entries(catsByBreed).forEach(([breed, cats]) => {
    // create breed element
    const breedElement = document.createElement("li");
    const breedText = document.createElement("span");
    breedText.innerText = breed;
    breedElement.appendChild(breedText);

    // create cats element
    const catsElement = document.createElement("ul");
    cats.forEach(cat => {
      const catElement = document.createElement("li");
      catElement.innerText = cat.name;
      catsElement.appendChild(catElement);
    });
    breedElement.appendChild(catsElement);
    element.appendChild(breedElement);
  });
}
