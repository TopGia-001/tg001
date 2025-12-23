'use client'; // Cần thiết vì sử dụng interactive elements hoặc thư viện render

import React from 'react';
import Image from 'next/image';
import { Home, MoreHorizontal, X } from 'lucide-react';
import BottomNavbar from "@/src/component/bottomNavbar";
import Link from "next/link";

// Thư viện render Markdown
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";

// --- NỘI DUNG THỂ LỆ (COPY TỪ BƯỚC OCR) ---
const RULES_CONTENT = `
# **THỂ LỆ CHƯƠNG TRÌNH KHUYẾN MẠI**

(Kèm theo công văn số    /2024/ĐKKM-TOPGIA ngày 13/12/2024 của 
Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani)

**1. Tên chương trình khuyến mại:**
  \\
RINH TOPGIA - LỘC ĐẦY NHÀ

**2. Hàng hóa, dịch vụ được khuyến mại:**  \\
Các sản phẩm thuộc danh mục hàng hóa khăn giấy, nước giặt mang nhãn hiệu TOPGIA do Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani sản xuất, phân phối theo Phụ lục 01 và Phụ lục 02 đính kèm văn bản này.
Số lượng hàng hóa, dịch vụ: 1,092,380 sản phẩm.
Tổng giá trị hàng được khuyến mại (VNĐ): 151,013,750.000 VNĐ (Bằng chữ: Một trăm năm mươi mốt tỷ, không trăm mười ba triệu, bảy trăm năm mươi nghìn đồng)

**3. Thời gian khuyến mại:**

**4. Địa bàn (phạm vi) khuyến mại:**  \\
Hệ thống sàn thương mại điện tử của Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani trên toàn lãnh thổ Việt Nam.  
\\
Danh sách hệ thống sàn thương mại điện tử: 
| Tên hệ thống sàn thương mại điện tử | Link hệ thống sàn thương mại điện tử |
| :--- | :--- |
| TopGia HCM | https://shopee.vn/topgiahcm |
| TopGia HN | https://shopee.vn/topgia68 |
| TopGia HCM Store | https://shopee.vn/topgiahcm.store |
| TopGia Official | https://shopee.vn/topgia.official |
| TOPGIA Chăm sóc nhà cửa | https://www.lazada.vn/shop/topgia-cham-soc-nha-cua |
| Top Gia | https://www.lazada.vn/shop/top-gia |
| TOPGIAKIDS | https://www.tiktok.com/@topgiakidschiase |
| TOPGIAKIDS HCM STORE | https://www.tiktok.com/@topgiakids.hcm |
| TOPGIA Hồ Chí Minh | https://www.tiktok.com/@topgiaso1 |
| Top Gia Hồ Chí Minh | https://www.tiktok.com/@topgiahcm |
| TOPGIAHN | https://www.tiktok.com/@topgiahn?_t=8s4nollCBgA&_r=1 |
| TOP GIA VIET NAM | https://www.tiktok.com/@topgiadoisong |
| TopGiaKids HN | https://shopee.vn/topgiakidshn |
| TopGiaKids HCM Store | https://shopee.vn/topgiakids.hcm |

**5. Hình thức khuyến mại:**
Chương trình khuyến mại mang tính may rủi - Mã dự thưởng online

**6. Khách hàng của chương trình khuyến mại (đối tượng hưởng khuyến mại):**  \\
Các đối tượng được tham gia chương trình khuyến mại: Tất cả khách hàng trên toàn quốc mua hàng hóa khuyến mại trên sàn thương mại điện tử của Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani quy định tại Mục 4 Thể lệ, các hàng hóa khuyến mại nêu tại Mục 2 văn bản này trong thời gian khuyến mại. 
Các đối tượng không được tham gia chương trình khuyến mại là người lao động đang làm việc cho Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani.  \\
**7. Cơ cấu giải thưởng:**
<table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">STT</th>
      <th style="border: 1px solid black; padding: 8px;">Cơ cấu giải thưởng</th>
      <th style="border: 1px solid black; padding: 8px;">Nội dung giải thưởng (chi tiết nội dung và ký mã hiệu từng giải thưởng)</th>
      <th style="border: 1px solid black; padding: 8px;">Trị giá giải thưởng (VNĐ)</th>
      <th style="border: 1px solid black; padding: 8px;">Số giải</th>
      <th style="border: 1px solid black; padding: 8px;">Thành tiền (VNĐ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">1</td>
      <td style="border: 1px solid black; padding: 8px;">Xe máy điện</td>
      <td style="border: 1px solid black; padding: 8px;">Xe máy điện Vinfast vero X</td>
      <td style="border: 1px solid black; padding: 8px;">34,900,000</td>
      <td style="border: 1px solid black; padding: 8px;">2</td>
      <td style="border: 1px solid black; padding: 8px;">69,800,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">2</td>
      <td style="border: 1px solid black; padding: 8px;">Điện thoại</td>
      <td style="border: 1px solid black; padding: 8px;">Iphone 17 256G</td>
      <td style="border: 1px solid black; padding: 8px;">24,990,000</td>
      <td style="border: 1px solid black; padding: 8px;">3</td>
      <td style="border: 1px solid black; padding: 8px;">74,970,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">3</td>
      <td style="border: 1px solid black; padding: 8px;">Tivi</td>
      <td style="border: 1px solid black; padding: 8px;">QLED Tivi 4K 75'' Samsung QA75Q6FAAKXXV Smart TV</td>
      <td style="border: 1px solid black; padding: 8px;">19,490,000</td>
      <td style="border: 1px solid black; padding: 8px;">3</td>
      <td style="border: 1px solid black; padding: 8px;">58,470,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">4</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lọc nước</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lọc nước nóng lạnh Kangaroo KG10A17</td>
      <td style="border: 1px solid black; padding: 8px;">5,499,000</td>
      <td style="border: 1px solid black; padding: 8px;">3</td>
      <td style="border: 1px solid black; padding: 8px;">16,497,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">5</td>
      <td style="border: 1px solid black; padding: 8px;">Máy lọc không khí</td>
      <td style="border: 1px solid black; padding: 8px;">Xiaomi Smart Air Purifier 4 máy lọc không khí diện tích 40 m²</td>
      <td style="border: 1px solid black; padding: 8px;">3,600,000</td>
      <td style="border: 1px solid black; padding: 8px;">10</td>
      <td style="border: 1px solid black; padding: 8px;">36,000,000</td>
    </tr>
    <tr>
      <td colspan="4" style="border: 1px solid black; padding: 8px; font-weight: bold; text-align: center;">Tổng</td>
      <td style="border: 1px solid black; padding: 8px; font-weight: bold;">21</td>
      <td style="border: 1px solid black; padding: 8px; font-weight: bold;">255,737,000</td>
    </tr>
  </tbody>
</table>

- Tổng giá trị giải thưởng trong chương trình khuyến mại: 255,737,000 VNĐ (Bằng chữ: Hai trăm năm mươi lăm triệu, bảy trăm ba mươi bảy nghìn đồng).
- Giải thưởng chỉ bao gồm trị giá của giải thưởng mà không bao gồm các chi phí khác.
- Giải thưởng không được chuyển nhượng lại cho bên thứ ba.
- Tổng giá trị giải thưởng so với tổng giá trị hàng hóa, dịch vụ khuyến mãi: 0.16%
- Các giải thưởng không được quy đổi thành tiền mặt.

**8. Nội dung chi tiết thể lệ chương trình khuyến mại:**

8.1 Điều kiện, cách thức, thủ tục cụ thể khách hàng phải thực hiện để được tham gia chương trình khuyến mại:

BƯỚC 1: Trong thời gian diễn ra chương trình, khách hàng mua Sản phẩm khuyến mại sẽ nhận được một thiệp đặt trong thùng Sản phẩm. Trên thiệp có in mã dự thưởng (bao gồm các ký tự số và chữ) và QR Code dẫn vào Landing Page của chương trình.  
BƯỚC 2: Khách hàng quét mã QR Code hoặc trực tiếp nhập địa chỉ Landing Page để vào trang chủ chương trình.  
BƯỚC 3: Sau khi truy cập vào Landing Page, khách hàng bấm nút "Tham gia ngay".  
BƯỚC 4: Khách hàng điền các thông tin sau để tham gia chương trình:  
Họ và tên:  
Số điện thoại:  
Ngày tháng năm sinh:  
Nơi sống (Tỉnh/thành phố):  
Tiếp tục điền Mã khuyến mại được in trên thiệp (ảnh minh họa)  
\\
Khách hàng tiếp tục nhấn vào các ô được yêu cầu tại trang đăng ký (áp dụng cho lần đầu tham gia):  
+ Tôi xác nhận tôi từ 13 tuổi trở lên và trường hợp dưới 18 tuổi, tôi xác nhận rằng tôi đã có sự chấp thuận của cha mẹ hoặc người nuôi dưỡng hợp pháp của tôi để tham gia chương trình trên cơ sở tôi đã đọc, hiểu, đồng ý với các Điều kiện và Điều khoản áp dụng, Chính sách bảo mật, và đồng ý cung cấp thông tin cá nhân để đăng ký tham gia chương trình. (Khách hàng cần nhấn vào mục này để tiếp tục tham gia chương trình. Trường hợp khách hàng không đồng ý cung cấp thông tin cá nhân để đăng ký tham gia chương trình thì khách hàng không thể tiếp tục tham gia chương trình khuyến mại của TopGia).  
+ Tôi đồng ý cho phép công ty sử dụng thông tin của tôi để gửi các thông tin quảng cáo và chương trình khuyến mại kế tiếp của công ty (Khách hàng có thể nhấn vào mục này để thể hiện đồng ý, hoặc không nhấn vào mục này để thể hiện không đồng ý để tiếp tục tham gia chương trình).  
+ Và nhấn "Tiếp tục" để có cơ hội nhận thưởng.(ảnh minh họa)  
\\
Trong vòng 1p sau khi gửi Mã dự thưởng, khách hàng nhận được thông báo từ Landing Page:  

| STT | Trường hợp | Nội dung thông báo từ Landing Page |
| :--- | :--- | :--- |
| 1 | Trường hợp gửi Mã dự thưởng thành công | Hình ảnh minh họa |
| 2 | Trường hợp Mã dự thưởng đã được nhập vào hệ thống trước đó | Hình ảnh minh họa |
| 3 | Trường hợp nhận sai Mã dự thưởng | Hình ảnh minh họa |
| 4 | Nếu khách hàng nhập sai Mã dự thưởng từ lần thứ 03 | Hình ảnh minh họa |

\\
Khách hàng nhập Mã dự thưởng thành công trong vòng tối đa 1 phút, Landing Page sẽ hiển thị thông báo:
| STT | Trường hợp | Thông báo kết quả trúng thưởng |
| :--- | :--- | :--- |
| 1 | Khách hàng không trúng thưởng | "Rất tiếc bạn chưa trúng thưởng. Hãy tiếp tục nhập thêm mã để có cơ hội trúng thưởng!" (Ảnh minh họa) |
| 2 | Trường hợp Mã dự thưởng đã được nhập vào hệ thống trước đó | Chúc mừng! Bạn đã trúng..... BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. (Ảnh minh họa) |



**8.2. Thời gian, cách thức phát hành bằng chứng xác nhận trúng thưởng:**
- Trong thời gian khuyến mại, khách hàng mua Sản phẩm khuyến mại, quét mã QR Code và nhập mã dự thưởng in trên thiệp để tham gia chương trình.
- Thời gian xác định kết quả trúng thưởng là thời gian ngay sau đó, khi khách hàng nhấn vào nút “Tham gia ngay” của chương trình và trong thời gian khuyến mại (Từ 08/01/2026 - 10/02/2026).
- Tổng số lượng Mã dự thượng được phát hành trong chương trình khuyến mại tương ứng với số lượng sản phẩm khuyến mại theo phụ lục đính kèm.

**8.3 Quy định về bằng chứng xác định trúng thưởng**
\\
Bằng chứng trúng thưởng là một trong những hình ảnh trúng thưởng như bên dưới để xác nhận kết quả trúng thưởng:
| STT | Giải thưởng khách hàng nhận được | Hình ảnh trúng thưởng |
| :--- | :--- | :--- |
| 1 | Chúc mừng! Bạn đã trúng Xe máy điện Vinfast vero X BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. |  |
| 2 | Chúc mừng! Bạn đã trúng Iphone 17 256G BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. | |
| 3 | Chúc mừng! Bạn đã trúng QLED Tivi 4K 75'' Samsung QA75Q6FAAKXXV Smart TV BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. | |
| 4 | Chúc mừng! Bạn đã trúng Máy lọc nước nóng lạnh Kangaroo KG10A17 BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. | |
| 5 | Chúc mừng! Bạn đã trúng Xiaomi Smart Air Purifier 4 máy lọc không khí diện tích 40 m² BTC sẽ liên hệ với bạn qua số điện thoại (...... - số dùng để gọi thông báo trúng thưởng) để hướng dẫn thủ tục nhận thưởng trong vòng 15 ngày. | |


**8.4 Quy định về thời gian, địa điểm và cách thức xác định trúng thưởng:**
- Bằng chứng trúng thưởng là một trong những hình ảnh trúng thưởng thuộc mục 8.3.
- Việc xác định kết quả bốc thăm may mắn được thực hiện bằng phần mềm cài thuật toán tự động xác định trúng thưởng ngẫu nhiên trong tổng cơ cấu giải thưởng còn lại của chương trình tính đến thời điểm khách hàng trúng thưởng.
- Khách hàng có thể xem thông tin công khai danh sách trúng thưởng và số giải thưởng còn lại của chương trình được cập nhật tại thời điểm truy cập khi ấn vào lịch sử tại Landing Page.

**8.5 Thông báo trúng thưởng:**
\\
Sau khi hoàn tất bước 8.4, Khách hàng tham gia chương trình sẽ nhận được thông báo kết quả tại màn hình, sau đó khách hàng nhập thông tin nhận giải ở bước 8.3. Hệ thống sẽ tự động lưu thông tin khách hàng để xác nhận giải.
\\
**8.6. Thời gian địa điểm, cách thức và thủ tục trao thưởng**
- Địa điểm, cách thức trao thưởng: 
  + Mọi trao đổi đối với khách hàng trúng thưởng từ công ty về việc thông báo trúng thưởng cho khách hàng, hướng dẫn cung cấp hồ sơ trúng thưởng, phản hồi hồ sơ trúng thưởng và thủ tục trao thưởng được quy định dưới đây sẽ liên hệ từ: SĐT.....Email....
  + Trong vòng 15 ngày kể từ ngày khách hàng trúng thưởng, BTC sẽ liên hệ khách hàng theo số điện thoại khách hàng đã đăng ký trên landing page để thông báo trúng thưởng và hướng dẫn thủ tục trao thưởng.
- Thủ tục trao thưởng: Khách hàng trúng thưởng phải cung cấp các tài liệu và thông tin nhận thưởng qua địa chỉ email:.... trong vòng 03 ngày kể từ ngày BTC thông báo kết quả trúng thưởng qua điện thoại cho khách hàng:
  + Hình chụp CCCD/Hộ chiếu
  + Số điện thoại của khách hàng như đã đăng ký tại Landing page.
- Trong vòng 10 ngày kể từ khi nhận được email hồ sơ trúng thưởng, Ban Tổ chức sẽ kiểm tra tính đầy đủ và trùng khớp của thông tin so với dữ liệu khách hàng đã đăng ký tại Landing Page.
  + Nếu thông tin hợp lệ, Ban Tổ chức sẽ liên hệ với khách hàng để thông báo thủ tục nhận giải.
  + Nếu hồ sơ trúng thưởng chưa đầy đủ hoặc không trùng khớp với dữ liệu hệ thống, Ban Tổ chức sẽ thông báo cho khách hàng qua điện thoại và email. Khách hàng cần bổ sung thông tin trong vòng 03 ngày làm việc kể từ khi nhận được thông báo. Sau khi thông tin được bổ sung đầy đủ và hợp lệ, Ban Tổ chức sẽ tiếp tục quy trình kiểm tra và liên hệ trong vòng 10 ngày kể từ thời điểm nhận được email hồ sơ trúng thưởng ban đầu.

**9. Đầu mối giải đáp thắc mắc cho khách hàng về các vấn đề liên quan đến chương trình khuyến mại (người liên hệ, điện thoại...).**
\\
Mọi thắc mắc liên quan đến chương trình khuyến mại này, khách hàng liên hệ theo hotline chương trình 1900 9441 cước phí 1000 đồng/phút để được hướng dẫn, giải đáp.  

**10. Trách nhiệm công bố thông tin:**
\\
Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani thông báo chương trình khuyến mại,  thể lệ chương trình chính thức trên các sàn thương mại điện tử quy định tại mục 4 Thể lệ này.  
Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani có trách nhiệm thông báo kết quả cho người trúng thưởng. Danh sách khách hàng trúng thưởng được công bố chính thức trên các sàn thương mại điện tử quy định tại mục 4 Thể lệ này.

**11. Các quy định khác:**
\\
Khách hàng trúng thưởng phải chịu thuế thu nhập không thường xuyên (nếu có) theo quy định của pháp luật và các chi phí đi lại, ăn ở và các chi phí khác liên quan đến việc nhận thưởng và chuyển quyền sở hữu, sử dụng tài sản (nếu có)..  
Việc tổ chức chương trình khuyến mại phải đảm bảo tính công bằng, minh bạch và khách quan.
Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani được sử dụng tên và hình ảnh của khách hàng trúng thưởng cho mục đích quảng cáo thương mại nếu được sự chấp thuận của khách hàng trúng thưởng.   
Trong trường hợp xảy ra tranh chấp liên quan đến chương trình khuyến mại này, Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani có trách nhiệm trực tiếp giải quyết. Nếu không thỏa thuận được, tranh chấp sẽ được xử lý theo quy định của pháp luật.  
Đối với những giải thường không có người trúng thưởng, Công ty TNHH Thương Mại Xuất Nhập Khẩu Fani phải có trách nhiệm trích nộp bằng tiền mặt 50% giá trị đã công bố của giải thưởng đó vào Ngân sách nhà nước theo quy định pháp luật.   

`;

