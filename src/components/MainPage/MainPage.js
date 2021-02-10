import styles from './MainPage.module.css';

import React from 'react';

const MainPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.parent}>
                <div className={styles.stats}>
                    <div className={styles.name}>
                        Jose Garboza
                    </div>
                    <br />
                    <div>
                        Web Developer
                    </div>
                    <div>
                        Washington, DC
                    </div>
                    <br />
                    <div>
                        React
                    </div>
                    <div>
                        Vanilla JavaScript
                    </div>
                    <div>
                        HTML/CSS/SCSS
                    </div>
                </div>
                <div className={styles.details}>
                    <br />
                    <br />
                    Hello, my name is Jose. I am a visual learner and a developer.
                </div>
            </div>
        </div>
    )
}

export default MainPage;
