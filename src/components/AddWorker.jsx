import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddWorker() {
    return (
        <div className="logical-block">
            <h2 className="mb-2.5">Добавить  нового сотрудника</h2>
            <div className="grid grid-cols-[2fr_2fr_1fr] gap-2">
                <Input placeholder="Как его зовут" />
                <Input placeholder="ЗП в долларах" />
                <Button>Добавить</Button>
            </div>
        </div>
    )
}
