import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../Button/Button';
import InputField from '../../Fields/InputField/InputField';
import TextArea from '../../Fields/TextArea/TextArea';
import styles from './NewPostForm.module.css';
const NewPostForm = ({ theme }) => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: '',
        categories: '',
        price: '',
        time: '',
        level: '',
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .min(6, 'Tytuł musi mieć conajmniej 6 znaków.')
          .required('Tytuł jest wymagany.'),
        categories: Yup.array().min(
          1,
          'Musisz przypisać ogłoszenie do conajmniej jednej kategorii.'
        ),
        price: Yup.number().required('Musisz okreśić cenę za lekcję.'),
        time: Yup.number().required('Musisz okreśić czas pojedyńczej lekcji.'),
        level: Yup.array().min(
          1,
          'Musisz przypisać do ogłoszenia conajmniej jeden z poziomów nauczania'
        ),
      }),
      onSubmit: ({ title, categories, price, time, level }) => {
        console.log(title, categories, price, time, level);
      },
    });
  return (
    <form
      className={
        theme === 'light'
          ? styles.form
          : styles.form + ` ${styles['form-dark']}`
      }
    >
      <h3>Podstawowe informacje</h3>
      <InputField
        placeholder='Tytuł ogłoszenia'
        className='text__input'
        type='text'
        theme={theme}
      />
      <InputField
        placeholder='Cena za lekcję'
        className={styles.number__input}
        type='number'
        theme={theme}
      />
      <InputField
        placeholder='Czas lekcji'
        className={styles.number__input}
        type='number'
        theme={theme}
      />
      <h3>Dodatkowe informacje</h3>
      <TextArea
        placeholder='Treść ogłoszenia'
        className={styles.form__textarea}
        theme={theme}
      ></TextArea>
      <span>
        <h4>Kategorie</h4>
        <div className={styles.form__categories}>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Języki obce</p>
            <input
              type='checkbox'
              value='english'
              name='category'
              id='english'
            />
            <label htmlFor='english'>Angielski</label>
            <input type='checkbox' value='dutch' name='category' id='dutch' />
            <label htmlFor='dutch'>Niemiecki</label>
            <input type='checkbox' value='french' name='category' id='french' />
            <label htmlFor='french'>Francuski</label>
            <input
              type='checkbox'
              value='spanish'
              name='category'
              id='spanish'
            />
            <label htmlFor='spanish'>Hiszpański</label>
            <input
              type='checkbox'
              value='hungarian'
              name='category'
              id='hungarian'
            />
            <label htmlFor='hungarian'>Węgierski</label>
            <input
              type='checkbox'
              value='russian'
              name='category'
              id='russian'
            />
            <label htmlFor='russian'>Rosyjski</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Humanistyczne</p>
            <input type='checkbox' value='polish' id='polish' name='category' />
            <label htmlFor='polish'>Język polski</label>
            <input
              type='checkbox'
              value='history'
              id='history'
              name='category'
            />
            <label htmlFor='history'>Historia</label>
            <input
              type='checkbox'
              value='philosophy'
              id='philosophy'
              name='category'
            />
            <label htmlFor='philosophy'>Filozofia</label>
            <input type='checkbox' value='law' id='law' name='category' />
            <label htmlFor='law'>Prawo</label>
            <input type='checkbox' value='ethics' id='ethics' name='category' />
            <label htmlFor='ethics'>Etyka</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Ścisłe</p>
            <input type='checkbox' value='math' id='math' name='category' />
            <label htmlFor='math'>Matematyka</label>
            <input
              type='checkbox'
              value='robotics'
              id='robotics'
              name='category'
            />
            <label htmlFor='robotics'>Robotyka</label>
            <input
              type='checkbox'
              value='electrotechnics'
              id='electrotechnics'
              name='category'
            />
            <label htmlFor='electrotechnics'>Elektrotechnika</label>
            <input type='checkbox' value='coding' id='coding' name='category' />
            <label htmlFor='coding'>Programowanie</label>
            <input type='checkbox' value='it' id='it' name='category' />
            <label htmlFor='it'>Informatyka</label>
            <input
              type='checkbox'
              value='physics'
              id='physics'
              name='category'
            />
            <label htmlFor='physics'>Fizyka</label>
            <input
              type='checkbox'
              value='architecture'
              id='architecture'
              name='category'
            />
            <label htmlFor='architecture'>Architektura</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Przyrodnicze</p>
            <input
              type='checkbox'
              value='biology'
              id='biology'
              name='category'
            />
            <label htmlFor='biology'>Biologia</label>
            <input
              type='checkbox'
              value='geography'
              id='geography'
              name='category'
            />
            <label htmlFor='geography'>Geografia</label>
            <input
              type='checkbox'
              value='chemistry'
              id='chemistry'
              name='category'
            />
            <label htmlFor='chemistry'>Chemia</label>
            <input
              type='checkbox'
              value='geodesy'
              id='geodesy'
              name='category'
            />
            <label htmlFor='geodesy'>Geodezja</label>
            <input
              type='checkbox'
              value='medicine'
              id='medicine'
              name='category'
            />
            <label htmlFor='medicine'>Medycyna</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Ekonomiczne</p>
            <input
              type='checkbox'
              value='marketing'
              id='marketing'
              name='marketing'
            />
            <label htmlFor='marketing'>Marketing</label>
            <input
              type='checkbox'
              value='counting'
              id='counting'
              name='counting'
            />
            <label htmlFor='counting'>Rachunkowość</label>
            <input
              type='checkbox'
              value='finances'
              id='finances'
              name='category'
            />
            <label htmlFor='finances'>Finanse</label>
            <input
              type='checkbox'
              value='banking'
              id='banking'
              name='banking'
            />
            <label htmlFor='banking'>Bankowość</label>
            <input
              type='checkbox'
              value='management'
              id='management'
              name='management'
            />
            <label htmlFor='management'>Zarządzanie</label>
          </div>
        </div>
      </span>
      <span>
        <h4>Poziom nauczania</h4>
        <div className={styles.form__levels}>
          <input type='checkbox' value='primary' name='level' id='primary' />
          <label htmlFor='primary'>Podstawówka</label>
          <input type='checkbox' value='high' name='level' id='high' />
          <label htmlFor='high'>Szkoła średnia</label>
          <input type='checkbox' value='studies' name='level' id='studies' />
          <label htmlFor='studies'>Studia</label>
        </div>
      </span>
      <span className={styles.form__buttons}>
        <Link to='/'>
          <Button className={styles.form__button}>Anuluj</Button>
        </Link>
        <Button className={styles.form__button} type='submit' primary='true'>
          Dodaj
        </Button>
      </span>
    </form>
  );
};

export default NewPostForm;
