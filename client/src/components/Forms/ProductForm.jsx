import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ProductForm.module.css";
import { useDispatch } from "react-redux";
import { postBeer } from "../../redux/actions";

export default function PostBeer() {
  const dispatch = useDispatch();

  const [sentForm, changeSentForm] = useState(false);
  // const [input, setInput] = useState({
  //   name: "",
  //   image: "",
  //   price: 0,
  //   description: "",
  //   stock: 0,
  // });

  return (
    <Fragment>
      <div className={styles.container}>
        <Formik
          initialValues={{
            name: "",
            image: "",
            price: 0,
            description: "",
            stock: 0,
          }}
          validate={(values) => {
            let errores = {};

            if (!values.name) {
              errores.name = "Please enter a name";
            } else if (!/[a-zA-ZñÑ\s]{2,50}/.test(values.name)) {
              errores.name = "Only letters and spaces";
            }

            if (!values.image) {
              errores.image = "Please enter an image";
            }
            //  else if (
            //   !/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/.test(values.image)
            // ) {
            //   errores.image = "Image must be valid jpg or png file";
            // }

            if (!values.price) {
              errores.price = "Please enter a price";
            } else if (values.price < 0) {
              errores.price = "Price must be over 0";
            }

            if (!values.stock) {
              errores.stock = "Please enter stock";
            } else if (values.stock < 0) {
              errores.stock = "Stock must be over 0";
            }
            return errores;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            dispatch(postBeer(values));
            changeSentForm(true);
            setTimeout(() => changeSentForm(false), 5000);
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            setFieldValue,
            handleBlur,
          }) => (
            <Form className={styles.formulario} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name: </label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                />
              </div>

              <div>
                <label htmlFor="image">Image: </label>
                <input
                  accept="image/png,image/jpeg"
                  type="file"
                  id="image"
                  name="image"
                  //value={values.image}
                  // onChange={handleChange}
                  //onBlur={handleBlur}
                  onChange={(event) =>
                    setFieldValue("image", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="image"
                  component={() => (
                    <div className={styles.error}>{errors.image}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="price">Price: </label>
                <Field type="number" id="price" name="price" />
                <ErrorMessage
                  name="price"
                  component={() => (
                    <div className={styles.error}>{errors.price}</div>
                  )}
                />
              </div>

              <div>
                <label htmlFor="stock">Stock: </label>
                <Field type="number" id="stock" name="stock" />
                <ErrorMessage
                  name="stock"
                  component={() => (
                    <div className={styles.error}>{errors.stock}</div>
                  )}
                />
              </div>
              <div>
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Description"
                />
              </div>
              <button type="submit">Add</button>
              {sentForm && (
                <p className={styles.exito}>
                  Your product has been successfully added!
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}