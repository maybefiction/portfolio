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
      title: "In Between Things",
      category: "performance",
      tag: "Performance",
      shortDescription: "The thing around the thing is sometimes richer than the thing itself. In Between Things invites you to linger in the spaces around an experience and notice what emerges.",
      description: "The thing around the thing is sometimes richer than the thing itself. In Between Things invites you to linger in the spaces around an experience and notice what emerges.",
      placeholderSrc: "/assets/experiences/spontaneous-attachment.jpg",
      gradient: "grad-purple",
      hasImage: true,
      hasDetailPage: true,

      // ---- Detail page content (source: Spontaneous Attachment / In Between Things Bio doc) ----
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
      fullSynopsis: [
        "The thing around the thing is sometimes richer than the thing itself. In Between Things invites you to linger in the spaces around an experience and notice what emerges.",
        "Through a series of immersive performances integrating gathering, contemporary dance, and live music, audiences will explore and practice the often indirect ways attachments form between people, within ourselves, and with the places we inhabit.",
        "Attachments don't happen when you're looking for them. They form in the cracks and crevices of daily life: building rapport with a neighbor through repeated hallway run-ins, understanding yourself by processing lingering thoughts on a walk to work, or feeling connected to a place by noticing the trees that line a familiar route. As more of our needs are met digitally, remotely, and on demand, we accidentally curate away many of the small frictions and shared contexts through which attachment emerges and deepens.",
        "Each show centers around contemporary dance works exploring ritual, repetition, intimacy, and attachment. Surrounding them is a participatory environment where audiences gather, create, move through shared spaces, and celebrate together. Rather than isolating the performance from the social moments surrounding it, the entire experience is the work.",
      ],
      heroVideo: "/assets/experiences/spontaneous-attachment-recap.mp4",
      gallery: Array.from({ length: 15 }, (_, i) =>
        `/assets/experiences/spontaneous-attachment-gallery/photo-${String(i + 1).padStart(2, "0")}.jpg`
      ),
      experienceDesign: [
        {
          title: "Gathering",
          image: "/assets/experiences/spontaneous-attachment.jpg",
          text: "Attendees arrived at a central fire installation where they could craft jewelry using beads and twine. Nearby, a curated display of paintings and jewelry by local creators reflected the project's core motifs, complemented by a station for refreshments. This open atmosphere encouraged guests to acknowledge those sharing the space and engage in conversation before the formal program began.",
        },
        {
          title: "Dance Piece #1",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-02.jpg",
          text: "Following the initial half-hour, guests were led to the upper level for the premiere performance. Seated along both sides of a runway-style arrangement, the lack of a traditional front forced a perspective that shifted based on one's physical position in the room. This movement work involves two dancers in pointe shoes, their identities obscured at first. Their choreography transitions from structured, abstract geometry toward a startlingly vulnerable humanity, developed through a creative constraint to \"never break eye contact with each other.\"",
        },
        {
          title: "Interlude",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-01.jpg",
          text: "Following the initial performance, guests ascended to the third level to engage with a central pond installation. Here, they were invited to participate in a symbolic \"offering\" by casting small mirror circles into the water. After selecting a light refreshment, the group returned to the main hall. This transitional movement naturally disrupted original seating patterns, prompting most attendees to seek out a fresh vantage point for the subsequent work.",
        },
        {
          title: "Dance Piece #2",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-04.jpg",
          text: "Developed alongside composer Samuel Mutter, this second work examines the intersection of ritual and closeness. By utilizing rhythmic repetition, the choreography highlights the profound reliance between sound and motion as fundamental mirrors of our collective conduct.",
        },
        {
          title: "Ending",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-06.jpg",
          text: "Audience members receive dark chocolate on their exit.",
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
