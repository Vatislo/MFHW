
import { Heading, SearchWorker, AddWorker } from './components/index';

export function App() {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col gap-5 pt-5">
      <Heading />
      <SearchWorker />
      {/* <ListWorker /> */}
      <AddWorker />
    </div>
  );
}
