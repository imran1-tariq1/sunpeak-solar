// =====================================================================
//  ALL WEBSITE CONTENT LIVES HERE.
//  Edit names, numbers, prices and text in this one file.
// =====================================================================

export const company = {
  name: 'SunPeak Solar',
  tagline: 'Clean power. Lower bills. Brighter future.',
  phone: '+92 300 1234567',
  phoneHref: 'tel:+923001234567',
  whatsapp: '923001234567',
  email: 'info@sunpeaksolar.pk',
  address: 'Office 12, Main Boulevard, Gulberg III, Lahore, Pakistan',
  hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
  founded: 2014,
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
};

export const currency = 'Rs';
export const formatMoney = (n) => `${currency} ${Math.round(n).toLocaleString('en-US')}`;

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/packages', label: 'Packages' },
  { to: '/projects', label: 'Projects' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
];

export const stats = [
  { value: 2500, suffix: '+', label: 'Systems installed' },
  { value: 18, suffix: ' MW', label: 'Clean power capacity' },
  { value: 12, suffix: '', label: 'Cities served' },
  { value: 25, suffix: ' yr', label: 'Panel performance warranty' },
];

export const services = [
  {
    id: 'residential',
    icon: 'House',
    image: 'residential',
    title: 'Residential Solar',
    short: 'Rooftop systems sized to your home so you can cut your monthly bill by up to 90%.',
    description:
      'We design a rooftop system around your actual consumption, roof angle and shading. Our engineers make sure every panel earns its place, and our installers leave your roof as clean and watertight as they found it.',
    features: [
      'Free roof survey and 3D shading analysis',
      'Tier-1 N-type panels with 25-year warranty',
      'Smart inverter with mobile app monitoring',
      'Neat cable routing and rust-proof mounting',
    ],
    idealFor: 'Houses, villas and apartments with roof access',
  },
  {
    id: 'commercial',
    icon: 'Building2',
    image: 'commercial-office',
    title: 'Commercial & Industrial',
    short: 'Large-scale systems for offices, factories, schools and hospitals that pay back in 2–3 years.',
    description:
      'Daytime-heavy businesses are perfect for solar. We deliver turnkey projects from 20 kW to multi-megawatt, with detailed financial modelling, project management and minimal disruption to your operations.',
    features: [
      'Energy audit and load profiling',
      'Bankable ROI and payback reports',
      'Industrial-grade string and central inverters',
      'Dedicated project manager and safety officer',
    ],
    idealFor: 'Factories, offices, schools, hospitals, malls',
  },
  {
    id: 'agricultural',
    icon: 'Tractor',
    image: 'solar-well',
    title: 'Agricultural & Tube Wells',
    short: 'Solar-powered water pumps that run your tube well for free, with no diesel and no load-shedding.',
    description:
      'Replace expensive diesel and unreliable grid supply with a solar pumping system. We size the array to your bore depth and water needs, and install VFD drives that protect your motor and maximise flow.',
    features: [
      'Bore depth and water-flow assessment',
      'Ground-mounted, wind-resistant structures',
      'VFD solar pump drives with soft start',
      'Works with existing submersible and surface pumps',
    ],
    idealFor: 'Farms, orchards, dairy farms and nurseries',
  },
  {
    id: 'storage',
    icon: 'BatteryCharging',
    image: 'battery-storage',
    title: 'Battery Backup & Hybrid',
    short: 'Lithium battery storage that keeps your lights, fans and Wi-Fi running through every outage.',
    description:
      'Hybrid systems store extra daytime energy in long-life lithium batteries and switch over in milliseconds when the grid fails. Choose what stays on, from a few essentials to your whole home.',
    features: [
      'LiFePO4 batteries rated for 6,000+ cycles',
      'Seamless switchover in under 10 ms',
      'Expandable storage as your needs grow',
      'Smart priority settings: solar, battery, grid',
    ],
    idealFor: 'Homes and businesses with frequent outages',
  },
  {
    id: 'net-metering',
    icon: 'PlugZap',
    image: 'net-metering',
    title: 'Net Metering',
    short: 'We handle the complete approval process so you can sell surplus power back to the grid.',
    description:
      'Net metering lets your meter run backwards when you produce more than you use. Our documentation team prepares and follows up every application with your distribution company until your green meter is installed.',
    features: [
      'Complete file preparation and submission',
      'Follow-up until approval and meter installation',
      'Transparent fixed-fee pricing',
      'Typical approval timeline guidance',
    ],
    idealFor: 'Grid-connected homes and businesses',
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    image: 'maintenance',
    title: 'Maintenance & Cleaning',
    short: 'Scheduled cleaning, health checks and fast repairs to keep your system at peak output.',
    description:
      'Dust can reduce output by 15–25%. Our annual maintenance plans include professional panel cleaning, electrical inspections, thermal imaging and priority support, whoever installed your system.',
    features: [
      'Professional waterless or soft-water cleaning',
      'Thermal imaging to detect hot spots',
      'Inverter and wiring health checks',
      '48-hour priority repair response',
    ],
    idealFor: 'Any existing solar system, any installer',
  },
];

