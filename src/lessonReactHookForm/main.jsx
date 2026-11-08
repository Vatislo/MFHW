import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import './style.css'

export function Appeska() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: 'onChange',
    defaultValues: {
      gender: "Выбрать пол"
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='superForm' onSubmit={handleSubmit(onSubmit)}>
      
      <input 
        placeholder="Первое имя" 
        {...register('firstName', { required: "Обязательно для заполнения" })} 
      />
      <ErrorMessage errors={errors} name='firstName' as="p"/>

      <input 
        placeholder="Второе имя" 
        {...register('secondName', { required: "Обязательно для заполнения" })} 
      />
      <ErrorMessage errors={errors} name='secondName' as="p"/>

      <input 
        placeholder="Мыло" 
        type="email" 
        {...register('email', {
          required: "Обязательно для заполнения",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Неправильный синтаксис email',
          }
        })}
      />
      <ErrorMessage errors={errors} name='email' as="p"/>

      <input 
        placeholder="Пассворд" 
        type="password"
        {...register('password', {
          required: "Обязательно для заполнения",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'Минимум 8 символов, нужны буквы и цифры'
          }
        })} 
      />
      <ErrorMessage errors={errors} name='password' as="p"/>

      <input 
        placeholder="Мобила" 
        type="tel"
        {...register('phone', {
          required: "Обязательно для заполнения",
          pattern: {
            value: /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
            message: 'Неправильный синтаксис телефона'
          }
        })} 
      />
      <ErrorMessage errors={errors} name='phone' as="p"/>

      <select {...register('gender', {
        validate: (value) => value !== "Выбрать пол" || "Выберите корректный пол"
      })}>
        <option value="Выбрать пол" disabled>Выбрать пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </select>
      <ErrorMessage errors={errors} name='gender' as="p"/>

      <button type="submit" style={{ marginTop: '12px', padding: '8px' }}>
        Отправить 0_0
      </button>
      
    </form>
  );
}