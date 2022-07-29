import { React, Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ProductForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateBeer } from "../../redux/actions";


export default function UpdateBeer() {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);
  const [currentDetail, setCurrentDetail] = useState({
    id: detail.id,
    name: detail.name,
    image: detail.image,
    price: detail.price,
    description: detail.description,
    stock: detail.stock
  });
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
            name: detail.name,
            image: detail.image,
            price: '',
            description: detail.description,
            stock: '',
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
            dispatch(updateBeer(values, detail.id));
            changeSentForm(true);
            setTimeout(() => changeSentForm(false), 5000);
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
                <label>id: {currentDetail.id}</label>
                <label>Name: {currentDetail.name}</label>
              </div>
              <div>
                <label >Image: {currentDetail.image}</label>
                {/* <input
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
                /> */}
              </div>
              <div>
                <label htmlFor="price">Previous price: ${currentDetail.price}</label>
                <label htmlFor="price">Current price: </label>
                <Field type="number" id="price" name="price" min='1' />
                <ErrorMessage
                  name="price"
                  component={() => (
                    <div className={styles.error}>{errors.price}</div>
                  )}
                />
              </div>

              <div>
                <label htmlFor="stock">Previous stock: {currentDetail.stock}</label>
                <label htmlFor="stock">Current stock: </label>
                <Field type="number" id="stock" name="stock" min='1' max='4000000' />
                <ErrorMessage
                  name="stock"
                  component={() => (
                    <div className={styles.error}>{errors.stock}</div>
                  )}
                />
              </div>
              <div>
                <label>Description: {detail.description}</label>
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