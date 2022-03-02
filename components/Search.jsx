import styles from '../styles/Search.module'

const Search = () => {
    return (
        <div className={styles.container}>
            <input type="text" name="search" id="search" />
        </div>
    );
};

export default Search;