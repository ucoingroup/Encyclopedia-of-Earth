// EACO Page Data
const eacoGoals = [
  {icon:'target',titles:{zh:'提升个人认知',en:'Elevate Individual Cognition',ja:'個人認知の向上',ko:'개인 인지 향상',vi:'Nâng cao nhận thức',ms:'Tingkatkan Kognisi',es:'Elevar Cognición',fr:'Élever la Cognition',ar:'رفع الإدراك',ru:'Повысить познание'},
   desc:{zh:'与100个认知模型结合',en:'Integrate with 100 cognitive models',ja:'100の認知モデルと統合',ko:'100개 인지 모델 통합',vi:'Tích hợp 100 mô hình nhận thức',ms:'Integrasi 100 model kognitif',es:'Integrar 100 modelos cognitivos',fr:'Intégrer 100 modèles cognitifs',ar:'دمج 100 نموذج إدراكي',ru:'Интеграция с 100 когнитивными моделями'}},
  {icon:'bolt',titles:{zh:'提升组织效率',en:'Improve Organizational Efficiency',ja:'組織効率の向上',ko:'조직 효율 향상',vi:'Cải thiện hiệu suất',ms:'Tingkatkan Kecekapan',es:'Mejorar Eficiencia',fr:'Améliorer l\'Efficacité',ar:'تحسين الكفاءة',ru:'Улучшить эффективность'},
   desc:{zh:'去中心化协作提升效率',en:'Decentralized collaboration boosts efficiency',ja:'分散型協力で効率向上',ko:'탈중앙화 협력으로 효율 향상',vi:'Hợp tác phi tập trung',ms:'Kerjasama terdesentralisasi',es:'Colaboración descentralizada',fr:'Collaboration décentralisée',ar:'تعاون لامركزي',ru:'Децентрализованное сотрудничество'}},
  {icon:'globe',titles:{zh:'提升社会文明',en:'Advance Social Civilization',ja:'社会文明の向上',ko:'사회 문명 향상',vi:'Thúc đẩy văn minh',ms:'Memajukan Tamadun',es:'Avanzar Civilización',fr:'Faire Avancer la Civilisation',ar:'تقدم الحضارة',ru:'Продвинуть цивилизацию'},
   desc:{zh:'全球文明升级模型',en:'Global civilization upgrading model',ja:'全球文明アップグレードモデル',ko:'글로벌 문명 승격 모델',vi:'Mô hình nâng cấp văn minh',ms:'Model peningkatan tamadun',es:'Modelo de mejora civilizatoria',fr:'Modèle de civilisation',ar:'نموذج تحسين الحضارة',ru:'Модель модернизации цивилизации'}},
  {icon:'seedling',titles:{zh:'地球可持续发展',en:'Sustainable Earth Development',ja:'地球の持続可能な発展',ko:'지구 지속가능 발전',vi:'Phát triển bền vững',ms:'Pembangunan Mampan',es:'Desarrollo Sostenible',fr:'Développement Durable',ar:'التنمية المستدامة',ru:'Устойчивое развитие'},
   desc:{zh:'环保与生态保护',en:'Environmental protection and ecology',ja:'環境保護と生態系',ko:'환경 보호와 생태',vi:'Bảo vệ môi trường',ms:'Perlindungan alam sekitar',es:'Protección ambiental',fr:'Protection de l\'environnement',ar:'حماية البيئة',ru:'Защита окружающей среды'}}
];

