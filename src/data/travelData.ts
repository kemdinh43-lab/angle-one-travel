import { Tour, Destination, ServiceItem, BlogPost } from "../types/travel";

const u = (id: string, w = 900, h = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const IMAGES = {
  hero: u("1558002890-c0b30998d1e6", 1800, 950),
  danang: u("1720777366540-ca547cbddfa1"),
  hoian: u("1574614366831-900f959788c9"),
  hoianB: u("1580666619455-20e015edb501"),
  beach: u("1610610822995-752bc72117dd"),
  beachP: u("1588513340145-25887e90a1c8"),
  hue: u("1705823637026-92c0ef6d6222"),
  train: u("1557770401-dabe8321c0c5"),
  coastal: u("1767423656732-ca909689612b"),
  bana: u("1583417319070-4a69db38a482"),
  phuquoc: u("1540555700478-4be289fbecef"),
  sapa: u("1565689157256-424a7375267b"),
  thailand: u("1508009603885-50cf7c579365"),
  korea: u("1538485399081-7191377e8241"),
  japan: u("1493976040374-85c8e12f0c0e"),
  singapore: u("1525625293386-3f8f99389edd"),
  europe: u("1467269204594-9661b134dd2b"),
};

export const TOURS: Tour[] = [
  // 🇻🇳 DOMESTIC TOURS (TOUR TRONG NƯỚC)
  {
    id: "tour-da-nang-hoi-an",
    name: "Đà Nẵng – Phố Cổ Hội An",
    days: "2N1Đ",
    type: "Tour gia đình",
    category: "domestic",
    location: "Hội An",
    img: IMAGES.hoianB,
    featured: true,
    price: "1.890.000đ / khách",
    description: "Hành trình di sản văn hóa ấn tượng đưa bạn ghé thăm Phố cổ Hội An rực rỡ đèn lồng, thưởng thức ẩm thực đặc sắc và thư giãn tại bãi biển Mỹ Khê.",
    highlights: [
      "Tham quan Phố cổ Hội An đêm đèn lồng",
      "Thả hoa đăng trên sông Hoài mộng mơ",
      "Thưởng thức Cao Lầu, Mì Quảng chuẩn vị",
      "Check-in Bán đảo Sơn Trà & Chùa Linh Ứng"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đà Nẵng – Sơn Trà – Hội An đêm đèn lồng",
        desc: "Đón khách tại sân bay/khách sạn Đà Nẵng. Khởi hành đi Bán Đảo Sơn Trà viếng Chùa Linh Ứng. Chiều di chuyển vào Hội An, dạo phố cổ, thưởng thức ẩm thực và đi thuyền thả hoa đăng trên sông Hoài."
      },
      {
        day: "Ngày 2",
        title: "Đà Nẵng – Danh thắng Ngũ Hành Sơn – Mua sắm đặc sản",
        desc: "Tham quan Ngũ Hành Sơn, làng nghề đá mỹ nghệ Non Nước. Thưởng thức bữa trưa đặc sản Đà Nẵng. Mua sắm tại Chợ Hàn trước khi xe đưa đoàn ra sân bay."
      }
    ],
    inclusions: [
      "Xe du lịch đời mới máy lạnh theo lịch trình",
      "Khách sạn 3-4 sao trung tâm (2 khách/phòng)",
      "Các bữa ăn chính theo chương trình",
      "Vé tham quan tất cả các điểm",
      "HDV am hiểu địa phương",
      "Bảo hiểm du lịch mức 50.000.000đ/vụ"
    ]
  },
  {
    id: "tour-da-nang-hue",
    name: "Đà Nẵng – Cố Đô Huế Di Sản",
    days: "2N1Đ",
    type: "Tour văn hóa",
    category: "domestic",
    location: "Thừa Thiên Huế",
    img: IMAGES.hue,
    featured: false,
    price: "2.150.000đ / khách",
    description: "Trải nghiệm dòng lịch sử triều Nguyễn với Đại Nội Huế uy nghiêm, các lăng tẩm thơ mộng và nghe ca Huế dạt dào trên sông Hương.",
    highlights: [
      "Xuyên hầm Hải Vân hoặc đi đèo ngoạn mục",
      "Tham quan Đại Nội & Lăng Khải Định",
      "Viếng Chùa Thiên Mụ cổ kính bên sông Hương",
      "Thưởng thức cơm hến & bánh bèo Huế"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đà Nẵng – Đèo Hải Vân – Cố đô Huế",
        desc: "Đón khách tại Đà Nẵng khởi hành đi Huế. Ngắm vịnh Lăng Cô. Đến Huế tham quan Đại Nội (Hoàng Thành), Lăng Khải Định. Tối nghe ca Huế trên sông Hương."
      },
      {
        day: "Ngày 2",
        title: "Chùa Thiên Mụ – Chợ Đông Ba – Đà Nẵng",
        desc: "Viếng Chùa Thiên Mụ, dạo chợ Đông Ba mua đặc sản mắm rò, trà cung đình. Trở về Đà Nẵng kết thúc hành trình."
      }
    ],
    inclusions: [
      "Xe đưa đón trọn gói",
      "Vé tham quan Đại Nội, Lăng tẩm",
      "Thuyền nghe ca Huế sông Hương",
      "Bữa ăn đậm vị Cung đình & dân dã"
    ]
  },
  {
    id: "tour-quang-binh",
    name: "Đà Nẵng – Quảng Bình Hang Động",
    days: "3N2Đ",
    type: "Tour thiên nhiên",
    category: "domestic",
    location: "Quảng Bình",
    img: IMAGES.coastal,
    featured: false,
    price: "3.450.000đ / khách",
    description: "Khám phá Vương quốc hang động Phong Nha – Kẻ Bàng, trải nghiệm Động Thiên Đường hùng vĩ và bãi biển Nhật Lệ.",
    highlights: [
      "Chinh phục Động Thiên Đường - hoàng cung trong lòng đất",
      "Đi thuyền trên sông Son vào Động Phong Nha",
      "Thưởng thức hải sản Quảng Bình tươi ngon",
      "Dâng hương Nghĩa trang Liệt sĩ Trường Sơn"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đà Nẵng – Quảng Trị – Quảng Bình",
        desc: "Khởi hành dọc quốc lộ 1A qua vùng đất anh hùng Quảng Trị. Nhận phòng khách sạn tại Đồng Hới."
      },
      {
        day: "Ngày 2",
        title: "Động Thiên Đường – Động Phong Nha",
        desc: "Khám phá Động Thiên Đường kỳ vĩ với hệ thống thạch nhủ triệu năm. Chiều xuôi thuyền sông Son vào Động Phong Nha."
      },
      {
        day: "Ngày 3",
        title: "Vũng Chùa – Trở về Đà Nẵng",
        desc: "Viếng mộ Đại tướng Võ Nguyên Giáp tại Vũng Chùa - Đảo Yến, khởi hành về lại Đà Nẵng."
      }
    ],
    inclusions: [
      "Xe du lịch chất lượng cao",
      "Khách sạn 3 sao Đồng Hới",
      "Vé xe điện & vé thuyền Phong Nha",
      "HDV suốt tuyến"
    ]
  },
  {
    id: "tour-quy-nhon",
    name: "Đà Nẵng – Quy Nhơn Biển Xanh",
    days: "2N1Đ",
    type: "Tour biển",
    category: "domestic",
    location: "Quy Nhơn",
    img: IMAGES.beachP,
    featured: false,
    price: "2.650.000đ / khách",
    description: "Tận hưởng thiên đường biển đảo Kỳ Co – Eo Gió xinh đẹp, check-in con đường giữa biển và tháp Chăm cổ kính.",
    highlights: [
      "Cano siêu tốc ra Đảo Kỳ Co ngắm san hô",
      "Ngắm hoàng hôn đẹp nhất Việt Nam tại Eo Gió",
      "Check-in Tháp Đôi & Tịnh Xá Ngọc Hòa",
      "Thưởng thức hải sản bún chả cá Quy Nhơn"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đà Nẵng – Quy Nhơn – Eo Gió – Kỳ Co",
        desc: "Xe đưa quý khách đi Quy Nhơn. Đi cano ra đảo Kỳ Co lặn ngắm san hô. Chiều dạo bước Eo Gió ngắm cảnh biển hùng vĩ."
      },
      {
        day: "Ngày 2",
        title: "Khu du lịch Ghềnh Ráng – Tháp Đôi – Đà Nẵng",
        desc: "Viếng mộ thi sĩ Hàn Mặc Tử tại Ghềnh Ráng Tiên Sa, tham quan Tháp Đôi. Khởi hành trở về Đà Nẵng."
      }
    ],
    inclusions: [
      "Cano rạn san hô Kỳ Co",
      "Xe máy lạnh đời mới",
      "Bữa trưa hải sản tươi sống",
      "Vé tham quan trọn gói"
    ]
  },
  {
    id: "tour-phu-quoc",
    name: "Thiên Đường Biển Đảo Phú Quốc",
    days: "3N2Đ",
    type: "Tour biển",
    category: "domestic",
    location: "Phú Quốc",
    img: IMAGES.phuquoc,
    featured: true,
    price: "4.890.000đ / khách",
    description: "Khám phá ngọc đảo Phú Quốc với bãi Sao cát trắng mịn, trải nghiệm lặn ngắm san hô 4 đảo và vui chơi VinWonders.",
    highlights: [
      "Tour cano 4 đảo & lặn ngắm san hô tự nhiên",
      "Check-in Thị trấn Hoàng Hôn & Cầu Hôn Kiss Bridge",
      "Vui chơi VinWonders & Safari Phú Quốc",
      "Thưởng thức gỏi cá trích đặc sản đảo ngọc"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Phú Quốc – Sunset Sanato – Thị trấn Hoàng Hôn",
        desc: "Đón khách tại sân bay Phú Quốc. Thưởng thức cà phê ngắm hoàng hôn Sunset Sanato. Tối dạo thị trấn Hoàng Hôn."
      },
      {
        day: "Ngày 2",
        title: "Cano lặn ngắm san hô 4 Đảo – Bãi Sao",
        desc: "Trải nghiệm cano tham quan Hòn Mây Rút, Hòn Móng Tay, Hòn Gầm Ghì. Lặn ngắm san hô và dùng bữa trưa trên đảo."
      },
      {
        day: "Ngày 3",
        title: "Chợ Đêm Phú Quốc – Mua sắm hồ tiêu, ngọc trai – Sân bay",
        desc: "Tham quan cơ sở ngọc trai, nhà thùng nước mắm. Mua sắm quà lưu niệm trước khi xe đưa đoàn ra sân bay."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi + Khách sạn 4 sao bãi biển",
      "Tour cano 4 đảo trọn gói",
      "Các bữa ăn hải sản đặc sản",
      "Bảo hiểm du lịch 50.000.000đ"
    ]
  },
  {
    id: "tour-sapa",
    name: "Sapa – Chinh Phục Đỉnh Fansipan",
    days: "3N2Đ",
    type: "Tour núi rừng",
    category: "domestic",
    location: "Sapa",
    img: IMAGES.sapa,
    featured: false,
    price: "3.990.000đ / khách",
    description: "Hành trình mây vờn sương phủ tại thị trấn Sapa, đi cáp treo chinh phục Nóc nhà Đông Dương Fansipan cao 3.143m.",
    highlights: [
      "Cáp treo Fansipan ngắm thung lũng Mường Hoa",
      "Check-in Bản Cát Cát của người H'Mông",
      "Dạo Chợ tình Sapa & Nhà thờ đá cổ",
      "Thưởng thức lẩu thắng cố & cá hồi Sapa"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Hà Nội/Đà Nẵng – Sapa – Bản Cát Cát",
        desc: "Xe giường nằm VIP đưa đoàn lên Sapa. Thăm bản Cát Cát tìm hiểu văn hóa người H'Mông, chụp ảnh guồng nước."
      },
      {
        day: "Ngày 2",
        title: "Chinh phục Fansipan – Thung lũng Mường Hoa",
        desc: "Đi cáp treo lên đỉnh Fansipan 3.143m. Chiều tham quan thung lũng hoa hồng và cầu kính Rồng Mây."
      },
      {
        day: "Ngày 3",
        title: "Núi Hàm Rồng – Chợ Sapa – Trở về",
        desc: "Leo núi Hàm Rồng ngắm toàn cảnh thị trấn Sapa trong mây. Mua sắm rau mầm, thịt trâu gác bếp trước khi về."
      }
    ],
    inclusions: [
      "Xe giường nằm chất lượng cao",
      "Khách sạn 3-4 sao trung tâm Sapa",
      "Vé cáp treo Fansipan khứ hồi",
      "HDV chuyên nghiệp địa phương"
    ]
  },

  // ✈️ INTERNATIONAL TOURS (TOUR NƯỚC NGOÀI)
  {
    id: "tour-thailand",
    name: "Thái Lan: Bangkok – Pattaya 5N4Đ",
    days: "5N4Đ",
    type: "Tour quốc tế",
    category: "international",
    location: "Thái Lan",
    img: IMAGES.thailand,
    featured: true,
    price: "6.990.000đ / khách",
    description: "Hành trình Xứ sở Chùa Vàng sôi động khám phá thủ đô Bangkok sầm uất, biển Pattaya quyến rũ và xem Alcazar Cabaret Show.",
    highlights: [
      "Dạo thuyền trên sông Chao Phraya linh thiêng",
      "Viếng Chùa Phật Vàng Wat Traimit 5.5 tấn",
      "Đảo San Ho Coral Island Pattaya xanh trong",
      "Thưởng thức Buffet 86 tầng Baiyoke Sky"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đà Nẵng / TP.HCM – Bangkok – Pattaya",
        desc: "Bay đến Bangkok. Xe đưa đoàn đi Pattaya. Thưởng thức bữa tối BBQ hải sản."
      },
      {
        day: "Ngày 2",
        title: "Đảo Coral – Trân Bảo Phật Sơn – Pattaya Show",
        desc: "Cano ra Đảo Coral tắm biển. Chiều thăm Trân Bảo Phật Sơn khắc vàng vào vách núi. Tối thưởng thức show diễn Alcazar."
      },
      {
        day: "Ngày 3",
        title: "Pattaya – Trung tâm Y học Chợ Nổi – Bangkok",
        desc: "Trở về Bangkok. Thăm Chợ nổi Damnoen Saduak và Trung tâm nghiên cứu Rắn độc hoàng gia."
      },
      {
        day: "Ngày 4",
        title: "Wat Arun – Baiyoke Sky – Shopping IconSiam",
        desc: "Check-in Chùa Bình Minh Wat Arun. Dùng buffet 86 tầng Baiyoke Sky và tự do mua sắm tại IconSiam / Central World."
      },
      {
        day: "Ngày 5",
        title: "Chùa Phật Vàng – Sân bay Bangkok – Việt Nam",
        desc: "Viếng Chùa Phật Vàng Wat Traimit. Xe đưa đoàn ra sân bay bay về Việt Nam."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi + 20kg hành lý ký gửi",
      "Khách sạn 4 sao quốc tế trọn gói",
      "Vé Baiyoke Sky & Alcazar Show",
      "Trưởng đoàn Việt Nam & HDV Thái Lan"
    ]
  },
  {
    id: "tour-korea",
    name: "Hàn Quốc: Seoul – Nami – Everland 5N4Đ",
    days: "5N4Đ",
    type: "Tour quốc tế",
    category: "international",
    location: "Hàn Quốc",
    img: IMAGES.korea,
    featured: true,
    price: "13.990.000đ / khách",
    description: "Khám phá thủ đô Seoul hiện đại, đảo Nami lãng mạn khung cảnh mùa thu/tuyết trắng và công viên giải trí Everland hàng đầu châu Á.",
    highlights: [
      "Check-in Đảo Nami lãng mạn theo phim Bản Tình Ca Mùa Đông",
      "Vui chơi thả ga tại Công viên Everland top 10 thế giới",
      "Tham quan Cung điện Gyeongbokgung khoác áo Hanbok",
      "Thưởng thức Lẩu nấm, Gà hầm sâm, Thịt nướng Hàn Quốc"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam – Bay đêm đến Seoul",
        desc: "Đoàn tập trung tại sân bay làm thủ tục chuyến bay đêm đến Incheon Seoul."
      },
      {
        day: "Ngày 2",
        title: "Incheon – Đảo Nami – Tháp N Seoul Tower",
        desc: "Đến Hàn Quốc. Tham quan Đảo Nami mùa lá đỏ/tuyết rơi. Chiều ngắm toàn cảnh Seoul từ tháp N Seoul Tower."
      },
      {
        day: "Ngày 3",
        title: "Công viên Everland – Trải nghiệm làm Kimchi & mặc Hanbok",
        desc: "Vui chơi cả ngày tại Everland. Học làm Kimchi chuẩn vị và chụp ảnh lưu niệm trong trang phục Hanbok truyền thống."
      },
      {
        day: "Ngày 4",
        title: "Cung điện Gyeongbok – Nhà Xanh – Shopping Myeongdong",
        desc: "Viếng Cung điện Hoàng Gia Gyeongbokgung, chụp ảnh ngoài Nhà Xanh Phủ Tổng Thống. Tối tự do mua sắm tại Myeongdong."
      },
      {
        day: "Ngày 5",
        title: "Siêu thị Miễn Thuế – Sân bay Incheon – Việt Nam",
        desc: "Mua sắm nhân sâm, mỹ phẩm chính hãng trước khi bay về Việt Nam."
      }
    ],
    inclusions: [
      "Visa nhập cảnh Hàn Quốc",
      "Vé máy bay khứ hồi Vietnam Airlines / Korean Air",
      "Khách sạn 4 sao Seoul",
      "Tất cả vé tham quan & bữa ăn theo chương trình"
    ]
  },
  {
    id: "tour-japan",
    name: "Nhật Bản: Tokyo – Fuji – Kyoto – Osaka 6N5Đ",
    days: "6N5Đ",
    type: "Tour cao cấp",
    category: "international",
    location: "Nhật Bản",
    img: IMAGES.japan,
    featured: false,
    price: "26.900.000đ / khách",
    description: "Cung đường vàng Nhật Bản ngắm núi Phú Sĩ kỳ vĩ, trải nghiệm tắm suối khoáng Onsen và khám phá Cố đô Kyoto cổ kính.",
    highlights: [
      "Check-in Trạm số 5 Núi Phú Sĩ & Ngôi làng cổ Oshino Hakkai",
      "Tắm suối khoáng nóng Onsen truyền thống Nhật Bản",
      "Trải nghiệm Tàu siêu tốc Shinkansen 300km/h",
      "Viếng Chùa Dát Vàng Kinkakuji & Cổng Torii Fushimi Inari"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam – Tokyo",
        desc: "Khởi hành bay thẳng đến sân bay Narita / Haneda Tokyo. Nhận phòng khách sạn nghỉ ngơi."
      },
      {
        day: "Ngày 2",
        title: "Tokyo City Tour – Chùa Asakusa – Tháp Skytree",
        desc: "Viếng chùa cổ nhất Tokyo Asakusa Kannon. Chụp hình tháp Tokyo Skytree. Mua sắm tại quận điện tử Akihabara."
      },
      {
        day: "Ngày 3",
        title: "Tokyo – Núi Phú Sĩ – Tắm Onsen Hakone",
        desc: "Tham quan Núi Phú Sĩ, làng cổ Oshino Hakkai. Tối trải nghiệm tắm suối khoáng nóng Onsen và thưởng thức bữa tối Kaiseki."
      },
      {
        day: "Ngày 4",
        title: "Tàu Shinkansen – Cố Đô Kyoto – Chùa Dát Vàng",
        desc: "Đi tàu siêu tốc Shinkansen đến Kyoto. Viếng Chùa Kinkakuji dát vàng và đền ngàn cổng Fushimi Inari."
      },
      {
        day: "Ngày 5",
        title: "Kyoto – Lâu đài Osaka – Phố Dotonbori",
        desc: "Tham quan Lâu đài Osaka nguy nga. Thưởng thức bò Kobe và tự do mua sắm tại phố Shinsaibashi."
      },
      {
        day: "Ngày 6",
        title: "Osaka – Sân bay Kansai – Việt Nam",
        desc: "Xe đưa đoàn ra sân bay Kansai bay về Việt Nam."
      }
    ],
    inclusions: [
      "Visa nhập cảnh Nhật Bản",
      "Trải nghiệm Tàu Shinkansen",
      "Khách sạn 4 sao & Đêm nghỉ Onsen",
      "Vé máy bay khứ hồi hàng không quốc gia"
    ]
  },
  {
    id: "tour-singapore",
    name: "Combo Singapore – Malaysia 5N4Đ",
    days: "5N4Đ",
    type: "Tour liên tuyến",
    category: "international",
    location: "Singapore",
    img: IMAGES.singapore,
    featured: false,
    price: "10.490.000đ / khách",
    description: "Hành trình liên tuyến Đảo quốc Sư Tử Singapore hiện đại kết hợp cao nguyên Genting & tháp đôi Petronas Malaysia.",
    highlights: [
      "Check-in Siêu cây Gardens by the Bay & Jewel Changi",
      "Chụp ảnh Tháp Đôi Petronas Twin Towers Kuala Lumpur",
      "Đi cáp treo lên Cao Nguyên Genting Casino",
      "Thưởng thức Cua sốt ớt & Cơm gà Hải Nam"
    ],
    itinerary: [
      {
        day: "Ngày 1",
        title: "Việt Nam – Singapore – Công viên Sư Tử Biển",
        desc: "Bay đến Singapore. Chụp ảnh Merlion Park, Tòa nhà Quốc Hội. Tối xem show nước Marina Bay Sands."
      },
      {
        day: "Ngày 2",
        title: "Gardens by the Bay – Đảo Sentosa – Malaysia",
        desc: "Khám phá Gardens by the Bay, đảo Sentosa. Chiều di chuyển qua cửa khẩu nhập cảnh Malaysia."
      },
      {
        day: "Ngày 3",
        title: "Malacca – Động Batu – Kuala Lumpur",
        desc: "Dạo phố cổ Malacca di sản UNESCO. Thăm Động Batu 272 bậc thang sặc sỡ."
      },
      {
        day: "Ngày 4",
        title: "Cao Nguyên Genting – Tháp Đôi Petronas",
        desc: "Đi cáp treo lên Genting Highlands vui chơi Casino. Tối chụp ảnh Tháp Đôi Petronas lung linh."
      },
      {
        day: "Ngày 5",
        title: "Kuala Lumpur City – Sân bay – Việt Nam",
        desc: "Mua sắm đặc sản Socola Malaysia trước khi ra sân bay về nước."
      }
    ],
    inclusions: [
      "Vé máy bay khứ hồi trọn gói",
      "Khách sạn 3-4 sao trung tâm",
      "Cáp treo Genting & Vé tham quan",
      "HDV tiếng Việt theo đoàn"
    ]
  },
  {
    id: "tour-europe",
    name: "Châu Âu: Pháp – Thụy Sĩ – Ý 9N8Đ",
    days: "9N8Đ",
    type: "Tour cao cấp",
    category: "international",
    location: "Châu Âu",
    img: IMAGES.europe,
    featured: false,
    price: "59.900.000đ / khách",
    description: "Hành trình lãng mạn qua Kinh đô ánh sáng Paris, đỉnh núi tuyết Thụy Sĩ và thành phố kênh đào Venice nước Ý.",
    highlights: [
      "Dạo thuyền sông Seine & Check-in Tháp Eiffel Paris",
      "Ngắm làng cổ Thụy Sĩ Lucerne & Hồ Geneva",
      "Đi thuyền Gondola trên kênh đào Venice mộng mơ",
      "Tham quan Đấu trường La Mã Colosseum Rome"
    ],
    itinerary: [
      {
        day: "Ngày 1-2",
        title: "Việt Nam – Khởi hành bay đến Paris (Pháp)",
        desc: "Bay đến Paris. Dạo thuyền sông Seine ngắm nhà thờ Đức Bà, bảo tàng Louvre."
      },
      {
        day: "Ngày 3-4",
        title: "Paris – Thụy Sĩ – Làng cổ Lucerne",
        desc: "Di chuyển đến Thụy Sĩ. Tham quan cầu gỗ Chapel, tượng Sư tử đá Lucerne."
      },
      {
        day: "Ngày 5-6",
        title: "Thụy Sĩ – Milan – Thành phố sông nước Venice (Ý)",
        desc: "Qua Ý thăm kinh đô thời trang Milan, trải nghiệm thuyền Gondola Venice."
      },
      {
        day: "Ngày 7-9",
        title: "Florence – Rome – Tòa thánh Vatican – Việt Nam",
        desc: "Thăm tháp nghiêng Pisa, Đấu trường Colosseum Rome, Vatican trước khi về nước."
      }
    ],
    inclusions: [
      "Visa Schengen Châu Âu trọn gói",
      "Vé máy bay khứ hồi 5 sao",
      "Khách sạn 4 sao chuẩn Châu Âu",
      "HDV kinh nghiệm chuyên tuyến Châu Âu"
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "da-nang",
    name: "Đà Nẵng",
    tag: "Thành phố",
    img: IMAGES.danang,
    description: "Thành phố đáng sống nhất Việt Nam với những cây cầu biểu tượng, bãi biển Mỹ Khê tuyệt đẹp và Bà Nà Hills mộng mơ.",
    bestTime: "Tháng 2 - Tháng 8",
    highlights: ["Cầu Rồng phun lửa", "Biển Mỹ Khê", "Bà Nà Hills", "Sơn Trà"]
  },
  {
    id: "hoi-an",
    name: "Hội An",
    tag: "Văn hóa",
    img: IMAGES.hoian,
    description: "Đô thị cổ trầm mặc bên dòng sông Hoài với kiến trúc đèn lồng rực rỡ và nền ẩm thực phong phú bậc nhất.",
    bestTime: "Tháng 1 - Tháng 7",
    highlights: ["Chùa Cầu", "Thuyền hoa đăng", "Làng rau Trà Quế", "Show Ký Ức Hội An"]
  },
  {
    id: "hue",
    name: "Cố Đô Huế",
    tag: "Văn hóa",
    img: IMAGES.hue,
    description: "Vùng đất di sản triều Nguyễn uy nghiêm, dịu dàng với sông Hương, núi Nựu và ẩm thực cung đình tinh tế.",
    bestTime: "Tháng 1 - Tháng 4",
    highlights: ["Đại Nội Huế", "Lăng Khải Định", "Sông Hương Ca Huế", "Chùa Thiên Mụ"]
  },
  {
    id: "quang-binh",
    name: "Quảng Bình",
    tag: "Thiên nhiên",
    img: IMAGES.coastal,
    description: "Vương quốc hang động thế giới với Động Phong Nha, Động Thiên Đường và những dòng sông xanh ngọc bích.",
    bestTime: "Tháng 4 - Tháng 8",
    highlights: ["Phong Nha Kẻ Bàng", "Động Thiên Đường", "Sông Chày - Hang Tối", "Biển Nhật Lệ"]
  },
  {
    id: "my-khe",
    name: "Mỹ Khê Beach",
    tag: "Biển",
    img: IMAGES.beach,
    description: "Top bãi biển quyến rũ nhất hành tinh do Forbes bình chọn với cát trắng mịn, nước trong xanh và dịch vụ hiện đại.",
    bestTime: "Tháng 4 - Tháng 9",
    highlights: ["Lướt sóng", "Dù bay trên biển", "Hải sản tươi sống", "Bình minh trên biển"]
  },
  {
    id: "quy-nhon",
    name: "Quy Nhơn",
    tag: "Biển",
    img: IMAGES.beachP,
    description: "Thiên đường biển đảo hoang sơ với Kỳ Co, Eo Gió và những tháp Chăm cổ kính trầm mặc ngàn năm.",
    bestTime: "Tháng 3 - Tháng 9",
    highlights: ["Bãi biển Kỳ Co", "Eo Gió", "Ghềnh Ráng Tiên Sa", "Tháp Đôi"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "transport",
    iconName: "Car",
    title: "Vận chuyển du lịch",
    desc: "Xe đưa đón sân bay, xe hợp đồng 4 - 45 chỗ đời mới, lái xe an toàn, lịch sự am hiểu địa phương.",
    details: ["Đón tiễn sân bay 24/7", "Xe tour đi tỉnh & liên tuyến", "Xe VIP Limousine cao cấp", "Tài xế chuyên nghiệp, đúng giờ"]
  },
  {
    id: "hotel",
    iconName: "Hotel",
    title: "Booking khách sạn & Resort",
    desc: "Đối tác trực tiếp của hơn 300+ khách sạn, resort 3-5 sao tại Đà Nẵng, Hội An, Huế với giá ưu đãi tốt nhất.",
    details: ["Cam kết giá tốt hơn đặt trực tiếp", "Hỗ trợ nâng hạng phòng miễn phí", "Combo phòng + vé vui chơi", "Xử lý yêu cầu đặc biệt nhanh chóng"]
  },
  {
    id: "ticket",
    iconName: "Ticket",
    title: "Vé tham quan & Trải nghiệm",
    desc: "Đại lý chính thức vé Bà Nà Hills, Ký Ức Hội An, VinWonders, Núi Thần Tài với lối đi ưu tiên không chờ đợi.",
    details: ["Vé QR Code quét vào cổng ngay", "Chiết khấu cao cho đoàn đông", "Giao vé tận nơi hoặc gửi Zalo", "Miễn phí hủy/đổi lịch theo điều kiện"]
  },
  {
    id: "guide",
    iconName: "UserCheck",
    title: "Hướng dẫn viên du lịch",
    desc: "Đội ngũ HDV tiếng Việt, tiếng Anh, Hàn, Trung nhiệt tình, am hiểu văn hóa và chăm sóc đoàn chu đáo.",
    details: ["HDV có thẻ hành nghề chuẩn", "Nhiệt tình, vui vẻ, chụp ảnh đẹp", "Hiểu rõ lịch sử & văn hóa vùng miền", "Xử lý tình huống phát sinh linh hoạt"]
  },
  {
    id: "teambuilding",
    iconName: "Coffee",
    title: "Team Building bãi biển",
    desc: "Thiết kế kịch bản team building độc đáo, sôi động kết nối tinh thần đồng đội cho doanh nghiệp trên biển Mỹ Khê.",
    details: ["MC & Đội ngũ nhân sự năng nổ", "Đồ game chất lượng cao", "Âm thanh & sân khấu chuyên nghiệp", "Quay phim & chụp hình flycam"]
  },
  {
    id: "mice",
    iconName: "Building2",
    title: "Gala Dinner & MICE",
    desc: "Tổ chức hội thảo, hội nghị doanh nghiệp, đêm Gala Dinner hoành tráng kết hợp du lịch nghỉ dưỡng trọn gói.",
    details: ["Lên ý tưởng concept riêng", "Setup hệ thống âm thanh ánh sáng", "Tiệc cỗ ẩm thực phong phú", "In ấn backdrop & quà tặng doanh nghiệp"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Kinh nghiệm du lịch Đà Nẵng – Hội An 2 ngày 1 đêm tối ưu chi phí",
    tag: "Cẩm nang",
    time: "5 phút đọc",
    img: IMAGES.hoianB,
    snippet: "Gợi ý lịch trình di chuyển, ăn uống và tham quan chi tiết nhất cho chuyến đi 2 ngày 1 đêm vừa tiết kiệm vừa trải nghiệm trọn vẹn."
  },
  {
    id: "post-2",
    title: "Top 7 địa điểm check-in không thể bỏ qua tại Cố Đô Huế",
    tag: "Du lịch",
    time: "4 phút đọc",
    img: IMAGES.hue,
    snippet: "Khám phá vẻ đẹp trầm mặc của Đại Nội, nét kiến trúc độc đáo lăng Khải Định và góc cà phê thơ mộng bên bờ sông Hương."
  },
  {
    id: "post-3",
    title: "Nên thuê xe du lịch riêng hay đặt tour trọn gói khi đi Đà Nẵng?",
    tag: "Tư vấn",
    time: "3 phút đọc",
    img: IMAGES.danang,
    snippet: "So sánh chi tiết ưu nhược điểm giữa việc tự thuê xe tham quan và đặt tour trọn gói để có lựa chọn phù hợp nhất cho đoàn của bạn."
  },
  {
    id: "post-4",
    title: "Bảng tổng hợp chi phí du lịch Miền Trung thực tế mới nhất 2026",
    tag: "Chi phí",
    time: "6 phút đọc",
    img: IMAGES.coastal,
    snippet: "Cập nhật giá vé tham quan, tiền phòng khách sạn, giá thuê xe và chi phí ăn uống thực tế tại Đà Nẵng, Hội An, Huế năm nay."
  }
];
