import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchBar from '../../components/Fields/SearchBar/SearchBar';
import LatestSection from '../../components/LatestSection/LatestSection';
import styles from './Home.module.css';
const Home = ({ theme }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 675px)` });
    return (
        <div className={theme === 'light' ? `${styles.wrapper}` : `${styles.wrapper} ${styles['wrapper-dark']}`}>
            <SearchBar
                theme={theme}
                placeholder={isMobile ? 'Potrzebujesz pomocy?' : 'Z jakiej dziedziny potrzebujesz pomocy?'}
            />
            <h1 className="text-2xl font-bold">Najnowsze ogłoszenia</h1>
            <LatestSection theme={theme} />
        </div>
    );
};

export default Home;
