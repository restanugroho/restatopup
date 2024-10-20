import { useState, useEffect } from "react";
import { BsInboxesFill } from "react-icons/bs";
import { useForm } from "@inertiajs/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NamaWeb } from "@/Config/config";

const Sub = [
    { id: 0, nama: 'Dashboard' },
    { id: 1, nama: 'Pesanan' },
    { id: 2, nama: 'Deposit' },
    { id: 3, nama: 'Konfigurasi' },
    { id: 4, nama: 'Produk' },
    { id: 5, nama: 'Pengguna' },
    { id: 6, nama: 'Pesanan Manual' },
];

const Dashboard = ({ NamaWebnya }) => {
    const [Subnya, setSubnya] = useState(0);
    const gantiSubnya = (e) => {
        setSubnya(e);
    };

    const { data, setData, post, errors} = useForm({
        NamaWeb: NamaWebnya || ''
    })
    useEffect(() => {
        setData('NamaWeb', NamaWebnya);
    }, [NamaWebnya]);
    const isiNamaWeb = (e) => {
        setData('NamaWeb', e.target.value);
    };
    const kirimNamaWeb = (e) => {
        e.preventDefault();
        post('/settingweb', {
            onSuccess: () => {
                console.log('Success');
                toast.success('Nama Website ' + NamaWeb + ' Berhasil Di Simpan')
            },
            onError: (errors) => {
                console.error('Error:', errors);
            }
        });
    };
    
    return (
        <div className="bg-abu-2 text-white w-full h-auto absolute">
            <ToastContainer />
            <nav className="bg-abu-3 w-full h-auto flex justify-between items-center px-10 border-b border-abu-1 fixed z-10">
                <h1 className="font-bold text-3xl py-4">Dashboard</h1>
                <input type="search" placeholder="Cari di Dashboard..." className="w-96 h-10 bg-abu-2 border-none rounded-full placeholder:text-abu-1 placeholder:pl-24 focus:text-white focus:ring-abu-1" />
                <button to="/" className="hover:text-biru-1">Kembali ke Client</button>
            </nav>
            <div className="text-sm space-x-8 flex mx-10 mt-20 border-b border-abu-1 pb-4">
                {
                    Sub.map((sub, index) => (
                        <button
                            className={`bg-abu-3 p-3 rounded-full duration-200 hover:scale-[1.10] hover:bg-biru-grad ${Subnya === index ? 'bg-biru-grad' : ''}`}
                            onClick={() => gantiSubnya(index)}
                            key={index}
                        >
                            {sub.nama}
                        </button>
                    ))
                }
            </div>
            {Subnya === 0 && (
                <div className="w-[1250px] h-auto mx-14 mt-14 mb-10">
                    <h1 className="text-2xl">Pesanan</h1>
                    <div id="kotakcontainer" className="my-8 flex flex-wrap justify-between">
                        <div className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                            <div className="my-3 mx-5 space-y-5">
                                <h1 className="text-lg">Pesanan</h1>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                    <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                </div>
                            </div>
                            <BsInboxesFill className="mr-10 text-4xl text-biru-1" />
                        </div>
                        <div className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                            <div className="my-3 mx-5 space-y-5">
                                <h1 className="text-lg">Pesanan Berhasil</h1>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                    <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                </div>
                            </div>
                            <BsInboxesFill className="mr-10 text-4xl text-green-500" />
                        </div>
                        <div className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                            <div className="my-3 mx-5 space-y-5">
                                <h1 className="text-lg">Pesanan Pending</h1>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                    <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                </div>
                            </div>
                            <BsInboxesFill className="mr-10 text-4xl text-yellow-400" />
                        </div>
                        <div className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                            <div className="my-3 mx-5 space-y-5">
                                <h1 className="text-lg">Pesanan Gagal</h1>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                    <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                </div>
                            </div>
                            <BsInboxesFill className="mr-10 text-4xl text-red-500" />
                        </div>
                        <div className="w-[600px] h-[150px] mb-10 bg-abu-3 rounded-[15px] border border-abu-1 flex items-center justify-between">
                            <div className="my-3 mx-5 space-y-5">
                                <h1 className="text-lg">Deposit</h1>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold ml-2">Rp.0</h1>
                                    <h1 className="text-sm text-abu-1 ml-4">Dengan 0x Pesanan</h1>
                                </div>
                            </div>
                            <BsInboxesFill className="mr-10 text-4xl" />
                        </div>
                    </div>
                </div>
            )}
            {Subnya === 1 && (
                <>
                    {/* Konten untuk Pesanan */}
                </>
            )}
            {Subnya === 2 && (
                <>
                    {/* Konten untuk Deposit */}
                </>
            )}
            {Subnya === 3 && (
                <div className="w-full h-auto text-2xl">
                    <div className="m-10 space-y-5">
                        <div className="space-y-3">
                            <h1>Logo Website</h1>
                            <input type="url" placeholder="Masukan Link Logo Website" className="bg-abu-3 rounded-full border-abu-1 placeholder:text-abu-1 w-[500px] h-[60px]" />
                        </div>
                        <form onSubmit={kirimNamaWeb} className="space-y-3">
                            <h1>Nama Website</h1>
                            <div className="flex items-center">
                                <input value={data.NamaWeb} onChange={isiNamaWeb} type="text" placeholder="Masukan Nama Logo Website" className="bg-abu-3 rounded-full border-abu-1 placeholder:text-abu-1 w-[500px] h-[60px]" />
                                <button type="submit" className="ml-3 bg-biru-grad px-6 py-2 rounded-full">Kirim</button>
                            </div>
                            {errors.NamaWeb && <div className="text-red-500">{errors.NamaWeb}</div>}
                        </form>
                        <div className="space-y-3">
                            <h1>Logo Website</h1>
                            <input type="url" placeholder="Masukan Link Logo Website" className="bg-abu-3 rounded-full border-abu-1 placeholder:text-abu-1 w-[500px] h-[60px]" />
                        </div>
                        <div className="space-y-3">
                            <h1>Nama Website</h1>
                            <input type="text" placeholder="Masukan Nama Logo Website" className="bg-abu-3 rounded-full border-abu-1 placeholder:text-abu-1 w-[500px] h-[60px]" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
