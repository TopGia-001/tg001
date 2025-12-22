import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";

const PROMOTIONAL_PRODUCTS = [
    { id: 1, name: "Thùng 30 gói 3 màu", img: "/assets/Links/30-3mau.png" },
    { id: 2, name: "Thùng 6 bịch đa sắc", img: "/assets/Links/6dasac.png" },
    { id: 3, name: "Thùng 6 bịch tiểu hạ", img: "/assets/Links/6tieuha.png" },
    { id: 4, name: "Thùng 10 bịch gia gia", img: "/assets/Links/10giagia.png" },
    { id: 5, name: "Giấy tết", img: "" },
    { id: 6, name: "Thùng 20 gói giấy ăn đa sắc", img: "/assets/Links/dasac2.png" },
    { id: 7, name: "Combo 2 túi 2L đa sắc", img: "/assets/Links/2ldasac.png" },
    { id: 8, name: "Tẩy bồn cầu 4 chai hương gỗ thông", img: "/assets/Links/4tayboncau.png" },
    { id: 9, name: "Combo 3kg 1 túi + 1 chai chanh", img: "/assets/Links/3kgtui.png" },
    { id: 10, name: "Combo 6L nước giặt túi 1L mix tím, hồng", img: "/assets/Links/6lnuocgiat.png" },
    { id: 11, name: "UVC 208", img: "/assets/Links/UVC 208.png" },
    { id: 12, name: "M1-08", img: "/assets/Links/M1-08.png" },
    { id: 13, name: "UVC M1-05", img: "/assets/Links/UVC M1-05.png" },
    { id: 14, name: "UVC 8879", img: "/assets/Links/UVC 8879.png" },
    { id: 15, name: "M2-03", img: "/assets/Links/M2_03.png" },
    { id: 16, name: "T1-01", img: "/assets/Links/T1-01.png" },
    { id: 17, name: "8166", img: "/assets/Links/8166.png" },
    { id: 18, name: "M3-03", img: "/assets/Links/M3-03.png" },
    { id: 19, name: "T1-02", img: "/assets/Links/T1-02.png" },
    { id: 20, name: "T202", img: "/assets/Links/T202.png" },
    { id: 21, name: "1 Bịch Bỉm", img: "/assets/Links/Bimquan_L.png" },
    { id: 22, name: "1 Thùng khăn ướt topgiakids 5 gói", img: "/assets/Links/VE.png" },
    { id: 23, name: "2 Bịch bỉm", img: "/assets/Links/2bim.png" },
    { id: 24, name: "4 Bịch bỉm", img: "/assets/Links/4bim.png" },
    { id: 25, name: "1 Bịch tấm lót chống thấm 50 miếng", img: "/assets/Links/50lot.png" },
    { id: 26, name: "1 Hộp miếng lót thấm sữa", img: "/assets/Links/1lot.png" },
];

export default function PromotionalProductsPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#8B0000] relative overflow-hidden">

            <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
                <Image src="/assets/bg-simple.webp" alt="BG Desktop" fill className="object-cover object-top" priority />
            </div>
            <div className="md:hidden fixed top-[45px] left-0 right-0 bottom-0 z-0 w-full">
                <Image src="/assets/bg-simple-mobile.webp" alt="BG Mobile" fill className="object-cover object-top" priority />
            </div>

            <header className="md:hidden bg-[#b91c1c] text-white px-4 py-2 flex justify-between items-center shadow-lg z-50 relative border-b border-red-900/30 shrink-0 h-[45px]">
                <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-white" href="/"/>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">SẢN PHẨM KHUYẾN MÃI</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            <main className="flex-1 flex flex-col min-h-0 z-10 relative">

                <div className="shrink-0 flex justify-center pt-[8vh] pb-6 md:pt-[15vh] md:pb-10 px-4">
                    <h1
                        className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[22px] [-webkit-text-stroke:6px_#701318]
                            md:text-[48px] md:[-webkit-text-stroke:12px_#701318]
                            drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        SẢN PHẨM KHUYẾN MẠI
                    </h1>
                </div>

                <div className="flex-1 overflow-y-auto pb-[120px] scrollbar-hide">
                    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                            {PROMOTIONAL_PRODUCTS.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl md:rounded-[32px] p-2 md:p-4 shadow-xl flex flex-col items-center transition-transform hover:scale-105
                                               w-[calc(50%-6px)] sm:w-[calc(33.33%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)]"
                                >
                                    <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-xl md:rounded-2xl">
                                        {(product.img) && (
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        )}
                                    </div>

                                    {/* Product Name */}
                                    <div className="w-full min-h-[40px] md:min-h-[50px] flex items-center justify-center">
                                        <p className="text-[#1a1a1a] text-center font-bold text-[10px] md:text-[14px] leading-tight line-clamp-2 px-1">
                                            {product.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* BOTTOM NAVBAR */}
            <div className="fixed bottom-0 left-0 right-0 z-[60]">
                <BottomNavbar hideDecor={true} />
            </div>

        </div>
    );
}