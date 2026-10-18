import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ListWorker } from "./ListWorker"
import { employees } from '../data/employees'
import { filterEmployees } from '../utils/filterEmployees'

export function SearchWorker() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const query = search.toLowerCase()

    const visibleEmployees = filterEmployees(employees, filter).filter((employee) =>
        employee.name.toLowerCase().includes(query)
    )
    
    return (
        <>
            <div className="logical-block">
                <Input
                    placeholder="Поиск по имени"
                    className='mb-2.5'
                    value={search}
                    onValueChange={setSearch}
                />
                <div className="flex flex-wrap gap-2">
                    <Button onClick={() => setFilter(all)}>Все сотрудники</Button>
                    <Button onClick={() => setFilter(promotion)}>Получат пермию</Button>
                    <Button onClick={() => setFilter(salary)}>ЗП больше 1000$</Button>
                </div>
            </div>
            <ListWorker data={visibleEmployees} />
        </>
    )
}
