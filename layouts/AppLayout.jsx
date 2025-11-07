import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderOne from "@/components/HeaderOne"

const AppLayout = () => {

    return (
        <>
        <HeaderOne/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default AppLayout