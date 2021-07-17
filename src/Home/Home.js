import './Home.css'
import ipecLogo from '../Images/ipecLogo.png'
function Home(){
    return(
       <div className="container">
           <div class="login-page">
  <div class="form">
  <div className="hero">
      <div className="hero-logo">
          <img src={ipecLogo} alt="" height="80px"/>
      </div>
      <div className="hero-text">Ipec Login</div>
  </div>
    <form class="login-form">
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button>Login</button>
    </form>
  </div>
</div>
       </div>
    );
}
export default Home;