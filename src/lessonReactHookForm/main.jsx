import { useForm } from 'react-hook-form';
import './style.css'

export function Appeska() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      gender: "Выбрать пол"
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // я уверен что както можно эти 6 констант для ошибок оптимизировать, но это не суть занятия
  const emailError = formState.errors.email?.message;
  const firstNameError = formState.errors.firstName?.message;
  const secondNameError = formState.errors.secondName?.message;
  const passwordError = formState.errors.password?.message;
  const phoneError = formState.errors.phone?.message;
  const genderError = formState.errors.gender?.message;

  return (
    <form className='LRHF-form' onSubmit={handleSubmit(onSubmit)}>

      <input className='LRHF-input' placeholder='Первое имя' {...register('firstName', {
        required: "обязательно я для заполнения",
      })} />
      {firstNameError && <p>{firstNameError}</p>}

      <input className='LRHF-input' placeholder='Имя мати' {...register('secondName', {
        required: "обязательно я для заполнения",
      })} />
      {secondNameError && <p>{secondNameError}</p>}

      <input className='LRHF-input' placeholder='Мыло'
        {...register('email', {
          required: 'обязательно я для заполнения',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Неправельный синтаксис',
          }
        })}
      />
      {emailError && <p>{emailError}</p>}

      <input className='LRHF-input' placeholder='Пассворд' {...register('password', {
        required: "обязательно я для заполнения",
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          message: 'Минимум 8 символов, нужны буквы и цифры'
        }
      })} />
      {passwordError && <p>{passwordError}</p>}

      <input className='LRHF-input' placeholder='Мобила' {...register('phone', {
        required: "обязательно я для заполнения",
        pattern: {
          value: /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
          message: 'Неправельный синтаксис'
        }
      })} />
      {phoneError && <p>{phoneError}</p>}

      <select className='LRHF-input' {...register('gender', {
        validate: (value) => value === 'Мужской' || value === 'Женский' || 'Выберите из 2'
      })}>
        <option value="Выбрать пол" disabled>Выбрать отсутствие или не отсутствие</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
      </select>

      {genderError && <p>{genderError}</p>}

      <button className='LRHF-button' type="submit">0_0</button>
    </form>
  );
}