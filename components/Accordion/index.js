import { useState } from "react";
import { recipe } from '@/data/recipe'
import Router from "next/router";
import BrowseRecipe from "../BrowseRecipe";

export default function Accordion({
    mealType=''
}) {
    const [isActive, setIsActive] = useState(false);
    const [data, setData ] = useState(recipe);

    return (
        <>
            <div onClick={() => setIsActive(!isActive)}>
                {mealType}
                <div>{isActive ? "^" : "↓"}</div>
            </div>

                <div style={{
                    display: isActive ? 'block': 'none'
                }}>
                    {
                        data && data.map((info, index) => {
                            if (info.type.toLowerCase() === mealType) {
                                return(
                                    <div key={index}>
                                        <BrowseRecipe
                                        title={info.name}
                                        tag1={info.type}
                                        tag2={info.cuisine}
                                        tag3={info.mealType}
                                        />                  
                                    </div>
                                )                    
                            }
                        })
                    }  
                </div>
        </>
    )
}

