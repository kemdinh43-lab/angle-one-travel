# Angel One Travel - Moodboard Interface Design

Một ứng dụng web du lịch & lữ hành hiện đại, sang trọng dành cho **Angel One Travel Đà Nẵng**, tối ưu hóa giao diện editorial moodboard và chuẩn bị sẵn sàng 100% để triển khai (deploy) lên **Vercel**.

![Angel One Travel Banner](https://images.unsplash.com/photo-1558002890-c0b30998d1e6?w=1200&h=630&fit=crop)

---

## 🚀 Tính Năng & Tối Ưu Nổi Bật

1. **Giao diện Moodboard & Editorial Đẳng Cấp**:
   - Sử dụng bảng màu thiên nhiên tinh tế (#43563A Olive, #FAF9F5 Warm Cream, #DDE3D6 Soft Sage).
   - Typography chuẩn font Google Fonts (`Manrope` & `Be Vietnam Pro`).
   - Thiết kế chuẩn responsive trên Mobile, Tablet, Desktop với thanh điều hướng sticky thông minh.

2. **Tính Năng Tương Tác Trực Tiếp (Interactive Features)**:
   - **Modal Nhận Báo Giá / Đặt Tour (`QuoteModal`)**: Form đặt tour & nhận báo giá theo thời gian thực với phản hồi tức thì.
   - **Modal Thiết Kế Tour Riêng (`CustomBuilderModal`)**: Trình thiết kế hành trình 3 bước (Chọn điểm đến -> Thời gian & Phong cách -> Thông tin liên hệ).
   - **Modal Chi Tiết Tour (`TourDetailModal`)**: Lịch trình theo từng ngày, danh mục dịch vụ bao gồm, điểm nổi bật và nút đặt tour nhanh.
   - **Bộ Lọc Điểm Đến Tương Tác (`Destinations`)**: Phân loại theo Thành phố, Văn hóa, Biển, Thiên nhiên.

3. **Tối Ưu Chuẩn Vercel Deployment**:
   - Thêm file `vercel.json` định tuyến SPA (Single Page Application) không bị lỗi 404 khi refresh trang.
   - Sửa file `package.json` bổ sung direct dependencies (`react`, `react-dom`) để Vercel Build không bị thiếu module.
   - Bổ sung cấu hình `tsconfig.json` chuẩn TypeScript.
   - Tối ưu SEO meta, Open Graph tags và Google Fonts preconnect.

---

## 🛠️ Hướng Dẫn Chạy Cục Bộ (Local Development)

```bash
# 1. Cài đặt thư viện dependencies
npm install

# 2. Chạy Dev Server
npm run dev

# 3. Kiểm tra bản build production
npm run build
```

---

## ☁️ Hướng Dẫn Đẩy Lên Vercel (Deploy to Vercel)

### Cách 1: Kết nối Vercel với GitHub / GitLab (Khuyên dùng)
1. Đẩy code trong thư mục này lên repository trên GitHub của bạn.
2. Đăng nhập vào [Vercel Dashboard](https://vercel.com).
3. Nhấp chọn **"Add New"** -> **"Project"**.
4. Import repository GitHub vừa tạo.
5. Vercel sẽ tự động nhận diện Vite project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Nhấn **Deploy**. Chỉ sau 30 giây, website của bạn sẽ hoạt động trực tuyến với SSL/HTTPS miễn phí!

### Cách 2: Deploy bằng Vercel CLI
```bash
# Cài đặt Vercel CLI (nếu chưa có)
npm install -g vercel

# Đăng nhập và deploy trực tiếp từ terminal
vercel
```

---

## 📁 Cấu Trúc Thư Mục Project

```
moodboard-interface-design/
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
├── vite.config.ts
└── src/
    ├── app/
    │   └── App.tsx
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── NeedPicker.tsx
    │   ├── Packages.tsx
    │   ├── Destinations.tsx
    │   ├── CustomTour.tsx
    │   ├── Services.tsx
    │   ├── Corporate.tsx
    │   ├── WhyUs.tsx
    │   ├── Blog.tsx
    │   ├── CtaSection.tsx
    │   ├── Footer.tsx
    │   ├── MobileBar.tsx
    │   ├── QuoteModal.tsx
    │   ├── TourDetailModal.tsx
    │   └── CustomBuilderModal.tsx
    ├── data/
    │   └── travelData.ts
    ├── types/
    │   └── travel.ts
    └── styles/
        └── index.css
```

---
*Phát triển & Tối ưu bởi Antigravity AI Team.*