import "./styles.css";
import "./app.css"
import React ,{useState} from "react";
export default function App() {
  const [input,setInput] = useState("");
  const [output,setOutput]=useState(0);
  const handler= e =>{
      setInput(e.target.value);
      console.log(input)
  }
  return (
    <div className="app">
      <input type="text" name="input" value={input} onChange={handler} placeholder="Enter Expression" className="input1"/>
      <br /><br /><br />
      <button onClick={()=> setOutput(eval(input)) }  className="check"> CHECK OUTPUT </button><br/><br />
      <h3 className="heading"> THE OUTPUT IS : {output} </h3>
      <br />
      <div class="flex1">
      <button onClick={()=>setInput(input+'1')}  className="b1"> 1 </button>
      <button onClick={()=>setInput(input+'2')} className="b1"> 2 </button>
      <button onClick={()=>setInput(input+'3')} className="b1"> 3 </button>
      <button onClick={()=>setInput(input+'4')} className="b1"> 4 </button>
      <br /><br />
      </div>

      <div class="flex1">
      <button onClick={()=>setInput(input+'5')} className="b1"> 5 </button>
      <button onClick={()=>setInput(input+'6')} className="b1"> 6 </button>
      <button onClick={()=>setInput(input+'7')} className="b1"> 7 </button>
      <button onClick={()=>setInput(input+'8')} className="b1"> 8 </button>
      <br /><br />
      </div>

      <div class="flex1">
      <button onClick={()=>setInput(input+'9')} className="b1"> 9 </button>
      <button onClick={()=>setInput(input+'0')} className="b1"> 0 </button>
      <button onClick={()=>setInput(input+'+')} className="b1"> + </button>
      <button onClick={()=>setInput(input+'-')} className="b1"> - </button>
      <br /><br />
      </div>

      <div class="flex1">
      <button onClick={()=>setInput(input+'(')} className="b1"> ( </button>
      <button onClick={()=>setInput(input+'*')} className="b1"> * </button>
      <button onClick={()=>setInput(input+'/')} className="b1"> / </button>
      <button onClick={()=>setInput(input+')')}className="b1" > ) </button>
      <br /><br />
      </div>

      <div class="flex1">
      <button onClick={()=>setOutput(0) } className="b2"> clr output </button>
      <button onClick={()=>setInput("") } className="b2"> clr input </button>
      </div>
    </div>
  );
}
