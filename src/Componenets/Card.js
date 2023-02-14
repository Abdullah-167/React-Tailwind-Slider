import React from 'react'
import { useState } from 'react';
import Pizza from '../assets/pizza.jpg'
import Pastery from '../assets/pastery.jpg'
import Food from '../assets/food1.jpg'
import Food2 from '../assets/food2.jpg'
import Food3 from '../assets/food3.jpg'
import Food4 from '../assets/food4.jpg'
import Food5 from '../assets/food5.jpg'
import Food6 from '../assets/food6.jpg'
import Food7 from '../assets/food7.jpg'
import Food8 from '../assets/food8.jpg'

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const Card = () => {
    const Slides = [{
        img: Pizza
    },
    {
        img: Pastery
    },
    {
        img: Food
    },
    {
        img: Food2
    },
    {
        img: Food3
    },
    {
        img: Food4
    },
    {
        img: Food5
    },
    {
        img: Food6
    },
    {
        img: Food7
    },
    {
        img: Food8
    },]

    const [currentIndex, setcurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isSecondSlide = currentIndex === Slides.length - 1;
        const newIndex = isSecondSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex)
    }


    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <img style={{ backgroundImage: `url(${Slides[currentIndex].img})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-300' />
            <div className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <AiOutlineArrowLeft onClick={prevSlide} size={30} />
            </div>
            <div className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <AiOutlineArrowRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2 '>
                {Slides.map((Slides, index) => {
                    const gotoSlide = (index) => {
                        setcurrentIndex(index)
                    }
                    return (
                        <div className='text-2xl cursor-pointer hover:text-[20px] hover:text-red-700 hover:border-2  hover:border-red-400 hover:p-[1px] hover:rounded-full' key={index} onClick={() => gotoSlide(index)}><RxDotFilled /> </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card