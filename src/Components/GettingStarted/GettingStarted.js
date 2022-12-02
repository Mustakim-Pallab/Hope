import React from 'react';
import styles from './GettingStarted.module.css'
import img1 from '../../Assets/Images/reg.png'
import img2 from '../../Assets/Images/consultation.png'
import img3 from '../../Assets/Images/brain.png'
import img4 from '../../Assets/Images/man_svg.png'

const GettingStarted = () => {
    return (
        <div className={`${styles.main} py-20 px-28 rounded-lg`}>
            <h1 className={`${styles.title} text-green p-6`}>
                Getting Started
            </h1>
            <div className={`grid xl:grid-cols-4 md:grid-cols-2 gap-10 m-4 `}>
                <div>
                <img src={img1} alt="" className={` border border-8 border-green rounded-full m-4 hover:border-yellow ${styles.img}`}/>
                <h1 className={`${styles.subtitle} text-grey-700 p-6 pb-1`}>
                    Registration
                </h1>
                <p className={` text-grey-700 pr-16 `}>
                Morbi nec faucibus arcu, malesuada suscipit mauris
                </p>
                </div>
                <div>
                <img src={img2} alt="" className={` border border-8 border-green rounded-full m-4 hover:border-yellow ${styles.img}`}/>
                <h1 className={`${styles.subtitle} text-grey-700 p-6 pb-1`}>
                Consultation 
                </h1>
                <p className={` text-grey-700 pr-16 `}>
                Morbi nec faucibus arcu, malesuada suscipit mauris
                </p>
                </div>
                <div>
                <img src={img3} alt="" className={` border border-8 border-green rounded-full m-4 hover:border-yellow ${styles.img}`}/>
                <h1 className={`${styles.subtitle} text-grey-700 p-6 pb-1 `}>
                    Brainstorming
                </h1>
                <p className={` text-grey-700 pr-16 mx-3`}>
                Morbi nec faucibus arcu, malesuada suscipit mauris
                </p>
                </div>
                <div>
                <img src={img4} alt="" className={` border border-8 border-green rounded-full m-4 hover:border-yellow ${styles.img}`}/>
                <h1 className={`${styles.subtitle} mx-3 text-grey-700 p-6 pb-1`}>
                    Get Result
                </h1>
                <p className={` text-grey-700 mx-3 pr-16 `}>
                Morbi nec faucibus arcu, malesuada suscipit mauris
                </p>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;