const eacoDims = [
  {e:'Energy',a:'Attitude',c:'Cooperation',o:'Optimization',name:{zh:'官方定义',en:'Official',ja:'公式',ko:'공식',vi:'Chính thức',ms:'Rasmi',es:'Oficial',fr:'Officiel',ar:'رسمي',ru:'Официальное'}},
  {e:'Evolution',a:'Awareness',c:'Civilization',o:'Oneness',name:{zh:'哲学升级',en:'Philosophy',ja:'哲学',ko:'철학',vi:'Triết học',ms:'Falsafah',es:'Filosofía',fr:'Philosophie',ar:'فلسفة',ru:'Философия'}},
  {e:'Electron',a:'Atom',c:'Carbon',o:'Oxygen',name:{zh:'化学元素',en:'Chemistry',ja:'化学',ko:'화학',vi:'Hóa học',ms:'Kimia',es:'Química',fr:'Chimie',ar:'كيمياء',ru:'Химия'}},
  {e:'Emission',a:'Atmosphere',c:'Carbon',o:'Ozone',name:{zh:'气候科学',en:'Climate',ja:'気候',ko:'기후',vi:'Khí hậu',ms:'Iklim',es:'Clima',fr:'Climat',ar:'المناخ',ru:'Климат'}},
  {e:'Earth',a:'Air',c:'Combustion',o:'Ocean',name:{zh:'四元素',en:'Four Elements',ja:'四元素',ko:'사원소',vi:'Bốn nguyên tố',ms:'Empat Unsur',es:'Cuatro Elementos',fr:'Quatre Éléments',ar:'العناصر الأربعة',ru:'Четыре элемента'}},
  {e:'Euler(e)',a:'Area',c:'Circumference',o:'Origin(0)',name:{zh:'数学',en:'Mathematics',ja:'数学',ko:'수학',vi:'Toán học',ms:'Matematik',es:'Matemáticas',fr:'Mathématiques',ar:'الرياضيات',ru:'Математика'}},
  {e:'Equity',a:'Asset',c:'Capital',o:'Output',name:{zh:'经济金融',en:'Economy',ja:'経済',ko:'경제',vi:'Kinh tế',ms:'Ekonomi',es:'Economía',fr:'Économie',ar:'الاقتصاد',ru:'Экономика'}},
  {e:'Emptiness',a:'Awareness',c:'Compassion',o:'Oneness',name:{zh:'东方哲学',en:'Eastern Philosophy',ja:'東洋哲学',ko:'동양 철학',vi:'Triết học phương Đông',ms:'Falsafah Timur',es:'Filosofía Oriental',fr:'Philosophie Orientale',ar:'الفلسفة الشرقية',ru:'Восточная философия'}},
  {e:'Emergence',a:'Algorithm',c:'Cognition',o:'Optimization',name:{zh:'AI原语',en:'AI Primitives',ja:'AIプリミティブ',ko:'AI 원시',vi:'Nguyên thủy AI',ms:'Primitif AI',es:'Primitivos IA',fr:'Primitifs IA',ar:'بدائيات الذكاء الاصطناعي',ru:'Примитивы ИИ'}},
  {e:'Encryption',a:'Address',c:'Consensus',o:'On-chain',name:{zh:'区块链',en:'Blockchain',ja:'ブロックチェーン',ko:'블록체인',vi:'Blockchain',ms:'Blockchain',es:'Blockchain',fr:'Blockchain',ar:'بلوكتشين',ru:'Блокчейн'}},
  {e:'Emerald',a:'Amber',c:'Cyan',o:'Orange',name:{zh:'色彩光学',en:'Color & Optics',ja:'色彩光学',ko:'색채 광학',vi:'Màu sắc & Quang học',ms:'Warna & Optik',es:'Color y Óptica',fr:'Couleur et Optique',ar:'اللون والبصريات',ru:'Цвет и Оптика'}},
  {e:'Entropy',a:'Alphabet',c:'Channel',o:'Output',name:{zh:'信息论',en:'Information Theory',ja:'情報理論',ko:'정보 이론',vi:'Lý thuyết thông tin',ms:'Teori Maklumat',es:'Teoría de Información',fr:'Théorie de l\'Information',ar:'نظرية المعلومات',ru:'Теория информации'}},
  {e:'Earth',a:'Asteroid',c:'Cosmos',o:'Orbit',name:{zh:'太空宇宙',en:'Space',ja:'宇宙',ko:'우주',vi:'Không gian',ms:'Angkasa',es:'Espacio',fr:'Espace',ar:'الفضاء',ru:'Космос'}},
  {e:'Eon',a:'Annual',c:'Century',o:'Orbit',name:{zh:'时间历法',en:'Time & Calendar',ja:'時間暦',ko:'시간 역법',vi:'Thời gian & Lịch',ms:'Masa & Kalendar',es:'Tiempo y Calendario',fr:'Temps et Calendrier',ar:'الزمن والتقويم',ru:'Время и Календарь'}},
  {e:'ECG',a:'Arterial',c:'Count',o:'Oxygen',name:{zh:'医学',en:'Medicine',ja:'医学',ko:'의학',vi:'Y học',ms:'Perubatan',es:'Medicina',fr:'Médecine',ar:'الطب',ru:'Медицина'}},
  {e:'Energy',a:'Arrow',c:'Carnot',o:'Order',name:{zh:'热力学',en:'Thermodynamics',ja:'熱力学',ko:'열역학',vi:'Nhiệt động lực học',ms:'Termodinamik',es:'Termodinámica',fr:'Thermodynamique',ar:'الديناميكا الحرارية',ru:'Термодинамика'}}
];

