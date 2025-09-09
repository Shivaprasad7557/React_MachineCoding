import { useState } from "react";
import { user } from "../user";

function UserCard() {

    const [toggle , setToggle] = useState(false)

    
    return <div style={{backgroundColor:'lightgrey',margin:'120px 490px',  border: '1px solid black', borderRadius: '5px', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} >
        <h2>Name : {user.obj1.name}</h2>
        <h3>Email : {toggle === false ?'XXX-XXX@gmail.com':user.obj1.email}</h3>
        <h3>Age :{user.obj1.age}({user.obj1.age >= 18 ? 'Adult':'Minor'})</h3>
        <h3>Location : {user.obj1.location}</h3>
        <button onClick={()=>setToggle(!toggle)} >{toggle ? 'hide-email' : 'show-email'}</button>
    </div>
}

export default UserCard;