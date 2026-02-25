// component
import { Calc } from "./calc";
// main
export function Display(doc: HTMLDivElement | null) {
  if (!doc) return;
  // targets
  const currentDisplay = doc.querySelector<HTMLHeadingElement>(".display h1");
  const btns = doc.querySelectorAll<HTMLButtonElement>(".btns button");
  // epmty return
  if (!currentDisplay) return;
  // empty store
  let temp: string = "";
  // event listeners
  btns?.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      // target set
      const currTarget = e.target as HTMLButtonElement;
      // value
      const num = currTarget.value;
      // condition
      if (num === "ac") {
        temp = "";
      } else if (num === "ce") {
        temp = temp.slice(0, -1);
      } else if (num === "equal") {
        temp = Calc(temp);
      } else {
        temp += num;
      }
      // print
      currentDisplay.textContent = temp;
    }),
  );
}
