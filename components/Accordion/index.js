import { useState } from "react";
import { recipe } from '@/data/recipe'
import Router from "next/router";
import BrowseRecipe from "../BrowseRecipe";
import Image from "next/image";
import styles from './Accordion.module.css';

export default function Accordion({
    mealType=''
}) {
    const [isActive, setIsActive] = useState(false);
    const [data, setData ] = useState(recipe);

    const sendData = (type, cuisine, time) => {
        Router.push({
          pathname: '/results',
          query: {
            type,
            cuisine,
            time
          }
        })
    }

    return (
        <>
            <div className={styles.accordion} onClick={() => setIsActive(!isActive)}>
                {mealType}
                <div className={styles.dropBtn}>{isActive ? "^" : "↓"}</div>
            </div>

                <div className={styles.dropDown} style={{
                    display: isActive ? 'flex': 'none'
                }}>
                    {
                        data && data.map((info, index) => {
                            if (info.type === mealType) {
                                return(
                                    <div className={styles.button} key={index}>
                                        <BrowseRecipe
                                        title={info.name}
                                        tag1={info.type}
                                        tag2={info.cuisine}
                                        tag3={info.mealType}
                                        />                  
                                        <button onClick={() => sendData(info.type.toLowerCase(), info.cuisine.toLowerCase(), info.mealType.toLowerCase())}>
                                        <Image 
                                        className={styles.arrow}
                                        src={"/browsepage/arrowhite.svg"}
                                        width={45}
                                        height={45}
                                        />                     
                                        </button>
                                    </div>
                                )                    
                            }
                        })
                    }  
                </div>
        </>
    )
}

