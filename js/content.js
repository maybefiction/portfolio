/* ============================================================
   CONTENT.JS — the one file to edit for copy & data updates.
   Nothing in here touches layout or styling — change freely.
   Categories used across the site: "performance" | "exhibition" | "event"
   ============================================================ */

const SITE_CONTENT = {

  // ---------- Global / brand ----------
  brand: {
    name: "maybe:fiction",
    tagline: "We turn imagination into IRL experiences.",
    email: "hello@maybefiction.com",
    phone: "+1 (555) 010-2026",
    location: "Based in your city — traveling everywhere",
    socials: [
      { label: "Instagram", handle: "@maybefiction", url: "#" },
      { label: "TikTok", handle: "@maybefiction", url: "#" },
      { label: "LinkedIn", handle: "maybe:fiction", url: "#" },
    ],
  },

  // ---------- Hero ----------
  hero: {
    eyebrow: "Experience Design Studio",
    heading: "maybe:fiction",
    tagline: "We turn imagination into IRL experiences.",
    subcopy: "Performances, exhibitions, workshops, and events dreamed up and built by hand — for people who want to feel something real.",
    primaryCta: { label: "See Our Work", href: "#experiences" },
    secondaryCta: { label: "Say Hello", href: "#contact" },
  },

  // ---------- About ----------
  about: {
    eyebrow: "Who We Are",
    heading: "Storytellers who build worlds you can walk into.",
    body: [
      "maybe:fiction is a production studio for experience design — the art of turning an idea into something you can touch, wander through, and remember. We work across live performance, immersive exhibitions, hands-on workshops, and one-night-only events.",
      "Our philosophy is simple: the best stories aren't told at people, they're built around them. Every project starts with a feeling we want someone to walk away with — wonder, nostalgia, courage, joy — and we reverse-engineer the whole experience from there.",
    ],
    pillars: [
      {
        icon: "✨",
        title: "Wonder First",
        text: "We design the emotional arc before we design the room. If it doesn't spark delight on paper, it doesn't make it to the floor.",
      },
      {
        icon: "🛠️",
        title: "Built By Makers",
        text: "Our team designs, fabricates, and stage-manages in-house — set, sound, lighting, and script all live under one very colorful roof.",
      },
      {
        icon: "🌀",
        title: "Made For Real Life",
        text: "No screens required. We believe in the magic of shared, physical space — messy, alive, and impossible to replicate at home.",
      },
    ],
  },

  // ---------- Experiences (gallery / portfolio) ----------
  // category: "performance" | "exhibition" | "event"
  // placeholderSrc is a suggested filename for when real media is ready —
  // see assets/experiences/README.md for the swap-in instructions.
  experiences: [
    {
      id: "jornada-de-puertas-abiertas",
      title: "Jornada de Puertas Abiertas",
      category: "event",
      tag: "Event",
      description: "TODO: replace with real copy — Madrid 2023 edition.",
      placeholderSrc: "/assets/experiences/jornada-de-puertas-abiertas.jpg",
      gradient: "grad-blue",
      hasImage: true,
    },
    {
      id: "spontaneous-attachment",
      title: "Spontaneous Attachment",
      category: "performance",
      tag: "Performance",
      description: "Spontaneous Attachment explores intimacy and human connection through ritual, movement, and sound. Two dance works—a duet and a quartet, set to live original music—anchor the evening.",
      placeholderSrc: "/assets/experiences/spontaneous-attachment.jpg",
      gradient: "grad-purple",
      hasImage: true,
      hasDetailPage: true,

      // ---- Detail page content (source: Spontaneous Attachment Bio doc) ----
      basics: {
        dateRun: "January 31, 2026",
        venue: "The Brooklyn Peace Center",
        format: "Interdisciplinary Performance",
        runtime: "1 hour 30 minutes",
      },
      credits: {
        "Directors/Creators": "Ishaan Goel, Sarah Yasmine Marazzi-Sassoon",
        "Dancers": "Nadia Benes, Lucia Betelu, Alekzeta Cantu, Magali Johnston-Viens, Chloe Sonnet Brown",
        "Musicians": "Samuel Mutter (trumpet), Suzuna Ikeda (soprano), Sydney Scarlett (violin), Ealaph Tabbaa (viola)",
        "Photographers": "Sophia Loo, Sophia Marcontell Reyes",
        "Videographers": "Jeff Fan, Makenna Finch",
      },
      fullSynopsis: "The experience examines how attachments develop in overlooked moments and spaces. Through immersive performances combining gathering, contemporary dance, and live music, audiences explore indirect ways connections form between people, within ourselves, and with our surroundings. The work emphasizes how small frictions and shared contexts facilitate genuine attachment, contrasting with digitally-mediated experiences that may diminish such opportunities.",
      heroVideo: "/assets/experiences/spontaneous-attachment-recap.mp4",
      gallery: Array.from({ length: 15 }, (_, i) =>
        `/assets/experiences/spontaneous-attachment-gallery/photo-${String(i + 1).padStart(2, "0")}.jpg`
      ),
      experienceDesign: [
        {
          title: "Gathering",
          text: "Doors open and the audience enters a transformed Brooklyn Peace Center. Activations woven through the space invite people to engage with the night's theme of surprise intimacy before a single dancer takes the floor — priming the room to feel like a ritual from the moment you walk in.",
        },
        {
          title: "1st Dance — The Duet",
          text: "Two figures in pointe shoes, faces covered, move through a transformation: from being perceived as shapes — dance in its most abstract form — to being almost disturbingly human — dance in its most intimate form.",
        },
        {
          title: "Intermission",
          text: "The audience returns to the activations scattered through the venue, carrying the duet's imagery with them as they mingle, explore, and continue building their own small moments of connection before the second piece begins.",
        },
        {
          title: "2nd Dance — The Quartet",
          text: "Created in collaboration with composer Samuel Mutter, the quartet explores ritual, intimacy, and repetition — themes at the core of both music and dance — built from a shared desire to understand the relationship between the two art forms.",
        },
        {
          title: "Ending",
          text: "As the evening closes, the goal isn't for the audience to simply think 'that was cool' — it's for them to leave carrying something: a texture of intimacy they found by being spontaneously, physically present with strangers for one night.",
        },
      ],
    },
    {
      id: "eclectic-pathetic",
      title: "Eclectic-Pathetic",
      category: "performance",
      tag: "Performance",
      description: "TODO: replace with real copy.",
      placeholderSrc: "/assets/experiences/eclectic-pathetic.jpg",
      gradient: "grad-pink",
      hasImage: true,
    },
    {
      id: "paper-planets",
      title: "Paper Planets",
      category: "exhibition",
      tag: "Exhibition",
      description: "A family-friendly gallery of oversized paper sculptures exploring the solar system, built entirely from recycled materials.",
      placeholderSrc: "/assets/experiences/paper-planets.jpg",
      gradient: "grad-pink-purple",
    },
    {
      id: "echo-chamber",
      title: "Echo Chamber",
      category: "performance",
      tag: "Performance",
      description: "A durational sound-and-movement piece staged inside a geodesic dome, new every night for two weeks.",
      placeholderSrc: "/assets/experiences/echo-chamber.jpg",
      gradient: "grad-blue-purple",
    },
    {
      id: "confetti-block-party",
      title: "Confetti Block Party",
      category: "event",
      tag: "Event",
      description: "A full city-block celebration commissioned for a client's 10th anniversary — three stages, one confetti cannon finale.",
      placeholderSrc: "/assets/experiences/confetti-block-party.jpg",
      gradient: "grad-blue-pink",
    },
  ],

  // ---------- Workshops ----------
  workshops: [
    {
      id: "worldbuilding-101",
      title: "Worldbuilding 101",
      duration: "3-hour workshop",
      audience: "For curious beginners",
      description: "Learn our studio's own framework for building an immersive world from a single feeling, using nothing but paper and imagination.",
      icon: "🗺️",
    },
    {
      id: "devising-for-non-actors",
      title: "Devising for Non-Actors",
      duration: "Full-day intensive",
      audience: "No performance experience needed",
      description: "A playful introduction to devised theatre-making for people who've never set foot on a stage — and never wanted to, until now.",
      icon: "🎭",
    },
    {
      id: "prop-and-set-fabrication",
      title: "Prop & Set Fabrication",
      duration: "Weekend intensive",
      audience: "Hands-on makers",
      description: "Get in the shop with our fabrication team and learn the tricks we use to build sets and props that feel bigger than they cost.",
      icon: "🧵",
    },
    {
      id: "designing-delight",
      title: "Designing for Delight",
      duration: "2-hour talk + Q&A",
      audience: "For teams & brands",
      description: "A workshop for marketing and events teams who want to bring experience-design thinking into their own activations.",
      icon: "🎈",
    },
  ],
};