export const process = [
  { title: 'Free consultation', text: 'Share your electricity bill. We analyse your usage and recommend the right system size.', icon: 'MessageCircle' },
  { title: 'Site survey & design', text: 'Our engineer visits, measures your roof and prepares a custom design and quote.', icon: 'Ruler' },
  { title: 'Professional installation', text: 'Certified teams install your system in 1–3 days, cleanly and safely.', icon: 'Wrench' },
  { title: 'Activation & support', text: 'We activate monitoring, handle net metering and support you for years to come.', icon: 'BadgeCheck' },
];

export const whyUs = [
  { icon: 'ShieldCheck', title: 'Genuine Tier-1 equipment', text: 'Only original, warranty-backed panels, inverters and batteries. Serial numbers are verified at handover.' },
  { icon: 'Award', title: 'Certified engineers', text: 'Licensed electrical engineers design and sign off on every system we build.' },
  { icon: 'HandCoins', title: 'Transparent pricing', text: 'Itemised quotes with no hidden charges. The price we quote is the price you pay.' },
  { icon: 'Clock', title: 'Lifetime support', text: 'A local team that answers the phone, with 10-year workmanship warranty on installation.' },
];

export const packages = [
  {
    id: '3kw',
    name: 'Starter',
    size: 3,
    price: 520000,
    batteryPrice: 260000,
    panels: '6 × 585W N-type panels',
    inverter: '3 kW smart inverter',
    battery: '5 kWh lithium battery',
    monthly: '360–420 units/month',
    idealFor: 'Small homes, 2–3 fans, lights, fridge, TV',
    popular: false,
  },
  {
    id: '5kw',
    name: 'Home',
    size: 5,
    price: 850000,
    batteryPrice: 320000,
    panels: '9 × 585W N-type panels',
    inverter: '5 kW smart inverter',
    battery: '5 kWh lithium battery',
    monthly: '600–700 units/month',
    idealFor: 'Average homes with 1 AC running in daytime',
    popular: false,
  },
  {
    id: '10kw',
    name: 'Family',
    size: 10,
    price: 1650000,
    batteryPrice: 560000,
    panels: '18 × 585W N-type panels',
    inverter: '10 kW smart inverter',
    battery: '10 kWh lithium battery',
    monthly: '1,200–1,400 units/month',
    idealFor: 'Large homes with 2–3 ACs and heavy appliances',
    popular: true,
  },
  {
    id: '15kw',
    name: 'Premium',
    size: 15,
    price: 2400000,
    batteryPrice: 780000,
    panels: '26 × 585W N-type panels',
    inverter: '15 kW three-phase inverter',
    battery: '15 kWh lithium battery',
    monthly: '1,800–2,100 units/month',
    idealFor: 'Villas, small offices and clinics',
    popular: false,
  },
];

export const packageIncludes = [
  'Complete design and engineering',
  'Panels, inverter, mounting structure',
  'DC/AC cables, breakers and protection',
  'Earthing and lightning protection',
  'Installation and commissioning',
  'Mobile app monitoring setup',
  '1 free cleaning visit',
  '10-year workmanship warranty',
];

export const productCategories = ['All', 'Panels', 'Inverters', 'Batteries', 'Accessories'];

