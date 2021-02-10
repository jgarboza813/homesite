import styles from './MainPage.module.css';

import React from 'react';

const MainPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.parent}>
                <div className={styles.name}>
                    Jose Garboza
                </div>
                <div className={styles.detailTop}/>
                <div className={styles.stats}>
                    <p>Web Developer<br/>Washington, DC</p>
                    <p><br/>React<br/>ES6<br/>HTML/CSS/SASS</p>
                </div>
                <div className={styles.details}>
                    <p>Hello, my name is Jose. I have 17 years of experience developing applications.</p>
                    <p>I am a strong believer in technology solving our problems instead of adding to them. I am specially interested in making difficult problems easier to solve through intuitive UIs.</p>
                    <p>As the web keeps expanding at break-neck speed, building web applications is becoming more complex.
                        The number of abstractions that web developers need to understand is growing day by day.</p>
                    <p><br/>The future of the web will be dictated by how powerful our development tools and frameworks are.</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
