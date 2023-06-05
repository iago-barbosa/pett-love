import React from "react";
import { Header } from "../../components/header/header";
import { Footer } from '../../components/footer/footer';
import { Couples } from '../../components/couples/couples';
import { Advertisement } from "../../components/advertisement/advertisement";
import { Loading } from "../../components/loading/loading";
import { UserContexts } from '../../contexts/UserContexts';
import './home.scss';

export const Home = () => {
    const { loading, setLoading } = React.useContext(UserContexts);
    const [petList, setPetList] = React.useState([
        <>
            <Couples />
            <Advertisement />
            <Couples />
        </>,
    ]);
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    const petsList = () => {
        setPetList([...petList, <>
            <Couples />
            <Advertisement />
            <Couples />
        </>])
    }

    return(
        <>
            <title>Pett Love</title>
            {
                loading ?
                <Loading />
                :
                <>
                    <Header />
                    <div className="main">
                        <div className="petsNamorando">
                            <p className="pets">Pets &nbsp;</p>
                            <p className="namorando">namorando</p>
                        </div>
                        <p className="subtitle">Duis aute irure dolor in reprehenderit in voluptate</p>
                        <div className="petsList">
                            {
                                petList.map(list => (
                                        <>
                                            {list}
                                        </>
                                ))
                            }
                            <button className="petsListBtn" onClick={petsList}>Carregar mais antigos</button>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
};

export default Home;