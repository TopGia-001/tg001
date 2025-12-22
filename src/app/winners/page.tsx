import React from 'react';
import Image from 'next/image';
import { Home, ChevronLeft, ChevronRight, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";

// MOCK DATA
const MOCK_WINNERS = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    name: "Nguyễn Văn A",
    prize: "Xe máy điện Vinfast Feliz 2025"
}));

export default function WinnersPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority />
            </div>
            <div className="md:hidden fixed top-[45px] left-0 right-0 bottom-0 z-0 w-full">
                <Image src="/assets/bg-simple-mobile.webp" alt="BG Mobile" fill className="object-cover object-top" priority />
            </div>

            {/* MOBILE HEADER */}
            <header className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-white" href="/"/>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">DANH SÁCH TRÚNG THƯỞNG</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            <div className="relative z-10 flex-1 flex flex-col items-center w-full min-h-0 md:justify-center">

                <div className="shrink-0 w-full max-w-[1000px] px-3 md:px-8 pt-[120px] md:pt-[4%] pb-2 md:pb-6">
                    <div className="flex justify-center mb-1 md:mb-0">
                        <h1
                            className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[20px] [-webkit-text-stroke:6px_#701318]
                            md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                            style={{ paintOrder: 'stroke fill' }}
                        >
                            CẬP NHẬT NGƯỜI TRÚNG GIẢI
                        </h1>
                    </div>
                </div>

                <div className="flex-1 md:flex-none w-full max-w-[1000px] px-3 md:px-8 overflow-y-auto md:overflow-visible min-h-0 scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:gap-y-3 pb-4 md:pb-0">
                        {MOCK_WINNERS.map((winner, index) => (
                            <div key={index} className={`${index >= 8 ? 'hidden md:flex' : 'flex'}`}>
                                <WinnerCard data={winner} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="shrink-0 w-full flex justify-center pb-[100px] pt-3 z-20 md:pb-[20px] md:pt-0 md:mt-8">
                    <div className="scale-90 md:scale-100 bg-[#450a0a] px-4 py-1.5 md:px-6 md:py-2 rounded-full flex items-center gap-3 md:gap-6 shadow-xl border border-white/10">
                        <button className="text-white/80 hover:text-white transition"><ChevronLeft size={18} strokeWidth={3} /></button>
                        <div className="flex items-center gap-2 md:gap-3 font-bold text-white text-xs md:text-sm">
                            <button className="w-7 h-7 rounded-full border-2 border-white bg-[#d62828] flex items-center justify-center shadow-md text-white">1</button>
                            <button className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60">2</button>
                            <button className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60">3</button>
                            <span className="text-white/40 pb-1">_</span>
                            <button className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60">15</button>
                        </div>
                        <button className="text-white/80 hover:text-white transition"><ChevronRight size={18} strokeWidth={3} /></button>
                    </div>
                </div>

            </div>

            <BottomNavbar hideDecor={true} />

        </div>
    );
}

function WinnerCard({ data }: { data: { name: string, prize: string } }) {
    return (
        <div className="bg-white rounded-xl px-2 py-1 md:px-2 flex items-center shadow-[0_2px_4px_rgba(0,0,0,0.15)] h-[65px] w-full border border-gray-100 relative z-10">
            <div className="w-[42%] pr-2 flex items-center justify-center">
                <span className="shopee-extrabold font-black text-black text-[18px] md:text-base text-center leading-tight line-clamp-1">
                    {data.name}
                </span>
            </div>
            <div className="h-[60%] w-[1px] border-r-2 border-dashed border-gray-300 mx-1 shrink-0"></div>
            <div className="flex-1 pl-2 flex flex-col justify-center min-w-0">
                <span className="shopee-extrabold text-[14px] font-bold text-black leading-none mb-0.5 tracking-tight truncate">
                    Xe máy điện
                </span>
                <span className="shopee-extrabold text-[16px] font-black text-black leading-tight tracking-tight truncate">
                    Vinfast Feliz 2025
                </span>
            </div>
        </div>
    )
}