import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../Button/Button';
import InputField from '../../Fields/InputField/InputField';
import TextArea from '../../Fields/TextArea/TextArea';
import styles from './NewPostForm.module.css';
const NewPostForm = ({ theme, auth }) => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values} =
    useFormik({
      initialValues: {
        title: '',
        categories: [],
        price: '',
        time: '',
        level: [],
        description: '',
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
        description: Yup.string()
          .min(50, 'Treść ogłoszenia musi mieć conajmniej 50 znaków')
          .required('To pole jest wymagane'),
      }),
      onSubmit: async ({
        title,
        categories,
        price,
        time,
        level,
        description,
      }) => {
        console.log(title, categories, price, time, level, description);
        try {
          const response = await axios.post(
            `https://helply-backend.herokuapp.com/api/posts/`,
            {
              title,
              price,
              time,
              categories,
              level,
              description,
              accessToken: auth.accessToken,
            },
            {
              headers: {
                'content-type': 'application/json',
              },
              withCredentials: true,
            }
          );
          navigate(`/post/${response.data}`);
        } catch (error) {
          console.log(error);
        }
      },
    });
  return (
    <form
      className={
        theme === 'light'
          ? styles.form
          : styles.form + ` ${styles['form-dark']}`
      }
      onSubmit={handleSubmit}
    >
      <h3>Podstawowe informacje</h3>
      <InputField
        placeholder='Tytuł ogłoszenia'
        className='text__input'
        type='text'
        theme={theme}
        name='title'
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputField
        placeholder='Cena za lekcję'
        className={styles.number__input}
        type='number'
        theme={theme}
        name='price'
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputField
        placeholder='Czas lekcji'
        className={styles.number__input}
        type='number'
        theme={theme}
        name='time'
        value={values.time}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <h3>Dodatkowe informacje</h3>
      <TextArea
        placeholder='Treść ogłoszenia'
        className={styles.form__textarea}
        theme={theme}
        value={values.description}
        onChange={handleChange}
        name='description'
      ></TextArea>
      <span>
        <h4>Kategorie</h4>
        <div className={styles.form__categories}>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Języki obce</p>
            <input
              type='checkbox'
              value='english'
              name='categories'
              id='english'
              onChange={handleChange}
            />
            <label htmlFor='english'>Angielski</label>
            <input
              type='checkbox'
              value='dutch'
              name='categories'
              onChange={handleChange}
              id='dutch'
            />
            <label htmlFor='dutch'>Niemiecki</label>
            <input
              type='checkbox'
              value='french'
              name='categories'
              onChange={handleChange}
              id='french'
            />
            <label htmlFor='french'>Francuski</label>
            <input
              type='checkbox'
              value='spanish'
              name='categories'
              onChange={handleChange}
              id='spanish'
            />
            <label htmlFor='spanish'>Hiszpański</label>
            <input
              type='checkbox'
              value='hungarian'
              name='categories'
              onChange={handleChange}
              id='hungarian'
            />
            <label htmlFor='hungarian'>Węgierski</label>
            <input
              type='checkbox'
              value='russian'
              name='categories'
              onChange={handleChange}
              id='russian'
            />
            <label htmlFor='russian'>Rosyjski</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Humanistyczne</p>
            <input
              type='checkbox'
              value='polish'
              id='polish'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='polish'>Język polski</label>
            <input
              type='checkbox'
              value='history'
              id='history'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='history'>Historia</label>
            <input
              type='checkbox'
              value='philosophy'
              id='philosophy'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='philosophy'>Filozofia</label>
            <input
              type='checkbox'
              value='law'
              id='law'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='law'>Prawo</label>
            <input
              type='checkbox'
              value='ethics'
              id='ethics'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='ethics'>Etyka</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Ścisłe</p>
            <input
              type='checkbox'
              value='math'
              id='math'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='math'>Matematyka</label>
            <input
              type='checkbox'
              value='robotics'
              id='robotics'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='robotics'>Robotyka</label>
            <input
              type='checkbox'
              value='electrotechnics'
              id='electrotechnics'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='electrotechnics'>Elektrotechnika</label>
            <input
              type='checkbox'
              value='coding'
              id='coding'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='coding'>Programowanie</label>
            <input
              type='checkbox'
              value='it'
              id='it'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='it'>Informatyka</label>
            <input
              type='checkbox'
              value='physics'
              id='physics'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='physics'>Fizyka</label>
            <input
              type='checkbox'
              value='architecture'
              id='architecture'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='architecture'>Architektura</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Przyrodnicze</p>
            <input
              type='checkbox'
              value='biology'
              id='biology'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='biology'>Biologia</label>
            <input
              type='checkbox'
              value='geography'
              id='geography'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='geography'>Geografia</label>
            <input
              type='checkbox'
              value='chemistry'
              id='chemistry'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='chemistry'>Chemia</label>
            <input
              type='checkbox'
              value='geodesy'
              id='geodesy'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='geodesy'>Geodezja</label>
            <input
              type='checkbox'
              value='medicine'
              id='medicine'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='medicine'>Medycyna</label>
          </div>
          <div className={styles.categories__subcategory}>
            <p className={styles.subcategory__name}>Ekonomiczne</p>
            <input
              type='checkbox'
              value='marketing'
              id='marketing'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='marketing'>Marketing</label>
            <input
              type='checkbox'
              value='counting'
              id='counting'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='counting'>Rachunkowość</label>
            <input
              type='checkbox'
              value='finances'
              id='finances'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='finances'>Finanse</label>
            <input
              type='checkbox'
              value='banking'
              id='banking'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='banking'>Bankowość</label>
            <input
              type='checkbox'
              value='management'
              id='management'
              name='categories'
              onChange={handleChange}
            />
            <label htmlFor='management'>Zarządzanie</label>
          </div>
        </div>
      </span>
      <span>
        <h4>Poziom nauczania</h4>
        <div className={styles.form__levels}>
          <input
            type='checkbox'
            value='primary'
            name='level'
            id='primary'
            onChange={handleChange}
          />
          <label htmlFor='primary'>Podstawówka</label>
          <input
            type='checkbox'
            value='high'
            name='level'
            id='high'
            onChange={handleChange}
          />
          <label htmlFor='high'>Szkoła średnia</label>
          <input
            type='checkbox'
            value='studies'
            name='level'
            id='studies'
            onChange={handleChange}
          />
          <label htmlFor='studies'>Studia</label>
        </div>
      </span>
      <span className={styles.form__buttons}>
        <Link to='/'>
          <Button className={styles.form__button}>Anuluj</Button>
        </Link>
        <Button
          className={styles.form__button}
          type='submit'
          id='add'
          primary='true'
        >
          Dodaj
        </Button>
      </span>
    </form>
  );
};

export default NewPostForm;
