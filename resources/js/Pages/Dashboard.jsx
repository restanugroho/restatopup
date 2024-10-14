import { useState } from "react"
import { BsInboxesFill } from "react-icons/bs";

const Sub = [
    {id: 0, nama: 'Dashboard'},
    {id: 1, nama: 'Pesanan'},
    {id: 2, nama: 'Deposit'},
    {id: 3, nama: 'Konfigurasi'},
    {id: 4, nama: 'Produk'},
    {id: 5, nama: 'Pengguna'},
    {id: 6, nama: 'Pesanan Manual'},
]

const Dashboard = () => {

    const [Subnya, setSubnya] = useState(0)
    const gantiSubnya = (e) => {
        setSubnya(e)
    }

    return(
        <div className="bg-abu-2 text-white w-full h-auto absolute">
            <nav className="bg-abu-3 w-full h-auto flex justify-between items-center px-10 border-b border-abu-1 fixed z-10">
                <h1 className="font-bold text-3xl py-4">Dashboard</h1>
                <input type="search" placeholder="Cari di Dashboard..." className="w-96 h-10 bg-abu-2 border-none rounded-full placeholder:text-abu-1 placeholder:pl-24 focus:text-white focus:ring-abu-1"/>
                <button className="hover:text-biru-1">Kembali ke Client</button>
            </nav>
            <sub className="text-sm space-x-8 flex mx-10 mt-20 border-b border-abu-1 pb-4">
                {
                    Sub.map((sub, index)=>(
                        <button className={`bg-abu-3 p-3 rounded-full duration-200 hover:scale-[1.10] hover:bg-biru-grad ${Subnya === index ? 'bg-biru-grad' : ''}`} onClick={() => gantiSubnya(index)}  id={index}>{sub.nama}</button>
                    ))
                }
            </sub>
            { Subnya === 0 && (
                <>
                    <div className="w-[1250px] h-auto mx-14 mt-14 mb-10">
                        <h1 className="text-2xl">Pesanan</h1>
                        <div id="kotakcontainer" className="my-8 flex flex-wrap justify-between">
                            <div id="kotak1" className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                                <div className="my-3 mx-5 space-y-5">
                                    <h1 className="text-lg">Pesanan</h1>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                        <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                    </div>
                                </div>
                                <BsInboxesFill className="mr-10 text-4xl text-biru-1"/>
                            </div>
                            <div id="kotak2" className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                                <div className="my-3 mx-5 space-y-5">
                                    <h1 className="text-lg">Pesanan Berhasil</h1>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                        <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                    </div>
                                </div>
                                <BsInboxesFill className="mr-10 text-4xl text-green-500"/>
                            </div>
                            <div id="kotak3" className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                                <div className="my-3 mx-5 space-y-5">
                                    <h1 className="text-lg">Pesanan Pending</h1>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                        <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                    </div>
                                </div>
                                <BsInboxesFill className="mr-10 text-4xl text-yellow-400"/>
                            </div>
                            <div id="kotak4" className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                                <div className="my-3 mx-5 space-y-5">
                                    <h1 className="text-lg">Pesanan Gagal</h1>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                        <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                    </div>
                                </div>
                                <BsInboxesFill className="mr-10 text-4xl text-red-500"/>
                            </div>
                            <div id="kotak5" className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                                <div className="my-3 mx-5 space-y-5">
                                    <h1 className="text-lg">Deposit</h1>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                        <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                    </div>
                                </div>
                                <BsInboxesFill className="mr-10 text-4xl"/>
                            </div>
                        </div>
                    </div>
                </>
            )}
            { Subnya === 1 && (
                <>

                </>
            )}
            { Subnya === 2 && (
                <>

                </>
            )}
            { Subnya === 2 && (
                <>
                    
                </>
            )}
        </div>
    )
}

export default Dashboard