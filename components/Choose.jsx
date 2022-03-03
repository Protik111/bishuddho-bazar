import data from '../utils/choose.json';
import ChooseStyle from './ChooseStyle';
import styles from '../styles/Choose.module.css';

const Choose = () => {
    return (
        <div className={`${styles.container} p-0 pb-5`}>
            <div className="d-flex justify-content-center">
                <h2 className="mt-5">WHY CHOOSE US?</h2>
            </div>
            <div className="row offset-1">
                {
                    data.map(item => <ChooseStyle item={item} key={item.id}></ChooseStyle>)
                }
            </div>
        </div>
    );
};

export default Choose;