export default function RulesPage() {
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
                    <Link href="/">
                      <Home className="w-5 h-5 text-white" />
                    </Link>
                    <span className="font-bold text-[10px] uppercase bg-black/20 px-2 py-1 rounded">THỂ LỆ CHƯƠNG TRÌNH</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded"><MoreHorizontal size={20}/></button>
                    <button className="p-1 rounded"><X size={20}/></button>
                </div>
            </header>

            <div className="flex-1 flex flex-col items-center w-full min-h-0 pb-[80px] md:pb-[60px] pt-[10vh] md:pt-[12vh]">

                {/* 1. TITLE PAGE */}
                <div className="shrink-0 flex justify-center mb-4 md:mb-6 px-4 z-10">
                    <h1
                        className="shopee-extrabold text-center text-white uppercase font-black leading-tight tracking-wide
                            text-[20px] [-webkit-text-stroke:6px_#701318]
                            md:text-[42px] md:[-webkit-text-stroke:10px_#701318]
                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        style={{paintOrder: 'stroke fill'}}
                    >
                        THỂ LỆ CHƯƠNG TRÌNH
                    </h1>
                </div>

                <div className="flex-1 w-full max-w-[1200px] px-4 overflow-hidden flex flex-col relative z-10 text-black">

                    <div className="bg-white w-full h-full rounded-3xl md:rounded-3xl shadow-2xl overflow-y-auto p-5 md:p-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

                        <article className="shopee-regular prose prose-sm
                            prose-ul:list-disc prose-ul:pl-5
                            prose-li:my-1
                            md:prose-base prose-red max-w-none prose-headings:uppercase prose-headings:font-bold prose-a:text-blue-600 prose-table:text-sm">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    ul: ({node, ...props}) => (
                                        <ul className="list-disc pl-6 my-4 space-y-2 text-black" {...props} />
                                    ),
                                    ol: ({node, ...props}) => (
                                        <ol className="list-decimal pl-6 my-4 space-y-2 text-black" {...props} />
                                    ),
                                    li: ({node, ...props}) => (
                                        <li className="leading-relaxed" {...props} />
                                    ),
                                    table: ({node, ...props}) => (
                                        <div className="overflow-x-auto my-4 border border-black shadow-sm">
                                            <table className="w-full text-left border-collapse min-w-[600px] border border-black" {...props} />
                                        </div>
                                    ),
                                    thead: ({node, ...props}) => (
                                        <thead className="bg-gray-100 text-black uppercase text-xs" {...props} />
                                    ),
                                    th: ({node, ...props}) => (
                                        <th className="px-4 py-3 font-bold border border-black" {...props} />
                                    ),
                                    td: ({node, ...props}) => {
                                        return <td className="px-4 py-3 border border-black text-[#1a1a1a]" {...props} />;
                                    }
                                }}
                            >
                                {RULES_CONTENT}
                            </ReactMarkdown>
                        </article>

                        <div className="h-10"></div>

                    </div>
                </div>

            </div>

            {/* NAVBAR */}
            <BottomNavbar hideDecor={true} />

        </div>
    );
}