export const products = [
  { id: 'p1', category: 'Panels', name: 'N-Type TOPCon 585W Bifacial', icon: 'PanelsTopLeft', badge: 'Best seller', specs: { Power: '585 W', Efficiency: '22.6%', Warranty: '30-yr performance', Type: 'Bifacial, dual glass' } },
  { id: 'p2', category: 'Panels', name: 'Mono PERC 550W', icon: 'PanelsTopLeft', badge: 'Value', specs: { Power: '550 W', Efficiency: '21.3%', Warranty: '25-yr performance', Type: 'Monofacial' } },
  { id: 'p3', category: 'Panels', name: 'N-Type HJT 620W', icon: 'PanelsTopLeft', badge: 'Premium', specs: { Power: '620 W', Efficiency: '23.2%', Warranty: '30-yr performance', Type: 'Bifacial, heterojunction' } },
  { id: 'i1', category: 'Inverters', name: 'Hybrid Inverter 6 kW', icon: 'Cpu', badge: 'Popular', specs: { Output: '6 kW', MPPT: '2 trackers', Battery: '48V lithium ready', Monitoring: 'Wi-Fi app' } },
  { id: 'i2', category: 'Inverters', name: 'On-Grid Inverter 10 kW', icon: 'Cpu', badge: null, specs: { Output: '10 kW', MPPT: '2 trackers', Efficiency: '98.4%', Monitoring: 'Wi-Fi app' } },
  { id: 'i3', category: 'Inverters', name: 'Three-Phase Inverter 25 kW', icon: 'Cpu', badge: 'Commercial', specs: { Output: '25 kW', MPPT: '3 trackers', Efficiency: '98.6%', Protection: 'IP66' } },
  { id: 'b1', category: 'Batteries', name: 'LiFePO4 Battery 5 kWh', icon: 'BatteryFull', badge: 'Popular', specs: { Capacity: '5.12 kWh', Cycles: '6,000+', Voltage: '51.2 V', Warranty: '10 years' } },
  { id: 'b2', category: 'Batteries', name: 'Stackable Battery 10 kWh', icon: 'BatteryFull', badge: null, specs: { Capacity: '10.24 kWh', Cycles: '6,000+', Expandable: 'Up to 40 kWh', Warranty: '10 years' } },
  { id: 'a1', category: 'Accessories', name: 'Galvanised Mounting Structure', icon: 'Grid3x3', badge: null, specs: { Material: 'Hot-dip galvanised steel', Wind: 'Up to 150 km/h', Life: '25+ years', Type: 'Roof & ground' } },
  { id: 'a2', category: 'Accessories', name: 'Smart Energy Meter', icon: 'Gauge', badge: null, specs: { Phase: 'Single / three', Monitoring: 'Real-time', Connectivity: 'RS485 / Wi-Fi', Use: 'Zero-export control' } },
  { id: 'a3', category: 'Accessories', name: 'DC/AC Protection Box', icon: 'ShieldCheck', badge: null, specs: { Includes: 'SPD, breakers, fuses', Rating: 'IP65', Standard: 'IEC compliant', Use: 'All systems' } },
  { id: 'a4', category: 'Accessories', name: 'Solar Pump VFD Drive', icon: 'Droplets', badge: 'Agri', specs: { Range: '2.2 – 75 kW', Input: 'Solar + grid', Feature: 'Dry-run protection', Use: 'Tube wells' } },
];

