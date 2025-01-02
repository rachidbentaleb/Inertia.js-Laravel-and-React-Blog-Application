import { Head, useForm, usePage } from "@inertiajs/react"

export default function Create(){

    const {data, setData, post ,errors, processing} = useForm({
        body: '',
    })

    const component = usePage().component

    function handleSubmit(e){
        e.preventDefault()
        post('/posts') //store method to store database(resources list) then go to controller
    }

    return(
        <>
        <Head title={component} />
            <h1>Create a new post</h1>
            <div className="formulaire">
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={data.body} 
                        onChange={ (e)=> setData('body',e.target.value)}>
                    </textarea>

                    {errors.body && <span>{errors.body}</span>}

                    <button disabled={processing}>Create a post</button>
                </form>
            </div>
        </>
    )
}

