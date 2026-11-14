import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
    userName: z
        .string()
        .min(1, "Обязательно для заполнения")
        .regex(/^[a-zA-Z]+$/, "Латинские буквы"),
    userSalary: z
        .string()
        .min(1, "Обязательно для заполнения")
        .regex(/^\d+$/, "Цифры"),
})

export function AddWorker({ newUser }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        newUser({
            id: crypto.randomUUID(),
            name: data.userName,
            salary: data.userSalary,
            bonus: false,
            promotion: false
        });
        reset(); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="logical-block">
            <h2 className="mb-2.5">Добавить нового сотрудника</h2>
            <div className="flex gap-2 flex-col sm:flex-row">
                    <Input {...register('userName')}
                        error={errors.userName?.message}
                        placeholder="Как его зовут"
                    />

                    <Input {...register('userSalary')}
                        error={errors.userSalary?.message}
                        placeholder="ЗП в долларах"
                    />

                <Button type="">Добавить</Button>
            </div>
        </form>
    )
}
