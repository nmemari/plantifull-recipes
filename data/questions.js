import OneImage1 from '@/public/questionImgs/Vegan.svg'
import OneImage2 from '@/public/questionImgs/Pescatarian.svg'
import OneImage3 from '@/public/questionImgs/Ovo Vegetarian.svg'
import OneImage4 from '@/public/questionImgs/ovo lacto vegertarian.svg'

import TwoImage1 from '@/public/questionImgs/Western.svg'
import TwoImage2 from '@/public/questionImgs/Europe.svg'
import TwoImage3 from '@/public/questionImgs/SouthAsian.svg'
import TwoImage4 from '@/public/questionImgs/EastAsian.svg'

import ThreeImage1 from '@/public/questionImgs/Breakfast.svg'
import ThreeImage2 from '@/public/questionImgs/Dinner.svg'

export const questions = [
    {
        question: "1. Which type do you practice?",
        options: ["Vegan", "Pescatarian", "Ovo Vegetarian", "Ovo-lacto Vegetarian"],
        img: [OneImage1, OneImage2, OneImage3, OneImage4]
    },
    {
        question: "What cuisines are you into?",
        options: ["Western", "European", "South Asian", "East Asian"],
        img: [TwoImage1, TwoImage2, TwoImage3, TwoImage4]
    },
    {
        question: "What type of meal are you having?",
        options: ["Breakfast", "Dinner/Lunch"],
        img: [ThreeImage1, ThreeImage2]
    }
]