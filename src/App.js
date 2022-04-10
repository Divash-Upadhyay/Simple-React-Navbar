// import logo from './logo.svg';
import './App.css';

function App() {
  var social=["Services","Projects","About"]
  return (
   <nav id='navbr'>
     <div class="ab">
       <One/>
     </div>
     <div id='thr'>
       {
        social.map((e) => {
          return <Two to={e}/>
        })
       }
     </div>
     <div>
       <Three/>
     </div>
   </nav>
  );
}

function One(){
  return <p>LOGOBAKERY</p>
}
function Two({to}){
  return <a href='#'>{to}</a>
}
function Three(){
  return <button>Contact</button>
}





export default App;

