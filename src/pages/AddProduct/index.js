import './styles.css';
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header';

function AddProduct() {
  return (
    <div className='main-containter'>
      <Header></Header>
      <div className='main-content-add-product'>
        <h1>Shows Na Sua Mão</h1>
        <h2>Adicionar Produto</h2>
        <Form></Form>
        <div className='footer-separator'></div>
      </div>
    </div>
  );
}



export default AddProduct;
