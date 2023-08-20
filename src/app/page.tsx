import Navbar from "./components/navbar"



export default function Page(){

    return(
        <main className="min-h-screen bg-white">
            <div className="mx-4 w-full md:mx-auto md:w-[742px] pt-12">
                <Navbar></Navbar>
            </div>
        </main>
    )
}