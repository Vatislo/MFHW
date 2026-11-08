import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddWorker({ newUser }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
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
                    <Input {...register('userName', {
                        required: "Обязательно для заполнения",
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Латинские буквы"
                        }
                    })}
                        placeholder="Как его зовут"
                    />
                    <ErrorMessage errors={errors} name="userName" as="p" className="text-red-500 " />
                </div>

                <div>
                    <Input {...register('userSalary', {
                        required: "Обязательно для заполнения",
                        pattern: {
                            value: /^\d+$/,
                            message: "Цифры"
                        }
                    })}
                        placeholder="ЗП в долларах"
                    />
                    <ErrorMessage errors={errors} name="userSalary" as="p" className="text-red-500" />
                </div>

                <Button type="submit">Добавить</Button>
            </div>
        </form>
    )
}
