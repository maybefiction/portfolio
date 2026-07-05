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
    email: "ishaan@maybefiction.com",
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
    shortBody: "maybe:fiction is an interdisciplinary studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual. Our work spans performance, installation, pop-up galleries, festivals, celebrations, and workshops.",
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
        extraPhotos: [],
        // Short version for the homepage teaser; full bio (below) lives on about.html.
        shortBio: "Interdisciplinary artist, experience designer, and arts facilitator based in New York City, exploring how art can reshape the ways people gather, create, and relate.",
        bio: [
          "Ishaan Goel (He/Him) is an interdisciplinary artist, experience designer, arts facilitator, and co-founder of maybe:fiction, based in New York City.",
          "Working across social practice, performance, installation, and storytelling, he explores how art can reshape the ways people gather, create, and relate. His projects often begin with familiar stories, social rituals, or everyday conventions, reimagining them through participatory experiences in which people collectively shape both the work itself and the traces it leaves behind. Rather than producing objects alone, he designs experiences that generate artifacts, relationships, and moments of shared imagination.",
          "Alongside these public works, Ishaan writes fiction, keeps an ongoing journal, and creates drawings of pastel-colored blobs. These quieter practices serve as a workshop for the stories, rituals, visual language, and imagined worlds that later find their way into his performances, installations, and participatory experiences.",
          "Before becoming a full-time artist, Ishaan spent seven years working in product strategy and operations for consumer digital products. That experience shaped an enduring interest in how systems, environments, and thoughtful design influence human behavior. Today, he treats experience itself as an artistic medium — something that can be intentionally designed, prototyped, and refined while remaining grounded in play, hospitality, and collective imagination.",
        ],
      },
      {
        name: "Super Alex",
        // 1st photo is the main circular photo; the rest show as small
        // thumbnails below the bio, only on the full about.html page.
        photo: "/assets/about/alex-main.jpg",
        extraPhotos: [
          "/assets/about/alex-extra-1.jpg",
          "/assets/about/alex-extra-2.jpg",
          "/assets/about/alex-extra-3.jpg",
          "/assets/about/alex-extra-4.jpg",
        ],
        shortBio: "Interdisciplinary artist and cultural producer based between Madrid and New York, working across performance, installation, and participatory ritual.",
        bio: [
          "Super Alex (they/them) is an interdisciplinary artist, cultural producer and co-founder of maybe:fiction, based between Madrid and New York. Working across performance, installation, visual arts, writing, sound, and participatory rituals, they move fluidly between disciplines, allowing form to emerge from the concept rather than the other way around.",
          "Their work treats autobiography not as an end in itself, but as a way of speaking about shared human experience. Through acts of intimacy, vulnerability, and play, Super Alex explores identity, memory, and belonging, creating spaces where strangers discover unexpected connections through stories that, while deeply individual, resonate far beyond the self.",
          "Their practice is driven by the belief that sharing what is most personal can become a gesture of collective recognition — proposing play, care, and collective imagination as ways of re-enchanting everyday life while resisting hyperproductivity and individualism.",
          "In parallel to their career as an artist and producer, Super Alex has spent ten years working as an education manager and instructor in the photography industry, having designed and spoken at in-person and online workshops, courses, seminars, and community events including Pratt University, RIT, and FIT in the US, and IED, HELB, Efti, and TAI in the EU.",
        ],
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

      // ---- Detail page content (source: Spontaneous Attachment / In Between Things Bio doc,
      // official show Program, and the [External] Summer 2026 proposal doc) ----
      basics: {
        dateRun: "January 31, 2026 — Ongoing",
        venue: "The Brooklyn Peace Center (January 31, 2026)",
        format: "Interdisciplinary Performance",
        runtime: "1 hour 30 minutes",
      },
      impactStats: [
        { value: "120", label: "Audience members across two January 2026 showings" },
        { value: "22", label: "Collaborating artists, designers, and crew" },
        { value: "3", label: "Floors of a single building turned into one continuous stage" },
      ],
      credits: {
        "Directors/Creators": "Ishaan Goel (Co-Director, Producer, Experience Designer), Sarah Yasmine Marazzi-Sassoon (Co-Director, Choreographer), Samuel Mutter (Composer)",
        "Dancers": "Nadia Benes, Lucia Betelu, Chloe Sonnet Brown, Alekzeta Cantu, Magali Johnston-Viens",
        "Musicians": "Suzuna Ikeda (soprano), Samuel Mutter (trumpet), Sydney Scarlett (violin), Ealaph Tabbaa (viola)",
        "Featured Works": "Chloe Sonnet Brown (Sculpture), Augusto Germosen (Jewelry), Veronica Velasquez (Painting)",
        "Production Design": "Betta Malagon, Sophia Marcontell Reyes, Annie Worford",
        "Operations": "Jude Icarus (Sound), Peter Smith (Lighting)",
        "Photographers": "Chris Cabrera, Sophia Loo, Sophia Marcontell Reyes",
        "Videographers": "Jeff Fan, Makenna Finch",
        "Venue Partner": "Brooklyn Peace Center — a 501(c)(3) peacebuilding and arts organization in Bed-Stuy, Brooklyn",
        "Choreographic Fiscal Sponsor": "The Field",
      },
      fullSynopsis: [
        "Through a series of immersive performances integrating gathering, contemporary dance, and live music, audiences explore and practice the often indirect ways attachments form between people, within ourselves, and with the places we inhabit.",
        "Attachments don't happen when you're looking for them. They form in the cracks and crevices of daily life: building rapport with a neighbor through repeated hallway run-ins, understanding yourself by processing lingering thoughts on a walk to work, or feeling connected to a place by noticing the trees that line a familiar route. As more of our needs are met digitally, remotely, and on demand, we accidentally curate away many of the small frictions and shared contexts through which attachment emerges and deepens.",
        "Each show centers around contemporary dance works exploring ritual, repetition, intimacy, and attachment. Surrounding them is a participatory environment where audiences gather, create, move through shared spaces, and celebrate together. Rather than isolating the performance from the social moments surrounding it, the entire experience is the work.",
        "In Between Things reflects a core belief of maybe:fiction's practice: that art is relational, and that the spectacle is never separate from the spectator. Its January 2026 debut at the Brooklyn Peace Center drew roughly 120 audience members across two showings, staged with a cast and crew of 22 artists and collaborators moving together across three floors of a single building. That response is what's driving the work's expansion into a multi-show run across New York City in summer 2026.",
      ],
      gallery: Array.from({ length: 15 }, (_, i) =>
        `/assets/experiences/spontaneous-attachment-gallery/photo-${String(i + 1).padStart(2, "0")}.jpg`
      ),
      experienceDesign: [
        {
          act: "I",
          title: "Mark",
          subtitle: "Gathering",
          location: "Ground Floor",
          image: "/assets/experiences/spontaneous-attachment.jpg",
          text: "Attendees arrived at a central fire installation where they could craft jewelry using beads and twine. Nearby, a curated display of paintings and jewelry by local creators reflected the project's core motifs, complemented by a station for refreshments. This open atmosphere encouraged guests to acknowledge those sharing the space and engage in conversation before the formal program began.",
        },
        {
          act: "II",
          title: "Notice",
          subtitle: "Duet No. 1",
          location: "Mainstage",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-02.jpg",
          text: "Following the initial half-hour, guests were led to the upper level for the premiere performance. Seated along both sides of a runway-style arrangement, the lack of a traditional front forced a perspective that shifted based on one's physical position in the room. This movement work involves two dancers in pointe shoes, their identities obscured at first. Their choreography transitions from structured, abstract geometry toward a startlingly vulnerable humanity, developed through a creative constraint to \"never break eye contact with each other.\"",
        },
        {
          act: "III",
          title: "Pluck",
          subtitle: "Interlude",
          location: "Balcony",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-01.jpg",
          text: "Following the initial performance, guests ascended to the third level to engage with a central pond installation. Here, they were invited to participate in a symbolic \"offering\" by casting small mirror circles into the water. After selecting a light refreshment, the group returned to the main hall. This transitional movement naturally disrupted original seating patterns, prompting most attendees to seek out a fresh vantage point for the subsequent work.",
        },
        {
          act: "IV",
          title: "Bind",
          subtitle: "Duet No. 2",
          location: "Mainstage",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-04.jpg",
          text: "Developed alongside composer Samuel Mutter, this second work examines the intersection of ritual and closeness. By utilizing rhythmic repetition, the choreography highlights the profound reliance between sound and motion as fundamental mirrors of our collective conduct.",
        },
        {
          act: "V",
          title: "Hold",
          subtitle: "Exit",
          location: "Mainstage Exit",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-10.jpg",
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
      // ---- source: 04_Production/Briefs Brief doc, Workshop Designs folder
      // (17 dated session docs, June 2024 - July 2026), and the post-workshop
      // thank-you email template ----
      id: "beginning-middle-end",
      title: "Beginning | Middle | End",
      tag: "Workshop",
      gradient: "grad-purple",
      hasImage: true,
      hasDetailPage: true,
      placeholderSrc: "/assets/workshops/beginning-middle-end/card.jpg",
      heroPhoto: "/assets/workshops/beginning-middle-end/hero.jpg",
      tagline: "A monthly creative-writing workshop where strangers write a complete story — start to finish — in one sitting.",
      shortDescription: "A monthly creative-writing workshop and social hour where beginners and lifelong writers alike leave with a complete story — a beginning, a middle, and an end — written in a single sitting.",
      description: "A monthly creative-writing workshop and social hour where beginners and lifelong writers alike leave with a complete story — a beginning, a middle, and an end — written in a single sitting.",
      basics: {
        cadence: "Monthly, ongoing since June 2024",
        groupSize: "Up to 15 writers",
        length: "2 hours",
        homeBase: "Brooklyn Peace Center, plus rotating NYC spaces",
      },
      impactStats: [
        { value: "17", label: "Themed sessions run since June 2024" },
        { value: "15", label: "Writers max per session, by design" },
        { value: "2", label: "Hours from cold open to finished story" },
      ],
      flow: [
        {
          title: "Warm Up",
          time: "10–15 min",
          text: "Improv games and movement — passing invisible objects, mirroring a stranger's face — to make a room of near-strangers comfortable taking creative risks together.",
        },
        {
          title: "Build",
          time: "40–45 min",
          text: "A set of short, playful writing exercises builds up the tools of storytelling one at a time: an object, a setting, a character, a line of dialogue.",
        },
        {
          title: "Write & Share",
          time: "40 min",
          text: "Twenty minutes to draft a complete story — a beginning, a middle, and an end — followed by twenty minutes reading it aloud to a partner.",
        },
      ],
      fullSynopsis: [
        "Beginning | Middle | End takes the most solitary act in writing — sitting down and starting — and turns it into a room full of strangers working alongside each other. No writing experience required, no blank-page anxiety: just two hours that build, one small exercise at a time, toward a single complete story, drafted in one sitting.",
        "Each session opens with a few minutes of improv and movement — passing an invisible object, mirroring a stranger's expression — just enough to make a room of near-strangers comfortable taking creative risks together. From there, a set of short, playful prompts builds up the tools of storytelling one at a time: a setting, a character, a line of dialogue. Everything points toward the same close: twenty minutes to write a complete story, then twenty more to read it aloud to a partner.",
        "The workshop has run monthly since June 2024, taking on a new creative lens each time — the Uncanny, Whimsy, Desire, Fairytales, In Transit — and reshaping the same three-act structure into something different every month. Every session is capped at fifteen writers and co-hosted with a different guest writer, so the workshop keeps discovering new voices, prompts, and reasons to write.",
        "Every participant leaves with something physical: a page with a beginning, a middle, and an end already on it, ready to keep folded in a pocket, taped to a wall, or built on later. The point isn't to finish a masterpiece — it's to prove, in one sitting, that you already can.",
      ],
      themes: [
        "Being Seen", "Uncanny", "Intimacy", "Whimsy", "World Building", "Dialogue",
        "Rituals", "Desire", "In Transit", "Inner Worlds", "Fairytales", "Perspective",
        "Characters", "Pretend Worlds",
      ],
      credits: {
        "Hosted By": "Ishaan Goel, maybe:fiction",
        "Co-Hosts": "A different guest writer joins each month",
        "Home Venue": "Brooklyn Peace Center (Bed-Stuy, Brooklyn), plus pop-up sessions across NYC",
        "Part Of": "The same rotating community as Art Luck, Ishaan's monthly art potluck also at Brooklyn Peace Center",
      },
      gallery: Array.from({ length: 8 }, (_, i) =>
        `/assets/workshops/beginning-middle-end/gallery-${String(i + 1).padStart(2, "0")}.jpg`
      ),
    },
  ],
};
