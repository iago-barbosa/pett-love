import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContexts } from "../../contexts/UserContexts";
import './footer.scss';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import clickweb from '../../assets/icons/clickweb.png';
import logoCompleto from '../../assets/logo-completo.png';
import copyIcon from '../../assets/icons/copy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import copy from "copy-to-clipboard"; 

export const Footer = () => {
    const { isMobile } = useContext(UserContexts);
    const navigate = useNavigate();
    const [selectController, setSelectController] = useState(0);
    const instituicoes = [
        {
            nome: 'SOS Vida Animal',
            banco: 'Itaú',
            agencia: '8804',
            conta: '01234-5',
            pix: '43.660.696/0001-95',
        },
        {
            nome: 'ABDA',
            banco: 'Itaú',
            agencia: '4088',
            conta: '54321-0',
            pix: '03.280.163/0001-63',
        },
    ];

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const goToHome = () => {
        navigate('/');
        scrollTop();
    }

    const goToComoFunciona = () => {
        navigate('/como-funciona');
        scrollTop();
    }

    const copyToClipboard = (text: string) => {
        copy(text);
     }

    return(
        <footer className="footer">
            {
                isMobile ?
                <>
                    <div className='content'>
                        <div className='newsletter'>
                            <p>Receba nossas novidades</p>
                            <div className='inputEmail'>
                                <input placeholder='Digite seu e-mail' />
                                <button>Cadastrar</button>
                            </div>
                        </div>
                        <div className='socialLinks'>
                            <div className='socialIcon'>
                                <img alt="" src={facebook} />
                            </div>
                            <div className='socialIcon'>
                                <img alt="" src={instagram} />
                            </div>
                            <div className='socialIcon'>
                                <img alt="" src={youtube} />
                            </div>
                        </div>
                        <p>Pett Love - Relacionamento <br/> CNPJ: 43.660.696/0001-95</p>
                        <div className='clickwebIcon'>
                        <img alt="" src={clickweb} />
                        </div>
                    </div>
                    <div className='backToTop' onClick={scrollTop}>
                        <FontAwesomeIcon icon={faChevronUp} color='#fff' />
                    </div>
                </>
                :
                <>
                    <div className='content'>
                        <div className='footerContent'>
                            <img alt='' className='logo' src={logoCompleto} onClick={goToHome} />
                            <div className='footerMenu'>
                                <div className='footerLinks'>
                                    <button className='link'>Sobre nós</button>
                                    <button className='link' onClick={goToComoFunciona}>Como funciona</button>
                                    <button className='link'>Duvidas Frequentes</button>
                                    <button className='link'>Blog</button>
                                </div>
                                <div className='footerLinks'>
                                    <button className='link'>Pets namorando</button>
                                    <button className='link'>Comece agora!</button>
                                    <button className='link'>Contato</button>
                                </div>
                                <div className='help'>
                                    <p className='title'>Ajude uma entidade</p>
                                    <div className='text'>
                                        <div className='input-group'>
                                            <select className="form-select text-white" onChange={ev => setSelectController(parseInt(ev.target.value))}>
                                                <option selected value="0">SOS Vida Animal</option>
                                                <option value="1">ABDA</option>
                                            </select>
                                            <span className='input-group-append'>
                                                <FontAwesomeIcon icon={faChevronDown} color='#fff' />
                                            </span>

                                        </div>
                                        <p>Banco {instituicoes[selectController].banco}: Ag {instituicoes[selectController].agencia} Conta {instituicoes[selectController].conta}</p>
                                        <p>PIX: {instituicoes[selectController].pix} <img alt='' src={copyIcon} onClick={() => copyToClipboard(instituicoes[selectController].pix)} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='newsletter'>
                                <p>Receba nossas novidades</p>
                                <div className='inputEmail'>
                                    <input placeholder='Digite seu e-mail' />
                                    <button>Cadastrar</button>
                                </div>
                            </div>
                            <div className='socialLinks'>
                                <div className='socialIcon'>
                                    <img alt="" src={facebook} />
                                </div>
                                <div className='socialIcon'>
                                    <img alt="" src={instagram} />
                                </div>
                                <div className='socialIcon'>
                                    <img alt="" src={youtube} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='politicaLinks'>
                            <button className='link'>Política de privacidade</button>
                            <div className='separador'></div>
                            <button className='link'>Termos de uso</button>
                            <div className='separador'></div>
                            <button className='link'>Política de Cookies</button>
                            <div className='separador'></div>
                            <button className='link'>Política de cancelamento</button>
                    </div>
                    <div className='backToTop' onClick={scrollTop}>
                        <p>Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95</p>
                        <FontAwesomeIcon icon={faChevronUp} color='#fff' />
                        <div className='clickwebIcon'>
                            <img alt="" src={clickweb} />
                        </div>
                    </div>
                </>
            }
        </footer>
    )
};