import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ProductForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSellers, postBeer } from "../../redux/actions";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import { useEffect } from "react";
import { useAuth } from "../Context/Contestautenticacion";

export default function PostBeer() {
  const dispatch = useDispatch();
  const user2 = useSelector((state) => state.allSellers)

  const [sentForm, changeSentForm] = useState(false);
  const [validate, setValidate] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();

  useEffect(() => {
    dispatch(getAllSellers());
  }, []);

  const { user } = useAuth()
  
  let filtrado;
  const idSeller = []
  if (user !== null) {
    filtrado = user2.filter((e) => e.mail === user.email);
    idSeller.push(filtrado[0].id)
  }


  const uploadFile = async () => {
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls(url);
        });
      });
    } catch (error) {
      console.log(error)
    }

  }

  function post(values) {
    values.image = imageUrls
    values.sellerId = idSeller[0] 
    console.log(values);   
    dispatch(postBeer(values))
  }
console.log(imageUrls);
  return (
    <Fragment>
      <div className={styles.container}>
        <Formik

          initialValues={{
            name: "",
            price: "",
            image: "",
            description: "",
            stock: 0,
            sellerId: 0

          }}


          validate={(values) => {
            let errores = {};

            if (!values.name) {
              errores.name = "Please enter a name";
              console.log(idSeller)
            } else if (!/[a-zA-ZñÑ\s]{2,50}/.test(values.name)) {
              errores.name = "Only letters and spaces";
            }

            

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
            post(values)
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
                  onChange={(event) =>
                    setImageUpload(event.target.files[0])
                  }
                />
               
                <button type='button' onClick={e => uploadFile(e)}>Upload Image</button>
              </div>
              <div>
                <label htmlFor="price">Price: </label>
                <Field type="text" id="price" name="price" />
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
