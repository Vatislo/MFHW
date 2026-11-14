import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  firstName: z.string().min(1, "Обязательно для заполнения"),
  secondName: z.string().min(1, "Обязательно для заполнения"),
  email: z
    .string()
    .min(1, "Обязательно для заполнения")
    .email("Неправильный синтаксис email"),
  password: z
    .string()
    .min(1, "Обязательно для заполнения")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Минимум 8 символов, нужны буквы и цифры"
    ),
  phone: z
    .string()
    .min(1, "Обязательно для заполнения")
    .regex(
      /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
      "Неправильный синтаксис телефона"
    ),
  gender: z.string().refine(
    (value) => value !== "Выбрать пол",
    "Выберите корректный пол"
  ),
});

export function Appeska() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      gender: "Выбрать пол"
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <form className="logical-block flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>

      <Input
        {...register('firstName')}
        error={errors.firstName?.message}
        placeholder="Первое имя"
      />
      <Input
        {...register('secondName')}
        error={errors.secondName?.message}
        placeholder="Второе имя"
      />
      <Input
        {...register('email')}
        type="email"
        error={errors.email?.message}
        placeholder="Мыло"
      />
      <Input
        {...register('password')}
        type="password"
        error={errors.password?.message}
        placeholder="Пассворд"
      />
      <Input
        {...register('phone')}
        type="tel"
        error={errors.phone?.message}
        placeholder="Мобила"
      />
      <select className='
        h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
      ' {...register('gender')}>
        <option value="Выбрать пол" disabled>Выбрать пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </select>

      <Button type="submit">
        Отправить 0_0
      </Button>

    </form>
  );
}