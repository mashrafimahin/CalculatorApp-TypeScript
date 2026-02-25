// component
import { Display } from "./display";
// styles
import "./style.css";

// element
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="calc">
    <div class="display">
      <h1></h1>
    </div>
    <div class="btns">
    
      <button value=""></button>
      <button value="percent">%</button>
      <button value="ce" class='once'>CE</button>
      <button value="ac" class="clear">AC</button>

      <button value='7'>7</button>
      <button value='8'>8</button>
      <button value='9'>9</button>
      <button value='/' class="optr">&divide;</button>

      <button value='4'>4</button>
      <button value='5'>5</button>
      <button value='6'>6</button>
      <button value='*' class="optr">&times;</button>
      
      <button value='1'>1</button>
      <button value='2'>2</button>
      <button value='3'>3</button>
      <button value='-' class="optr">-</button>

      <button value='0'>0</button>
      <button value='.'>.</button>
      <button value='equal'>=</button>
      <button value='+' class="optr">+</button>

    </div>
  </div>
`;

// docs
const doc = document.querySelector<HTMLDivElement>(".calc");

// pass data
Display(doc);
