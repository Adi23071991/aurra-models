export type Language = "en" | "th" | "vi" | "fil";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    nav_portfolio: "Portfolio",
    nav_editorial: "Editorial",
    nav_exclusive: "18+ Exclusive",
    nav_scouting: "Scouting Areas",
    nav_apply: "Apply Now",

    // Hero
    hero_tagline: "Asia's Premier Modelling Agency",
    hero_heading1: "Your Story",
    hero_heading2: "Begins Here.",
    hero_subtitle:
      "We discover authentic talent from Thailand, the Philippines, and Vietnam — and connect them with London, New York, and Paris.",
    hero_cta_primary: "Apply for Casting",
    hero_cta_secondary: "View Portfolio",

    // Portfolio section
    portfolio_label: "Our Talent",
    portfolio_heading1: "A New Generation",
    portfolio_heading2: "of Faces",
    portfolio_note: "Example portraits — your real portfolio starts after your casting.",
    portfolio_cta: "Become Part of Aurra",

    // "We Look Different" section
    different_label: "What Makes Us Different",
    different_heading: "Beauty Has No Standard Size.",
    card_natural_title: "We Want Real.",
    card_natural_desc:
      "We are not looking for a manufactured look. We scout for natural beauty — authentic faces, genuine personality, and the kind of presence that a camera cannot fake. No heavy editing, no unrealistic expectations.",
    card_petite_title: "Height Is Not a Limit.",
    card_petite_desc:
      "Traditional agencies often set rigid height requirements. We don't. Petite and smaller models bring a unique, sought-after aesthetic to editorial, commercial, and intimate content — and we actively seek out that talent. If you have the look, we want to meet you.",
    card_petite_desc2:
      "Our initial casting talk takes only 15–30 minutes — a relaxed, no-pressure conversation to get to know you.",
    card_cta: "Apply — No Matter Your Size",

    // How It Works
    hiw_label: "The Process",
    hiw_heading1: "From First Talk",
    hiw_heading2: "to Professional Shoot",
    hiw_step1_title: "Casting Talk",
    hiw_step1_desc:
      "We invite you to a relaxed personal conversation — just 15 to 30 minutes. No pressure, no expectations. We simply want to get to know you.",
    hiw_step1_label: "15–30 min",
    hiw_step2_title: "Your Profile Card",
    hiw_step2_desc:
      "We create your personal profile card (Kartei) — a private folder that includes an amateur photo series taken by us, plus any of your own favourite private photos you'd like to add. All costs are covered by us. No expenses for you.",
    hiw_step2_label: "No cost for you",
    hiw_step3_title: "Into the Booking System",
    hiw_step3_desc:
      "Your profile card enters our booking database. Potential clients can browse it — and they are always informed upfront that these are amateur and personal photos, not a professional editorial series.",
    hiw_step3_label: "Your card goes live",
    hiw_step4_title: "Professional Photo Series",
    hiw_step4_desc:
      "When a client expresses genuine interest in you, we invite you back for a high-quality professional photo shoot — fully organised and paid for by us. No costs come to you at any stage.",
    hiw_step4_label: "Fully covered",
    hiw_cta: "Start Your Application",

    // Locations
    locations_label: "Where We Scout",
    locations_heading1: "Our Search Area —",
    locations_heading2: "Asia to the World",
    locations_scouting_area: "Scouting Area",
    locations_southeast_asia: "Southeast Asia",
    locations_target_markets: "Target Markets",
    locations_global_reach: "Global Reach",
    locations_active_scouting: "Active Scouting",
    locations_target_market: "Target Market",

    // Editorial / Services
    editorial_label: "For Agencies & Brands",
    editorial_heading1: "Editorial & Commercial",
    editorial_heading2: "Photography",
    editorial_subtitle:
      "Our models are available for runway shows, advertising campaigns, fashion editorials, lookbooks, and brand collaborations — professionally managed and agency-ready.",
    service1_title: "Runway & Fashion",
    service1_desc:
      "Catwalk presentations for local and international fashion weeks. Our models are trained for stage presence and movement.",
    service2_title: "Editorial & Print",
    service2_desc:
      "Magazine covers, editorial spreads, and print campaigns. We work with established and emerging photographers across Asia.",
    service3_title: "Brand & Commercial",
    service3_desc:
      "Product campaigns, social media content, and brand ambassador roles — delivered on time and on-brief.",
    editorial_apply: "Apply as Model",
    editorial_book: "Book a Model",

    // 18+ Exclusive
    exclusive_label: "Adults Only · 18+",
    exclusive_heading1: "Exclusive & Intimate",
    exclusive_heading2: "Content",
    exclusive_desc:
      "A curated selection of our talent is available for tasteful artistic and intimate photography — handled with full professionalism, discretion, and consent. All models are 18+ verified.",
    exclusive_card1_title: "Boudoir",
    exclusive_card1_desc:
      "Elegant, intimate portraiture in a private setting. Artistic and sensual — never explicit. Perfect for premium publications and private collectors.",
    exclusive_card1_note: "Tasteful · Artistic",
    exclusive_card2_title: "Lingerie & Swimwear",
    exclusive_card2_desc:
      "High-quality campaigns for lingerie brands, swimwear labels, and lifestyle publications requiring confident, natural presentation.",
    exclusive_card2_note: "Commercial · Editorial",
    exclusive_card3_title: "Artistic Nude",
    exclusive_card3_desc:
      "Fine-art photography for serious photographers and collectors. Always conducted in a safe, respectful, and fully consensual professional environment.",
    exclusive_card3_note: "Fine Art · Exclusive",
    exclusive_std1_label: "Verified 18+",
    exclusive_std1_sub: "All models age-verified",
    exclusive_std2_label: "Fully Consensual",
    exclusive_std2_sub: "Written agreement always",
    exclusive_std3_label: "Private & Discreet",
    exclusive_std3_sub: "NDA available on request",
    exclusive_std4_label: "Professional",
    exclusive_std4_sub: "Vetted photographers only",
    exclusive_cta_enquire: "Enquire Privately",
    exclusive_cta_apply: "Apply as Model",
    exclusive_disclaimer:
      "All content produced through Aurra Models Exclusive is strictly legal, produced with fully informed adult consent, and complies with applicable laws in all operating jurisdictions. Models must be 18 years or older. Age verification is mandatory.",

    // Founder
    founder_label: "Co-Founder · Asia",
    founder_heading: "Meet Adrian.",
    founder_para1:
      "Adrian is co-founder of Aurra Models and heads the Asia division — scouting and developing talent across Thailand, the Philippines, and Vietnam.",
    founder_para2:
      "Together with his partner Joshua, who represents Aurra in London, New York, and Paris, Adrian builds the bridge between Southeast Asia's most promising faces and the world's top fashion markets.",
    founder_stat1: "Asian Markets",
    founder_stat2: "Global Cities",
    founder_stat3: "Only",
    founder_cta: "Contact Adrian directly",

    // Final CTA
    cta_label: "Ready?",
    cta_heading1: "Your Casting Awaits.",
    cta_heading2: "No Experience Needed.",
    cta_desc:
      "We believe in raw talent and authentic beauty. If you're between 18 and 25 and dreaming of a career in fashion — this is your moment.",
    cta_button: "Apply for Your Casting",
    cta_note: "Free · No commitment · Response within 48 hours",

    // Footer
    footer_tagline:
      "Connecting Asia's brightest talent with the world's most prestigious fashion markets.",
    footer_nav_label: "Navigation",
    footer_nav_portfolio: "Portfolio",
    footer_nav_howitworks: "How It Works",
    footer_nav_locations: "Locations",
    footer_nav_apply: "Apply for Casting",
    footer_locations_label: "Our Locations",
    footer_copyright: "All rights reserved.",
    footer_impressum: "Impressum",
    footer_datenschutz: "Datenschutz",

    // Cookie Banner
    cookie_text: "This website uses cookies. By using it you agree.",
    cookie_more: "More",
    cookie_ok: "OK",
  },

  th: {
    // Navigation
    nav_portfolio: "พอร์ตโฟลิโอ",
    nav_editorial: "บทบรรณาธิการ",
    nav_exclusive: "18+ พิเศษ",
    nav_scouting: "พื้นที่สรรหา",
    nav_apply: "สมัครเลย",

    // Hero
    hero_tagline: "เอเจนซี่นางแบบชั้นนำของเอเชีย",
    hero_heading1: "เรื่องราวของคุณ",
    hero_heading2: "เริ่มต้นที่นี่",
    hero_subtitle:
      "เราค้นพบความสามารถที่แท้จริงจากไทย ฟิลิปปินส์ และเวียดนาม — และเชื่อมต่อพวกเขากับลอนดอน นิวยอร์ก และปารีส",
    hero_cta_primary: "สมัครออดิชั่น",
    hero_cta_secondary: "ดูพอร์ตโฟลิโอ",

    // Portfolio section
    portfolio_label: "นางแบบของเรา",
    portfolio_heading1: "คนรุ่นใหม่",
    portfolio_heading2: "แห่งใบหน้า",
    portfolio_note: "ภาพตัวอย่าง — พอร์ตโฟลิโอจริงของคุณเริ่มหลังออดิชั่น",
    portfolio_cta: "ร่วมเป็นส่วนหนึ่งของ Aurra",

    // "We Look Different" section
    different_label: "สิ่งที่ทำให้เราแตกต่าง",
    different_heading: "ความงามไม่มีขนาดมาตรฐาน",
    card_natural_title: "เราต้องการความเป็นธรรมชาติ",
    card_natural_desc:
      "เราไม่ได้มองหาหน้าตาที่ถูกสร้างขึ้น เราสรรหาความงามตามธรรมชาติ — ใบหน้าที่แท้จริง บุคลิกภาพที่จริงใจ และความมีเสน่ห์ที่กล้องจับภาพได้ ไม่มีการแต่งภาพมาก ไม่มีความคาดหวังที่เป็นไปไม่ได้",
    card_petite_title: "ส่วนสูงไม่ใช่ข้อจำกัด",
    card_petite_desc:
      "เอเจนซี่ทั่วไปมักกำหนดข้อจำกัดด้านส่วนสูงอย่างเข้มงวด แต่เราไม่ทำ นางแบบตัวเล็กและรูปร่างน้อยนำเสนอความสวยงามที่เป็นเอกลักษณ์และเป็นที่ต้องการในงานบรรณาธิการ การค้า และงานส่วนตัว — เราค้นหาความสามารถนั้นอย่างจริงจัง หากคุณมีลุคที่เหมาะสม เราอยากพบคุณ",
    card_petite_desc2:
      "การพูดคุยออดิชั่นครั้งแรกใช้เวลาเพียง 15–30 นาที — การสนทนาที่ผ่อนคลาย ไม่มีแรงกดดัน",
    card_cta: "สมัคร — ไม่ว่าจะรูปร่างใด",

    // How It Works
    hiw_label: "กระบวนการ",
    hiw_heading1: "จากการพูดคุยครั้งแรก",
    hiw_heading2: "สู่การถ่ายภาพมืออาชีพ",
    hiw_step1_title: "การพูดคุยออดิชั่น",
    hiw_step1_desc:
      "เราเชิญคุณมาสนทนาส่วนตัวที่ผ่อนคลาย — เพียง 15 ถึง 30 นาที ไม่มีแรงกดดัน ไม่มีความคาดหวัง เราแค่อยากรู้จักคุณ",
    hiw_step1_label: "15–30 นาที",
    hiw_step2_title: "บัตรโปรไฟล์ของคุณ",
    hiw_step2_desc:
      "เราสร้างบัตรโปรไฟล์ส่วนตัวของคุณ (Kartei) — โฟลเดอร์ส่วนตัวที่มีชุดภาพถ่ายสมัครเล่นที่ถ่ายโดยเรา รวมถึงภาพส่วนตัวที่คุณชื่นชอบที่คุณต้องการเพิ่ม ค่าใช้จ่ายทั้งหมดเป็นของเรา ไม่มีค่าใช้จ่ายสำหรับคุณ",
    hiw_step2_label: "ไม่มีค่าใช้จ่าย",
    hiw_step3_title: "เข้าสู่ระบบจองงาน",
    hiw_step3_desc:
      "บัตรโปรไฟล์ของคุณเข้าสู่ฐานข้อมูลการจองงาน ลูกค้าที่มีศักยภาพสามารถเรียกดูได้ — และพวกเขาจะได้รับแจ้งล่วงหน้าเสมอว่านี่คือภาพสมัครเล่นและส่วนตัว ไม่ใช่ชุดบรรณาธิการมืออาชีพ",
    hiw_step3_label: "บัตรของคุณเผยแพร่แล้ว",
    hiw_step4_title: "ชุดภาพถ่ายมืออาชีพ",
    hiw_step4_desc:
      "เมื่อลูกค้าแสดงความสนใจอย่างแท้จริงในตัวคุณ เราจะเชิญคุณกลับมาสำหรับการถ่ายภาพมืออาชีพคุณภาพสูง — จัดการและจ่ายโดยเราทั้งหมด ไม่มีค่าใช้จ่ายสำหรับคุณในทุกขั้นตอน",
    hiw_step4_label: "ครอบคลุมทั้งหมด",
    hiw_cta: "เริ่มการสมัคร",

    // Locations
    locations_label: "สถานที่สรรหา",
    locations_heading1: "พื้นที่ค้นหาของเรา —",
    locations_heading2: "จากเอเชียสู่โลก",
    locations_scouting_area: "พื้นที่สรรหา",
    locations_southeast_asia: "เอเชียตะวันออกเฉียงใต้",
    locations_target_markets: "ตลาดเป้าหมาย",
    locations_global_reach: "การเข้าถึงทั่วโลก",
    locations_active_scouting: "กำลังสรรหา",
    locations_target_market: "ตลาดเป้าหมาย",

    // Editorial / Services
    editorial_label: "สำหรับเอเจนซี่และแบรนด์",
    editorial_heading1: "บรรณาธิการและการค้า",
    editorial_heading2: "การถ่ายภาพ",
    editorial_subtitle:
      "นางแบบของเราพร้อมสำหรับการแสดงรันเวย์ แคมเปญโฆษณา ภาพบรรณาธิการแฟชั่น ลุคบุ๊ค และความร่วมมือกับแบรนด์ — จัดการอย่างมืออาชีพและพร้อมสำหรับเอเจนซี่",
    service1_title: "รันเวย์และแฟชั่น",
    service1_desc:
      "การแสดงแคทวอล์คสำหรับงานแฟชั่นวีคท้องถิ่นและนานาชาติ นางแบบของเราได้รับการฝึกฝนสำหรับการแสดงบนเวทีและการเคลื่อนไหว",
    service2_title: "บรรณาธิการและสิ่งพิมพ์",
    service2_desc:
      "ปกนิตยสาร งานบรรณาธิการ และแคมเปญสิ่งพิมพ์ เราทำงานร่วมกับช่างภาพที่มีชื่อเสียงและกำลังก้าวขึ้นมาทั่วเอเชีย",
    service3_title: "แบรนด์และการค้า",
    service3_desc:
      "แคมเปญผลิตภัณฑ์ เนื้อหาโซเชียลมีเดีย และบทบาทแบรนด์แอมบาสเดอร์ — ส่งมอบตรงเวลาและตรงกับเป้าหมาย",
    editorial_apply: "สมัครเป็นนางแบบ",
    editorial_book: "จองนางแบบ",

    // 18+ Exclusive
    exclusive_label: "เฉพาะผู้ใหญ่ · 18+",
    exclusive_heading1: "เนื้อหาพิเศษ",
    exclusive_heading2: "และสนิทสนม",
    exclusive_desc:
      "ความสามารถคัดสรรบางส่วนของเราพร้อมสำหรับการถ่ายภาพทางศิลปะและสนิทสนมที่มีรสนิยม — ดำเนินการด้วยความเป็นมืออาชีพ การรักษาความลับ และความยินยอมอย่างเต็มที่ นางแบบทุกคนได้รับการยืนยันอายุ 18 ปีขึ้นไป",
    exclusive_card1_title: "บูดัวร์",
    exclusive_card1_desc:
      "การถ่ายภาพบุคคลที่สง่างามและสนิทสนมในสถานที่ส่วนตัว ศิลปะและเร้าอารมณ์ — ไม่มีเนื้อหาโจ่งแจ้ง เหมาะสำหรับสิ่งพิมพ์พรีเมียมและนักสะสมส่วนตัว",
    exclusive_card1_note: "มีรสนิยม · ทางศิลปะ",
    exclusive_card2_title: "ชุดชั้นในและชุดว่ายน้ำ",
    exclusive_card2_desc:
      "แคมเปญคุณภาพสูงสำหรับแบรนด์ชุดชั้นใน ลेबลชุดว่ายน้ำ และสิ่งพิมพ์ไลฟ์สไตล์ที่ต้องการการนำเสนอที่มั่นใจและเป็นธรรมชาติ",
    exclusive_card2_note: "การค้า · บรรณาธิการ",
    exclusive_card3_title: "ศิลปะนู้ด",
    exclusive_card3_desc:
      "การถ่ายภาพศิลปะชั้นสูงสำหรับช่างภาพและนักสะสมที่จริงจัง ดำเนินการในสภาพแวดล้อมมืออาชีพที่ปลอดภัย เคารพ และยินยอมเต็มที่เสมอ",
    exclusive_card3_note: "ศิลปะชั้นสูง · พิเศษ",
    exclusive_std1_label: "ยืนยันอายุ 18+",
    exclusive_std1_sub: "นางแบบทุกคนยืนยันอายุแล้ว",
    exclusive_std2_label: "ยินยอมเต็มที่",
    exclusive_std2_sub: "มีข้อตกลงเป็นลายลักษณ์อักษรเสมอ",
    exclusive_std3_label: "ส่วนตัวและรักษาความลับ",
    exclusive_std3_sub: "มี NDA ตามคำขอ",
    exclusive_std4_label: "มืออาชีพ",
    exclusive_std4_sub: "ช่างภาพที่ผ่านการตรวจสอบเท่านั้น",
    exclusive_cta_enquire: "สอบถามเป็นการส่วนตัว",
    exclusive_cta_apply: "สมัครเป็นนางแบบ",
    exclusive_disclaimer:
      "เนื้อหาทั้งหมดที่ผลิตผ่าน Aurra Models Exclusive ถูกกฎหมายอย่างเคร่งครัด ผลิตด้วยความยินยอมของผู้ใหญ่ที่ได้รับข้อมูลครบถ้วน และปฏิบัติตามกฎหมายที่บังคับใช้ในทุกเขตอำนาจที่ดำเนินการ นางแบบต้องมีอายุ 18 ปีขึ้นไป การยืนยันอายุเป็นสิ่งบังคับ",

    // Founder
    founder_label: "ผู้ร่วมก่อตั้ง · เอเชีย",
    founder_heading: "พบกับ Adrian",
    founder_para1:
      "Adrian เป็นผู้ร่วมก่อตั้ง Aurra Models และเป็นหัวหน้าแผนกเอเชีย — สรรหาและพัฒนาความสามารถในไทย ฟิลิปปินส์ และเวียดนาม",
    founder_para2:
      "ร่วมกับพาร์ทเนอร์ Joshua ซึ่งเป็นตัวแทน Aurra ในลอนดอน นิวยอร์ก และปารีส Adrian สร้างสะพานเชื่อมระหว่างใบหน้าที่มีแนวโน้มสูงสุดของเอเชียตะวันออกเฉียงใต้กับตลาดแฟชั่นชั้นนำของโลก",
    founder_stat1: "ตลาดในเอเชีย",
    founder_stat2: "เมืองทั่วโลก",
    founder_stat3: "เท่านั้น",
    founder_cta: "ติดต่อ Adrian โดยตรง",

    // Final CTA
    cta_label: "พร้อมแล้ว?",
    cta_heading1: "การออดิชั่นของคุณรอคุณอยู่",
    cta_heading2: "ไม่ต้องมีประสบการณ์",
    cta_desc:
      "เราเชื่อในความสามารถดิบและความงามที่แท้จริง หากคุณอายุระหว่าง 18 ถึง 25 ปีและฝันถึงอาชีพในวงการแฟชั่น — นี่คือโอกาสของคุณ",
    cta_button: "สมัครออดิชั่นของคุณ",
    cta_note: "ฟรี · ไม่มีข้อผูกมัด · ตอบกลับภายใน 48 ชั่วโมง",

    // Footer
    footer_tagline: "เชื่อมต่อความสามารถที่ดีที่สุดของเอเชียกับตลาดแฟชั่นที่มีชื่อเสียงที่สุดในโลก",
    footer_nav_label: "การนำทาง",
    footer_nav_portfolio: "พอร์ตโฟลิโอ",
    footer_nav_howitworks: "วิธีการทำงาน",
    footer_nav_locations: "สถานที่",
    footer_nav_apply: "สมัครออดิชั่น",
    footer_locations_label: "สถานที่ของเรา",
    footer_copyright: "สงวนลิขสิทธิ์ทั้งหมด",
    footer_impressum: "Impressum",
    footer_datenschutz: "นโยบายความเป็นส่วนตัว",

    // Cookie Banner
    cookie_text: "เว็บไซต์นี้ใช้คุกกี้ การใช้งานหมายความว่าคุณยินยอม",
    cookie_more: "เพิ่มเติม",
    cookie_ok: "ตกลง",
  },

  vi: {
    // Navigation
    nav_portfolio: "Hồ Sơ",
    nav_editorial: "Biên Tập",
    nav_exclusive: "18+ Độc Quyền",
    nav_scouting: "Khu Vực Tuyển",
    nav_apply: "Đăng Ký Ngay",

    // Hero
    hero_tagline: "Công Ty Người Mẫu Hàng Đầu Châu Á",
    hero_heading1: "Câu Chuyện Của Bạn",
    hero_heading2: "Bắt Đầu Tại Đây.",
    hero_subtitle:
      "Chúng tôi khám phá tài năng đích thực từ Thái Lan, Philippines và Việt Nam — và kết nối họ với London, New York và Paris.",
    hero_cta_primary: "Đăng Ký Casting",
    hero_cta_secondary: "Xem Hồ Sơ",

    // Portfolio section
    portfolio_label: "Tài Năng Của Chúng Tôi",
    portfolio_heading1: "Thế Hệ Mới",
    portfolio_heading2: "Những Gương Mặt",
    portfolio_note: "Ảnh mẫu — hồ sơ thực sự của bạn bắt đầu sau buổi casting.",
    portfolio_cta: "Trở Thành Một Phần Của Aurra",

    // "We Look Different" section
    different_label: "Điều Làm Chúng Tôi Khác Biệt",
    different_heading: "Vẻ Đẹp Không Có Kích Thước Chuẩn.",
    card_natural_title: "Chúng Tôi Muốn Sự Tự Nhiên.",
    card_natural_desc:
      "Chúng tôi không tìm kiếm vẻ ngoài được tạo ra. Chúng tôi tìm kiếm vẻ đẹp tự nhiên — gương mặt chân thực, cá tính chân thành, và sự hiện diện mà máy ảnh không thể giả tạo. Không chỉnh sửa quá mức, không kỳ vọng phi thực tế.",
    card_petite_title: "Chiều Cao Không Phải Giới Hạn.",
    card_petite_desc:
      "Các công ty người mẫu truyền thống thường đặt ra yêu cầu chiều cao nghiêm ngặt. Chúng tôi thì không. Người mẫu nhỏ nhắn và thấp mang lại vẻ thẩm mỹ độc đáo, được săn đón trong các ấn phẩm biên tập, thương mại và nội dung riêng tư — và chúng tôi tích cực tìm kiếm tài năng đó. Nếu bạn có ngoại hình phù hợp, chúng tôi muốn gặp bạn.",
    card_petite_desc2:
      "Buổi trò chuyện casting đầu tiên chỉ mất 15–30 phút — một cuộc trò chuyện thoải mái, không áp lực.",
    card_cta: "Đăng Ký — Dù Vóc Dáng Của Bạn",

    // How It Works
    hiw_label: "Quy Trình",
    hiw_heading1: "Từ Buổi Trò Chuyện Đầu Tiên",
    hiw_heading2: "Đến Buổi Chụp Ảnh Chuyên Nghiệp",
    hiw_step1_title: "Buổi Trò Chuyện Casting",
    hiw_step1_desc:
      "Chúng tôi mời bạn đến một buổi trò chuyện cá nhân thoải mái — chỉ 15 đến 30 phút. Không áp lực, không kỳ vọng. Chúng tôi đơn giản muốn làm quen với bạn.",
    hiw_step1_label: "15–30 phút",
    hiw_step2_title: "Thẻ Hồ Sơ Của Bạn",
    hiw_step2_desc:
      "Chúng tôi tạo thẻ hồ sơ cá nhân của bạn (Kartei) — một thư mục riêng tư bao gồm bộ ảnh nghiệp dư do chúng tôi chụp, cùng với những bức ảnh riêng tư yêu thích của bạn mà bạn muốn thêm vào. Tất cả chi phí do chúng tôi chi trả. Không tốn kém gì cho bạn.",
    hiw_step2_label: "Miễn phí cho bạn",
    hiw_step3_title: "Vào Hệ Thống Đặt Lịch",
    hiw_step3_desc:
      "Thẻ hồ sơ của bạn được đưa vào cơ sở dữ liệu đặt lịch của chúng tôi. Khách hàng tiềm năng có thể xem — và họ luôn được thông báo trước rằng đây là ảnh nghiệp dư và cá nhân, không phải bộ ảnh biên tập chuyên nghiệp.",
    hiw_step3_label: "Thẻ của bạn được đăng",
    hiw_step4_title: "Bộ Ảnh Chuyên Nghiệp",
    hiw_step4_desc:
      "Khi một khách hàng thể hiện sự quan tâm thực sự đến bạn, chúng tôi mời bạn trở lại cho một buổi chụp ảnh chuyên nghiệp chất lượng cao — được tổ chức và thanh toán hoàn toàn bởi chúng tôi. Không có chi phí nào cho bạn ở bất kỳ giai đoạn nào.",
    hiw_step4_label: "Được chi trả hoàn toàn",
    hiw_cta: "Bắt Đầu Đăng Ký",

    // Locations
    locations_label: "Nơi Chúng Tôi Tuyển",
    locations_heading1: "Khu Vực Tìm Kiếm —",
    locations_heading2: "Châu Á Ra Thế Giới",
    locations_scouting_area: "Khu Vực Tuyển Dụng",
    locations_southeast_asia: "Đông Nam Á",
    locations_target_markets: "Thị Trường Mục Tiêu",
    locations_global_reach: "Tầm Với Toàn Cầu",
    locations_active_scouting: "Đang Tuyển Dụng",
    locations_target_market: "Thị Trường Mục Tiêu",

    // Editorial / Services
    editorial_label: "Cho Các Công Ty & Thương Hiệu",
    editorial_heading1: "Biên Tập & Thương Mại",
    editorial_heading2: "Nhiếp Ảnh",
    editorial_subtitle:
      "Người mẫu của chúng tôi có thể tham gia biểu diễn runway, các chiến dịch quảng cáo, ảnh biên tập thời trang, lookbook và hợp tác thương hiệu — được quản lý chuyên nghiệp và sẵn sàng cho công ty.",
    service1_title: "Runway & Thời Trang",
    service1_desc:
      "Trình diễn catwalk cho các tuần lễ thời trang trong nước và quốc tế. Người mẫu của chúng tôi được đào tạo về phong thái trên sân khấu và chuyển động.",
    service2_title: "Biên Tập & In Ấn",
    service2_desc:
      "Bìa tạp chí, các bài biên tập và chiến dịch in ấn. Chúng tôi làm việc với các nhiếp ảnh gia có tên tuổi và đang nổi lên trên khắp châu Á.",
    service3_title: "Thương Hiệu & Thương Mại",
    service3_desc:
      "Các chiến dịch sản phẩm, nội dung mạng xã hội và vai trò đại sứ thương hiệu — được giao đúng hạn và đúng yêu cầu.",
    editorial_apply: "Đăng Ký Làm Người Mẫu",
    editorial_book: "Đặt Lịch Người Mẫu",

    // 18+ Exclusive
    exclusive_label: "Chỉ Dành Cho Người Lớn · 18+",
    exclusive_heading1: "Nội Dung Độc Quyền",
    exclusive_heading2: "& Riêng Tư",
    exclusive_desc:
      "Một lựa chọn tuyển chọn từ tài năng của chúng tôi có thể tham gia chụp ảnh nghệ thuật và riêng tư có thẩm mỹ — được xử lý với sự chuyên nghiệp, kín đáo và đồng ý đầy đủ. Tất cả người mẫu được xác minh 18+ tuổi.",
    exclusive_card1_title: "Boudoir",
    exclusive_card1_desc:
      "Chân dung thanh lịch, riêng tư trong không gian riêng. Nghệ thuật và quyến rũ — không bao giờ phản cảm. Hoàn hảo cho các ấn phẩm cao cấp và nhà sưu tầm tư nhân.",
    exclusive_card1_note: "Có Thẩm Mỹ · Nghệ Thuật",
    exclusive_card2_title: "Đồ Lót & Đồ Bơi",
    exclusive_card2_desc:
      "Các chiến dịch chất lượng cao cho các thương hiệu đồ lót, nhãn hiệu đồ bơi và các ấn phẩm lifestyle đòi hỏi sự trình bày tự tin, tự nhiên.",
    exclusive_card2_note: "Thương Mại · Biên Tập",
    exclusive_card3_title: "Nghệ Thuật Khỏa Thân",
    exclusive_card3_desc:
      "Nhiếp ảnh nghệ thuật cao cấp cho các nhiếp ảnh gia và nhà sưu tầm nghiêm túc. Luôn được thực hiện trong môi trường chuyên nghiệp an toàn, tôn trọng và có sự đồng ý hoàn toàn.",
    exclusive_card3_note: "Nghệ Thuật Cao Cấp · Độc Quyền",
    exclusive_std1_label: "Xác Minh 18+",
    exclusive_std1_sub: "Tất cả người mẫu đã xác minh tuổi",
    exclusive_std2_label: "Hoàn Toàn Đồng Ý",
    exclusive_std2_sub: "Luôn có thỏa thuận bằng văn bản",
    exclusive_std3_label: "Riêng Tư & Kín Đáo",
    exclusive_std3_sub: "NDA có thể cung cấp theo yêu cầu",
    exclusive_std4_label: "Chuyên Nghiệp",
    exclusive_std4_sub: "Chỉ nhiếp ảnh gia được kiểm duyệt",
    exclusive_cta_enquire: "Liên Hệ Riêng Tư",
    exclusive_cta_apply: "Đăng Ký Làm Người Mẫu",
    exclusive_disclaimer:
      "Tất cả nội dung được sản xuất qua Aurra Models Exclusive đều hoàn toàn hợp pháp, được sản xuất với sự đồng ý đầy đủ thông tin của người lớn và tuân thủ luật pháp hiện hành trong tất cả các khu vực pháp lý hoạt động. Người mẫu phải từ 18 tuổi trở lên. Xác minh tuổi là bắt buộc.",

    // Founder
    founder_label: "Đồng Sáng Lập · Châu Á",
    founder_heading: "Gặp Gỡ Adrian.",
    founder_para1:
      "Adrian là đồng sáng lập của Aurra Models và dẫn đầu bộ phận châu Á — tuyển dụng và phát triển tài năng tại Thái Lan, Philippines và Việt Nam.",
    founder_para2:
      "Cùng với đối tác Joshua, người đại diện cho Aurra tại London, New York và Paris, Adrian xây dựng cầu nối giữa những gương mặt triển vọng nhất của Đông Nam Á và các thị trường thời trang hàng đầu thế giới.",
    founder_stat1: "Thị Trường Châu Á",
    founder_stat2: "Thành Phố Toàn Cầu",
    founder_stat3: "Chỉ",
    founder_cta: "Liên Hệ Trực Tiếp Với Adrian",

    // Final CTA
    cta_label: "Sẵn Sàng?",
    cta_heading1: "Buổi Casting Của Bạn Đang Chờ.",
    cta_heading2: "Không Cần Kinh Nghiệm.",
    cta_desc:
      "Chúng tôi tin vào tài năng thô và vẻ đẹp đích thực. Nếu bạn từ 18 đến 25 tuổi và mơ về sự nghiệp thời trang — đây là khoảnh khắc của bạn.",
    cta_button: "Đăng Ký Casting Của Bạn",
    cta_note: "Miễn phí · Không ràng buộc · Phản hồi trong 48 giờ",

    // Footer
    footer_tagline:
      "Kết nối tài năng sáng giá nhất châu Á với các thị trường thời trang danh tiếng nhất thế giới.",
    footer_nav_label: "Điều Hướng",
    footer_nav_portfolio: "Hồ Sơ",
    footer_nav_howitworks: "Cách Thức Hoạt Động",
    footer_nav_locations: "Địa Điểm",
    footer_nav_apply: "Đăng Ký Casting",
    footer_locations_label: "Địa Điểm Của Chúng Tôi",
    footer_copyright: "Bảo lưu mọi quyền.",
    footer_impressum: "Impressum",
    footer_datenschutz: "Chính Sách Riêng Tư",

    // Cookie Banner
    cookie_text: "Trang web này sử dụng cookie. Bằng cách sử dụng, bạn đồng ý.",
    cookie_more: "Thêm",
    cookie_ok: "OK",
  },

  fil: {
    // Navigation
    nav_portfolio: "Portfolio",
    nav_editorial: "Editorial",
    nav_exclusive: "18+ Eksklusibo",
    nav_scouting: "Mga Lugar ng Scouting",
    nav_apply: "Mag-apply Na",

    // Hero
    hero_tagline: "Pangunahing Modelling Agency ng Asya",
    hero_heading1: "Ang Iyong Kwento",
    hero_heading2: "Nagsisimula Dito.",
    hero_subtitle:
      "Natutuklasan namin ang tunay na talento mula sa Thailand, Pilipinas, at Vietnam — at inuugnay sila sa London, New York, at Paris.",
    hero_cta_primary: "Mag-apply para sa Casting",
    hero_cta_secondary: "Tingnan ang Portfolio",

    // Portfolio section
    portfolio_label: "Aming mga Talento",
    portfolio_heading1: "Bagong Henerasyon",
    portfolio_heading2: "ng mga Mukha",
    portfolio_note: "Mga halimbawang larawan — ang tunay na portfolio mo ay magsisimula pagkatapos ng casting.",
    portfolio_cta: "Maging Bahagi ng Aurra",

    // "We Look Different" section
    different_label: "Ang Nagpapakilala sa Amin",
    different_heading: "Walang Pamantayang Sukat ang Kagandahan.",
    card_natural_title: "Gusto Namin ang Tunay.",
    card_natural_desc:
      "Hindi kami naghahanap ng artipisyal na hitsura. Naghahanap kami ng natural na kagandahan — tunay na mukha, tapat na personalidad, at presensyang hindi mapeke ng kamera. Walang labis na pag-edit, walang hindi makatotohanang inaasahan.",
    card_petite_title: "Hindi Limitasyon ang Taas.",
    card_petite_desc:
      "Ang mga tradisyonal na ahensya ay madalas na nagtatakda ng mahigpit na kinakailangan sa taas. Hindi kami. Ang mga maliit at mas mababang modelo ay nagdadala ng natatangi at hinahangad na estetika sa editorial, komersyal, at personal na nilalaman — at aktibo kaming naghahanap ng talentong iyon. Kung mayroon kang tamang hitsura, gusto naming makilala ka.",
    card_petite_desc2:
      "Ang aming unang casting talk ay 15–30 minuto lamang — isang nakakarelax na pag-uusap na walang presyon.",
    card_cta: "Mag-apply — Anuman ang Iyong Sukat",

    // How It Works
    hiw_label: "Ang Proseso",
    hiw_heading1: "Mula sa Unang Pag-uusap",
    hiw_heading2: "Hanggang sa Propesyonal na Shoot",
    hiw_step1_title: "Casting Talk",
    hiw_step1_desc:
      "Inaanyayahan namin kayo sa isang nakakarelax na personal na pag-uusap — 15 hanggang 30 minuto lamang. Walang presyon, walang inaasahan. Gusto lang naming makilala kayo.",
    hiw_step1_label: "15–30 minuto",
    hiw_step2_title: "Ang Iyong Profile Card",
    hiw_step2_desc:
      "Gumagawa kami ng iyong personal na profile card (Kartei) — isang pribadong folder na may serye ng amateur na larawan na kinuha namin, kasama ang iyong mga paboritong pribadong larawan na gusto mong idagdag. Lahat ng gastos ay aming saklaw. Walang gastos para sa iyo.",
    hiw_step2_label: "Walang gastos para sa iyo",
    hiw_step3_title: "Sa Booking System",
    hiw_step3_desc:
      "Ang iyong profile card ay napupunta sa aming booking database. Ang mga potensyal na kliyente ay maaaring mag-browse nito — at palagi silang pinapaalam nang maaga na ito ay mga amateur at personal na larawan, hindi isang propesyonal na editorial na serye.",
    hiw_step3_label: "Live na ang iyong card",
    hiw_step4_title: "Propesyonal na Serye ng Larawan",
    hiw_step4_desc:
      "Kapag ang isang kliyente ay nagpahayag ng tunay na interes sa iyo, inaanyayahan namin kayo pabalik para sa isang mataas na kalidad na propesyonal na photo shoot — ganap na inayos at binayaran namin. Walang gastos para sa iyo sa anumang yugto.",
    hiw_step4_label: "Ganap na sakop",
    hiw_cta: "Simulan ang Iyong Aplikasyon",

    // Locations
    locations_label: "Kung Saan Kami Naghahanap",
    locations_heading1: "Aming Lugar ng Paghahanap —",
    locations_heading2: "Mula Asya Patungong Mundo",
    locations_scouting_area: "Lugar ng Scouting",
    locations_southeast_asia: "Timog-Silangang Asya",
    locations_target_markets: "Mga Target na Merkado",
    locations_global_reach: "Global na Abot",
    locations_active_scouting: "Aktibong Naghahanap",
    locations_target_market: "Target na Merkado",

    // Editorial / Services
    editorial_label: "Para sa mga Ahensya at Brand",
    editorial_heading1: "Editorial at Komersyal",
    editorial_heading2: "na Potograpiya",
    editorial_subtitle:
      "Ang aming mga modelo ay available para sa mga runway show, advertising campaign, fashion editorial, lookbook, at pakikipagtulungan sa brand — propesyonal na pinamamahalaan at handa para sa ahensya.",
    service1_title: "Runway at Fashion",
    service1_desc:
      "Mga catwalk presentation para sa lokal at internasyonal na fashion week. Ang aming mga modelo ay sinanay para sa stage presence at galaw.",
    service2_title: "Editorial at Print",
    service2_desc:
      "Mga pabalat ng magazine, editorial spread, at print campaign. Nagtatrabaho kami kasama ang mga kilala at lumalabas na mga photographer sa buong Asya.",
    service3_title: "Brand at Komersyal",
    service3_desc:
      "Mga product campaign, social media content, at brand ambassador na papel — naihahatid sa tamang oras at ayon sa layunin.",
    editorial_apply: "Mag-apply bilang Modelo",
    editorial_book: "Mag-book ng Modelo",

    // 18+ Exclusive
    exclusive_label: "Para sa mga Matatanda Lamang · 18+",
    exclusive_heading1: "Eksklusibo at Personal",
    exclusive_heading2: "na Nilalaman",
    exclusive_desc:
      "Ang isang piling pagpipilian ng aming talento ay available para sa maayos na artistiko at personal na potograpiya — pinangasiwaan nang may buong propesyonalismo, diskresyon, at pahintulot. Lahat ng modelo ay 18+ na na-verify ang edad.",
    exclusive_card1_title: "Boudoir",
    exclusive_card1_desc:
      "Elegante, personal na portraiture sa isang pribadong lugar. Artistiko at senswal — hindi kailanman bastos. Perpekto para sa mga premium na publikasyon at pribadong koleksyonista.",
    exclusive_card1_note: "Maayos · Artistiko",
    exclusive_card2_title: "Lingerie at Swimwear",
    exclusive_card2_desc:
      "Mga mataas na kalidad na campaign para sa mga lingerie brand, swimwear label, at lifestyle publication na nangangailangan ng tiwala at natural na presentasyon.",
    exclusive_card2_note: "Komersyal · Editorial",
    exclusive_card3_title: "Artistikong Hubad",
    exclusive_card3_desc:
      "Fine-art photography para sa mga seryosong photographer at koleksyonista. Palaging isinasagawa sa isang ligtas, magalang, at ganap na may pahintulot na propesyonal na kapaligiran.",
    exclusive_card3_note: "Fine Art · Eksklusibo",
    exclusive_std1_label: "Na-verify na 18+",
    exclusive_std1_sub: "Lahat ng modelo na-verify ang edad",
    exclusive_std2_label: "Ganap na May Pahintulot",
    exclusive_std2_sub: "Palaging may nakasulat na kasunduan",
    exclusive_std3_label: "Pribado at Diskreto",
    exclusive_std3_sub: "NDA available sa kahilingan",
    exclusive_std4_label: "Propesyonal",
    exclusive_std4_sub: "Mga photographer na na-verify lamang",
    exclusive_cta_enquire: "Magtanong nang Pribado",
    exclusive_cta_apply: "Mag-apply bilang Modelo",
    exclusive_disclaimer:
      "Lahat ng nilalalamang ginawa sa pamamagitan ng Aurra Models Exclusive ay mahigpit na legal, ginawa nang may ganap na kaalaman at pahintulot ng mga matatanda, at sumusunod sa mga naaangkop na batas sa lahat ng lugar ng operasyon. Ang mga modelo ay dapat na 18 taong gulang pataas. Ang pag-verify ng edad ay sapilitan.",

    // Founder
    founder_label: "Co-Founder · Asya",
    founder_heading: "Kilalanin si Adrian.",
    founder_para1:
      "Si Adrian ay co-founder ng Aurra Models at namumuno sa dibisyon ng Asya — nagscouting at nagpapaunlad ng talento sa Thailand, Pilipinas, at Vietnam.",
    founder_para2:
      "Kasama ang kanyang katuwang na si Joshua, na kumakatawan sa Aurra sa London, New York, at Paris, si Adrian ay nagtatayo ng tulay sa pagitan ng mga pinaka-promising na mukha ng Timog-Silangang Asya at ang mga nangungunang fashion market ng mundo.",
    founder_stat1: "Mga Merkado sa Asya",
    founder_stat2: "Mga Lungsod sa Mundo",
    founder_stat3: "Lamang",
    founder_cta: "Makipag-ugnayan kay Adrian nang Direkta",

    // Final CTA
    cta_label: "Handa Na?",
    cta_heading1: "Naghihintay ang Iyong Casting.",
    cta_heading2: "Hindi Kailangan ng Karanasan.",
    cta_desc:
      "Naniniwala kami sa hilaw na talento at tunay na kagandahan. Kung ikaw ay nasa pagitan ng 18 at 25 taong gulang at nangangarap ng karera sa fashion — ito na ang iyong sandali.",
    cta_button: "Mag-apply para sa Iyong Casting",
    cta_note: "Libre · Walang pangako · Tugon sa loob ng 48 oras",

    // Footer
    footer_tagline:
      "Inuugnay ang pinakamatingkad na talento ng Asya sa mga pinaka-prestihiyosong fashion market sa mundo.",
    footer_nav_label: "Nabigasyon",
    footer_nav_portfolio: "Portfolio",
    footer_nav_howitworks: "Paano Gumagana",
    footer_nav_locations: "Mga Lokasyon",
    footer_nav_apply: "Mag-apply para sa Casting",
    footer_locations_label: "Aming mga Lokasyon",
    footer_copyright: "Lahat ng karapatan ay nakalaan.",
    footer_impressum: "Impressum",
    footer_datenschutz: "Patakaran sa Privacy",

    // Cookie Banner
    cookie_text: "Gumagamit ng cookies ang website na ito. Sa paggamit nito, sumasang-ayon ka.",
    cookie_more: "Higit pa",
    cookie_ok: "OK",
  },
};
