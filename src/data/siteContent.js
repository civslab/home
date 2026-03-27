const legacyAsset = (fileName) => `${import.meta.env.BASE_URL}assets/legacy/${fileName}`;
const teamAsset = (fileName) => `${import.meta.env.BASE_URL}assets/legacy/team/${fileName}`;

export const siteAssets = {
  heroCollage: [
    {
      src: legacyAsset("4.jpeg"),
      alt: "Participant completing an inclined-surface movement task in the lab.",
      position: "56% 44%",
    },
    {
      src: legacyAsset("2.jpeg"),
      alt: "Participant instrumented for fatigue and movement analysis.",
      position: "50% 28%",
    },
    {
      src: legacyAsset("1.jpeg"),
      alt: "Wearable sensing equipment prepared for lab studies.",
      position: "50% 50%",
    },
    {
      src: legacyAsset("3.jpeg"),
      alt: "Sensing and monitoring devices used in CIVS Lab studies.",
      position: "50% 50%",
    },
  ],
  teamCover: legacyAsset("lab-home.jpg"),
  researchBanner: legacyAsset("research-banner.jpg"),
  constructionEducation: legacyAsset("construction-education.jpg"),
  roofingMusculoskeletal: legacyAsset("roofing-musculoskeletal.png"),
  vrTraining: legacyAsset("vr-training.jpg"),
  cognitiveDecision: legacyAsset("cognitive-decision.jpeg"),
  disputeBanner: legacyAsset("dispute-banner.jpg"),
  technologyBanner: legacyAsset("technology-banner.jpg"),
  safetyBanner: legacyAsset("safety-banner.jpg"),
  productivityBanner: legacyAsset("productivity-banner.png"),
  krishnaPortrait: teamAsset("krishna-kisi.jpg"),
  rujanPortrait: teamAsset("rujan-kayastha.png"),
  sujanPortrait: teamAsset("sujan-acharya.jpg"),
  bikeshPortrait: teamAsset("bikesh-suwal.jpeg"),
  shreePortrait: teamAsset("shree-gnanasekar.jpg"),
  alishanPortrait: teamAsset("alishan.png.jpeg"),
  davidPortrait: teamAsset("david-canas-vanegas.jpg"),
  tarekPortrait: teamAsset("tarek-mahmud.jpg"),
  omarPortrait: teamAsset("omar-snosi.png"),
  sabrinPortrait: teamAsset("sabrin-gautam.jpg"),
  abhinayaPortrait: teamAsset("abhinaya-narapusetty.png"),
  ayushPortrait: teamAsset("ayush-pokharel.jpg"),
  prashantPortrait: teamAsset("prashant-panta.png"),
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#publications", label: "Publications" },
  { href: "#teaching", label: "Teaching" },
  { href: "#contact", label: "Contact" },
];

export const aboutContent = {
  eyebrow: "About",
  title: "DOTS Research at Texas State University",
  intro:
    "Welcome to DOTS Research at Texas State University. DOTS stands for dispute resolution, optimal productivity, technology in training and education, and safety in mining and construction.",
  biography:
    "Dr. Krishna Kisi works with collaborators across the globe and serves students in construction science and management through research, teaching, and workforce-focused innovation.",
  image: siteAssets.krishnaPortrait,
  imageAlt: "Dr. Krishna Kisi standing on the Texas State University campus.",
  imageFit: "cover",
  imagePosition: "82% 24%",
  credentials: [
    {
      label: "Doctoral Degree",
      value: "Engineering, University of Nebraska-Lincoln",
    },
    {
      label: "Master's Degree",
      value: "Construction Management, University of Nevada, Las Vegas",
    },
    {
      label: "Bachelor's Degree",
      value: "Civil Engineering, Tribhuvan University, Nepal",
    },
  ],
  pillars: [
    {
      code: "D",
      title: "Dispute Resolution",
      description:
        "Analyzing claims, contract language, and conflict pathways in construction and engineering.",
    },
    {
      code: "O",
      title: "Optimal Productivity",
      description:
        "Improving decision making, work performance, and project outcomes in complex field settings.",
    },
    {
      code: "T",
      title: "Technology in Training",
      description:
        "Using AR, VR, MR, and other smart tools to support learning, safety, and education.",
    },
    {
      code: "S",
      title: "Safety in Industry",
      description:
        "Advancing worker health and safety in construction, mining, and related environments.",
    },
  ],
};

