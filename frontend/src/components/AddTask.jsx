import { useState } from "react"
import "./AddTaskStyle.css";

const AddTask=()=>{

    const[inputtxt,setInputtxt] = useState("");
    
    const sendToServer = ()=>{
        const payload = {
            "text":inputtxt,
        }
        const fetchopt = {
            method:"POST",
            body:JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:3000/todos/add/",fetchopt)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    const updatetxt =(e)=>{
        setInputtxt(e.target.value);
        console.log("value of txt "+inputtxt)
    }
    return(
        <div>
            <h1>Add New Tasks</h1>
            <form  onSubmit={sendToServer} action="http://localhost:3001/"><br></br>
                <input type="text" placeholder="Enter task name... " onChange={updatetxt}/><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AddTask;