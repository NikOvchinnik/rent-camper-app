import style from "./BookForma.module.css"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schemaYup = Yup.object().shape({});

const BookForma = () => {
  const defaultValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schemaYup),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={style.formTitle}>Book your campervan now</h3>
        <p className={style.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={style.formInputContainer}>
          <label>
            <input
              className={style.formInput}
              type="text"
              {...register('name')}
              placeholder="Name"
            />
          </label>
        </div>
        <div className={style.formInputContainer}>
          <label>
            <input
              className={style.formInput}
              type="email"
              {...register('email')}
              placeholder="Email"
            />
          </label>
        </div>
        <div className={style.formInputContainer}>
          <label>
            <input
              className={style.formInput}
              type="date"
              {...register('date')}
              placeholder="Booking date"
            />
          </label>
        </div>
        <div className={style.formInputContainer}>
          <label>
            <textarea
              className={style.formInput}
              {...register('comment')}
              placeholder="Comment"
              rows="4"
            />
          </label>
        </div>
        <button className={style.formSubmit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForma;
