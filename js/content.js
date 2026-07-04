/* ============================================================
   CONTENT.JS — the one file to edit for copy & data updates.
   Nothing in here touches layout or styling — change freely.
   Categories used across the site: "performance" | "exhibition" | "event"
   ============================================================ */

const SITE_CONTENT = {

  // ---------- Global / brand ----------
  // tagline source: 0_Entity/About/maybe:fiction.gdoc, field "Main Page,
  // Under Title" — this is a living field the studio iterates on; re-pull
  // it from that doc whenever it changes (keep hero.tagline in sync too).
  brand: {
    name: "maybe:fiction",
    tagline: "Designing new ways for people to gather, create, and relate",
    email: "hello@maybefiction.com",
    phone: "+1 (555) 010-2026",
    location: "Based in your city — traveling everywhere",
  },

  // ---------- Hero ----------
  hero: {
    heading: "maybe:fiction",
    // See brand.tagline above — same field, same doc source.
    tagline: "Designing new ways for people to gather, create, and relate",
    backgroundImages: [
      "/assets/experiences/spontaneous-attachment.jpg",
      "/assets/experiences/jornada-de-puertas-abiertas.jpg",
      "/assets/experiences/spontaneous-attachment-gallery/photo-04.jpg",
      "/assets/experiences/eclectic-pathetic.jpg",
    ],
  },

  // ---------- About ----------
  // shortBody is the condensed homepage teaser; body is the full copy on
  // about.html — source: 0_Entity/About/maybe:fiction.gdoc.
  about: {
    heading: "About",
    shortBody: "An interdisciplinary studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual.",
    body: [
      "maybe:fiction is an interdisciplinary studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual. Our work spans performance, installation, pop-up galleries, festivals, celebrations, and workshops.",
      "We believe art is something to practice together, not consume alone. We work in the spaces between things: artist and audience, public and private, celebratory and mundane — designing the conditions where intimacy, wonder, and participation can emerge from ordinary places.",
      "Performance, movement, music, visual art, writing, games, and food are not separate disciplines to us — they are materials. We combine them to create experiences no single medium or sense could produce alone.",
      "Play can be profound, rituals can be secular, creativity belongs to everyone, and ordinary places can become sites of wonder when approached with curiosity, care, and participation.",
      "How we make things matters as much as what we make. We work collaboratively, embrace improvisation, and treat process as inseparable from outcome.",
    ],
    founders: [
      {
        name: "Ishaan",
        photo: "/assets/about/ishaan.jpg",
        // Short version for the homepage teaser; full bio (below) lives on about.html.
        shortBio: "Interdisciplinary artist and experience designer based in Brooklyn, exploring how art can reshape the ways people gather, create, and relate.",
        bio: [
          "Ishaan Goel is an interdisciplinary artist and experience designer based in Brooklyn. His practice explores how art can reshape the ways people gather, create, and relate. Working across performance, installation, storytelling, participatory experiences, and social practice, he creates works that invite people to become active participants rather than passive spectators.",
          "His projects often transform familiar spaces and social conventions into sites for collective imagination. When a Friend Knocks unfolded as a summer-long series of participatory experiences in parks, cafés, cemeteries, and other everyday places, where participants collectively created drawings, writings, sculptures, photographs, recordings, and other artifacts that later formed the exhibition What Clings. Rather than treating the exhibition as the artwork, the process of gathering, making, and relating became inseparable from what was ultimately displayed. Spontaneous Attachment similarly combined contemporary dance, live music, communal making, and ritual into an immersive performance exploring how attachment forms between people.",
          "Alongside these public works, Ishaan writes fiction, keeps an ongoing journal, and creates drawings of pastel-colored blob-like characters. These quieter practices serve as a laboratory for the stories, rituals, visual language, and imagined worlds that later find their way into his performances, installations, and participatory experiences.",
          "Across his practice, Ishaan treats experience itself as an artistic medium, exploring how thoughtful design can transform ordinary spaces into places where people play, create, and imagine together.",
          "Before becoming a full-time artist, Ishaan spent seven years working in product strategy and operations. That experience shaped an enduring interest in how systems, environments, and thoughtful design influence human behavior. Today, he approaches experiences as something that can be intentionally designed, prototyped, and refined while remaining grounded in play, hospitality, and collective imagination.",
        ],
      },
      {
        name: "Super Alex",
        photo: null,
        shortBio: "TODO: replace with real bio — Alex.gdoc is currently empty.",
        bio: ["TODO: replace with real bio — Alex.gdoc is currently empty."],
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
      shortDescription: "A performance art festival that transforms private homes into a stage for collective encounter, creation, and play.",
      description: "A performance art festival that transforms private homes into a stage for collective encounter, creation, and play.",
      placeholderSrc: "/assets/experiences/jornada-de-puertas-abiertas.jpg",
      heroPhoto: "/assets/experiences/jornada-gallery/nyc-2024/photo-04.jpg",
      gradient: "grad-blue",
      hasImage: true,
      hasDetailPage: true,

      fullSynopsis: [
        "Jornada de Puertas Abiertas (Open Doors Day) transforms the private, intimate space of a home into a space for collective encounter, creation, and play. A host opens their house to strangers, in an exercise of mutual trust, and each room becomes a potential stage — the domestic box becomes a magic box.",
        "The festival is also a political stance: in the absence of free, open, spontaneous spaces where we can create for the joy of it, we wanted to recover spaces and times to explore playfully and whimsically, blurring the line between performer and audience, where everyone can feel safe to be and to become.",
        "The first edition took place in a one-bedroom apartment in Madrid in June 2023, where 26 guests moved through simultaneous performances in the living room, bedroom, and bathroom. The second edition brought the format to a private home in Brooklyn in June 2024, through an open call for New York-based artists working in performance, theater, music, dance, installation, and visual art.",
      ],

      editions: [
        {
          id: "madrid-2023",
          label: "2023 · Madrid",
          basics: {
            dateRun: "June 2023",
            venue: "A one-bedroom apartment, Madrid, Spain",
            format: "Home-based performance art festival",
            runtime: "~2 hours",
          },
          credits: {
            "Host / Founder": "Super Alex",
            "Guests": "26 attendees, moving through the living room, bedroom, and bathroom",
          },
          gallery: Array.from({ length: 18 }, (_, i) =>
            `/assets/experiences/jornada-gallery/madrid-2023/photo-${String(i + 1).padStart(2, "0")}.jpg`
          ),
        },
        {
          id: "nyc-2024",
          label: "2024 · Brooklyn, NYC",
          basics: {
            dateRun: "June 2024",
            venue: "A private home in Brooklyn, NYC (address released to confirmed guests only)",
            format: "Home-based performance art festival",
            runtime: "2–3 hours",
          },
          credits: {
            "Organizers": "Ishaan Goel, Super Alex",
            "Artists": "Mk7, Brooke Leialoha Dabalos, Taliyah Shepard, Justin Harmon, Zaraith Hernandez (PAZAJEROS), V Tineo, Natalia Durango (Puyaloahi), Gigi Tamayo Boado, Benedicto Figueroa",
          },
          gallery: [
            "/assets/experiences/jornada-gallery/nyc-2024/photo-00-hero.jpg",
            ...Array.from({ length: 23 }, (_, i) =>
              `/assets/experiences/jornada-gallery/nyc-2024/photo-${String(i + 1).padStart(2, "0")}.jpg`
            ),
          ],
        },
      ],
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
        dateRun: "January 31, 2026 — Ongoing",
        venue: "The Brooklyn Peace Center (January 31, 2026)",
        format: "Interdisciplinary Performance",
        runtime: "1 hour 30 minutes",
      },
      credits: {
        "Directors/Creators": "Ishaan Goel (Co-Director, Producer, Experience Designer), Sarah Yasmine Marazzi-Sassoon (Co-Director, Choreographer), Samuel Mutter (Composer)",
        "Dancers": "Nadia Benes, Lucia Betelu, Chloe Sonnet Brown, Alekzeta Cantu, Magali Johnston-Viens",
        "Musicians": "Suzuna Ikeda (soprano), Samuel Mutter (trumpet), Sydney Scarlett (violin), Ealaph Tabbaa (viola)",
        "Featured Works": "Chloe Sonnet Brown (Sculpture), Augusto Germosen (Jewelry), Veronica Velasquez (Painting)",
        "Production Design": "Betta Malagon, Sophia Marcontell Reyes, Annie Worford",
        "Operations": "Jude Icarus (Sound), Peter Smith (Lighting)",
        "Photographers": "Chris Cabrera, Sophia Loo, Sophia Marcontell Reyes",
        "Videographers": "Jeff Fan, Makenna Finch",
      },
      fullSynopsis: [
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
      id: "what-clings",
      title: "What Clings",
      category: "exhibition",
      tag: "Exhibition",
      shortDescription: "An immersive solo exhibition exploring the textures of our past — from childhood play to community ritual — and how we might reclaim them in a world increasingly dominated by digital commodification.",
      description: "An immersive solo exhibition exploring the textures of our past — from childhood play to community ritual — and how we might reclaim them in a world increasingly dominated by digital commodification.",
      placeholderSrc: "/assets/experiences/what-clings.jpg",
      heroPhoto: "/assets/experiences/what-clings-gallery/photo-24.jpg",
      gradient: "grad-blue",
      hasImage: true,
      hasDetailPage: true,

      basics: {
        dateRun: "October 3–5, 2025",
        venue: "Prospect Heights, Brooklyn",
        format: "Installation",
        runtime: "1 hour 30 minutes",
      },
      credits: {
        "Director / Producer": "Ishaan Goel",
        "Co-Director / Co-Producer": "Super Alex",
        "Exhibition Design": "Annie Worford, Alice Wang, Betta Malagon, Chuckry V., Jackson Schad, Nicole Allina",
        "Installation Design": "Giovanni Rivera, Shelly Fank, Veronica Velasquez",
        "Set-Up": "Ashlyn Maes, Julie Kerner, Leah Floyd, Sunny H., Shahzaib Safi, Sean Glatch, Sara Yasmine",
        "Photo / Video": "Aaron Laserna, Riya Goel",
        "Community Co-Hosts": "Brian Helfman, Ellen High, Kelly Chang, Alice Wang, Annie Worford, Jasmina Prabhakara, Sanchana, Zet De Castro, Sean Glatch, Becka Olson, Betta Malagon, Genia Blaser, Sara Yasmine",
        "Contributors": "150+ community members across 14 gatherings, March–September 2025",
      },
      fullSynopsis: [
        "What Clings serves as a proof of concept that wonder, play, and shared creation are still possible, not buried in the past. It brings together artifacts from a summer of community gatherings — water balloon fights, pop-up cafés, and field trips — to create an experience that resists digital commodification. It invites participants to move through three discrete, interactive spaces, encouraging real-time creation and shared intimacy.",
        "The project explores the textures that remain across time — from prehistory to history, childhood to adulthood — as a form of playful resistance against a culture obsessed with functionality, fossilization under convenience, and the commodification of experience. Between March and September 2025, 150+ people gathered across 14 offline events — water balloon fights, zine-making, printmaking, a cemetery tour — to make the raw material that became the exhibition.",
      ],
      gallery: Array.from({ length: 26 }, (_, i) =>
        `/assets/experiences/what-clings-gallery/photo-${String(i + 1).padStart(2, "0")}.jpg`
      ),
      experienceDesign: [
        {
          title: "The Cave",
          image: "/assets/experiences/what-clings-gallery/photo-01.jpg",
          text: "The things we think are extraordinary today — silence, darkness, shooting stars — were once just day-to-day life for humans before. I often wonder if we can ever know what was lost. Inside, you are welcome to explore, nap, and draw on the walls with special markers.",
        },
        {
          title: "The Anti-Gallery",
          image: "/assets/experiences/what-clings-gallery/photo-15.jpg",
          text: "Everything inside of here was made between March and September 2025 across 14 gatherings and with more than 150+ contributors. We only started this work. It is your turn to finish it. Collage, paint, draw, write, and anything else you can think of.",
        },
        {
          title: "Your Birthday Party",
          image: "/assets/experiences/what-clings-gallery/photo-26.jpg",
          text: "Make your childhood self a gift, write a card, and add it to our altar.",
        },
      ],
    },
  ],

  // ---------- Workshops ----------
  workshops: [
    {
      id: "beginning-middle-end",
      title: "Beginning | Middle | End",
      tag: "Workshop",
      gradient: "grad-purple",
      duration: "TODO: replace with real copy.",
      audience: "TODO: replace with real copy.",
      description: "TODO: replace with real copy.",
    },
    {
      id: "corporate-creative",
      title: "Corporate Creative",
      tag: "Workshop",
      gradient: "grad-blue",
      duration: "TODO: replace with real copy.",
      audience: "TODO: replace with real copy.",
      description: "TODO: replace with real copy.",
    },
  ],
};
