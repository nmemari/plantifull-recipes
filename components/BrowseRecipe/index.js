import styles from './BrowseRecipe.module.css'
import Router from 'next/router';
import { useState } from 'react';

export default function BrowseRecipe( {
    title='',
    tag1='',
    tag2='',
    tag3='',
}) {
    

    return (
    <div className={styles.container}>
        <div className={styles.textBox}>
            <div className={styles.name}>{title}</div>
            <div className={styles.tags}>{tag1}, {tag2}, {tag3}</div>
        </div>
    </div>
    )
    }
