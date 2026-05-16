export interface Park {
  id: string;
  name: string;
  state: string;
  image: string;
  compositeScore: number;
  bestMonths: number[];
  temperature: {
    min: number;
    max: number;
  };
  flightTime: {
    SFO: number;
    LAX: number;
    JFK: number;
    ORD: number;
  };
  features: {
    stargazing: boolean;
    hiking: boolean;
    camping: boolean;
    wildlife: boolean;
  };
  description: string;
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  proHacks: string[];
  redditSentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

export const parks: Park[] = [
  {
    "id": "indiana-dunes",
    "name": "Indiana Dunes",
    "state": "IN",
    "image": "https://images.unsplash.com/featured/?Indiana+Dunes,national+park",
    "compositeScore": 3.2,
    "bestMonths": [
      4,
      8,
      9
    ],
    "temperature": {
      "max": 69,
      "min": 51
    },
    "flightTime": {
      "SFO": 6.833333333333333,
      "LAX": 4,
      "JFK": 4,
      "ORD": 1
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park sits on the southern tip of Lake Michigan, acting as a massive biological crossroads.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hike the 9-mile Cowles Bog Trail to the secluded beach. Picnic at West Beach. Do the 3 Dune Challenge at the State Park (if willing to pay extra fee)."
        ]
      }
    ],
    "proHacks": [
      "The state park (which is completely surrounded by the national park) costs a separate entrance fee, but houses the famous '3 Dune Challenge'.",
      "Hike the Cowles Bog Trail to see how the landscape transitions from swamp to forest to dunes to beach in just a few miles.",
      "To avoid the terrible summer weekend beach crowds, go to the far eastern edge (Mt. Baldy or Central Avenue Beach)."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "new-river-gorge",
    "name": "New River Gorge",
    "state": "WV",
    "image": "https://images.unsplash.com/featured/?New+River+Gorge,national+park",
    "compositeScore": 3.5,
    "bestMonths": [
      4,
      9
    ],
    "temperature": {
      "max": 74,
      "min": 49
    },
    "flightTime": {
      "SFO": 5.75,
      "LAX": 4,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Despite its name, the New River is actually one of the oldest rivers on the North American continent.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hike Endless Wall Trail and Long Point Trail. Drive the winding Fayette Station Road down into the gorge and across the old bridge beneath the new one."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Full day guided whitewater rafting trip on the Lower New River (Class IV rapids), ending right underneath the massive bridge."
        ]
      }
    ],
    "proHacks": [
      "The Bridge Walk allows you to walk on a 24-inch catwalk directly underneath the massive bridge. You are strapped into a safety cable with 800 feet of empty air below you.",
      "Hike the Long Point Trail (3 miles RT) for the single best photo angle of the bridge and the gorge.",
      "The gorge is deep enough that fog often completely obscures the river in the morning until the sun burns it off around 10 AM."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "mammoth-cave",
    "name": "Mammoth Cave",
    "state": "KY",
    "image": "https://images.unsplash.com/featured/?Mammoth+Cave,national+park",
    "compositeScore": 3.5,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 70,
      "min": 48
    },
    "flightTime": {
      "SFO": 7,
      "LAX": 4.5,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the longest known cave system in the entire world, with over 420 miles currently mapped.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Morning 'Domes and Dripstones' tour. Afternoon 'Historic Tour' (including Fat Man's Misery). Hike the sinkhole trails near the visitor center."
        ]
      }
    ],
    "proHacks": [
      "The 'Historic Tour' takes you through massive, subway-tunnel-like dry tubes. The 'Domes and Dripstones Tour' is where you see the classic stalactites.",
      "The cave temperature is a constant 54°F (12°C). It feels amazing in July, but you still need a jacket.",
      "The surface park is fantastic for kayaking or canoeing on the Green River, which actually flows through the cave systems below."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "hot-springs",
    "name": "Hot Springs",
    "state": "AR",
    "image": "https://images.unsplash.com/featured/?Hot+Springs,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      3,
      9,
      10
    ],
    "temperature": {
      "max": 69,
      "min": 51
    },
    "flightTime": {
      "SFO": 5,
      "LAX": 4,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the oldest park managed by the NPS, actually protected by Congress in 1832 (before Yellowstone).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hike up Hot Springs Mountain Tower for views. Tour the opulent Fordyce Bathhouse (Visitor Center). Get a traditional soak at Buckstaff. Drink beer made from spring water at Superior Brewery."
        ]
      }
    ],
    "proHacks": [
      "Quapaw and Buckstaff are the only two bathhouses where you can actually soak in the thermal waters today. Buckstaff offers the traditional, intensive full-service 1920s scrub.",
      "Superior Bathhouse Brewery is the only brewery in a US National Park, and the only in the world making beer using thermal spring water.",
      "The Grand Promenade trail runs right behind the bathhouses and shows the actual hot water seeping out of the hillside."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "gateway-arch",
    "name": "Gateway Arch",
    "state": "MO",
    "image": "https://images.unsplash.com/featured/?Gateway+Arch,national+park",
    "compositeScore": 3.6,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 68,
      "min": 48
    },
    "flightTime": {
      "SFO": 4,
      "LAX": 3.3333333333333335,
      "JFK": 3.3333333333333335,
      "ORD": 5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the smallest national park in the US, covering just 91 acres.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Morning arrival, pass security. Spend 2 hours in the underground museum. Take the noon tram to the top for views spanning 30 miles. Walk the park grounds down to the Mississippi River."
        ]
      }
    ],
    "proHacks": [
      "The tram cars are absolutely tiny (like 5 people crammed face-to-face in a washing machine). If you are severely claustrophobic, the 4-minute ride up will be agonizing.",
      "The underground museum was totally renovated in 2018 and is genuinely one of the best history museums in the NPS system.",
      "Sunset and dusk are the best times to go to the top. The Arch casts a massive shadow over the city, and the Missouri side lights up."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "congaree",
    "name": "Congaree",
    "state": "SC",
    "image": "https://images.unsplash.com/featured/?Congaree,national+park",
    "compositeScore": 2.5,
    "bestMonths": [
      4,
      9,
      10
    ],
    "temperature": {
      "max": 84,
      "min": 60
    },
    "flightTime": {
      "SFO": 7.5,
      "LAX": 5,
      "JFK": 5,
      "ORD": 5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It protects the largest intact expanse of old-growth bottomland hardwood forest remaining in the southeastern US.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hike the 2.4-mile elevated Boardwalk Loop through the giant Loblolly Pines and Bald Cypress trees. Afternoon canoe trip down Cedar Creek through the old-growth canopy."
        ]
      }
    ],
    "proHacks": [
      "If you rent a canoe for Cedar Creek, prepare for 'tree dodging' rather than open water paddling. It's a flooded forest, so navigation requires tight turns.",
      "The famous synchronous firefly event usually happens in mid-to-late May. The NPS now runs a strict lottery system to get tickets for the viewing nights.",
      "Because the park relies on flooding to survive, the trails often go underwater. Always check trail conditions before arriving."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "virgin-islands",
    "name": "Virgin Islands",
    "state": "VI",
    "image": "https://images.unsplash.com/featured/?Virgin+Islands,national+park",
    "compositeScore": 3,
    "bestMonths": [
      11,
      0,
      1,
      2,
      3
    ],
    "temperature": {
      "max": 83,
      "min": 73
    },
    "flightTime": {
      "SFO": 7,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park covers roughly 60% of the island of St. John.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Ferry to St. John. Rent Jeep. Drive North Shore road immediately to Trunk Bay for early morning snorkeling on the underwater trail."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Morning hike down Reef Bay Trail, or explore Annaberg Plantation ruins. Afternoon relaxing and turtle-watching at Maho Bay."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Rent a dinghy from Cruz Bay and boat to remote beaches like Waterlemon Cay for the island's best untouched snorkeling."
        ]
      }
    ],
    "proHacks": [
      "You fly into St. Thomas (STT), take a taxi to Red Hook, and take the passenger ferry to Cruz Bay on St. John. Renting a Jeep on St. John is easiest.",
      "Trunk Bay is beautiful but very crowded with cruise shippers. Go to Maho Bay to swim with wild sea turtles feeding on the sea grass just 20 feet from shore.",
      "The Reef Bay Trail descends 900 feet to the ocean, passing ancient petroglyphs and old sugar mills. The hike back up in the tropical heat is brutal."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "national-park-of-american-samoa",
    "name": "National Park of American Samoa",
    "state": "AS",
    "image": "https://images.unsplash.com/featured/?National+Park+of+American+Samoa,national+park",
    "compositeScore": 2,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 85,
      "min": 76
    },
    "flightTime": {
      "SFO": 12,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the only US national park south of the Equator.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive Pago Pago. Drive to the north shore. Hike the muddy but spectacular trail to Pola Island. Watch flying foxes."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hike the steep Mount Alava trail (7 miles RT) offering panoramic views of Pago Pago Harbor. Visit the lower Fagasā Bay."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "If logistics align, fly to Ofu. Snorkel the legendary Ofu Beach reef in complete isolation."
        ]
      }
    ],
    "proHacks": [
      "Getting to the main island (Tutuila) is very expensive. Getting to the outer island of Ofu (which has the pristine postcard beaches) requires a tiny plane that breaks down frequently.",
      "The heat and humidity are oppressive year-round. Hike early. The trails are steep, muddy, and covered in slippery roots.",
      "You don't need to look for the flying foxes — they are everywhere in the sky above the canopy, looking like pterodactyls."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "hawaii-volcanoes",
    "name": "Hawaii Volcanoes",
    "state": "HI",
    "image": "https://images.unsplash.com/featured/?Hawaii+Volcanoes,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 68,
      "min": 53
    },
    "flightTime": {
      "SFO": 8.25,
      "LAX": 5,
      "JFK": 5,
      "ORD": 5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It contains two of the world's most active volcanoes: Kīlauea and Mauna Loa.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Visitor Center. Hike through Thurston Lava Tube (go early to avoid crowds). Hike the 3.3-mile Kīlauea Iki loop. Return at night to see the volcanic glow."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Drive the Chain of Craters Road down to the Holei Sea Arch. Check out the ancient Puʻuloa Petroglyphs along the way."
        ]
      }
    ],
    "proHacks": [
      "The Kīlauea Iki trail descends 400 feet into a solidified lava lake from a 1959 eruption. Steam still vents from the cracked crust. Best hike in the park.",
      "Drive the 18-mile Chain of Craters Road. It drops 3,700 feet from the summit down to the ocean, terminating where massive recent lava flows buried the highway.",
      "Check the NPS app or website the day before. Eruption status changes rapidly. If surface lava is flowing, follow ranger instructions exactly."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "kobuk-valley",
    "name": "Kobuk Valley",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Kobuk+Valley,national+park",
    "compositeScore": 2,
    "bestMonths": [
      6,
      7
    ],
    "temperature": {
      "max": 62,
      "min": 45
    },
    "flightTime": {
      "SFO": 9,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Contains the Great Kobuk Sand Dunes, the largest active sand dunes in the Arctic, formed by grinding glaciers during the Ice Age.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Charter flight drops you directly on the Great Kobuk Sand Dunes. Set up camp, hike the shifting sands, and wait for bush plane pickup the next day."
        ]
      }
    ],
    "proHacks": [
      "Because bush flights are wildly expensive (~$1,500/hour), many people try to combine Kobuk Valley and Gates of the Arctic into one flight loop to save money.",
      "The sand dunes are anomalously warm in summer, often exceeding 85°F inside the Arctic Circle.",
      "There are no designated landing strips; pilots land directly on rivers or the hard-packed sand dunes."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "black-canyon-of-the-gunnison",
    "name": "Black Canyon of the Gunnison",
    "state": "CO",
    "image": "https://images.unsplash.com/featured/?Black+Canyon+of+the+Gunnison,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 69,
      "min": 42
    },
    "flightTime": {
      "SFO": 7.083333333333333,
      "LAX": 7.5,
      "JFK": 7.5,
      "ORD": 7.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The canyon is so narrow and deep that some parts of the canyon floor only receive 33 minutes of sunlight a day.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive the South Rim Road. Stop at Gunnison Point, Chasm View, and Painted Wall. Drive the incredibly steep 16% grade East Portal Road down to the river."
        ]
      }
    ],
    "proHacks": [
      "The South Rim is fully paved and has the visitor center. The North Rim is reached via a long dirt road and offers spectacular, terrifyingly sheer drop-offs with no crowds.",
      "Because the canyon is narrow, the best time for photography is late morning or mid-day when the sun actually penetrates the depths.",
      "The inner canyon routes feature deadly poison ivy patches. Wear long pants if venturing down."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "great-sand-dunes",
    "name": "Great Sand Dunes",
    "state": "CO",
    "image": "https://images.unsplash.com/featured/?Great+Sand+Dunes,national+park",
    "compositeScore": 3.4,
    "bestMonths": [
      4,
      8,
      9
    ],
    "temperature": {
      "max": 65,
      "min": 38
    },
    "flightTime": {
      "SFO": 12.75,
      "LAX": 7,
      "JFK": 7,
      "ORD": 7
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park contains the tallest sand dunes in North America, rising up to 750 feet from the floor of the San Luis Valley.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Rent sandboards in Alamosa or Oasis. Arrive early to wade in Medano Creek. Hike up High Dune (much harder than it looks). Sandboard down. Stay for stargazing."
        ]
      }
    ],
    "proHacks": [
      "Late May is the absolute best time to visit because Medano Creek is flowing at its peak, creating a massive beach at the base of the dunes.",
      "If you own a robust 4WD with high clearance, lower your tire pressure and drive the primitive Medano Pass road to escape the crowds.",
      "Hike the dunes at sunrise or sunset. Not only is the sand cool, but the low light creates incredible shadows on the ridges."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "petrified-forest",
    "name": "Petrified Forest",
    "state": "AZ",
    "image": "https://images.unsplash.com/featured/?Petrified+Forest,national+park",
    "compositeScore": 3.4,
    "bestMonths": [
      2,
      3,
      9,
      10
    ],
    "temperature": {
      "max": 59,
      "min": 29
    },
    "flightTime": {
      "SFO": 5.25,
      "LAX": 5,
      "JFK": 8.5,
      "ORD": 7
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The 'wood' is completely fossilized into solid quartz and weighs 160 pounds per cubic foot.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Enter North gate. View Painted Desert. Stop at Route 66 alignment. Drive south. Hike Blue Mesa, Crystal Forest, and Giant Logs behind the south visitor center."
        ]
      }
    ],
    "proHacks": [
      "The Blue Mesa trail is arguably the best in the park — a paved loop descending into bizarre blue and purple badlands filled with scattered stone logs.",
      "Buy petrified wood at the massive gift shops just outside the park boundaries. That wood is legally collected from private land.",
      "The park is strictly a day-use park with operational hours (e.g., 8am-5pm). Plan your road trip accordingly so you aren't locked out."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "carlsbad-caverns",
    "name": "Carlsbad Caverns",
    "state": "NM",
    "image": "https://images.unsplash.com/featured/?Carlsbad+Caverns,national+park",
    "compositeScore": 3.8,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 79,
      "min": 46
    },
    "flightTime": {
      "SFO": 5,
      "LAX": 5,
      "JFK": 5,
      "ORD": 5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The 'Big Room' is the largest single cave chamber by volume in North America (almost 4000 feet long).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Morning booked entry. Hike down the steep Natural Entrance trail. Spend 2 hours walking the massive Big Room loop. Elevator up. Return at dusk for the amphitheater Bat Flight."
        ]
      }
    ],
    "proHacks": [
      "Wear closed-toe shoes with grip (the cave paths are steep and wet) and bring a light jacket (constant 56°F).",
      "If you hate hiking, you can take the elevator directly to the Big Room. If you hike the Natural Entrance, take the elevator back UP.",
      "The bat flight program is incredible but runs only from late May through October. No cameras or phones are allowed during the flight."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "guadalupe-mountains",
    "name": "Guadalupe Mountains",
    "state": "TX",
    "image": "https://images.unsplash.com/featured/?Guadalupe+Mountains,national+park",
    "compositeScore": 2.9,
    "bestMonths": [
      9,
      10,
      2,
      3
    ],
    "temperature": {
      "max": 71,
      "min": 48
    },
    "flightTime": {
      "SFO": 4.5,
      "LAX": 4.5,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Guadalupe Peak is the highest point in Texas at 8,751 feet.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Strenuous day: Hike the 8.4-mile RT 'Top of Texas' trail to Guadalupe Peak. Alternatively, moderate day: Hike the 3.8-mile Devil's Hall trail to a spectacular narrow limestone canyon."
        ]
      }
    ],
    "proHacks": [
      "Most trails are completely exposed. Start the strenuous 8.4-mile hike to Guadalupe Peak at sunrise to avoid the relentless Texas heat.",
      "McKittrick Canyon has bigtooth maples that turn bright red and yellow in late October/early November — a true desert oasis.",
      "Cell service is virtually non-existent. Download all maps before leaving El Paso or Carlsbad."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "theodore-roosevelt",
    "name": "Theodore Roosevelt",
    "state": "ND",
    "image": "https://images.unsplash.com/featured/?Theodore+Roosevelt,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 78,
      "min": 51
    },
    "flightTime": {
      "SFO": 6.666666666666667,
      "LAX": 5,
      "JFK": 5,
      "ORD": 5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "This is the only US national park named directly after a single person.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "South Unit: Drive the 36-mile scenic loop (expect bison blockades). Hike Wind Canyon at sunset overlooking the Little Missouri River."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "North Unit: Drive the 14-mile scenic drive to Oxbow Overlook. Hike the Caprock Coulee loop for rugged backcountry views."
        ]
      }
    ],
    "proHacks": [
      "The South Unit (off I-94 at Medora) gets most of the traffic. The North Unit is an hour north but has much more dramatic canyons and river bends.",
      "Feral horses roam the boundaries of the park, a unique sight among US national parks.",
      "The town of Medora is essentially a wild-west theme basecamp. The famous Medora Musical runs every summer night in the outdoor amphitheater."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "badlands",
    "name": "Badlands",
    "state": "SD",
    "image": "https://images.unsplash.com/featured/?Badlands,national+park",
    "compositeScore": 3.6,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 72,
      "min": 46
    },
    "flightTime": {
      "SFO": 5,
      "LAX": 4,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Contains one of the world's richest fossil beds; ancient mammals like totally extinct rhinos and saber-toothed cats are commonly found.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive Badlands Loop Road from East to West. Hike the Door, Window, and Notch trails area. Drive Sage Creek Rim road for wildlife. Sunset at Pinnacles overlook."
        ]
      }
    ],
    "proHacks": [
      "Drive the unpaved Sage Creek Rim Road to see Bighorn Sheep, Bison, and Roberts Prairie Dog Town.",
      "Photography is all about light here. Mid-day the formations look flat and washed out. At sunrise and sunset, they glow with deep reds and purples.",
      "Watch for rattlesnakes if deciding to take advantage of the open-hike policy in the tall grass prairies."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "wind-cave",
    "name": "Wind Cave",
    "state": "SD",
    "image": "https://images.unsplash.com/featured/?Wind+Cave,national+park",
    "compositeScore": 3.2,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 76,
      "min": 50
    },
    "flightTime": {
      "SFO": 5,
      "LAX": 4,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is one of the longest and most complex cave systems in the world, with over 150 miles of mapped passages.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Check in for your reserved morning cave tour (1.5 hours). Afternoon drive through the surface park on Hwy 87 to spot bison. Hike the 1-mile Rankin Ridge trail for sweeping Black Hills views."
        ]
      }
    ],
    "proHacks": [
      "Bring a jacket. The cave is a constant 54°F (12°C) regardless of how blazing hot the South Dakota summer is.",
      "The 'Natural Entrance Tour' is the classic option and physically easier than the 'Fairgrounds Tour', but both showcase the famous boxwork.",
      "Pair this park with Mount Rushmore and Custer State Park — they are all right next to each other."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "voyageurs",
    "name": "Voyageurs",
    "state": "MN",
    "image": "https://images.unsplash.com/featured/?Voyageurs,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 74,
      "min": 49
    },
    "flightTime": {
      "SFO": 11.333333333333334,
      "LAX": 7.5,
      "JFK": 7.5,
      "ORD": 7.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is nearly 40% water. You must have a boat, canoe, or kayak to truly explore it.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Rent a small motorized boat or join an NPS tour departing from Rainy Lake. Explore the water networks, hike the blind Ash River visitor center trails."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Take the boat tour to Kettle Falls. Have lunch at the historic hotel. Try paddle-boarding or kayaking in a sheltered bay."
        ]
      }
    ],
    "proHacks": [
      "Houseboating is the ultimate Voyageurs experience. You can anchor almost anywhere, fish off the back, and sleep under dark skies.",
      "Take the NPS tour to the historic Kettle Falls Hotel. It's only accessible by boat and features a bar floor severely warped from decades of use.",
      "Prepare for serious mosquitoes and ticks in June/July. Treat clothing with Permethrin."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "mount-rainier",
    "name": "Mount Rainier",
    "state": "WA",
    "image": "https://images.unsplash.com/featured/?Mount+Rainier,national+park",
    "compositeScore": 4.3,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 69,
      "min": 44
    },
    "flightTime": {
      "SFO": 4.25,
      "LAX": 4.75,
      "JFK": 7.5,
      "ORD": 6.25
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Mount Rainier is an active stratovolcano and the most heavily glaciated peak in the contiguous US.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Enter via Nisqually. Stop at Narada Falls. Hike the Skyline Trail loop from Paradise visitor center to Panorama Point."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Drive to Sunrise (highest road in the park). Hike the Fremont Lookout trail or up to the Second Burroughs for face-to-face glacier views."
        ]
      }
    ],
    "proHacks": [
      "The park is massive and divided. Dedicate one day to the Paradise side (south) and one day to the Sunrise side (northeast). Don't try to cram both.",
      "If you fail to get a timed entry permit, entering the park before 7 AM guarantees you get a parking spot at Paradise anyway.",
      "Reflection Lakes is best photographed at dawn before the wind picks up and ruins the mirror effect."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "lassen-volcanic",
    "name": "Lassen Volcanic",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Lassen+Volcanic,national+park",
    "compositeScore": 3.4,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 78,
      "min": 45
    },
    "flightTime": {
      "SFO": 4,
      "LAX": 6,
      "JFK": 6,
      "ORD": 6
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Lassen Volcanic is one of the few places on Earth where you can find all four types of volcanoes: plug dome, shield, cinder cone, and stratovolcano.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive the main park road from south to north. Hike Bumpass Hell. Stop at Emerald Lake. Camp or stay near Manzanita Lake."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Early morning 5-mile RT hike to the summit of Lassen Peak (2,000 ft elevation gain). Afternoon kayaking on Manzanita Lake."
        ]
      }
    ],
    "proHacks": [
      "Photograph Lassen Peak reflecting in Manzanita Lake at sunset for the classic park picture.",
      "The hike up Lassen Peak is fully exposed and essentially a steep sandbox. Start by 7 AM to beat the intense afternoon sun.",
      "Because of the extreme winter snowpacks, if you go in June, expect most of the park to still be buried."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "redwood",
    "name": "Redwood",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Redwood,national+park",
    "compositeScore": 4.1,
    "bestMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "temperature": {
      "max": 63,
      "min": 46
    },
    "flightTime": {
      "SFO": 5.5,
      "LAX": 8.5,
      "JFK": 8.5,
      "ORD": 8.5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is home to Hyperion, the tallest living tree on Earth at 380 feet.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive Newton B. Drury Parkway. Hike the Prairie Creek and Foothill trail loop. Look for Elk. Drive to Klamath River overlook for sunset."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Morning permit-access hike to Fern Canyon. Afternoon permit-access hike down into the secretive Tall Trees Grove."
        ]
      }
    ],
    "proHacks": [
      "Fern Canyon requires driving through several shallow creek crossings. Sedans usually make it in late summer, but high clearance is heavily recommended.",
      "The Newton B. Drury Scenic Parkway is arguably better than the famous Avenue of the Giants, and is entirely within the park system.",
      "Watch for Roosevelt Elk herds lounging directly in the grassy areas near the Prairie Creek visitor center."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "pinnacles",
    "name": "Pinnacles",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Pinnacles,national+park",
    "compositeScore": 3.8,
    "bestMonths": [
      2,
      3,
      9,
      10
    ],
    "temperature": {
      "max": 67,
      "min": 37
    },
    "flightTime": {
      "SFO": 2,
      "LAX": 5.666666666666667,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park's namesake rock formations are the remnants of an extinct volcano that was carried 195 miles north by the San Andreas Fault.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Enter East side. Hike Bear Gulch Cave trail up to the Reservoir, then connect to the High Peaks trail to walk amongst the volcanic spires and spot condors."
        ]
      }
    ],
    "proHacks": [
      "If arriving from the Bay Area, use the East Entrance. It has the main campground, visitor center, and easier access to Bear Gulch.",
      "The 'caves' are actually talus caves (massive boulders wedged in a gorge). Check the NPS website before visiting to ensure they are open, as they close for bat breeding.",
      "Look for California Condors near the High Peaks in the early morning riding the thermals. Their 9-foot wingspan is unmistakable."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "kings-canyon",
    "name": "Kings Canyon",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Kings+Canyon,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 71,
      "min": 45
    },
    "flightTime": {
      "SFO": 4,
      "LAX": 4.166666666666667,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Kings Canyon is deeper than the Grand Canyon, plunging more than 8,200 feet from peak to river.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Explore Grant Grove. See the General Grant Tree and Panoramic Point. Drive the 30-mile Kings Canyon Scenic Byway down into the gorge."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hike the flat, incredibly scenic Zumwalt Meadow loop. Walk to Roaring River Falls. Relax at Muir Rock."
        ]
      }
    ],
    "proHacks": [
      "The scenic drive down into the canyon (Hwy 180 to Roads End) is one of the most spectacular mountain drives in America, but it closes in winter.",
      "Visit the General Grant grove in the morning, then spend the blazing afternoon down in the canyon swimming or relaxing by the Kings River.",
      "Muir Rock at Roads End is a flat, massive boulder extending into the river — perfect for picnicking and jumping in."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "sequoia",
    "name": "Sequoia",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Sequoia,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 71,
      "min": 45
    },
    "flightTime": {
      "SFO": 4.5,
      "LAX": 4,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Home to the General Sherman tree, the largest living single-stem tree on Earth by volume.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Visit Giant Forest Museum. Hike the Congress Trail starting from General Sherman. Drive through Tunnel Log. Sunset climb up Moro Rock."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hike around Crescent Meadow (John Muir called it the 'Gem of the Sierra'). Take a guided tour of Crystal Cave (book months ahead)."
        ]
      }
    ],
    "proHacks": [
      "The hike up Moro Rock (350+ stone steps) gives you an aerial view of the Great Western Divide. Go at sunset.",
      "To escape the massive crowds at General Sherman, hike the Congress Trail which takes you deeper into the giant forest among hundreds of equally impressive, silent giants.",
      "You can drive your car through the fallen Tunnel Log on a weekday. On weekends, it's often shuttle-only access."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "channel-islands",
    "name": "Channel Islands",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Channel+Islands,national+park",
    "compositeScore": 3.5,
    "bestMonths": [
      6,
      7,
      8,
      9
    ],
    "temperature": {
      "max": 76,
      "min": 59
    },
    "flightTime": {
      "SFO": 3.5,
      "LAX": 1.5,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Often called the 'Galapagos of North America' due to 145 endemic species found nowhere else.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Ferry from Ventura to Santa Cruz Island. 3-hour guided sea kayak tour through the Painted Cave. Afternoon hike to Potato Harbor. Return ferry in the evening."
        ]
      }
    ],
    "proHacks": [
      "There is no food, water, or trash cans on the islands. You must pack in everything and pack out all your trash.",
      "Santa Cruz (Scorpion Anchorage) is the best island for a first-timer: you can hike, kayak world-class sea caves, and spot foxes all in a day trip.",
      "Take drama-free motion sickness meds before getting on the ferry. The Santa Barbara channel crossing can be extremely rough."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "capitol-reef",
    "name": "Capitol Reef",
    "state": "UT",
    "image": "https://images.unsplash.com/featured/?Capitol+Reef,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 67,
      "min": 41
    },
    "flightTime": {
      "SFO": 5.166666666666667,
      "LAX": 5,
      "JFK": 8.166666666666666,
      "ORD": 6.666666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park centers around the Waterpocket Fold, a 100-mile long 'wrinkle' in the earth's crust.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hike Hickman Bridge in the morning. Stop at Gifford House for pie. Drive the Scenic Drive to the end and hike the Capitol Gorge wash to the Pioneer Register."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hike the steep, exposed trail to Cassidy Arch. Afternoon drive to Sunset Point and Goosenecks Overlook."
        ]
      }
    ],
    "proHacks": [
      "This is the 'sleeper hit' of Utah's Mighty 5. Far fewer crowds than Zion or Arches, but equally incredible scenery.",
      "The hike to Cassidy Arch is brutal but puts you standing directly on top of a massive natural arch (unlike Arches NP where you just look at them).",
      "If you have a 4WD high-clearance vehicle, drive Cathedral Valley in the remote north of the park for the massive Temple of the Sun monoliths."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "canyonlands",
    "name": "Canyonlands",
    "state": "UT",
    "image": "https://images.unsplash.com/featured/?Canyonlands,national+park",
    "compositeScore": 4.1,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 72,
      "min": 43
    },
    "flightTime": {
      "SFO": 7.166666666666667,
      "LAX": 5.5,
      "JFK": 8.666666666666666,
      "ORD": 7.166666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is divided into four distinct districts separated by the Colorado and Green rivers. There are no roads connecting the districts.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Island in the Sky: Sunrise at Mesa Arch. Drive to Grand View Point. Short hike to Upheaval Dome. Sunset at nearby Dead Horse Point."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "The Needles: Drive 2 hours south. Hike the strenuous 11-mile loop through the Joint Trail and Chesler Park."
        ]
      }
    ],
    "proHacks": [
      "Island in the Sky is the 'viewing' district (driving to overlooks). The Needles is the 'hiking' district.",
      "Chesler Park in The Needles is a rugged 11-mile hike but often ranked as one of the best day hikes in the state of Utah.",
      "Dead Horse Point State Park isn't part of Canyonlands, but you drive right past it to enter Island in the Sky. It's 100% worth the extra entrance fee to see."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "mesa-verde",
    "name": "Mesa Verde",
    "state": "CO",
    "image": "https://images.unsplash.com/featured/?Mesa+Verde,national+park",
    "compositeScore": 3.6,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 71,
      "min": 42
    },
    "flightTime": {
      "SFO": 17.25,
      "LAX": 10,
      "JFK": 10,
      "ORD": 10
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Mesa Verde protects over 5,000 archaeological sites, including 600 cliff dwellings of the Ancestral Puebloans.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive the 45 mins up the mesa. Drive the Mesa Top Loop to get the historical overview. Self-guided hike through Step House."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Morning booked ranger tour of Cliff Palace. Afternoon booked ranger tour of the adventurous Balcony House."
        ]
      }
    ],
    "proHacks": [
      "The park entrance is at the highway, but driving to the actual cliff dwellings takes 45-60 minutes on a steep, winding mountain road. Factor that heavily into your timing.",
      "Step House is the only cliff dwelling you can visit for free without a guide/ticket.",
      "If you fail to get tickets, the Mesa Top Loop drive still affords spectacular views looking down into Cliff Palace and Square Tower House."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "denali",
    "name": "Denali",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Denali,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      5,
      6,
      7
    ],
    "temperature": {
      "max": 65,
      "min": 45
    },
    "flightTime": {
      "SFO": 11,
      "LAX": 9.5,
      "JFK": 12,
      "ORD": 10.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Denali is the highest mountain peak in North America (20,310 feet).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive/train from Anchorage or Fairbanks. Hike the Savage Alpine Trail (2 mi RT) at the end of the public road section."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Full-day transit bus into the park interior (Eielson or Kantishna if road repairs allow). Grizzly, caribou, and wolf spotting."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Morning flightseeing tour from the park entrance or Talkeetna (add glacier landing if budget allows). Sled dog demonstration at HQ."
        ]
      }
    ],
    "proHacks": [
      "The camper buses are cheaper than tour buses and allow you to get on and off anywhere along the road.",
      "Mile 15 (Savage River) is the furthest you can drive yourself — great place for dusk wildlife spotting without a bus ticket.",
      "Take a flightseeing tour from Talkeetna (south of the park) rather than driving all the way to the entrance if short on time."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "glacier-bay",
    "name": "Glacier Bay",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Glacier+Bay,national+park",
    "compositeScore": 3.3,
    "bestMonths": [
      5,
      6,
      7
    ],
    "temperature": {
      "max": 61,
      "min": 44
    },
    "flightTime": {
      "SFO": 6,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "There are no roads to Glacier Bay; you must arrive by air or water.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive Gustavus via plane/ferry. Settle at Glacier Bay Lodge. Afternoon hike on the Forest Trail in Bartlett Cove."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "8-hour Glacier Bay day-boat tour to the Margerie and Grand Pacific tidewater glaciers. Humpback whales, puffins, calving ice."
        ]
      }
    ],
    "proHacks": [
      "Most people see it quickly on a massive cruise ship. To actually experience it, stay at Glacier Bay Lodge in Bartlett Cove and take the small day-boat.",
      "If flying in via Alaska Airlines summer jet service to Gustavus, sit on the right side of the plane for views of the Fairweather Range.",
      "Point Adolphus (just outside the park edge) has some of the highest concentrations of feeding humpback whales on Earth in July."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "katmai",
    "name": "Katmai",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Katmai,national+park",
    "compositeScore": 3,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 64,
      "min": 48
    },
    "flightTime": {
      "SFO": 7,
      "LAX": 5.5,
      "JFK": 8,
      "ORD": 6.5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Home to the Valley of Ten Thousand Smokes, created by the largest volcanic eruption of the 20th century (Novarupta, 1912).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Floatplane to Brooks Camp. Mandatory bear school. Spend the entire afternoon at the Brooks Falls viewing platforms watching fishing bears."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Take the 4WD bus tour to the Valley of Ten Thousand Smokes. Hike down to the Ukak River through the 1912 ash flow."
        ]
      }
    ],
    "proHacks": [
      "July is peak for salmon jumping the falls (and bears catching them in mid-air). September is peak for absolutely massive 'Fat Bears'.",
      "Day trips from Anchorage/Homer are extremely expensive ($900-1200) and highly weather-dependent. Pack for a potential forced overnight if planes get grounded.",
      "Take the 23-mile bus ride to the Valley of 10,000 Smokes — almost no one does it, but the barren ash landscape is mind-blowing."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "lake-clark",
    "name": "Lake Clark",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Lake+Clark,national+park",
    "compositeScore": 2.2,
    "bestMonths": [
      5,
      6,
      7
    ],
    "temperature": {
      "max": 60,
      "min": 42
    },
    "flightTime": {
      "SFO": 7,
      "LAX": 5.5,
      "JFK": 8,
      "ORD": 6.5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Lake Clark preserves the ancestral homelands of the Dena'ina people.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Bush plane from Anchorage to Port Alsworth. Kayak the turquoise waters of Lake Clark. Hike to Tanalian Falls (the only real trail)."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Flightsee over the active Redoubt and Iliamna volcanoes, or charter to Chinitna Bay for guided bear viewing."
        ]
      }
    ],
    "proHacks": [
      "Chinitna Bay in early summer (May-June) offers world-class brown bear viewing on the mudflats before the salmon run starts at Katmai.",
      "Port Alsworth is the only real 'town' inside the park and the base for all operations. Stay at The Farm Lodge for relative luxury in the deep bush.",
      "Richard Proenneke's cabin at Twin Lakes is iconic (Alone in the Wilderness), but requires a very expensive private floatplane charter to reach."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "gates-of-the-arctic",
    "name": "Gates of the Arctic",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Gates+of+the+Arctic,national+park",
    "compositeScore": 2.1,
    "bestMonths": [
      6,
      7
    ],
    "temperature": {
      "max": 65,
      "min": 48
    },
    "flightTime": {
      "SFO": 9,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the northernmost national park in the US, located entirely above the Arctic Circle.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Fly bush plane from Bettles to a gravel bar or lake drop-off. Backpack completely off-trail navigating by map/compass through the Brooks Range, or take a 7-day guided packraft down a designated wild river."
        ]
      }
    ],
    "proHacks": [
      "Base out of Coldfoot or Bettles. You can technically 'visit' the park for cheap by driving the Dalton Highway and hiking into the boundary just off the road.",
      "The Arrigetch Peaks are the crown jewel of the park — granite spires shooting up from the tundra. Extremely difficult access, requires float plane to circle lake drop-off.",
      "Tussocks (grass clumps on marshy ground) make walking here miserable. Expect to cover 1-2 miles per hour max on foot."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "zion",
    "name": "Zion",
    "state": "UT",
    "image": "https://images.unsplash.com/featured/?Zion,national+park",
    "compositeScore": 4.7,
    "bestMonths": [
      2,
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 63,
      "min": 36
    },
    "flightTime": {
      "SFO": 3.75,
      "LAX": 3.75,
      "JFK": 7.5,
      "ORD": 6.166666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Zion's original name was Mukuntuweap, given by explorer John Wesley Powell.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive, explore Zion Canyon Visitor Center. Afternoon: Canyon Overlook Trail (1.1 mi, easiest rim views). Sunset walk on the Pa'rus Trail by the river."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Early shuttle (6 AM) for Angels Landing or Scout Lookout (permit required for AL). Afternoon: Emerald Pools trail loop."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Start Narrows hike by 7 AM before crowds and water levels rise. Rent dry suit in Springdale if early season. Afternoon: explore Springdale town."
        ]
      }
    ],
    "proHacks": [
      "In 2026, the park shuttle is free — arrive before 7 AM to board directly without waiting. By 9 AM lines can be 45+ minutes.",
      "Rent an e-bike in Springdale ($60-80/day) to entirely bypass the shuttle system and explore at your own pace.",
      "Book the Angels Landing permit via the day-before lottery on recreation.gov — far less competitive than the seasonal lottery. Apply every night starting one week before your hike.",
      "The Canyon Overlook Trail (1 mile, easy) is never crowded and gives stunning rim-level views without a permit or shuttle.",
      "June 7, 2026 onward: vehicle size and weight restrictions apply on Zion-Mt. Carmel Hwy. Check NPS.gov if driving a large RV or truck."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "grand-canyon",
    "name": "Grand Canyon",
    "state": "AZ",
    "image": "https://images.unsplash.com/featured/?Grand+Canyon,national+park",
    "compositeScore": 4.8,
    "bestMonths": [
      2,
      3,
      4,
      8,
      9,
      10
    ],
    "temperature": {
      "max": 51,
      "min": 27
    },
    "flightTime": {
      "SFO": 5.25,
      "LAX": 5,
      "JFK": 8.5,
      "ORD": 7
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The Grand Canyon is not the deepest canyon in the world, but it is the grandest in scale.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Rim Trail walk from Mather Point to Hopi Point (3.5 mi). Visit Yavapai Geology Museum. Sunset at Hopi Point — the best in the park."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hike South Kaibab to Skeleton Point (6 mi RT, strenuous). Start no later than 6 AM. Rest your legs and ride sunset shuttle back to Hopi Point."
        ]
      }
    ],
    "proHacks": [
      "Pick up entrance passes in advance on recreation.gov to skip the often 30-45 minute gate line, especially on spring weekends.",
      "The Hermit Road is closed to private vehicles year-round. Use the free red route shuttle — the Hopi Point stop is the best sunset spot.",
      "The Phantom Ranch canteen sells beer and lemonade. You don't need a cabin reservation to walk down and buy one — ideal for day hikers on Bright Angel.",
      "Start any rim-to-river hike no later than 6 AM in spring/fall, 4 AM in summer. The heat multiplies every 1,000 feet you descend.",
      "Bright Angel Campground does not require a lottery — only cabin stays at Phantom Ranch do. Reserve backcountry permits separately."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "arches",
    "name": "Arches",
    "state": "UT",
    "image": "https://images.unsplash.com/featured/?Arches,national+park",
    "compositeScore": 4.6,
    "bestMonths": [
      2,
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 60,
      "min": 35
    },
    "flightTime": {
      "SFO": 5.166666666666667,
      "LAX": 5,
      "JFK": 8.166666666666666,
      "ORD": 6.666666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park contains the highest density of natural arches in the world (over 2,000).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive before 8 AM. Morning: Windows section and Double Arch (easy, 1 mi). Afternoon: Balanced Rock and park road photography. Sunset: Delicate Arch hike (3 mi RT, start 2.5 hrs before sunset)."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Dawn at Devils Garden trailhead. Hike the full primitive loop (7.8 mi) to see Landscape Arch, Double O, Dark Angel. Fiery Furnace if permitted."
        ]
      }
    ],
    "proHacks": [
      "As of 2026, timed entry reservations are no longer required. Arrive before 8 AM or after 4 PM to avoid peak parking congestion at Delicate Arch trailhead.",
      "Fiery Furnace still requires a $10 permit per person (self-guided) or a ranger-led tour. Book on recreation.gov — they still sell out.",
      "Carry 4+ liters of water on any hike April through October. There is zero water on trail beyond the visitor center.",
      "Drive Devils Garden at dawn — the slickrock glows deep red and the parking lot hasn't filled yet. The Landscape Arch trail is best done before 9 AM.",
      "Check the park webcam ( nps.gov/arch) before driving in — when the parking areas are full, rangers implement temporary closures at the entrance."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "yosemite",
    "name": "Yosemite",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Yosemite,national+park",
    "compositeScore": 4.9,
    "bestMonths": [
      3,
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 67,
      "min": 40
    },
    "flightTime": {
      "SFO": 4,
      "LAX": 4.5,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Yosemite Falls is the highest waterfall in North America at 2,425 feet.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Stop at Tunnel View (free, roadside), then Bridalveil Fall. Valley loop by bicycle. Lower Yosemite Falls trail (1 mi). Evening: Sentinel Bridge for Half Dome reflection at sunset."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Start Mist Trail at 7 AM to Vernal Fall (3 mi RT) or push to Nevada Fall (7 mi RT). Afternoon: Glacier Point road drive, spectacular sunset."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Drive Tioga Road (open June-Oct) to Tuolumne Meadows for high-country hiking. Cathedral Lakes trail (8 mi RT) is the best day hike in the park."
        ]
      }
    ],
    "proHacks": [
      "No vehicle reservation required in 2026, but parking still fills by 8 AM. Bring a bicycle — the 12-mile valley loop is faster and way more enjoyable than driving.",
      "Pay the $35 entrance fee online on recreation.gov in advance to skip the gate line. Mobile passes work at all entry points.",
      "Half Dome permit lottery opens in February for the full season. If you miss it, watch recreation.gov daily — cancelled permits are re-released at 7 AM each morning.",
      "The Mist Trail is significantly more crowded than the John Muir Trail but shares the same waterfalls. Go up Mist, down John Muir for variety with zero backtracking.",
      "Tioga Pass opens around Memorial Day weekend depending on snowpack. Check nps.gov/yose before planning a Tuolumne Meadows trip."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "rocky-mountain",
    "name": "Rocky Mountain",
    "state": "CO",
    "image": "https://images.unsplash.com/featured/?Rocky+Mountain,national+park",
    "compositeScore": 4.3,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 70,
      "min": 43
    },
    "flightTime": {
      "SFO": 3.75,
      "LAX": 4.5,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Trail Ridge Road is the highest continuous paved road in the U.S. (12,183 feet).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Bear Lake corridor: Park or shuttle at Bear Lake lot. Hike Nymph → Dream → Emerald Lakes trail (3.6 mi, 600 ft, spectacular). Afternoon: Sprague Lake circuit (0.5 mi, wheelchair accessible)."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Drive Trail Ridge Road (open late May–Oct) to the Alpine Visitor Center (12,183 ft). Wildlife: Haystack Mountain area for elk and pika. Evening: Moraine Park for elk at dusk."
        ]
      }
    ],
    "proHacks": [
      "In 2026, timed entry is required May 22–Oct 12 from 9 AM–2 PM ($2/vehicle). You can enter freely before 9 AM or after 2 PM — both are actually great times to be in the park.",
      "Bear Lake Road requires its own separate timed entry permit (5 AM–6 PM). Book it the same day as your regular permit or early morning entry becomes your best bet.",
      "Reserve permits on recreation.gov starting May 1 for May/June dates. Set a 7:59 AM alarm — they go live at 8 AM and sell out in minutes.",
      "For elk rut (mid-Sep to mid-Oct), drive Moraine Park Road before sunrise and stay in your car. Bulls are extremely aggressive during rut season.",
      "Trail Ridge Road summit closes in bad weather — check nps.gov/romo before driving up. The Alpine Visitor Center makes a good turnaround point if the summit is socked in."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "olympic",
    "name": "Olympic",
    "state": "WA",
    "image": "https://images.unsplash.com/featured/?Olympic,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 67,
      "min": 48
    },
    "flightTime": {
      "SFO": 4.75,
      "LAX": 5.25,
      "JFK": 8,
      "ORD": 6.75
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park contains three distinct ecosystems: alpine, temperate rainforest, and rugged coastline.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hurricane Ridge: Visitor Center, then Hurricane Hill trail (3.2 mi RT) or wildflower meadow walk. Afternoon: Lake Crescent — Marymere Falls trail (1.8 mi) and a lakeside swim."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Hoh Rain Forest: Hall of Mosses trail (0.8 mi) then Hoh River Trail (go as far as time allows — moss and Roosevelt elk). Afternoon: Ruby Beach for sea stacks at golden hour."
        ]
      }
    ],
    "proHacks": [
      "The park has no central hub — plan your route by ecosystem. Rainforest (Hoh), Alpine (Hurricane Ridge), and Coast (Rialto/Ruby) are each 2+ hours apart.",
      "Hurricane Ridge Road is open Fridays through Sundays year-round, plus daily in summer. Check nps.gov/olym before driving up — it closes for snow/ice with no warning.",
      "Check tide tables before visiting the coast. Hole-in-the-Wall at Rialto Beach is cut off at high tide, and Second and Third Beach have tide-dependent sea stacks.",
      "The Hoh Rain Forest day-use parking fills by 10 AM in summer. Get there before 8:30 AM or be prepared for a 2-hour parking queue on the access road.",
      "Sol Duc Hot Springs is a hidden Olympic gem that most visitors skip. The nearby Sol Duc Falls trail (1.6 mi) is one of the park's best easy hikes."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "yellowstone",
    "name": "Yellowstone",
    "state": "WY",
    "image": "https://images.unsplash.com/featured/?Yellowstone,national+park",
    "compositeScore": 4.8,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 56,
      "min": 28
    },
    "flightTime": {
      "SFO": 3.8333333333333335,
      "LAX": 4.166666666666667,
      "JFK": 6.5,
      "ORD": 4.583333333333333
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Yellowstone was established in 1872 as the world's first national park.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Lower Loop: Old Faithful eruption (check GeyserTimes app), Grand Prismatic Spring boardwalk. Afternoon: Midway Geyser Basin and Fountain Paint Pots. Sunset near Firehole Lake Drive."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Lamar Valley from 5-8 AM for wolf and bison spotting. Grand Canyon of the Yellowstone and Artist Point. Hayden Valley wildlife drive at dusk for bison herds."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Mammoth Hot Springs terraces (morning). Norris Geyser Basin (the hottest and most active). Grand Geyser eruption if GeyserTimes predicts it (erupts ~every 8-12 hours)."
        ]
      }
    ],
    "proHacks": [
      "Download the GeyserTimes app (free, works offline) and check eruption predictions for major geysers. Grand Geyser erupts every 8-12 hours — you can time your arrival.",
      "Enter from the South (Flagg Ranch) or East gates to avoid the notoriously jammed West and North entrances, especially in summer.",
      "Wildlife jams can stall traffic for hours — always carry binoculars, snacks, and patience. The worst jams are on Lamar Valley Road at dawn.",
      "Book lodges inside the park 12-13 months in advance. All Yellowstone lodges open reservations on the same date — set a calendar reminder.",
      "The boardwalk trails at Grand Prismatic and Midway Geyser Basin get the best aerial perspective from the Fairy Falls trailhead overlook, not the boardwalk itself (1.2 mi hike)."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "glacier",
    "name": "Glacier",
    "state": "MT",
    "image": "https://images.unsplash.com/featured/?Glacier,national+park",
    "compositeScore": 4.6,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 80,
      "min": 49
    },
    "flightTime": {
      "SFO": 5.5,
      "LAX": 5.666666666666667,
      "JFK": 8,
      "ORD": 6.083333333333333
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Glacier and Canada's Waterton Lakes National Park form the world's first International Peace Park.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Book early express shuttle to Logan Pass. Hike the Highline Trail (11.8 mi one-way to The Loop — take shuttle back) or Hidden Lake Overlook (2.7 mi RT). Mountain goats frequent the Pass area."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Many Glacier: Hike to Grinnell Glacier (10.6 mi RT, 1,600 ft) or Iceberg Lake (9.6 mi RT). Both are spectacular. Many Glacier area has the most active grizzly bear habitat."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Drive North Fork or Two Medicine area (far fewer crowds). Pray Lake and Lower Two Medicine Lake are stunning and often empty. Sunset at Wild Goose Island overlook."
        ]
      }
    ],
    "proHacks": [
      "In 2026, no vehicle reservation is needed. However, a ticketed shuttle is now required to access the Going-to-the-Sun Road corridor. Purchase shuttle tickets in advance at recreation.gov.",
      "Logan Pass parking has a 3-hour limit starting July 1, 2026. Take the early express shuttle instead — it gets you there before crowds with no parking stress.",
      "Enter before 6 AM to access the park before shuttle ticketing begins, which gives you access to Logan Pass trailheads without needing a shuttle ticket.",
      "Bear spray is mandatory — not optional — in Glacier. Grizzlies outnumber black bears. Buy at any park store ($45) or many Whitefish/Kalispell retailers.",
      "Many Glacier area (east side) has shorter shuttle queues and fewer crowds than the west side. Grinnell Glacier and Iceberg Lake trails start here."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "death-valley",
    "name": "Death Valley",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Death+Valley,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      9,
      10,
      11,
      0,
      1,
      2
    ],
    "temperature": {
      "max": 93,
      "min": 62
    },
    "flightTime": {
      "SFO": 3.25,
      "LAX": 4,
      "JFK": 7,
      "ORD": 5.666666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Badwater Basin is the lowest point in North America at 282 feet below sea level.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Sunrise at Zabriskie Point (5-min walk). Drive Artists Drive (9-mile one-way scenic loop, best in afternoon). Badwater Basin salt flat walk (15 min, free). Sunset at Mesquite Flat Sand Dunes."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Mosaic Canyon slot canyon hike (2.2 mi RT, free, Stovepipe Wells area). Ubehebe Crater rim walk (0.5 mi). If adventurous: 4WD to Racetrack Playa sailing stones (2 hrs each way)."
        ]
      }
    ],
    "proHacks": [
      "Drive Artists Drive in the late afternoon (3-5 PM). The low-angle sun hits the painted hills from the west, turning them every shade of red, purple, and green.",
      "For the Racetrack Playa and Ubehebe Crater, fill your gas tank at Panamint Springs — it's the last gas station before a 2-3 hour drive on washboard dirt road.",
      "Mesquite Flat Sand Dunes are best shot at sunrise or sunset. The light rakes across the ripple patterns. Arrive 30 minutes before sunrise for footprint-free sand.",
      "Badwater Basin is accessible by car and requires only a short walk. Do it at night in winter — laying on the salt flat under stars with no light pollution is extraordinary.",
      "Mosaic Canyon (near Stovepipe Wells) is rarely visited but has smooth marble narrows you can slot-canyon scramble for free without any permits."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "acadia",
    "name": "Acadia",
    "state": "ME",
    "image": "https://images.unsplash.com/featured/?Acadia,national+park",
    "compositeScore": 4.2,
    "bestMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "temperature": {
      "max": 74,
      "min": 52
    },
    "flightTime": {
      "SFO": 9.5,
      "LAX": 10.25,
      "JFK": 5.5,
      "ORD": 6.833333333333333
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Cadillac Mountain is often the first place in the U.S. to see the sunrise from Oct to Mar.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Pre-dawn drive up Cadillac Mountain (reservation required). Watch sunrise over the Atlantic. Breakfast in Bar Harbor. Hike the Beehive Trail (1.6 mi, iron-rung scramble) for an exhilarating morning."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Bike the 45-mile carriage road network. Jordan Pond House: lunch and popovers (make a reservation). Afternoon: Bass Harbor Head Lighthouse at golden hour for the money shot."
        ]
      }
    ],
    "proHacks": [
      "Cadillac Mountain Summit Road requires a vehicle reservation ($6 + entry fee) May 20 – Oct 25, 2026, sunrise to sunset. Book on recreation.gov. 70% of spots release 2 days before — check at 10 AM ET.",
      "Use the free Island Explorer bus from Bar Harbor to reach Jordan Pond, Eagle Lake, and Sieur de Monts. Parking at Jordan Pond fills by 9 AM.",
      "Beehive and Precipice Trails are closed mid-spring through July/August for peregrine falcon nesting. Check nps.gov/acad for exact closure dates before planning.",
      "Acadia's carriage road system (45 miles) is perfect for cycling. Rent bikes from Bar Harbor Bicycle Shop and access directly from town via the Village Connector path.",
      "Bass Harbor Head Lighthouse is technically in the park but on private property. Park in the small lot and visit the south-facing rocks below for the classic framed-by-spruce-trees shot at sunset."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "joshua-tree",
    "name": "Joshua Tree",
    "state": "CA",
    "image": "https://images.unsplash.com/featured/?Joshua+Tree,national+park",
    "compositeScore": 4.4,
    "bestMonths": [
      9,
      10,
      1,
      2,
      3,
      4
    ],
    "temperature": {
      "max": 83,
      "min": 52
    },
    "flightTime": {
      "SFO": 2.1666666666666665,
      "LAX": 2.5,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Joshua Trees aren't actually trees; they are succulents (yucca).",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Hidden Valley loop trail (1 mi) — scramble boulders. Skull Rock nature trail (1.7 mi). Keys View (drive-up, panoramic views of the entire valley and Salton Sea). Camp at Ryan or Jumbo Rocks for stargazing."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Cholla Cactus Garden (0.25 mi, backlit by morning sun) at dawn. Arch Rock trail (1.5 mi). Keys Ranch tour if offered (historical, ranger-led, book online). Single-pitch rock climbing from Hidden Valley Campground."
        ]
      }
    ],
    "proHacks": [
      "The park has no water sources. Every trailhead has a sign stating the water deficit — carry a minimum of 1 liter per mile in spring, 2 liters per mile in summer.",
      "The West entrance has the longest queues. Enter from the North (29 Palms) or South (Cottonwood) entrances for quick access to the park interior.",
      "Cell service is extremely limited. Download offline Google Maps and the NPS Joshua Tree app before arriving. Many trailheads are marked incorrectly on regular GPS.",
      "Check the NPS wildflower hotline (760-367-5522) in February-March. After winter rains, desert wildflower blooms can cover entire sections of the park.",
      "Rock climbing permits are not required for most routes. Visit the Mountain Project app or Nomad Ventures (in-park) for route beta."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "grand-teton",
    "name": "Grand Teton",
    "state": "WY",
    "image": "https://images.unsplash.com/featured/?Grand+Teton,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 70,
      "min": 38
    },
    "flightTime": {
      "SFO": 6.833333333333333,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is named after the Grand Teton, the tallest mountain in the Teton Range at 13,775 feet.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Pre-dawn at Schwabacher Landing for Teton reflection and moose. Boat shuttle across Jenny Lake → Hidden Falls and Inspiration Point (4 mi RT). Afternoon: Mormon Row barns at golden hour."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Delta Lake trail (8.9 mi RT, 2,900 ft) — start at 5:30 AM to beat thunderstorms and reach the glacier before afternoon clouds obscure the view. Reward: a milky blue alpine lake below the Grand Teton."
        ]
      }
    ],
    "proHacks": [
      "Moose-Wilson Road (between Teton Village and Moose) is closed to RVs and trailers and is the single best road in the park for wildlife. Drive it slowly at dawn and dusk.",
      "Buy bear spray at Costco in Jackson ($30-35) before arriving — park stores charge $50+. It's required for Cascade Canyon and backcountry trails.",
      "The Jenny Lake Boathouse shuttle boat saves 2 miles of flat trail each way — worth the $18 roundtrip to go straight to Hidden Falls and Inspiration Point.",
      "Schwabacher Landing is free, unmarked, and requires a short dirt road drive south of Moose. Dawn light on the Teton reflection in the beaver ponds is one of the best sunrise shots in the NPS.",
      "Delta Lake (9 mi roundtrip, 2,900 ft gain) requires an early 5 AM start — the boulder field section takes longer than expected, and afternoon thunderstorms are common."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "great-smoky-mountains",
    "name": "Great Smoky Mountains",
    "state": "TN / NC",
    "image": "https://images.unsplash.com/featured/?Great+Smoky+Mountains,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      3,
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 71,
      "min": 47
    },
    "flightTime": {
      "SFO": 5,
      "LAX": 4,
      "JFK": 4,
      "ORD": 4
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the most visited national park in the United States, seeing over 13 million people a year.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Cades Cove wildlife loop (11 mi by car or bike on Wednesdays/Saturdays). Best wildlife at dawn — black bear, deer, wild turkey. Hike Abrams Falls (5 mi RT) mid-morning."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Drive up to Clingmans Dome (highest point at 6,643 ft). Half-mile paved ramp to the observation tower — 360° view of the entire park. Alum Cave Trail (4.4 mi RT) for dramatic overhangs and rock formations."
        ]
      }
    ],
    "proHacks": [
      "The park is free to enter but a parking tag ($5/day, $15/week) is required at major trailheads. Buy it in advance on recreation.gov or risk an expensive ticket.",
      "Cades Cove Loop Road is closed to cars until 10 AM on Wednesdays (late May–late September) and all day Saturdays — bike or walk the full 11-mile loop in peace.",
      "Synch firefly lottery (r/NationalParks): apply in April for the June event. Applications open for only a few days and 5,000+ people apply for 700 spots.",
      "The Alum Cave Trail (4.4 mi roundtrip to Arch Rock, 10 mi to LeConte) is the park's best all-purpose trail — dramatic geology, waterfalls, and high elevation views.",
      "Avoid Gatlinburg entirely on fall foliage weekends (mid-Oct). Clingmans Dome and Newfound Gap roads become parking lots. Stay in Bryson City (NC side) instead."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "shenandoah",
    "name": "Shenandoah",
    "state": "VA",
    "image": "https://images.unsplash.com/featured/?Shenandoah,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 71,
      "min": 49
    },
    "flightTime": {
      "SFO": 6.75,
      "LAX": 5,
      "JFK": 4.666666666666667,
      "ORD": 5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park's creation displaced over 500 families who lived in the Blue Ridge Mountains.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive Skyline Drive from the north. Stop at Range View, Hogback, and Marys Rock Tunnel overlooks. Hike Stony Man Trail (1.6 mi, highest peak accessible trail in the park). Sunset from Hazel Mountain Overlook."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Old Rag Mountain full circuit (9.2 mi loop, 2,400 ft) — buy the $2 day-use ticket in advance. The rock scramble section at the summit is unlike anything else in the mid-Atlantic."
        ]
      }
    ],
    "proHacks": [
      "Old Rag Mountain requires a $2 day-use ticket per person (recreation.gov), good for all 3 connector trails. Tickets release 30 days out at 10 AM ET and 400 more release 5 days out — both sell out fast.",
      "The Skyline Drive speed limit is 35 mph and strictly enforced. Budget 3-4 hours to drive the entire 105 miles, including stops at the best overlooks.",
      "Bearfence Mountain (off mile 56 on Skyline Drive) is a 20-minute scramble to a rock summit with 360° views — one of the best bang-for-buck hikes in the entire park.",
      "Fall color peak is typically Oct 12-22 (north district) and Oct 18-28 (south). Check NPS webcams at dawn — fog in the valleys with colored trees above it is spectacular.",
      "The park has 4 campgrounds that do not require timed entry, but Mathews Arm, Loft Mountain, and Big Meadows fill by noon on October weekends. Arrive the night before."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "north-cascades",
    "name": "North Cascades",
    "state": "WA",
    "image": "https://images.unsplash.com/featured/?North+Cascades,national+park",
    "compositeScore": 3.6,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 77,
      "min": 50
    },
    "flightTime": {
      "SFO": 4.75,
      "LAX": 5.25,
      "JFK": 8,
      "ORD": 6.75
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It contains over 300 glaciers, the most of any U.S. park outside of Alaska.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive Highway 20 from the west. Stop at Diablo Lake Overlook (free, 15 seconds off the road). Washington Pass Overlook for the jagged Liberty Bell massif. Maple Pass trailhead for sunset."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Maple Pass Loop (7.2 mi, 2,000 ft) at dawn — the lake, ridge, and larches are extraordinary. Afternoon: Cascade Pass trail (7.4 mi RT) for a different perspective of wild glaciated peaks."
        ]
      }
    ],
    "proHacks": [
      "The park has NO entrance fee — Highway 20 simply passes through it. There's no entrance gate or ticket booth.",
      "Sahale Arm backcountry camp requires a permit from recreation.gov. Apply as soon as they open (usually March or April) as the site fills for all of July and August.",
      "Check WTA.org (Washington Trails Association) for current trail conditions. Major trails above 5,500 ft often have snow through mid-August.",
      "Maple Pass Loop in late September during golden larch season is the most popular hike in the park — arrive by 7 AM. The trailhead lot fits only 30 cars.",
      "The Diablo Lake Overlook is 15 seconds off Highway 20. The turquoise color from rock flour is real — you'll stop the car in genuine disbelief."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "saguaro",
    "name": "Saguaro",
    "state": "AZ",
    "image": "https://images.unsplash.com/featured/?Saguaro,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      10,
      11,
      0,
      1,
      2,
      3
    ],
    "temperature": {
      "max": 72,
      "min": 46
    },
    "flightTime": {
      "SFO": 3.25,
      "LAX": 3,
      "JFK": 6.5,
      "ORD": 5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The Saguaro cactus is the largest cactus in the United States, reaching up to 40-60 feet tall.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "West District (Tucson Mountain): Bajada Loop Drive (dirt road, 8 mi) at dawn for dense saguaro forests. Signal Hill Petroglyphs (0.5 mi). Afternoon: Arizona-Sonora Desert Museum (not NPS, separate entry, 2 hrs minimum)."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "East District (Rincon Mountain): Tanque Verde Ridge Trail (6 mi RT for desert views) or easy Cactus Forest Trail loop (2.5 mi). Gates Pass Road outside the west entrance for sunset photography."
        ]
      }
    ],
    "proHacks": [
      "The park is split by Tucson into East (Rincon Mountain) and West (Tucson Mountain) districts — visit both if you have a second day. West has older, denser cacti.",
      "Gates Pass Road (just outside the west district) is free and has arguably better saguaro scenery than sections inside the paid park boundary.",
      "The Arizona-Sonora Desert Museum (2 miles from the west entrance) is not technically part of the park — separately ticketed, but it's voted #1 thing to do in Tucson. Do it first.",
      "Carry a blacklight flashlight on any evening walk. Scorpions glow bright green-yellow under UV light. There are far more than you think near rocks and logs.",
      "Visit in late April-May for the saguaro bloom — giant white flowers appear only at night and close by morning. Spot them at dawn before the heat wilts them."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "everglades",
    "name": "Everglades",
    "state": "FL",
    "image": "https://images.unsplash.com/featured/?Everglades,national+park",
    "compositeScore": 4,
    "bestMonths": [
      10,
      11,
      0,
      1,
      2,
      3
    ],
    "temperature": {
      "max": 82,
      "min": 62
    },
    "flightTime": {
      "SFO": 6,
      "LAX": 6,
      "JFK": 4,
      "ORD": 3.8333333333333335
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The Everglades is not a swamp, but a massive, slow-moving river 60 miles wide.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Anhinga Trail at dawn (0.8 mi) — do not skip this. Royal Palm area Gumbo Limbo Trail (0.4 mi). Shark Valley: bicycle rental (2 hrs, 15-mi loop) past dozens of alligators sunbathing on the path."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Drive to Flamingo (38 mi, end of the road). Eco Pond birdwatching pull-off. Flamingo Visitor Center and Florida Bay kayaking ($35 rental). Nine Mile Pond canoe/kayak loop for mangrove tunnels."
        ]
      }
    ],
    "proHacks": [
      "The dry season (Nov-April) is the only time the park is safely visitable for most people. Mosquito levels in May-October are described by rangers as 'beyond tolerance'.",
      "The Anhinga Trail (0.8 mi) has a higher wildlife density per foot than almost anywhere in North America — do it first, at dawn, when anhingas are perched and spreading wings.",
      "Airboat tours operate OUTSIDE the park boundary. Shark Valley Tram or bicycle rental ($35 for 2hrs) gives a proper in-park experience on official trails.",
      "Flamingo Visitor Center (the end of the main road) is 38 miles into the park. Bring lunch — there are no food services and camping requires advance booking.",
      "Florida Bay in winter (Dec-Feb) has spectacular birdwatching from Eco Pond and the Flamingo area. Roseate spoonbills, herons, and ospreys are common sightings."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "bryce-canyon",
    "name": "Bryce Canyon",
    "state": "UT",
    "image": "https://images.unsplash.com/featured/?Bryce+Canyon,national+park",
    "compositeScore": 4.5,
    "bestMonths": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "temperature": {
      "max": 64,
      "min": 37
    },
    "flightTime": {
      "SFO": 7.75,
      "LAX": 5.25,
      "JFK": 9,
      "ORD": 7.666666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Bryce Canyon is not actually a canyon, but a series of natural amphitheaters carved into the edge of a high plateau.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Sunrise at Sunrise Point (with every other visitor). Start the Navajo Loop trail from Sunset Point — go down Wall Street to the canyon floor, connect to Queen's Garden, ascend back up (5.5 mi RT). Shuttle to Inspiration Point for afternoon light."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Bryce Point at dawn (minimal crowds vs Sunrise Point). Peek-a-Boo Loop trail (5.5 mi, more dramatic hoodoos than the Navajo Loop). Night sky ranger astronomy program if available."
        ]
      }
    ],
    "proHacks": [
      "Start the Navajo Loop at Wall Street (the steep section) and go down, connecting to Queens Garden Trail to come back up. Going the reverse direction is significantly harder.",
      "The park sits at 8,000-9,100 ft elevation. Even in summer, temperatures can drop below freezing overnight — pack more layers than you think you need.",
      "Shuttle service is free and runs May through early October. Use it to avoid the Sunrise/Sunset/Inspiration Point parking scramble.",
      "Book the ranger-led astronomy programs in advance (free but fill up). Bryce's skies are among the best in the US — over 7,500 stars visible to the naked eye.",
      "Bryce Canyon City (outside the south entrance) has lodging far cheaper than inside the park. Bryce Canyon Grand Hotel is particularly well reviewed for the price."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "great-basin",
    "name": "Great Basin",
    "state": "NV",
    "image": "https://images.unsplash.com/featured/?Great+Basin,national+park",
    "compositeScore": 3.3,
    "bestMonths": [
      5,
      6,
      7,
      8
    ],
    "temperature": {
      "max": 80,
      "min": 51
    },
    "flightTime": {
      "SFO": 10.25,
      "LAX": 5.75,
      "JFK": 9.5,
      "ORD": 8.166666666666666
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is home to Bristlecone Pine trees that are nearly 5,000 years old, making them the oldest living non-clonal organisms on Earth.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Lehman Caves ranger-led tour (book in advance, 60-90 min underground). Wheeler Peak Scenic Drive to 10,000 ft. Alpine Lakes Loop trail (2.7 mi) past Stella and Teresa Lakes. Watch sunset from Wheeler Peak overlook."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Bristlecone Pine Trail (2.8 mi RT) to the 5,000-year-old trees. Glacier Trail extension (4.6 mi) to Wheeler Peak Glacier if accessible. Night: Astronomy Amphitheater for ranger stargazing with telescopes."
        ]
      }
    ],
    "proHacks": [
      "Lehman Caves tours sell out quickly — book on recreation.gov exactly 30 days in advance at 7 AM PT. They release daily slots and peak summer tours vanish in seconds.",
      "There is zero cell service anywhere in or near the park. Download offline maps and the NPS Great Basin app before arrival.",
      "Fill your gas tank in Baker (12 miles east) or Ely (70 miles east). There is no fuel in the park.",
      "Wheeler Peak Scenic Drive opens around Memorial Day (snow-dependent). The drive to 10,000 ft takes 20 minutes and opens access to the Bristlecone Pine trail and glacier.",
      "The Great Basin Astronomy Festival in September is free. Ranger-telescopes let you see Saturn's rings, Jupiter's moons, and deep-sky nebulae from the darkest park in the lower 48."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "crater-lake",
    "name": "Crater Lake",
    "state": "OR",
    "image": "https://images.unsplash.com/featured/?Crater+Lake,national+park",
    "compositeScore": 4.2,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 71,
      "min": 41
    },
    "flightTime": {
      "SFO": 4.5,
      "LAX": 5.25,
      "JFK": 8.333333333333334,
      "ORD": 7.166666666666667
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "At 1,943 feet deep, it is the deepest lake in the United States.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive the 33-mile Rim Drive clockwise, stopping at Phantom Ship Overlook, Cloudcap Overlook (highest viewpoint), and Watchman Overlook for sunset. The lake looks different from each vantage point."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Cleetwood Cove Trail (2 mi RT, steep descent) to the lake shore — swim in 38°F impossibly blue water or take the Wizard Island boat tour. Hike Discovery Point trail (2.6 mi RT) for classic crater views."
        ]
      }
    ],
    "proHacks": [
      "Check the NPS Crater Lake webcam at nps.gov/crla before making the drive up — the lake is occasionally obscured by fog or smoke for days at a time.",
      "Wizard Island boat tours sell out months in advance. Book immediately when summer windows open (usually March). There is no standby option.",
      "The 33-mile Rim Drive is best driven clockwise starting from Steel Visitor Center — this keeps the lake views to your left (driver's side) for easier sightseeing.",
      "Cleetwood Cove is the only legal access to the water. The 1-mile descent (11% grade) is easy going down; allow double the time for the brutal climb back up in hot sun.",
      "Crater Lake Lodge has rooms with a direct view over the caldera. Book exactly 12 months in advance — the window-view rooms sell out in minutes."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "isle-royale",
    "name": "Isle Royale",
    "state": "MI",
    "image": "https://images.unsplash.com/featured/?Isle+Royale,national+park",
    "compositeScore": 2.8,
    "bestMonths": [
      6,
      7,
      8
    ],
    "temperature": {
      "max": 75,
      "min": 51
    },
    "flightTime": {
      "SFO": 9,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the least visited national park in the lower 48 states; Yellowstone gets more visitors in a day than Isle Royale gets in a year.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive by seaplane or ferry to Rock Harbor. Set up camp. Stoll Trail (4 mi) to Scoville Point for sweeping views of Superior. Watch for moose near the harbor marshes at dusk."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Greenstone Ridge Trail — hike east or west section (trail is 42 mi total; do 10-14 mi of it). Lookout Louise gives the best island panorama. Thimbleberry picking in August along the ridge."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Canoe or kayak from Rock Harbor out to Raspberry Island. Snorkel over the shallow ship wreck in Rock Harbor using the NPS rental snorkel gear. Depart seaplane or board the evening ferry."
        ]
      }
    ],
    "proHacks": [
      "Book your ferry (Rock Harbor or Copper Harbor) or seaplane (Houghton) months in advance — the seaplane from Houghton is $350 each way but saves 6 nausea-inducing hours on Lake Superior.",
      "Backcountry trips require advance permit registration (free, but required in 2026). Reserve sites at nps.gov/isro. Sites fill for July-August by early spring.",
      "Treat ALL water on the island — moose and wolf tapeworm (Echinococcus granulosus) is present in the lakes. Use a filter or iodine, no exceptions.",
      "Thimbleberries (a native raspberry-like fruit) ripen in late August along trail edges. They're edible and delicious — pick and eat freely.",
      "The island closes to public access October 31 and reopens late April. The exact date varies by ferry schedule — confirm on nps.gov/isro."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "big-bend",
    "name": "Big Bend",
    "state": "TX",
    "image": "https://images.unsplash.com/featured/?Big+Bend,national+park",
    "compositeScore": 3.6,
    "bestMonths": [
      9,
      10,
      11,
      0,
      1,
      2
    ],
    "temperature": {
      "max": 81,
      "min": 55
    },
    "flightTime": {
      "SFO": 6.5,
      "LAX": 6.5,
      "JFK": 6.5,
      "ORD": 6.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It contains more insect, bird, and reptile species than any other national park.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Ross Maxwell Scenic Drive with stops at Sotol Vista and Mule Ears Viewpoint. Hike Santa Elena Canyon (1.7 mi RT) into the slot canyon carved by the Rio Grande. Hot Springs boardwalk trail at golden hour (2 mi RT, pools at 105°F)."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Chisos Mountains: Lost Mine Trail (4.8 mi RT, 1,100 ft — best trail in the park) from Chisos Basin. Evening: Window View Trail (0.3 mi) for the sunset vista framed through the Window notch."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Boquillas Crossing to Mexico (Wed-Sun, passport required). Walk or ride donkey to the tiny border village. Cross back and drive the River Road for desert solitude. Stargazing from your campsite at the darkest night sky in any lower-48 park."
        ]
      }
    ],
    "proHacks": [
      "Boquillas Port of Entry (cross to Mexico) is open Wed-Sun, 9 AM–6 PM. Bring your passport and some US dollar bills for the rowboat crossing ($5) and village snacks.",
      "The park has some of the worst conditions for cell service in the US. Download offline maps, the NPS app, and a weather radar app before leaving Terlingua.",
      "Rio Grande Village has the park's only gas station. Fill up there before driving remote dirt roads like Old Maverick Road or the River Road.",
      "Check the night sky forecast at darksky.org before your trip. Big Bend has the lowest light pollution of any lower-48 national park — when the moon is new, the Milky Way casts visible shadows.",
      "Chisos Basin lodge and campsite reservations should be made 6-12 months in advance for spring visits. The Basin is the most popular area and fills for March and April far in advance."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "biscayne",
    "name": "Biscayne",
    "state": "FL",
    "image": "https://images.unsplash.com/featured/?Biscayne,national+park",
    "compositeScore": 3.4,
    "bestMonths": [
      11,
      0,
      1,
      2,
      3
    ],
    "temperature": {
      "max": 75,
      "min": 64
    },
    "flightTime": {
      "SFO": 6,
      "LAX": 6,
      "JFK": 4,
      "ORD": 3.8333333333333335
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Biscayne is 95% water—you cannot see the park without getting on a boat.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Dante Fascell Visitor Center. Kayak rental for Florida Bay paddling (3-4 hrs). Glass-bottom boat tour in the afternoon to see the coral reef without getting wet. Evening: watch the sunset from the marina dock."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Boat to Elliott Key (rent or guide). Snorkel the Maritime Heritage Trail shipwrecks. Walk the Hurricane Creek Trail on Elliott Key (short, flat, through hardwood hammock). Swim in the crystal-clear shallows before the return boat."
        ]
      }
    ],
    "proHacks": [
      "You MUST take a boat to see the park. The mainland visitor center shows you virtually nothing. Book a glass-bottom boat tour or bring/rent your own kayak.",
      "The Dante Fascell Visitor Center (free entry) rents canoes ($20/hr) and kayaks ($30/hr). Go early — rentals can sell out on weekends.",
      "The Maritime Heritage Trail shipwrecks require snorkel or dive gear. Visibility is best Nov-April when the water is clearest and wind-chop is lowest.",
      "Elliott Key has a free campground accessible only by boat. Bring everything including water — there are no services on the island at all.",
      "Hurricanes damage the coral reef annually. Check nps.gov/bisc for current reef conditions before planning a snorkeling trip. Some zones may be closed for recovery."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "dry-tortugas",
    "name": "Dry Tortugas",
    "state": "FL",
    "image": "https://images.unsplash.com/featured/?Dry+Tortugas,national+park",
    "compositeScore": 3.7,
    "bestMonths": [
      10,
      11,
      0,
      1,
      2,
      3
    ],
    "temperature": {
      "max": 79,
      "min": 71
    },
    "flightTime": {
      "SFO": 8,
      "LAX": 3,
      "JFK": 3,
      "ORD": 3
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Fort Jefferson is the largest brick masonry structure in the Americas, built from 16 million bricks.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Board the Yankee Freedom III ferry at 8 AM from Key West. Arrive Ft. Jefferson at 10:30 AM. Ranger-led fort tour (1 hr), then snorkel off the sea wall immediately surrounding the fort. Excellent coral and sea turtles without a boat. Ferry departs 3 PM."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Same arrival. Set up camp in the shade of the fort walls. After the day-trippers leave at 3 PM the island belongs to you (about 10 campers max). Night: completely dark skies, sea turtles emerge on the beach, bioluminescent plankton in the moat."
        ]
      }
    ],
    "proHacks": [
      "The Yankee Freedom III ferry from Key West is $225 per person roundtrip and the only boat service. Book 60+ days in advance for March-May as it sells out completely.",
      "The 10-boat camping spots at Garden Key fill within minutes of opening (usually November 15 for the following year). Set a recreation.gov alert.",
      "Bring every single item you need — there are ZERO services on the island beyond a small gift shop. Water, food, shade structures, snorkeling gear required.",
      "The ferry includes a ranger-led tour of Fort Jefferson. Do it — the military history (Samuel Mudd, Civil War, etc.) is genuinely fascinating and rangers here are exceptional.",
      "The reefs immediately around the fort are exceptional for snorkeling without a boat — coral walls within 100 feet of the shore in 6-15 feet of water."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "cuyahoga-valley",
    "name": "Cuyahoga Valley",
    "state": "OH",
    "image": "https://images.unsplash.com/featured/?Cuyahoga+Valley,national+park",
    "compositeScore": 3,
    "bestMonths": [
      4,
      5,
      8,
      9
    ],
    "temperature": {
      "max": 72,
      "min": 50
    },
    "flightTime": {
      "SFO": 4.833333333333333,
      "LAX": 3.5,
      "JFK": 3.5,
      "ORD": 5.5
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park was created out of heavily polluted industrial land, making it one of the greatest environmental recovery success stories in the US.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Bike Aboard program: rent a bike at Peninsula, take the train one direction, cycle back on the 20-mile Ohio & Erie Towpath Trail. Brandywine Falls (0.25 mi boardwalk) — most dramatic at high water in spring. Beaver Marsh wildlife boardwalk at dusk."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Ledges area: Ledges Trail (2.2 mi loop) through sandstone formations. Blue Hen Falls (2.1 mi). Kendall Lake area for a picnic. Stanford Trail and Haskell Run to the waterfall for the full park sampler."
        ]
      }
    ],
    "proHacks": [
      "The Bike Aboard program lets you load your bicycle on the Cuyahoga Valley Scenic Railroad, ride one way, and cycle back. The train runs weekends May-October ($3-5/bike, plus train fare).",
      "The park has no entrance fee — ever. It's fully free year-round including camping at the three backcountry campsites (permit required, also free).",
      "Brandywine Falls is the park's most dramatic waterfall. Visit in winter (January-February) when it's at least partially frozen — the boardwalk is accessible year-round.",
      "The Ohio & Erie Canalway Towpath Trail runs 20 miles through the park. The Ira Trailhead has the best free parking and starts you at the most scenic section.",
      "The Peninsula village (2 miles off I-271) has great local restaurants and a bike rental shop — much more charming than starting from the Visitor Center."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "kenai-fjords",
    "name": "Kenai Fjords",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Kenai+Fjords,national+park",
    "compositeScore": 4.1,
    "bestMonths": [
      5,
      6,
      7
    ],
    "temperature": {
      "max": 59,
      "min": 46
    },
    "flightTime": {
      "SFO": 9.5,
      "LAX": 8,
      "JFK": 10.5,
      "ORD": 9
    },
    "features": {
      "stargazing": false,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "The park is crowned by the Harding Icefield, one of the largest ice fields in the United States, spawning nearly 40 glaciers.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Exit Glacier (drive-in, free): walk Glacier View Loop (0.8 mi) and Harding Icefield trailhead for the glacier face. Return to Seward for excellent seafood dinner at Chinook's or Thorn's Showcase Lounge."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Full-day Northwestern Fjord boat tour (8-9 hrs, $200-250): two tidewater glaciers calving, Steller sea lion haul-outs, humpback whale bubble-net feeding, puffins, orcas. This is the trip. Book it."
        ]
      }
    ],
    "proHacks": [
      "Book wildlife boat tours through Kenai Fjords Tours or Major Marine Tours 2-3 months in advance for July-August. The 8-hour Northwestern Fjord tour gives the best glacier and wildlife experience.",
      "Exit Glacier (free, walk-in) is the only section of the park accessible by road. The Harding Icefield Trail (8.2 mi, 3,800 ft gain) gives an unmatched aerial view of the icefield.",
      "The town of Seward has excellent accommodations and food 10 minutes from the park. Book lodging in Seward early — the town fills for July 4th weekend months in advance.",
      "Bear viewing at the boat tour is best in August-September when silver salmon are running. Steller sea lions, orcas, and porpoises are common year-round.",
      "Weather changes extremely fast in Kenai Fjords. Always pack a waterproof shell regardless of the forecast — the fjords create their own micro-weather system."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "white-sands",
    "name": "White Sands",
    "state": "NM",
    "image": "https://images.unsplash.com/featured/?White+Sands,national+park",
    "compositeScore": 3.9,
    "bestMonths": [
      2,
      3,
      9,
      10
    ],
    "temperature": {
      "max": 70,
      "min": 32
    },
    "flightTime": {
      "SFO": 4.5,
      "LAX": 4.5,
      "JFK": 4.5,
      "ORD": 4.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the largest gypsum dunefield in the world, covering 275 square miles.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Drive to the end of the road. Hike the first 1-2 miles of the Alkali Flat trail (look for the orange trail markers). Sled down the steepest dunes. Stay for sunset to watch the sand turn pink and purple."
        ]
      }
    ],
    "proHacks": [
      "Bring sunglasses. The white sand reflects the sun intensely and will give you a headache fast without eye protection.",
      "Drive to the very end of Dunes Drive where the pavement ends and turns into hard-packed gypsum. It's safe for 2WD sedans and takes you to the pristine, plant-free dunes.",
      "Always check the park website before driving out. Scheduled missile tests briefly close the highway and park."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "wrangell-st.-elias",
    "name": "Wrangell-St. Elias",
    "state": "AK",
    "image": "https://images.unsplash.com/featured/?Wrangell,national+park",
    "compositeScore": 3.1,
    "bestMonths": [
      5,
      6,
      7
    ],
    "temperature": {
      "max": 68,
      "min": 36
    },
    "flightTime": {
      "SFO": 12,
      "LAX": 10.5,
      "JFK": 13,
      "ORD": 11.5
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "It is the largest national park in the US — at 13.2 million acres, it's larger than Yellowstone, Yosemite, and Switzerland combined.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Navigate the McCarthy Road or fly in from Chitina. Cross the footbridge. Shuttle to Kennecott. Explore the lower ghost town."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Guided ice climbing or crampon hiking on the Root Glacier. Afternoon guided tour inside the 14-story Kennecott Copper Mill building."
        ]
      },
      {
        "day": 3,
        "title": "Planned Activities",
        "activities": [
          "Hike the steep Jumbo Mine Trail (3000ft gain) up the mountain for sweeping views of the Kennicott Glacier valley."
        ]
      }
    ],
    "proHacks": [
      "Instead of driving the brutal McCarthy Road, take a 30-minute bush flight from Chitina via Wrangell Mountain Air. Saves your rental car and offers insane views.",
      "Hire a guide in Kennecott to hike out onto the Root Glacier. Walking on white ice past massive blue moulins (ice caves) is spectacular.",
      "The town of McCarthy (population ~30) is separated from parking by a footbridge. You cannot drive into the town or to the mines."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  },
  {
    "id": "haleakalā",
    "name": "Haleakalā",
    "state": "HI",
    "image": "https://images.unsplash.com/featured/?Haleakala,national+park",
    "compositeScore": 4.2,
    "bestMonths": [
      3,
      4,
      8,
      9
    ],
    "temperature": {
      "max": 79,
      "min": 67
    },
    "flightTime": {
      "SFO": 4,
      "LAX": 4,
      "JFK": 6,
      "ORD": 4
    },
    "features": {
      "stargazing": true,
      "hiking": true,
      "camping": true,
      "wildlife": true
    },
    "description": "Haleakalā means 'House of the Sun' in Hawaiian.",
    "itinerary": [
      {
        "day": 1,
        "title": "Planned Activities",
        "activities": [
          "Arrive at the summit by 3:30 AM for sunrise (reservation required). Witness sunrise above the clouds. Descend to the visitor center. Drive back down to the communities of Kula or Makawao for breakfast. Afternoon: hike the Pipiwai Trail in Hana if combining with Road to Hana."
        ]
      },
      {
        "day": 2,
        "title": "Planned Activities",
        "activities": [
          "Return to lower elevation park for the Hosmer Grove bird walk (0.5 mi, rare Hawaiian honeycreepers). Drive to summit for sunset (no reservation required). Stay for stars in one of the darkest spots on Maui."
        ]
      }
    ],
    "proHacks": [
      "Sunrise reservoir permits ($1/car) open 60 days in advance at midnight HST and sell out in as little as 90 seconds. Set a phone alarm and have recreation.gov logged in and ready.",
      "The summit is at 10,023 feet. Altitude sickness is real — if you feel dizzy or have a bad headache, descend immediately. Drive slowly and take 20 minutes at the visitors center (7,000 ft) before continuing.",
      "Downhill bike tours (23 miles from summit to coast, $150) are heavily commercialized. Consider renting a standard bike at the bottom and only doing the lower road sections if you want a more authentic experience.",
      "Paia town on the north shore has the best breakfast on Maui. Hit Café des Amis or Paia Bay Coffee before your 3 AM drive up to the summit.",
      "Hosmer Grove (6,800 ft, just inside the park entrance) is free to walk and has native Hawaiian birds including the 'apapane and 'amakihi that you won't see at lower elevations."
    ],
    "redditSentiment": {
      "positive": 85,
      "neutral": 10,
      "negative": 5
    }
  }
];

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const HUBS = [
  { code: "SFO", name: "San Francisco" },
  { code: "LAX", name: "Los Angeles" },
  { code: "JFK", name: "New York" },
  { code: "ORD", name: "Chicago" }
];
