export interface TeamMember {
  name: string;
  role: { fr: string; en: string };
  phone: string;
  email: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Pierre Tranchant",
    role: { fr: "Associé fondateur", en: "Founding Partner" },
    phone: "+41 76 804 07 54",
    email: "pierre@realt.swiss",
    image: "/images/team/pierre-tranchant.jpg",
  },
  {
    name: "Cédric Loubet",
    role: { fr: "Associé fondateur", en: "Founding Partner" },
    phone: "+41 79 212 87 07",
    email: "cedric@realT.swiss",
    image: "/images/team/cedric-loubet.jpg",
  },
];
