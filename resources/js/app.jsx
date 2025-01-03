import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout'
import '../css/app.css'


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page =  pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || ((page) => <Layout Children={page} />)
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#fff',
        showSpinner: true 
    }
})
