import React from 'react';
import styles from './HomeAbout.module.css'
import img from '../../Assets/Images/councelling_rounded.png'

const HomeAbout = () => {
    return (
        <div className={`flex flex-2 ${styles.about}`}>
            
            <div >
                <img src={img} alt="" className={styles.image}/>
            </div>
            <div className={styles.subsection}>
                <h6 className={styles.aboutUs}>About US</h6>
                <h2 className={styles.hello}>
                    Hello! We Are HOPE!
                </h2>
                <p>
                Hope is an online counseling and psychotherapy website. Our team consists of professional therapists and counselors. Our goal is to make professional therapy accessible, affordable and convenient. Anyone struggling with mental health can reach us anytime from anywhere.
                </p>
                <button>
                    Learn More
                </button>
            </div>
            
            
        </div>
    );
};

export default HomeAbout;