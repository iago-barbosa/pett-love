

import love from '../../../assets/icons/love.png';
import { CoupleProps } from './types';


export const Couple = ({couple}: CoupleProps) => {

    return (
        <div className="couplesContent">
            <div className='couples'>
                <img alt="" src={couple.animalUrl1} />
                <img className='love' alt="" src={love} />
                <img alt="" src={couple.animalUrl2} />
            </div>
            <p className='names'>{couple.animalName1} e {couple.animalName2}</p>
        </div>
    );

}