export const projects = [
  { id: 1, title: 'Modern Family Home', location: 'DHA, Lahore', category: 'Residential', size: '10 kW', year: 2025, savings: 'Rs 38,000/month', image: 'project-family-home', description: 'An 18-panel N-type system with net metering. The family went from a Rs 42,000 summer bill to under Rs 4,000.' },
  { id: 2, title: 'Textile Factory Rooftop', location: 'Faisalabad', category: 'Commercial', size: '500 kW', year: 2025, savings: 'Rs 4.2M/month', image: 'project-factory', description: 'Over 850 panels across three factory sheds, cutting daytime grid consumption by 70%.' },
  { id: 3, title: 'Citrus Orchard Tube Well', location: 'Sargodha', category: 'Agricultural', size: '25 kW', year: 2024, savings: 'Rs 95,000/month', image: 'project-orchard', description: 'A solar VFD pumping system replaced a diesel generator, irrigating 40 acres every day.' },
  { id: 4, title: 'Hybrid Villa with Backup', location: 'Bahria Town, Islamabad', category: 'Residential', size: '15 kW', year: 2025, savings: 'Rs 52,000/month', image: 'project-villa', description: 'A 15 kW hybrid system with 15 kWh of lithium storage that keeps the whole home running through outages.' },
  { id: 5, title: 'Private School Campus', location: 'Multan', category: 'Commercial', size: '120 kW', year: 2024, savings: 'Rs 980,000/month', image: 'project-school', description: 'Solar-powered classrooms and labs, with an interactive energy dashboard installed in the main hall.' },
  { id: 6, title: 'Dairy Farm Energy', location: 'Okara', category: 'Agricultural', size: '40 kW', year: 2025, savings: 'Rs 160,000/month', image: 'project-dairy', description: 'Ground-mounted array powering milk chillers, fans and a water pump for 300 cattle.' },
  { id: 7, title: 'Townhouse Starter System', location: 'Gulberg, Lahore', category: 'Residential', size: '5 kW', year: 2024, savings: 'Rs 21,000/month', image: 'project-townhouse', description: 'A compact 9-panel system on a small roof, designed carefully around a water tank and stairwell.' },
  { id: 8, title: 'Hospital Critical Backup', location: 'Rawalpindi', category: 'Commercial', size: '80 kW', year: 2025, savings: 'Rs 640,000/month', image: 'project-hospital', description: 'Solar plus 100 kWh of storage keeps operating theatres and ICU equipment powered at all times.' },
  { id: 9, title: 'Wheat Farm Irrigation', location: 'Bahawalpur', category: 'Agricultural', size: '30 kW', year: 2023, savings: 'Rs 110,000/month', image: 'project-wheat', description: 'A solar tube well delivering 1,500 litres per minute with no fuel costs or grid dependency.' },
];

export const testimonials = [
  { name: 'Ahmed Raza', role: 'Homeowner, Lahore', rating: 5, text: 'My bill dropped from Rs 45,000 to almost nothing in summer. The team was punctual, clean and explained everything. Best investment I have made.' },
  { name: 'Sana Malik', role: 'School Principal, Multan', rating: 5, text: 'SunPeak handled our 120 kW project end to end, including net metering. Our savings now fund two new teachers every year.' },
  { name: 'Chaudhry Iqbal', role: 'Farmer, Sargodha', rating: 5, text: 'No more diesel, no more waiting for electricity. My tube well runs every sunny day and the system paid for itself in under two years.' },
  { name: 'Faisal Qureshi', role: 'Factory Owner, Faisalabad', rating: 5, text: 'Professional project management from start to finish. The ROI report they gave us was accurate to within 3% of actual results.' },
  { name: 'Hina Javed', role: 'Homeowner, Islamabad', rating: 5, text: 'Load-shedding used to ruin our evenings. With the hybrid battery system we did not even notice the last outage. Highly recommended.' },
  { name: 'Dr. Usman Ali', role: 'Clinic Owner, Rawalpindi', rating: 5, text: 'Their after-sales service is outstanding. When an inverter fault appeared, they replaced it under warranty within 24 hours.' },
];

export const team = [
  { name: 'Imran Tariq', role: 'Founder & CEO', bio: 'Electrical engineer with 15 years in renewable energy and a passion for making solar accessible.' },
  { name: 'Ayesha Khan', role: 'Head of Engineering', bio: 'Leads system design and quality control across every project we deliver.' },
  { name: 'Bilal Ahmed', role: 'Operations Manager', bio: 'Coordinates installation teams across 12 cities so every project is delivered on time.' },
  { name: 'Zara Hussain', role: 'Customer Success Lead', bio: 'Makes sure every customer feels supported from the first call to years after installation.' },
];

export const values = [
  { icon: 'ShieldCheck', title: 'Integrity', text: 'Honest advice, even when it means recommending a smaller system.' },
  { icon: 'Award', title: 'Quality', text: 'No shortcuts in materials, workmanship or safety, ever.' },
  { icon: 'Users', title: 'Customer first', text: 'We measure success by your savings and your satisfaction.' },
  { icon: 'Leaf', title: 'Sustainability', text: 'Every system we install makes the air a little cleaner for the next generation.' },
];

