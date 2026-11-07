import { useState } from 'react';
import { Heading, SearchWorker, AddWorkerRHF } from './components';
import { employees as initialEmployees } from './data/employees';

export function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  function handleAdd(newEmp) {
    setEmployees((prev) => [...prev, newEmp]);
  }

  function handleRemove(id) {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  }

  function handleToggleBonus(id) {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, bonus: !emp.bonus } : emp))
    );
  }

  function handleTogglePromotion(id) {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, promotion: !emp.promotion } : emp))
    );
  }

  return (
    <div className="max-w-[600px] mx-auto flex flex-col gap-5 pt-5">
      <Heading employees={employees} />
      <SearchWorker
        employees={employees}
        onRemove={handleRemove}
        onToggleBonus={handleToggleBonus}
        onTogglePromotion={handleTogglePromotion}

      />
      <AddWorkerRHF newUser={handleAdd} />
    </div>
  );
}
