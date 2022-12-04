import './App.css';
import Header from './Header';
import MidImage from './MidImage';
import ContentBox from './ContentBox';
import Tesoura from './Assets/pente.png'
import Atendimento from './Assets/agente-de-atendimento-ao-cliente.png'
import Domicilio from './Assets/entrega-ao-domicilio.png'
import Qualidade from './Assets/qualidade2.png'

function App() {
  return(
    <div>
    <Header links={["Home", "Instagram", "Agendar Horário", "Cortes"]}></Header>
    
    
    <section className="sobre-nos">

      <div id="barber-image">
      <MidImage></MidImage>
      </div>

      <section id="texto-sobre-nos">  
        <h1>Sobre nós</h1>
        <p>Fundada em 2015 e sempre buscando modernidade, sem deixar de lado o estilo old school. Aqui é barba, cabelo e bigode com autoridade, mas sem esquecer dos serviços de estética também. Prezamos pela experiência em tudo, desde o momento que você entra aqui até o gole de cerveja.
          Tendência é com a gente mesmo. Vamos proporcionar a você uma experiência única
          . Então pode sentar e relaxar, porque o resto é com a gente.</p>
      </section>

    </section>

    <div className="contents">
      <ContentBox tag={"Melhores cortes"} img={Tesoura} alt={"tesoura"}></ContentBox>
      <ContentBox tag={"Atendimento online"} img={Atendimento} alt={"atendimento"}></ContentBox>
      <ContentBox tag={"Domicilio"} img={Domicilio} alt={"domicilio"}></ContentBox>
      <ContentBox tag={"Qualidade"} img={Qualidade} alt={"qualidade"}></ContentBox>
    </div>
    
    </div>
  );
};

export default App;
