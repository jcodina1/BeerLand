import { Container } from '@mui/material'
import React from 'react'
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import profile5 from '../../img/profile5.jpg';
import profile6 from '../../img/profile6.jpg';
import profile7 from '../../img/profile7.jpg';
import style from '../AboutUs/AboutUs.module.css'
import NavBar from '../NavBar/NavBar';

export default function AboutUs() {
  return (
    <Container maxWidth='xxl' disableGutters='false'>
        <div >
            <div><NavBar/></div>
        <div className={style.about}>About Us</div>
        <div className={style.us}>
            <div className={style.profile}>
                <div><a href='https://www.linkedin.com/in/florencia-fernandez-fullstack-developer/' target="_blank"><img src={profile1} alt='profilepick'/></a></div>
                <div className={style.data}>
                <h1>FLORENCIA FERNANDEZ</h1>
                <h4>description</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iure repudiandae numquam eligendi. Velit alias recusandae non quisquam odio laborum esse, dolorem blanditiis laboriosam est ipsam mollitia in repellat inventore!</p>
                </div>
            </div>
            <div className={style.profile}>
                <a href='https://www.linkedin.com/in/juan-camilo-codina-ariza-6bb4a01b4' target="_blank"><img src={profile3} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>JUAN CAMILO CODINA</h1>
                <h4>description</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis impedit cumque deleniti, cupiditate fugit mollitia unde fuga aliquid et minima ratione optio non, accusantium architecto corrupti fugiat temporibus perferendis id.</p>
                </div>
            </div>
            <div className={style.profile}>
                <a href='https://www.linkedin.com/in/marlon-guzm%C3%A1n-3265391a8/' target="_blank"><img src={profile2} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>MARLON GUZMÁN</h1>
                <h4>description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum architecto ratione minus, laborum voluptatem eos perferendis ullam consectetur adipisci consequatur dolor! Possimus expedita omnis ab ea error laboriosam! Atque?</p>
                </div>
            </div>
            <div className={style.profile}>
                <a href='https://www.linkedin.com/in/dar%C3%ADo-alejandro-borquez-984243227/' target="_blank"><img src={profile4} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>DARÍO BORQUEZ</h1>
                <h4>description</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel enim hic eum reiciendis quas officiis ratione omnis reprehenderit iste quod sequi, perspiciatis aperiam alias magni doloribus quibusdam recusandae. Cupiditate, consequuntur.</p>
                </div>
            </div>
            <div className={style.profile}>
                <a href='https://www.linkedin.com/in/ivanducuara/' target="_blank"><img src={profile6} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>IVAN CAMILO DUCUARA</h1>
                <h4>description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem fugiat porro corrupti ipsam sunt eligendi laboriosam libero aliquid vero vel tempora, vitae cum accusantium! Eum consectetur ab eos labore!</p>
                </div>
            </div>
            <div className={style.profile}>
                <a href='https://www.linkedin.com/in/ballesteros-jp/' target="_blank"><img src={profile5} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>JUAN PABLO BALLESTEROS</h1>
                <h4>description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora inventore error, eos laudantium dicta saepe ut dignissimos quibusdam officia porro quod quos corporis illo, asperiores, animi sit delectus eligendi.</p>
                </div>
                
            </div>
            <div className={style.profile}>
                <a href=''><img src={profile7} alt='profilepick'/></a>
                <div className={style.data}>
                <h1>TOMÁS MATTHEW McKEE</h1>
                <h4>description</h4>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum mollitia ratione sequi in dignissimos, similique omnis corporis cumque nesciunt nobis voluptatem iure, unde excepturi, beatae incidunt tempore voluptas? Soluta?</p>
                </div>

            </div>





        </div>



        </div>
    </Container>
  )}

