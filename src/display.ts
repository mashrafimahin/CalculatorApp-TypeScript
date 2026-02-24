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
      const currTarget = e.target;
      // condition
      if (currTarget instanceof HTMLButtonElement && currTarget.value) {
        // clear
        if (currTarget.value === "ac") {
          temp = "";
        } else {
          temp += currTarget.value;
        }
      }
      // print
      currentDisplay.textContent = temp;
    }),
  );
}
