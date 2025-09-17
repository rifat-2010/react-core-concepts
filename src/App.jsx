import Counter from "./counter";
import './App.css'
import Batsman from "./Batsman";
import BolerMan from "./boller";
import { Suspense } from "react";
import post from "./user";
import Post from "./user";

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
  return res.json();
}

function App() {
const postsPormise = fetchPosts();
function handleClick(){
  alert('I am clicked')
}


  return (
    <>

      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Post are coming.......</h3>}>
        <Post postsPormise ={postsPormise}></Post>
      </Suspense>
      <BolerMan></BolerMan>
            <Batsman></Batsman>
    <Counter></Counter>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
