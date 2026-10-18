import { FaTrash, FaCookie } from 'react-icons/fa'

export function ListWorker({ data }) {
    if (data.length === 0) {
        return <p className="logical-block text-muted-foreground">Сотрудники не найдены</p>
    }

    return (
        <ul className="logical-block flex flex-col gap-2.5">
            {data.map((item) => {
                return (
                    <li key={item.id} className="grid grid-cols-[3fr_1fr_1fr]">
                        <span>{item.name}</span>
                        <span>{item.salary}$</span>
                        <span className="flex gap-2 items-center"> <FaCookie /><FaTrash /></span>
                    </li>
                )
            })}
        </ul>
    )
}
