import './App.css';
import Header from './Components/Header';
import MidImage from './Components/MidImage';
import ContentBox from './Components/ContentBox';
import Tesoura from './Assets/pente.png'
import Atendimento from './Assets/agente-de-atendimento-ao-cliente.png'
import Domicilio from './Assets/entrega-ao-domicilio.png'
import Qualidade from './Assets/qualidade2.png'

function App() {
  return(
    <div>
    <Header links={["Home", "Instagram", "Agendar Horário", "Cortes"]}></Header>
    
    
    <section className="about-container">

      <div>
        <MidImage></MidImage>        
      </div>

      <div className="about-text"> 
        <p id='about-us'><div className='brown-color'>SO BRE:</div> BAR BER SHOP<div className='brown-color'>SEU ZÉ</div></p>
        <p>Barbeiro desde os 13 anos por influência familiar, Seu Zé sempre gostou de mudanças e de desafios. 
          Há pouco mais de cinco anos, insatisfeito com a mesmice, Elias foi buscar referências no exterior e resolveu
           trazer um conceito até em então novo para o Brasil. Pioneiro no estilo sofisticado de barbearias no país, 
           atualmente, ele empresaria três unidades Seu Elias em Belo Horizonte: “Antigamente cortar cabelo era algo 
           “desprazeroso” para o homem, então, minha ideia é proporcionar uma experiência ao meu cliente. Ele não vem 
           só para fazer a barba, cabelo e bigode, mas vem como um programa mesmo, uma distração, para ter um momento 
           só dele, ou dele com o filho, por exemplo”, afirma Seu Zé.</p>
      </div>

    </section>

    <div className="qualities-box">
      <ContentBox tag={"Variedade de cortes"} img={Tesoura} alt={"tesoura"}></ContentBox>
      <ContentBox tag={"Atendimento online"} img={Atendimento} alt={"atendimento"}></ContentBox>
      <ContentBox tag={"Domicilio"} img={Domicilio} alt={"domicilio"}></ContentBox>
      <ContentBox tag={"Qualidade"} img={Qualidade} alt={"qualidade"}></ContentBox>
    </div>
    




    
    </div>
  );
};

export default App;
