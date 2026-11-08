import { useForm } from 'react-hook-form';
import './style.css'

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: 'red', margin: '4px 0 8px 0', fontSize: '13px' }}>
      {error.message}
    </p>
  );
};

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
      <ErrorMessage error={errors.firstName} />

      <input 
        placeholder="Второе имя" 
        {...register('secondName', { required: "Обязательно для заполнения" })} 
      />
      <ErrorMessage error={errors.secondName} />

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
      <ErrorMessage error={errors.email} />

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
      <ErrorMessage error={errors.password} />

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
      <ErrorMessage error={errors.phone} />

      <select {...register('gender', {
        validate: (value) => value !== "Выбрать пол" || "Выберите корректный пол"
      })}>
        <option value="Выбрать пол" disabled>Выбрать пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </select>
      <ErrorMessage error={errors.gender} />

      <button type="submit" style={{ marginTop: '12px', padding: '8px' }}>
        Отправить 0_0
      </button>
      
    </form>
  );
}