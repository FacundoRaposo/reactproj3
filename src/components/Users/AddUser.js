import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import UserList from "./UserList";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const UsernameHandler = (e) => {
    setUsername(e.target.value);
    
  };

  const AgeHandler = (e) =>{
    setAge(e.target.value);
    
  }

  const addUserHandler = (e) => {
    e.preventDefault();
   
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please entered valid username information",
      });
    }
    if(+age < 1){
      return;
    }
    props.onAddUser(username,age);
  };



  return (
    <>
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>

        <input id="username" type="text" value={username} onChange={UsernameHandler}></input>

        <label htmlFor="age">Age(Years)</label>

        <input id="age" type="number" onChange={AgeHandler} value={age}></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
      
    </>
  );
};

export default AddUser;