export const milestones = [
  { year: '2014', text: 'Founded in Lahore with a team of three engineers.' },
  { year: '2017', text: 'Completed our 500th residential installation.' },
  { year: '2019', text: 'Launched commercial and agricultural solar divisions.' },
  { year: '2022', text: 'Expanded to 12 cities and crossed 10 MW installed.' },
  { year: '2025', text: '2,500+ systems and 18 MW of clean power delivered.' },
];

export const faqs = [
  { category: 'General', q: 'How much can I save with solar?', a: 'Most of our residential customers reduce their electricity bills by 70–90%. Your exact savings depend on your consumption, system size and whether you use net metering. Try our savings calculator for a personalised estimate.' },
  { category: 'General', q: 'How long do solar panels last?', a: 'Quality panels last 25–30 years and come with a performance warranty guaranteeing at least 80–87% of original output after 25–30 years. Inverters typically last 10–15 years.' },
  { category: 'General', q: 'Does solar work on cloudy or rainy days?', a: 'Yes, but at reduced output (typically 10–30% of peak). Annual production estimates already account for seasonal weather, so your savings projections remain realistic.' },
  { category: 'Installation', q: 'How long does installation take?', a: 'Most residential systems are installed in 1–2 days. Commercial projects typically take 1–4 weeks depending on size. The whole process from survey to activation usually takes 2–3 weeks.' },
  { category: 'Installation', q: 'Will installation damage my roof?', a: 'No. We use engineered mounting structures with proper waterproofing at every anchor point. For concrete roofs we often use ballasted or chemical-anchor systems that avoid drilling through the slab.' },
  { category: 'Installation', q: 'How much roof space do I need?', a: 'Roughly 60–70 square feet per kW. A 10 kW system needs about 650 square feet of shade-free roof space.' },
  { category: 'Pricing & Finance', q: 'What is the payback period?', a: 'Residential systems typically pay back in 2.5–4 years, and commercial systems in 2–3 years. After that, the electricity is essentially free for the remaining 20+ years of system life.' },
  { category: 'Pricing & Finance', q: 'Do you offer installment plans?', a: 'Yes. We partner with leading banks offering solar financing with 0% markup options for up to 12 months and longer-term plans of up to 5 years. Ask our team for current offers.' },
  { category: 'Pricing & Finance', q: 'Are there any hidden costs?', a: 'No. Our quotes are itemised and include equipment, structure, cabling, protection, installation and commissioning. Net metering fees, if applicable, are shown as a separate line item.' },
  { category: 'Technical', q: 'What is the difference between on-grid and hybrid systems?', a: 'On-grid systems feed power to your home and the grid but switch off during outages for safety. Hybrid systems include batteries and keep running during outages, which is ideal if you face load-shedding.' },
  { category: 'Technical', q: 'What is net metering?', a: 'Net metering allows you to export surplus solar energy to the grid and receive credit on your bill. We handle the entire application and approval process for you.' },
  { category: 'Technical', q: 'How do I monitor my system?', a: 'Every system includes a mobile app that shows live generation, consumption, savings and system health. You will also receive alerts if anything needs attention.' },
  { category: 'Warranty & Support', q: 'What warranties do I get?', a: 'Panels: 12–15 year product and 25–30 year performance warranty. Inverters: 5–10 years. Batteries: 10 years. Installation workmanship: 10 years from SunPeak Solar.' },
  { category: 'Warranty & Support', q: 'How often do panels need cleaning?', a: 'We recommend cleaning every 2–4 weeks in dusty conditions. Our maintenance plans include professional cleaning and annual health inspections.' },
];

