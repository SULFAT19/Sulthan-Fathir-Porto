export type Language = 'en' | 'id' | 'ar';

export interface PortfolioData {
  profile: {
    name: string;
    subname: string;
    description: string;
    photo: string;
    bio: {
      dob: string;
      location: string;
      socials: {
        email: string;
        instagram: string;
        linkedin: string;
      };
    };
  };
  education: {
    formal: Array<{
      institution: string;
      logo: string;
      specialization: string;
      period: string;
    }>;
    nonFormal: Array<{
      institution: string;
      logo: string;
      specialization: string;
      period: string;
    }>;
  };
  interests: string[];
  skills: string[];
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
  brandName: string;
  initials: string;
  labels: {
    dob: string;
    location: string;
    education: string;
    formal: string;
    nonFormal: string;
    interests: string;
    skills: string;
    experience: string;
    contactMe: string;
    specialization: string;
  };
}

export const portfolioData: Record<Language, PortfolioData> = {
  en: {
    profile: {
      name: "SULTHAN FATHIR",
      subname: "Language Enthusiasts",
      description: "Pushing the boundaries of digital experiences through minimal design and robust code. I specialize in building high-performance web applications with a focus on aesthetics and user experience.",
      photo: "https://photos.app.goo.gl/SvHrmpXdvPYa9UyZ6",
      bio: {
        dob: "November 19, 2007",
        location: "Jakarta, Indonesia",
        socials: {
          email: "mailto:hellohi.sulthan@gmail.com",
          instagram: "https://instagram.com/s.ulthan19",
          linkedin: "https://www.linkedin.com/in/sulthan-fathir-al-hafizh/",
        }
      }
    },
    education: {
      formal: [
        {
          institution: "SMA IT Assyifa Boarding School",
          logo: "https://upload.wikimedia.org/wikipedia/id/thumb/0/09/Logo_Universitas_Indonesia.png/200px-Logo_Universitas_Indonesia.png",
          specialization: "Science & Technology",
          period: "2023 - Now"
        }
      ],
      nonFormal: [
        {
          institution: "Great Learning Academy",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_\"G\"_logo.svg/1200px-Google_\"G\"_logo.svg.png",
          specialization: "English Basic For Professional Certification",
          period: "2023"
        }
      ]
    },
    interests: ["Artificial Intelligence", "Generative Art", "Minimalism", "Photography", "Traveling"],
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Three.js"],
    experience: [
      {
        company: "Nebula Tech",
        role: "Senior Frontend Developer",
        period: "2024 - Present",
        description: "Leading the development of the core interface for the Nebula AI platform."
      }
    ],
    brandName: "SULTHAN",
    initials: "SF",
    labels: {
      dob: "Date of Birth",
      location: "Location",
      education: "Education",
      formal: "Formal Education",
      nonFormal: "Certifications",
      interests: "Interests",
      skills: "Skills",
      experience: "Experience",
      contactMe: "Contact Me",
      specialization: "Specialization"
    }
  },
  id: {
    profile: {
      name: "ALEX RIVERA",
      subname: "Teknolog Kreatif",
      description: "Mendorong batasan pengalaman digital melalui desain minimalis dan kode yang kuat. Saya ahli dalam membangun aplikasi web berperforma tinggi dengan fokus pada estetika dan pengalaman pengguna.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      bio: {
        dob: "24 Agustus 2002",
        location: "Jakarta, Indonesia",
        socials: {
          email: "alex.rivera@example.com",
          instagram: "https://instagram.com/alexrivera",
          linkedin: "https://linkedin.com/in/alexrivera",
        }
      }
    },
    education: {
      formal: [
        {
          institution: "Universitas Indonesia",
          logo: "https://upload.wikimedia.org/wikipedia/id/thumb/0/09/Logo_Universitas_Indonesia.png/200px-Logo_Universitas_Indonesia.png",
          specialization: "Ilmu Komputer",
          period: "2020 - 2024"
        }
      ],
      nonFormal: [
        {
          institution: "Google UX Design",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_\"G\"_logo.svg/1200px-Google_\"G\"_logo.svg.png",
          specialization: "Sertifikat Profesional",
          period: "2023"
        }
      ]
    },
    interests: ["Kecerdasan Buatan", "Seni Generatif", "Minimalisme", "Fotografi", "Wisata"],
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Three.js"],
    experience: [
      {
        company: "Nebula Tech",
        role: "Senior Frontend Developer",
        period: "2024 - Sekarang",
        description: "Memimpin pengembangan antarmuka utama untuk platform Nebula AI."
      }
    ],
    brandName: "AETHER",
    initials: "SF",
    labels: {
      dob: "Tanggal Lahir",
      location: "Tempat Tinggal",
      education: "Pendidikan",
      formal: "Pendidikan Formal",
      nonFormal: "Sertifikasi",
      interests: "Minat",
      skills: "Keahlian",
      experience: "Pengalaman",
      contactMe: "Hubungi Saya",
      specialization: "Spesialisasi"
    }
  },
  ar: {
    profile: {
      name: "أليكس ريفيرا",
      subname: "تقني مبدع",
      description: "دفع حدود التجارب الرقمية من خلال التصميم البسيط والكود القوي. أنا متخصص في بناء تطبيقات ويب عالية الإداء مع التركيز على الجماليات وتجربة المستخدم.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      bio: {
        dob: "24 أغسطس 2002",
        location: "جاكرتا، إندونيسيا",
        socials: {
          email: "alex.rivera@example.com",
          instagram: "https://instagram.com/alexrivera",
          linkedin: "https://linkedin.com/in/alexrivera",
        }
      }
    },
    education: {
      formal: [
        {
          institution: "جامعة إندونيسيا",
          logo: "https://upload.wikimedia.org/wikipedia/id/thumb/0/09/Logo_Universitas_Indonesia.png/200px-Logo_Universitas_Indonesia.png",
          specialization: "علوم الحاسب",
          period: "2020 - 2024"
        }
      ],
      nonFormal: [
        {
          institution: "جوجل لتصميم تجربة المستخدم",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_\"G\"_logo.svg/1200px-Google_\"G\"_logo.svg.png",
          specialization: "شهادة احترافية",
          period: "2023"
        }
      ]
    },
    interests: ["الذكاء الاصطناعي", "الفن التوليدي", "البساطة", "التصوير الفوتوغرافي", "السفر"],
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Three.js"],
    experience: [
      {
        company: "نبيولا تك",
        role: "مطور واجهة أمامية أول",
        period: "2024 - الآن",
        description: "قيادة تطوير الواجهة الأساسية لمنصة نبيولا للذكاء الاصطناعي."
      }
    ],
    brandName: "أثير",
    initials: "SF",
    labels: {
      dob: "تاريخ الميلاد",
      location: "مكان الإقامة",
      education: "التعليم",
      formal: "التعليم الرسمي",
      nonFormal: "الشهادات",
      interests: "الاهتمامات",
      skills: "المهارات",
      experience: "الخبرة",
      contactMe: "اتصل بي",
      specialization: "التخصص"
    }
  }
};
