export const quotationFoundations = {
  0: {
    id: "danton_foundation",
    letterRef: "A",
    quotation_type: "foundation",

    part_1: {
      volume: "08 m³",
      material_cost: "2.400.000",
      labor: "1.000.000",
      total: "3.400.000",
      title: {
        fr: "Fondation, Poutres, Poteaux",
        en: "Foundation, Beams, Pillars",
      },
      materials: {
        needOne: {
          qty: { fr: "- 27 poteaux", en: "- 27 pillars" },
          dimensions: "2*20*20",
          units: "(m*cm*cm)",
        },
        needTwo: {
          qty: { fr: "- 09 longrines", en: "- 09 beams" },
          dimensions: "14*20*20",
          units: "(m*cm*cm)",
        },
        needThree: {
          fr: "- Implantation, fouilles, feraillage + entiereté des matériaux ",
          en: "- Implantation, Digging, Irons Framework, + entire materials",
        },
      },
      delivery: {
        fr: "02 Semaines",
        en: "02 Weeks",
      },
    },

    part_2: {
      volume: "10 m³",
      material_cost: "3.500.000",
      labor: "2.500.000",
      total: "6.000.000",
      title: {
        fr: "Elevation , Chainages",
        en: "Mound , Chaining",
      },
      materials: {
        needOne: {
          fr: "- Coffrage, Coulage, Elevation,",
          en: "- Formwork, Pouring, Mound,",
        },
        needTwo: {
          fr: "- Fers, Ciments, Parpaings, ...",
          en: "- Irons, Cements, Bricks, ...",
        },
      },
      delivery: {
        fr: "03 Semaines",
        en: "03 Weeks",
      },
    },
  },

  1: {
    id: "merry_foundation",
    letterRef: "A",
    quotation_type: "foundation",
    part_1: {
      volume: "04 m³",
      material_cost: "1.800.000",
      labor: "700.000",
      total: "2.500.000",
      title: {
        fr: "Fondation, Poutres, Poteaux",
        en: "Foundation, Beams, Pillars",
      },
      materials: {
        needOne: {
          qty: { fr: "- 20 poteaux", en: "- 20 pillars" },
          dimensions: "2*15*15",
          units: "(m*cm*cm)",
        },
        needTwo: {
          qty: { fr: "- 09 longrines", en: "- 09 beams" },
          dimensions: "11*15*15",
          units: "(m*cm*cm)",
        },
        needThree: {
          fr: "- Implantation, fouilles, feraillage + entiereté des matériaux ",
          en: "- Implantation, Digging, Irons Framework, + entire materials",
        },
      },
      delivery: {
        fr: "12 Jours",
        en: "12 Days",
      },
    },

    part_2: {
      volume: "6 m³",
      material_cost: "2.400.000",
      labor: "1.000.000",
      total: "3.400.000",
      title: {
        fr: "Elevation , Chainages",
        en: "Mound , Chaining",
      },
      materials: {
        needOne: {
          fr: "- Coffrage, Coulage, Elevation,",
          en: "- Formwork, Pouring, Mound,",
        },
        needTwo: {
          fr: "- Fers, Ciments, Parpaings, ...",
          en: "- Irons, Cements, Bricks, ...",
        },
      },
      delivery: {
        fr: "03 Semaines",
        en: "03 Weeks",
      },
    },
  },
  2: {
    id: "dexter_foundation",
    letterRef: "A",
    quotation_type: "foundation",
    floor_1: {
      part_1: {
        volume: "04 m³",
        material_cost: "3.500.000",
        labor: "1.500.000",
        total: "5.000.000",
        title: {
          fr: "Fondation, Poutres, Poteaux",
          en: "Foundation, Beams, Pillars",
        },
        materials: {
          needOne: {
            qty: { fr: "- 25 semelles", en: "- 25 soles" },
            dimensions: "50*50*40",
            units: "(m*cm*cm)",
          },
          needTwo: {
            qty: { fr: "- 25 poteaux", en: "- 25 pillars" },
            dimensions: "2*15*35",
            units: "(m*cm*cm)",
          },
          needThree: {
            qty: { fr: "- 10 longrines", en: "- 10 beams" },
            dimensions: "13*15*35",
            units: "(m*cm*cm)",
          },
        },
        delivery: {
          fr: "02 Semaines",
          en: "02 Weeks",
        },
      },

      part_2: {
        volume: "13 m³",
        material_cost: "3.900.000",
        labor: "1.500.000",
        total: "5.400.000",
        title: {
          fr: "Elevation , Chainages",
          en: "Mound , Chaining",
        },
        materials: {
          needOne: {
            fr: "- Coffrage, Coulage, Elevation,",
            en: "- Formwork, Pouring, Mound,",
          },
          needTwo: {
            fr: "- Fers, Ciments, Parpaings, ...",
            en: "- Irons, Cements, Bricks, ...",
          },
        },
        delivery: {
          fr: "02 Semaines",
          en: "02 Weeks",
        },
      },
    },

    floor_2: {
      part_1: {
        volume: "16 m³",
        material_cost: "4.000.000",
        labor: "1.000.000",
        total: "5.000.000",
        title: {
          fr: "Dalle",
          en: "Paving Stone",
        },
        materials: {
          needOne: {
            fr: "- Fers, hourdis, Nervures",
            en: "- Irons, Slabs, Nervures",
          },
          needTwo: {
            fr: "- Sables, Gravier, Ciments",
            en: "- Sands, Stones, Cements",
          },
          needThree: {
            fr: "Planches, lattes, + materiaux supplementaires",
            en: "- Planks, laths, + extra materials",
          },
        },
        delivery: {
          fr: "01 Semaine",
          en: "01 Week",
        },
      },

      part_2: {
        volume: "13 m³",
        material_cost: "3.900.000",
        labor: "1.500.000",
        total: "5.400.000",
        title: {
          fr: "Elevation-Chainage Etage 1",
          en: "Mound-Chaining first floor",
        },
        materials: {
          needOne: {
            fr: "- Coffrage, Coulage, Elevation,",
            en: "- Formwork, Pouring, Mound,",
          },
          needTwo: {
            fr: "- Fers, Ciments, Parpaings, ...",
            en: "- Irons, Cements, Bricks, ...",
          },
        },
        delivery: {
          fr: "02 Semaines",
          en: "02 Weeks",
        },
      },
    },
  },
};

