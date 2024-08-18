import style from './BookForma.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const schemaYup = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  date: Yup.date().required('Date is required'),
  comment: Yup.string().nullable(),
});

const BookForma = ({ onCloseModal }) => {
  const defaultValues = {
    name: '',
    email: '',
    date: null,
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
    Notify.success('Camper successfully booked!');
    onCloseModal();
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
            {errors.name && (
              <p className={style.errorsText}>{errors.name.message}</p>
            )}
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
            {errors.email && (
              <p className={style.errorsText}>{errors.email.message}</p>
            )}
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
            {errors.date && (
              <p className={style.errorsText}>{errors.date.message}</p>
            )}
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
            {errors.comment && (
              <p className={style.errorsText}>{errors.comment.message}</p>
            )}
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
