import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useId } from 'react';
import style from './FilterPanel.module.css';
import Icon from '../Icon/Icon';

const schemaYup = Yup.object().shape({});

const FilterPanel = () => {
  const idLocation = useId();

  const defaultValues = {
    location: 'Kyiv, Ukraine',
    equipment: [],
    type: '',
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
    <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
      <div className={style.locationContainer}>
        <label htmlFor={idLocation} className={style.locationLabel}>
          Location
        </label>
        <input
          className={style.locationInput}
          id={idLocation}
          type="text"
          placeholder="City"
          {...register('location')}
        />
        <Icon
          className={style.iconInput}
          id="location"
          width="18"
          height="20"
        />
        {errors.location && <p>{errors.location.message}</p>}
      </div>
      <div>
        <h2 className={style.titleFilters}>Filters</h2>
        <div className={style.equipmentContainer}>
          <h3 className={style.titleList}>Vehicle equipment</h3>
          <ul className={style.listContainer}>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="AC"
                  {...register('equipment')}
                />
                <Icon id="ac" width="32" height="32" />
                AC
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="Automatic"
                  {...register('equipment')}
                />
                <Icon id="automatic" width="32" height="32" />
                Automatic
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="Kitchen"
                  {...register('equipment')}
                />
                <Icon id="kitchen" width="32" height="32" />
                Kitchen
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="TV"
                  {...register('equipment')}
                />
                <Icon id="TV" width="32" height="32" />
                TV
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="Shower"
                  {...register('equipment')}
                />
                <Icon id="shower" width="32" height="32" />
                Shower/WC
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="Freezer"
                  {...register('equipment')}
                />
                <Icon id="freezer" width="32" height="32" />
                Freezer
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="checkbox"
                  value="Microwave"
                  {...register('equipment')}
                />
                <Icon id="microwave" width="32" height="32" />
                Microwave
              </label>
            </li>
          </ul>
        </div>
        <div className={style.typeContainer}>
          <h3 className={style.titleList}>Vehicle type</h3>
          <ul className={style.listContainer}>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="radio"
                  value="Van"
                  {...register('type')}
                />
                <Icon id="van" width="32" height="32" />
                Van
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="radio"
                  value="Fully Integrated"
                  {...register('type')}
                />
                <Icon id="fully" width="32" height="32" />
                Fully Integrated
              </label>
            </li>
            <li className={style.itemContainer}>
              <label className={style.itemLabel}>
                <input
                  className={style.itemCheckbox}
                  type="radio"
                  value="Alcove"
                  {...register('type')}
                />
                <Icon id="alcove" width="32" height="32" />
                Alcove
              </label>
            </li>
          </ul>
        </div>
      </div>
      <button className={style.btnSubmit} type="submit">
        Search
      </button>
    </form>
  );
};

export default FilterPanel;
