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
    email: "hello@maybefiction.com",
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
      { src: "/assets/experiences/what-clings-gallery/photo-01.jpg", caption: "What Clings" },
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
      placeholderSrc: "/assets/experiences/jornada-gallery/madrid-2023-hero.jpg",
      heroPhoto: "/assets/experiences/jornada-gallery/madrid-2023-hero.jpg",
      gradient: "grad-blue",
      hasImage: true,
      hasDetailPage: true,

      // Top-level overview — true of the format across every edition, so it
      // stays static rather than switching when a different edition's card
      // is expanded below (that's what the per-edition fields are for).
      basics: {
        createdBy: "Super Alex",
        dateRun: "June 2023 - Ongoing",
        venue: "Private homes in Madrid & Brooklyn, NYC",
        format: "Home-based performance art festival",
        runtime: "3 hours",
        audienceSize: "Limited to 40 people per event",
      },

      fullSynopsis: [
        "<strong>Jornada de Puertas Abiertas</strong> (Open Doors Day) is a performance art festival that <strong>takes place inside a private home</strong>, temporarily transforming a domestic environment into a public space for live participatory art. <strong>Each room hosts a different performance</strong> or installation, responding to the architecture, atmosphere, and particularities of the space.",
        "By opening an intimate domestic space to strangers, the festival uses the <strong>tension between the private and the public</strong> to create interactions that could not exist in a conventional theatre or gallery. <strong>The home becomes</strong> more than a venue: it is <strong>an active collaborator</strong>, shaping the unfolding of each work and opening space for ritual, whimsy, and unexpected encounters.",
        "<strong>Visitors are invited to participate</strong> rather than simply observe, discovering moments of wonder, play, and connection that reveal the extraordinary potential of everyday spaces.",
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
          theme: "Shared Intimacies",
          themeSubtitle: "How do strangers become close?",
          themeDescription: [
            "For its second edition, Jornada de Puertas Abiertas turned its attention to the many meanings of roots. Some roots anchor us; others entangle us. Some are inherited, while others are formed slowly through the relationships, rituals, and places that shape our lives.",
            "Presented across two homes, the festival invited audiences to move between these different understandings. Performances explored the body, childhood, migration, grief, celebration, memory, and belonging through shared rituals, participatory installations, music, dance, and live painting. Together, they suggested that home is not simply where we come from, but something we create with others, again and again.",
          ],
          basics: {
            dateRun: "June 2024",
            venue: "Two private homes in Brooklyn, NYC. Exact address disclosed only to confirmed attendants.",
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
          theme: "Roots",
          themeSubtitle: "What allows us to feel at home, and what must we let go of in order to grow?",
          themeDescription: [
            "The inaugural edition of Jornada de Puertas Abiertas explored the home as a site where intimacy could be constructed collectively, rather than hidden. The different performances revolved around how trust, vulnerability, and play might emerge between people who had only just met.",
            "The featured works transformed familiar rituals — playing games, doing the laundry, lying in bed, watching home-made videos, or gathering everyday objects — into opportunities for collective participation. Rather than presenting intimacy as something fixed or personal, the festival approached it as something created through shared experience: a fleeting condition that arises when people choose to spend time, attention, and imagination together.",
          ],
          basics: {
            dateRun: "June 2023",
            venue: "Private homes in Madrid, Spain. Exact address disclosed only to confirmed attendants.",
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
      // Verbatim from fullSynopsis[3] below (its closing line), not
      // independently written — see project feedback: this item's copy
      // should always track the synopsis doc as its single source of truth.
      // Picked this line over an excerpt of fullSynopsis[0] because it
      // stands alone as a teaser without repeating the opening paragraph
      // word-for-word right above it on the detail page.
      shortDescription: "What Clings asks what ways of relating still exist beneath the surface of everyday life, waiting to be noticed, practiced, and shared again.",
      description: "What Clings asks what ways of relating still exist beneath the surface of everyday life, waiting to be noticed, practiced, and shared again.",
      placeholderSrc: "/assets/experiences/what-clings-gallery/photo-01.jpg",
      heroPhoto: "/assets/experiences/what-clings-gallery/photo-01.jpg",
      // Curated for the small photo-grid preview (see renderHeroGrid) —
      // one striking anchor shot (the dot wall) plus one from each of the
      // three rooms, plus a live-performance shot for human energy against
      // the otherwise-empty installation photos. Deliberately avoids
      // reusing photo-01 (already the hero banner above this).
      heroGridPhotos: [
        "/assets/experiences/what-clings-gallery/photo-19.jpg",
        "/assets/experiences/what-clings-gallery/photo-09.jpg",
        "/assets/experiences/what-clings-gallery/photo-15.jpg",
        "/assets/experiences/what-clings-gallery/photo-18.jpg",
        "/assets/experiences/what-clings-gallery/photo-25.jpg",
      ],
      gradient: "grad-blue",
      hasImage: true,
      hasDetailPage: true,

      // source: What Clings Bio doc, 02_Communications. "At a Glance" fields
      // (visitors/collaborators/communityPartners) added below the original
      // set: collaborators/communityPartners are counted directly from the
      // credits object beneath (20 unique names across Director through
      // Photo/Video; 13 in Community Co-Hosts). visitors has no source
      // number yet — TK until a real attendance figure is confirmed.
      basics: {
        dateRun: "October 3–5, 2025",
        venue: "Prospect Heights, Brooklyn",
        format: "Three-room immersive exhibition",
        runtime: "1 hour 30 minutes",
        admission: "Free",
        ageAdvisory: "Family-friendly",
        visitors: "TK — attendance count pending",
        collaborators: "20",
        communityPartners: "13",
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
      // Rewritten per project direction into a strict 3-paragraph structure
      // (what it was / why / what visitors experienced) so the opening copy
      // reads as one idea at a time instead of several at once — reusing
      // the original doc's own language throughout rather than introducing
      // new claims. The closing thesis line (paragraph 4, also used verbatim
      // as shortDescription above) is unchanged.
      fullSynopsis: [
        "What Clings grew out of a summer of community gatherings across Brooklyn — walks through Greenwood Cemetery and Williamsburg, collaborative drawing sessions, clay workshops, dance improvisations, water balloon fights, zine making, and birthday celebrations. Those gatherings became the foundation for a three-room exhibition, each room transforming a different piece of that summer into an environment visitors could enter and continue.",
        "At the heart of the project is an interest in experiences that once felt ordinary but have become increasingly uncommon: looking up and seeing a sky full of stars, making something with strangers, celebrating one another through shared rituals. These possibilities haven't disappeared — they've simply become less common as the ways we gather, create, and spend time together have changed.",
        "Each room created a different set of conditions for visitors to discover, contribute, and celebrate together — reading hidden messages by UV light, touching and rearranging unfinished artworks, adding their own card to a communal birthday cake. Nothing stayed fixed: the exhibition remained unfinished until someone new walked in, and every visitor left having shaped it a little further for the next.",
        "What Clings asks what ways of relating still exist beneath the surface of everyday life, waiting to be noticed, practiced, and shared again.",
      ],
      // Each photo is tagged with the Experience Design element it belongs
      // to (must match an experienceDesign[].title below exactly) so the
      // Gallery section can filter in sync with the element tabs above it.
      // element: null means "whole-exhibition" photos (signage, a live
      // performance night) that don't belong to one of the three spaces —
      // these only show under the Gallery's "All" filter.
      gallery: [
        { src: "photo-01.jpg", element: "The Cave" },
        { src: "photo-02.jpg", element: "Your Birthday Party" },
        { src: "photo-03.jpg", element: "Your Birthday Party" },
        { src: "photo-04.jpg", element: "Your Birthday Party" },
        { src: "photo-05.jpg", element: "Your Birthday Party" },
        { src: "photo-06.jpg", element: "Your Birthday Party" },
        { src: "photo-07.jpg", element: "The Anti-Gallery" },
        { src: "photo-08.jpg", element: "The Cave" },
        { src: "photo-09.jpg", element: "The Cave" },
        { src: "photo-10.jpg", element: "The Anti-Gallery" },
        { src: "photo-11.jpg", element: "The Cave" },
        { src: "photo-12.jpg", element: null },
        { src: "photo-13.jpg", element: "The Anti-Gallery" },
        { src: "photo-14.jpg", element: "The Anti-Gallery" },
        { src: "photo-15.jpg", element: "The Anti-Gallery" },
        { src: "photo-16.jpg", element: "The Anti-Gallery" },
        { src: "photo-17.jpg", element: "The Anti-Gallery" },
        { src: "photo-18.jpg", element: "Your Birthday Party" },
        { src: "photo-19.jpg", element: "The Anti-Gallery" },
        { src: "photo-20.jpg", element: "The Anti-Gallery" },
        { src: "photo-21.jpg", element: "Your Birthday Party" },
        { src: "photo-22.jpg", element: "The Anti-Gallery" },
        { src: "photo-23.jpg", element: null },
        { src: "photo-24.jpg", element: null },
        { src: "photo-25.jpg", element: null },
        { src: "photo-26.jpg", element: "Your Birthday Party" },
      ].map((p) => ({ ...p, src: `/assets/experiences/what-clings-gallery/${p.src}` })),
      // Card-style Experience Design section (see renderDesignFlowCards in
      // experience.js) — distinct from the act-based accordion used by
      // items like In Between Things.
      experienceDesignStyle: "card",
      // Copy sourced verbatim from the "Experience Design" table in the
      // What Clings Bio doc — tagline: Purpose row, materials: Materials
      // row, text: What Happened row. Do not paraphrase; refresh from that
      // doc if it changes.
      experienceDesign: [
        {
          title: "The Cave",
          dek: "Discover hidden traces using ultraviolet light.",
          tagline: "Create a sense of wonder by revealing the extraordinary hidden within the ordinary.",
          materials: "10×10 pop-up canopy, butcher paper, UV flashlights, UV markers, ripped field notebooks, handwritten grief letters, ethnographic notes, drawings, improvised live DJ",
          image: "/assets/experiences/what-clings-gallery/photo-01.jpg",
          text: "Visitors entered what appeared to be an empty paper cave carrying only a small UV flashlight. As they wandered, hidden drawings, symbols, and handwritten markings gradually emerged across the paper walls. Scattered throughout the space were ripped pages from field notebooks containing ethnographic observations, sketches, and grief letters created during community walks through Greenwood Cemetery and Williamsburg. Before leaving, visitors were invited to add their own invisible drawings and writing with UV markers, allowing the cave to continue growing with each new participant.",
          communityEvents: "Greenwood Cemetery, Williamsburg Art Walk",
          credit: "Directed by Ishaan Goel",
        },
        {
          title: "The Anti-Gallery",
          dek: "Touch, rearrange, and complete unfinished artworks.",
          tagline: "Challenge the conventions of the traditional gallery by transforming spectators into participants and treating art as a living, relational process.",
          materials: "CRT televisions, headphones, reusable water balloons, drawings, collages, clay sculptures, zines, chapbooks, pigeon drawings, paint, markers, collage materials, blank canvases",
          image: "/assets/experiences/what-clings-gallery/photo-15.jpg",
          text: "Every station originated from a previous maybe:fiction gathering. Visitors watched footage of a water balloon fight and a collaborative dance event on CRT televisions while interacting with the objects those events produced. They painted clay sculptures, expanded an evolving collage wall, designed zine covers, created pigeon drawings, altered chapbooks through cross-outs, and explored photographs from the summer series. Nothing was behind glass or off limits. The exhibition remained unfinished until visitors touched, altered, and contributed to it themselves.",
          communityEvents: "Water Balloon Fight, Dance & Draw, Clay Creatures, Collage, Zines, Chapbooks, Pigeons of New York, Ishaan's Birthday",
          credit: "Directed by Ishaan Goel",
        },
        {
          title: "Your Birthday Party",
          dek: "Celebrate childhood rituals with strangers.",
          tagline: "Use the birthday as a shared ritual for remembering, honoring, and celebrating the child within each of us.",
          materials: "Birthday cake installation, handmade cards, gifts, photographs, childhood objects, everyday objects from the early 2000s",
          image: "/assets/experiences/what-clings-gallery/photo-26.jpg",
          text: "Visitors were invited to create themselves a birthday card or small gift and place it around a communal birthday cake installation. Surrounding the space were photographs from the summer series alongside cubes containing familiar childhood objects from the early 2000s. Together, these small acts of making transformed an individual birthday into a shared celebration of the child within each of us.",
          communityEvents: "Printmaking Workshop, Summer Series, Childhood Objects",
          credit: "Directed by Ishaan Goel",
        },
      ],
    },
    {
      id: "when-a-friend-knocks",
      title: "When A Friend Knocks",
      category: "series",
      tag: "Series",
      // source: friendknocks_original_site.pdf (01_Media), the season's own promo one-pager --
      // Overview column, verbatim. Do not paraphrase; refresh from that doc if it changes.
      shortDescription: "when a friend knocks is an experimental, intimate art series taking place in Summer 2025, ending in a public exhibition.",
      description: "when a friend knocks is an experimental, intimate art series taking place in Summer 2025, ending in a public exhibition.",
      placeholderSrc: "/assets/experiences/when-a-friend-knocks-gallery/photo-01.jpg",
      heroPhoto: "/assets/experiences/when-a-friend-knocks-gallery/photo-01.jpg",
      heroGridPhotos: [
        "/assets/experiences/when-a-friend-knocks-gallery/photo-13.jpg",
        "/assets/experiences/when-a-friend-knocks-gallery/photo-09.jpg",
        "/assets/experiences/when-a-friend-knocks-gallery/photo-24.jpg",
        "/assets/experiences/when-a-friend-knocks-gallery/photo-06.jpg",
        "/assets/experiences/when-a-friend-knocks-gallery/photo-38.jpg",
      ],
      gradient: "grad-blue-purple",
      hasImage: true,
      hasDetailPage: true,
      // Hidden for now per project direction: excluded from the Experiences
      // grid/filter bar and the Next Experience carousel, but the page
      // itself stays live at /experiences/when-a-friend-knocks for direct
      // links. Remove this flag to bring it back into normal navigation.
      draft: true,
      // Homepage Highlights is a deliberately curated 3 (Jornada, In Between
      // Things, What Clings) per project direction — keep this one on
      // /experiences.html only, not auto-added as a 4th highlight.
      excludeFromHighlights: true,

      basics: {
        dateRun: "Season One — March 1 – September 26, 2025",
        venue: "Homes, parks, gardens, and small businesses across Brooklyn",
        format: "Participatory summer art series, 5 episodes",
        runtime: "One season",
      },
      credits: {
        "Experience Designer / Facilitator": "Ishaan Goel",
        "Producer": "maybe:fiction",
        "Episode Partners": "Brooklyn Peace Center, Elemental Bakery, Third Nature",
        "Community Hosts": "Ellen High (Community Quilt), Kelly Chang (Zines), Alice Wang (Pigeons of New York), Sumra, Audrey",
      },

      fullSynopsis: [
        "when a friend knocks is an experimental, intimate art series taking place in Summer 2025, ending in a public exhibition.",
        "It brings five of Ishaan's fictional short stories to life in the form of participatory, interactive gatherings. Examples include a birthday party where performers smash him in the face with cake, a giant water balloon fight, and a pop-up café in a Chinese restaurant where everyone draws pigeons.",
        "These are not performances, but temporary spaces to gather, play, and make art as a social practice. The artifacts generated at each event — sounds, images, videos, writings, objects — will be curated into a final interactive community exhibition in Fall 2025.",
        "when a friend knocked at your door, asking to play basketball. What else was there even to do? Computers were chunky cubes, more for reference than immersion. Chained to schools, libraries, and offices, not humans. The most entertaining app on your phone, the one borrowed from your mom, had a little red ball bouncing through tunnels and over spikes. TV shows were not consumed in one big gulp. And when you walked around, people looked up.",
        "Through this project, Ishaan hopes to bring back a fossilized world—even if only for snatches of time and at the tiniest of scales; not only through people's interactions, but also by playfully resisting against the tools and behaviors that buried it. And perhaps, even beyond this project, it will motivate others (and himself) to continue to preserve and rebuild this world.",
      ],

      // Each photo tagged with the episode it belongs to (must match an
      // experienceDesign[].title below exactly) so Gallery filters in sync
      // with the episode tabs above it, same pattern as What Clings.
      gallery: [
        { src: "photo-01.jpg", element: "Three Decades" },
        { src: "photo-02.jpg", element: "Three Decades" },
        { src: "photo-03.jpg", element: "Three Decades" },
        { src: "photo-04.jpg", element: "Three Decades" },
        { src: "photo-05.jpg", element: "Three Decades" },
        { src: "photo-06.jpg", element: "Three Decades" },
        { src: "photo-07.jpg", element: "Red vs Blue" },
        { src: "photo-08.jpg", element: "Red vs Blue" },
        { src: "photo-09.jpg", element: "Red vs Blue" },
        { src: "photo-10.jpg", element: "Red vs Blue" },
        { src: "photo-11.jpg", element: "Red vs Blue" },
        { src: "photo-12.jpg", element: "Red vs Blue" },
        { src: "photo-13.jpg", element: "Red vs Blue" },
        { src: "photo-14.jpg", element: "Red vs Blue" },
        { src: "photo-15.jpg", element: "Red vs Blue" },
        { src: "photo-16.jpg", element: "Red vs Blue" },
        { src: "photo-17.jpg", element: "Pop-Up Cafés" },
        { src: "photo-18.jpg", element: "Pop-Up Cafés" },
        { src: "photo-19.jpg", element: "Pop-Up Cafés" },
        { src: "photo-20.jpg", element: "Pop-Up Cafés" },
        { src: "photo-21.jpg", element: "Pop-Up Cafés" },
        { src: "photo-22.jpg", element: "Pop-Up Cafés" },
        { src: "photo-23.jpg", element: "Pop-Up Cafés" },
        { src: "photo-24.jpg", element: "Pop-Up Cafés" },
        { src: "photo-25.jpg", element: "Pop-Up Cafés" },
        { src: "photo-26.jpg", element: "Pop-Up Cafés" },
        { src: "photo-27.jpg", element: "Pop-Up Cafés" },
        { src: "photo-28.jpg", element: "Pop-Up Cafés" },
        { src: "photo-29.jpg", element: "Pop-Up Cafés" },
        { src: "photo-30.jpg", element: "Pop-Up Cafés" },
        { src: "photo-31.jpg", element: "Pop-Up Cafés" },
        { src: "photo-32.jpg", element: "Pop-Up Cafés" },
        { src: "photo-33.jpg", element: "Pop-Up Cafés" },
        { src: "photo-34.jpg", element: "Pop-Up Cafés" },
        { src: "photo-35.jpg", element: "Field Trips" },
        { src: "photo-36.jpg", element: "Field Trips" },
        { src: "photo-37.jpg", element: "Field Trips" },
        { src: "photo-38.jpg", element: "Field Trips" },
        { src: "photo-39.jpg", element: "Field Trips" },
        { src: "photo-40.jpg", element: "Field Trips" },
        { src: "photo-41.jpg", element: "Field Trips" },
        { src: "photo-42.jpg", element: "Field Trips" },
      ].map((p) => ({ ...p, src: `/assets/experiences/when-a-friend-knocks-gallery/${p.src}` })),

      experienceDesignStyle: "card",
      // Episode copy grounded in the season's photo record + the promo
      // doc's Overview/Gatherings sections -- see friendknocks_original_site.pdf.
      // Treated as a fully separate project from What Clings (its season
      // finale) per project direction -- no reference or link between the two.
      experienceDesign: [
        {
          act: "01",
          title: "Three Decades",
          tagline: "The pilot \u2014 Sat, March 1",
          image: "/assets/experiences/when-a-friend-knocks-gallery/photo-01.jpg",
          text: "The season premiere doubled as Ishaan's 30th birthday party — the same afternoon that later became the pilot for maybe:fiction's Adult Birthdays format. Guests wore birthday hats labeled by how they knew him (Art, Family & Family Friends, U Mich, South Brunswick, Sports), traded a piece of candy for the story of how they'd met, and stayed for cake, live music, and a dance performance at the Brooklyn Peace Center, with treats from Elemental Bakery.",
          credit: "Hosted with Brooklyn Peace Center & Elemental Bakery",
        },
        {
          act: "02",
          title: "Red vs Blue",
          tagline: "Fri, June 21",
          image: "/assets/experiences/when-a-friend-knocks-gallery/photo-07.jpg",
          text: "Fifty-plus guests split into Red and Blue teams for a community water balloon fight at Mount Prospect Park. Sidewalk chalk announced the sign-up on the pavement outside; buckets of balloons kept both sides armed until one team soaked the other.",
          credit: "Hosted with Third Nature",
        },
        {
          act: "03",
          title: "Pop-Up Caf\u00e9s",
          tagline: "June 22 \u2013 Sept 21",
          image: "/assets/experiences/when-a-friend-knocks-gallery/photo-17.jpg",
          text: "Three community members turned their own homes, gardens, and family businesses into pop-up cafés over the summer. Ellen hosted a community quilt session at Ishaan's apartment with sweets by Sumra; Kelly ran a zine-making pop-up at Underhill Gardens with baked goods by Audrey; and Alice hosted a pigeon-drawing café inside her family's Chinese restaurant, surrounded by the pigeon paintings that lined its walls all season.",
          credit: "Community-hosted \u2014 Ellen (Community Quilt), Kelly (Zines, Underhill Gardens), Alice (Pigeons of New York)",
        },
        {
          act: "04",
          title: "Field Trips",
          tagline: "June 22 \u2013 Sept 21",
          image: "/assets/experiences/when-a-friend-knocks-gallery/photo-35.jpg",
          text: "Smaller excursions ran in parallel with the pop-up cafés — a walk through Greenwood Cemetery, a rooftop session painting clay creatures, and a Dance & Draw gathering — each one a field trip to a different corner of the city instead of a shared host.",
        },
        {
          act: "05",
          title: "Crossing Paths",
          tagline: "Sat, Sept 26",
          text: "The season's closing regular episode, held the week before its artifacts — sounds, images, writings, and objects gathered from every gathering — came together for the exhibition.",
        },
      ],

      // Full text of the five short stories the season's gatherings were
      // built around -- source: 04_Production/Maybe_Fiction Final Story
      // Collection (5 .docx files). Rendered as a native accordion, one
      // paragraph/line per array entry, matching the docs' own line breaks.
      storyCollection: [
        {
          title: "The Price of Company",
          paragraphs: [
          "Most mornings, I come here for the company and speak only to the barista to place my order.",
          "“A tongue burning Americano and average Caprese sandwich?” she asks.",
          "Nearby, a father with two little boys stares with a grim, dejected face, but I can only eke him out an awkward smile. I don't know what face to make for him because I don't have kids and there is no face I know how to make to comfort him. An arsenal of toys litter the table near a barely eaten pizza—a skateboard, two nerf guns, and a box of Lorna Doone shortbread cookies. The smaller boy mounts a skateboard while the larger one shoots five dice. Dice clank on the table, ricocheting in all directions, prompting the smaller one, perhaps based on the outcome of the role, to glide down the aisle, and right through my legs. Two dice plop into a nearby flat white unnoticed, and the coffee's owner takes a swig of snake-eyes right down his gullet. The father, cursing under his breath, “get over here you fu—,” chases after the smaller boy, rubbing past me. He shepherds him back to the safety of their radius like a sheep herder who knows wolves lurk around the shadows. This all continues without much commotion because the boys are young, the father is young, and we all know that this is the easiest part of their day.",
          "The man with dice moving through his digestive tract perches on a stool facing the window, nursing a big coffee mug, one brought from home to save ten cents and the entire fate of the planet. Maybe he, like me, couldn't eat breakfast alone and needs those big headphones to drown out his inner voice. Unlike me, he seems to have a strong core, and seemingly can spend all day working on his spreadsheet, bringing in positive cash-flow for some big corporation.",
          "Farther down, a man and woman, cloaked in peacoats, knock back single-shot espressos. The man scans her resume,  chants \"tell me about a time when\" over and over, and takes notes on a white legal pad.  I wonder what church he might belong to.",
          "This is all very nice, but I'm going broke. On average, fifteen dollars each morning, over five thousand dollars a year. Soon my credit card will get canceled, and I'll have to resort to a payday lender to finance my company. Wouldn't it be easier if everyone here just came to my apartment?",
          "The father and boys just need somewhere to be on a Tuesday while the man working on his laptop just needs to set-up shop anywhere that’s not his apartment. And the man and woman, well, they probably chose this location at random. Perhaps they would all come with me?",
          "I think about this so much that I believe it's possible. I approach the father first.",
          "\"Is there space for the kids to run around?\" he asks.",
          "\"Yea my living room is pretty big, and we have an outdoor patio too.\"",
          "\"You got food?\"",
          "\"I could make you some. I have whole wheat sour-dough bread, brown-eggs, oats, fruit, and fake bacon.\"",
          "\"What's fake bacon?\"",
          "\"Well, it's just tempeh strips flavored like bacon.\"",
          "\"What's tempeh?\"",
          "\"Well, it's just…\"",
          "\"Never mind, man. As long as there's room for these kids, I'll go anywhere.\" The father retrieves the most recently escaped boy, dragging him by his left hand, while I head over to the dude working on his laptop.",
          "\"Can I play my own music?\"",
          "\"What kind of music do you like?\"",
          "\"Pop.\"",
          "\"Sure, I have some portable speakers.\"",
          "\"What if someone else wants to play music?\"",
          "\"I'll tell them they're your speakers and it's up to you.\"",
          "\"Do you have coffee?\"",
          "\"Yea, I can make you some.\"",
          "\"Hazelnut?\"",
          "\"What?\"",
          "\"Do you have hazelnut coffee? I only drink hazelnut flavored coffee.\"",
          "\"Sure, I'll buy hazelnut coffee.\"",
          "\"It's not Keurig is it? I only drink French Press.\"",
          "\"I'll make you french press.\"",
          "I approach the man and woman.",
          "\"Do you have a table where we can both face each other?\"",
          "\"Yea.\"",
          "\"What would you say are your apartment's best qualities?\"",
          "\"Well, it's spacious, certainly for a Jersey City apartment, and I have a lot of books, and my roommates don't get home until after 5.\"",
          "\"Do you have any questions for us?\"",
          "\"What?\"",
          "\"Like, did you want to ask us anything?\"",
          "\"No.\"",
          "Finally, I return to the barista, my order waiting in front of her. I tell her I no longer need it and, instead, offer her one dollar more per hour to come work for me.",
          "“What about benefits?” she asks.",
          "“Well, I can’t officially offer health insurance but we have a fully stocked bathroom with unlimited bandages, ibuprofen, and cough drops.”",
          "She flings off her apron, which lands inside the spreadsheet guy’s mug, and follows us.",
          "We march to my apartment like we're on a field trip. Up stairs, through doors, and into the kitchen. The spreadsheet guy sits at the farthest end of my dining room table, and slams away. The man and the woman sit on the other end and return to their job interview. The father shepherds both kids inside and takes a seat on the couch, exhausted. The bigger boy shoots the dice and the smaller boy clutches at the skateboard.",
          "\"Where's the Bose Speaker?\" yells the spreadsheet guy.",
          "\"Where's the fake bacon?\" asks the father.",
          "–",
          "We do this for many years. The man interviews the woman who advances from round-to-round, year-after-year. Skateboards scratch up wooden floors and nerf pellets are found behind the couches. Sometimes they even bring friends excited to hang out at a coffee shop off the beaten path. I never do learn to give the father a comforting face, but I start to write that novel because the voice is softer now, and the seats in my living room have lumbar support. Sometimes I do yoga in the living room and the smaller boy glides through my legs while I’m in Warrior Two. The landlord once walks in during the middle of the day, learns about the whole ordeal, and hikes up rent five thousand dollars. My roommates never find out.",
          "But it does not last. The woman interviewing finally makes it through all the rounds. She doesn’t get the job. The spreadsheet guy starts his own business, right there at my dining room table, and earning enough passive income that he doesn’t need to work anymore. He buys the building from my landlord to transform my small business into an international mega company. He offers me to stay as CEO, COO, and CSO, but I politely decline, so he offers all those positions to the barista instead, “I’ll pay you exactly one thousand more dollars per hour than you currently make.” She accepts. The kids grow up, go off to kindergarten, stop playing games, and start texting their friends. I finish my novel, cultivate a yoga routine, and travel to Chile to hike in the andes",
        ],
        },
        {
          title: "Rules of Engagement",
          paragraphs: [
          "Rishi was a doctor at Columbia University Irving Medical Center who never learned to chug beer, sports bet, or talk about personal finances. Whenever Rishi suggested hanging out, on a rare weekend off, he proposed building a fort in his brownstone on the Upper West Side or playing manhunt in Central Park.",
          "“Guys, first weekend off in two months! Come over to my place. Bring some extra pillows if you can,” Rishi messaged in our ten-person chat.",
          "“C’mon Rishi, let’s just get a beer. We can meet at our usual place to watch the Knicks game,” I responded.",
          "“In for the Knicks game.”",
          "“Me too.”",
          "“+1.”",
          "We typically posted up at The Three Monkeys, settled into a cozy corner, and ordered pitchers of Corona. Most of us discussed retirement strategies. In college, we had discussed girls. Rishi rarely had anything to say about either.",
          "A week before Rishi’s 30th birthday I received a package with a super soaker, a 100-pack sachet of water balloons all colorful like jellybeans, and a red life-vest. A laminated index card, hand-written, hid behind the merchandise.",
          "Red Team. Blue Team. Central Park. First team to soak all the members of the other team wins. Feel free to bring family members or +1s. I’ll send a GPS pin.",
          "-Rishi",
          "We created another group chat without Rishi that evening.",
          "“You guys get a care package in the mail too?” I texted them.",
          "“Yea.”",
          "“Me too.”",
          "“+1.”",
          "“We actually gonna do this?”",
          "“It’s his 30th. I think we have to.”",
          "“Dude, I don’t wanna get wet.”",
          "“Me neither.”",
          "“C’mon guys, it’s his birthday. He bought us all water guns. I don’t even buy my kids water guns. We can’t bail.”",
          "“Fuck it, maybe it’ll be fun.”",
          "“Sure.”",
          "“Fine.”",
          "“+1.”",
          "I walked over to Central Park with Nina who pushed the stroller with our baby, Leo. The sun hung high as a heavy heat whispered to the back of my neck and light winds peppered my ankles and hair. I stared down at my iPhone, which guided us to Rishi’s geo-location.",
          "“Happy birthday, man!” I said as we approached him.",
          "“Fuck ya, dude. You ready to squirt?” said Rishi.",
          "Rishi had three leather holsters presumably with water pistols latched to his cargo shorts. His pockets were stuffed with a couple more. A camouflage bandana spooned with his forehead while a 45-liter backpacking pack desperately held ripe water balloons.",
          "Most of us had families by now. Some of us had married quite early. Taco had a five-year old son who asked to play. Rishi quickly rejected the notion and insisted the battle was only for the boyz. Family members could spectate and help themselves to the fresh cut watermelon, home-made brownies, and assorted bought-from-Costco bags of chip spread on the bought-from-Costco foldable table planted on top of a tree’s shadow. Then, Taco Jr. started to cry, and Tony didn’t show up, so Rishi relented. Taco Jr. joined the blue team.",
          "The wind skipped leaves across the concrete river that divided the grass. Joggers and bikers swam through it behind Rishi while he explained the instructions. On the other side, Nina’s left-hand clutched Leo’s stroller while her right gestured and wormed as she spoke to other family members.",
          "“Alright boys don’t go past the lake. Small splashes are fine. You need to get significantly soaked to be eliminated. Be careful not to squirt other people. I’ll fire the gun to start the game,” said Rishi.",
          "“Gu-” said Edward.",
          "Rishi shot a starting pistol, the ones they used to kick-off track races. Two nearby joggers flinched and one woman fell off her Citi Bike. She got up without any fanfare and seemed fine, so we all dispersed. Some of us in pairs.",
          "I wanted to get Rishi. He was a sneaky bastard even when we were younger. When he hid for manhunt in elementary school, he waited more than half an hour after we called game to come out so that we couldn’t discover his hiding spots for future games. We never did. He still won’t tell me where he hid. Rishi knew game theory before ever taking an economics class.",
          "I hid behind a tree to get a sense of the territory and immediately spotted Taco and Taco Jr. getting pelted with water balloons. Blue team lost two members less than a minute into the battle. Taco Jr. stumbled onto the concrete path, almost hitting the woman on a Citi Bike who fell earlier. I looked past the woman and saw Rishi gliding in the distance on roller skates, slithering around, dancing through a barrage of water balloons from my team. Danny, who played college baseball, threw out his right arm trying to peg Rishi, the worst athlete out of us all. At least in typical circumstances. With Danny focused on Rishi and Gerald trying to fill up his super soaker with a Kirkland water bottle, Xavier snuck-up behind them and emptied out his water gun. Rishi rolled past, shooting a creeping Edward with a pistol, saving Xavier.",
          "“Damn, Rishi, thanks bro,” said Xavier.",
          "After twenty minutes or so, my entire team returned to their families. Their gingham button downs clung sticky on their flesh like wet slices of bread as they walked towards the snacks set-up. I was red team’s sole unblemished member, still behind the tree, not a speckle of wet on my clothes. Not even sweat. Rishi would be coming for me soon.",
          "When Rishi spotted me, he pulled out a purple bazooka from his backpack, and started to launch water balloon after water balloon. His aim was not particularly good. Most balloons exploded several feet in front of me. I backpedaled, keeping Rishi and Xavier in front until I was behind another tree. I could hear Nina cooing to Leo in the background and Taco yelling at Taco Jr. to be more careful on the Citi Bike. I picked-up a still-intact water balloon that had plopped below my feet and launched it at Xavier.",
          "“Fuck ya,” I said swinging my left arm across my chest as I retreated behind the tree. Rishi was the last man left and I was now eager to bring the red team a victory.",
          "“Yo, go try some of my brownies Xavier,” said Rishi as he glided past him. I poked my head out and saw Rishi was only a few feet away from me.",
          "“Just like old times!” said Rishi as he honed in on my location. He continued to launch water balloons toward me as I went back and forth between covering behind the tree and shooting at Rishi’s head. Rishi hurled a balloon unexpectedly on target, but I instinctively ducked and watched it sail over my head like a fastball. Rishi’s bazooka stopped firing and I perked up, spinning away from my cover and out into the open, ready to assault Rishi.",
          "“You’re done Ri-”",
          "“Honey!” Nina cried from behind me.",
          "I turned around to see Taco Jr. on the floor next to Leo’s toppled-over stroller and a riderless Citi Bike. Blood puddled beneath the stroller.",
          "Rishi saw too and had already ripped off his backpack, thrown away his bazooka, and rushed to the scene. He pulled alcohol swabs out of one of his cargo short pockets and began dabbing Leo’s face, soothing him with soft, whispery, “it’s okays” and “shh’s.”",
          "“I’ll take him to Columbia. Don’t worry,” said Rishi.",
          "Leo would be fine. Rishi was a damn good doctor.",
        ],
        },
        {
          title: "Pointing At Trees",
          paragraphs: [
          "The first time we ran into each other I spotted him through the coffee shop’s window, craned into his notebook, sketching in pinks, blue, and purples. He wore his black and white checkered shirt, the same one he sported across all three days of the art retreat where we met. He claimed it was a “layer” and not a “daily.” His hair, disheveled and parting in all directions, made him look prematurely balding, but he just needed to shower.",
          "“Hey!” I called perhaps too loudly. He jumped at least an inch out of his seat, colored pencils flustered and frazzled.",
          "His neck caught up with me, and his mouth said, “hey.”",
          "We chatted about our holidays, wishing each other a happy new year in February. A conversation about spending time with our parents quickly slipped into talks of existence and death. These were the only conversations he knew how to have.",
          "“I started to think about death too young,” he now explained to me, “Rather than my mom catching me masterbating in my bedroom, she caught me Googling ‘what happens when I die’”.",
          "“What did she say,” I asked.",
          "“Honestly, it was beautiful. She told me not to worry about it and that when the time came, I’d want it to happen.”",
          "“That sounds really peaceful,” I told him, “I thought about death real young too, but not actually mine. More so my mom and dad’s.”",
          "We spent the rest of that day together. Even though he preferred taking work meetings in private, he stayed. And even though I had lunch waiting at home, I stayed. When our work day was over, we went to the park nearby. We pointed out trees.",
          "“What if there was a gallery but the art was just stuff in this park?” I mused. He didn’t seem to get it, and then did that thing where he looks around like he needs to commune with the sky and stars to process things. Our footsteps crunched, squished, and scraped slushes of snow lingering in the park. Eventually we went our separate ways.",
          "“This was fun,” he said, “We should do this more often.”",
          "“What? Just run into each other?” I joked. But he never seemed to understand my sense of humor, and this time was no different.",
          "“That’s not a bad idea. What if our entire relationship was just running into each other?”",
          "“What do you mean?”",
          "“They say the thing that makes someone the happiest is running into someone they know in public spontaneously. We could be that serendipity for each other.”",
          "I didn’t see him for a while after that, but began to run into other people all the time as if he had placed some curse on me. Cathleen at the laundromat. Antonio at my bagel place. Sebastian at the movies while I was on a date. But never him. So I started to go to that same coffee shop every day. They say stay put when you’re lost because if you go wandering when someone is looking for you, then you might just miss each other. Perhaps an apt metaphor for love too, not just rescue. It only took a few days, but there he was wearing his “layer.”",
          "“I told you this would work out,” he said proudly.",
          "“So you were only expecting us to see each other every few months?”",
          "“I mean, not necessarily,” he said,  “We could have seen each other every day if somehow circumstantially we did the exact same thing hour by hour day by day. But I guess we could increase our surface area a bit to improve the odds. Do you work out?”",
          "“What, you’re trying to work out together?” I asked.",
          "“No no no. Then we’d have to coordinate. BUT, if we go to the same gym, we’re more likely to run into each other, right?”",
          "I joined his gym later that day. He was right. We ran into each other several times a week after that.",
          "“I figured out why I am so scared of dying,” he said, hovering around me while I split squat. “I just don’t really believe in anything. I think it really does feel like it will be nothing for me even though I’d really love to believe in something.”",
          "Weeks later, he sprained his hip flexor, and stopped going to the gym. It also didn’t help that I was spending more and more time in my new lover’s neighborhood. But I still kept going to the gym on the off chance he recovered. I got in the best shape of my life over those two years, but it seems like his injury was bad enough for him to never come back.",
          "–",
          "When my partner and I finally moved in together, his voice erupted from the ether as I carried a box of miscellaneous to our new apartment. This was apparently where he lived all along and now we were neighbors. We ran into each other almost every day for years after that. He played with Bella in the hallway but could never babysit her on date nights because of our original arrangement.",
          "One day he told me was shifting to a night time job. I didn’t see him for another year. Bella asked why she couldn’t just go over to his apartment to play, and I told her that he was just a run-into-each-other friend. She asked if I had any more of those. “No,” I told her, “just him.”",
          "“Honey, I think I might become a bartender,” I told my partner one day, out of the blue.",
          "“Is this your mid-life crisis?” they asked.",
          "“Yes,” I told them.",
          "His office and my bar were on the same street, but we could never coordinate ride shares together unless it just so happened we walked out at the same time and one of us already ordered one while the other was planning to take public transit. One of those days, I just canceled mine, and took the five dollar penalty.",
          "“So have you finally figured out what happens after you die,” I asked him, jabbing his shoulder.",
          "“Figured out, no. Committed to an idea, yes,” he said.",
          "“What are you committed to?”",
          "“Reincarnation I think. The whole matter not being destroyed gives me some logical sense for it. There’s probably a place to squeeze consciousness in there too.”",
          "“I really tried to believe in reincarnation a little after that, but even if I came back as another person or animal, what were the chances we’d actually end up in the same place?",
          "We continued to have these little bump-ins for years. I’d always cancel my Uber and take the fee. Sometimes we’d slip into the park after our shifts when the dark blue of night met the light blue of day. We pointed out trees.",
          "“We never did that art gallery,” he mentioned once.",
          "“How would we have,” I asked him, “I don’t think that would fit our arrangement.”",
          "“I think it’s still possible. We still have time,” he said. I wanted to believe him.",
          "Eventually my partner and I had another kid, and we moved to the suburbs. Every now and then I still ventured out to that old gym, stumbled into that old park, and smoked a cigarette next to our old building, never knowing how I’d explain myself if we did run into each other. But it didn’t matter because I never saw him after that.",
          "–",
          "Bella and Elliot both eventually  left our nest, and I started to think about that gallery again. I drove to that old park every Sunday for months, walking the landscape, discerning which trees were more aesthetic than others. I wondered whether the exhibit should only be trees. They were easiest to guarantee would still be around in a month. The leaves could leave and the animals, even those who made the park their homes, wouldn’t stay in one spot for long.",
          "Except for the one squirrel that always lingered around the same patch of grass during my scouting trips. Its fur whipped in all directions, exposing patches of bare skin. I badly wanted to brush it down neatly so it would stay warmer even though I guess, I wasn’t even sure it was cold. Occasionally I’d approach it, and it would jolt slightly, dropping the acorns in its mouth, scurrying away. But it never left, always circling back to that spot, picking up those acorns again. I took a chance and made it the final part of my exhibit.",
          "Flyers went up around our old neighborhood. Half of them pinned to the board in our old coffee shop. Others  slid below the old apartment building’s door. The public enjoyed the gallery, and Mr. Squirrel never disappointed, remaining a fixture that whole summer. Even outlasting some trees. Exhibit Six was struck down by unannounced lighting only days into the exhibit.",
          "He never did show up though. Not that I really expected him to anymore. We never shared our ages, but I assumed the same ballpark, and I was quite old now. Maybe I’d run into him being wheelchaired around by a kid? I wonder if he even got married or had kids like me?  For all I knew, he died the day we left for the suburbs.",
        ],
        },
        {
          title: "What Sully Found",
          paragraphs: [
          "It was a very ordinary spaceship despite bringing with it extraordinary circumstances. Domed at the top, saucered on the side, and metallic all around. Some might say it was too conservative for the times, limiting all the ways a spaceship could be. As if whoever sent it had humans in mind and wished to convey a simple, reductive concept. But nothing came out of it, and when the doors were finally opened, nothing was inside of it. There was nobody to ask anything about it at all.",
          "No nation could stake a claim to the vessel that landed on international land. The global council, which many thought useless, suggested allocating a number of researchers equivalent to a country's socioeconomic and cultural significance. Surprisingly, there was little protest about this arrangement. Lesser nations, although unhappy, seemed to understand that any bickering would just delay exploration.",
          "The main nation received about fifty percent of the spots. Smaller and insignificant ones received a quarter, a half, or even a tenth. Many of them cooperated, combining their allocations, to send at least one representative for the entire block. We were not significant enough to receive multiple spots but not so insignificant to receive a partial, so we got exactly one. And while every other nation sent their best astrologists, physicists, and engineers, we sent an archaeologist.",
          "It's not that we believed any less in the abilities of the hard disciplines. We simply knew none of our best could compete with their best, especially the main nation's. Whatever our scientists and engineers could learn, the other nation's scientists and engineers could certainly learn faster. So we took a different approach, a gamble, and hoped that sending someone who might see the spaceship differently, could add some value. To our surprise, he became the only one to figure out anything at all.",
          "—",
          "When Sully first entered the spaceship, he was the only one who took the mug on the command center seriously. Of course, others had noticed it, but they paid it no mind. Some simply thought it belonged to one of the other scientists. Sully fixated on it. The stale, cold, and mechanical ship provided very little else for someone of his talents to investigate. There were no photos, books, or even discarded pieces of paper. If he dug into the bottom, he would just find wires, engines, and machinery before eventually hitting the actual surface of his own planet. Though that was something he could work with. Had anyone ever explored below international lands?",
          "Sully was surprised he was here at all. Even he expected his country to send over someone much more technical and quantitative than him. Someone who at least knew a thing about space. Not that he thought those professionals were better than him. They just made much more sense for the context. But the head of the nation insisted on sending someone like him. And because expectations were low, Sully thought it might be a fun little trip. And now, he had a mug to study.",
          "He approached it carefully, as if it were a rabbit that would run away at the sound of human steps. Hovering above it, he stared deeply into the blackness of the liquid inside. Even though Sully could not describe it fully, it was a mesmerizing black. At times, it was like staring up at the night sky into the universe. Small spots texturing the liquid mimicked intergalactic stars. Sully wafted his hand over the cup where hot steams met his palm. It's still warm, he thought. If he did not know any better, it was just a regular cup of joe.",
          "\"Hey, is this anyone's coffee?\" he finally shouted out loud. Everyone looked up, momentarily pausing their inspection of panels, and nodded No. There were only ten others in the room with him. The global council had implemented a shift system. Cohorts of ten could tinker with the vessel for three hours during their shift.",
          "That it was warm made no sense to Sully. He wondered if the mug itself was heating it, so he slipped two fingers through the handle. The exterior was like any ordinary mug. It felt ceramic. It was textured and not slippery. It was good to hold. What it was not was a heater. There was nothing sophisticated about it at all. How did the coffee remain hot zooming through time and space? If it was coffee at all.",
          "He was compelled to take a sip. Never before in his field work had he done such a thing. He looked around to make sure no one was watching, concerned he was contaminating evidence, and pressed the mug's top to his lips. The mug slowly curled toward his face, and he took exactly one precise gulp.",
          "It was thick and rich, and not watered down. It was the type that needed no milk. It was quite delicious. It could have been coffee, but not quite. The liquid slid down his throat with the viscosity of honey but without the sweetness—instead carrying hints of cinnamon, cardamom, and something unnameable. It warmed him from the inside out, spreading through his limbs until his fingertips tingled.",
          "After a few seconds, it changed something in him. Sully's body became so light that he worried he'd float up and hit the ceiling. There was a new fluidity to everything he saw in front of him. The hard contours and edges of objects lost their rigidity. The world seemed less stubborn. Even the other scientists transformed before his eyes—their movements becoming more graceful, their expressions more transparent. He could almost see the thoughts forming behind their eyes, like watching fish swim beneath the surface of clear water. Even if they did not find anything useful from this liquid or even the ship at large, he was now sure that something profound existed out there.",
          "As you can imagine, we were all incredulous at first. We assumed Sully had made some grave mistake, thinking a normal mug, one likely left by a fellow scientist, was special. But the main nation's general, the pseudo leader of the whole situation, and the first one to board the ship, confirmed the mug was always there. Like everyone else he did not make much of it at the time.",
          "We put the liquid through every test imaginable. Clearly, there was something extra terrestrial about it. We believed that analyzing its chemical composition and physical characteristics would provide some insight. It was divided into parts and allocated the same way the researchers had been. The main country got nearly half. Others were lucky to receive a milliliter. Some got such microscopic quantities that when handed the sample, they were not entirely confident there was anything there at all. We were lucky Sully discovered it, and received nearly a tenth of the liquid. They even let us keep the mug believing only the liquid inside was of intrigue.",
          "Several months later, the main nation reported they had identified exactly which galaxy it came from. They did not explain what method or which technology led them to this conclusion. They said it would take decades if not centuries to reach the galaxy, but they would start immediately. None of us questioned their ambitions, and frankly, we were glad that they even had the resources for such an expedition. They named the craft: ORIGIN.",
          "We continued to tinker with the liquid for a few years after that. Sully came on as a consultant even though he had little to contribute at this stage. Eventually our researchers said nothing more could be studied, but we could revisit the sample when new technologies developed. It eventually went the way of a cold case file even as the liquid inside remained hot.",
          "And even as ORIGIN hurtled through time and space, most eventually forgot about the very ordinary spaceship that landed that one day. For the curious, the main nation had a website available to the public to track progress. It noted that a mug was left inside, filled with the best coffee from our world, as a sort of homage to the discovery, and perhaps, a peaceful gesture to whoever or whatever was out there.",
          "Sully had never stopped thinking about it. As far as he knew, he was the only one to ever taste it. No one else dared fearing immediate death or even becoming victim x of a world wide contagion. The lightness he felt that day and the way the world had shifted for him was no mere memory. He was not looking inside his head to find it. It was just embedded in him. Ever since that day, he knew he had to experience it again.",
          "This is why he had broken into the facility where we held it. Not actually broken in as he had access, but in intention.",
          "Even if he could not know exactly where it came from or who sent it or why, perhaps another sip would stir something in him, and provide some final insight. And so on a pretty unremarkable day, ordinary as can be, he set out for the facility. Everyone knew who he was, and he got through layers of security with ease. He stepped into the room. The mug sat inside a clear container in the center like a prized jewel. And yes, we did occasionally make money from having wealthy patrons see it privately.",
          "Sully stood over the mug, and the liquid was as mystical as the first day he saw it. He opened the glass, grasped the mug, which was still warm, the exact same as before. He brought it near his lips, looked around as he did the first time, and took a sip. But he could not resist just a sip. He gulped the whole thing down.",
          "And suddenly, right when the last bit of liquid was consumed, the top of the mug began to glow, swirling like a black hole. It began sucking and vacuuming the world around it. It was not an aggressive vacuuming, but a welcoming one.",
          "It took Sully.",
          "And with no one to hold the mug, it crashed down to the floor and shattered into sharp shards like any mug would.",
          "–",
          "We don't know where Sully went. Some speculate that the mug was the real craft and whoever sent the larger, stereotypical spaceship, was just playing a cruel joke on our species. Somewhere they were watching us squirm and waste resources on a meaningless token.",
          "But Sully again renewed interest in the investigation. Now everyone wanted to study the mug. The global council suggested allocating the mug's pieces exactly as expected. The main nation received about half. Lesser nations settled with grains. We received the biggest shard, bigger than even some of the more important nations. We were lucky that Sully's gulp had opened that portal. We were lucky we sent Sully at all. Perhaps he was teleported to wherever that very ordinary spaceship came from, and had started to broker a peace between our worlds. Maybe time works differently there and Sully will be around for ORIGIN's arrival.",
        ],
        },
        {
          title: "A Sweet Kiss",
          paragraphs: [
          "Today is Ruhi’s one-hundredth birthday, and she’s worried it won’t happen for her this year. Over the phone, she asks the cake-walah if he can do it when he arrives with her pineapple pastry.",
          "“Madame, you know that won’t work. It must be done by someone close to you. Maybe, if Munna Dada were still alive, he would have done it.”",
          "The boy was right—she barely knew him. He only recently took over the shop from Munna. Still, Ruhi can’t help but smile to herself. At least Munna had passed along the tradition. What his grandson genuinely believed didn’t really matter. Perhaps it would slip out in a conversation with his children. Perhaps they’d do it to him, or to his partner, or their friends, or their own children. But who will do it to her today?",
          "“Madame, what about your husband? Surely, he can do it.”",
          "Rohan died of a heart attack two decades ago. He never believed in the custom. Why would having cake smeared on your face affect what happens after you die? Their first birthday together, Ruhi shoved the entire Halwa Cake into his face. The semolina clung to his nose, refusing to slide down like the cream from a typical cake.",
          "“What are you doing, you mad woman?” he said, shoving her away.",
          "Ruhi started to cry, but she knew it was her duty now—his mother had surely done it before her. So she continued every year. Divorce wasn’t an option. He couldn’t leave her, she couldn’t leave him. By his sixtieth birthday, he finally relented.",
          "“Okay,” he said. “If you must, do it gently. I’m not a child in a cafeteria food fight. Only the right cheek—the bad one.”",
          "She agreed, her finger grazing the butterscotch frosting—his favorite. She dabbed it on his right cheek. An atom of goo was all that was required. That she welcomed more didn’t matter. It wouldn’t change her odds of ending the cycle of death and rebirth, but a little peck on Rohan’s cheek might affect his. He held back a smile.",
          "“Madame, so sorry to hear about your husband. But what about your friends?”",
          "Her two closest friends attended her last birthday. They grabbed snowball chunks and rubbed them on both of her cheeks. A hunk of pineapple slid down the right one like a confectionary snail. Ruhi retaliated, smashing two pastries into their faces. She laughed the laugh that made her stomach twist. They told her to calm down, sit down, and stop laughing. She might have a heart attack. But she didn’t stop. “Don’t worry,” she said , “if I die now, it won’t matter. I’ll make it.”",
          "They passed away a few months ago. One slipped down the stairs; the other never woke up one morning. She assumes they escaped the cycle. They must have. She caked them herself for over ninety years. Would she still get a chance to join them? To become them?",
          "“Madame, don’t you have any children?”",
          "Her youngest, who would’ve gladly done it, passed away in a car accident when she was a teenager. Her eldest lived in America. Junal had planned to visit but broke her leg just days before Ruhi’s birthday. But even if she were here now, she wouldn’t have done it.",
          "“Mummy, that doesn’t make any sense,” Junal said when Ruhi explained to her the tradition. \"Why would it work this way? What evidence is there? How does this fit with physics, biology, and chemistry? Besides, I don’t think non-Indians do this. What about them? What happens to them?”",
          "“Beta, they do what they need to do. We do this. Not everyone has to do the same.”",
          "“Mummy, this is dumb. Stop spreading cake on my face. It’ll ruin my skin.”",
          "Because Junal never allowed even a tickle on her face, Ruhi snuck in every year while Junal was asleep, swiped a little on her forehead, waited ten seconds, then wiped it off with a damp cloth. Sometimes Junal tossed a little, almost waking up, so Ruhi snuck out on tiptoes. Later, she’d giddily tell her husband about her victory, only for him to flip the other way and grumble, “You crazy woman.” They did this until Junal went off to college in America.",
          "“Madame, I am so sorry. Deeply sorry for the loss of your smaller daughter. But don’t worry, Madame. Don’t worry. I will bring you some pastries and celebrate with you. I will shove them in your face, and we’ll try our best.”",
          "Ruhi puts the phone down and tightens the blankets around her trembling body. The cake-walah didn’t ask about her grandchildren—she has one, whom she’s met only a few times. If Junal mentioned the tradition to her, it was certainly not in earnest but in jest.",
          "Yesterday, Ruhi considered going up the staircase she’d avoided for fifteen years, afraid of falling. She pictured sneaking into Junal’s old bedroom one last time, tiptoeing back to her own room with Rohan, then trying her best to come back down. She wondered—if she slipped and fell, would she make it? Would it count? She wouldn’t force it, but she wouldn’t resist either. At her age, the odds were high that it would be her last fall. But it felt wrong to ask for death. Even Junal would have agreed that whether you were Indian or non-Indian, you shouldn't ask for death. So today, Ruhi asks for forgiveness, muttering mantras until they are interrupted by clanking outside.",
          "“Coming, beta! I’m coming.” She wrestles with her blankets, finally shedding the weight of comfort. Short, swivelly steps carry her to the gate. She is relieved that the cake-walah came sooner than expected. But would it be enough? Maybe she could place the pastry on a high shelf and walk into it. Would that work?",
          "“I’m here, beta. One minute.” She clutches the rusted iron handles and swings her front gate open. “Please, just give me some time.”",
          "The gate barely opens before cream and pineapple splatter into Ruhi’s face.",
          "A sweet, raspy voice bellows, “Happy birthday, Nani!”",
          "Ruhi only sees white. Cold sweats secreting from her face mix with sugar and flour as she gasps for breath.",
          "“Nani, are you okay?”",
          "Ruhi opens her mouth to speak, but her chest tightens. She collapses forward, arms outstretched, the cake smearing from her face to Anya’s.",
          "“Help! Someone help! Please, call an ambulance. I think she’s having a heart attack.”",
          "Passersby, arrested by the shrieks, rush over. Arms wrap around Ruhi in piles. In the distance, a cake-walah, fumbling for his phone, drops a pastry to the ground and despite the commotion, Ruhi hears the plop. A cow cranes her neck to witness the scene.",
          "Ruhi is glad that Anya knew, and that she came all the way here to do it. It was good practice. And yet, too late for Anya, who had already spent much of this life not following the custom. Like Junal, she would get a chance in the next one.",
          "But it was not too late for her children. And their children. And their children’s children.",
          "Hopefully, Anya would tell them. And they would do it.",
          "Not because it meant something to them, but because they thought it was fun.",
        ],
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
