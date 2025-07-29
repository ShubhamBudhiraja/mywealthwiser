import style from './index.module.scss';

const Loader = () => {
    return (
        <span className={style.loader}>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
        </span>
    );
};

export default Loader;
