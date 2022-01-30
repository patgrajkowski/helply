import { useFormik } from 'formik';
import React from 'react';
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
        <div>
          <input type='checkbox' value='languages' />
          <label for='languages'>Języki obce</label>
          <input type='checkbox' value='math' />
          <label for='math'>Matematyka</label>
          <input type='checkbox' value='economy' />
          <label for='math'>Ekonomia</label>
          <input type='checkbox' value='architecture' />
          <label for='architecture'>Architektura</label>
          <input type='checkbox' value='it' />
          <label for='it'>Informatyka</label>
          <input type='checkbox' value='coding' />
          <label for='coding'>Programowanie</label>
          <input type='checkbox' value='biology' />
          <label for='biology'>Biologia</label>
          <input type='checkbox' value='history' />
          <label for='history'>Historia</label>
          <input type='checkbox' value='law' />
          <label for='law'>Prawo</label>
          <input type='checkbox' value='ethics' />
          <label for='ethics'>Etyka</label>
          <input type='checkbox' value='chemistry' />
          <label for='chemistry'>Chemia</label>
        </div>
      </span>
      <span>
        <h4>Poziom nauczania</h4>
        <div>
          <input type='checkbox' value='primary' />
          <label for='primary'>Podstawówka</label>
          <input type='checkbox' value='high' />
          <label for='high'>Szkoła średnia</label>
          <input type='checkbox' value='studies' />
          <label for='studies'>Studia</label>
        </div>
      </span>
      <span className={styles.form__buttons}>
        <Button className={styles.form__button}>Anuluj</Button>
        <Button className={styles.form__button} primary='true'>
          Dodaj
        </Button>
      </span>
    </form>
  );
};

export default NewPostForm;
