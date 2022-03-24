import Image from 'next/image'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Header.module.css';
import { useTimer } from 'react-timer-hook';

const Header = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    const date = new Date();

    return (
        <div className="row mt-3">
            <div className={`${styles.slideContainer} col-sm-12 col-md-6 offset-md-1`}>
                <Slide className={styles.sliders} easing="ease" duration="1000" arrows={false}>
                    <div className={styles.each_slide}>
                        <Image className={styles.slider} src="/images/slider/slider1.jpg" width={700} height={400}></Image>
                        <div className={`${styles.title_container}`}>
                            <h2>Quality Fresh Vegetables</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                    <div className={styles.each_slide}>
                        <Image className={styles.slider} src="/images/slider/slider2.jpg" width={700} height={400}></Image>
                        <div className={`${styles.title_container}`}>
                            <h2>Quality Fresh Vegetables</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                    <div className={styles.each_slide}>
                        <Image className={styles.slider} src="/images/slider/slider3.jpg" width={700} height={400}></Image>
                        <div className={`${styles.title_container}`}>
                            <h2>Quality Fresh Vegetables</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className={`${styles.offer} col-md-4 mt-5`}>
                <div className={`${styles.discount_title} d-flex justify-content-center p-2`}>
                    <h4>Latest Super Discount!</h4>
                </div>
                <div className={`${styles.voucher_container} mt-4`}>
                    <div className="ms-5 w-100">
                        <Image className={styles.offerImg} src='/images/slider/slider2.jpg' width={150} height={150}></Image>
                    </div>
                    <div className='mt-3'>
                        <h4>10% Off</h4>
                        <p>{date.toLocaleString('default', { month: 'long' })} Gift Voucher</p>
                        <div>
                            <span className={styles.times}>{days}</span>:<span className={styles.times}>{hours}</span>:<span className={styles.times}>{minutes}</span>:<span className={styles.times}>{seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;