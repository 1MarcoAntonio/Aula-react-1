import "./style.css";
import perfil from "../../assets/perfil.png";

export default function DadosPessoais() {
  return (
    <div className="header-div">
      <img className = 'perfil-img' src= {perfil} alt = 'hokage'/>
      <h1>Marco Antonio Alves da Silva</h1>

      <h2>Dados Pessoais</h2>
      <p className="header-p">Rua: Adalberto Coimbra 166</p>
      <p className="header-p">Email: xfiller93@gmail.com</p>
      <p className="header-p">Tefone: 81 998672894</p>
    </div>
  );
}