export const posts = [
  {
    slug: 'on-grid-vs-hybrid-solar',
    title: 'On-Grid vs Hybrid Solar: Which One Is Right for You?',
    excerpt: 'Load-shedding, net metering and budget all matter. Here is a simple guide to choosing the right system type for your home.',
    date: '2025-10-18',
    readTime: '6 min read',
    category: 'Guides',
    image: 'commercial-rooftop',
    content: [
      { type: 'p', text: 'One of the first decisions every solar buyer faces is whether to choose an on-grid system or a hybrid system with batteries. Both can dramatically cut your bills, but they behave very differently when the grid goes down.' },
      { type: 'h2', text: 'How on-grid systems work' },
      { type: 'p', text: 'An on-grid system powers your home during the day and exports any surplus to the grid through net metering. It is the most affordable option and has the fastest payback. However, for safety reasons it switches off automatically during a power outage.' },
      { type: 'h2', text: 'How hybrid systems work' },
      { type: 'p', text: 'A hybrid system adds a lithium battery bank. Extra solar energy charges the batteries, which then power your home in the evening or during outages. Switchover is instant, so your Wi-Fi, fans and lights never flicker.' },
      { type: 'h2', text: 'Which should you choose?' },
      { type: 'list', items: ['Choose on-grid if outages are rare and you want maximum savings per rupee.', 'Choose hybrid if you face regular load-shedding or work from home.', 'Not sure? Start on-grid with a hybrid-ready inverter and add batteries later.'] },
      { type: 'p', text: 'Our engineers can review your bill and outage pattern to recommend the best fit, free of charge.' },
    ],
  },
  {
    slug: 'how-net-metering-works',
    title: 'Net Metering Explained in Plain Language',
    excerpt: 'Your meter can actually run backwards. Learn how net metering turns your roof into a small power plant that earns credit.',
    date: '2025-09-02',
    readTime: '5 min read',
    category: 'Net Metering',
    image: 'project-townhouse',
    content: [
      { type: 'p', text: 'Net metering is an arrangement with your electricity distribution company that lets you send extra solar electricity back to the grid. In return, those exported units are credited against the units you import at night.' },
      { type: 'h2', text: 'The bidirectional meter' },
      { type: 'p', text: 'Once approved, your regular meter is replaced with a green bidirectional meter that records both imported and exported units. Your bill is calculated on the net difference.' },
      { type: 'h2', text: 'The approval process' },
      { type: 'list', items: ['Submit an application with system design and equipment documents.', 'Site inspection by the distribution company.', 'Approval and agreement signing.', 'Installation of the bidirectional meter.'] },
      { type: 'p', text: 'The process can feel complicated, which is why our documentation team handles every step on your behalf.' },
    ],
  },
  {
    slug: 'keep-solar-panels-efficient',
    title: '7 Simple Ways to Keep Your Solar Panels at Peak Efficiency',
    excerpt: 'Dust, shade and loose connections quietly eat into your savings. These easy habits keep your system producing at its best.',
    date: '2025-07-21',
    readTime: '4 min read',
    category: 'Maintenance',
    image: 'panel-closeup',
    content: [
      { type: 'p', text: 'Solar systems need very little maintenance, but a few simple habits can make a big difference to your long-term savings.' },
      { type: 'list', items: ['Clean panels every 2–4 weeks, early morning or evening.', 'Use soft water and a soft brush. Never use detergents or pressure washers.', 'Check your monitoring app weekly for sudden drops.', 'Trim trees that start to cast shade.', 'Keep the inverter area ventilated and dust-free.', 'Book an annual professional inspection.', 'Never walk on panels; micro-cracks reduce output.'] },
      { type: 'p', text: 'Our maintenance plans cover all of this, including thermal imaging to spot hidden problems before they cost you money.' },
    ],
  },
  {
    slug: 'solar-tube-wells-for-farmers',
    title: 'Solar Tube Wells: A Game Changer for Farmers',
    excerpt: 'Diesel prices keep rising. Solar pumping systems give farmers free, reliable irrigation every sunny day.',
    date: '2025-05-10',
    readTime: '5 min read',
    category: 'Agriculture',
    image: 'solar-well',
    content: [
      { type: 'p', text: 'For many farmers, running a tube well on diesel is one of the biggest monthly expenses. Solar pumping systems change that equation completely.' },
      { type: 'h2', text: 'How it works' },
      { type: 'p', text: 'Solar panels power a VFD (variable frequency drive) that runs your existing pump motor. As sunlight increases, the drive speeds up the pump, delivering the most water when crops need it most.' },
      { type: 'h2', text: 'Key benefits' },
      { type: 'list', items: ['Zero fuel cost and no generator maintenance.', 'No dependence on grid supply schedules.', 'Payback typically within 1.5–2.5 years.', 'Systems last 25+ years with minimal upkeep.'] },
      { type: 'p', text: 'Talk to our agricultural team for a free bore and water-requirement assessment.' },
    ],
  },
];
