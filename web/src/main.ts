import "./style.css";
import typescriptLogo from "./typescript.svg";
import { loadData as loadDataWithoutSpread } from "./withoutSpread";
import { loadData as loadDataWithSpread } from "./withSpread";

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("appElement is null");

appElement.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Improve Performance without spread operator</h1>
    <div class="card">
      <button id="withSpread" type="button">With Spread</button>
    </div>
    <div class="card">
      <button id="withoutSpread" type="button">Without Spread</button>
    </div>
    <ul id="list"></ul>
  </div>
`;

const withSpreadButton =
  document.querySelector<HTMLButtonElement>("#withSpread");
if (!withSpreadButton) throw new Error("withSpreadButton is null");
const withoutSpreadButton =
  document.querySelector<HTMLButtonElement>("#withoutSpread");
if (!withoutSpreadButton) throw new Error("withoutSpreadButton is null");
const listElement = document.querySelector<HTMLUListElement>("#list");
if (!listElement) throw new Error("listElement is null");

const page = 1,
  limit = 100000;

loadDataWithSpread(withSpreadButton, listElement, { page, limit });
loadDataWithoutSpread(withoutSpreadButton, listElement, { page, limit });