export const quotationPlumbing = {
  0: {
    id: "danton_plumbing",
    letterRef: "B",
    volume: "",
    material_cost: "280.000",
    labor: "220.000",
    total: "500.000",
    title: {
      fr: "Tuyauterie Plomberie",
      en: "Plumbing Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Tuyaux",
        en: "- Sheaths, Pipes",
      },
      needTwo: {
        fr: "- Vannes, Coudes, Coffrets",
        en: "- Gates, bends, table board",
      },
    },
    delivery: {
      fr: "05 Jours",
      en: "05 Days",
    },
  },

  1: {
    id: "merry_plumbing",
    letterRef: "B",
    volume: "",
    material_cost: "181.000",
    labor: "100.000",
    total: "281.000",
    title: {
      fr: "Tuyauterie Plomberie",
      en: "Plumbing Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Tuyaux",
        en: "- Sheaths, Pipes",
      },
      needTwo: {
        fr: "- Vannes, Coudes, Coffrets",
        en: "- Gates, bends, table board",
      },
    },
    delivery: {
      fr: "03 Jours",
      en: "03 Days",
    },
  },

  2: {
    id: "dexter_plumbing",
    letterRef: "B",
    volume: "",
    material_cost: "610.000",
    labor: "460.000",
    total: "1.070.000",
    title: {
      fr: "Tuyauterie Plomberie",
      en: "Plumbing Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Tuyaux",
        en: "- Sheaths, Pipes",
      },
      needTwo: {
        fr: "- Vannes, Coudes, Coffrets",
        en: "- Gates, bends, table board",
      },
    },
    delivery: {
      fr: "02 Semaines",
      en: "02 Weeks",
    },
  },
};

