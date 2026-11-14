import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
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

    const { register, handleSubmit, formState: { errors } } = useForm({
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
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="logical-block">
            <h2 className="mb-2.5">Добавить нового сотрудника</h2>
            <div className="grid grid-cols-[2fr_2fr_1fr] gap-5">
                <div>
                    <Input {...register('userName')}
                        placeholder="Как его зовут"
                    />
                    <ErrorMessage errors={errors} name="userName" as="p" className="text-red-500 " />
                </div>

                <div>
                    <Input {...register('userSalary')}
                        placeholder="ЗП в долларах"
                    />
                    <ErrorMessage errors={errors} name="userSalary" as="p" className="text-red-500" />
                </div>

                <Button type="submit">Добавить</Button>
            </div>
        </form>
    )
}