export const researchInterests = [
  {
    title: "STEM Workforce Resiliency",
    badge: "Research Interest",
    description:
      "Building stronger pathways into construction and engineering through resilient training systems, mentorship, and workforce development.",
    image: siteAssets.teamCover,
    imageAlt:
      "CIVS Lab team photo used to represent STEM workforce resiliency and mentoring.",
    imageFit: "cover",
    imagePosition: "78% 26%",
  },
  {
    title: "Health and Safety",
    badge: "Research Interest",
    description:
      "Improving safety in construction and general industries through training, field research, and evidence-based prevention strategies.",
    image: siteAssets.safetyBanner,
    imageAlt:
      "Safety research banner from the previous CIVS Lab website export.",
    imageFit: "cover",
    imagePosition: "50% 58%",
  },
  {
    title: "AI and Human Performance",
    badge: "Research Interest",
    description:
      "Studying how data, sensing, and performance analysis can support better decision making and safer work environments.",
    image: siteAssets.researchBanner,
    imageAlt:
      "Wide CIVS Lab research banner used to represent AI and human performance work.",
    imageFit: "cover",
    imagePosition: "78% 24%",
  },
  {
    title: "Cognitive and Physical Fatigue",
    badge: "Research Interest",
    description:
      "Examining fatigue, strain, and physiological signals in high-risk work to improve worker well-being and performance.",
    image: siteAssets.roofingMusculoskeletal,
    imageAlt:
      "Wearable-sensor research image used for cognitive and physical fatigue studies.",
    imageFit: "cover",
    imagePosition: "50% 40%",
  },
  {
    title: "Dispute Resolution",
    badge: "Research Interest",
    description:
      "Analyzing contract clauses, claims, negligence, and other conflict mechanisms in engineering and construction.",
    image: siteAssets.disputeBanner,
    imageAlt:
      "Dispute resolution project banner from the previous CIVS Lab site.",
    imageFit: "cover",
    imagePosition: "54% 52%",
  },
  {
    title: "Smart Technologies",
    badge: "Research Interest",
    description:
      "Exploring AR, VR, MR, and other smart technologies for training, education, and improved operational outcomes.",
    image: siteAssets.technologyBanner,
    imageAlt:
      "Technology in training and education banner from the previous CIVS Lab site.",
    imageFit: "cover",
    imagePosition: "50% 50%",
  },
];

export const projects = [
  {
    title: "Enhancing Construction Education Through Augmented Reality",
    sponsor: "Supported by Quanta Services",
    tag: "Active",
    description:
      "A pilot AR project helping students understand how electrical hazards influence construction contracts, risk management, and ethical decision making.",
    image: siteAssets.constructionEducation,
    imageAlt:
      "Augmented reality construction education image from the previous CIVS Lab site.",
    imageFit: "cover",
    imagePosition: "50% 42%",
  },
  {
    title: "Work-Related Musculoskeletal Disorder",
    sponsor: "Wearable Sensor Research",
    tag: "Active",
    description:
      "Analyzing muscle fatigue and injury risks among roofers with IMU and EMG sensing to improve ergonomic safety strategies.",
    image: siteAssets.roofingMusculoskeletal,
    imageAlt:
      "Wearable sensor image associated with work-related musculoskeletal disorder research.",
    imageFit: "cover",
    imagePosition: "50% 42%",
  },
  {
    title: "Safety Awareness Learning and Training through VR",
    sponsor: "Immersive Safety Training",
    tag: "Active",
    description:
      "Using virtual reality to strengthen hazard recognition and response in a safe, controlled environment.",
    image: siteAssets.vrTraining,
    imageAlt:
      "VR safety training image from the previous CIVS Lab research page.",
    imageFit: "cover",
    imagePosition: "50% 40%",
  },
  {
    title: "Decision Making Cognitive Research",
    sponsor: "Human Performance",
    tag: "Research",
    description:
      "Investigating judgment, risk assessment, and problem solving under high-stress or complex work conditions.",
    image: siteAssets.cognitiveDecision,
    imageAlt:
      "Cognitive decision-making image from the previous CIVS Lab research page.",
    imageFit: "cover",
    imagePosition: "58% 52%",
  },
  {
    title: "Dispute Resolution in Construction and Engineering",
    sponsor: "Contracts and Claims",
    tag: "Research",
    description:
      "Studying contract clauses, payment disputes, backcharge claims, negligence, and related documents in construction and engineering.",
    image: siteAssets.disputeBanner,
    imageAlt:
      "Dispute resolution banner from the previous CIVS Lab project page.",
    imageFit: "cover",
    imagePosition: "54% 52%",
  },
  {
    title: "Technology in Training and Education",
    sponsor: "AR / VR / MR Learning",
    tag: "Research",
    description:
      "Developing VR games to reduce math hesitancy for STEM majors and AR/VR/MR modules for training and education.",
    image: siteAssets.technologyBanner,
    imageAlt:
      "Technology in training and education banner from the previous CIVS Lab project page.",
    imageFit: "cover",
    imagePosition: "50% 50%",
  },
  {
    title: "Optimal Productivity, Synthesis, and Simulation",
    sponsor: "Safety Training Grants",
    tag: "Past Project",
    description:
      "Creating safety training materials and applied research tied to workplace safety, infectious disease response, and fall prevention grants.",
    image: siteAssets.productivityBanner,
    imageAlt:
      "Optimal productivity, synthesis, and simulation banner from the previous CIVS Lab project page.",
    imageFit: "cover",
    imagePosition: "40% 52%",
  },
];

