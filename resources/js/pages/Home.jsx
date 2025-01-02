import { Head, Link, usePage } from "@inertiajs/react"
import Layout from "../Layouts/Layout"
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { Component, useState } from "react"

function Home({posts}){
    const route = useRoute() //useRoute is a hook that gives us access to the route object

    const props = usePage().props

    const [flashMsg, setFlashMsg] = useState(props.flash.message)

    const Component= usePage().component

    setTimeout(() => {
        setFlashMsg(null)
    }, 3000);
    
    return(
        <>
            <Head title={Component} />
            <h1>Hello {props.name}</h1>

            {flashMsg && <div className="alert">{flashMsg}</div>} {/*// for flash messages */}

            <div className="posts">
                {posts.data.map((post)=>
                    <li key={post.id}>{post.body} 
                        {/* <Link href={`/posts/${post.id}`}>Read more</Link> */} 
                            {/* This is a simple way to generate a URL for a given route */}
                        <Link href={route('posts.show',post.id)}>Read more</Link> 
                            {/* route is a helper function that generates a URL for a given route name */}
                    </li>
                    )}
            </div>  

            <div className="pagination">
                    {posts.links.map((link)=>
                        link.url ?
                        <Link 
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={link.active ? "active" : ""}
                        />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className='notactive'
                        />
                        )}
            </div>
        </>
    )
}

Home.layout = page => <Layout Children={page} />

export default Home;