import { useContext, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { Header } from "../../components/header/header";
import { Footer } from '../../components/footer/footer';
import { Loading } from "../../components/loading/loading";
import './comoFunciona.scss';
import { UserContexts } from '../../contexts/UserContexts';
import stepOne from '../../assets/img-1-hm.png';
import register from '../../assets/icons/cadastre-pet.png';
import stepTwo from '../../assets/img-2-hm.png';
import search from '../../assets/icons/search.png';
import stepTree from '../../assets/img-3-hm.png';
import match from '../../assets/icons/agende.png';
import space1Desk from '../../assets/spaces/space1_desk.png';
import space2Desk from '../../assets/spaces/space2_desk.png';
import space1Mobile from '../../assets/spaces/space1_mobile.png';
import space2Mobile from '../../assets/spaces/space2_mobile.png';


export const ComoFunciona = () => {
    const { isMobile, loading, setLoading } = useContext(UserContexts);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

    const [refOne, inViewOne] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refTwo, inViewTwo] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [refTree, inViewTree] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return(
        <>
            <title>Como Funciona</title>
            {
                loading ? 
                <Loading />
                :
                <>
                    <Header />
                    <div className="main">
                        <div className="headerPage">
                            <p className="headerTitle">COMO FUNCIONA</p>
                            <p className="headerText">
                                {
                                    isMobile ? 
                                        'Encontre um love para o seu animal sem sair de casa.' 
                                        : 
                                        'Encontre um pretendente para o seu animal'
                                }
                            </p>
                            <button className="headerBtn">Comece agora!</button>
                        </div>
                        <div className="steps">
                            <div ref={refOne} className={`step stepOne ${inViewOne ? 'slideIn' : ''}`}>
                                <div className="photo">
                                    <img alt='' src={stepOne} />
                                    <div className="overlay"></div>
                                </div>
                                <div className="stepContent">
                                    <img alt='' src={register}/>
                                    <p className="title">Cadastre seu <strong>animal</strong></p>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
                                    </p>
                                </div>

                            </div>
                            <div ref={refTwo} className={`spaces ${inViewTwo ? 'slideIn' : ''}`}>
                                {
                                    isMobile?
                                    <img alt="" src={space1Mobile} />
                                    :
                                    <img alt="" src={space1Desk} />
                                }
                            </div>
                            <div ref={refTwo} className={`step stepTwo ${inViewTwo ? 'slideInRight' : ''}`}>
                                <div className="photo">
                                    <img alt='' src={stepTwo}/>
                                    <div className="overlay"></div>
                                </div>
                                <div className="stepContent">
                                    <img alt='' src={search}/>
                                    <p className="title"><strong>Procure</strong> pretendentes</p>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
                                    </p>
                                </div>
                            </div>
                            <div ref={refTree} className={`spaces ${inViewTree ? 'slideIn' : ''}`}>
                                {
                                    isMobile?
                                    <img alt="" className="photo" src={space2Mobile} />
                                    :
                                    <img alt="" src={space2Desk} />
                                }
                            </div>
                            <div ref={refTree} className={`step stepTree ${inViewTree ? 'slideIn' : ''}`}>
                                <div className="photo">
                                    <img alt='' src={stepTree}/>
                                    <div className="overlay"></div>
                                </div>
                                <div className="stepContent">
                                    <img alt='' src={match}/>
                                    <p className="title">Marque um <strong>encontro</strong></p>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
};

export default ComoFunciona;