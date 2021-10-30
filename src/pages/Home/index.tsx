import "./style.css";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

const Home = () => {
  interface User {
    name: string,
    age: number,
    hobby: string
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const [user, setUser] = useState<User[]>([] as User[] );

  const handleNameChange = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value)    
  }

  const handleAgeChange = (e: any) => {
    console.log(e.target.value);
    setAge(e.target.value)    
  }

  const handleHobbyChange = (e: any) => {
    console.log(e.target.value);
    setHobby(e.target.value)    
  }

  const handleSubmit = () => {
    setUser([...user, {name, age, hobby}])
    console.log(user);
  }

  return (
  <>
    <Input placeholder="Nome" label="Nome: " onChange={handleNameChange} />
    <Input placeholder="Idade" label="Idade: " type="number" onChange={handleAgeChange} />
    <Input placeholder="Hobby" label="Hobby: " onChange={handleHobbyChange} />
    <button onClick={handleSubmit}>Enviar</button>
    
    {user && user.map((elem, id) => <Card key={id} className="Card" name={elem.name} age={elem.age} hobby={elem.hobby} />)}
  </> )
};

export default Home;