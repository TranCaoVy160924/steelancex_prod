import { 
    Banner, 
    Quick, 
    Category, 
    Recent, 
    AboutUs, 
    Footer 
} from "@/app/components"

export default function Home() {
    return (
        <div>
            <Banner />
            <Quick />
            <Category />
            <Recent />
            <AboutUs />
            <Footer />
        </div>
    )
}
