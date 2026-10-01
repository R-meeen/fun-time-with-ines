// Venue details checked 1 October 2026. Source links belong to each card.
const ideas = [
  {
    "id": "elfengrotte",
    "title": "Elfengrotte",
    "description": "A little grotto, a waterfall, and a walk through the trees.",
    "category": "activity",
    "image": "images/elfengrotte.png",
    "activity": "explore",
    "vibes": [
      "adventurous",
      "romantic"
    ],
    "location": "Bad Bertrich, Eifel",
    "details": [
      "Farther day trip by car",
      "The official Elfengrotte walking loop is 2.4 km"
    ],
    "source": "https://www.rlp-tourismus.com/de/infosystem/infosystem/Elfengrotte-Kaesegrotte_Bad-Bertrich/infosystem.html",
    "extras": [
      "images/elfengrotte_route.png",
      "images/elfengrotte_maps.png"
    ]
  },
  {
    "id": "jungfernsprung",
    "title": "Jungfernsprung",
    "description": "A sandstone lookout above Dahn, with a view worth the climb.",
    "category": "activity",
    "image": "images/jungfernsprung.png",
    "activity": "explore",
    "vibes": [
      "adventurous"
    ],
    "location": "Dahn, Pfalz",
    "details": [
      "Farther day trip by car",
      "Around 70 m high; viewpoint above the town"
    ],
    "source": "https://www.dahner-felsenland.net/vg_dahner_felsenland/Tourismus/Felsen/Jungfernsprung/",
    "extras": [
      "images/maps_jungfernsprung.png"
    ]
  },
  {
    "id": "teufelstisch",
    "title": "Teufelstisch",
    "description": "A forest walk to an extraordinary table-shaped sandstone rock.",
    "category": "activity",
    "image": "images/teufelstisch.png",
    "activity": "explore",
    "vibes": [
      "adventurous"
    ],
    "location": "Hinterweidenthal, Pfalz",
    "details": [
      "Farther day trip by car",
      "Combine the rock formation with a forest walk"
    ],
    "source": "https://www.hinterweidenthal.de/",
    "extras": [
      "images/maps_Teufelstisch.png"
    ]
  },
  {
    "id": "altschlossfelsen",
    "title": "Altschlossfelsen",
    "description": "Explore dramatic red sandstone towers and winding forest paths.",
    "category": "activity",
    "image": "images/altschlossfelsen.png",
    "activity": "explore",
    "vibes": [
      "adventurous"
    ],
    "location": "Eppenbrunn, Pfalz",
    "details": [
      "Farther day trip by car",
      "The rock formation stretches about 1.5 km; this is not the total hike distance"
    ],
    "source": "https://www.rlp-tourismus.com/en/infosystem/infosystem/Altschlossfelsen_Eppenbrunn/infosystem.html",
    "extras": [
      "images/maps_altschlossfelsen.png"
    ]
  },
  {
    "id": "bingerwald",
    "title": "Binger Wald",
    "description": "A woodland escape with walking trails and views towards the Rhine.",
    "category": "activity",
    "image": "images/BingerWald.png",
    "activity": "explore",
    "vibes": [
      "adventurous",
      "romantic"
    ],
    "location": "Bingen am Rhein",
    "details": [
      "Day trip by car",
      "Choose a woodland route before we set off"
    ],
    "source": "https://www.bingen.de/leben/binger-wald/erholungwalderlebnis",
    "extras": [
      "images/maps_Bingerwald.png"
    ]
  },
  {
    "id": "palmengarten",
    "title": "Palmengarten",
    "description": "Wander among plants and glasshouses, with no need to rush.",
    "category": "activity",
    "image": "images/palmengarten.jpg",
    "activity": "outside",
    "vibes": [
      "romantic"
    ],
    "location": "Frankfurt, Westend",
    "details": [
      "Botanical gardens and glasshouses",
      "See the venue website for admission and opening times"
    ],
    "source": "https://www.palmengarten.de/de/gaerten/palmengarten.html"
  },
  {
    "id": "therme",
    "title": "Taunus Therme",
    "description": "Warm pools and a relaxed afternoon in our own little bubble.",
    "category": "activity",
    "image": "images/taunus_therme.png",
    "activity": "creative",
    "vibes": [
      "romantic"
    ],
    "location": "Seeddammweg 10, Bad Homburg",
    "details": [
      "Thermal pools and sauna areas",
      "Check the current ticket options before going"
    ],
    "source": "https://www.taunus-therme.de/"
  },
  {
    "id": "minigolf",
    "title": "Schwarzlichthelden",
    "description": "Neon minigolf, 3D effects, and some very serious bragging rights.",
    "category": "activity",
    "image": "images/SchwarzlichtheldenMinigolf.png",
    "activity": "creative",
    "vibes": [
      "playful",
      "adventurous"
    ],
    "location": "Berger Stra\u00dfe, Frankfurt",
    "details": [
      "18 indoor minigolf holes",
      "Allow about 60\u2013120 minutes; booking recommended"
    ],
    "source": "https://www.schwarzlichthelden.de/reservieren-frankfurt/"
  },
  {
    "id": "rageaxe",
    "title": "Rage Axe",
    "description": "Try axe throwing together. Let us see who has the better aim.",
    "category": "activity",
    "image": "images/Rage_Axe.png",
    "activity": "creative",
    "vibes": [
      "adventurous",
      "playful"
    ],
    "location": "Brunnenweg 13, Weiterstadt",
    "details": [
      "Outside Frankfurt, near Darmstadt",
      "Advance booking required; instruction provided"
    ],
    "source": "https://rageaxe.de/en/indoor-activities-frankfurt/"
  },
  {
    "id": "hike1",
    "title": "Hike 1 \u00b7 Schwanheimer D\u00fcne",
    "description": "Follow the boardwalk through a surprisingly different corner of Frankfurt.",
    "category": "activity",
    "image": "images/wanderung_1_Bohlenweg_Schwanheimer_D\u00fcne.png",
    "activity": "outside",
    "vibes": [
      "adventurous"
    ],
    "location": "Frankfurt, Schwanheim",
    "details": [
      "See our saved route below",
      "Exact distance and walking time depend on the chosen route"
    ],
    "source": "https://www.regionalpark-rheinmain.de/erlebnis/schwanheimer-duenen/",
    "extras": [
      "images/wanderung_1_bohlenweg_schwanheimer_d\u00fcne_route.png"
    ]
  },
  {
    "id": "hike2",
    "title": "Hike 2 \u00b7 G\u00e4nseweiher & Fechenheimer Weiher",
    "description": "A forest-and-water outing using your saved route.",
    "category": "activity",
    "image": "images/wanderung_2_g\u00e4nsewieher-fechenheimerweiher.png",
    "activity": "outside",
    "vibes": [
      "adventurous"
    ],
    "location": "Frankfurt, Fechenheim",
    "details": [
      "See our saved route below",
      "Exact distance and walking time depend on the chosen route"
    ],
    "source": "https://frankfurt.de/themen/umwelt-und-gruen/orte/wald/waelder/fechenheimer-wald",
    "extras": [
      "images/wanderung_2_g\u00e4nsewieher-fechenheimerweiher_route.png"
    ]
  },
  {
    "id": "hike3",
    "title": "Hike 3 \u00b7 Jacobiweiher",
    "description": "Walk beside the water and explore the city forest together.",
    "category": "activity",
    "image": "images/wanderung_3_JacobiWeiher.png",
    "activity": "outside",
    "vibes": [
      "adventurous"
    ],
    "location": "Frankfurt Stadtwald",
    "details": [
      "See our saved route below",
      "Exact distance and walking time depend on the chosen route"
    ],
    "source": "https://frankfurt.de/themen/umwelt-und-gruen/orte/stadtgewaesser/teiche-seen-tuempel/jacobiweiher",
    "extras": [
      "images/wanderung_3_JacobiWeiher_route.png"
    ]
  },
  {
    "id": "senckenberg",
    "title": "Senckenberg Naturmuseum",
    "description": "Explore dinosaur skeletons and the natural world together. Pick the exhibit that surprises us most.",
    "category": "activity",
    "image": "images/Senckenberg Naturmuseum.png",
    "activity": "creative",
    "vibes": [
      "adventurous",
      "romantic"
    ],
    "location": "Senckenberganlage 25, Frankfurt",
    "details": [],
    "source": "https://museumfrankfurt.senckenberg.de/de/"
  },
  {
    "id": "boardgames",
    "title": "Board games & a cozy blanket",
    "description": "Make a blanket nest, pick a favorite game, grab snacks, and settle in. Friendly competition optional.",
    "category": "activity",
    "image": "images/cozy-evening.png",
    "activity": "home",
    "vibes": [
      "cozy"
    ],
    "location": "At home",
    "details": [
      "Just for our Cozy + Stay in plan"
    ]
  },
  {
    "id": "netflix",
    "title": "Netflix & soup",
    "description": "A comforting bowl of soup, something good to watch, and absolutely no rush.",
    "category": "activity",
    "image": "images/netflix-soup.png",
    "activity": "home",
    "vibes": [
      "cozy"
    ],
    "location": "At home",
    "details": [
      "Just for our Cozy + Stay in plan"
    ]
  },
  {
    "id": "tea",
    "title": "Tea & a little puzzle",
    "description": "Warm tea, a jigsaw puzzle, and an easy evening at our own pace.",
    "category": "activity",
    "image": "images/tea-puzzle.png",
    "activity": "home",
    "vibes": [
      "cozy"
    ],
    "location": "At home",
    "details": [
      "Just for our Cozy + Stay in plan"
    ]
  },
  {
    "id": "lohrpark",
    "title": "Lohrpark picnic",
    "description": "Bring a blanket and our favorite snacks for a picnic with a city view.",
    "category": "food",
    "image": "images/lohrpark_picknick.jpg",
    "food": [
      "picnic"
    ],
    "location": "Lohrberg, Frankfurt",
    "details": [
      "Meadows and a view over Frankfurt",
      "Best suited to dry weather"
    ],
    "source": "https://frankfurt.de/frankfurt-entdecken-und-erleben/sehenswuerdigkeiten/aussichtspunkte/lohrpark-und-lohrberg",
    "vibes": [
      "romantic"
    ]
  },
  {
    "id": "liebieghaus",
    "title": "Caf\u00e9 im Liebieghaus",
    "description": "Coffee in historic surroundings, with a lovely courtyard for a sunny break.",
    "category": "food",
    "image": "images/cafe_liebieghaus.png",
    "food": [
      "coffee"
    ],
    "location": "Schaumainkai 71, Frankfurt",
    "details": [
      "Closed Mondays; check special closures on the website",
      "Ask about current vegan cake options"
    ],
    "source": "https://liebieghaus.de/en/liebieghaus-cafe"
  },
  {
    "id": "sugarmama",
    "title": "Caf\u00e9 Sugar Mama",
    "description": "A coffee stop near the Main, with time to sit and chat.",
    "category": "food",
    "image": "images/cafe_sugar_mama.png",
    "food": [
      "coffee"
    ],
    "location": "Kurt-Schumacher-Stra\u00dfe 2, Frankfurt",
    "details": [
      "Check current opening times before going",
      "Ask which treats are vegan that day"
    ],
    "source": "https://www.frankfurt-tipp.de/en/index/top-addresses/s/adress/cafe-sugar-mama.html"
  },
  {
    "id": "tonka",
    "title": "Tonka",
    "description": "A relaxed dinner with creative seasonal vegetable dishes and regional ingredients.",
    "category": "food",
    "image": "images/restaurant-tonka.jpg",
    "food": [
      "vegan"
    ],
    "location": "Friesengasse 19, Frankfurt-Bockenheim",
    "details": [],
    "source": "https://tonka.restaurant/",
    "imageSource": "https://tonka.restaurant/wp-content/uploads/2024/11/photo_2024-07-17_12-30-00.jpg"
  },
  {
    "id": "ongtao",
    "title": "Ong Tao Vegan",
    "description": "Vietnamese favorites in their fully plant-based version.",
    "category": "food",
    "image": "images/Restaurant_OngTaoVegan.png",
    "food": [
      "vegan"
    ],
    "location": "Friedberger Anlage 14, Frankfurt",
    "details": [
      "Choose the Ong Tao Vegan location",
      "Fully vegan Vietnamese kitchen"
    ],
    "source": "https://www.ongtaovegan.de/home"
  },
  {
    "id": "wencheng",
    "title": "Wen Cheng",
    "description": "Hand-pulled Biang Biang noodles, with both vegan and non-vegan choices.",
    "category": "food",
    "image": "images/Restaurants_VeganOptions_Wen_Cheng.png",
    "food": [
      "vegan",
      "dinner"
    ],
    "location": "Berger Stra\u00dfe 111, Frankfurt",
    "details": [
      "Vegan dishes available; the restaurant is not fully vegan",
      "Walk-ins only, no reservations"
    ],
    "source": "https://www.wenchengnoodles.com/locations/frankfurt",
    "menu": "https://www.wenchengnoodles.com/de/menu"
  },
  {
    "id": "kish",
    "title": "Kish",
    "description": "A Persian dinner and a table for two.",
    "category": "food",
    "image": "images/Restaurant_Kish_PersianFood_nonVegan.png",
    "food": [
      "dinner"
    ],
    "location": "Leipziger Stra\u00dfe 16A, Frankfurt",
    "details": [
      "Persian restaurant; listed under regular dinner",
      "Check the menu and reserve ahead"
    ],
    "source": "https://kish-restaurant.de/home/"
  },
  {
    "id": "mainterrasse",
    "title": "Main Terrasse",
    "description": "An evening stroll by the river, followed by a skyline view as the sun goes down.",
    "category": "ending",
    "image": "images/main_terrasse.png",
    "ending": [
      "sunset"
    ],
    "location": "Main riverbank, Frankfurt",
    "details": [
      "Outdoor bar with skyline views",
      "Seasonal and weather-dependent; check before going"
    ],
    "source": "https://main-terrasse.com/"
  },
  {
    "id": "astor",
    "title": "ASTOR Film Lounge MyZeil",
    "description": "Pick a film and get comfortable for a cinema evening.",
    "category": "ending",
    "image": "images/Astor_Kino.png",
    "ending": [
      "movie"
    ],
    "location": "MyZeil, Frankfurt",
    "details": [
      "See the current film program and book seats",
      "Check the screening language when choosing a film"
    ],
    "source": "https://frankfurt.premiumkino.de/"
  }
];
