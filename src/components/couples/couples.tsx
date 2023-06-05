import './couples.scss';
import Guido from '../../assets/Guido.png';
import Abigail from '../../assets/Abigail.png';

import Pancho from '../../assets/Pancho.png';
import Kiwi from '../../assets/Kiwi.png';

import Bingo from '../../assets/Bingo.png';
import Jade from '../../assets/Jade.png';

import Lennon from '../../assets/Lennon.png';
import Jujuba from '../../assets/Jujuba.png';
import { Couple } from './couple/couple';

export const Couples = () => {
    const couples  = [
        {
            animalName1: 'Guido',
            animalUrl1: Guido,
            animalName2: 'Abigail',
            animalUrl2: Abigail,
        },
        {
            animalName1: 'Pancho',
            animalUrl1: Pancho,
            animalName2: 'Kiwi',
            animalUrl2: Kiwi,
        },
        {
            animalName1: 'Bingo',
            animalUrl1: Bingo,
            animalName2: 'Jade',
            animalUrl2: Jade,
        },
        {
            animalName1: 'Lennon',
            animalUrl1: Lennon,
            animalName2: 'Jujuba',
            animalUrl2: Jujuba,
        },
        {
            animalName1: 'Guido',
            animalUrl1: Guido,
            animalName2: 'Abigail',
            animalUrl2: Abigail,
        },
        {
            animalName1: 'Pancho',
            animalUrl1: Pancho,
            animalName2: 'Kiwi',
            animalUrl2: Kiwi,
        },
    ];


    return (
        <div className='couplesContainer'>
            {
                couples.map(couple => (
                    <Couple couple={couple}/>
                ))
            }
        </div>
    )

};