const eacoIndustries = [
  {icon:'sun',titles:{zh:'新能源与碳中和',en:'New Energy & Carbon Neutral',ja:'新エネルギー・カーボンニュートラル',ko:'신에너지·탄소중립',vi:'Năng lượng mới',ms:'Tenaga Baru',es:'Energía y Carbono',fr:'Énergie et Carbone',ar:'الطاقة والكربون',ru:'Энергия и Углерод'},rating:5},
  {icon:'leaf',titles:{zh:'环保与可持续发展',en:'Environmental & Sustainability',ja:'環境・持続可能性',ko:'환경·지속가능성',vi:'Môi trường',ms:'Alam Sekitar',es:'Medio Ambiente',fr:'Environnement',ar:'البيئة',ru:'Экология'},rating:5},
  {icon:'chain',titles:{zh:'Web3/DeFi基础设施',en:'Web3/DeFi Infrastructure',ja:'Web3/DeFi基盤',ko:'Web3/DeFi 인프라',vi:'Web3/DeFi',ms:'Web3/DeFi',es:'Web3/DeFi',fr:'Web3/DeFi',ar:'Web3/DeFi',ru:'Web3/DeFi'},rating:5},
  {icon:'money',titles:{zh:'跨境支付与普惠金融',en:'Cross-border Payment & Inclusive Finance',ja:'越境決済・普惠金融',ko:'국경 간 결제·포용 금융',vi:'Thanh toán xuyên biên',ms:'Pembayaran Lintas Sempadan',es:'Pagos Transfronterizos',fr:'Paiements Transfrontaliers',ar:'المدفوعات العابرة للحدود',ru:'Трансграничные платежи'},rating:4},
  {icon:'wheat',titles:{zh:'农业与地球资源量化',en:'Agriculture & Earth Resources',ja:'農業・地球資源',ko:'농업·지구 자원',vi:'Nông nghiệp',ms:'Pertanian',es:'Agricultura',fr:'Agriculture',ar:'الزراعة',ru:'Сельское хозяйство'},rating:4},
  {icon:'camera',titles:{zh:'文旅与元宇宙',en:'Tourism & Metaverse',ja:'観光・メタバース',ko:'관광·메타버스',vi:'Du lịch & Metaverse',ms:'Pelancongan & Metaverse',es:'Turismo y Metaverso',fr:'Tourisme et Métavers',ar:'السياحة والميتافيرس',ru:'Туризм и Метавселенная'},rating:4},
  {icon:'heart',titles:{zh:'养老与银发经济',en:'Elderly Care & Silver Economy',ja:'介護・シルバーエコノミー',ko:'실버 경제',vi:'Chăm sóc người cao tuổi',ms:'Penjagaan Warga Emas',es:'Economía Senior',fr:'Économie Senior',ar:'اقتصاد كبار السن',ru:'Серебряная экономика'},rating:4},
  {icon:'book',titles:{zh:'教育与知识经济',en:'Education & Knowledge Economy',ja:'教育・知識経済',ko:'교육·지식 경제',vi:'Giáo dục',ms:'Pendidikan',es:'Educación',fr:'Éducation',ar:'التعليم',ru:'Образование'},rating:4},
  {icon:'truck',titles:{zh:'供应链与溯源',en:'Supply Chain & Traceability',ja:'サプライチェーン・追跡',ko:'공급망·추적',vi:'Chuỗi cung ứng',ms:'Rantai Bekalan',es:'Cadena de Suministro',fr:'Chaîne d\'Approvisionnement',ar:'سلسلة التوريد',ru:'Цепочка поставок'},rating:3},
  {icon:'people',titles:{zh:'社区治理与DAO',en:'Community Governance & DAO',ja:'コミュニティ治理・DAO',ko:'커뮤니티 거버넌스·DAO',vi:'Quản trị cộng đồng & DAO',ms:'Tadbir Komuniti & DAO',es:'Gobernanza y DAO',fr:'Gouvernance et DAO',ar:'الحوكمة و DAO',ru:'Управление и DAO'},rating:3}
];

