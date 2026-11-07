import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddWorker({ onAdd }) {
    const nameRef = useRef("")
    const salaryRef = useRef("")

    function handleSubmit() {
        const name = nameRef.current.value
        const salary = salaryRef.current.value
        if (!name.trim() || !salary) return

        const newEmp = {
            id: crypto.randomUUID(),
            name: name.trim(),
            salary: Number(salary),
            bonus: false,
            promotion: false,
        }

        onAdd(newEmp)

        nameRef.current.value = ""
        salaryRef.current.value = ""
    }

    return (
        <div className="logical-block">
            <h2 className="mb-2.5">Добавить нового сотрудника</h2>
            <div className="grid grid-cols-[2fr_2fr_1fr] gap-2">
                <Input
                    placeholder="Как его зовут"
                    ref={nameRef}
                />
                <Input
                    placeholder="ЗП в долларах"
                    ref={salaryRef}
                />
                <Button onClick={handleSubmit}>Добавить</Button>
            </div>
        </div>
    )
}
