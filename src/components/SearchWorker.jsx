import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ListWorker } from "./ListWorker"
import { filterEmployees } from '../utils/filterEmployees'

export function SearchWorker({ employees, onRemove, onToggleBonus, onTogglePromotion }) {
    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState("all")

    const visibleEmployees = filterEmployees(employees, filter).filter((employee) =>
        employee.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            <div className="logical-block">
                <Input
                    placeholder="Поиск по имени"
                    className='mb-2.5'
                    value={query}
                    onValueChange={setQuery}
                />
                <div className="flex gap-2">
                    <Button onClick={() => setFilter("all")}>Все сотрудники</Button>
                    <Button onClick={() => setFilter("bonus")}>Получат премию</Button>
                    <Button onClick={() => setFilter("salary")}>ЗП больше 1000$</Button>
                </div>
            </div>
            <ListWorker
                employees={visibleEmployees}
                onRemove={onRemove}
                onToggleBonus={onToggleBonus}
                onTogglePromotion={onTogglePromotion}
            />
        </>
    )
}
