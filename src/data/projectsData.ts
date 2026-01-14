export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    repo: string;
    deploy: string | null;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Chronos Pomodoro",
    description:
      "Site feito para gerenciar o tempo de estudos usando a técnica Pomodoro.",
    tags: ["React", "TypeScript", "API", "Node"],
    image: "/img/chronos-pomodoro.png",
    links: {
      repo: "https://github.com/EnzoCerqueira/chronos-pomodoro",
      deploy: "https://pomodoro-focus-blond.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Lading Page GTA V",
    description: "Landing Page feita para um projeto fictício do jogo GTA V.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "img/gta-landing-page.png",
    links: {
      repo: "https://github.com/EnzoCerqueira/projeto-gta",
      deploy: "https://projeto-gta-khaki.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Cardápio Hamburgueria",
    description: "Site de cardápio digital para uma hamburgueria fictícia.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "API WhatsApp"],
    image: "img/cardapio.png",
    links: {
      repo: "https://github.com/EnzoCerqueira/cardapio",
      deploy: "https://cardapio-omega-three.vercel.app/",
    },
  },
];