const eacoRoadmap = [
  {phase:'Phase 1',done:true,titles:{zh:'代币发行',en:'Token Launch',ja:'トークン発行',ko:'토큰 발행',vi:'Phát hành Token',ms:'Pelancaran Token',es:'Lanzamiento',fr:'Lancement',ar:'إطلاق',ru:'Запуск'},
   desc:{zh:'Solana链部署, 流动性创建',en:'Solana deployment, liquidity creation',ja:'Solanaデプロイ・流動性創設',ko:'Solana 배포·유동성 생성',vi:'Triển khai Solana',ms:'Deployment Solana',es:'Despliegue en Solana',fr:'Déploiement Solana',ar:'النشر على Solana',ru:'Развертывание на Solana'}},
  {phase:'Phase 2',done:true,titles:{zh:'社区建设',en:'Community Building',ja:'コミュニティ構築',ko:'커뮤니티 구축',vi:'Xây dựng cộng đồng',ms:'Pembinaan Komuniti',es:'Construcción de Comunidad',fr:'Construction Communautaire',ar:'بناء المجتمع',ru:'Создание сообщества'},
   desc:{zh:'7大语种TG社群, 全球志愿者',en:'7-language TG groups, global volunteers',ja:'7言語TG・グローバルボランティア',ko:'7개 언어 TG·글로벌 자원봉사자',vi:'7 ngôn ngữ TG',ms:'7 bahasa TG',es:'7 idiomas TG',fr:'7 langues TG',ar:'7 لغات TG',ru:'7 языков TG'}},
  {phase:'Phase 3',done:true,titles:{zh:'DEX扩容',en:'DEX Expansion',ja:'DEX拡張',ko:'DEX 확장',vi:'Mở rộng DEX',ms:'Pengembangan DEX',es:'Expansión DEX',fr:'Expansion DEX',ar:'توسيع DEX',ru:'Расширение DEX'},
   desc:{zh:'Raydium + Meteora + Orca 三池',en:'Raydium + Meteora + Orca triple pool',ja:'Raydium+Meteora+Orca三池',ko:'Raydium+Meteora+Orca 3풀',vi:'Ba pool Raydium+Meteora+Orca',ms:'Tiga pool Raydium+Meteora+Orca',es:'Triple pool',fr:'Triple pool',ar:'ثلاثة أحواض',ru:'Три пула'}},
  {phase:'Phase 4',done:false,titles:{zh:'RWA落地',en:'RWA Implementation',ja:'RWA実装',ko:'RWA 구현',vi:'Triển khai RWA',ms:'Pelaksanaan RWA',es:'Implementación RWA',fr:'Implémentation RWA',ar:'تنفيذ RWA',ru:'Внедрение RWA'},
   desc:{zh:'酒店, 口岸, 地产资产代币化',en:'Hotel, port, real estate tokenization',ja:'ホテル・港湾・不産トークン化',ko:'호텔·항구·부동산 토큰화',vi:'Khách sạn, cảng, bất động sản',ms:'Hotel, pelabuhan, hartanah',es:'Hotel, puerto, inmuebles',fr:'Hôtel, port, immobilier',ar:'فندق، ميناء، عقارات',ru:'Отель, порт, недвижимость'}},
  {phase:'Phase 5',done:false,titles:{zh:'AI Agent',en:'AI Agent',ja:'AIエージェント',ko:'AI 에이전트',vi:'AI Agent',ms:'Ejen AI',es:'Agente IA',fr:'Agent IA',ar:'وكيل الذكاء الاصطناعي',ru:'ИИ-агент'},
   desc:{zh:'AI代理支付, 智能合约自动化',en:'AI agent payment, smart contract automation',ja:'AI決済・スマコン自動化',ko:'AI 결제·스마트컨트랙트 자동화',vi:'Thanh toán AI, tự động hợp đồng',ms:'Pembayaran AI, automasi kontrak',es:'Pago IA, automatización',fr:'Paiement IA, automatisation',ar:'دفع الذكاء الاصطناعي',ru:'Платежи ИИ, автоматизация'}},
  {phase:'Phase 6',done:false,titles:{zh:'e文明',en:'e-Civilization',ja:'e文明',ko:'e문명',vi:'e văn minh',ms:'e-Tamadun',es:'e-Civilización',fr:'e-Civilisation',ar:'الحضارة الإلكترونية',ru:'е-цивилизация'},
   desc:{zh:'全球文明升级模型, 100认知模型',en:'Global civilization upgrade, 100 cognitive models',ja:'全球文明モデル・100認知モデル',ko:'글로벌 문명 모델·100 인지 모델',vi:'Mô hình văn minh toàn cầu',ms:'Model tamadun global',es:'Modelo civilizatorio',fr:'Modèle de civilisation',ar:'نموذج الحضارة',ru:'Модель цивилизации'}}
];

const iconMap = {
  'target':'\uD83C\uDFAF','bolt':'\u26A1','globe':'\uD83C\uDF0D','seedling':'\uD83C\uDF31',
  'sun':'\u2600\uFE0F','leaf':'\uD83C\uDF43','chain':'\uD83D\uDD17','money':'\uD83D\uDCB0',
  'wheat':'\uD83C\uDF3E','camera':'\uD83D\uDCF7','heart':'\u2764\uFE0F','book':'\uD83D\uDCDA',
  'truck':'\uD83D\uDE9A','people':'\uD83D\uDC65'
};
