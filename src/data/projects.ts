export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  category: 'madera' | 'acero' | 'pasamanos' | 'cristal' | 'forja';
  categoryLabel: {
    es: string;
    en: string;
  };
  image: string;
  description: {
    es: string;
    en: string;
  };
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: {
      es: "Baranda de Madera de Roble Integrada",
      en: "Integrated Oak Wood Railing"
    },
    category: "madera",
    categoryLabel: {
      es: "Madera Noble",
      en: "Hardwood"
    },
    image: "/assets/A5.jpg",
    description: {
      es: "Listones verticales en roble natural combinados con armario bajo escalera e iluminación LED cálida.",
      en: "Vertical natural oak slats combined with under-stair storage and warm LED lighting."
    },
    featured: true
  },
  {
    id: "proj-2",
    title: {
      es: "Pasamanos de Pared en Acero Inoxidable",
      en: "Stainless Steel Wall Handrail"
    },
    category: "pasamanos",
    categoryLabel: {
      es: "Pasamanos de Pared",
      en: "Wall Handrail"
    },
    image: "/assets/A52.jpg",
    description: {
      es: "Pasamanos cilíndrico de acero inox pulido con soportes de anclaje reforzados para pared.",
      en: "Polished cylindrical stainless steel handrail with heavy-duty wall brackets."
    },
    featured: true
  },
  {
    id: "proj-3",
    title: {
      es: "Pasamanos en Acero Lacado Mate",
      en: "Matte Lacquered Steel Handrail"
    },
    category: "acero",
    categoryLabel: {
      es: "Acero Lacado",
      en: "Lacquered Steel"
    },
    image: "/assets/A52.jpg",
    description: {
      es: "Acabado termoendurecido al horno en color negro antracita táctil de alta resistencia.",
      en: "Oven-baked thermoset finish in tactile anthracite black with high durability."
    },
    featured: true
  },
  {
    id: "proj-4",
    title: {
      es: "Barandas y Pasamanos de Colección",
      en: "Collection Railings & Handrails"
    },
    category: "madera",
    categoryLabel: {
      es: "Madera y Acero",
      en: "Wood & Steel"
    },
    image: "/assets/VINILOS.jpg",
    description: {
      es: "Variedad de pasamanos circulares y rectangulares en Roble, Pino y Haya con combinaciones en metal.",
      en: "Selection of circular and rectangular handrails in Oak, Pine, and Beech combined with metal."
    },
    featured: true
  },
  {
    id: "proj-5",
    title: {
      es: "Pasamanos en Madera de Roble Macizo",
      en: "Solid Oak Wood Handrail"
    },
    category: "madera",
    categoryLabel: {
      es: "Roble Macizo",
      en: "Solid Oak"
    },
    image: "/assets/A52.jpg",
    description: {
      es: "Perfil rectangular con cantos suavizados y barniz poliuretano satinado para tráfico continuo.",
      en: "Rectangular profile with softened edges and satin polyurethane varnish for high traffic."
    },
    featured: false
  },
  {
    id: "proj-6",
    title: {
      es: "Baranda de Cristal y Listones Modernos",
      en: "Modern Glass & Wooden Slats Railing"
    },
    category: "cristal",
    categoryLabel: {
      es: "Cristal Templado",
      en: "Tempered Glass"
    },
    image: "/assets/A5.jpg",
    description: {
      es: "Estructura panorámica con cristal de seguridad laminado para máxima entrada de luz en hueco de escalera.",
      en: "Panoramic structure with laminated safety glass for maximum light in stairwell."
    },
    featured: false
  }
];
