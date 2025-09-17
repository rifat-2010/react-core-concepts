import { use } from "react";

export default function Post({postsPromise}){
console.log(postsPromise)
    const post = use(postsPromise);
    console.log(post)

    return(
        <div className='card'>
            <h3>All post are here : {post.length}</h3>
        </div>
    )
}