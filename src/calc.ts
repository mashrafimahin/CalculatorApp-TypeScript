export function Calc(val: string): string {
  let result = eval(val);
  return result.toString();
}
