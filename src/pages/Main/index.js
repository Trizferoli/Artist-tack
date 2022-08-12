import './styles.css';
import CustomCard from '../../components/Card/CustomCards';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const products = [
  {
    key: '1',
    nomeProduto: 'Maluma',
    descricao: 'Juan Luis Londoño Arias, mais conhecido pelo nome artístico Maluma, é um cantor, ator e compositor colombiano. Possui contrato com a Sony Music Colômbia e a Sony Latin.',
    imagePath: 'https://estrelalatina.com.br/wp-content/uploads/2020/02/maluma-2.jpg',
    preco: '300',
    units: '1'
  },
  {
    key: '2',
    nomeProduto: 'Karol G',
    descricao: 'Carolina Giraldo Navarro, conhecida profissionalmente como Karol G, é uma cantora e compositora colombiana. Ela é predominantemente descrita como uma artista de reggaeton e trap latino, mas já experimentou uma variedade de outros gêneros, incluindo reggae e sertanejo.',
    imagePath: 'https://portalreggaeton.com.br/pt/wp-content/uploads/2021/02/karol-g-location.jpg',
    preco: '250',
    units: '1'
  },
  {
    key: '3',
    nomeProduto: 'Ed Sheeran',
    descricao: 'Edward Christopher Sheeran MBE, mais conhecido como Ed Sheeran é um cantor, compositor, produtor e ator britânico.',
    imagePath: 'https://i.guim.co.uk/img/media/9e0702b2974384a251d955060b13b3488ca2949c/67_41_2124_1274/master/2124.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=aefd93572fb3585c85cd0f659939a70b',
    preco: '400',
    units: '1'
  },
  {
    key: '4',
    nomeProduto: 'Taylor Swift',
    descricao: 'Taylor Alison Swift é uma cantora, compositora, produtora, diretora e roteirista estadunidense. Suas composições narrativas, muitas vezes inspirada pelas suas experiências pessoais, tem recebido ampla cobertura mediática e elogios críticos.',
    imagePath: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/06/01/675x450/1_taylor_swift_singer_capa_widelg-6686948.jpg?20211123135039?20211123135039',
    preco: '400',
    units: '1'
  }
]


function Main() {
  const [singerList, setSingerList] = useState(products);


  return (
    <div className='main-containter'>
      <Header></Header>
      <div className='main-content'>
        <h1>Shows Na Sua Mão</h1>
        <div className='main-add-products'>
          <h2>Seus Cantores</h2>
          <Link to='/add-product'>
            <CustomButton action='adicionar cantor' />
          </Link>
        </div>
        <div className="cards-containter">
          {singerList.map((singer) => (
            < CustomCard
              className='card'
              key={singer.key}
              nomeProduto={singer.nomeProduto}
              descricao={singer.descricao}
              imagePath={singer.imagePath}
              preco={singer.preco}
              units={singer.units}
            ></CustomCard>
          ))
          }
        </div>
        <div className='footer-separator'></div>
      </div>
    </div >
  );
}

export default Main;
