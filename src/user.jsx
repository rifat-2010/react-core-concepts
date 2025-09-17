import { use } from "react";

export default function Post({postsPormise}){
console.log(postsPormise)
    const post = use(postsPormise);
    console.log(post)

    return(
        <div className='card'>
            <h3>All post are here : {post.length}</h3>
        </div>
    )
}