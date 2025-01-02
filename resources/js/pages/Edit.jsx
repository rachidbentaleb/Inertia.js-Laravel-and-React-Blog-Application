import { Head, useForm, usePage } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy"


export default function Create({post}){

    const {data, setData, put ,errors, processing} = useForm({
        body: post.body,
    })

    const route = useRoute() 

    const component = usePage().component

    function handleSubmit(e){
        e.preventDefault()
        // put(`/posts/${post.id}`) 
        put(route('posts.update',post)) //this is the same as the above line but we are using the route helper function
    }

    return(
        <>
        <Head title='Edit' />
            <h1>Update the post</h1>
            <div className="formulaire">
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={data.body} 
                        onChange={ (e)=> setData('body',e.target.value)}>
                    </textarea>

                    {errors.body && <span>{errors.body}</span>}

                    <button disabled={processing}>Update your post</button>
                </form>
            </div>
        </>
    )
}

