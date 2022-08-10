import React, {useState, useEffect} from 'react'
import style from './Slider2.module.css'
import './Slider2.css'
import BtnSlider2 from '../Slider2/BtnSlider2'
import { getAllSellers } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



export default function Slider2() {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSellers())
    }, [])
    
    const [slideIndex, setSlideIndex] = useState(1)
    const images = useSelector((state) => state.allSellers);
    let imagesToShow = images.map(e => e.image)
    let sellerImages = []
    
    const legends=['TASTE THE BEST CRAFT-BEERS','UNIQUE FLAVOURS','ALL THAT YOU WANT','AN AMAZING EXPERIENCE','ONLY AT BEERLAND.COM','TASTE THE BEST CRAFT-BEERS','UNIQUE FLAVOURS','ALL THAT YOU WANT','AN AMAZING EXPERIENCE','ONLY AT BEERLAND.COM','ALL THAT YOU WANT']
    
    function renderImages() {
        
        if (imagesToShow.length !== 0) {
            for (let i = 0; i <= 10; i++) {
                sellerImages.push(imagesToShow[i])
            }
            return sellerImages
        }
    }

    const nextSlide = () => {
        if(slideIndex !== sellerImages.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === sellerImages.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sellerImages.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={style.containerlider2} >
            {
             imagesToShow.length &&
             renderImages().map((e,index)=>{
                return (
                    
                    <div className={slideIndex === index + 1 ? style.activeanim2 : style.slide2}>
                                        
                         <div className={style.text}>{legends[index]}</div>
                         <Link to="/sellers"><img   src={e}  alt="brewery image" /></Link>
                         
                     </div>
                     

                )
                })
            } 

            <BtnSlider2 moveSlide={nextSlide} direction={"next2"} />
            <BtnSlider2 moveSlide={prevSlide} direction={"prev2"}/>

            <div className="container-dots2">
                {Array.from({length: 10}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot2 active" : "dot2"}
                    ></div> 
                ))}
            </div>
        </div>
    )
}