export const researchTeam = {
  lead: {
    level: "01",
    title: "Professor",
    name: "Dr. Krishna Kisi",
    role: "Professor and Principal Investigator",
    description:
      "Leads the CIVS Lab research agenda across construction informatics, visualization, safety, and human performance.",
    image: siteAssets.krishnaPortrait,
    imageAlt: "Dr. Krishna Kisi on campus at Texas State University.",
    imageFit: "cover",
    imagePosition: "82% 24%",
  },
  groups: [
    {
      level: "02",
      title: "Doctoral Research",
      description:
        "Advanced doctoral work supporting the lab's core safety, technology, and human-performance agenda.",
      members: [
        {
          name: "Rujan Kayastha",
          role: "PhD Candidate",
          image: siteAssets.rujanPortrait,
          imageAlt: "Portrait of Rujan Kayastha.",
        },
        {
          name: "Sujan Acharya",
          role: "PhD Scholar",
          image: siteAssets.sujanPortrait,
          imageAlt: "Portrait of Sujan Acharya.",
        },
      ],
    },
    {
      level: "03",
      title: "Graduate Researchers",
      description:
        "Graduate-level research support across experimentation, data analysis, and project development.",
      members: [
        {
          name: "Bikesh Suwal",
          role: "Graduate Researcher",
          image: siteAssets.bikeshPortrait,
          imageAlt: "Portrait of Bikesh Suwal.",
        },
        {
          name: "Shree G. Gnanasekar",
          role: "Graduate Researcher",
          image: siteAssets.shreePortrait,
          imageAlt: "Portrait of Shree G. Gnanasekar.",
        },
      ],
    },
    {
      level: "04",
      title: "Graduate Student Support",
      description:
        "Applied project support that helps keep the lab's day-to-day research work moving.",
      members: [
        {
          name: "Alishan Bhujel",
          role: "Graduate Student Worker",
          image: siteAssets.alishanPortrait,
          imageAlt: "Portrait of Alishan Bhujel.",
        },
      ],
    },
    {
      level: "05",
      title: "Alumni Network",
      layout: "wide",
      collapsible: true,
      defaultOpen: false,
      description:
        "Former CIVS Lab contributors whose work continues to shape the wider research network.",
      members: [
        {
          name: "David Canas Vanegas",
          role: "Alumni Network",
          image: siteAssets.davidPortrait,
          imageAlt: "Portrait of David Canas Vanegas.",
        },
        {
          name: "Dr. Tarek Salah Uddin Mahmud",
          role: "Former Postdoctoral Researcher",
          note: "Currently Assistant Professor, Texas A&M University-Kingsville.",
          image: siteAssets.tarekPortrait,
          imageAlt: "Portrait of Dr. Tarek Salah Uddin Mahmud.",
        },
        {
          name: "Omar Snosi",
          role: "Former Graduate Research Assistant",
          note: "Currently PhD Student, Texas A&M University-College Station.",
          image: siteAssets.omarPortrait,
          imageAlt: "Portrait of Omar Snosi.",
        },
        {
          name: "Sabrin Raj Gautam",
          role: "Former Graduate Research Assistant",
          image: siteAssets.sabrinPortrait,
          imageAlt: "Portrait of Sabrin Raj Gautam.",
        },
        {
          name: "Abhinaya Narapusetty",
          role: "Former Graduate Research Assistant",
          image: siteAssets.abhinayaPortrait,
          imageAlt: "Portrait of Abhinaya Narapusetty.",
        },
        {
          name: "Ayush Pokharel",
          role: "Former Graduate Research Assistant",
          image: siteAssets.ayushPortrait,
          imageAlt: "Portrait of Ayush Pokharel.",
        },
        {
          name: "Prashant Panta",
          role: "Former Undergraduate Research Assistant",
          image: siteAssets.prashantPortrait,
          imageAlt: "Portrait of Prashant Panta.",
        },
      ],
    },
  ],
  coverImage: siteAssets.teamCover,
  coverAlt: "CIVS Lab group photo from the previous website export.",
};

export const courses = [
  { code: "EGT 520", name: "Project & Process Management", type: "Graduate" },
  { code: "EGT 690", name: "Capstone Project", type: "Graduate" },
  { code: "CSM 5369", name: "Construction Dispute Resolution", type: "Graduate" },
  { code: "CM 595", name: "Thesis", type: "Graduate" },
  { code: "CET 454", name: "Construction Estimating", type: "Undergraduate" },
  { code: "CET 480", name: "Construction Planning", type: "Undergraduate" },
  { code: "CET 256", name: "Bituminous, Concrete & Soils", type: "Undergraduate" },
  { code: "CET 360", name: "Construction Management", type: "Undergraduate" },
  { code: "CM 465", name: "Internship", type: "Undergraduate" },
  { code: "CM 485", name: "AIC Exam Review", type: "Undergraduate" },
  { code: "CSM 4369", name: "Contracts, Liability & Ethics", type: "Undergraduate" },
  { code: "CM 145", name: "CAD and BIM", type: "Undergraduate" },
];
