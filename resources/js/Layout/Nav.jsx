import ForgotPassword from "@/Pages/Auth/ForgotPassword";
import Login from "@/Pages/Auth/Login";
import Register from "@/Pages/Auth/Register";
import { FaWallet } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Nav = ({ NamaWebnya, Logonya }) => {
    return (
        <>
            <div className="bg-abu-3 w-full h-auto text-white border-b border-abu-1 flex items-center justify-between px-5 fixed z-30">
                <div id="Logo" className="flex space-x-2 items-center py-3">
                    <img src={Logonya} alt="" className="max-w-12" />
                    <h1 className="text-2xl font-bold">{NamaWebnya}</h1>
                </div>
                <input 
                    type="search" 
                    placeholder={`Cari di ${NamaWebnya} ...`} 
                    className="w-96 h-10 bg-abu-2 border-none rounded-full placeholder:text-abu-1 placeholder:pl-20 focus:text-white focus:ring-abu-1"
                />
                <div id="Saldo">
                    <h1 className="flex items-center space-x-2"><FaWallet /><p>Saldo</p></h1>
                </div>
                <div id="Login" className="space-x-2">
                    <Link href="/login" className="bg-abu-2 rounded-full px-6 py-3">Masuk</Link>
                    <Link href="/register" className="bg-biru-grad rounded-full px-6 py-3">Daftar</Link>
                </div>
            </div>
        </>
    );
}

export default Nav;
