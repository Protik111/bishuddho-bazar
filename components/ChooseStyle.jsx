
import Image from 'next/image';

const ChooseStyle = ({ item }) => {
    return (
        <div className="col-md-5 d-flex mt-4">
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="mt-4 ms-2">
                <Image src={item.image} width={100} height={100} alt="item"></Image>
            </div>
        </div>
    );
};

export default ChooseStyle;