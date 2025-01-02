import { Link } from "@inertiajs/react";


export default function Layout({Children}){
    return(
        <>
            <header>
                <div className="logo">
                    <h1>Blan</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/posts/create">Create</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {Children}
            </main>

            <footer></footer>
        </>
    );
}