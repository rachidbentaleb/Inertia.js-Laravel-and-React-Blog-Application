import { Head, Link, useForm, usePage } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy"

export default function Show({post}){

    const {delete: destroy}= useForm()

    const route = useRoute()

    const Component = usePage().component

    const name = usePage().props
    //usePage is a hook that gives us access to the page object and this object contains all the props that are passed from the controller
    // share function in the controller is used to pass the props to the page object (HandleInertiaRequests.php)

    function submit(e){
        e.preventDefault()
        destroy(route('posts.destroy',post.id))
        //destroy(`posts/${post.id}`) //this is the same as the above line but we are using the route helper function
    }


    return(
        <>
            <Head title={Component} />
            <h1>Hello, {name.name}</h1>
            
            <ul className="posts">
                <li key={post.id}>
                    {post.body} {/*show the body of the post and post is passing as props from the controller*/}
                    <div className="calltoaction">
                        {/* <button className="update-btn"><Link href={`/posts/${post.id}/edit`}>Update</Link></button> */}
                        <button><Link href={route('posts.edit',post)} className="update-btn">Update</Link></button>
                        <button className='delete-btn' onClick={submit}>Delete</button>
                    </div>
                </li> 
            </ul>  
        </>
    )
}
