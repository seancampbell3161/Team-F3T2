import React from "react"
import './App.css';
import LoginPage from './component/LoginPage';
import axios from "axios"
import AccountPage from "./component/AccountPage"

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  function postCreator(){
    axios.post("/createPost")
  }

  return (
    <div>
      <AccountPage></AccountPage>
      <button onClick={postCreator}>click</button>
    </div>
  )}

export default App;
