import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddWorkerRHF({ newUser }) {

    const { register, handleSubmit, formState } = useForm({
        mode: 'onChange',
    });


    const onSubmit = (data) => {
        newUser({ 
            id: crypto.randomUUID(), 
            name: data.name, 
            salary: data.salary, 
            bonus: false, 
            promotion: false 
        });
    };

    const salatyError = formState.errors.salaty?.message;
    const nameError = formState.errors.name?.message;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="logical-block">
            <h2 className="mb-2.5">Добавить нового сотрудника</h2>
            <div className="grid grid-rows-2 grid-cols-[2fr_2fr_1fr] gap-x-5">
                <Input {...register('name', {
                    required: "Обязательно для заполнения",
                    pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Латинские буквы"
                    }
                })}
                    placeholder="Как его зовут"
                />
                <Input{...register('salary', {
                    required: "Обязательно для заполнения",
                    pattern: {
                        value: /^\d+$/,
                        message: "Цифры"
                    }
                })}
                    placeholder="ЗП в долларах"
                />
                <Button type="submit" >Добавить</Button>
                {nameError && <p className="text-red-300">{nameError}</p>}
                {salatyError && <p className="text-red-300">{salatyError}</p>}
            </div>
        </form>
    )
}
