import { FaTrash, FaCookie, FaStar } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export function ListWorker({ employees, onRemove, onToggleBonus, onTogglePromotion }) {
    if (employees.length === 0) {
        return <p className="logical-block text-muted-foreground">Сотрудники не найдены</p>
    }

    return (
        <ul className="logical-block flex flex-col gap-2.5">
            {employees.map((item) => {
                return (
                    <li key={item.id} className="grid grid-cols-[3fr_1fr_1fr]">
                        <span
                            role="button"
                            tabIndex={0}
                            title="Повысить в должности"
                            className="cursor-pointer select-none hover:text-foreground hover:underline"
                            onClick={() => onTogglePromotion(item.id)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    onTogglePromotion(item.id)
                                }
                            }}
                        >
                            {item.name}
                        </span>
                        <span>{item.salary}$</span>
                        <span className="flex gap-2 items-center">
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-pressed={item.bonus}
                                aria-label={`Начислить премию: ${item.name}`}
                                onClick={() => onToggleBonus(item.id)}
                            >
                                <FaCookie
                                    className={`text-muted-foreground ${item.bonus ? "fill-orange-500 text-orange-500" : ""
                                        }`}
                                />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label={`Удалить ${item.name}`}
                                onClick={() => onRemove(item.id)}
                            >
                                <FaTrash />
                            </Button>
                            {item.promotion && (
                                <FaStar className="fill-yellow-400 text-yellow-400" />
                            )}
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}
