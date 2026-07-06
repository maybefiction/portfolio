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
    tagline: "We are an interdisciplinary art studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual. Our work spans performance, installation, pop-up galleries, festivals, celebrations, and workshops.",
    email: "ishaan@maybefiction.com",
  },

  // ---------- Hero ----------
  hero: {
    heading: "maybe:fiction",
    // See brand.tagline above — same field, same doc source.
    tagline: "We are an interdisciplinary art studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual. Our work spans performance, installation, pop-up galleries, festivals, celebrations, and workshops.",
    // One real photo per fully-realized experience — swapped out the old 4th
    // slot (eclectic-pathetic.jpg), which has no real copy or detail page
    // yet, for a spread across the three complete case studies instead of
    // duplicating one of them twice. Caption names the production but isn't
    // a link out to its page.
    backgroundImages: [
      { src: "/assets/experiences/spontaneous-attachment.jpg", caption: "In Between Things" },
      { src: "/assets/experiences/jornada-gallery/nyc-2024/photo-04.jpg", caption: "Jornada de Puertas Abiertas" },
      { src: "/assets/experiences/what-clings-gallery/photo-24.jpg", caption: "What Clings" },
    ],
  },

  // ---------- About ----------
  // shortBody is the condensed homepage teaser; body is the full copy on
  // about.html — source: 0_Entity/About/maybe:fiction.gdoc.
  about: {
    heading: "About",
    shortBody: "maybe:fiction is an interdisciplinary studio that designs experiences for people to gather, create, and relate through communal making, play, and ritual. Our work spans performance, installation, pop-up galleries, festivals, celebrations, and workshops.",
    // Ishaan and Alex at the end of Jornada de Puertas Abiertas (NYC, 2024) —
    // just the two of them, no staging.
    heroPhoto: "/assets/about/ishaan-alex-jornada.jpg",
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
        extraPhotos: ["/assets/about/ishaan-extra-1.jpg"],
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
      category: "festival",
      tag: "Festival",
      shortDescription: "A performance arts festival transforming homes into stages for encounter, collective creation, play and ritual",
      description: "A performance arts festival transforming homes into stages for encounter, collective creation, play and ritual",
      placeholderSrc: "/assets/experiences/jornada-de-puertas-abiertas.jpg",
      heroPhoto: "/assets/experiences/jornada-gallery/nyc-2024/photo-04.jpg",
      gradient: "grad-blue",
      hasImage: true,
      hasDetailPage: true,

      // Top-level overview — true of the format across every edition, so it
      // stays static rather than switching when a different edition's card
      // is expanded below (that's what the per-edition fields are for).
      basics: {
        createdBy: "Super Alex",
        dateRun: "Ongoing since June 2023",
        venue: "Private homes in Madrid & Brooklyn, NYC",
        format: "Home-based performance art festival",
        runtime: "3 hours",
      },

      fullSynopsis: [
        "Jornada de Puertas Abiertas (Open Doors Day) is a performance art festival that takes place inside a private home, temporarily transforming a domestic environment into a public space for live participatory art. Each room hosts a different performance or installation, responding to the architecture, atmosphere, and particularities of the space.",
        "By opening an intimate domestic space to strangers, the festival uses the tension between the private and the public to create interactions that could not exist in a conventional theatre or gallery. The home becomes more than a venue: it is an active collaborator, shaping the unfolding of each work and opening space for ritual, whimsy, and unexpected encounters.",
        "Visitors are invited to participate rather than simply observe, discovering moments of wonder, play, and connection that reveal the extraordinary potential of everyday spaces.",
      ],

      // General carousel (top of page) — pulls from the flagship, most
      // recent edition rather than switching per edition.
      gallery: [
        "/assets/experiences/jornada-gallery/nyc-2024/photo-00-hero.jpg",
        ...Array.from({ length: 23 }, (_, i) =>
          `/assets/experiences/jornada-gallery/nyc-2024/photo-${String(i + 1).padStart(2, "0")}.jpg`
        ),
      ],

      // Experience Design: one expandable card per edition, rendered by
      // renderEditionCards() instead of the classic act-based flow. NYC 2024
      // opens by default; Madrid 2023 starts collapsed until clicked.
      editions: [
        {
          id: "nyc-2024",
          label: "NYC 2024",
          theme: "Roots",
          basics: {
            dateRun: "June 2024",
            venue: "Two private homes in Brooklyn, NYC",
            format: "Performance Art Festival",
            runtime: "4h",
          },
          credits: {
            "Hosts": "Ishaan Goel, John Bowen",
            "Producers": "Super Alex, Ishaan Goel",
            "Artists": "Benedicto Figueroa, Brooke Leialoha, Gigi Tamayo, Guerilla Phart, Ishaan Goel, John Bowen, Justin Harmon, Mk7, Púyaloahí, Steinbock19, Super Alex, Taliyah Starr, V Tineo, Zaraith Hernández",
            "Guests": "70 people",
          },
          // Real headshots, keyed by exact name as it appears in
          // credits.Artists above — falls back to initials for any name
          // without an entry here.
          artistPhotos: {
            "Benedicto Figueroa": "/assets/experiences/jornada-gallery/artists/benedicto-figueroa.jpg",
            "Brooke Leialoha": "/assets/experiences/jornada-gallery/artists/brooke-leialoha.jpg",
            "Gigi Tamayo": "/assets/experiences/jornada-gallery/artists/gigi-tamayo.jpg",
            "Guerilla Phart": "/assets/experiences/jornada-gallery/artists/guerilla-phart.jpg",
            "Ishaan Goel": "/assets/experiences/jornada-gallery/artists/ishaan-goel.jpg",
            "John Bowen": "/assets/experiences/jornada-gallery/artists/john-bowen.jpg",
            "Justin Harmon": "/assets/experiences/jornada-gallery/artists/justin-harmon.jpg",
            "Mk7": "/assets/experiences/jornada-gallery/artists/mk7.jpg",
            "Púyaloahí": "/assets/experiences/jornada-gallery/artists/puyaloahi.jpg",
            "Steinbock19": "/assets/experiences/jornada-gallery/artists/steinbock19.jpg",
            "Super Alex": "/assets/experiences/jornada-gallery/artists/super-alex-nyc.jpg",
            "Taliyah Starr": "/assets/experiences/jornada-gallery/artists/taliyah-starr.jpg",
            "V Tineo": "/assets/experiences/jornada-gallery/artists/v-tineo.jpg",
            "Zaraith Hernández": "/assets/experiences/jornada-gallery/artists/zaraith-hernandez.jpg",
          },
          gallery: [
            "/assets/experiences/jornada-gallery/nyc-2024/photo-00-hero.jpg",
            ...Array.from({ length: 23 }, (_, i) =>
              `/assets/experiences/jornada-gallery/nyc-2024/photo-${String(i + 1).padStart(2, "0")}.jpg`
            ),
          ],
        },
        {
          id: "madrid-2023",
          label: "Madrid 2023",
          theme: "Intimacy",
          basics: {
            dateRun: "June 2023",
            venue: "Private home in Madrid, Spain",
            format: "Performance art festival",
            runtime: "3 hours",
          },
          credits: {
            "Host / Founder / Producer": "Super Alex",
            "Artists": "Ana García López, Beatriz Bonduel, Chico Trópico, Laura Nadeszhda, Pantalla Fantasma, Sally Hernández, Super Alex, Track ID",
            "Guests": "30 people",
          },
          artistPhotos: {
            "Ana García López": "/assets/experiences/jornada-gallery/artists/ana-garcia-lopez.jpg",
            "Beatriz Bonduel": "/assets/experiences/jornada-gallery/artists/beatriz-bonduel.jpg",
            "Chico Trópico": "/assets/experiences/jornada-gallery/artists/chico-tropico.jpg",
            "Laura Nadeszhda": "/assets/experiences/jornada-gallery/artists/laura-nadeszhda.jpg",
            "Pantalla Fantasma": "/assets/experiences/jornada-gallery/artists/pantalla-fantasma.jpg",
            "Sally Hernández": "/assets/experiences/jornada-gallery/artists/sally-hernandez.jpg",
            "Super Alex": "/assets/experiences/jornada-gallery/artists/super-alex-madrid.jpg",
            "Track ID": "/assets/experiences/jornada-gallery/artists/track-id.jpg",
          },
          gallery: Array.from({ length: 18 }, (_, i) =>
            `/assets/experiences/jornada-gallery/madrid-2023/photo-${String(i + 1).padStart(2, "0")}.jpg`
          ),
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
          title: "Gather",
          subtitle: "Fire Installation & Communal Making",
          location: "Ground Floor",
          image: "/assets/experiences/spontaneous-attachment.jpg",
          text: "Guests arrived at a central fire installation — we keep returning to fire because it's one of humanity's oldest technologies for gathering, connection, and storytelling. Around it, people strung beads and twine into jewelry, browsed a curated display of paintings and sculpture by local artists, and grabbed a plate from the refreshments table. Nothing was scheduled yet; the point was simply to notice who else was in the room before the formal program began.",
        },
        {
          act: "II",
          title: "Transform",
          subtitle: "Duet No. 1",
          location: "Mainstage",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-02.jpg",
          text: "Guests were led upstairs for the premiere performance, seated along both sides of a runway-style stage — with no single front, where you sat shaped what you saw. Two dancers in pointe shoes, identities hidden at first, worked under one rule: never break eye contact with each other. Their movement travels from cold, structured geometry into something startlingly human, tracing how closeness actually happens between two people.",
        },
        {
          act: "III",
          title: "Share",
          subtitle: "Pond Installation",
          location: "Balcony",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-01.jpg",
          text: "Between performances, guests climbed to the top floor to find a still pond installation. Each person was invited to cast a small mirror circle into the water — a quiet offering, a way of leaving something of yourself behind before heading back downstairs. Crossing the room also broke up where people had been sitting, so nobody watched the next piece from the same seat twice.",
        },
        {
          act: "IV",
          title: "Attach",
          subtitle: "Quartet accompanied by orchestra",
          location: "Mainstage",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-04.jpg",
          text: "Composer Samuel Mutter scored this second piece for a quartet of dancers moving alongside a small live ensemble — soprano, trumpet, violin, and viola. Rhythmic repetition ties the two together until sound and motion start to mirror each other, the same way small repeated gestures build real closeness between people over time.",
        },
        {
          act: "V",
          title: "Celebrate",
          subtitle: "Celebration",
          location: "Mainstage Exit",
          image: "/assets/experiences/spontaneous-attachment-gallery/photo-10.jpg",
          text: "The formal program ended, but the night didn't. Audience members received a piece of dark chocolate on their way out, then stayed to unwind. With the performances behind them, guests mixed casually with the dancers, musicians, and crew — turning the closing minutes into the kind of conversation the whole night had been building toward.",
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
      // Was rendering live on /experiences.html as a real, non-clickable
      // card with placeholder "TODO" copy — hide it from grids until it has
      // real content and a detail page. Remove this flag then.
      draft: true,
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
      // Card-style Experience Design section (see renderDesignFlowCards in
      // experience.js) — distinct from the act-based accordion used by
      // items like In Between Things.
      experienceDesignStyle: "card",
      experienceDesign: [
        {
          title: "The Cave",
          image: "/assets/experiences/what-clings-gallery/photo-01.jpg",
          text: "The things we think are extraordinary today — silence, darkness, shooting stars — were once just day-to-day life for humans before. I often wonder if we can ever know what was lost. Inside, you are welcome to explore, nap, and draw on the walls with special markers.",
          credit: "Directed by Ishaan Goel",
        },
        {
          title: "The Anti-Gallery",
          image: "/assets/experiences/what-clings-gallery/photo-15.jpg",
          text: "Everything inside of here was made between March and September 2025 across 14 gatherings and with more than 150+ contributors. We only started this work. It is your turn to finish it. Collage, paint, draw, write, and anything else you can think of.",
          credit: "Directed by Ishaan Goel",
        },
        {
          title: "Your Birthday Party",
          image: "/assets/experiences/what-clings-gallery/photo-26.jpg",
          text: "Make your childhood self a gift, write a card, and add it to our altar.",
          credit: "Directed by Ishaan Goel",
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

  // ---------- Events ----------
  // Bookable event formats — written to speak to people considering hiring
  // maybe:fiction to design their own celebration, not as a personal recap.
  // source: 3_Celebrations/Ishaan 30th Birthday folder (photos) + the real
  // Partiful event page for "[Pilot] S1E1: Celebrating Three Decades"
  // (partiful.com/e/V2THNMMJROF1gXfI9yO5).
  events: [
    {
      id: "birthdays",
      title: "Adult Birthdays",
      tag: "Gathering",
      hasImage: true,
      hasDetailPage: true,
      placeholderSrc: "/assets/events/birthdays/card.jpg",
      heroPhoto: "/assets/events/birthdays/hero.jpg",
      tagline: "Our format for milestone birthdays — a structure we design once, then adapt to whoever it's for.",
      shortDescription: "A milestone birthday celebration built around one afternoon in three parts: making, playing, and performing. Debuted for our own co-founder's 30th — now a format we design for other people's celebrations too.",
      description: "A milestone birthday celebration built around one afternoon in three parts: making, playing, and performing.",
      basics: {
        format: "Custom milestone celebration",
        groupSize: "Debuted for 60 guests — scales up or down",
        length: "6-hour arc, split into three 2-hour phases",
        homeBase: "Venue scouted per celebration — NYC and beyond",
      },
      impactStats: [
        { value: "60", label: "Guests hosted for the debut celebration" },
        { value: "3", label: "Distinct phases woven into one afternoon" },
        { value: "6", label: "Hours from doors open to the last slice of cake" },
      ],
      experienceDesign: [
        {
          title: "Make",
          subtitle: "2 hours",
          image: "/assets/events/birthdays/gallery-03.jpg",
          text: "Craft stations tailored to the guest of honor — bracelet-making, collage, comics, playdough sculpting — paired with a spread built for grazing, not sitting down.",
        },
        {
          title: "Play",
          subtitle: "2 hours",
          image: "/assets/events/birthdays/gallery-01.jpg",
          text: "Games with just enough stakes to get strangers competitive together: spikeball, arcade basketball, nerf battles, and whatever else the room needs to loosen up.",
        },
        {
          title: "Perform",
          subtitle: "2 hours",
          image: "/assets/events/birthdays/gallery-07.jpg",
          text: "An MC'd run of live performances — music, comedy, spoken word, whatever the guest list brings — closing with cake, and a standing offer for any performer brave enough to take one to the face.",
        },
      ],
      fullSynopsis: [
        "Adult Birthdays is maybe:fiction's format for milestone celebrations — a structure we design once and then adapt to whoever it's for. Instead of one long party, the day unfolds in three distinct two-hour phases: making, playing, and performing, so a room of very different people all find their own way in.",
        "The debut ran as \"[Pilot] S1E1: Celebrating Three Decades,\" our first full production of the format, built for co-founder Ishaan Goel's 30th birthday. Sixty guests moved through craft stations, group games, and a run of live performances MC'd through the afternoon — closing, as tradition now has it, with cake and the option for any performer brave enough to take one to the face.",
        "Small details carried the whole thing: a mini gallery built from guests' own early-stage and experimental artwork, a menu with vegan options built into every phase, and a schedule loose enough that people could drop into the part that spoke to them and stay as long as they liked.",
        "It was framed as a pilot on purpose. Adult Birthdays is a format we're still building out, adapting the make/play/perform structure to a different milestone and guest list each time it runs.",
      ],
      credits: {
        "Designed & Hosted By": "maybe:fiction",
        "Debut Edition": "Ishaan Goel's 30th birthday, March 2025 — built as the pilot for the format",
      },
      gallery: Array.from({ length: 8 }, (_, i) =>
        `/assets/events/birthdays/gallery-${String(i + 1).padStart(2, "0")}.jpg`
      ),
    },
  ],
};
