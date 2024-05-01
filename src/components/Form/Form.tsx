import './Form.css';
import { FormPropsType } from '../../types';

export default function Form({
  handleSubmit,
  handleChange,
  values,
  currentDate,
  errors,
  isValid,
  isLoading
}: FormPropsType) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="work">Вид работ</label>
      <select className={`form__input ${errors['work'] && 'form__input_error'}`}
        name="work"
        id="work"
        onChange={handleChange}
        value={values['work'] || ''}
        required>
        <option value="">-</option>
        <option value="Плановое ТО">Плановое ТО</option>
        <option value="Ремонт двигателя">Ремонт двигателя</option>
        <option value="Ремонт ходовой части">Ремонт ходовой части</option>
        <option value="Ремонт МКПП">Ремонт МКПП</option>
        <option value="Ремонт АКПП">Ремонт АКПП</option>
        <option value="Диагностика">Диагностика</option>
        <option value="Прочее">Прочее</option>
      </select>
      <span className="form__error">{errors['work']}</span>
      <label className="form__label" htmlFor="auto">Марка автомобиля</label>
      <input className={`form__input ${errors['auto'] && 'form__input_error'}`}
        type="text"
        name="auto"
        id="auto"
        placeholder="Введите название марки"
        onChange={handleChange}
        value={values['auto'] || ''}
        minLength={2}
        required />
      <span className="form__error">{errors['auto']}</span>
      <label className="form__label" htmlFor="date">Выберите дату</label>
      <input className={`form__input ${errors['date'] && 'form__input_error'}`}
        type="date"
        name="date"
        id="date"
        min={currentDate}
        onChange={handleChange}
        value={values['date'] || ''}
        required />
      <span className="form__error">{errors['date']}</span>
      <label className="form__label" htmlFor="time">Выберите время</label>
      <input className={`form__input ${errors['time'] && 'form__input_error'}`}
        type="time"
        name="time"
        id="time"
        min="09:00"
        max="18:00"
        step={1800}
        onChange={handleChange}
        value={values['time'] || ''}
        required />
      <span className="form__error">{errors['time']}</span>
      <label className="form__label" htmlFor="surname">Ваша фамилия</label>
      <input className={`form__input ${errors['surname'] && 'form__input_error'}`}
        type="text"
        name="surname"
        id="surname"
        placeholder="Введите вашу фамилию"
        onChange={handleChange}
        value={values['surname'] || ''}
        minLength={2}
        required />
      <span className="form__error">{errors['surname']}</span>
      <label className="form__label" htmlFor="name">Ваше имя</label>
      <input className={`form__input ${errors['name'] && 'form__input_error'}`}
        type="text"
        name="name"
        id="name"
        placeholder="Введите ваше имя"
        minLength={2}
        maxLength={50}
        onChange={handleChange}
        value={values['name'] || ''}
        required />
      <span className="form__error">{errors['name']}</span>
      <label className="form__label" htmlFor="phone">Ваш телефон</label>
      <input className={`form__input ${errors['phone'] && 'form__input_error'}`}
        type="tel"
        name="phone"
        id="phone"
        placeholder="Введите ваш телефон"
        onChange={handleChange}
        value={values['phone'] || '+7'}
        minLength={12}
        maxLength={12}
        required />
      <span className="form__error">{errors['phone']}</span>
      <p className="form__warning">Нажимая на кнопку «Записаться», Вы подтверждаете своё согласие на обработку Ваших персональных данных.</p>
      <button className="form__button" type="submit" disabled={isLoading || !isValid}>{isLoading ? 'Запись' : 'Записаться'}</button>
    </form>
  )
}