export const quotationElectricity = {
  0: {
    id: "danton_electricity",
    letterRef: "C",
    volume: "",
    material_cost: "167.500",
    labor: "150.000",
    total: "317.500",
    title: {
      fr: "Tuyauterie Electricité",
      en: "Electricity Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Boites Dérivation",
        en: "- Sheaths, Wiring Boxes",
      },
      needTwo: {
        fr: "- Coffrets, Boitiers",
        en: "- Table board, command Boxes",
      },
    },
    delivery: {
      fr: "05 Jours",
      en: "05 Days",
    },
  },

  1: {
    id: "merry_electricity",
    letterRef: "C",
    volume: "",
    material_cost: "100.250",
    labor: "75.000",
    total: "175.250",
    title: {
      fr: "Tuyauterie Electricité",
      en: "Electricity Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Boites Dérivation",
        en: "- Sheaths, Wiring Boxes",
      },
      needTwo: {
        fr: "- Coffrets, Boitiers",
        en: "- Table board, command Boxes",
      },
    },
    delivery: {
      fr: "03 Jours",
      en: "03 Days",
    },
  },

  2: {
    id: "dexter_electricity",
    letterRef: "C",
    volume: "",
    material_cost: "420.000",
    labor: "385.000",
    total: "805.000",
    title: {
      fr: "Tuyauterie Electricité",
      en: "Electricity Piping",
    },
    materials: {
      needOne: {
        fr: "- Gaines. Boites Dérivation",
        en: "- Sheaths, Wiring Boxes",
      },
      needTwo: {
        fr: "- Coffrets, Boitiers",
        en: "- Table board, command Boxes",
      },
    },
    delivery: {
      fr: "05 Jours",
      en: "05 Days",
    },
  },
};

export const quotationRoofing = {
  0: {
    id: "danton_roofing",
    letterRef: "D",
    surface: "158.4 m²",
    part_1: {
      volume: "",
      material_cost: "825.000",
      labor: "675.000",
      total: "1.500.000",
      title: {
        fr: "Charpente",
        en: "Roof Framework",
      },
      materials: {
        needOne: {
          fr: "- Planches, Lattes, Pointes",
          en: "- Planks, laths, Nails",
        },
        needTwo: {
          fr: "- Liquide Traitement Bois",
          en: "- Woods Treatment Solution",
        },
      },
      delivery: {
        fr: "05 Jours",
        en: "05 Days",
      },
    },
    part_2: {
      volume: "",
      material_cost: "823.000",
      labor: "300.000",
      total: "1.123.000",
      title: {
        fr: "Tolages",
        en: "Sheets Metal Pavement",
      },
      materials: {
        needOne: {
          fr: "- Toles, Pointes, Flash Band",
          en: "- Sheets Metals, Nails, Flash Band",
        },
        needTwo: {
          fr: "",
          en: "",
        },
      },
      delivery: {
        fr: "02 Jours",
        en: "02 Days",
      },
    },
  },

  1: {
    id: "merry_roofing",
    letterRef: "D",
    surface: "104 m²",
    part_1: {
      volume: "",
      material_cost: "415.000",
      labor: "250.000",
      total: "665.000",
      title: {
        fr: "Charpente",
        en: "Roof Framework",
      },
      materials: {
        needOne: {
          fr: "- Planches, Lattes, Pointes",
          en: "- Planks, laths, Nails",
        },
        needTwo: {
          fr: "- Liquide Traitement Bois",
          en: "- Woods Treatment Solution",
        },
      },
      delivery: {
        fr: "03 Jours",
        en: "03 Days",
      },
    },
    part_2: {
      volume: "",
      material_cost: "950.000",
      labor: "100.000",
      total: "1.050.000",
      title: {
        fr: "Tolages",
        en: "Sheets Metal Pavement",
      },
      materials: {
        needOne: {
          fr: "- Toles, Pointes, Flash Band",
          en: "- Sheets Metals, Nails, Flash Band",
        },
        needTwo: {
          fr: "",
          en: "",
        },
      },
      delivery: {
        fr: "02 Jours",
        en: "02 Days",
      },
    },
  },

  2: {
    id: "dexter_roofing",
    letterRef: "D",
    surface: "175.5 m²",
    part_1: {
      volume: "",
      material_cost: "900.000",
      labor: "800.000",
      total: "1.700.000",
      title: {
        fr: "Charpente",
        en: "Roof Framework",
      },
      materials: {
        needOne: {
          fr: "- Planches, Lattes, Pointes",
          en: "- Planks, laths, Nails",
        },
        needTwo: {
          fr: "- Liquide Traitement Bois",
          en: "- Woods Treatment Solution",
        },
      },
      delivery: {
        fr: "07 Jours",
        en: "07 Days",
      },
    },
    part_2: {
      volume: "",
      material_cost: "895.000",
      labor: "300.000",
      total: "1.195.000",
      title: {
        fr: "Tolages",
        en: "Sheets Metal Pavement",
      },
      materials: {
        needOne: {
          fr: "- Toles, Pointes, Flash Band",
          en: "- Sheets Metals, Nails, Flash Band",
        },
        needTwo: {
          fr: "",
          en: "",
        },
      },
      delivery: {
        fr: "02 Jours",
        en: "02 Days",
      },
    },
  },
};
