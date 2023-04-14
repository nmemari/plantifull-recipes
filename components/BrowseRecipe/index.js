import styles from './BrowseRecipe.module.css'
import Router from 'next/router';
import { useState } from 'react';

export default function BrowseRecipe( {
    title='',
    tag='',
    tag2='',
    tag3='',
    func={}
}) {
    

    return (
        <div>
        <div>
            <div>{title}</div>
            <div>{}</div>
        </div>

    </div>
    )
    }

