import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";

// React Component
export function App() {
  return (
  <>
    <Weather />
    <Counter />
    <Counter initialValue={3} diff={2} />
  </>
  );
}
