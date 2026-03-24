// ============ National Parks Enriched Data (Monthly Granularity) ============
const _PARKS_RAW = [
  {
    name: "Indiana Dunes", state: "IN", bestMonths: [5, 9, 10], minDays: 1, flightMinutes: 410, days: "1 Day",
    airport: "MDW (1h) or ORD (1.5h)", flight: "~4h 20m to MDW (1 stop)", transport: "Car/Train",
    avoid: [7, 12, 1, 2], popularity: 60, uniqueness: 75, sfoAccessibility: 50,
    seasonalVerdict: { best: "May (Bird migration), September (Warm water, fewer crowds).", avoid: "July (Maximum beach crowding/humidity)." },
    funFacts: [
      "The park sits on the southern tip of Lake Michigan, acting as a massive biological crossroads.",
      "Mount Baldy is a 'living' dune, moving inland at a rate of roughly four feet per year.",
      "You can see the Chicago skyline directly across the lake from the beaches on clear days."
    ],
    links: { nps: "https://www.nps.gov/indu" },
    sunriseSunset: "Summer: 5:30 AM / 8:30 PM",
    stargazing: { isFriendly: false, spots: "Kemil Beach", description: "Too much light pollution from Chicago and Gary, IN for true dark skies." },
    topActivities: ["3 Dune Challenge", "West Beach", "Cowles Bog Trail", "Century of Progress Homes"],
    dosAndDonts: [
      { type: "do", text: "Take the South Shore Line train directly from downtown Chicago if you don't want to drive." },
      { type: "dont", text: "Don't swim if the rip current warnings are flying. Lake Michigan pulls people under every year." }
    ],
    travelHacks: [
      "The state park (which is completely surrounded by the national park) costs a separate entrance fee, but houses the famous '3 Dune Challenge'.",
      "Hike the Cowles Bog Trail to see how the landscape transitions from swamp to forest to dunes to beach in just a few miles.",
      "To avoid the terrible summer weekend beach crowds, go to the far eastern edge (Mt. Baldy or Central Avenue Beach)."
    ],
    redditPosts: [
      { title: "Is it really a National Park?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "It looks weird pressed up against steel mills, but the biodiversity in the bogs is insane. It's an ecologist's paradise disguised as a beach." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Hike the 9-mile Cowles Bog Trail to the secluded beach. Picnic at West Beach. Do the 3 Dune Challenge at the State Park (if willing to pay extra fee)." }
    ],
    monthlyData: {
      6: { temp: "78°F / 58°F", reservations: "None", reddit: "Water is still freezing." },
      8: { temp: "82°F / 64°F", reservations: "None", reddit: "Peak beach season, painfully crowded on weekends." },
      9: { temp: "74°F / 55°F", reservations: "None", reddit: "Water is warmest, crowds are gone." }
    }
  },
  {
    name: "New River Gorge", state: "WV", bestMonths: [5, 10], minDays: 2, flightMinutes: 345, days: "2 Days",
    airport: "CRW (1h drive)", flight: "~4h 45m to CRW (1 stop)", transport: "Car",
    avoid: [12, 1, 2], popularity: 65, uniqueness: 88, sfoAccessibility: 40,
    seasonalVerdict: { best: "May (Wildflowers, rafting peak), October (Bridge Day, colorful gorge).", avoid: "Winter (Icy trails, limited rafting/services)." },
    funFacts: [
      "Despite its name, the New River is actually one of the oldest rivers on the North American continent.",
      "The New River Gorge Bridge is the longest steel span in the western hemisphere and the third highest in the US.",
      "Once a year on 'Bridge Day', the highway is closed and BASE jumpers leap 876 feet into the gorge."
    ],
    links: { nps: "https://www.nps.gov/neri" },
    sunriseSunset: "Summer: 6:00 AM / 8:45 PM",
    stargazing: { isFriendly: false, spots: "Grandview", description: "Decent skies, but the dense Appalachian tree canopy limits panoramic views." },
    topActivities: ["Whitewater Rafting (Lower Gorge)", "Endless Wall Trail", "Bridge Walk", "Long Point Trail"],
    dosAndDonts: [
      { type: "do", text: "Book a commercial whitewater rafting trip. The Class IV/V rapids here are legendary." },
      { type: "dont", text: "Don't rely on cell service down in the gorge near the river. It disappears instantly." }
    ],
    travelHacks: [
      "The Bridge Walk allows you to walk on a 24-inch catwalk directly underneath the massive bridge. You are strapped into a safety cable with 800 feet of empty air below you.",
      "Hike the Long Point Trail (3 miles RT) for the single best photo angle of the bridge and the gorge.",
      "The gorge is deep enough that fog often completely obscures the river in the morning until the sun burns it off around 10 AM."
    ],
    redditPosts: [
      { title: "Endless Wall vs Long Point?", sub: "r/hiking", url: "https://www.reddit.com/r/hiking/top/?t=all", quote: "Do both. Endless Wall puts you on the cliffs looking into the river. Long Point puts you on a rock outcropping looking directly at the bridge." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Hike Endless Wall Trail and Long Point Trail. Drive the winding Fayette Station Road down into the gorge and across the old bridge beneath the new one." },
      { day: "Day 2", plan: "Full day guided whitewater rafting trip on the Lower New River (Class IV rapids), ending right underneath the massive bridge." }
    ],
    monthlyData: {
      5: { temp: "72°F / 50°F", reservations: "Rafting required", reddit: "Spring rains mean the river is massive and raging." },
      9: { temp: "75°F / 55°F", reservations: "Rafting / Bridge Walk", reddit: "Gauley Season begins — the hardest commercial rafting in the world." },
      10: { temp: "65°F / 42°F", reservations: "Bridge Walk", reddit: "Peak fall colors. Bridge Day is the 3rd Saturday of Oct." }
    }
  },
  {
    name: "Mammoth Cave", state: "KY", bestMonths: [4, 5, 9, 10], minDays: 1, flightMinutes: 420, days: "1 Day",
    airport: "SDF (1.5h) or BNA (1.5h)", flight: "~4h to SDF/BNA (1 stop)", transport: "Car/Tour",
    avoid: [11, 12, 1, 2], popularity: 55, uniqueness: 92, sfoAccessibility: 60,
    seasonalVerdict: { best: "Spring/Fall offer ideal surface temperatures and active wildlife.", avoid: "Summer (Sold out tours), Winter (Trail closures/snow)." },
    funFacts: [
      "It is the longest known cave system in the entire world, with over 420 miles currently mapped.",
      "The cave served as a tuberculosis hospital in the 1840s (which ended poorly).",
      "The cave was mined for saltpeter to make gunpowder during the War of 1812."
    ],
    links: { nps: "https://www.nps.gov/maca" },
    sunriseSunset: "Summer: 5:45 AM / 8:00 PM",
    stargazing: { isFriendly: false, spots: "Surface trails", description: "Average skies, heavily forested surface." },
    topActivities: ["Historic Tour", "Domes and Dripstones Tour", "Wild Cave Tour", "Kayaking the Green River"],
    dosAndDonts: [
      { type: "do", text: "Book cave tours 3-4 weeks in advance during summer and fall." },
      { type: "dont", text: "Don't show up in flip-flops. The stairs are extremely slippery from constant moisture and cave drip." }
    ],
    travelHacks: [
      "The 'Historic Tour' takes you through massive, subway-tunnel-like dry tubes. The 'Domes and Dripstones Tour' is where you see the classic stalactites.",
      "The cave temperature is a constant 54°F (12°C). It feels amazing in July, but you still need a jacket.",
      "The surface park is fantastic for kayaking or canoeing on the Green River, which actually flows through the cave systems below."
    ],
    redditPosts: [
      { title: "Which tour is the best?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Do the Historic Tour to understand the sheer, terrifying scale of the underground canyons, and Domes & Dripstones to see the pretty rocks." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Morning 'Domes and Dripstones' tour. Afternoon 'Historic Tour' (including Fat Man's Misery). Hike the sinkhole trails near the visitor center." }
    ],
    monthlyData: {
      5: { temp: "78°F / 55°F (54°F inside)", reservations: "Tour tickets strictly required", reddit: "Heavy spring rains can cause lower cave closures." },
      8: { temp: "88°F / 65°F (54°F inside)", reservations: "Tour tickets strictly required", reddit: "The 54°F cave air feels incredible against the 90-degree humidity outside." },
      10: { temp: "72°F / 45°F (54°F inside)", reservations: "Tour tickets strictly required", reddit: "Beautiful fall surface hiking." }
    }
  },
  {
    name: "Hot Springs", state: "AR", bestMonths: [4, 10, 11], minDays: 1, flightMinutes: 300, days: "1 Day",
    airport: "LIT (1h drive)", flight: "~4h to LIT (1 stop)", transport: "Car/Walk",
    avoid: [7, 8], popularity: 40, uniqueness: 88, sfoAccessibility: 55,
    seasonalVerdict: { best: "April, October - November (Ideal hiking weather).", avoid: "July - August (Southern heat and humidity)." },
    funFacts: [
      "It is the oldest park managed by the NPS, actually protected by Congress in 1832 (before Yellowstone).",
      "It is the only national park located entirely within a city.",
      "You can legally fill up jugs of the 143°F natural thermal water at designated fountains around the city."
    ],
    links: { nps: "https://www.nps.gov/hosp" },
    sunriseSunset: "Spring: 6:30 AM / 7:30 PM",
    stargazing: { isFriendly: false, spots: "West Mountain Summit", description: "It's inside a city. Light pollution is severe." },
    topActivities: ["Soaking at Bathhouse Row", "Fordyce Bathhouse Tour", "Garvan Woodland Gardens (nearby)", "Hot Water Cascades"],
    dosAndDonts: [
      { type: "do", text: "Bring empty gallon jugs. The thermal spring water is perfectly filtered right out of the mountain and safe/delicious to drink." },
      { type: "dont", text: "Don't expect outdoor natural soaking pools in the forest. All bathing happens inside the historic indoor bathhouses." }
    ],
    travelHacks: [
      "Quapaw and Buckstaff are the only two bathhouses where you can actually soak in the thermal waters today. Buckstaff offers the traditional, intensive full-service 1920s scrub.",
      "Superior Bathhouse Brewery is the only brewery in a US National Park, and the only in the world making beer using thermal spring water.",
      "The Grand Promenade trail runs right behind the bathhouses and shows the actual hot water seeping out of the hillside."
    ],
    redditPosts: [
      { title: "Buckstaff vs Quapaw bathhouse?", sub: "r/Arkansas", url: "https://www.reddit.com/r/Arkansas/top/?t=all", quote: "Quapaw is a modern spa with big thermal pools. Buckstaff is a historical, somewhat clinical 1920s experience where attendants scrub you with loofahs." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Hike up Hot Springs Mountain Tower for views. Tour the opulent Fordyce Bathhouse (Visitor Center). Get a traditional soak at Buckstaff. Drink beer made from spring water at Superior Brewery." }
    ],
    monthlyData: {
      3: { temp: "62°F / 40°F", reservations: "Spa reservations recommended", reddit: "Perfect weather for soaking in hot water." },
      7: { temp: "92°F / 72°F", reservations: "Spa reservations recommended", reddit: "Too hot and humid outside to enjoy 100-degree bath water." },
      10: { temp: "74°F / 50°F", reservations: "Spa reservations recommended", reddit: "Crisp air returns, beautiful foliage on the Promenade." }
    }
  },
  {
    name: "Gateway Arch", state: "MO", bestMonths: [4, 5, 9, 10], minDays: 1, flightMinutes: 240, days: "0.5 Days",
    airport: "STL (20m drive/train)", flight: "~3h 40m to STL (direct)", transport: "Walk/Tram",
    avoid: [1, 2, 7, 8], popularity: 80, uniqueness: 60, sfoAccessibility: 85,
    seasonalVerdict: { best: "Shoulder seasons (May/Oct) have pleasant weather for the grounds.", avoid: "Summer (Extreme humidity), Winter (Bitter river winds)." },
    funFacts: [
      "It is the smallest national park in the US, covering just 91 acres.",
      "The arch is exactly as wide as it is tall: 630 feet.",
      "It commemorates the Louisiana Purchase and the role of St. Louis in the westward expansion of the United States."
    ],
    links: { nps: "https://www.nps.gov/jeff" },
    sunriseSunset: "Spring: 6:00 AM / 7:45 PM",
    stargazing: { isFriendly: false, spots: "None", description: "Downtown St. Louis. Severe light pollution." },
    topActivities: ["Tram Ride to the Top", "Museum at the Gateway Arch", "Riverboat Cruise"],
    dosAndDonts: [
      { type: "do", text: "Reserve your tram tickets online a few weeks in advance. They sell out completely on summer weekends." },
      { type: "dont", text: "Don't bring large bags. Airport-style security is required to enter the facility beneath the Arch." }
    ],
    travelHacks: [
      "The tram cars are absolutely tiny (like 5 people crammed face-to-face in a washing machine). If you are severely claustrophobic, the 4-minute ride up will be agonizing.",
      "The underground museum was totally renovated in 2018 and is genuinely one of the best history museums in the NPS system.",
      "Sunset and dusk are the best times to go to the top. The Arch casts a massive shadow over the city, and the Missouri side lights up."
    ],
    redditPosts: [
      { title: "Worst claustrophobia of my life", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Nobody warned me the tram pods are barely 5 feet wide with 5 adult strangers sitting knee-to-knee while it ratchets up a curved shaft." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Morning arrival, pass security. Spend 2 hours in the underground museum. Take the noon tram to the top for views spanning 30 miles. Walk the park grounds down to the Mississippi River." }
    ],
    monthlyData: {
      5: { temp: "76°F / 56°F", reservations: "Tram tickets required", reddit: "Good weather to walk the grounds." },
      7: { temp: "90°F / 70°F", reservations: "Tram tickets required", reddit: "Oppressively hot and humid, but the underground museum and Arch are air-conditioned." },
      10: { temp: "68°F / 48°F", reservations: "Tram tickets required", reddit: "Perfect weather for the riverboat cruise." }
    }
  },
  {
    name: "Congaree", state: "SC", bestMonths: [5, 10, 11], minDays: 1, flightMinutes: 450, days: "1 Day",
    airport: "CAE (30m) or CLT (2h)", flight: "~5h to CAE (1 stop)", transport: "Car",
    avoid: [6, 7, 8], popularity: 20, uniqueness: 82, sfoAccessibility: 50,
    seasonalVerdict: { best: "May (Fireflies), October - November (Foliage, low bugs).", avoid: "Summer (Severe heat/humidity/mosquitoes)." },
    funFacts: [
      "It protects the largest intact expanse of old-growth bottomland hardwood forest remaining in the southeastern US.",
      "For two weeks in late spring, synchronous fireflies put on a synchronized flashing display that exists in only a few places on Earth.",
      "The park frequently floods completely when nutrient-rich waters from the Congaree River sweep through."
    ],
    links: { nps: "https://www.nps.gov/cong" },
    sunriseSunset: "Spring: 6:30 AM / 7:45 PM",
    stargazing: { isFriendly: false, spots: "Boardwalk", description: "Dense tree canopy blocks the sky." },
    topActivities: ["Boardwalk Loop Trail", "Canoeing Cedar Creek", "Synchronous Firefly viewing (May)"],
    dosAndDonts: [
      { type: "do", text: "Check the 'Mosquito Meter' at the visitor center. Levels range from 'All Clear' to 'War Zone'." },
      { type: "dont", text: "Don't visit between June and August. The heat, humidity, and mosquitoes are genuinely unbearable." }
    ],
    travelHacks: [
      "If you rent a canoe for Cedar Creek, prepare for 'tree dodging' rather than open water paddling. It's a flooded forest, so navigation requires tight turns.",
      "The famous synchronous firefly event usually happens in mid-to-late May. The NPS now runs a strict lottery system to get tickets for the viewing nights.",
      "Because the park relies on flooding to survive, the trails often go underwater. Always check trail conditions before arriving."
    ],
    redditPosts: [
      { title: "The Mosquito Meter is accurate", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "It said 'War Zone' and it wasn't a joke. I was inhaling bugs with every breath despite deep woods OFF. Go in the winter." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Hike the 2.4-mile elevated Boardwalk Loop through the giant Loblolly Pines and Bald Cypress trees. Afternoon canoe trip down Cedar Creek through the old-growth canopy." }
    ],
    monthlyData: {
      4: { temp: "76°F / 50°F", reservations: "None", reddit: "Last good month before the mosquitoes hatch." },
      5: { temp: "84°F / 60°F", reservations: "Firefly Lottery", reddit: "Synchronous firefly event. Getting buggy and humid." },
      11: { temp: "66°F / 42°F", reservations: "None", reddit: "Perfect hiking temperature. Zero bugs." }
    }
  },
  {
    name: "Virgin Islands", state: "VI", bestMonths: [12, 1, 2, 3, 4], minDays: 3, flightMinutes: 420, days: "3 Days",
    airport: "STT (then ferry to St. John)", flight: "~7h to STT (1 stop)", transport: "Ferry required",
    avoid: [8, 9, 10], popularity: 40, uniqueness: 95, sfoAccessibility: 30,
    seasonalVerdict: { best: "December - April (Dry season, no mosquitoes, clear water).", avoid: "August - October (Peak hurricane risk, intense humidity)." },
    funFacts: [
      "The park covers roughly 60% of the island of St. John.",
      "Over 40% of the park is actually underwater, protecting coral reefs and mangrove shorelines.",
      "Trunk Bay features a 225-yard underwater snorkeling trail with plaques describing the marine life on the sea floor."
    ],
    links: { nps: "https://www.nps.gov/viis" },
    sunriseSunset: "Winter: 6:45 AM / 6:00 PM",
    stargazing: { isFriendly: true, spots: "Any North Shore beach", description: "Excellent dark skies over the Caribbean Sea." },
    topActivities: ["Snorkeling Trunk Bay", "Hiking Reef Bay Trail", "Maho Bay sea turtles", "Annaberg Sugar Plantation ruins"],
    dosAndDonts: [
      { type: "do", text: "Only use 'Reef Safe' mineral sunscreen. Chemical sunscreens are illegal in the USVI and actively enforced to protect the coral." },
      { type: "dont", text: "Don't rent a large SUV. The mountain roads on St. John are incredibly steep, narrow, and winding, with blind hairpin turns." }
    ],
    travelHacks: [
      "You fly into St. Thomas (STT), take a taxi to Red Hook, and take the passenger ferry to Cruz Bay on St. John. Renting a Jeep on St. John is easiest.",
      "Trunk Bay is beautiful but very crowded with cruise shippers. Go to Maho Bay to swim with wild sea turtles feeding on the sea grass just 20 feet from shore.",
      "The Reef Bay Trail descends 900 feet to the ocean, passing ancient petroglyphs and old sugar mills. The hike back up in the tropical heat is brutal."
    ],
    redditPosts: [
      { title: "Maho Bay turtles are incredible", sub: "r/snorkeling", url: "https://www.reddit.com/r/snorkeling/top/?t=all", quote: "Go early in the morning before the boats arrive. I floated above 6 giant sea turtles for an hour in knee-deep water." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Ferry to St. John. Rent Jeep. Drive North Shore road immediately to Trunk Bay for early morning snorkeling on the underwater trail." },
      { day: "Day 2", plan: "Morning hike down Reef Bay Trail, or explore Annaberg Plantation ruins. Afternoon relaxing and turtle-watching at Maho Bay." },
      { day: "Day 3", plan: "Rent a dinghy from Cruz Bay and boat to remote beaches like Waterlemon Cay for the island's best untouched snorkeling." }
    ],
    monthlyData: {
      1: { temp: "84°F / 72°F", reservations: "High season flights/hotels", reddit: "Perfect 80-degree weather every single day." },
      4: { temp: "86°F / 74°F", reservations: "None", reddit: "Crowds thin out slightly, water is flat and clear." },
      9: { temp: "88°F / 78°F", reservations: "None", reddit: "Peak hurricane season. Highest risk of park closures." }
    }
  },
  {
    name: "National Park of American Samoa", state: "AS", bestMonths: [6, 7, 8, 9], minDays: 3, flightMinutes: 720, days: "3 Days",
    airport: "PPG", flight: "SFO→HNL→PPG (~12h, 1 stop)", transport: "Car/Foot",
    avoid: [11, 12, 1, 2, 3], popularity: 2, uniqueness: 98, sfoAccessibility: 5,
    seasonalVerdict: { best: "June - September (Dry season, calmer seas for boat travel).", avoid: "Dec - March (Cyclone season, extremely high humidity)." },
    funFacts: [
      "It is the only US national park south of the Equator.",
      "The park spans three separate islands (Tutuila, Ofu, and Ta'u) and is leased from Samoan villages.",
      "It is home to the Flying Fox, a massive bat with a 3-foot wingspan that flies during the day."
    ],
    links: { nps: "https://www.nps.gov/npsa" },
    sunriseSunset: "Summer: 6:30 AM / 6:00 PM",
    stargazing: { isFriendly: true, spots: "Ofu Beach", description: "Isolated in the South Pacific. Stargazing is world-class if the clouds break." },
    topActivities: ["Mount Alava Trail", "Ofu Beach Snorkeling", "Homestay program", "Pola Island Trail"],
    dosAndDonts: [
      { type: "do", text: "Ask permission from villagers before using beaches or crossing land (Fa'a Samoa culture is based on respect)." },
      { type: "dont", text: "Don't plan to 'wing it'.Flights from Hawaii to Pago Pago only run twice a week. Flights to Ofu run sporadically." }
    ],
    travelHacks: [
      "Getting to the main island (Tutuila) is very expensive. Getting to the outer island of Ofu (which has the pristine postcard beaches) requires a tiny plane that breaks down frequently.",
      "The heat and humidity are oppressive year-round. Hike early. The trails are steep, muddy, and covered in slippery roots.",
      "You don't need to look for the flying foxes — they are everywhere in the sky above the canopy, looking like pterodactyls."
    ],
    redditPosts: [
      { title: "Hardest NP to get to, but the most rewarding", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "No infrastructure, no hotels on Ofu. Just you, the villagers, and the most pristine coral reef in US-controlled waters." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Arrive Pago Pago. Drive to the north shore. Hike the muddy but spectacular trail to Pola Island. Watch flying foxes." },
      { day: "Day 2", plan: "Hike the steep Mount Alava trail (7 miles RT) offering panoramic views of Pago Pago Harbor. Visit the lower Fagasā Bay." },
      { day: "Day 3", plan: "If logistics align, fly to Ofu. Snorkel the legendary Ofu Beach reef in complete isolation." }
    ],
    monthlyData: {
      6: { temp: "86°F / 78°F", reservations: "Flights must align", reddit: "Start of the 'dry' season, though it still rains frequently." },
      8: { temp: "84°F / 78°F", reservations: "Flights must align", reddit: "Best hiking conditions. Trade winds provide a slight breeze." },
      1: { temp: "88°F / 78°F", reservations: "Flights must align", reddit: "Typhoon season. Oppressive heat." }
    }
  },
  {
    name: "Hawaii Volcanoes", state: "HI", bestMonths: [4, 5, 9, 10], minDays: 2, flightMinutes: 495, days: "2 Days",
    airport: "ITO (45m drive) or KOA (2h)", flight: "~5h 30m to KOA/ITO (direct)", transport: "Car",
    avoid: [], popularity: 85, uniqueness: 98, sfoAccessibility: 85,
    seasonalVerdict: { best: "Spring/Fall offer clear volcano views and mild crater rim temps.", avoid: "No 'bad' time, but winter rain can be heavy on the coastal side." },
    funFacts: [
      "It contains two of the world's most active volcanoes: Kīlauea and Mauna Loa.",
      "You can often safely watch a volcanic eruption here depending on Kīlauea's current mood.",
      "The Thurston Lava Tube is a 500-year-old hardened river of lava you can walk entirely through."
    ],
    links: { nps: "https://www.nps.gov/havo" },
    sunriseSunset: "Winter: 6:45 AM / 6:00 PM",
    stargazing: { isFriendly: true, spots: "Chain of Craters Road", description: "Drive away from the summit glow. The dark lava fields provide excellent contrast to the Milky Way." },
    topActivities: ["Crater Rim Drive", "Thurston Lava Tube", "Kīlauea Iki Trail", "Viewing the Lava Glow at night"],
    dosAndDonts: [
      { type: "do", text: "Return to the Halemaʻumaʻu crater overlook at night to see the red magma glow reflecting off the gas plume." },
      { type: "dont", text: "Don't take any lava rock home. 'Pele's Curse' purportedly brings severe bad luck to thieves (and it's a federal crime)." }
    ],
    travelHacks: [
      "The Kīlauea Iki trail descends 400 feet into a solidified lava lake from a 1959 eruption. Steam still vents from the cracked crust. Best hike in the park.",
      "Drive the 18-mile Chain of Craters Road. It drops 3,700 feet from the summit down to the ocean, terminating where massive recent lava flows buried the highway.",
      "Check the NPS app or website the day before. Eruption status changes rapidly. If surface lava is flowing, follow ranger instructions exactly."
    ],
    redditPosts: [
      { title: "Kīlauea Iki is like walking on Mars", sub: "r/hiking", url: "https://www.reddit.com/r/hiking/top/?t=all", quote: "You walk across a mile-wide solid lava lake. It feels hollow in parts. Steam comes out of cracks. Pure sci-fi landscape." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Visitor Center. Hike through Thurston Lava Tube (go early to avoid crowds). Hike the 3.3-mile Kīlauea Iki loop. Return at night to see the volcanic glow." },
      { day: "Day 2", plan: "Drive the Chain of Craters Road down to the Holei Sea Arch. Check out the ancient Puʻuloa Petroglyphs along the way." }
    ],
    monthlyData: {
      1: { temp: "68°F / 50°F", reservations: "None", reddit: "Summit is chilly at 4000ft elevation. Bring a jacket." },
      6: { temp: "72°F / 54°F", reservations: "None", reddit: "Perfect weather. Rain showers pass quickly." },
      10: { temp: "72°F / 54°F", reservations: "None", reddit: "Good visibility for the caldera." }
    }
  },
  {
    name: "Kobuk Valley", state: "AK", bestMonths: [7, 8], minDays: 2, flightMinutes: 540, days: "2 Days",
    airport: "OTZ (then bush plane)", flight: "~9h to OTZ (1 stop) + plane", transport: "Bush Plane/Foot",
    avoid: [9, 10, 11, 12, 1, 2, 3, 4, 5], popularity: 2, uniqueness: 98, sfoAccessibility: 5,
    seasonalVerdict: { best: "July - Early September (Warmest weather, caribou migration).", avoid: "October - May (Extremely cold, no access, total darkness)." },
    funFacts: [
      "Contains the Great Kobuk Sand Dunes, the largest active sand dunes in the Arctic, formed by grinding glaciers during the Ice Age.",
      "Half a million caribou migrate through the park each year.",
      "It is one of the least visited parks in the entire system, with zero roads or facilities."
    ],
    links: { nps: "https://www.nps.gov/kova" },
    sunriseSunset: "Summer: 24hr Daylight",
    stargazing: { isFriendly: false, spots: "None", description: "Constant summer sunlight." },
    topActivities: ["Hiking the Great Kobuk Sand Dunes", "Caribou tracking", "Floating the Kobuk River"],
    dosAndDonts: [
      { type: "do", text: "Hire an outfitter based in Kotzebue or Bettles to drop you off and pick you up." },
      { type: "dont", text: "Don't forget the mosquito nets. The tundra insect swarms are thick enough to block the sun." }
    ],
    travelHacks: [
      "Because bush flights are wildly expensive (~$1,500/hour), many people try to combine Kobuk Valley and Gates of the Arctic into one flight loop to save money.",
      "The sand dunes are anomalously warm in summer, often exceeding 85°F inside the Arctic Circle.",
      "There are no designated landing strips; pilots land directly on rivers or the hard-packed sand dunes."
    ],
    redditPosts: [
      { title: "Arctic sand dunes are surreal", sub: "r/WildernessBackpacking", url: "https://www.reddit.com/r/WildernessBackpacking/top/?t=all", quote: "You fly over endless spongy green tundra and suddenly see 100-foot tall Sahara-style sand dunes. Extremely bizarre microclimate." }
    ],
    itinerary: [
      { day: "Day 1-2", plan: "Charter flight drops you directly on the Great Kobuk Sand Dunes. Set up camp, hike the shifting sands, and wait for bush plane pickup the next day." }
    ],
    monthlyData: {
      7: { temp: "68°F / 45°F", reservations: "Charter flights required", reddit: "Warmest month, endless daylight, brutal mosquitoes." },
      8: { temp: "55°F / 40°F", reservations: "Charter flights required", reddit: "Bugs begin to die down. Risk of early snowfall at the end of the month." }
    }
  },
  {
    name: "Black Canyon of the Gunnison", state: "CO", bestMonths: [5, 6, 9, 10], minDays: 1, flightMinutes: 425, days: "1 Day",
    airport: "DEN (4.5h) or MTJ (20m)", flight: "~2h 15m to DEN/MTJ", transport: "Car",
    avoid: [11, 12, 1, 2, 3, 4], popularity: 40, uniqueness: 90, sfoAccessibility: 50,
    seasonalVerdict: { best: "Late Spring and Early Fall for hiking down to the river safely.", avoid: "Winter (Main rim road closed, sheer walls are icy/dangerous)." },
    funFacts: [
      "The canyon is so narrow and deep that some parts of the canyon floor only receive 33 minutes of sunlight a day.",
      "The Painted Wall is the highest sheer cliff in Colorado at 2,250 feet — taller than the Empire State Building.",
      "The Gunnison River drops an average of 96 feet per mile inside the park."
    ],
    links: { nps: "https://www.nps.gov/blca" },
    sunriseSunset: "Summer: 5:45 AM / 8:30 PM",
    stargazing: { isFriendly: true, spots: "Chasm View Nature Trail", description: "Designated Dark Sky Park. Incredible views along the unlit rim." },
    topActivities: ["South Rim Scenic Drive", "Gunnison Point Overlook", "Painted Wall View", "East Portal Road"],
    dosAndDonts: [
      { type: "do", text: "Drive the East Portal Road down to the river to truly grasp the scale of the canyon." },
      { type: "dont", text: "Don't attempt an inner canyon wilderness route unless you are an expert route-finder and rock scrambler. There are no marked trails to the bottom." }
    ],
    travelHacks: [
      "The South Rim is fully paved and has the visitor center. The North Rim is reached via a long dirt road and offers spectacular, terrifyingly sheer drop-offs with no crowds.",
      "Because the canyon is narrow, the best time for photography is late morning or mid-day when the sun actually penetrates the depths.",
      "The inner canyon routes feature deadly poison ivy patches. Wear long pants if venturing down."
    ],
    redditPosts: [
      { title: "North Rim vs South Rim?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "South Rim is for the sweeping views and the classic Painted Wall shot. North Rim is for looking straight down 2,000 feet from an unfenced cliff edge in total silence." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive the South Rim Road. Stop at Gunnison Point, Chasm View, and Painted Wall. Drive the incredibly steep 16% grade East Portal Road down to the river." }
    ],
    monthlyData: {
      5: { temp: "68°F / 40°F", reservations: "None", reddit: "South Rim road usually fully opens. Crisp weather." },
      6: { temp: "80°F / 50°F", reservations: "None", reddit: "Peak season. Very dry and sunny." },
      9: { temp: "75°F / 45°F", reservations: "None", reddit: "Scrub oak colors changing below the rim." }
    }
  },
  {
    name: "Great Sand Dunes", state: "CO", bestMonths: [5, 9, 10], minDays: 1, flightMinutes: 765, days: "1 Day",
    airport: "DEN (4h) or COS (2.5h)", flight: "~2h 15m to DEN + 4h drive", transport: "Car",
    avoid: [11, 12, 1, 2, 6, 7, 8], popularity: 50, uniqueness: 95, sfoAccessibility: 55,
    seasonalVerdict: { best: "Late May for Medano Creek; September/October for cool sand hiking.", avoid: "Summer (150°F sand surface), Winter (High wind/cold)." },
    funFacts: [
      "The park contains the tallest sand dunes in North America, rising up to 750 feet from the floor of the San Luis Valley.",
      "The dunes were formed by wind moving sand from the dried-out ancient Lake Alamosa into a pocket against the Sangre de Cristo Mountains.",
      "Medano Creek experiences 'surge flow,' creating waves in the shallow water during peak runoff."
    ],
    links: { nps: "https://www.nps.gov/grsa" },
    sunriseSunset: "Spring: 6:00 AM / 8:00 PM",
    stargazing: { isFriendly: true, spots: "On the Dunes", description: "Incredible dark skies. Go out onto the dunes on a moonless night." },
    topActivities: ["Sandboarding / Sandsledding", "Hiking High Dune", "Wading in Medano Creek", "Stargazing"],
    dosAndDonts: [
      { type: "do", text: "Rent sandboards BEFORE entering the park. The park visitor center does not rent them." },
      { type: "dont", text: "Don't go onto the sand barefoot or in sandals in summer. The sand surface temperature can reach 150°F and will cause severe burns." }
    ],
    travelHacks: [
      "Late May is the absolute best time to visit because Medano Creek is flowing at its peak, creating a massive beach at the base of the dunes.",
      "If you own a robust 4WD with high clearance, lower your tire pressure and drive the primitive Medano Pass road to escape the crowds.",
      "Hike the dunes at sunrise or sunset. Not only is the sand cool, but the low light creates incredible shadows on the ridges."
    ],
    redditPosts: [
      { title: "Snow sleds do NOT work", sub: "r/coloradohikers", url: "https://www.reddit.com/r/coloradohikers/top/?t=all", quote: "Stop bringing plastic snow saucers. They won't move an inch. You need a specific wooden sandboard coated in wax." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Rent sandboards in Alamosa or Oasis. Arrive early to wade in Medano Creek. Hike up High Dune (much harder than it looks). Sandboard down. Stay for stargazing." }
    ],
    monthlyData: {
      5: { temp: "65°F / 40°F", reservations: "None", reddit: "Peak surge flow for Medano Creek. Highly recommended." },
      9: { temp: "70°F / 42°F", reservations: "None", reddit: "Perfect hiking weather, but the creek is completely dry." },
      10: { temp: "58°F / 32°F", reservations: "None", reddit: "Crisp air, no crowds, occasionally light snow on the mountains." }
    }
  },
  {
    name: "Petrified Forest", state: "AZ", bestMonths: [3, 4, 10, 11], minDays: 1, flightMinutes: 315, days: "1 Day",
    airport: "PHX (3.5h drive)", flight: "~1h 45m to PHX + drive", transport: "Car",
    avoid: [6, 7, 8], popularity: 45, uniqueness: 88, sfoAccessibility: 70,
    seasonalVerdict: { best: "Spring/Fall offer comfortable hiking and blooming desert succulents.", avoid: "Summer (Extreme exposure/heat, frequent monsoon closures)." },
    funFacts: [
      "The 'wood' is completely fossilized into solid quartz and weighs 160 pounds per cubic foot.",
      "It is the only national park that protects a portion of Historic Route 66.",
      "The park was a massive tropical rainforest 225 million years ago during the Late Triassic Period."
    ],
    links: { nps: "https://www.nps.gov/pefo" },
    sunriseSunset: "Spring: 6:00 AM / 6:30 PM",
    stargazing: { isFriendly: false, spots: "Backcountry only", description: "The park effectively closes and locks its gates at sunset. No night access without a backcountry permit." },
    topActivities: ["Crystal Forest hike", "Blue Mesa trail", "Painted Desert Inn", "Agate Bridge"],
    dosAndDonts: [
      { type: "do", text: "Drive the entire 28-mile road from one entrance to the other." },
      { type: "dont", text: "Don't steal the petrified wood. Vehicle searches are random, penalties are severe, and locals swear stolen wood brings a curse." }
    ],
    travelHacks: [
      "The Blue Mesa trail is arguably the best in the park — a paved loop descending into bizarre blue and purple badlands filled with scattered stone logs.",
      "Buy petrified wood at the massive gift shops just outside the park boundaries. That wood is legally collected from private land.",
      "The park is strictly a day-use park with operational hours (e.g., 8am-5pm). Plan your road trip accordingly so you aren't locked out."
    ],
    redditPosts: [
      { title: "Is it worth the stop off I-40?", sub: "r/roadtrip", url: "https://www.reddit.com/r/roadtrip/top/?t=all", quote: "Absolutely. It's incredibly easy to see from the car and the Blue Mesa trail feels like walking on an alien planet." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Enter North gate. View Painted Desert. Stop at Route 66 alignment. Drive south. Hike Blue Mesa, Crystal Forest, and Giant Logs behind the south visitor center." }
    ],
    monthlyData: {
      3: { temp: "62°F / 32°F", reservations: "None", reddit: "Great hiking weather. High winds are common." },
      4: { temp: "72°F / 40°F", reservations: "None", reddit: "Perfect weather. Beautiful blooming desert plants." },
      10: { temp: "75°F / 42°F", reservations: "None", reddit: "Crisp fall air, best visibility for the Painted Desert." }
    }
  },
  {
    name: "White Sands", state: "NM", bestMonths: [3, 4, 10, 11], minDays: 1, flightMinutes: 270, days: "1 Day",
    airport: "ELP (1.5h drive)", flight: "~3h to ELP (1 stop)", transport: "Car",
    avoid: [6, 7, 8], popularity: 60, uniqueness: 98, sfoAccessibility: 65,
    seasonalVerdict: { best: "October - November (Perfect temps, calm winds, beautiful sunsets).", avoid: "Summer (Dangerous heat, blinding reflections, monsoons)." },
    funFacts: [
      "It is the largest gypsum dunefield in the world, covering 275 square miles.",
      "Unlike silica sand, gypsum sand does not absorb heat from the sun — it is always cool to the touch.",
      "The park is surrounded by the White Sands Missile Range and occasionally closes for brief missile tests."
    ],
    links: { nps: "https://www.nps.gov/whsa" },
    sunriseSunset: "Spring: 6:30 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Dunes Drive", description: "Brilliant dark skies contrasting against the glowing white sand." },
    topActivities: ["Sledding the dunes", "Alkali Flat Trail", "Sunset stroll", "Playa Trail"],
    dosAndDonts: [
      { type: "do", text: "Buy a plastic snow saucer and wax from the visitor center. The dunes are perfect for sledding." },
      { type: "dont", text: "Don't hike the backcountry Alkali Flat trail in the middle of summer. Total exposure, blinding reflections, and heat exhaustion kill people here." }
    ],
    travelHacks: [
      "Bring sunglasses. The white sand reflects the sun intensely and will give you a headache fast without eye protection.",
      "Drive to the very end of Dunes Drive where the pavement ends and turns into hard-packed gypsum. It's safe for 2WD sedans and takes you to the pristine, plant-free dunes.",
      "Always check the park website before driving out. Scheduled missile tests briefly close the highway and park."
    ],
    redditPosts: [
      { title: "Navigation is harder than you think", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "The dunes constantly shift, burying footprints in minutes with a breeze. Keep the mountains in sight or use a compass so you don't get turned around." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive to the end of the road. Hike the first 1-2 miles of the Alkali Flat trail (look for the orange trail markers). Sled down the steepest dunes. Stay for sunset to watch the sand turn pink and purple." }
    ],
    monthlyData: {
      3: { temp: "70°F / 38°F", reservations: "None", reddit: "Excellent temperatures, but spring winds can ruin visibility." },
      4: { temp: "78°F / 45°F", reservations: "None", reddit: "Pleasant. The yucca plants begin blooming." },
      10: { temp: "78°F / 45°F", reservations: "None", reddit: "Best time of year. Perfect temperatures, no summer monsoons, calm wind." }
    }
  },
  {
    name: "Carlsbad Caverns", state: "NM", bestMonths: [4, 5, 9, 10], minDays: 1, flightMinutes: 300, days: "1 Day",
    airport: "ELP (2h drive)", flight: "~3h to ELP (1 stop)", transport: "Car",
    avoid: [12, 1, 2], popularity: 65, uniqueness: 95, sfoAccessibility: 60,
    seasonalVerdict: { best: "May - September (Bat flight program), Fall (Mild surface weather).", avoid: "Winter (Icy access roads, no bats)." },
    funFacts: [
      "The 'Big Room' is the largest single cave chamber by volume in North America (almost 4000 feet long).",
      "During summer, hundreds of thousands of Brazilian free-tailed bats erupt from the natural entrance at sunset.",
      "The cave maintains a constant 56°F (13°C) temperature year-round."
    ],
    links: { nps: "https://www.nps.gov/cave" },
    sunriseSunset: "Summer: Bat flight at Dusk",
    stargazing: { isFriendly: false, spots: "Bat Amphitheater", description: "Most stargaze during the bat flight program, but true dark skies require moving away from the visitor center." },
    topActivities: ["Natural Entrance Trail", "Big Room Tour", "Bat Flight Program", "King's Palace guided tour"],
    dosAndDonts: [
      { type: "do", text: "Reserve your timed entry ticket for the cave online well in advance. No ticket, no entry." },
      { type: "dont", text: "Don't just take the elevator down. Walk the 1.25-mile Natural Entrance trail down 750 feet — it's the classic 'Journey to the Center of the Earth' experience." }
    ],
    travelHacks: [
      "Wear closed-toe shoes with grip (the cave paths are steep and wet) and bring a light jacket (constant 56°F).",
      "If you hate hiking, you can take the elevator directly to the Big Room. If you hike the Natural Entrance, take the elevator back UP.",
      "The bat flight program is incredible but runs only from late May through October. No cameras or phones are allowed during the flight."
    ],
    redditPosts: [
      { title: "Photos cannot do this place justice", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "The Big Room is unfathomably large. It feels like walking through the Mines of Moria. Take the natural entrance down, take the elevator up." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Morning booked entry. Hike down the steep Natural Entrance trail. Spend 2 hours walking the massive Big Room loop. Elevator up. Return at dusk for the amphitheater Bat Flight." }
    ],
    monthlyData: {
      5: { temp: "85°F / 55°F (56°F inside)", reservations: "Timed Entry Required", reddit: "Bats returning. Above ground getting warm." },
      9: { temp: "86°F / 60°F (56°F inside)", reservations: "Timed Entry Required", reddit: "Peak bat numbers. Good time to visit." },
      10: { temp: "78°F / 50°F (56°F inside)", reservations: "Timed Entry Required", reddit: "Perfect surface weather, bats migrate south late Oct." }
    }
  },
  {
    name: "Guadalupe Mountains", state: "TX", bestMonths: [10, 11, 3, 4], minDays: 1, flightMinutes: 270, days: "1 Day",
    seasonalVerdict: { best: "October - November (Fall colors in McKittrick Canyon are legendary).", avoid: "Summer (Extreme heat, very little shade on exposed ridges)." },
    airport: "ELP (1.5h drive)", flight: "~3h to ELP (1 stop)", transport: "Car",
    avoid: [6, 7, 8], popularity: 30, uniqueness: 85, sfoAccessibility: 60,
    funFacts: [
      "Guadalupe Peak is the highest point in Texas at 8,751 feet.",
      "The mountains are actually a massive fossilized Permian reef rising from the Chihuahuan Desert.",
      "El Capitan, the iconic limestone cliff here, was historically used as a landmark by stagecoach drivers."
    ],
    links: { nps: "https://www.nps.gov/gumo" },
    sunriseSunset: "Spring: 6:30 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Pine Springs Campground", description: "Extremely remote with very dark skies." },
    topActivities: ["Guadalupe Peak hike", "Devil's Hall trail", "McKittrick Canyon (fall colors)", "El Capitan viewpoint"],
    dosAndDonts: [
      { type: "do", text: "Pair this park with Carlsbad Caverns (they are only 30 minutes apart)." },
      { type: "dont", text: "Don't underestimate the wind. Sustained 50mph winds are common, especially in spring." }
    ],
    travelHacks: [
      "Most trails are completely exposed. Start the strenuous 8.4-mile hike to Guadalupe Peak at sunrise to avoid the relentless Texas heat.",
      "McKittrick Canyon has bigtooth maples that turn bright red and yellow in late October/early November — a true desert oasis.",
      "Cell service is virtually non-existent. Download all maps before leaving El Paso or Carlsbad."
    ],
    redditPosts: [
      { title: "The wind is no joke", sub: "r/TXoutdoors", url: "https://www.reddit.com/r/TXoutdoors/top/?t=all", quote: "Got blown completely flat on my face on the approach to Guadalupe Peak. Check the mountain forecast before hiking." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Strenuous day: Hike the 8.4-mile RT 'Top of Texas' trail to Guadalupe Peak. Alternatively, moderate day: Hike the 3.8-mile Devil's Hall trail to a spectacular narrow limestone canyon." }
    ],
    monthlyData: {
      3: { temp: "68°F / 40°F", reservations: "None", reddit: "Great hiking temps but famously brutal spring wind storms." },
      4: { temp: "76°F / 48°F", reservations: "None", reddit: "Desert blooming, perfect trail temperatures." },
      10: { temp: "75°F / 45°F", reservations: "None", reddit: "Peak visitor season for fall colors in McKittrick Canyon." }
    }
  },
  {
    name: "Theodore Roosevelt", state: "ND", bestMonths: [6, 7, 8, 9], minDays: 2, flightMinutes: 400, days: "2 Days",
    seasonalVerdict: { best: "June - September (Lush green prairie, bison and wild horses active).", avoid: "Winter (Brutal North Dakota cold, many road segments unplowed)." },
    airport: "BIS (2h drive) or DIK (40m)", flight: "~4h to BIS (1 stop)", transport: "Car",
    avoid: [11, 12, 1, 2, 3], popularity: 45, uniqueness: 88, sfoAccessibility: 40,
    funFacts: [
      "This is the only US national park named directly after a single person.",
      "The park protects the badlands where Theodore Roosevelt ranched, which heavily influenced his conservationist legacy.",
      "The park is split into three separate units: South Unit, North Unit, and Elkhorn Ranch."
    ],
    links: { nps: "https://www.nps.gov/thro" },
    sunriseSunset: "Summer: 6:00 AM / 9:30 PM",
    stargazing: { isFriendly: true, spots: "Wind Canyon Trail", description: "Excellent dark skies, especially in the remote North Unit." },
    topActivities: ["South Unit Scenic Loop", "Bison viewing", "Wind Canyon Trail at sunset", "North Unit Scenic Drive"],
    dosAndDonts: [
      { type: "do", text: "Give bison extreme distance. Unlike Yellowstone, they often hang out directly on the uncrowded roads here." },
      { type: "dont", text: "Don't try to visit the Elkhorn Ranch unit unless you have a 4WD vehicle and dry conditions." }
    ],
    travelHacks: [
      "The South Unit (off I-94 at Medora) gets most of the traffic. The North Unit is an hour north but has much more dramatic canyons and river bends.",
      "Feral horses roam the boundaries of the park, a unique sight among US national parks.",
      "The town of Medora is essentially a wild-west theme basecamp. The famous Medora Musical runs every summer night in the outdoor amphitheater."
    ],
    redditPosts: [
      { title: "Much better than Badlands NP", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Hot take: The badlands here are greener, the bison are easier to watch without traffic jams, and the North Unit feels truly wild." }
    ],
    itinerary: [
      { day: "Day 1", plan: "South Unit: Drive the 36-mile scenic loop (expect bison blockades). Hike Wind Canyon at sunset overlooking the Little Missouri River." },
      { day: "Day 2", plan: "North Unit: Drive the 14-mile scenic drive to Oxbow Overlook. Hike the Caprock Coulee loop for rugged backcountry views." }
    ],
    monthlyData: {
      6: { temp: "76°F / 50°F", reservations: "None", reddit: "Incredibly green grass contrasting the grey/red badlands." },
      7: { temp: "84°F / 55°F", reservations: "None", reddit: "Peak summer, can be hot and dry." },
      9: { temp: "72°F / 42°F", reservations: "None", reddit: "Crisp air, cottonwoods turning gold along the river." }
    }
  },
  {
    name: "Badlands", state: "SD", bestMonths: [5, 6, 9, 10], minDays: 1, flightMinutes: 300, days: "1 Day",
    seasonalVerdict: { best: "Late Spring and Fall for vibrant colors and mild hiking weather.", avoid: "Summer (Intense heat, zero shade), Winter (Blowing snow/ice)." },
    airport: "RAP (1h drive)", flight: "~4h to RAP (1 stop)", transport: "Car",
    avoid: [11, 12, 1, 2], popularity: 65, uniqueness: 90, sfoAccessibility: 55,
    funFacts: [
      "Contains one of the world's richest fossil beds; ancient mammals like totally extinct rhinos and saber-toothed cats are commonly found.",
      "The badlands formations erode roughly one inch per year, which is incredibly fast for geologic processes.",
      "The park allows 'open hiking' — you are legally permitted to hike off-trail anywhere in the park."
    ],
    links: { nps: "https://www.nps.gov/badl" },
    sunriseSunset: "Summer: 5:15 AM / 8:45 PM",
    stargazing: { isFriendly: true, spots: "Pinnacles Overlook", description: "Incredible dark skies. Ranger-led telescope programs run on summer nights." },
    topActivities: ["Badlands Loop Road", "Notch Trail", "Pinnacles Overlook (sunset)", "Roberts Prairie Dog Town"],
    dosAndDonts: [
      { type: "do", text: "Hike the Notch Trail — climbing a massive wooden ladder up the canyon wall is thrilling." },
      { type: "dont", text: "Don't attempt off-trail hiking after rain. The formations turn into a slick, cement-like mud locally dubbed 'gumbo'." }
    ],
    travelHacks: [
      "Drive the unpaved Sage Creek Rim Road to see Bighorn Sheep, Bison, and Roberts Prairie Dog Town.",
      "Photography is all about light here. Mid-day the formations look flat and washed out. At sunrise and sunset, they glow with deep reds and purples.",
      "Watch for rattlesnakes if deciding to take advantage of the open-hike policy in the tall grass prairies."
    ],
    redditPosts: [
      { title: "Wall Drug warning", sub: "r/roadtrip", url: "https://www.reddit.com/r/roadtrip/top/?t=all", quote: "You will see 500 billboards for Wall Drug. Stop for the 5-cent coffee, but know it's a giant tourist trap right outside the park." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive Badlands Loop Road from East to West. Hike the Door, Window, and Notch trails area. Drive Sage Creek Rim road for wildlife. Sunset at Pinnacles overlook." }
    ],
    monthlyData: {
      5: { temp: "70°F / 45°F", reservations: "None", reddit: "Great temps. High chance of dramatic prairie thunderstorms." },
      6: { temp: "80°F / 55°F", reservations: "None", reddit: "Perfect weather before the blazing heat of July sets in." },
      9: { temp: "75°F / 48°F", reservations: "None", reddit: "Comfortable hiking weather, clear skies." }
    }
  },
  {
    name: "Wind Cave", state: "SD", bestMonths: [6, 7, 8, 9], minDays: 1, flightMinutes: 300, days: "1 Day",
    seasonalVerdict: { best: "Summer (Cave air is 54°F), Fall (Bison and elk active on surface).", avoid: "Winter (Snow can block access to the natural entrance)." },
    airport: "RAP (1h drive)", flight: "~4h to RAP (1 stop)", transport: "Car/Tour",
    avoid: [11, 12, 1, 2], popularity: 45, uniqueness: 88, sfoAccessibility: 55,
    funFacts: [
      "It is one of the longest and most complex cave systems in the world, with over 150 miles of mapped passages.",
      "The cave features 95% of the world's known 'boxwork' — a rare, fragile honeycomb-like rock formation.",
      "Named for barometric winds at its entrance that 'breathe' in or out depending on surface pressure."
    ],
    links: { nps: "https://www.nps.gov/wica" },
    sunriseSunset: "Summer: 5:15 AM / 8:45 PM",
    stargazing: { isFriendly: false, spots: "Prairie trails", description: "Not a major dark sky destination compared to nearby Badlands." },
    topActivities: ["Cave Tours (Fairgrounds/Natural Entrance)", "Bison viewing on the surface", "Rankin Ridge hike"],
    dosAndDonts: [
      { type: "do", text: "Reserve cave tour tickets online in advance. They sell out rapidly.", },
      { type: "dont", text: "Don't ignore the surface park. It protects one of the last remaining mixed-grass prairies in the US, full of bison and elk." }
    ],
    travelHacks: [
      "Bring a jacket. The cave is a constant 54°F (12°C) regardless of how blazing hot the South Dakota summer is.",
      "The 'Natural Entrance Tour' is the classic option and physically easier than the 'Fairgrounds Tour', but both showcase the famous boxwork.",
      "Pair this park with Mount Rushmore and Custer State Park — they are all right next to each other."
    ],
    redditPosts: [
      { title: "Boxwork vs Stalactites", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Don't expect Carlsbad Caverns. Wind Cave is a dry cave. There are very few stalactites. It's famous for the weird, intricate boxwork geometry on the ceiling." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Check in for your reserved morning cave tour (1.5 hours). Afternoon drive through the surface park on Hwy 87 to spot bison. Hike the 1-mile Rankin Ridge trail for sweeping Black Hills views." }
    ],
    monthlyData: {
      6: { temp: "75°F / 50°F", reservations: "Cave Tour Recommended", reddit: "Lush green prairie, baby bison." },
      7: { temp: "84°F / 58°F", reservations: "Cave Tour Required", reddit: "Peak season. Tours sell out daily." },
      9: { temp: "74°F / 48°F", reservations: "Cave Tour Recommended", reddit: "Excellent surface hiking, elk bugling season begins." }
    }
  },
  {
    name: "Voyageurs", state: "MN", bestMonths: [6, 7, 8, 9], minDays: 2, flightMinutes: 680, days: "2 Days",
    seasonalVerdict: { best: "Summer (Boating/kayaking), Feb (Ice Roads fully operational).", avoid: "May/Nov (Freeze-up/Thaw periods when boats and cars are both stuck)." },
    airport: "MSP (4.5h) or DLH (2.5h)", flight: "~4h 20m to MSP (direct)", transport: "Boat/Car",
    avoid: [11, 12, 1, 2, 3, 4], popularity: 40, uniqueness: 90, sfoAccessibility: 50,
    funFacts: [
      "The park is nearly 40% water. You must have a boat, canoe, or kayak to truly explore it.",
      "Named for the French-Canadian fur traders who paddled these interconnected waterways in the 1700s.",
      "In winter, the lakes freeze solid and become massive ice roads for snowmobiles."
    ],
    links: { nps: "https://www.nps.gov/voya" },
    sunriseSunset: "Summer: 5:15 AM / 9:15 PM",
    stargazing: { isFriendly: true, spots: "Rainy Lake", description: "Designated Dark Sky Park. One of the best places in the lower 48 to see the Northern Lights." },
    topActivities: ["Renting a Houseboat", "NPS Boat Tours to Kettle Falls", "Kayaking", "Stargazing/Aurora tracking"],
    dosAndDonts: [
      { type: "do", text: "Rent a boat or book an NPS guided boat tour. The visitor centers are nice, but the park is on the water." },
      { type: "dont", text: "Don't navigate the big lakes in a small canoe on windy days. The waves get dangerously large." }
    ],
    travelHacks: [
      "Houseboating is the ultimate Voyageurs experience. You can anchor almost anywhere, fish off the back, and sleep under dark skies.",
      "Take the NPS tour to the historic Kettle Falls Hotel. It's only accessible by boat and features a bar floor severely warped from decades of use.",
      "Prepare for serious mosquitoes and ticks in June/July. Treat clothing with Permethrin."
    ],
    redditPosts: [
      { title: "Houseboating tips for beginners?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Use the Navionics app. The lakes are full of submerged rocks. Follow the buoys religiously or you will shear off your prop." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Rent a small motorized boat or join an NPS tour departing from Rainy Lake. Explore the water networks, hike the blind Ash River visitor center trails." },
      { day: "Day 2", plan: "Take the boat tour to Kettle Falls. Have lunch at the historic hotel. Try paddle-boarding or kayaking in a sheltered bay." }
    ],
    monthlyData: {
      6: { temp: "72°F / 50°F", reservations: "NPS Tours", reddit: "Beautiful fishing weather, brutal mosquitoes." },
      8: { temp: "75°F / 55°F", reservations: "NPS Tours", reddit: "Water is warmest, bugs slightly better." },
      9: { temp: "65°F / 45°F", reservations: "NPS Tours", reddit: "Bugs are gone. Fall colors emerge. High chance of Auroras." }
    }
  }
  ,
  {
    name: "Mount Rainier", state: "WA", bestMonths: [7, 8, 9], minDays: 2, flightMinutes: 255, days: "2 Days",
    seasonalVerdict: { best: "August (Wildflower peak at Paradise), September (Clear skies).", avoid: "Winter (Heavy snow/mandatory chains), June (Many trails still buried)." },
    airport: "SEA (2hr drive)", flight: "~2h 15m direct", transport: "Car",
    avoid: [11, 12, 1, 2, 3, 4], popularity: 85, uniqueness: 90, sfoAccessibility: 85,
    funFacts: [
      "Mount Rainier is an active stratovolcano and the most heavily glaciated peak in the contiguous US.",
      "The mountain creates its own weather, often hiding the peak in lenticular clouds.",
      "Paradise is famous for holding the world record for measured snowfall in a single year (93.5 feet)."
    ],
    links: { nps: "https://www.nps.gov/mora" },
    sunriseSunset: "Summer: 5:15 AM / 9:00 PM",
    stargazing: { isFriendly: true, spots: "Sunrise Point", description: "Incredible dark skies at 6,400 ft on clear summer nights." },
    topActivities: ["Skyline Trail Hike", "Burroughs Mountain Trail", "Driving to Sunrise", "Reflection Lakes"],
    dosAndDonts: [
      { type: "do", text: "Secure a timed entry reservation if visiting between 7am and 3pm in summer 2026." },
      { type: "dont", text: "Don't step off the paved trails in the alpine meadows. The wildflowers are extremely fragile." }
    ],
    travelHacks: [
      "The park is massive and divided. Dedicate one day to the Paradise side (south) and one day to the Sunrise side (northeast). Don't try to cram both.",
      "If you fail to get a timed entry permit, entering the park before 7 AM guarantees you get a parking spot at Paradise anyway.",
      "Reflection Lakes is best photographed at dawn before the wind picks up and ruins the mirror effect."
    ],
    redditPosts: [
      { title: "Skyline Trail vs Burroughs Mountain?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Skyline is classic Rainier with meadows and waterfalls. Burroughs gets you uncomfortably close to the actual glacial ice." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Enter via Nisqually. Stop at Narada Falls. Hike the Skyline Trail loop from Paradise visitor center to Panorama Point." },
      { day: "Day 2", plan: "Drive to Sunrise (highest road in the park). Hike the Fremont Lookout trail or up to the Second Burroughs for face-to-face glacier views." }
    ],
    monthlyData: {
      7: { temp: "70°F / 45°F", reservations: "Timed Entry Required", reddit: "Late July is peak wildflower bloom, extremely crowded." },
      8: { temp: "72°F / 46°F", reservations: "Timed Entry Required", reddit: "Warmest month, all high trails crossable without ice axes." },
      9: { temp: "65°F / 42°F", reservations: "None", reddit: "Crowds thin out, crisp air, occasional early snow." }
    }
  },
  {
    name: "Lassen Volcanic", state: "CA", bestMonths: [7, 8, 9], minDays: 2, flightMinutes: 240, days: "2 Days",
    seasonalVerdict: { best: "Late July - August (Main road finally opens, snow vanishes).", avoid: "Winter/Spring (Park road is buried in up to 40 feet of snow)." },
    airport: "RNO (3hr) or SMF (3.5hr)", flight: "Drive from SF (~4h) or fly", transport: "Car",
    avoid: [11, 12, 1, 2, 3, 4, 5], popularity: 40, uniqueness: 88, sfoAccessibility: 80,
    funFacts: [
      "Lassen Volcanic is one of the few places on Earth where you can find all four types of volcanoes: plug dome, shield, cinder cone, and stratovolcano.",
      "Lassen Peak last erupted explosively in 1915.",
      "Bumpass Hell features boiling mud pots and steaming fumaroles without the crowds of Yellowstone."
    ],
    links: { nps: "https://www.nps.gov/lavo" },
    sunriseSunset: "Summer: 5:45 AM / 8:30 PM",
    stargazing: { isFriendly: true, spots: "Bumpass Hell parking lot, Manzanita Lake", description: "High elevation and remoteness from major cities create spectacular dark skies." },
    topActivities: ["Hiking Lassen Peak", "Bumpass Hell Boardwalk", "Kayaking Manzanita Lake"],
    dosAndDonts: [
      { type: "do", text: "Check road status. The main scenic highway often doesn't open fully until mid-July." },
      { type: "dont", text: "Don't step off the boardwalks in Bumpass Hell — the crust varies in thickness and conceals boiling acidic water." }
    ],
    travelHacks: [
      "Photograph Lassen Peak reflecting in Manzanita Lake at sunset for the classic park picture.",
      "The hike up Lassen Peak is fully exposed and essentially a steep sandbox. Start by 7 AM to beat the intense afternoon sun.",
      "Because of the extreme winter snowpacks, if you go in June, expect most of the park to still be buried."
    ],
    redditPosts: [
      { title: "Is Lassen just a smaller Yellowstone?", sub: "r/norcalhiking", url: "https://www.reddit.com/r/norcalhiking/top/?t=all", quote: "It has the hydrothermal features of Yellowstone but combined with alpine lakes and glaciated mountains. Best hidden gem in California." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive the main park road from south to north. Hike Bumpass Hell. Stop at Emerald Lake. Camp or stay near Manzanita Lake." },
      { day: "Day 2", plan: "Early morning 5-mile RT hike to the summit of Lassen Peak (2,000 ft elevation gain). Afternoon kayaking on Manzanita Lake." }
    ],
    monthlyData: {
      7: { temp: "80°F / 45°F", reservations: "None", reddit: "Road finally fully open. Wildflowers blooming." },
      8: { temp: "82°F / 45°F", reservations: "None", reddit: "Peak season. Lakes are warm enough for quick dips." },
      9: { temp: "75°F / 40°F", reservations: "None", reddit: "Perfect weather, crowds disappear." }
    }
  },
  {
    name: "Redwood", state: "CA", bestMonths: [5, 6, 7, 8, 9, 10], minDays: 2, flightMinutes: 330, days: "2 Days",
    seasonalVerdict: { best: "May - June (Rhododendrons bloom), Sept (Fog thins out).", avoid: "Winter (Very high rainfall, muddy trails, potential road closures)." },
    airport: "ACV (45m drive) or SFO (5.5h drive)", flight: "Drive from SFO (~5.5h)", transport: "Car",
    avoid: [12, 1, 2], popularity: 70, uniqueness: 95, sfoAccessibility: 75,
    funFacts: [
      "The park is home to Hyperion, the tallest living tree on Earth at 380 feet.",
      "It is co-managed by the National Park Service and California State Parks.",
      "Endor in Star Wars: Return of the Jedi was filmed here."
    ],
    links: { nps: "https://www.nps.gov/redw" },
    sunriseSunset: "Summer: 6:00 AM / 8:45 PM",
    stargazing: { isFriendly: false, spots: "Beaches", description: "Coastal fog and massive tree canopies block most stargazing opportunities." },
    topActivities: ["Tall Trees Grove", "Fern Canyon Hike", "Newton B. Drury Scenic Parkway", "Elk viewing"],
    dosAndDonts: [
      { type: "do", text: "Get a free online permit well in advance to drive to Tall Trees Grove or Gold Bluffs Beach/Fern Canyon." },
      { type: "dont", text: "Don't depend on cell service. Download offline maps." }
    ],
    travelHacks: [
      "Fern Canyon requires driving through several shallow creek crossings. Sedans usually make it in late summer, but high clearance is heavily recommended.",
      "The Newton B. Drury Scenic Parkway is arguably better than the famous Avenue of the Giants, and is entirely within the park system.",
      "Watch for Roosevelt Elk herds lounging directly in the grassy areas near the Prairie Creek visitor center."
    ],
    redditPosts: [
      { title: "Fern canyon without wet feet?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Just wear water shoes or Tevas. Trying to balance on slippery logs to keep boots dry is how people get hurt. Embrace the water." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive Newton B. Drury Parkway. Hike the Prairie Creek and Foothill trail loop. Look for Elk. Drive to Klamath River overlook for sunset." },
      { day: "Day 2", plan: "Morning permit-access hike to Fern Canyon. Afternoon permit-access hike down into the secretive Tall Trees Grove." }
    ],
    monthlyData: {
      6: { temp: "62°F / 50°F", reservations: "Fern Canyon permit required", reddit: "Often foggy in the morning, burning off at noon." },
      7: { temp: "65°F / 52°F", reservations: "Fern Canyon permit required", reddit: "Peak summer fog (marine layer). The forest looks best in fog." },
      9: { temp: "66°F / 50°F", reservations: "Fern Canyon permit required", reddit: "Best weather of the year. Less fog, warmer afternoons." }
    }
  },
  {
    name: "Pinnacles", state: "CA", bestMonths: [3, 4, 10, 11], minDays: 1, flightMinutes: 120, days: "1 Day",
    seasonalVerdict: { best: "Spring (Green hills, wildflowers, nesting condors).", avoid: "Summer (Over 100°F heat with zero shade, very dangerous hiking)." },
    airport: "SJC (1.5h drive) or SFO (2h drive)", flight: "Drive from SFO (~2hr)", transport: "Car",
    avoid: [6, 7, 8], popularity: 60, uniqueness: 80, sfoAccessibility: 100,
    funFacts: [
      "The park's namesake rock formations are the remnants of an extinct volcano that was carried 195 miles north by the San Andreas Fault.",
      "It is one of the few places in the country where the critically endangered California Condor can be seen in the wild.",
      "There is no road connecting the east and west entrances of the park."
    ],
    links: { nps: "https://www.nps.gov/pinn" },
    sunriseSunset: "Spring: 6:30 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Bear Gulch Reservoir", description: "Far enough from the Bay Area to offer surprisingly good dark skies." },
    topActivities: ["High Peaks Trail", "Bear Gulch Cave", "Balconies Cave", "Condor spotting"],
    dosAndDonts: [
      { type: "do", text: "Bring a headlamp. Both of the main trails pass through talus caves that are pitch black." },
      { type: "dont", text: "Don't visit in July or August. The park regularly hits 110°F and has almost no shade." }
    ],
    travelHacks: [
      "If arriving from the Bay Area, use the East Entrance. It has the main campground, visitor center, and easier access to Bear Gulch.",
      "The 'caves' are actually talus caves (massive boulders wedged in a gorge). Check the NPS website before visiting to ensure they are open, as they close for bat breeding.",
      "Look for California Condors near the High Peaks in the early morning riding the thermals. Their 9-foot wingspan is unmistakable."
    ],
    redditPosts: [
      { title: "West vs East entrance?", sub: "r/hiking", url: "https://www.reddit.com/r/hiking/top/?t=all", quote: "West is great for a quiet day hike to the balconies. East is where everyone goes for Bear Gulch and the High Peaks loop." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Enter East side. Hike Bear Gulch Cave trail up to the Reservoir, then connect to the High Peaks trail to walk amongst the volcanic spires and spot condors." }
    ],
    monthlyData: {
      3: { temp: "65°F / 40°F", reservations: "None", reddit: "Perfect hiking weather. Creeks are flowing in the caves." },
      4: { temp: "72°F / 42°F", reservations: "None", reddit: "Peak wildflower season. Very crowded on weekends." },
      10: { temp: "75°F / 45°F", reservations: "None", reddit: "Great fall temperatures, tarantulas emerging on trails." }
    }
  },
  {
    name: "Kings Canyon", state: "CA", bestMonths: [6, 7, 8, 9], minDays: 2, flightMinutes: 240, days: "2 Days",
    seasonalVerdict: { best: "Summer (Road to Cedar Grove is open), Sept (Golden fall foliage).", avoid: "Winter (Road to the deep canyon is closed by snow)." },
    airport: "FAT (1.5h drive) or SFO (4h drive)", flight: "Drive from SFO (~4hr)", transport: "Car",
    avoid: [11, 12, 1, 2, 3], popularity: 65, uniqueness: 88, sfoAccessibility: 85,
    funFacts: [
      "Kings Canyon is deeper than the Grand Canyon, plunging more than 8,200 feet from peak to river.",
      "The General Grant Tree is officially the Nation's Christmas Tree.",
      "A massive portion of the park is only accessible via extreme backcountry hiking (the John Muir Trail)."
    ],
    links: { nps: "https://www.nps.gov/seki" },
    sunriseSunset: "Summer: 5:45 AM / 8:15 PM",
    stargazing: { isFriendly: true, spots: "Panoramic Point", description: "Excellent high-elevation stargazing away from Central Valley light pollution." },
    topActivities: ["Driving the Kings Canyon Scenic Byway", "General Grant Tree", "Zumwalt Meadow hike", "Roaring River Falls"],
    dosAndDonts: [
      { type: "do", text: "Treat Kings Canyon and Sequoia as one giant park, but allocate dedicated days to each." },
      { type: "dont", text: "Don't expect gas stations in the canyon. Fill up before driving down Hwy 180." }
    ],
    travelHacks: [
      "The scenic drive down into the canyon (Hwy 180 to Roads End) is one of the most spectacular mountain drives in America, but it closes in winter.",
      "Visit the General Grant grove in the morning, then spend the blazing afternoon down in the canyon swimming or relaxing by the Kings River.",
      "Muir Rock at Roads End is a flat, massive boulder extending into the river — perfect for picnicking and jumping in."
    ],
    redditPosts: [
      { title: "Kings Canyon vs Sequoia", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Sequoia is for the massive trees. Kings Canyon is for the massive granite walls and river canyon. Driving down into Cedar Grove is mind-blowing." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Explore Grant Grove. See the General Grant Tree and Panoramic Point. Drive the 30-mile Kings Canyon Scenic Byway down into the gorge." },
      { day: "Day 2", plan: "Hike the flat, incredibly scenic Zumwalt Meadow loop. Walk to Roaring River Falls. Relax at Muir Rock." }
    ],
    monthlyData: {
      6: { temp: "75°F / 45°F (Canyon is 15° hotter)", reservations: "None", reddit: "Waterfalls are roaring, road usually fully opens." },
      7: { temp: "82°F / 50°F (Canyon is 15° hotter)", reservations: "None", reddit: "Peak season. Excellent river swimming." },
      9: { temp: "72°F / 45°F (Canyon is 15° hotter)", reservations: "None", reddit: "Water levels drop, perfect peaceful hiking weather." }
    }
  },
  {
    name: "Sequoia", state: "CA", bestMonths: [6, 7, 8, 9], minDays: 2, flightMinutes: 270, days: "2 Days",
    seasonalVerdict: { best: "July - August (Big Trees are accessible), Sept (Crisp clear air).", avoid: "Winter (Generals Highway often requires tire chains, many trails buried)." },
    airport: "FAT (1.5h) or SFO (4.5h)", flight: "Drive from SFO (~4.5h)", transport: "Car",
    avoid: [11, 12, 1, 2, 3], popularity: 88, uniqueness: 96, sfoAccessibility: 80,
    funFacts: [
      "Home to the General Sherman tree, the largest living single-stem tree on Earth by volume.",
      "Mount Whitney, the highest peak in the contiguous US, is on the park's eastern border.",
      "The park was established in 1890, making it the second oldest US national park after Yellowstone."
    ],
    links: { nps: "https://www.nps.gov/seki" },
    sunriseSunset: "Summer: 5:45 AM / 8:15 PM",
    stargazing: { isFriendly: true, spots: "Wuksachi Lodge area", description: "Incredible views of the Milky Way through the canopy openings." },
    topActivities: ["General Sherman Tree", "Climbing Moro Rock", "Tunnel Log", "Crescent Meadow"],
    dosAndDonts: [
      { type: "do", text: "Take the free park shuttle during summer weekends to avoid nightmare parking situations." },
      { type: "dont", text: "Don't drive a huge RV up the Generals Highway from Three Rivers. The hairpins are terrifying and restricted over 22 feet." }
    ],
    travelHacks: [
      "The hike up Moro Rock (350+ stone steps) gives you an aerial view of the Great Western Divide. Go at sunset.",
      "To escape the massive crowds at General Sherman, hike the Congress Trail which takes you deeper into the giant forest among hundreds of equally impressive, silent giants.",
      "You can drive your car through the fallen Tunnel Log on a weekday. On weekends, it's often shuttle-only access."
    ],
    redditPosts: [
      { title: "Should I enter from the South (Three Rivers) or North?", sub: "r/Yosemite", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "The southern entrance road is incredibly winding and steep. If you get carsick, enter via the north (Kings Canyon side)." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Visit Giant Forest Museum. Hike the Congress Trail starting from General Sherman. Drive through Tunnel Log. Sunset climb up Moro Rock." },
      { day: "Day 2", plan: "Hike around Crescent Meadow (John Muir called it the 'Gem of the Sierra'). Take a guided tour of Crystal Cave (book months ahead)." }
    ],
    monthlyData: {
      6: { temp: "72°F / 45°F", reservations: "None", reddit: "Perfect weather, all roads open." },
      7: { temp: "78°F / 50°F", reservations: "None", reddit: "Very crowded. Use shuttles." },
      9: { temp: "70°F / 42°F", reservations: "None", reddit: "Crowds thin out, crisp mountain air." }
    }
  },
  {
    name: "Channel Islands", state: "CA", bestMonths: [7, 8, 9, 10], minDays: 1, flightMinutes: 210, days: "1 Day",
    seasonalVerdict: { best: "August - October (Warmest water for snorkeling, low wind for boat crossings).", avoid: "Winter (Stormy seas often lead to boat cancellations)." },
    airport: "LAX or SBA (drive to Ventura)", flight: "~1h 10m to LAX/SBA + 1.5h drive", transport: "Ferry required",
    avoid: [12, 1, 2, 3], popularity: 55, uniqueness: 92, sfoAccessibility: 60,
    funFacts: [
      "Often called the 'Galapagos of North America' due to 145 endemic species found nowhere else.",
      "Santa Cruz island is home to the island fox, a tiny fox the size of a house cat.",
      "One of the best places in the world to see blue whales in the summer."
    ],
    links: { nps: "https://www.nps.gov/chis", activities: "https://www.islandpackers.com" },
    sunriseSunset: "Summer: 6:00 AM / 8:00 PM",
    stargazing: { isFriendly: true, spots: "Any island campground", description: "Zero light pollution once the mainland fog clears, but you must be camping." },
    topActivities: ["Kayaking sea caves on Santa Cruz", "Hiking Inspiration Point on Anacapa", "Whale watching on the ferry", "Spotting Island Foxes"],
    dosAndDonts: [
      { type: "do", text: "Book your ferry with Island Packers months in advance. Once boats fill up, you cannot visit the park." },
      { type: "dont", text: "Don't bring single-use plastic bags. They are banned on the islands to protect marine life." }
    ],
    travelHacks: [
      "There is no food, water, or trash cans on the islands. You must pack in everything and pack out all your trash.",
      "Santa Cruz (Scorpion Anchorage) is the best island for a first-timer: you can hike, kayak world-class sea caves, and spot foxes all in a day trip.",
      "Take drama-free motion sickness meds before getting on the ferry. The Santa Barbara channel crossing can be extremely rough."
    ],
    redditPosts: [
      { title: "Which island to choose for a day trip?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Santa Cruz has the best kayaking and island foxes. Anacapa has the iconic Inspiration Point view but no beach access and aggressive seagulls." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Ferry from Ventura to Santa Cruz Island. 3-hour guided sea kayak tour through the Painted Cave. Afternoon hike to Potato Harbor. Return ferry in the evening." }
    ],
    monthlyData: {
      7: { temp: "72°F / 58°F", reservations: "Ferry required", reddit: "Peak blue whale season during the crossing. Often foggy in morning." },
      8: { temp: "75°F / 60°F", reservations: "Ferry required", reddit: "Water is warmest for snorkeling/kayaking." },
      9: { temp: "74°F / 58°F", reservations: "Ferry required", reddit: "Fog lifts, clearest skies, perfect kayaking weather." }
    }
  },
  {
    name: "Capitol Reef", state: "UT", bestMonths: [4, 5, 9, 10], minDays: 2, flightMinutes: 310, days: "2 Days",
    seasonalVerdict: { best: "October (Apple/pear harvest in Fruita), May (Warm but not hot).", avoid: "July - August (Flash flood season, extremely high heat)." },
    airport: "SLC (3.5hr drive)", flight: "~1h 40m direct to SLC", transport: "Car",
    avoid: [12, 1, 2], popularity: 75, uniqueness: 88, sfoAccessibility: 65,
    funFacts: [
      "The park centers around the Waterpocket Fold, a 100-mile long 'wrinkle' in the earth's crust.",
      "It contains historic LDS fruit orchards. When in season, you can pick and eat fruit for free while in the orchard.",
      "Cassidy Arch is named after Butch Cassidy, who supposedly hid out in the park's canyons."
    ],
    links: { nps: "https://www.nps.gov/care" },
    sunriseSunset: "Spring/Fall: 7:00 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Panorama Point", description: "Designated International Dark Sky Park with incredibly dark skies." },
    topActivities: ["Cassidy Arch hike", "Hickman Bridge hike", "Eating pie at the Gifford House", "Scenic Drive to Capitol Gorge"],
    dosAndDonts: [
      { type: "do", text: "Buy a local fruit pie at the historic Gifford Homestead. They sell out by noon." },
      { type: "dont", text: "Don't skip the dirt road into Capitol Gorge at the end of the scenic drive — your sedan can handle it." }
    ],
    travelHacks: [
      "This is the 'sleeper hit' of Utah's Mighty 5. Far fewer crowds than Zion or Arches, but equally incredible scenery.",
      "The hike to Cassidy Arch is brutal but puts you standing directly on top of a massive natural arch (unlike Arches NP where you just look at them).",
      "If you have a 4WD high-clearance vehicle, drive Cathedral Valley in the remote north of the park for the massive Temple of the Sun monoliths."
    ],
    redditPosts: [
      { title: "Capitol Reef was the surprise favorite", sub: "r/hiking", url: "https://www.reddit.com/r/hiking/top/?t=all", quote: "Went to all 5 Utah parks. Capitol Reef felt like a secret. Amazing hike to Cassidy Arch and eating pie under the giant cottonwood trees." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Hike Hickman Bridge in the morning. Stop at Gifford House for pie. Drive the Scenic Drive to the end and hike the Capitol Gorge wash to the Pioneer Register." },
      { day: "Day 2", plan: "Hike the steep, exposed trail to Cassidy Arch. Afternoon drive to Sunset Point and Goosenecks Overlook." }
    ],
    monthlyData: {
      4: { temp: "62°F / 38°F", reservations: "None", reddit: "Perfect hiking weather, fruit trees blooming." },
      5: { temp: "72°F / 45°F", reservations: "None", reddit: "Pleasant. Good time to hike the deep canyons." },
      10: { temp: "65°F / 40°F", reservations: "None", reddit: "Fruit harvest season at the orchards (apples/peaches)." }
    }
  },
  {
    name: "Canyonlands", state: "UT", bestMonths: [4, 5, 9, 10], minDays: 2, flightMinutes: 430, days: "2 Days",
    seasonalVerdict: { best: "April - May (Cool breezes, clear vistas), October (Perfect camping).", avoid: "Summer (Over 100°F with no shade, treacherous hiking on exposed rock)." },
    airport: "SLC (4hr) or Grand Junction (1.5h)", flight: "~1h 40m direct to SLC", transport: "Car",
    avoid: [12, 1, 2], popularity: 80, uniqueness: 94, sfoAccessibility: 65,
    funFacts: [
      "The park is divided into four distinct districts separated by the Colorado and Green rivers. There are no roads connecting the districts.",
      "The Maze district is considered one of the most remote and dangerous areas in the lower 48 states.",
      "Island in the Sky is a giant high mesa resting on sheer sandstone cliffs over 1,000 feet above the surrounding terrain."
    ],
    links: { nps: "https://www.nps.gov/cany" },
    sunriseSunset: "Spring/Fall: 7:00 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Grand View Point", description: "World-class dark skies, easily accessible right near Moab." },
    topActivities: ["Mesa Arch at sunrise", "Grand View Point overlook", "Needles District hiking (Chesler Park)", "White Rim Road (4x4)"],
    dosAndDonts: [
      { type: "do", text: "Wake up in the dark to see sunrise at Mesa Arch. It glows like fire as the sun hits the bottom of it." },
      { type: "dont", text: "Don't assume you can see both Island in the Sky and The Needles in one day. They are 2 hours apart driving." }
    ],
    travelHacks: [
      "Island in the Sky is the 'viewing' district (driving to overlooks). The Needles is the 'hiking' district.",
      "Chesler Park in The Needles is a rugged 11-mile hike but often ranked as one of the best day hikes in the state of Utah.",
      "Dead Horse Point State Park isn't part of Canyonlands, but you drive right past it to enter Island in the Sky. It's 100% worth the extra entrance fee to see."
    ],
    redditPosts: [
      { title: "Chesler Park is the best hike in Utah", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Words don't do justice to climbing through the joints and walking out into the massive grassy graben surrounded by red and white pinnacles." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Island in the Sky: Sunrise at Mesa Arch. Drive to Grand View Point. Short hike to Upheaval Dome. Sunset at nearby Dead Horse Point." },
      { day: "Day 2", plan: "The Needles: Drive 2 hours south. Hike the strenuous 11-mile loop through the Joint Trail and Chesler Park." }
    ],
    monthlyData: {
      4: { temp: "66°F / 40°F", reservations: "None", reddit: "Perfect hiking weather. Very crowded in Moab." },
      5: { temp: "76°F / 48°F", reservations: "None", reddit: "Getting hot quickly down in the canyons." },
      10: { temp: "68°F / 42°F", reservations: "None", reddit: "Crisp air, perfect conditions for the long Needles hikes." }
    }
  },
  {
    name: "Mesa Verde", state: "CO", bestMonths: [5, 6, 9, 10], minDays: 2, flightMinutes: 1035, days: "2 Days",
    seasonalVerdict: { best: "Late May - June (Tours are fully active, before summer heat peak).", avoid: "Winter (Cliff dwellings are closed to tours, many roads are unplowed)." },
    airport: "DEN (7hr drive) or Durango (1hr)", flight: "~2h 15m to DEN + 7h drive", transport: "Car",
    avoid: [11, 12, 1, 2, 3, 4], popularity: 60, uniqueness: 98, sfoAccessibility: 40,
    funFacts: [
      "Mesa Verde protects over 5,000 archaeological sites, including 600 cliff dwellings of the Ancestral Puebloans.",
      "Cliff Palace is the largest cliff dwelling in North America.",
      "The people who built these structures lived here for 700 years before abandoning them suddenly in the 1300s."
    ],
    links: { nps: "https://www.nps.gov/meve" },
    sunriseSunset: "Spring/Fall: 6:45 AM / 7:30 PM",
    stargazing: { isFriendly: true, spots: "Geologic Overlook", description: "Designated Dark Sky Park. Incredible views of the Milky Way over the canyon." },
    topActivities: ["Cliff Palace Tour", "Balcony House Tour", "Mesa Top Loop Drive", "Step House Hike"],
    dosAndDonts: [
      { type: "do", text: "You must book tour tickets 14 days in advance exactly at 8 AM MDT. They sell out in minutes." },
      { type: "dont", text: "Don't book the Balcony House tour if you are afraid of heights or small spaces — it requires climbing massive wooden ladders and crawling through a tunnel." }
    ],
    travelHacks: [
      "The park entrance is at the highway, but driving to the actual cliff dwellings takes 45-60 minutes on a steep, winding mountain road. Factor that heavily into your timing.",
      "Step House is the only cliff dwelling you can visit for free without a guide/ticket.",
      "If you fail to get tickets, the Mesa Top Loop drive still affords spectacular views looking down into Cliff Palace and Square Tower House."
    ],
    redditPosts: [
      { title: "Balcony House ladder fear", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "The 32-foot ladder is completely exposed leaning against a cliff wall. It's exhilarating but entirely serious." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive the 45 mins up the mesa. Drive the Mesa Top Loop to get the historical overview. Self-guided hike through Step House." },
      { day: "Day 2", plan: "Morning booked ranger tour of Cliff Palace. Afternoon booked ranger tour of the adventurous Balcony House." }
    ],
    monthlyData: {
      5: { temp: "68°F / 42°F", reservations: "Tour tickets strictly required", reddit: "Tours resume for the season. Pleasant temps." },
      6: { temp: "80°F / 50°F", reservations: "Tour tickets strictly required", reddit: "Starts getting very hot on the exposed mesa tops." },
      9: { temp: "72°F / 46°F", reservations: "Tour tickets strictly required", reddit: "Perfect weather for climbing the ladders." },
      10: { temp: "60°F / 38°F", reservations: "Tour tickets strictly required", reddit: "Tours begin winding down for winter." }
    }
  }
  ,
  {
    name: "Denali", state: "AK", bestMonths: [6, 7, 8], minDays: 3, flightMinutes: 660, days: "3 Days",
    seasonalVerdict: { best: "Late June - July (24hr daylight, wildlife active), Late August (Fall colors).", avoid: "Winter (Extreme cold, limited bus access, total darkness)." },
    airport: "ANC (4hr drive or train)", flight: "~7h direct to ANC", transport: "NPS Bus Required",
    avoid: [11, 12, 1, 2], popularity: 82, uniqueness: 95, sfoAccessibility: 40,
    funFacts: [
      "Denali is the highest mountain peak in North America (20,310 feet).",
      "Only one road goes into the park, and personal vehicles are restricted past mile 15.",
      "The park spans 6 million acres — larger than the state of New Hampshire."
    ],
    links: { nps: "https://www.nps.gov/dena", lodging: "https://www.reservedenali.com", activities: "https://www.reservedenali.com" },
    sunriseSunset: "Summer: 4:30 AM / 11:30 PM (Midnight Sun)",
    stargazing: { isFriendly: true, spots: "Wonder Lake (late August for Auroras)", description: "In mid-summer, it never gets dark enough for stars. Late August to April offers world-class Northern Lights." },
    topActivities: ["Denali Park Road Bus Tour", "Flightseeing over the peak", "Savage River Hiking", "Sable Pass Grizzly viewing"],
    dosAndDonts: [
      { type: "do", text: "Book your park bus tour 6 months in advance." },
      { type: "dont", text: "Don't expect to see the mountain — it's covered in clouds 70% of the time." }
    ],
    travelHacks: [
      "The camper buses are cheaper than tour buses and allow you to get on and off anywhere along the road.",
      "Mile 15 (Savage River) is the furthest you can drive yourself — great place for dusk wildlife spotting without a bus ticket.",
      "Take a flightseeing tour from Talkeetna (south of the park) rather than driving all the way to the entrance if short on time."
    ],
    redditPosts: [
      { title: "Is the transit bus actually better than the narrated tour?", sub: "r/alaska", url: "https://www.reddit.com/r/alaska/top/?t=all", quote: "Transit bus 100%. The drivers still talk, you can get off to hike, and nobody talks over the wildlife." },
      { title: "The '30% club' is real — Denali is usually hidden", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Spent 4 days there, saw the base twice, never saw the peak. It creates its own weather system." },
      { title: "Wonder Lake campground bugs", sub: "r/camping", url: "https://www.reddit.com/r/camping/top/?t=all", quote: "The mosquitoes at Wonder Lake will carry you away. Head nets are mandatory gear, not optional." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Drive/train from Anchorage or Fairbanks. Hike the Savage Alpine Trail (2 mi RT) at the end of the public road section." },
      { day: "Day 2", plan: "Full-day transit bus into the park interior (Eielson or Kantishna if road repairs allow). Grizzly, caribou, and wolf spotting." },
      { day: "Day 3", plan: "Morning flightseeing tour from the park entrance or Talkeetna (add glacier landing if budget allows). Sled dog demonstration at HQ." }
    ],
    monthlyData: {
      6: { temp: "55°F / 38°F", reservations: "Bus tickets required", reddit: "Bears emerging, expect mud" },
      7: { temp: "62°F / 45°F", reservations: "Bus tickets required, peak season", reddit: "Mosquitoes are brutal, but the park is fully alive" },
      8: { temp: "58°F / 42°F", reservations: "Bus tickets required", reddit: "Bugs die down, fall colors begin late August" }
    }
  },
  {
    name: "Glacier Bay", state: "AK", bestMonths: [6, 7, 8], minDays: 2, flightMinutes: 360, days: "2 Days",
    seasonalVerdict: { best: "July - August (Calmer seas for boat tours, optimal whale watching).", avoid: "Winter (Total park shutdown, dangerous sea conditions, extreme cold)." },
    airport: "JNU (short flight/ferry to Gustavus)", flight: "~5h (1 stop) to JNU", transport: "Boat/Ship",
    avoid: [11, 12, 1, 2], popularity: 60, uniqueness: 90, sfoAccessibility: 30,
    funFacts: [
      "There are no roads to Glacier Bay; you must arrive by air or water.",
      "Just 250 years ago, the entire bay was covered by a single massive glacier.",
      "The park covers 3.3 million acres of rugged mountains, dynamic glaciers, and temperate rainforest."
    ],
    links: { nps: "https://www.nps.gov/glba", lodging: "https://www.visitglacierbay.com" },
    sunriseSunset: "Summer: 4:00 AM / 10:30 PM",
    stargazing: { isFriendly: false, spots: "Bartlett Cove", description: "Too much daylight in peak summer visitor months." },
    topActivities: ["Full-day Glacier Boat Tour", "Sea Kayaking Bartlett Cove", "Whale Watching at Point Adolphus"],
    dosAndDonts: [
      { type: "do", text: "Take the 8-hour NPS-authorized boat tour from Bartlett Cove — it's the only way to see the tidewater glaciers." },
      { type: "dont", text: "Don't assume you can drive there from Anchorage or Juneau." }
    ],
    travelHacks: [
      "Most people see it quickly on a massive cruise ship. To actually experience it, stay at Glacier Bay Lodge in Bartlett Cove and take the small day-boat.",
      "If flying in via Alaska Airlines summer jet service to Gustavus, sit on the right side of the plane for views of the Fairweather Range.",
      "Point Adolphus (just outside the park edge) has some of the highest concentrations of feeding humpback whales on Earth in July."
    ],
    redditPosts: [
      { title: "Cruise ship vs staying at Bartlett Cove", sub: "r/alaska", url: "https://www.reddit.com/r/alaska/top/?t=all", quote: "From a cruise ship you're 200 feet up and see one glacier for an hour. The day boat gets you eye-level with the ice and wildlife." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Arrive Gustavus via plane/ferry. Settle at Glacier Bay Lodge. Afternoon hike on the Forest Trail in Bartlett Cove." },
      { day: "Day 2", plan: "8-hour Glacier Bay day-boat tour to the Margerie and Grand Pacific tidewater glaciers. Humpback whales, puffins, calving ice." }
    ],
    monthlyData: {
      6: { temp: "55°F / 42°F", reservations: "Lodge/boat required", reddit: "Whales returning, dramatic weather" },
      7: { temp: "58°F / 46°F", reservations: "Lodge/boat required", reddit: "Peak wildlife, bring serious rain gear" },
      8: { temp: "57°F / 46°F", reservations: "Lodge/boat required", reddit: "Rainiest month, but glaciers look best when overcast" }
    }
  },
  {
    name: "Katmai", state: "AK", bestMonths: [7, 8, 9], minDays: 2, flightMinutes: 420, days: "2 Days",
    seasonalVerdict: { best: "July (Peak salmon run at Brooks Falls), September (Bear activity continues, fewer people).", avoid: "Winter (Inaccessible, bears hibernating, extreme Arctic conditions)." },
    airport: "ANC (then flight to King Salmon)", flight: "~7h to ANC + local hopper", transport: "Floatplane",
    avoid: [11, 12, 1, 2, 3, 4, 5], popularity: 45, uniqueness: 98, sfoAccessibility: 10,
    funFacts: [
      "Home to the Valley of Ten Thousand Smokes, created by the largest volcanic eruption of the 20th century (Novarupta, 1912).",
      "Over 2,000 brown bears live in the park.",
      "Brooks Falls is the site of Fat Bear Week, famously live-streamed worldwide."
    ],
    links: { nps: "https://www.nps.gov/katm", lodging: "https://www.katmailand.com" },
    sunriseSunset: "Summer: 5:00 AM / 11:00 PM",
    stargazing: { isFriendly: false, spots: "Brooks Camp", description: "Summer bears + midnight sun = bad stargazing." },
    topActivities: ["Brooks Falls Bear Viewing", "Valley of 10,000 Smokes bus tour", "Fly fishing"],
    dosAndDonts: [
      { type: "do", text: "Book Brooks Lodge 18-24 months in advance if you want to stay overnight." },
      { type: "dont", text: "Don't carry any food outside of designated areas. The bears literally rule this park." }
    ],
    travelHacks: [
      "July is peak for salmon jumping the falls (and bears catching them in mid-air). September is peak for absolutely massive 'Fat Bears'.",
      "Day trips from Anchorage/Homer are extremely expensive ($900-1200) and highly weather-dependent. Pack for a potential forced overnight if planes get grounded.",
      "Take the 23-mile bus ride to the Valley of 10,000 Smokes — almost no one does it, but the barren ash landscape is mind-blowing."
    ],
    redditPosts: [
      { title: "Is the day trip to Brooks Falls worth $1,000?", sub: "r/NationalParks", url: "https://www.reddit.com/r/NationalParks/top/?t=all", quote: "Yes. Standing 50 feet away on a platform while 12 grizzlies fish in a waterfall is the greatest wildlife experience in America." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Floatplane to Brooks Camp. Mandatory bear school. Spend the entire afternoon at the Brooks Falls viewing platforms watching fishing bears." },
      { day: "Day 2", plan: "Take the 4WD bus tour to the Valley of Ten Thousand Smokes. Hike down to the Ukak River through the 1912 ash flow." }
    ],
    monthlyData: {
      7: { temp: "60°F / 45°F", reservations: "Flights/Lodge strictly required", reddit: "Peak salmon run at Brooks Falls." },
      8: { temp: "58°F / 45°F", reservations: "Flights/Lodge strictly required", reddit: "Fewer salmon, bears disperse slightly." },
      9: { temp: "52°F / 40°F", reservations: "Flights/Lodge strictly required", reddit: "Fat bears, dying salmon, incredible fall tundra colors." }
    }
  },
  {
    name: "Lake Clark", state: "AK", bestMonths: [6, 7, 8], minDays: 2, flightMinutes: 420, days: "2 Days",
    seasonalVerdict: { best: "August (Bear viewing peak on the coast), July (Clearer skies).", avoid: "Winter (Total isolation, bush planes rarely operational, extreme cold)." },
    airport: "ANC (then floatplane)", flight: "~7h to ANC + floatplane", transport: "Floatplane",
    avoid: [11, 12, 1, 2], popularity: 20, uniqueness: 85, sfoAccessibility: 10,
    funFacts: [
      "Lake Clark preserves the ancestral homelands of the Dena'ina people.",
      "Contains two active volcanoes: Mount Iliamna and Mount Redoubt.",
      "The park has zero roads and zero NPS-maintained trails."
    ],
    links: { nps: "https://www.nps.gov/lacl" },
    sunriseSunset: "Summer: 4:30 AM / 11:00 PM",
    stargazing: { isFriendly: false, spots: "Port Alsworth", description: "Not a stargazing destination due to summer daylight." },
    topActivities: ["Bear viewing at Chinitna Bay", "Kayaking Lake Clark", "Staying at Port Alsworth"],
    dosAndDonts: [
      { type: "do", text: "Hire an outfitter or guide. This is true wilderness tracking." },
      { type: "dont", text: "Don't plan this on a tight schedule. Weather delays flights constantly." }
    ],
    travelHacks: [
      "Chinitna Bay in early summer (May-June) offers world-class brown bear viewing on the mudflats before the salmon run starts at Katmai.",
      "Port Alsworth is the only real 'town' inside the park and the base for all operations. Stay at The Farm Lodge for relative luxury in the deep bush.",
      "Richard Proenneke's cabin at Twin Lakes is iconic (Alone in the Wilderness), but requires a very expensive private floatplane charter to reach."
    ],
    redditPosts: [
      { title: "Lake Clark vs Katmai for bears", sub: "r/alaska", url: "https://www.reddit.com/r/alaska/top/?t=all", quote: "Katmai is for the iconic waterfall shot. Lake Clark (Chinitna) is for seeing bears digging clams on the beach with way fewer tourists." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Bush plane from Anchorage to Port Alsworth. Kayak the turquoise waters of Lake Clark. Hike to Tanalian Falls (the only real trail)." },
      { day: "Day 2", plan: "Flightsee over the active Redoubt and Iliamna volcanoes, or charter to Chinitna Bay for guided bear viewing." }
    ],
    monthlyData: {
      6: { temp: "60°F / 40°F", reservations: "Outfitter required", reddit: "Bears on the coastal sedge meadows." },
      7: { temp: "62°F / 45°F", reservations: "Outfitter required", reddit: "Peak summer, sockeye salmon returning." },
      8: { temp: "60°F / 42°F", reservations: "Outfitter required", reddit: "Bears moving to streams, lots of rain." }
    }
  },
  {
    name: "Wrangell-St. Elias", state: "AK", bestMonths: [6, 7, 8], minDays: 3, flightMinutes: 720, days: "3 Days",
    seasonalVerdict: { best: "July (Best access to backcountry), August (Berries and clear mountain vistas).", avoid: "Winter (Most roads unplowed, extreme sub-zero temperatures, no facilities)." },
    airport: "ANC (5hr drive to McCarthy)", flight: "~7h to ANC", transport: "Car/Bush Plane",
    avoid: [11, 12, 1, 2], popularity: 30, uniqueness: 92, sfoAccessibility: 20,
    funFacts: [
      "It is the largest national park in the US — at 13.2 million acres, it's larger than Yellowstone, Yosemite, and Switzerland combined.",
      "Contains 9 of the 16 highest peaks in the United States.",
      "The Kennecott Copper Mine abandoned in 1938 is one of the best-preserved ghost towns in the country."
    ],
    links: { nps: "https://www.nps.gov/wrst" },
    sunriseSunset: "Summer: 4:00 AM / 11:30 PM",
    stargazing: { isFriendly: true, spots: "McCarthy", description: "Incredible dark skies starting in late August once nights return." },
    topActivities: ["Kennecott Mill Town Tour", "Root Glacier Ice Hiking", "Flightseeing the Bagley Icefield"],
    dosAndDonts: [
      { type: "do", text: "Drive the McCarthy Road very slowly. Carry a full-size spare tire. It's a rugged 60-mile dirt road." },
      { type: "dont", text: "Don't try to explore the abandoned mill buildings without joining an official NPS/concessionaire tour — it's extremely dangerous." }
    ],
    travelHacks: [
      "Instead of driving the brutal McCarthy Road, take a 30-minute bush flight from Chitina via Wrangell Mountain Air. Saves your rental car and offers insane views.",
      "Hire a guide in Kennecott to hike out onto the Root Glacier. Walking on white ice past massive blue moulins (ice caves) is spectacular.",
      "The town of McCarthy (population ~30) is separated from parking by a footbridge. You cannot drive into the town or to the mines."
    ],
    redditPosts: [
      { title: "McCarthy Road tire destruction", sub: "r/alaska", url: "https://www.reddit.com/r/alaska/top/?t=all", quote: "The road is built on an old railroad track. Old spikes still surface and shred tires. Rental companies specifically ban this road." }
    ],
    itinerary: [
      { day: "Day 1", plan: "Navigate the McCarthy Road or fly in from Chitina. Cross the footbridge. Shuttle to Kennecott. Explore the lower ghost town." },
      { day: "Day 2", plan: "Guided ice climbing or crampon hiking on the Root Glacier. Afternoon guided tour inside the 14-story Kennecott Copper Mill building." },
      { day: "Day 3", plan: "Hike the steep Jumbo Mine Trail (3000ft gain) up the mountain for sweeping views of the Kennicott Glacier valley." }
    ],
    monthlyData: {
      6: { temp: "65°F / 40°F", reservations: "McCarthy lodges required", reddit: "Perfect weather in the interior valley." },
      7: { temp: "68°F / 45°F", reservations: "McCarthy lodges required", reddit: "Peak activity, warmest temps." },
      8: { temp: "65°F / 40°F", reservations: "McCarthy lodges required", reddit: "Fall colors start late August, darker skies." }
    }
  },
  {
    name: "Gates of the Arctic", state: "AK", bestMonths: [7, 8], minDays: 5, flightMinutes: 540, days: "7 Days",
    seasonalVerdict: { best: "July (Green tundra, 24hr sun), August (Northern lights begin, fewer bugs).", avoid: "October - May (Life-threatening cold, total darkness, no bush plane support)." },
    airport: "FAI (then bush plane)", flight: "~9h (1 stop) to FAI", transport: "Bush Plane/Foot",
    avoid: [9, 10, 11, 12, 1, 2, 3, 4, 5], popularity: 5, uniqueness: 98, sfoAccessibility: 5,
    funFacts: [
      "It is the northernmost national park in the US, located entirely above the Arctic Circle.",
      "There are no roads, no trails, and no visitor facilities within its boundaries.",
      "It is the least visited national park, receiving roughly 10,000 visitors a year."
    ],
    links: { nps: "https://www.nps.gov/gaar" },
    sunriseSunset: "Summer: Sun never sets (24hr daylight)",
    stargazing: { isFriendly: false, spots: "Anywhere", description: "Continuous daylight in summer makes stargazing impossible." },
    topActivities: ["Backpacking the Arrigetch Peaks", "Floating the Noatak or Kobuk rivers", "Caribou migration spotting"],
    dosAndDonts: [
      { type: "do", text: "Hire an experienced outfitter if you don't have extensive extreme backcountry skills." },
      { type: "dont", text: "Don't rely on GPS alone. Compasses and topo maps are required — GPS devices routinely fail up here." }
    ],
    travelHacks: [
      "Base out of Coldfoot or Bettles. You can technically 'visit' the park for cheap by driving the Dalton Highway and hiking into the boundary just off the road.",
      "The Arrigetch Peaks are the crown jewel of the park — granite spires shooting up from the tundra. Extremely difficult access, requires float plane to circle lake drop-off.",
      "Tussocks (grass clumps on marshy ground) make walking here miserable. Expect to cover 1-2 miles per hour max on foot."
    ],
    redditPosts: [
      { title: "Any advice for backpacking Gates?", sub: "r/WildernessBackpacking", url: "https://www.reddit.com/r/WildernessBackpacking/top/?t=all", quote: "The mosquitoes are biblical. The tussocks will destroy your ankles. It is the most beautiful, unforgiving place on earth." }
    ],
    itinerary: [
      { day: "Days 1-7", plan: "Fly bush plane from Bettles to a gravel bar or lake drop-off. Backpack completely off-trail navigating by map/compass through the Brooks Range, or take a 7-day guided packraft down a designated wild river." }
    ],
    monthlyData: {
      7: { temp: "55°F / 40°F", reservations: "Charter flights required", reddit: "Midnight sun, massive mosquito swarms." },
      8: { temp: "50°F / 35°F", reservations: "Charter flights required", reddit: "Bugs die off, chance of early snow by late August." }
    }
  }
  ,
  {
    name: "Zion",
    seasonalVerdict: { best: "Late Spring and Fall have the best water levels for The Narrows and cool hiking air.", avoid: "Summer (Over 100°F heat, extreme flash flood risk, massive crowds)." },
    minDays: 2,
    flightMinutes: 225,
    state: "UT",
    bestMonths: [3, 4, 5, 9, 10],
    funFacts: [
      "Zion's original name was Mukuntuweap, given by explorer John Wesley Powell.",
      "The Kolob Arch is one of the world's longest freestanding arches at 287 feet.",
      "Zion has over 1,000 species of plants, making it the most floristically diverse park in Utah.",
      "The Narrows hike involves walking directly in the Virgin River for up to 16 miles.",
      "The 1.1-mile Zion-Mt. Carmel Tunnel was completed in 1930 and has 'windows' cut into the rock to provide views."
    ],
    airport: "LAS (2.5hr drive)",
    flight: "~1h 15m direct",
    transport: "Free shuttle (required peak season)",
    days: "3–4",
    avoid: [7, 8],
    popularity: 98,
    uniqueness: 90,
    sfoAccessibility: 90,
    topActivities: ["The Narrows hike", "Angels Landing", "Canyon Overlook Trail", "Emerald Pools"],
    sunriseSunset: "Sunrise: Towers of the Virgin. Sunset: Canyon Junction Bridge.",
    stargazing: { isFriendly: true, spots: "Pa'rus Trail, Kolob Canyons", description: "Good, but canyon walls restrict the view. Best near the museum." },
    itinerary: [
      { day: "Day 1", plan: "Arrive, explore Zion Canyon Visitor Center. Afternoon: Canyon Overlook Trail (1.1 mi, easiest rim views). Sunset walk on the Pa'rus Trail by the river." },
      { day: "Day 2", plan: "Early shuttle (6 AM) for Angels Landing or Scout Lookout (permit required for AL). Afternoon: Emerald Pools trail loop." },
      { day: "Day 3", plan: "Start Narrows hike by 7 AM before crowds and water levels rise. Rent dry suit in Springdale if early season. Afternoon: explore Springdale town." }
    ],
    travelHacks: ["In 2026, the park shuttle is free — arrive before 7 AM to board directly without waiting. By 9 AM lines can be 45+ minutes.", "Rent an e-bike in Springdale ($60-80/day) to entirely bypass the shuttle system and explore at your own pace.", "Book the Angels Landing permit via the day-before lottery on recreation.gov — far less competitive than the seasonal lottery. Apply every night starting one week before your hike.", "The Canyon Overlook Trail (1 mile, easy) is never crowded and gives stunning rim-level views without a permit or shuttle.", "June 7, 2026 onward: vehicle size and weight restrictions apply on Zion-Mt. Carmel Hwy. Check NPS.gov if driving a large RV or truck."],
    dosAndDonts: [
      { type: "do", text: "Apply for the Angels Landing permit months in advance via recreation.gov." },
      { type: "dont", text: "Don't drive into the park mid-day; parking fills up by 8 AM." }
    ],
    redditPosts: [
      { title: "First time at Zion — everything you need to know (mega-guide)", sub: "r/ZionNationalPark", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Get to the Narrows before 7am. After that it becomes a highway of tourists." },
      { title: "Angels Landing permit lottery — how I finally won after 6 tries", sub: "r/NationalParks", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Apply for the day-before lottery every single day. It\'s way less competitive than the seasonal lotteries." },
      { title: "E-bikes in Zion — completely changed my trip", sub: "r/solotravel", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Rented from Springdale. Zero shuttle lines. Best decision of the trip." }
    ],
    links: {
      nps: "https://www.nps.gov/zion/",
      lodging: "https://www.zionlodge.com/",
      dining: "https://www.nps.gov/zion/planyourvisit/dining.htm",
      activities: "https://recreation.gov/search?q=zion",
      roadConditions: "https://www.nps.gov/zion/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      3: { temp: "16°C / 60°F", reservations: "Angels Landing Permit Required. Shuttle running.", reddit: "Water in the Narrows is freezing (around 40°F), dry suit rental is mandatory. Great time for Angels Landing." },
      4: { temp: "21°C / 70°F", reservations: "Angels Landing Permit Required. Shuttle running.", reddit: "Spring break crowds mean 1hr+ waits for the shuttle. E-bike rental is a godsend." },
      5: { temp: "26°C / 79°F", reservations: "Angels Landing Permit Required. Shuttle running.", reddit: "The Virgin River might be closed for the Narrows due to spring snowmelt high flow (over 150 cfs). Have a backup plan." },
      9: { temp: "30°C / 86°F", reservations: "Angels Landing Permit Required. Shuttle running.", reddit: "Still hot, but the Narrows water is perfectly refreshing and flow rates are safe." },
      10: { temp: "25°C / 77°F", reservations: "Angels Landing Permit Required. Shuttle running.", reddit: "Absolute peak conditions. Fall foliage is starting to pop along the river. Busy but worth it." }
    },

    redditPosts: [
      { title: "First time at Zion — everything you need to know (mega-guide)", sub: "r/ZionNationalPark", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Get to the Narrows before 7am. After that it becomes a highway of tourists." },
      { title: "Angels Landing permit lottery — how I finally won after 6 tries", sub: "r/NationalParks", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Apply for the day-before lottery every single day. It\'s way less competitive than the seasonal lotteries." },
      { title: "E-bikes in Zion — completely changed my trip", sub: "r/solotravel", url: "https://www.reddit.com/r/ZionNationalPark/top/?t=all", quote: "Rented from Springdale. Zero shuttle lines. Best decision of the trip." }
    ],
    links: {
      nps: "https://www.nps.gov/zion/",
      lodging: "https://www.zionlodge.com/",
      dining: "https://www.nps.gov/zion/planyourvisit/dining.htm",
      activities: "https://recreation.gov/search?q=zion",
      roadConditions: "https://www.nps.gov/zion/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Grand Canyon",
    seasonalVerdict: { best: "Spring and Fall (Best rim temperatures), Winter (Seclusion and snow-dusted views).", avoid: "Summer (Inner canyon is over 110°F, extreme heatstroke risk, peak crowding)." },
    minDays: 2,
    flightMinutes: 315,
    state: "AZ",
    bestMonths: [3, 4, 5, 9, 10, 11],
    funFacts: [
      "The Grand Canyon is not the deepest canyon in the world, but it is the grandest in scale.",
      "The rock at the bottom of the canyon is roughly 2 billion years old.",
      "You can see the Milky Way clearly due to its status as an International Dark Sky Park.",
      "There are no dinosaur fossils in the canyon; the rock walls are older than dinosaurs.",
      "The canyon creates its own weather system, vastly differing between the rim and the river."
    ],
    airport: "PHX (3.5hr to S. Rim)",
    flight: "~1h 45m direct",
    transport: "Free shuttle system",
    days: "2–4",
    avoid: [7, 8],
    popularity: 100,
    uniqueness: 95,
    sfoAccessibility: 85,
    topActivities: ["South Kaibab Trail", "Bright Angel Trail", "Desert View Watchtower"],
    sunriseSunset: "Sunrise: Yaki Point. Sunset: Hopi Point.",
    stargazing: { isFriendly: true, spots: "Lipan Point, Moran Point", description: "Incredible dark skies. Certified International Dark Sky Park." },
    itinerary: [
      { day: "Day 1", plan: "Rim Trail walk from Mather Point to Hopi Point (3.5 mi). Visit Yavapai Geology Museum. Sunset at Hopi Point — the best in the park." },
      { day: "Day 2", plan: "Hike South Kaibab to Skeleton Point (6 mi RT, strenuous). Start no later than 6 AM. Rest your legs and ride sunset shuttle back to Hopi Point." }
    ],
    travelHacks: ["Pick up entrance passes in advance on recreation.gov to skip the often 30-45 minute gate line, especially on spring weekends.", "The Hermit Road is closed to private vehicles year-round. Use the free red route shuttle — the Hopi Point stop is the best sunset spot.", "The Phantom Ranch canteen sells beer and lemonade. You don't need a cabin reservation to walk down and buy one — ideal for day hikers on Bright Angel.", "Start any rim-to-river hike no later than 6 AM in spring/fall, 4 AM in summer. The heat multiplies every 1,000 feet you descend.", "Bright Angel Campground does not require a lottery — only cabin stays at Phantom Ranch do. Reserve backcountry permits separately."],
    dosAndDonts: [
      { type: "do", text: "Yield to mules on the trails — step off on the uphill side." },
      { type: "dont", text: "Don't underestimate the hike back UP; it takes twice as long as going down." }
    ],
    redditPosts: [
      { title: "STOP hiking to the river and back in one day — a ranger's plea", sub: "r/GrandCanyon", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "Every summer we have to rescue people who attempted this. The canyon kills by deception — going down feels easy." },
      { title: "Phantom Ranch reservation strategy — I figured out the lottery", sub: "r/NationalParks", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "Book exactly 15 months out and set calendar reminders. The wait list is genuinely worth joining too." },
      { title: "North Rim vs South Rim — finally did both, here's the verdict", sub: "r/hiking", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "North Rim is objectively more beautiful and has 10% of the crowds. Go in September before it closes." }
    ],
    links: {
      nps: "https://www.nps.gov/grca/",
      lodging: "https://www.grandcanyonlodges.com/",
      dining: "https://www.grandcanyonlodges.com/dining/",
      activities: "https://recreation.gov/search?q=grand+canyon",
      roadConditions: "https://www.nps.gov/grca/planyourvisit/rdc.htm"
    },
    monthlyData: {
      3: { temp: "Rim: 12°C | River: 24°C", reservations: "Standard Entry Fee. Phantom Ranch lottery.", reddit: "Rim can still get snowstorms in March. Trails might be icy at the top, bring microspikes." },
      4: { temp: "Rim: 16°C | River: 28°C", reservations: "Standard Entry Fee.", reddit: "Perfect hiking weather. The rim is cool, but the river isn't dangerously hot yet." },
      5: { temp: "Rim: 21°C | River: 33°C", reservations: "Standard Entry Fee. North Rim opens May 15.", reddit: "Getting very hot down at the river. Start hikes before dawn." },
      9: { temp: "Rim: 24°C | River: 36°C", reservations: "Standard Entry Fee.", reddit: "Still technically monsoon season early in the month. Spectacular lightning shows from the rim." },
      10: { temp: "Rim: 18°C | River: 28°C", reservations: "Standard Entry Fee. North Rim closes.", reddit: "Possibly the best month. Crowds thin out significantly after mid-October." },
      11: { temp: "Rim: 11°C | River: 19°C", reservations: "Standard Entry Fee. Hermit Road opens to private cars Dec 1.", reddit: "Cold on the rim, pristine hiking weather down below. Very quiet." }
    },

    redditPosts: [
      { title: "STOP hiking to the river and back in one day — a ranger's plea", sub: "r/GrandCanyon", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "Every summer we have to rescue people who attempted this. The canyon kills by deception — going down feels easy." },
      { title: "Phantom Ranch reservation strategy — I figured out the lottery", sub: "r/NationalParks", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "Book exactly 15 months out and set calendar reminders. The wait list is genuinely worth joining too." },
      { title: "North Rim vs South Rim — finally did both, here's the verdict", sub: "r/hiking", url: "https://www.reddit.com/r/GrandCanyon/top/?t=all", quote: "North Rim is objectively more beautiful and has 10% of the crowds. Go in September before it closes." }
    ],
    links: {
      nps: "https://www.nps.gov/grca/",
      lodging: "https://www.grandcanyonlodges.com/",
      dining: "https://www.grandcanyonlodges.com/dining/",
      activities: "https://recreation.gov/search?q=grand+canyon",
      roadConditions: "https://www.nps.gov/grca/planyourvisit/rdc.htm"
    },

  },
  {
    name: "Arches",
    seasonalVerdict: { best: "April - May (Cool morning hiking), October (Stable weather, beautiful sunsets).", avoid: "Summer (Intense heat, zero shade on trails, mandatory entry reservations sell out)." },
    minDays: 2,
    flightMinutes: 310,
    state: "UT",
    bestMonths: [3, 4, 5, 9, 10],
    funFacts: [
      "The park contains the highest density of natural arches in the world (over 2,000).",
      "Delicate Arch wasn't widely known until the 1950s when the NPS highlighted it.",
      "The arches are formed from Entrada Sandstone deposited roughly 300 million years ago.",
      "Many 'arches' eventually collapse; Wall Arch, one of the largest, fell in 2008.",
      "Cryptobiotic soil crust living in the park is vital to the desert ecosystem."
    ],
    airport: "SLC (3.5hr drive)",
    flight: "~1h 40m direct",
    transport: "Drive to trailheads",
    days: "2–3",
    avoid: [6, 7, 8],
    popularity: 92,
    uniqueness: 96,
    sfoAccessibility: 80,
    topActivities: ["Delicate Arch hike", "Devils Garden Trail", "Fiery Furnace (permit needed)"],
    sunriseSunset: "Sunrise: The Windows. Sunset: Delicate Arch.",
    stargazing: { isFriendly: true, spots: "Balanced Rock", description: "Excellent dark skies. Great contrast of stars against red arches." },
    itinerary: [
      { day: "Day 1", plan: "Arrive before 8 AM. Morning: Windows section and Double Arch (easy, 1 mi). Afternoon: Balanced Rock and park road photography. Sunset: Delicate Arch hike (3 mi RT, start 2.5 hrs before sunset)." },
      { day: "Day 2", plan: "Dawn at Devils Garden trailhead. Hike the full primitive loop (7.8 mi) to see Landscape Arch, Double O, Dark Angel. Fiery Furnace if permitted." }
    ],
    travelHacks: ["As of 2026, timed entry reservations are no longer required. Arrive before 8 AM or after 4 PM to avoid peak parking congestion at Delicate Arch trailhead.", "Fiery Furnace still requires a $10 permit per person (self-guided) or a ranger-led tour. Book on recreation.gov — they still sell out.", "Carry 4+ liters of water on any hike April through October. There is zero water on trail beyond the visitor center.", "Drive Devils Garden at dawn — the slickrock glows deep red and the parking lot hasn't filled yet. The Landscape Arch trail is best done before 9 AM.", "Check the park webcam ( nps.gov/arch) before driving in — when the parking areas are full, rangers implement temporary closures at the entrance."],
    dosAndDonts: [{ type: "do", text: "Stay on the trail to protect the fragile biological soil crust." }],
    redditPosts: [
      { title: "Arches 2026 — no more timed entry, what that means for your trip", sub: "r/NationalParks", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Amazing news but also means crowds will be back. Get there before 7am or stay for sunset." },
      { title: "Delicate Arch at sunrise vs sunset — which is actually better?", sub: "r/arches", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Sunset is iconic but 200 people watch it with you. Sunrise feels like you found a secret." },
      { title: "Combining Arches with Canyonlands — perfect 4-day Moab itinerary", sub: "r/roadtrip", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Do Arches day 1 and 3, Canyonlands day 2 (Island in the Sky). Bryce is 2.5hrs away if you want a 5th day." }
    ],
    links: {
      nps: "https://www.nps.gov/arch/",
      lodging: "https://www.tripadvisor.com/Hotels-g60724-Moab_Utah-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60724-Moab_Utah.html",
      activities: "https://recreation.gov/search?q=arches",
      roadConditions: "https://www.nps.gov/arch/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      3: { temp: "16°C / 61°F", reservations: "Standard Entry Fee only. No timed entry in 2026.", reddit: "No timed entry needed yet! Can get windy and chilly, but no summer crowds." },
      4: { temp: "21°C / 70°F", reservations: "Standard Entry Fee only. No timed entry in 2026.", reddit: "Weather is perfect, but Moab is packed. Get your timed entry right when they drop." },
      5: { temp: "26°C / 80°F", reservations: "Standard Entry Fee only. No timed entry in 2026.", reddit: "Starting to get hot mid-day. Do the Devils Garden loop at sunrise." },
      9: { temp: "30°C / 86°F", reservations: "Standard Entry Fee only. No timed entry in 2026.", reddit: "Still very hot. Bring 4 liters of water minimum for long hikes." },
      10: { temp: "23°C / 73°F", reservations: "Standard Entry Fee only. No timed entry in 2026.", reddit: "Incredible conditions. Sunsets align perfectly with Delicate Arch in October." }
    },

    redditPosts: [
      { title: "Arches 2026 — no more timed entry, what that means for your trip", sub: "r/NationalParks", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Amazing news but also means crowds will be back. Get there before 7am or stay for sunset." },
      { title: "Delicate Arch at sunrise vs sunset — which is actually better?", sub: "r/arches", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Sunset is iconic but 200 people watch it with you. Sunrise feels like you found a secret." },
      { title: "Combining Arches with Canyonlands — perfect 4-day Moab itinerary", sub: "r/roadtrip", url: "https://www.reddit.com/r/Arches/top/?t=all", quote: "Do Arches day 1 and 3, Canyonlands day 2 (Island in the Sky). Bryce is 2.5hrs away if you want a 5th day." }
    ],
    links: {
      nps: "https://www.nps.gov/arch/",
      lodging: "https://www.tripadvisor.com/Hotels-g60724-Moab_Utah-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60724-Moab_Utah.html",
      activities: "https://recreation.gov/search?q=arches",
      roadConditions: "https://www.nps.gov/arch/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Yosemite",
    seasonalVerdict: { best: "May - June (Waterfalls at peak), September (Tioga Road open, high country accessible).", avoid: "Summer (Gridlock traffic, very difficult parking, required reservations)." },
    minDays: 3,
    flightMinutes: 240,
    state: "CA",
    bestMonths: [4, 5, 6, 9, 10],
    funFacts: [
      "Yosemite Falls is the highest waterfall in North America at 2,425 feet.",
      "In mid-to-late February, Horsetail Fall famously completely lights up like 'fire' at sunset.",
      "The Ahwahneechee people lived in Yosemite for generations before settlers arrived.",
      "Giant Sequoias in the park can live over 3,000 years.",
      "Yosemite was central to the creation of the national park idea, championed by John Muir."
    ],
    airport: "FAT (1.5hr drive)",
    flight: "Drive only (~3.5h from SF)",
    transport: "Free valley shuttle",
    days: "3–5",
    avoid: [7, 8],
    popularity: 99,
    uniqueness: 98,
    sfoAccessibility: 95,
    topActivities: ["Half Dome", "Glacier Point", "Yosemite Falls", "Mist Trail"],
    sunriseSunset: "Sunrise: Tunnel View. Sunset: Glacier Point.",
    stargazing: { isFriendly: true, spots: "Glacier Point, Tuolumne Meadows", description: "Tuolumne is incredible. Valley has some light pollution." },
    itinerary: [
      { day: "Day 1", plan: "Stop at Tunnel View (free, roadside), then Bridalveil Fall. Valley loop by bicycle. Lower Yosemite Falls trail (1 mi). Evening: Sentinel Bridge for Half Dome reflection at sunset." },
      { day: "Day 2", plan: "Start Mist Trail at 7 AM to Vernal Fall (3 mi RT) or push to Nevada Fall (7 mi RT). Afternoon: Glacier Point road drive, spectacular sunset." },
      { day: "Day 3", plan: "Drive Tioga Road (open June-Oct) to Tuolumne Meadows for high-country hiking. Cathedral Lakes trail (8 mi RT) is the best day hike in the park." }
    ],
    travelHacks: ["No vehicle reservation required in 2026, but parking still fills by 8 AM. Bring a bicycle — the 12-mile valley loop is faster and way more enjoyable than driving.", "Pay the $35 entrance fee online on recreation.gov in advance to skip the gate line. Mobile passes work at all entry points.", "Half Dome permit lottery opens in February for the full season. If you miss it, watch recreation.gov daily — cancelled permits are re-released at 7 AM each morning.", "The Mist Trail is significantly more crowded than the John Muir Trail but shares the same waterfalls. Go up Mist, down John Muir for variety with zero backtracking.", "Tioga Pass opens around Memorial Day weekend depending on snowpack. Check nps.gov/yose before planning a Tuolumne Meadows trip."],
    dosAndDonts: [{ type: "do", text: "Empty your car entirely of food and scented items due to bears." }],
    redditPosts: [
      { title: "Yosemite has no vehicle reservation in 2026 — tips to avoid gridlock", sub: "r/Yosemite", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "Park at the Valley Visitor Center lot before 8am. After that, you\'re stuck on Hwy 120 for hours." },
      { title: "Half Dome cables permit — complete guide from someone who's done it 4x", sub: "r/hiking", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "The cables feel scarier than they are. The pre-cables summit scramble is where people actually slip." },
      { title: "Firefall February — is it worth fighting the crowds?", sub: "r/NationalParks", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "It only works for about 2 weeks in mid-February when conditions align. When it works, it\'s unreal." }
    ],
    links: {
      nps: "https://www.nps.gov/yose/",
      lodging: "https://www.travelyosemite.com/lodging/",
      dining: "https://www.travelyosemite.com/dining/",
      activities: "https://recreation.gov/search?q=yosemite",
      roadConditions: "https://www.nps.gov/yose/planyourvisit/conditions.htm"
    },
    monthlyData: {
      4: { temp: "16°C / 61°F (Valley)", reservations: "Standard Entry Fee ($35). No vehicle reservation required in 2026.", reddit: "Waterfalls are roaring! Tioga and Glacier Point roads are still closed for snow." },
      5: { temp: "22°C / 72°F (Valley)", reservations: "Standard Entry Fee ($35). No vehicle reservation required in 2026.", reddit: "Peak waterfall season. The Mist Trail will soak you completely." },
      6: { temp: "27°C / 81°F (Valley)", reservations: "Standard Entry Fee ($35). No vehicle reservation required in 2026.", reddit: "Tioga Pass finally opens. Access to high country (Tuolumne Meadows) is epic." },
      9: { temp: "28°C / 83°F (Valley)", reservations: "Standard Entry Fee ($35). No vehicle reservation required in 2026.", reddit: "Waterfalls have mostly dried up (Yosemite Falls is completely dry), but weather is great." },
      10: { temp: "22°C / 72°F (Valley)", reservations: "Standard Entry Fee ($35). No vehicle reservation required in 2026.", reddit: "Crisp autumn air. No waterfalls, but beautiful yellow leaves on the valley floor." }
    },

    redditPosts: [
      { title: "Yosemite has no vehicle reservation in 2026 — tips to avoid gridlock", sub: "r/Yosemite", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "Park at the Valley Visitor Center lot before 8am. After that, you\'re stuck on Hwy 120 for hours." },
      { title: "Half Dome cables permit — complete guide from someone who's done it 4x", sub: "r/hiking", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "The cables feel scarier than they are. The pre-cables summit scramble is where people actually slip." },
      { title: "Firefall February — is it worth fighting the crowds?", sub: "r/NationalParks", url: "https://www.reddit.com/r/Yosemite/top/?t=all", quote: "It only works for about 2 weeks in mid-February when conditions align. When it works, it\'s unreal." }
    ],
    links: {
      nps: "https://www.nps.gov/yose/",
      lodging: "https://www.travelyosemite.com/lodging/",
      dining: "https://www.travelyosemite.com/dining/",
      activities: "https://recreation.gov/search?q=yosemite",
      roadConditions: "https://www.nps.gov/yose/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Rocky Mountain",
    seasonalVerdict: { best: "Late July (Alpine flowers), September (Elk bugling and golden aspen).", avoid: "Summer (Extreme peak crowds, mandatory reservations, afternoon lightning risk)." },
    minDays: 2,
    flightMinutes: 225,
    state: "CO",
    bestMonths: [6, 7, 8, 9],
    funFacts: [
      "Trail Ridge Road is the highest continuous paved road in the U.S. (12,183 feet).",
      "The park spans the Continental Divide, meaning water flows to both the Atlantic and Pacific.",
      "Elk rut (mating season) happens every fall, creating huge echoing 'bugles' through the valleys.",
      "There are 156 lakes within the park's boundaries.",
      "The park contains 72 peaks that are over 12,000 feet in elevation."
    ],
    airport: "DEN (1.5hr drive)",
    flight: "~2h 15m direct",
    transport: "Seasonal shuttle + drive",
    days: "3–4",
    avoid: [1, 2, 3, 4],
    popularity: 90,
    uniqueness: 85,
    sfoAccessibility: 85,
    topActivities: ["Trail Ridge Road", "Bear Lake to Emerald Lake", "Spotting Elk/Moose"],
    sunriseSunset: "Sunrise: Sprague Lake. Sunset: Forest Canyon Overlook.",
    stargazing: { isFriendly: true, spots: "Trail Ridge Road, Bear Lake", description: "High elevation makes for very crisp air and great gazing." },
    itinerary: [
      { day: "Day 1", plan: "Bear Lake corridor: Park or shuttle at Bear Lake lot. Hike Nymph → Dream → Emerald Lakes trail (3.6 mi, 600 ft, spectacular). Afternoon: Sprague Lake circuit (0.5 mi, wheelchair accessible)." },
      { day: "Day 2", plan: "Drive Trail Ridge Road (open late May–Oct) to the Alpine Visitor Center (12,183 ft). Wildlife: Haystack Mountain area for elk and pika. Evening: Moraine Park for elk at dusk." }
    ],
    travelHacks: ["In 2026, timed entry is required May 22–Oct 12 from 9 AM–2 PM ($2/vehicle). You can enter freely before 9 AM or after 2 PM — both are actually great times to be in the park.", "Bear Lake Road requires its own separate timed entry permit (5 AM–6 PM). Book it the same day as your regular permit or early morning entry becomes your best bet.", "Reserve permits on recreation.gov starting May 1 for May/June dates. Set a 7:59 AM alarm — they go live at 8 AM and sell out in minutes.", "For elk rut (mid-Sep to mid-Oct), drive Moraine Park Road before sunrise and stay in your car. Bulls are extremely aggressive during rut season.", "Trail Ridge Road summit closes in bad weather — check nps.gov/romo before driving up. The Alpine Visitor Center makes a good turnaround point if the summit is socked in."],
    dosAndDonts: [{ type: "do", text: "Be off exposed peaks and ridges before noon to avoid deadly summer lightning." }],
    redditPosts: [
      { title: "Timed Entry 2026 complete breakdown — all dates, times, and how to book", sub: "r/RockyMountainNP", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "Bear Lake Road permit is separate and harder to get than the regular timed entry. Book both." },
      { title: "Elk rut in September — Moraine Park is absolutely incredible", sub: "r/NationalParks", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "The bugling at dawn echoing through the valley is one of those moments that stays with you forever." },
      { title: "Trail Ridge Road — everything you should stop at (from someone who drove it 6 times)", sub: "r/roadtrip", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "Medicine Bow curve, Forest Canyon Overlook, and the Alpine Visitor Center. Don\'t skip any of them." }
    ],
    links: {
      nps: "https://www.nps.gov/romo/",
      lodging: "https://www.tripadvisor.com/Hotels-g33598-Estes_Park_Colorado-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g33598-Estes_Park_Colorado.html",
      activities: "https://recreation.gov/search?q=rocky+mountain+national+park",
      roadConditions: "https://www.nps.gov/romo/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      6: { temp: "20°C / 68°F", reservations: "Timed Entry Permit required 9am–2pm ($2/vehicle) from May 22. Bear Lake Road needs separate permit 5am–6pm.", reddit: "Trail Ridge Road opens late May or early June. Expect snow patches on high trails." },
      7: { temp: "24°C / 75°F", reservations: "Timed Entry Permit required 9am–2pm ($2/vehicle) from May 22. Bear Lake Road needs separate permit 5am–6pm.", reddit: "Wildflowers are exploding in the alpine tundra. Watch out for brutal afternoon thunderstorms." },
      8: { temp: "23°C / 74°F", reservations: "Timed Entry Permit required 9am–2pm ($2/vehicle) from May 22. Bear Lake Road needs separate permit 5am–6pm.", reddit: "Peak season. Extremely crowded at Bear Lake. Get on the first 6am shuttle." },
      9: { temp: "19°C / 67°F", reservations: "Timed Entry Permit required 9am–2pm ($2/vehicle) from May 22. Bear Lake Road needs separate permit 5am–6pm.", reddit: "Elk Rut season! The sounds the elk make in Moraine Park are unreal. Fall colors bloom late Sep." }
    },

    redditPosts: [
      { title: "Timed Entry 2026 complete breakdown — all dates, times, and how to book", sub: "r/RockyMountainNP", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "Bear Lake Road permit is separate and harder to get than the regular timed entry. Book both." },
      { title: "Elk rut in September — Moraine Park is absolutely incredible", sub: "r/NationalParks", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "The bugling at dawn echoing through the valley is one of those moments that stays with you forever." },
      { title: "Trail Ridge Road — everything you should stop at (from someone who drove it 6 times)", sub: "r/roadtrip", url: "https://www.reddit.com/r/RockyMountainNP/top/?t=all", quote: "Medicine Bow curve, Forest Canyon Overlook, and the Alpine Visitor Center. Don\'t skip any of them." }
    ],
    links: {
      nps: "https://www.nps.gov/romo/",
      lodging: "https://www.tripadvisor.com/Hotels-g33598-Estes_Park_Colorado-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g33598-Estes_Park_Colorado.html",
      activities: "https://recreation.gov/search?q=rocky+mountain+national+park",
      roadConditions: "https://www.nps.gov/romo/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Olympic",
    seasonalVerdict: { best: "July - August (Dry season, high country access), September (Fewer crowds, still clear).", avoid: "Winter (Extremely wet, many roads like Hurricane Ridge have limited access)." },
    minDays: 2,
    flightMinutes: 285,
    state: "WA",
    bestMonths: [6, 7, 8, 9],
    funFacts: [
      "The park contains three distinct ecosystems: alpine, temperate rainforest, and rugged coastline.",
      "The Hoh Rainforest gets 140 inches of rain a year, making it one of the wettest places in the US.",
      "It is home to the largest unmanaged herd of Roosevelt elk in the world.",
      "Mount Olympus has blue glacier ice descending directly into the rainforest valleys.",
      "Ruby Beach has massive sea stacks and driftwood logs the size of school buses."
    ],
    airport: "SEA (2.5hr drive)",
    flight: "~2h 15m direct",
    transport: "Drive (ecosystems spread out)",
    days: "3–5",
    avoid: [11, 12, 1, 2],
    popularity: 88,
    uniqueness: 97,
    sfoAccessibility: 85,
    topActivities: ["Hoh Rain Forest", "Hurricane Ridge", "Rialto Beach", "Lake Crescent"],
    sunriseSunset: "Sunrise: Hurricane Ridge. Sunset: Ruby Beach.",
    stargazing: { isFriendly: true, spots: "Hurricane Ridge", description: "Excellent at Hurricane Ridge. Coasts can be foggy." },
    itinerary: [
      { day: "Day 1", plan: "Hurricane Ridge: Visitor Center, then Hurricane Hill trail (3.2 mi RT) or wildflower meadow walk. Afternoon: Lake Crescent — Marymere Falls trail (1.8 mi) and a lakeside swim." },
      { day: "Day 2", plan: "Hoh Rain Forest: Hall of Mosses trail (0.8 mi) then Hoh River Trail (go as far as time allows — moss and Roosevelt elk). Afternoon: Ruby Beach for sea stacks at golden hour." }
    ],
    travelHacks: ["The park has no central hub — plan your route by ecosystem. Rainforest (Hoh), Alpine (Hurricane Ridge), and Coast (Rialto/Ruby) are each 2+ hours apart.", "Hurricane Ridge Road is open Fridays through Sundays year-round, plus daily in summer. Check nps.gov/olym before driving up — it closes for snow/ice with no warning.", "Check tide tables before visiting the coast. Hole-in-the-Wall at Rialto Beach is cut off at high tide, and Second and Third Beach have tide-dependent sea stacks.", "The Hoh Rain Forest day-use parking fills by 10 AM in summer. Get there before 8:30 AM or be prepared for a 2-hour parking queue on the access road.", "Sol Duc Hot Springs is a hidden Olympic gem that most visitors skip. The nearby Sol Duc Falls trail (1.6 mi) is one of the park's best easy hikes."],
    dosAndDonts: [{ type: "do", text: "Bring rain gear even in August. It's a rainforest." }],
    redditPosts: [
      { title: "Olympic is the most underrated park in the US — fight me", sub: "r/NationalParks", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "Three completely different ecosystems in one park. Rainforest to alpine to rugged coastline. Nothing else like it." },
      { title: "Hoh Rainforest — what to actually expect (and why everyone is speechless)", sub: "r/hiking", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "The Hall of Mosses trail is 0.8 miles and takes 45 minutes. You just stand there taking it in." },
      { title: "Hurricane Ridge vs Hoh vs coast — how to split your Olympic days", sub: "r/PacificNorthwest", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "Day 1: Hurricane Ridge at dawn. Day 2: Hoh. Day 3: Ruby Beach and Rialto. Perfect trip." }
    ],
    links: {
      nps: "https://www.nps.gov/olym/",
      lodging: "https://www.olympicnationalparks.com/lodging/",
      dining: "https://www.olympicnationalparks.com/dining/",
      activities: "https://recreation.gov/search?q=olympic+national+park",
      roadConditions: "https://www.nps.gov/olym/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      6: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Lush and incredibly green. Hurricane Ridge trails might still be muddy with snow patches." },
      7: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Best weather window opens up. Fog on the coast burns off by afternoon." },
      8: { temp: "22°C / 72°F", reservations: "Standard Entry Fee.", reddit: "Peak season, very dry. The Hoh Rainforest 2-hour parking queue is awful—arrive by 8 AM." },
      9: { temp: "19°C / 66°F", reservations: "Standard Entry Fee.", reddit: "Shoulder season is lovely. Less traffic on Highway 101, rain begins to return." }
    },

    redditPosts: [
      { title: "Olympic is the most underrated park in the US — fight me", sub: "r/NationalParks", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "Three completely different ecosystems in one park. Rainforest to alpine to rugged coastline. Nothing else like it." },
      { title: "Hoh Rainforest — what to actually expect (and why everyone is speechless)", sub: "r/hiking", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "The Hall of Mosses trail is 0.8 miles and takes 45 minutes. You just stand there taking it in." },
      { title: "Hurricane Ridge vs Hoh vs coast — how to split your Olympic days", sub: "r/PacificNorthwest", url: "https://www.reddit.com/r/OlympicNationalPark/top/?t=all", quote: "Day 1: Hurricane Ridge at dawn. Day 2: Hoh. Day 3: Ruby Beach and Rialto. Perfect trip." }
    ],
    links: {
      nps: "https://www.nps.gov/olym/",
      lodging: "https://www.olympicnationalparks.com/lodging/",
      dining: "https://www.olympicnationalparks.com/dining/",
      activities: "https://recreation.gov/search?q=olympic+national+park",
      roadConditions: "https://www.nps.gov/olym/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Yellowstone",
    seasonalVerdict: { best: "May - June (Wildlife babies), September (Elk rut, vibrant colors, thinned crowds).", avoid: "Summer (Massive traffic jams, boardwalks are packed to capacity)." },
    minDays: 3,
    flightMinutes: 230,
    state: "WY",
    bestMonths: [5, 6, 9, 10],
    funFacts: [
      "Yellowstone was established in 1872 as the world's first national park.",
      "It sits on top of a dormant supervolcano.",
      "The park contains more than half of all the geysers on Earth.",
      "Grand Prismatic Spring gets its bright rainbow colors from thermophilic bacteria.",
      "Yellowstone is larger than the states of Delaware and Rhode Island combined."
    ],
    airport: "BZN (1.5hr drive)",
    flight: "~2h 20m + shuttle",
    transport: "Drive (vast park)",
    days: "4–6",
    avoid: [7, 8],
    popularity: 100,
    uniqueness: 100,
    sfoAccessibility: 85,
    topActivities: ["Old Faithful & Geyser Basins", "Grand Prismatic Spring", "Lamar Valley (wildlife)"],
    sunriseSunset: "Sunrise: Lamar Valley. Sunset: Great Fountain Geyser.",
    stargazing: { isFriendly: true, spots: "Mount Washburn", description: "Pristine dark skies. Geysers under moonlight are surreal." },
    itinerary: [
      { day: "Day 1", plan: "Lower Loop: Old Faithful eruption (check GeyserTimes app), Grand Prismatic Spring boardwalk. Afternoon: Midway Geyser Basin and Fountain Paint Pots. Sunset near Firehole Lake Drive." },
      { day: "Day 2", plan: "Lamar Valley from 5-8 AM for wolf and bison spotting. Grand Canyon of the Yellowstone and Artist Point. Hayden Valley wildlife drive at dusk for bison herds." },
      { day: "Day 3", plan: "Mammoth Hot Springs terraces (morning). Norris Geyser Basin (the hottest and most active). Grand Geyser eruption if GeyserTimes predicts it (erupts ~every 8-12 hours)." }
    ],
    travelHacks: ["Download the GeyserTimes app (free, works offline) and check eruption predictions for major geysers. Grand Geyser erupts every 8-12 hours — you can time your arrival.", "Enter from the South (Flagg Ranch) or East gates to avoid the notoriously jammed West and North entrances, especially in summer.", "Wildlife jams can stall traffic for hours — always carry binoculars, snacks, and patience. The worst jams are on Lamar Valley Road at dawn.", "Book lodges inside the park 12-13 months in advance. All Yellowstone lodges open reservations on the same date — set a calendar reminder.", "The boardwalk trails at Grand Prismatic and Midway Geyser Basin get the best aerial perspective from the Fairy Falls trailhead overlook, not the boardwalk itself (1.2 mi hike)."],
    dosAndDonts: [{ type: "dont", text: "DO NOT approach the bison. They are incredibly fast and dangerous." }],
    redditPosts: [
      { title: "Yellowstone in May — everything blooms, baby bison everywhere, zero crowds", sub: "r/Yellowstone", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "Called them \'red dogs\' because of the orange fur. We saw hundreds in one morning drive." },
      { title: "GeyserTimes app changed my Yellowstone trip completely", sub: "r/NationalParks", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "Got Grand Geyser\'s eruption time and showed up 5 minutes early. It went off like clockwork. Use this app." },
      { title: "The bison at Yellowstone are genuinely terrifying — a reminder", sub: "r/wildlifephotography", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "I watched a tourist get tossed 15 feet. From the road-side. Stay in your car or 25 yards away. Always." }
    ],
    links: {
      nps: "https://www.nps.gov/yell/",
      lodging: "https://www.yellowstonenationalparklodges.com/lodging/",
      dining: "https://www.yellowstonenationalparklodges.com/dining/",
      activities: "https://recreation.gov/search?q=yellowstone",
      roadConditions: "https://www.nps.gov/yell/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      5: { temp: "12°C / 54°F", reservations: "Standard Entry Fee.", reddit: "Roads just opened! Expect snowstorms. Tons of baby bison ('red dogs') are being born." },
      6: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Everything is open. Lush and green. Bring bear spray for backcountry trails." },
      9: { temp: "16°C / 61°F", reservations: "Standard Entry Fee.", reddit: "Elk rut begins! Hearing them bugle at dawn in Mammoth is amazing. Crowds drop off dramatically." },
      10: { temp: "10°C / 50°F", reservations: "Standard Entry Fee. Facilities begin closing.", reddit: "A huge gamble with weather, but if you hit a warm week, you have the park to yourself." }
    },

    redditPosts: [
      { title: "Yellowstone in May — everything blooms, baby bison everywhere, zero crowds", sub: "r/Yellowstone", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "Called them \'red dogs\' because of the orange fur. We saw hundreds in one morning drive." },
      { title: "GeyserTimes app changed my Yellowstone trip completely", sub: "r/NationalParks", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "Got Grand Geyser\'s eruption time and showed up 5 minutes early. It went off like clockwork. Use this app." },
      { title: "The bison at Yellowstone are genuinely terrifying — a reminder", sub: "r/wildlifephotography", url: "https://www.reddit.com/r/Yellowstone/top/?t=all", quote: "I watched a tourist get tossed 15 feet. From the road-side. Stay in your car or 25 yards away. Always." }
    ],
    links: {
      nps: "https://www.nps.gov/yell/",
      lodging: "https://www.yellowstonenationalparklodges.com/lodging/",
      dining: "https://www.yellowstonenationalparklodges.com/dining/",
      activities: "https://recreation.gov/search?q=yellowstone",
      roadConditions: "https://www.nps.gov/yell/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Glacier",
    seasonalVerdict: { best: "July - August (Going-to-the-Sun Road is fully open), September (Fall colors, no bugs).", avoid: "Winter (Total road closures, extreme snow, most facilities shutdown)." },
    minDays: 3,
    flightMinutes: 330,
    state: "MT",
    bestMonths: [7, 8, 9],
    funFacts: [
      "Glacier and Canada's Waterton Lakes National Park form the world's first International Peace Park.",
      "In 1850, there were 150 active glaciers here; today, there are fewer than 25.",
      "Going-to-the-Sun Road is an engineering marvel and took 11 years to build.",
      "Grizzly bears outnumber black bears in this park.",
      "The lakes are impossibly stunning azure blue due to 'glacial flour' suspended in the water."
    ],
    airport: "BZN (3hr drive)",
    flight: "~2h 30m direct",
    transport: "Free seasonal shuttle",
    days: "4–6",
    avoid: [1, 2, 3, 4, 5],
    popularity: 96,
    uniqueness: 98,
    sfoAccessibility: 75,
    topActivities: ["Going-to-the-Sun Road", "Highline Trail", "Grinnell Glacier", "Hidden Lake"],
    sunriseSunset: "Sunrise: Wild Goose Island. Sunset: Logan Pass.",
    stargazing: { isFriendly: true, spots: "Logan Pass", description: "Certified Dark Sky Park." },
    itinerary: [
      { day: "Day 1", plan: "Book early express shuttle to Logan Pass. Hike the Highline Trail (11.8 mi one-way to The Loop — take shuttle back) or Hidden Lake Overlook (2.7 mi RT). Mountain goats frequent the Pass area." },
      { day: "Day 2", plan: "Many Glacier: Hike to Grinnell Glacier (10.6 mi RT, 1,600 ft) or Iceberg Lake (9.6 mi RT). Both are spectacular. Many Glacier area has the most active grizzly bear habitat." },
      { day: "Day 3", plan: "Drive North Fork or Two Medicine area (far fewer crowds). Pray Lake and Lower Two Medicine Lake are stunning and often empty. Sunset at Wild Goose Island overlook." }
    ],
    travelHacks: ["In 2026, no vehicle reservation is needed. However, a ticketed shuttle is now required to access the Going-to-the-Sun Road corridor. Purchase shuttle tickets in advance at recreation.gov.", "Logan Pass parking has a 3-hour limit starting July 1, 2026. Take the early express shuttle instead — it gets you there before crowds with no parking stress.", "Enter before 6 AM to access the park before shuttle ticketing begins, which gives you access to Logan Pass trailheads without needing a shuttle ticket.", "Bear spray is mandatory — not optional — in Glacier. Grizzlies outnumber black bears. Buy at any park store ($45) or many Whitefish/Kalispell retailers.", "Many Glacier area (east side) has shorter shuttle queues and fewer crowds than the west side. Grinnell Glacier and Iceberg Lake trails start here."],
    dosAndDonts: [{ type: "do", text: "Always hike with bear spray in an accessible holster, not buried in your pack." }],
    redditPosts: [
      { title: "Highline Trail — the most beautiful hike in America, and it's not close", sub: "r/hiking", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "You\'re literally walking along a cliff face with the entire park below you. Goats posing for photos. Perfect." },
      { title: "Glacier 2026 — no more vehicle reservations, new shuttle explained", sub: "r/GlacierNationalPark", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "Take the early express shuttle to Logan Pass. Way less stressful than the old reservation system." },
      { title: "Golden larch season at Glacier — the most stunning week of the year", sub: "r/NationalParks", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "Late September, the western larch trees turn bright gold against the snow-dusted peaks. No photo does it justice." }
    ],
    links: {
      nps: "https://www.nps.gov/glac/",
      lodging: "https://www.glaciernationalparklodges.com/lodging/",
      dining: "https://www.glaciernationalparklodges.com/dining/",
      activities: "https://recreation.gov/search?q=glacier+national+park",
      roadConditions: "https://www.nps.gov/glac/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      7: { temp: "23°C / 73°F", reservations: "No vehicle reservation in 2026. Ticketed shuttle system for Going-to-the-Sun Road. Park entry fee required.", reddit: "Going-To-The-Sun road usually fully opens the first week of July. Wildflowers bloom late July." },
      8: { temp: "24°C / 75°F", reservations: "No vehicle reservation in 2026. Ticketed shuttles for GTSR. Park entry fee required.", reddit: "Peak summer. Very crowded. Smoke from localized wildfires can sometimes obscure the mountains." },
      9: { temp: "18°C / 64°F", reservations: "No vehicle reservation in 2026. Logan Pass has 3-hr parking limit (from July 1). Park entry fee required.", reddit: "Vehicle reservations end mid-September! Fall colors on the western larch trees turn bright gold." }
    },

    redditPosts: [
      { title: "Highline Trail — the most beautiful hike in America, and it's not close", sub: "r/hiking", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "You\'re literally walking along a cliff face with the entire park below you. Goats posing for photos. Perfect." },
      { title: "Glacier 2026 — no more vehicle reservations, new shuttle explained", sub: "r/GlacierNationalPark", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "Take the early express shuttle to Logan Pass. Way less stressful than the old reservation system." },
      { title: "Golden larch season at Glacier — the most stunning week of the year", sub: "r/NationalParks", url: "https://www.reddit.com/r/GlacierNationalPark/top/?t=all", quote: "Late September, the western larch trees turn bright gold against the snow-dusted peaks. No photo does it justice." }
    ],
    links: {
      nps: "https://www.nps.gov/glac/",
      lodging: "https://www.glaciernationalparklodges.com/lodging/",
      dining: "https://www.glaciernationalparklodges.com/dining/",
      activities: "https://recreation.gov/search?q=glacier+national+park",
      roadConditions: "https://www.nps.gov/glac/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Death Valley",
    seasonalVerdict: { best: "November - March (Pleasant hiking weather, clear desert skies).", avoid: "Summer (Life-threatening heat exceeding 120°F, extreme hiking danger)." },
    minDays: 2,
    flightMinutes: 195,
    state: "CA",
    bestMonths: [10, 11, 12, 1, 2, 3],
    funFacts: [
      "Badwater Basin is the lowest point in North America at 282 feet below sea level.",
      "It holds the world record for highest reliably recorded air temperature: 134°F (56.7°C).",
      "Sailing stones at the Racetrack Playa mysteriously move across the desert floor leaving trails.",
      "Despite the name, there are over 1,000 species of plants and 51 species of mammals here.",
      "It's the largest national park in the lower 48 states."
    ],
    airport: "LAS (2hr drive)",
    flight: "~1h 15m direct",
    transport: "Drive only (vast)",
    days: "2–3",
    avoid: [6, 7, 8, 9],
    popularity: 82,
    uniqueness: 97,
    sfoAccessibility: 90,
    topActivities: ["Badwater Basin", "Zabriskie Point", "Mesquite Flat Sand Dunes", "Artists Drive"],
    sunriseSunset: "Sunrise: Zabriskie Point. Sunset: Mesquite Flat Sand Dunes.",
    stargazing: { isFriendly: true, spots: "Harmony Borax Works", description: "Gold Tier Dark Sky Park. Immense, unobstructed horizons." },
    itinerary: [
      { day: "Day 1", plan: "Sunrise at Zabriskie Point (5-min walk). Drive Artists Drive (9-mile one-way scenic loop, best in afternoon). Badwater Basin salt flat walk (15 min, free). Sunset at Mesquite Flat Sand Dunes." },
      { day: "Day 2", plan: "Mosaic Canyon slot canyon hike (2.2 mi RT, free, Stovepipe Wells area). Ubehebe Crater rim walk (0.5 mi). If adventurous: 4WD to Racetrack Playa sailing stones (2 hrs each way)." }
    ],
    travelHacks: ["Drive Artists Drive in the late afternoon (3-5 PM). The low-angle sun hits the painted hills from the west, turning them every shade of red, purple, and green.", "For the Racetrack Playa and Ubehebe Crater, fill your gas tank at Panamint Springs — it's the last gas station before a 2-3 hour drive on washboard dirt road.", "Mesquite Flat Sand Dunes are best shot at sunrise or sunset. The light rakes across the ripple patterns. Arrive 30 minutes before sunrise for footprint-free sand.", "Badwater Basin is accessible by car and requires only a short walk. Do it at night in winter — laying on the salt flat under stars with no light pollution is extraordinary.", "Mosaic Canyon (near Stovepipe Wells) is rarely visited but has smooth marble narrows you can slot-canyon scramble for free without any permits."],
    dosAndDonts: [{ type: "dont", text: "DO NOT hike after 10 AM between May and September. People literally die from heat stroke." }],
    redditPosts: [
      { title: "Death Valley in November — the park of my dreams", sub: "r/NationalParks", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Drove Artists Drive at 4pm and the painted hills were glowing every shade of red and purple. Unreal park." },
      { title: "The Sailing Stones of Racetrack Playa — 4-hour drive but completely worth it", sub: "r/geology", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Standing next to a multi-ton rock that has mysteriously been moving for decades made my brain short-circuit." },
      { title: "Zabriskie Point at sunrise is free, legal, and absolutely magnificent", sub: "r/solotravel", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Rolled in at 4:30am, had the badlands completely to myself for 45 minutes. One of the best mornings of my life." }
    ],
    links: {
      nps: "https://www.nps.gov/deva/",
      lodging: "https://www.oasisatdeathvalley.com/",
      dining: "https://www.oasisatdeathvalley.com/dining/",
      activities: "https://recreation.gov/search?q=death+valley",
      roadConditions: "https://www.nps.gov/deva/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      10: { temp: "33°C / 91°F", reservations: "Standard Entry Fee.", reddit: "Cooling down just enough to be tolerable. Start hikes early." },
      11: { temp: "25°C / 77°F", reservations: "Standard Entry Fee.", reddit: "Perfect weather. You can hike throughout the middle of the day." },
      12: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Clear skies and very low sun angles make for great photography. Can get chilly at night." },
      1: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Deep winter off-season. Some of the clearest air of the year to see 100 miles across the valley." },
      2: { temp: "22°C / 72°F", reservations: "Standard Entry Fee.", reddit: "Desert flowers begin to bloom on the basin floor if it rained in January." },
      3: { temp: "27°C / 81°F", reservations: "Standard Entry Fee.", reddit: "Peak spring conditions before the brutal heat rolls in. Excellent for backcountry camping." }
    },

    redditPosts: [
      { title: "Death Valley in November — the park of my dreams", sub: "r/NationalParks", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Drove Artists Drive at 4pm and the painted hills were glowing every shade of red and purple. Unreal park." },
      { title: "The Sailing Stones of Racetrack Playa — 4-hour drive but completely worth it", sub: "r/geology", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Standing next to a multi-ton rock that has mysteriously been moving for decades made my brain short-circuit." },
      { title: "Zabriskie Point at sunrise is free, legal, and absolutely magnificent", sub: "r/solotravel", url: "https://www.reddit.com/r/DeathValley/top/?t=all", quote: "Rolled in at 4:30am, had the badlands completely to myself for 45 minutes. One of the best mornings of my life." }
    ],
    links: {
      nps: "https://www.nps.gov/deva/",
      lodging: "https://www.oasisatdeathvalley.com/",
      dining: "https://www.oasisatdeathvalley.com/dining/",
      activities: "https://recreation.gov/search?q=death+valley",
      roadConditions: "https://www.nps.gov/deva/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Acadia",
    seasonalVerdict: { best: "September - October (Peak fall foliage, zero humidity, active wildlife).", avoid: "Summer (Maximum crowding, difficulty parking at Cadillac Mountain)." },
    minDays: 2,
    flightMinutes: 570,
    state: "ME",
    bestMonths: [6, 7, 8, 9, 10],
    funFacts: [
      "Cadillac Mountain is often the first place in the U.S. to see the sunrise from Oct to Mar.",
      "Much of the park’s road infrastructure, specifically the gorgeous Carriage Roads, was financed by John D. Rockefeller Jr.",
      "The park was originally established as Lafayette National Park in 1919.",
      "Thunder Hole sounds like actual thunder when waves crash into the small cave at high tide.",
      "Sommes Sound is the only fjard (like a fjord, but smaller) on the U.S. East Coast."
    ],
    airport: "BOS (4.5hr drive)",
    flight: "~5h (1 stop)",
    transport: "Free Island Explorer shuttle",
    days: "3–4",
    avoid: [1, 2, 3],
    popularity: 91,
    uniqueness: 85,
    sfoAccessibility: 65,
    topActivities: ["Cadillac Mtn Sunrise", "Beehive Trail", "Jordan Pond House (popovers)"],
    sunriseSunset: "Sunrise: Cadillac Mountain. Sunset: Bass Harbor Head Lighthouse.",
    stargazing: { isFriendly: true, spots: "Sand Beach", description: "Good, notably hosts the Acadia Night Sky Festival in September." },
    itinerary: [
      { day: "Day 1", plan: "Pre-dawn drive up Cadillac Mountain (reservation required). Watch sunrise over the Atlantic. Breakfast in Bar Harbor. Hike the Beehive Trail (1.6 mi, iron-rung scramble) for an exhilarating morning." },
      { day: "Day 2", plan: "Bike the 45-mile carriage road network. Jordan Pond House: lunch and popovers (make a reservation). Afternoon: Bass Harbor Head Lighthouse at golden hour for the money shot." }
    ],
    travelHacks: ["Cadillac Mountain Summit Road requires a vehicle reservation ($6 + entry fee) May 20 – Oct 25, 2026, sunrise to sunset. Book on recreation.gov. 70% of spots release 2 days before — check at 10 AM ET.", "Use the free Island Explorer bus from Bar Harbor to reach Jordan Pond, Eagle Lake, and Sieur de Monts. Parking at Jordan Pond fills by 9 AM.", "Beehive and Precipice Trails are closed mid-spring through July/August for peregrine falcon nesting. Check nps.gov/acad for exact closure dates before planning.", "Acadia's carriage road system (45 miles) is perfect for cycling. Rent bikes from Bar Harbor Bicycle Shop and access directly from town via the Village Connector path.", "Bass Harbor Head Lighthouse is technically in the park but on private property. Park in the small lot and visit the south-facing rocks below for the classic framed-by-spruce-trees shot at sunset."],
    dosAndDonts: [{ type: "do", text: "Reserve Cadillac Summit Road permits for sunrise 90 days in advance." }],
    redditPosts: [
      { title: "Cadillac Mountain sunrise — can it possibly live up to the hype?", sub: "r/Acadia", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "Yes. Yes it can. Watching the first light hit the Atlantic from up there is something I will never forget." },
      { title: "Jordan Pond House popovers — worth the wait?", sub: "r/foodtravel", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "Hot popovers with butter and strawberry jam while overlooking a perfect glacier lake. Obviously yes." },
      { title: "Beehive Trail — Acadia's secret iron-rung adventure", sub: "r/hiking", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "It\'s a technical scramble with iron rungs bolted to near-vertical rock walls. Not for those with a fear of heights, but incredibly fun." }
    ],
    links: {
      nps: "https://www.nps.gov/acad/",
      lodging: "https://www.tripadvisor.com/Hotels-g40732-Bar_Harbor_Maine-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g40732-Bar_Harbor_Maine.html",
      activities: "https://recreation.gov/search?q=acadia",
      roadConditions: "https://www.nps.gov/acad/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      6: { temp: "20°C / 68°F", reservations: "Cadillac Summit Sunrise Permit Required.", reddit: "Black fly season ends mid-June. Great weather, not too crowded yet." },
      7: { temp: "24°C / 75°F", reservations: "Cadillac Summit Permit Required.", reddit: "Peak vacation time. Be prepared for massive traffic around Bar Harbor." },
      8: { temp: "24°C / 75°F", reservations: "Cadillac Summit Permit Required.", reddit: "Warmest ocean water temps, though still freezing at Sand Beach. Very busy." },
      9: { temp: "20°C / 68°F", reservations: "Cadillac Summit Permit Required.", reddit: "Crowds thin out a bit. Acadia Night Sky festival happens. Excellent hiking." },
      10: { temp: "14°C / 57°F", reservations: "Cadillac Summit Permit Required till late Oct.", reddit: "Foliage peeping season! Mid-October peak color is a madhouse but visually stunning." }
    },

    redditPosts: [
      { title: "Cadillac Mountain sunrise — can it possibly live up to the hype?", sub: "r/Acadia", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "Yes. Yes it can. Watching the first light hit the Atlantic from up there is something I will never forget." },
      { title: "Jordan Pond House popovers — worth the wait?", sub: "r/foodtravel", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "Hot popovers with butter and strawberry jam while overlooking a perfect glacier lake. Obviously yes." },
      { title: "Beehive Trail — Acadia's secret iron-rung adventure", sub: "r/hiking", url: "https://www.reddit.com/r/Acadia/top/?t=all", quote: "It\'s a technical scramble with iron rungs bolted to near-vertical rock walls. Not for those with a fear of heights, but incredibly fun." }
    ],
    links: {
      nps: "https://www.nps.gov/acad/",
      lodging: "https://www.tripadvisor.com/Hotels-g40732-Bar_Harbor_Maine-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g40732-Bar_Harbor_Maine.html",
      activities: "https://recreation.gov/search?q=acadia",
      roadConditions: "https://www.nps.gov/acad/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Joshua Tree",
    seasonalVerdict: { best: "Spring (Wildflower blooms) and Fall (Perfect climbing temps) are the most comfortable.", avoid: "Summer (Dangerous heat, extremely dry, direct sun exposure with limited shade)." },
    minDays: 2,
    flightMinutes: 130,
    state: "CA",
    bestMonths: [10, 11, 2, 3, 4, 5],
    funFacts: [
      "Joshua Trees aren't actually trees; they are succulents (yucca).",
      "U2's iconic 1987 album 'The Joshua Tree' made the plant globally famous, though the album cover photo was actually taken near Death Valley.",
      "The park straddles two distinct deserts: the Mojave and the Colorado.",
      "The massive boulders are monzogranite pushed up by magma millions of years ago.",
      "It is one of the premier rock-climbing spots in the world with over 8,000 routes."
    ],
    airport: "ONT (1hr drive)",
    flight: "~1h 10m direct",
    transport: "Drive only",
    days: "2–3",
    avoid: [7, 8],
    popularity: 89,
    uniqueness: 88,
    sfoAccessibility: 90,
    topActivities: ["Hidden Valley", "Arch Rock", "Keys View", "Rock Climbing"],
    sunriseSunset: "Sunrise: Cholla Cactus Garden. Sunset: Keys View.",
    stargazing: { isFriendly: true, spots: "Pinto Basin", description: "Very good, sheltered from Palm Springs light. Great foregrounds." },
    itinerary: [
      { day: "Day 1", plan: "Hidden Valley loop trail (1 mi) — scramble boulders. Skull Rock nature trail (1.7 mi). Keys View (drive-up, panoramic views of the entire valley and Salton Sea). Camp at Ryan or Jumbo Rocks for stargazing." },
      { day: "Day 2", plan: "Cholla Cactus Garden (0.25 mi, backlit by morning sun) at dawn. Arch Rock trail (1.5 mi). Keys Ranch tour if offered (historical, ranger-led, book online). Single-pitch rock climbing from Hidden Valley Campground." }
    ],
    travelHacks: ["The park has no water sources. Every trailhead has a sign stating the water deficit — carry a minimum of 1 liter per mile in spring, 2 liters per mile in summer.", "The West entrance has the longest queues. Enter from the North (29 Palms) or South (Cottonwood) entrances for quick access to the park interior.", "Cell service is extremely limited. Download offline Google Maps and the NPS Joshua Tree app before arriving. Many trailheads are marked incorrectly on regular GPS.", "Check the NPS wildflower hotline (760-367-5522) in February-March. After winter rains, desert wildflower blooms can cover entire sections of the park.", "Rock climbing permits are not required for most routes. Visit the Mountain Project app or Nomad Ventures (in-park) for route beta."],
    dosAndDonts: [{ type: "dont", text: "Don't depend on GPS. Pre-download Google Maps." }],
    redditPosts: [
      { title: "Joshua Tree for stargazing — best spots and what gear to bring", sub: "r/astrophotography", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "Skull Rock area is perfect. The Joshua trees silhouetted against the Milky Way are iconic." },
      { title: "Rock climbing in Joshua Tree — a beginner's guide to 8,000 routes", sub: "r/climbing", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "Ouroboros and Intersection Rock are great starting areas. Rent at Nomad Ventures in the park." },
      { title: "March wildflower bloom at JTree — when to go and what to expect", sub: "r/NationalParks", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "2023 bloom was the best in 20 years after high rainfall. Check the desert wildflower hotline before you go." }
    ],
    links: {
      nps: "https://www.nps.gov/jotr/",
      lodging: "https://www.tripadvisor.com/Hotels-g32382-Twentynine_Palms_California-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g32382-Twentynine_Palms_California.html",
      activities: "https://recreation.gov/search?q=joshua+tree",
      roadConditions: "https://www.nps.gov/jotr/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      10: { temp: "28°C / 82°F", reservations: "Standard Entry Fee.", reddit: "Cooling down nicely. Climbing season officially kicks off." },
      11: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Perfect hiking weather. Bring a puffy jacket for the cold nights." },
      2: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Chill days, freezing nights. Excellent bouldering temps." },
      3: { temp: "22°C / 72°F", reservations: "Standard Entry Fee.", reddit: "Wildflowers and Joshua Trees are blooming! This is the absolute peak season." },
      4: { temp: "26°C / 79°F", reservations: "Standard Entry Fee.", reddit: "Still very nice, but getting hot in the sun by 1pm." },
      5: { temp: "31°C / 88°F", reservations: "Standard Entry Fee.", reddit: "Last decent weather before summer. Limit hikes to early mornings." }
    },

    redditPosts: [
      { title: "Joshua Tree for stargazing — best spots and what gear to bring", sub: "r/astrophotography", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "Skull Rock area is perfect. The Joshua trees silhouetted against the Milky Way are iconic." },
      { title: "Rock climbing in Joshua Tree — a beginner's guide to 8,000 routes", sub: "r/climbing", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "Ouroboros and Intersection Rock are great starting areas. Rent at Nomad Ventures in the park." },
      { title: "March wildflower bloom at JTree — when to go and what to expect", sub: "r/NationalParks", url: "https://www.reddit.com/r/JoshuaTree/top/?t=all", quote: "2023 bloom was the best in 20 years after high rainfall. Check the desert wildflower hotline before you go." }
    ],
    links: {
      nps: "https://www.nps.gov/jotr/",
      lodging: "https://www.tripadvisor.com/Hotels-g32382-Twentynine_Palms_California-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g32382-Twentynine_Palms_California.html",
      activities: "https://recreation.gov/search?q=joshua+tree",
      roadConditions: "https://www.nps.gov/jotr/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Grand Teton",
    seasonalVerdict: { best: "September (Clear mountain views, fewer crowds, active wildlife), July (Wildflowers).", avoid: "Winter (Extremely heavy snow, most internal roads like Teton Park Road are closed)." },
    minDays: 2,
    flightMinutes: 410,
    state: "WY",
    bestMonths: [6, 7, 8, 9],
    funFacts: [
      "The park is named after the Grand Teton, the tallest mountain in the Teton Range at 13,775 feet.",
      "The Teton fault, which created the staggering mountains, is highly active but overdue for a major quake.",
      "Unlike most mountain ranges, there are no foothills. The Tetons rise sheerly out of the flat valley floor.",
      "Mormon Row features some of the most photographed historic barns in the world.",
      "John D. Rockefeller Jr. secretly bought much of the land and donated it to the federal government to expand the park."
    ],
    airport: "SLC (4.5hr drive)*",
    flight: "~2h 20m (1 stop)",
    transport: "Drive + seasonal shuttles",
    days: "3–5",
    avoid: [11],
    popularity: 94,
    uniqueness: 96,
    sfoAccessibility: 75,
    topActivities: ["Jenny Lake Boat/Hike", "Delta Lake Hike", "Mormon Row", "Wildlife Safari"],
    sunriseSunset: "Sunrise: Schwabacher Landing. Sunset: Signal Mountain.",
    stargazing: { isFriendly: true, spots: "Antelope Flats, String Lake", description: "Spectacular dark skies with the jagged peaks silencing the horizon." },
    itinerary: [
      { day: "Day 1", plan: "Pre-dawn at Schwabacher Landing for Teton reflection and moose. Boat shuttle across Jenny Lake → Hidden Falls and Inspiration Point (4 mi RT). Afternoon: Mormon Row barns at golden hour." },
      { day: "Day 2", plan: "Delta Lake trail (8.9 mi RT, 2,900 ft) — start at 5:30 AM to beat thunderstorms and reach the glacier before afternoon clouds obscure the view. Reward: a milky blue alpine lake below the Grand Teton." }
    ],
    travelHacks: ["Moose-Wilson Road (between Teton Village and Moose) is closed to RVs and trailers and is the single best road in the park for wildlife. Drive it slowly at dawn and dusk.", "Buy bear spray at Costco in Jackson ($30-35) before arriving — park stores charge $50+. It's required for Cascade Canyon and backcountry trails.", "The Jenny Lake Boathouse shuttle boat saves 2 miles of flat trail each way — worth the $18 roundtrip to go straight to Hidden Falls and Inspiration Point.", "Schwabacher Landing is free, unmarked, and requires a short dirt road drive south of Moose. Dawn light on the Teton reflection in the beaver ponds is one of the best sunrise shots in the NPS.", "Delta Lake (9 mi roundtrip, 2,900 ft gain) requires an early 5 AM start — the boulder field section takes longer than expected, and afternoon thunderstorms are common."],
    dosAndDonts: [{ type: "do", text: "Drive Moose-Wilson Road early morning or late evening to guarantee moose sightings." }],
    redditPosts: [
      { title: "Schwabacher Landing at sunrise — the single best spot in all of Grand Teton", sub: "r/GrandTeton", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "The beaver ponds perfectly reflect the Teton Range. The moose walk right by you. Go." },
      { title: "Delta Lake hike — the most rewarding brutal 9-mile struggle", sub: "r/hiking", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "You\'ll question all your life choices on the boulder field. Then you see that milky blue lake and it all makes sense." },
      { title: "Grand Teton + Yellowstone combo trip — the ultimate 7-day plan", sub: "r/roadtrip", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "Days 1-3: Teton, Days 4-7: Yellowstone. Stay in Jackson. Easiest advice I ever followed." }
    ],
    links: {
      nps: "https://www.nps.gov/grte/",
      lodging: "https://www.gtlc.com/lodging",
      dining: "https://www.gtlc.com/dining",
      activities: "https://recreation.gov/search?q=grand+teton",
      roadConditions: "https://www.nps.gov/grte/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      6: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Mosquitoes are brutal around the lakes. Rivers are high from snowmelt." },
      7: { temp: "26°C / 78°F", reservations: "Standard Entry Fee.", reddit: "Peak summer. Very busy, but nowhere near as congested as Yellowstone next door." },
      8: { temp: "26°C / 79°F", reservations: "Standard Entry Fee.", reddit: "Days are hot, nights are cool. Best time to swim in the freezing alpine lakes." },
      9: { temp: "20°C / 68°F", reservations: "Standard Entry Fee.", reddit: "Aspen trees turn gold mid-to-late September. Absolutely gorgeous and cool." }
    },

    redditPosts: [
      { title: "Schwabacher Landing at sunrise — the single best spot in all of Grand Teton", sub: "r/GrandTeton", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "The beaver ponds perfectly reflect the Teton Range. The moose walk right by you. Go." },
      { title: "Delta Lake hike — the most rewarding brutal 9-mile struggle", sub: "r/hiking", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "You\'ll question all your life choices on the boulder field. Then you see that milky blue lake and it all makes sense." },
      { title: "Grand Teton + Yellowstone combo trip — the ultimate 7-day plan", sub: "r/roadtrip", url: "https://www.reddit.com/r/GrandTeton/top/?t=all", quote: "Days 1-3: Teton, Days 4-7: Yellowstone. Stay in Jackson. Easiest advice I ever followed." }
    ],
    links: {
      nps: "https://www.nps.gov/grte/",
      lodging: "https://www.gtlc.com/lodging",
      dining: "https://www.gtlc.com/dining",
      activities: "https://recreation.gov/search?q=grand+teton",
      roadConditions: "https://www.nps.gov/grte/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Great Smoky Mountains",
    seasonalVerdict: { best: "October (Fall colors peak), May (Synchronous fireflies and spring wildflowers).", avoid: "Summer (Extreme humidity, bumper-to-bumper traffic, maximum peak crowds)." },
    minDays: 2,
    flightMinutes: 300,
    state: "TN / NC",
    bestMonths: [4, 5, 6, 9, 10],
    funFacts: [
      "It is the most visited national park in the United States, seeing over 13 million people a year.",
      "The 'smoke' is actually fog resulting from volatile organic compounds released by the massive forest.",
      "Synchronous fireflies put on a globally rare light show here every June.",
      "There are more than 1,500 bears in the park, averaging two bears per square mile.",
      "It is the 'Salamander Capital of the World', home to 30 distinct species."
    ],
    airport: "TYS (1hr drive)",
    flight: "~4h (1 stop)",
    transport: "Drive only",
    days: "3–4",
    avoid: [7, 8],
    popularity: 95,
    uniqueness: 75,
    sfoAccessibility: 50,
    topActivities: ["Cades Cove loop", "Clingmans Dome", "Laurel Falls"],
    sunriseSunset: "Sunrise: Oconaluftee Valley. Sunset: Clingmans Dome.",
    stargazing: { isFriendly: false, spots: "Clingmans Dome", description: "Often cloudy/hazy, but Clingmans Dome offers highest elevation if clear." },
    itinerary: [
      { day: "Day 1", plan: "Cades Cove wildlife loop (11 mi by car or bike on Wednesdays/Saturdays). Best wildlife at dawn — black bear, deer, wild turkey. Hike Abrams Falls (5 mi RT) mid-morning." },
      { day: "Day 2", plan: "Drive up to Clingmans Dome (highest point at 6,643 ft). Half-mile paved ramp to the observation tower — 360° view of the entire park. Alum Cave Trail (4.4 mi RT) for dramatic overhangs and rock formations." }
    ],
    travelHacks: ["The park is free to enter but a parking tag ($5/day, $15/week) is required at major trailheads. Buy it in advance on recreation.gov or risk an expensive ticket.", "Cades Cove Loop Road is closed to cars until 10 AM on Wednesdays (late May–late September) and all day Saturdays — bike or walk the full 11-mile loop in peace.", "Synch firefly lottery (r/NationalParks): apply in April for the June event. Applications open for only a few days and 5,000+ people apply for 700 spots.", "The Alum Cave Trail (4.4 mi roundtrip to Arch Rock, 10 mi to LeConte) is the park's best all-purpose trail — dramatic geology, waterfalls, and high elevation views.", "Avoid Gatlinburg entirely on fall foliage weekends (mid-Oct). Clingmans Dome and Newfound Gap roads become parking lots. Stay in Bryson City (NC side) instead."],
    dosAndDonts: [{ type: "do", text: "Buy an annual parking tag if you're staying more than 2 days." }],
    redditPosts: [
      { title: "Synchronous fireflies lottery — how to win and what to expect", sub: "r/NationalParks", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "Two weeks in June. Free to enter the lottery but you MUST sign up in April. The light show is unlike anything on earth." },
      { title: "Cades Cove loop at 6am — the best thing I did in the Smokies", sub: "r/hiking", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "We had the loop entirely to ourselves. Deer, turkey, two black bears, and a coyote all before 9am." },
      { title: "October fall foliage at Smokies — worth the brutal traffic?", sub: "r/travel", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "Don\'t try to drive. Park in Gatlinburg and take the trolley. Mid-October peak is stunning but road rage-inducing." }
    ],
    links: {
      nps: "https://www.nps.gov/grsm/",
      lodging: "https://www.tripadvisor.com/Hotels-g55226-Gatlinburg_Tennessee-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g55226-Gatlinburg_Tennessee.html",
      activities: "https://recreation.gov/search?q=great+smoky+mountains",
      roadConditions: "https://www.nps.gov/grsm/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      4: { temp: "18°C / 65°F", reservations: "Park is free. Parking Tag required.", reddit: "Spring wildflowers are fully blooming. Very pleasant hiking weather before the humidity hits." },
      5: { temp: "23°C / 73°F", reservations: "Park is free. Parking Tag required.", reddit: "Warming up nicely. The firefly lottery happens this month for the June event." },
      6: { temp: "27°C / 80°F", reservations: "Elkmont Firefly lottery permit required if viewing.", reddit: "Starting to get very humid. The synchronous fireflies event is magical if you win the lottery." },
      9: { temp: "25°C / 77°F", reservations: "Park is free. Parking Tag required.", reddit: "Humidty finally begins to drop. Very nice late-summer weather." },
      10: { temp: "19°C / 66°F", reservations: "Park is free. Parking Tag required.", reddit: "Fall color peak in late October brings insane gridlock traffic, but the views are incredible." }
    },

    redditPosts: [
      { title: "Synchronous fireflies lottery — how to win and what to expect", sub: "r/NationalParks", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "Two weeks in June. Free to enter the lottery but you MUST sign up in April. The light show is unlike anything on earth." },
      { title: "Cades Cove loop at 6am — the best thing I did in the Smokies", sub: "r/hiking", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "We had the loop entirely to ourselves. Deer, turkey, two black bears, and a coyote all before 9am." },
      { title: "October fall foliage at Smokies — worth the brutal traffic?", sub: "r/travel", url: "https://www.reddit.com/r/GreatSmokyMountains/top/?t=all", quote: "Don\'t try to drive. Park in Gatlinburg and take the trolley. Mid-October peak is stunning but road rage-inducing." }
    ],
    links: {
      nps: "https://www.nps.gov/grsm/",
      lodging: "https://www.tripadvisor.com/Hotels-g55226-Gatlinburg_Tennessee-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g55226-Gatlinburg_Tennessee.html",
      activities: "https://recreation.gov/search?q=great+smoky+mountains",
      roadConditions: "https://www.nps.gov/grsm/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Shenandoah",
    seasonalVerdict: { best: "October (Stunning fall colors on Skyline Drive), April - May (Wildflower peak).", avoid: "Winter (Skyline Drive often closed due to ice/snow, very limited facilities)." },
    minDays: 2,
    flightMinutes: 405,
    state: "VA",
    bestMonths: [5, 6, 9, 10],
    funFacts: [
      "The park's creation displaced over 500 families who lived in the Blue Ridge Mountains.",
      "Skyline Drive runs exactly 105 miles along the crest of the mountains through the entire park.",
      "Over 500 miles of hiking trails crisscross the park, including 101 miles of the Appalachian Trail.",
      "President Herbert Hoover had a summer retreat here called Rapidan Camp.",
      "The park has one of the densest populations of black bears in the eastern United States."
    ],
    airport: "BWI (2hr drive)",
    flight: "~4h 45m (1 stop)",
    transport: "Drive (Skyline Dr)",
    days: "2–3",
    avoid: [1, 2, 3],
    popularity: 70,
    uniqueness: 60,
    sfoAccessibility: 55,
    topActivities: ["Skyline Drive", "Old Rag Mountain hike", "Dark Hollow Falls"],
    sunriseSunset: "Sunrise: Tunnel Parking Overlook. Sunset: Hazel Mountain Overlook.",
    stargazing: { isFriendly: true, spots: "Big Meadows", description: "Decent. Big Meadows area is open." },
    itinerary: [
      { day: "Day 1", plan: "Drive Skyline Drive from the north. Stop at Range View, Hogback, and Marys Rock Tunnel overlooks. Hike Stony Man Trail (1.6 mi, highest peak accessible trail in the park). Sunset from Hazel Mountain Overlook." },
      { day: "Day 2", plan: "Old Rag Mountain full circuit (9.2 mi loop, 2,400 ft) — buy the $2 day-use ticket in advance. The rock scramble section at the summit is unlike anything else in the mid-Atlantic." }
    ],
    travelHacks: ["Old Rag Mountain requires a $2 day-use ticket per person (recreation.gov), good for all 3 connector trails. Tickets release 30 days out at 10 AM ET and 400 more release 5 days out — both sell out fast.", "The Skyline Drive speed limit is 35 mph and strictly enforced. Budget 3-4 hours to drive the entire 105 miles, including stops at the best overlooks.", "Bearfence Mountain (off mile 56 on Skyline Drive) is a 20-minute scramble to a rock summit with 360° views — one of the best bang-for-buck hikes in the entire park.", "Fall color peak is typically Oct 12-22 (north district) and Oct 18-28 (south). Check NPS webcams at dawn — fog in the valleys with colored trees above it is spectacular.", "The park has 4 campgrounds that do not require timed entry, but Mathews Arm, Loft Mountain, and Big Meadows fill by noon on October weekends. Arrive the night before."],
    dosAndDonts: [{ type: "do", text: "Get the day-use ticket for Old Rag online before you arrive." }],
    redditPosts: [
      { title: "Old Rag Mountain — the best day hike on the East Coast?", sub: "r/hiking", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "The rock scramble at the top is genuinely exhilarating. Book the $2 day ticket 30 days out or you won\'t get in." },
      { title: "Skyline Drive overlooks — the definitive ranked list", sub: "r/Shenandoah", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "Hazel Mountain Overlook for sunset is criminally underrated. Marys Rock for the 360° view." },
      { title: "Fall foliage timing at Shenandoah — 2025 data for predicting 2026", sub: "r/NationalParks", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "Peak is typically Oct 12-22 in the north, Oct 18-28 in the south. Weekdays are dramatically better." }
    ],
    links: {
      nps: "https://www.nps.gov/shen/",
      lodging: "https://www.goshenandoah.com/lodging",
      dining: "https://www.goshenandoah.com/dining",
      activities: "https://recreation.gov/search?q=shenandoah",
      roadConditions: "https://www.nps.gov/shen/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      5: { temp: "20°C / 68°F", reservations: "Old Rag Mountain Ticket Required.", reddit: "The Appalachian Trail thru-hikers start passing through. Beautiful spring foliage." },
      6: { temp: "24°C / 76°F", reservations: "Old Rag Mountain Ticket Required.", reddit: "Nice and green. Waterfalls are still flowing well before the summer heat dries them up." },
      9: { temp: "22°C / 72°F", reservations: "Old Rag Mountain Ticket Required.", reddit: "Ideal weather. Cool mornings, warm afternoons." },
      10: { temp: "16°C / 61°F", reservations: "Old Rag Mountain Ticket Required.", reddit: "The busiest month by far. Skyline Drive traffic will be bumper-to-bumper for fall foliage." }
    },

    redditPosts: [
      { title: "Old Rag Mountain — the best day hike on the East Coast?", sub: "r/hiking", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "The rock scramble at the top is genuinely exhilarating. Book the $2 day ticket 30 days out or you won\'t get in." },
      { title: "Skyline Drive overlooks — the definitive ranked list", sub: "r/Shenandoah", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "Hazel Mountain Overlook for sunset is criminally underrated. Marys Rock for the 360° view." },
      { title: "Fall foliage timing at Shenandoah — 2025 data for predicting 2026", sub: "r/NationalParks", url: "https://www.reddit.com/r/Shenandoah/top/?t=all", quote: "Peak is typically Oct 12-22 in the north, Oct 18-28 in the south. Weekdays are dramatically better." }
    ],
    links: {
      nps: "https://www.nps.gov/shen/",
      lodging: "https://www.goshenandoah.com/lodging",
      dining: "https://www.goshenandoah.com/dining",
      activities: "https://recreation.gov/search?q=shenandoah",
      roadConditions: "https://www.nps.gov/shen/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "North Cascades",
    seasonalVerdict: { best: "July - September (Main highway fully open, turquoise lakes at peak color).", avoid: "Winter/Spring (Heavy snow, Highway 20 closed, most trails inaccessible)." },
    minDays: 2,
    flightMinutes: 285,
    state: "WA",
    bestMonths: [7, 8, 9],
    funFacts: [
      "It contains over 300 glaciers, the most of any U.S. park outside of Alaska.",
      "It is one of the least visited national parks in the country despite its staggering beauty.",
      "There is no toll gate or entrance fee; Highway 20 simply cuts right through it.",
      "The color of Diablo Lake is an otherworldly turquoise due to suspended glacial rock flour.",
      "The park features dramatic elevation changes, from dense ancient rainforests to jagged icy spires."
    ],
    airport: "SEA (2.5hr drive)",
    flight: "~2h 15m direct",
    transport: "Drive Hwy 20",
    days: "3–4",
    avoid: [11],
    popularity: 50,
    uniqueness: 90,
    sfoAccessibility: 85,
    topActivities: ["Maple Pass Loop", "Diablo Lake overlook", "Cascade Pass / Sahale Arm"],
    sunriseSunset: "Sunrise: Diablo Lake. Sunset: Washington Pass Overlook.",
    stargazing: { isFriendly: true, spots: "Washington Pass", description: "Very dark once you get away from light domes." },
    itinerary: [
      { day: "Day 1", plan: "Drive Highway 20 from the west. Stop at Diablo Lake Overlook (free, 15 seconds off the road). Washington Pass Overlook for the jagged Liberty Bell massif. Maple Pass trailhead for sunset." },
      { day: "Day 2", plan: "Maple Pass Loop (7.2 mi, 2,000 ft) at dawn — the lake, ridge, and larches are extraordinary. Afternoon: Cascade Pass trail (7.4 mi RT) for a different perspective of wild glaciated peaks." }
    ],
    travelHacks: ["The park has NO entrance fee — Highway 20 simply passes through it. There's no entrance gate or ticket booth.", "Sahale Arm backcountry camp requires a permit from recreation.gov. Apply as soon as they open (usually March or April) as the site fills for all of July and August.", "Check WTA.org (Washington Trails Association) for current trail conditions. Major trails above 5,500 ft often have snow through mid-August.", "Maple Pass Loop in late September during golden larch season is the most popular hike in the park — arrive by 7 AM. The trailhead lot fits only 30 cars.", "The Diablo Lake Overlook is 15 seconds off Highway 20. The turquoise color from rock flour is real — you'll stop the car in genuine disbelief."],
    dosAndDonts: [{ type: "do", text: "Check trail trip reports (WTA.org) for snow levels. High trails hold snow into August." }],
    redditPosts: [
      { title: "Sahale Arm — the most impossibly beautiful backcountry hike I have ever done", sub: "r/hiking", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "You camp on a moraine surrounded by glaciers 7,600 feet up with 360° views. No words." },
      { title: "North Cascades — no crowds, no fee, no excuses. Go.", sub: "r/NationalParks", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "Possibly the least visited park in the lower 48. Absolutely stunning. Highway 20 is free to drive." },
      { title: "Maple Pass Loop in golden larch season — a perfect fall hike", sub: "r/PacificNorthwest", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "Late September when the larches turn gold. Lake Ann below you, mountains all around. Do it." }
    ],
    links: {
      nps: "https://www.nps.gov/noca/",
      lodging: "https://www.tripadvisor.com/Hotels-g58767-Winthrop_Washington-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g58767-Winthrop_Washington.html",
      activities: "https://recreation.gov/search?q=north+cascades",
      roadConditions: "https://www.nps.gov/noca/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      7: { temp: "24°C / 75°F", reservations: "None (Free Entry). Backcountry permits required.", reddit: "Highway 20 is finally fully melted out. Trails might still have snow above 5000ft." },
      8: { temp: "25°C / 77°F", reservations: "None (Free Entry).", reddit: "The only fully snow-free month of the year. Peak hiking conditions. Sahale Arm is life-changing." },
      9: { temp: "20°C / 68°F", reservations: "None (Free Entry).", reddit: "Golden larches (conifers that turn yellow) start peaking in late September. Stunning contrasting colors." }
    },

    redditPosts: [
      { title: "Sahale Arm — the most impossibly beautiful backcountry hike I have ever done", sub: "r/hiking", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "You camp on a moraine surrounded by glaciers 7,600 feet up with 360° views. No words." },
      { title: "North Cascades — no crowds, no fee, no excuses. Go.", sub: "r/NationalParks", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "Possibly the least visited park in the lower 48. Absolutely stunning. Highway 20 is free to drive." },
      { title: "Maple Pass Loop in golden larch season — a perfect fall hike", sub: "r/PacificNorthwest", url: "https://www.reddit.com/r/NorthCascades/top/?t=all", quote: "Late September when the larches turn gold. Lake Ann below you, mountains all around. Do it." }
    ],
    links: {
      nps: "https://www.nps.gov/noca/",
      lodging: "https://www.tripadvisor.com/Hotels-g58767-Winthrop_Washington-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g58767-Winthrop_Washington.html",
      activities: "https://recreation.gov/search?q=north+cascades",
      roadConditions: "https://www.nps.gov/noca/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Saguaro",
    seasonalVerdict: { best: "November - March (Mild winter sun, perfect for desert hiking), February (Wildflowers).", avoid: "Summer (Dangerous monsoon storms, lightning, and heat frequently over 105°F)." },
    minDays: 1,
    flightMinutes: 195,
    state: "AZ",
    bestMonths: [11, 12, 1, 2, 3, 4],
    funFacts: [
      "The Saguaro cactus is the largest cactus in the United States, reaching up to 40-60 feet tall.",
      "A Saguaro doesn't usually grow its first arm until it is 50 to 75 years old.",
      "These cacti can live for up to 200 years and weigh several tons when fully saturated with water.",
      "The park is split directly in half by the city of Tucson into the East and West districts.",
      "Gila woodpeckers hollow out holes in the cacti to create cool nests protected from the desert sun."
    ],
    airport: "PHX (1.5hr drive)",
    flight: "~1h 45m direct",
    transport: "Drive only",
    days: "2–3",
    avoid: [6, 7, 8, 9],
    popularity: 70,
    uniqueness: 80,
    sfoAccessibility: 90,
    topActivities: ["Signal Hill Petroglyphs", "Valley View Overlook", "Bajada Loop Drive"],
    sunriseSunset: "Sunrise: Gates Pass. Sunset: Valley View Overlook.",
    stargazing: { isFriendly: false, spots: "N/A", description: "Too close to Tucson for truly dark skies." },
    itinerary: [
      { day: "Day 1", plan: "West District (Tucson Mountain): Bajada Loop Drive (dirt road, 8 mi) at dawn for dense saguaro forests. Signal Hill Petroglyphs (0.5 mi). Afternoon: Arizona-Sonora Desert Museum (not NPS, separate entry, 2 hrs minimum)." },
      { day: "Day 2", plan: "East District (Rincon Mountain): Tanque Verde Ridge Trail (6 mi RT for desert views) or easy Cactus Forest Trail loop (2.5 mi). Gates Pass Road outside the west entrance for sunset photography." }
    ],
    travelHacks: ["The park is split by Tucson into East (Rincon Mountain) and West (Tucson Mountain) districts — visit both if you have a second day. West has older, denser cacti.", "Gates Pass Road (just outside the west district) is free and has arguably better saguaro scenery than sections inside the paid park boundary.", "The Arizona-Sonora Desert Museum (2 miles from the west entrance) is not technically part of the park — separately ticketed, but it's voted #1 thing to do in Tucson. Do it first.", "Carry a blacklight flashlight on any evening walk. Scorpions glow bright green-yellow under UV light. There are far more than you think near rocks and logs.", "Visit in late April-May for the saguaro bloom — giant white flowers appear only at night and close by morning. Spot them at dawn before the heat wilts them."],
    dosAndDonts: [{ type: "do", text: "Carry a blacklight at night to easily spot the glowing scorpions." }],
    redditPosts: [
      { title: "Arizona-Sonora Desert Museum — why it's better than the park itself", sub: "r/travel", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "It\'s an open-air zoo integrated into an actual hike through the Sonoran Desert. Combine with the west district." },
      { title: "Saguaro at night with a blacklight — scorpions everywhere", sub: "r/NationalParks", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "They glow bright green under UV light. We found 12 within 10 feet of our campsite. Terrifying and amazing." },
      { title: "Best time to visit Saguaro — winter vs spring breakdown", sub: "r/solotravel", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "Winter is quiet perfection. Late April has giant white cactus flowers blooming. Both are great." }
    ],
    links: {
      nps: "https://www.nps.gov/sagu/",
      lodging: "https://www.tripadvisor.com/Hotels-g60950-Tucson_Arizona-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60950-Tucson_Arizona.html",
      activities: "https://recreation.gov/search?q=saguaro",
      roadConditions: "https://www.nps.gov/sagu/planyourvisit/conditions.htm"
    },
    monthlyData: {
      11: { temp: "22°C / 72°F", reservations: "Standard Entry Fee.", reddit: "Cooled down from summer. Excellent time to visit both halves of the park." },
      12: { temp: "16°C / 61°F", reservations: "Standard Entry Fee.", reddit: "Winter in Tucson is wonderful. The cacti look surreal against winter rain clouds." },
      1: { temp: "18°C / 64°F", reservations: "Standard Entry Fee.", reddit: "Chilly mornings, warm afternoons. Perfect hiking weather." },
      2: { temp: "20°C / 68°F", reservations: "Standard Entry Fee.", reddit: "Beautiful clear skies and comfortable temps." },
      3: { temp: "23°C / 74°F", reservations: "Standard Entry Fee.", reddit: "Wildflowers start to bloom at the bases of the giant cacti." },
      4: { temp: "28°C / 82°F", reservations: "Standard Entry Fee.", reddit: "Last month before the blast furnace heat. Saguaros occasionally start blooming white crowns late April." }
    },

    redditPosts: [
      { title: "Arizona-Sonora Desert Museum — why it's better than the park itself", sub: "r/travel", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "It\'s an open-air zoo integrated into an actual hike through the Sonoran Desert. Combine with the west district." },
      { title: "Saguaro at night with a blacklight — scorpions everywhere", sub: "r/NationalParks", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "They glow bright green under UV light. We found 12 within 10 feet of our campsite. Terrifying and amazing." },
      { title: "Best time to visit Saguaro — winter vs spring breakdown", sub: "r/solotravel", url: "https://www.reddit.com/r/Saguaro/top/?t=all", quote: "Winter is quiet perfection. Late April has giant white cactus flowers blooming. Both are great." }
    ],
    links: {
      nps: "https://www.nps.gov/sagu/",
      lodging: "https://www.tripadvisor.com/Hotels-g60950-Tucson_Arizona-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60950-Tucson_Arizona.html",
      activities: "https://recreation.gov/search?q=saguaro",
      roadConditions: "https://www.nps.gov/sagu/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Everglades",
    seasonalVerdict: { best: "December - April (Dry season, low mosquito activity, wildlife concentrated at water holes).", avoid: "Summer (Wet season, extreme mosquito/fly swarms, high humidity, afternoon storms)." },
    minDays: 2,
    flightMinutes: 360,
    state: "FL",
    bestMonths: [11, 12, 1, 2, 3, 4],
    funFacts: [
      "The Everglades is not a swamp, but a massive, slow-moving river 60 miles wide.",
      "It is the only place on Earth where alligators and crocodiles coexist in the wild.",
      "The park protects the largest contiguous stand of protected mangrove forest in the hemisphere.",
      "It provides drinking water for one-third of Floridians (over 8 million people).",
      "The invasive Burmese python has decimated up to 90% of the small mammal population here."
    ],
    airport: "FLL (1hr drive)",
    flight: "~5h (1 stop)",
    transport: "Drive + boat tours",
    days: "2–3",
    avoid: [6, 7, 8],
    popularity: 78,
    uniqueness: 92,
    sfoAccessibility: 55,
    topActivities: ["Airboat Tour", "Anhinga Trail", "Shark Valley Tram/Bike"],
    sunriseSunset: "Sunrise: Anhinga Trail. Sunset: Flamingo Visitor Center.",
    stargazing: { isFriendly: false, spots: "N/A", description: "Light pollution from Miami." },
    itinerary: [
      { day: "Day 1", plan: "Anhinga Trail at dawn (0.8 mi) — do not skip this. Royal Palm area Gumbo Limbo Trail (0.4 mi). Shark Valley: bicycle rental (2 hrs, 15-mi loop) past dozens of alligators sunbathing on the path." },
      { day: "Day 2", plan: "Drive to Flamingo (38 mi, end of the road). Eco Pond birdwatching pull-off. Flamingo Visitor Center and Florida Bay kayaking ($35 rental). Nine Mile Pond canoe/kayak loop for mangrove tunnels." }
    ],
    travelHacks: ["The dry season (Nov-April) is the only time the park is safely visitable for most people. Mosquito levels in May-October are described by rangers as 'beyond tolerance'.", "The Anhinga Trail (0.8 mi) has a higher wildlife density per foot than almost anywhere in North America — do it first, at dawn, when anhingas are perched and spreading wings.", "Airboat tours operate OUTSIDE the park boundary. Shark Valley Tram or bicycle rental ($35 for 2hrs) gives a proper in-park experience on official trails.", "Flamingo Visitor Center (the end of the main road) is 38 miles into the park. Bring lunch — there are no food services and camping requires advance booking.", "Florida Bay in winter (Dec-Feb) has spectacular birdwatching from Eco Pond and the Flamingo area. Roseate spoonbills, herons, and ospreys are common sightings."],
    dosAndDonts: [{ type: "dont", text: "Don't even attempt visiting between May and October without a head-to-toe mosquito net." }],
    redditPosts: [
      { title: "Dry season in the Everglades is a completely different park", sub: "r/NationalParks", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "Wildlife funnels to remaining water during dry season. You\'ll see more gators in an hour than most people see in a lifetime." },
      { title: "Anhinga Trail — the best wildlife viewing per mile of any trail in America", sub: "r/birdwatching", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "0.8 miles. Birds will literally perch on the rail next to you drying their wings. Completely surreal." },
      { title: "Burmese pythons in the Everglades — the wildest invasive species crisis in US history", sub: "r/nature", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "Up to 90% of small mammal populations wiped out. You can actually sign up for python hunting programs." }
    ],
    links: {
      nps: "https://www.nps.gov/ever/",
      lodging: "https://www.flamingolodge.com/",
      dining: "https://www.tripadvisor.com/Restaurants-g34282-Homestead_Florida.html",
      activities: "https://recreation.gov/search?q=everglades",
      roadConditions: "https://www.nps.gov/ever/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      11: { temp: "26°C / 79°F", reservations: "Standard Entry Fee. Boat tours strongly highly advised.", reddit: "Dry season begins! Mosquitos finally retreat, making the park habitable for humans." },
      12: { temp: "23°C / 74°F", reservations: "Standard Entry Fee.", reddit: "Lowest water levels mean the alligators congregate in the deeper channels, making them very easy to spot." },
      1: { temp: "23°C / 74°F", reservations: "Standard Entry Fee.", reddit: "Prime bird watching season. Thousands of migratory birds arrive." },
      2: { temp: "24°C / 75°F", reservations: "Standard Entry Fee.", reddit: "Perfect weather. The Anhinga Trail is absolutely flooded with wildlife." },
      3: { temp: "26°C / 79°F", reservations: "Standard Entry Fee.", reddit: "Still the dry season, so wildlife viewing naturally funnels to accessible water holes." },
      4: { temp: "28°C / 83°F", reservations: "Standard Entry Fee.", reddit: "Getting hot and humid again, but mosquito levels are still tolerable." }
    },

    redditPosts: [
      { title: "Dry season in the Everglades is a completely different park", sub: "r/NationalParks", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "Wildlife funnels to remaining water during dry season. You\'ll see more gators in an hour than most people see in a lifetime." },
      { title: "Anhinga Trail — the best wildlife viewing per mile of any trail in America", sub: "r/birdwatching", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "0.8 miles. Birds will literally perch on the rail next to you drying their wings. Completely surreal." },
      { title: "Burmese pythons in the Everglades — the wildest invasive species crisis in US history", sub: "r/nature", url: "https://www.reddit.com/r/Everglades/top/?t=all", quote: "Up to 90% of small mammal populations wiped out. You can actually sign up for python hunting programs." }
    ],
    links: {
      nps: "https://www.nps.gov/ever/",
      lodging: "https://www.flamingolodge.com/",
      dining: "https://www.tripadvisor.com/Restaurants-g34282-Homestead_Florida.html",
      activities: "https://recreation.gov/search?q=everglades",
      roadConditions: "https://www.nps.gov/ever/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Bryce Canyon",
    seasonalVerdict: { best: "May - September (Pleasant high-altitude temps), Winter (Snow-dusted hoodoos are magical).", avoid: "July (Heavy monsoon lightning risk), Late Winter (Muddy trails from freeze-thaw cycles)." },
    minDays: 2,
    flightMinutes: 465,
    state: "UT",
    bestMonths: [5, 6, 7, 8, 9, 10],
    funFacts: [
      "Bryce Canyon is not actually a canyon, but a series of natural amphitheaters carved into the edge of a high plateau.",
      "It has the largest concentration of 'hoodoos' (irregular rock spires) found anywhere on Earth.",
      "Because of its high elevation (up to 9,100 feet), it often snows here even when Zion is 80 degrees.",
      "The native Paiute people believed the hoodoos were 'Legend People' turned to stone by the trickster god Coyote.",
      "The incredibly clear air provides 100-mile visibility into three different states on a good day."
    ],
    airport: "LAS (4hr drive)",
    flight: "~1h 15m + 2.5h drive",
    transport: "Free seasonal shuttle",
    days: "2–3",
    avoid: [12, 1, 2],
    popularity: 90,
    uniqueness: 95,
    sfoAccessibility: 75,
    topActivities: ["Navajo/Queens Garden Loop", "Sunrise Point", "Stargazing Programs"],
    sunriseSunset: "Sunrise: Sunrise Point. Sunset: Sunset Point or Inspiration Point.",
    stargazing: { isFriendly: true, spots: "Anywhere on the Rim", description: "One of the best night skies in the USA. Excellent ranger astronomy programs." },
    itinerary: [
      { day: "Day 1", plan: "Sunrise at Sunrise Point (with every other visitor). Start the Navajo Loop trail from Sunset Point — go down Wall Street to the canyon floor, connect to Queen's Garden, ascend back up (5.5 mi RT). Shuttle to Inspiration Point for afternoon light." },
      { day: "Day 2", plan: "Bryce Point at dawn (minimal crowds vs Sunrise Point). Peek-a-Boo Loop trail (5.5 mi, more dramatic hoodoos than the Navajo Loop). Night sky ranger astronomy program if available." }
    ],
    travelHacks: ["Start the Navajo Loop at Wall Street (the steep section) and go down, connecting to Queens Garden Trail to come back up. Going the reverse direction is significantly harder.", "The park sits at 8,000-9,100 ft elevation. Even in summer, temperatures can drop below freezing overnight — pack more layers than you think you need.", "Shuttle service is free and runs May through early October. Use it to avoid the Sunrise/Sunset/Inspiration Point parking scramble.", "Book the ranger-led astronomy programs in advance (free but fill up). Bryce's skies are among the best in the US — over 7,500 stars visible to the naked eye.", "Bryce Canyon City (outside the south entrance) has lodging far cheaper than inside the park. Bryce Canyon Grand Hotel is particularly well reviewed for the price."],
    dosAndDonts: [{ type: "do", text: "Pack layers. At 8,000 feet, mornings are freezing even in July." }],
    redditPosts: [
      { title: "Hike DOWN into the hoodoos — most people make this mistake", sub: "r/NationalParks", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Do NOT just stand on the rim. The Navajo Loop trail goes down into them. It\'s a completely different world." },
      { title: "Bryce Canyon night sky astronomy programs — the best thing the NPS does", sub: "r/stargazing", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Free ranger-led stargazing with huge telescopes. Saw Jupiter\'s moons and the Andromeda galaxy." },
      { title: "Combining Zion + Bryce — the perfect 5-day Utah trip", sub: "r/roadtrip", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Days 1-3: Zion. Days 4-5: Bryce. Drive is gorgeous and only 1.5 hours. Connect in Springdale." }
    ],
    links: {
      nps: "https://www.nps.gov/brca/",
      lodging: "https://www.brycecanyonforever.com/bryce-canyon-lodging/",
      dining: "https://www.brycecanyonforever.com/bryce-canyon-dining/",
      activities: "https://recreation.gov/search?q=bryce+canyon",
      roadConditions: "https://www.nps.gov/brca/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      5: { temp: "15°C / 59°F", reservations: "Standard Entry Fee. Shuttle starts.", reddit: "Still chilly. Great time to see residual snow contrasting with the red hoodoos." },
      6: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Perfect hiking weather. The annual Astronomy Festival usually happens late June." },
      7: { temp: "26°C / 78°F", reservations: "Standard Entry Fee.", reddit: "Warmest month, but still pleasant due to elevation. Afternoon thunderstorms are common." },
      8: { temp: "25°C / 77°F", reservations: "Standard Entry Fee.", reddit: "Similar to July. Get hikes done before 2 PM to avoid lightning risks." },
      9: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Fall is arguably the best time. Crisp air, fewer people, brilliant skies." },
      10: { temp: "15°C / 59°F", reservations: "Standard Entry Fee. Shuttle ends mid-Oct.", reddit: "Bring a winter coat! It drops below freezing at night, but daytime hiking is glorious." }
    },

    redditPosts: [
      { title: "Hike DOWN into the hoodoos — most people make this mistake", sub: "r/NationalParks", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Do NOT just stand on the rim. The Navajo Loop trail goes down into them. It\'s a completely different world." },
      { title: "Bryce Canyon night sky astronomy programs — the best thing the NPS does", sub: "r/stargazing", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Free ranger-led stargazing with huge telescopes. Saw Jupiter\'s moons and the Andromeda galaxy." },
      { title: "Combining Zion + Bryce — the perfect 5-day Utah trip", sub: "r/roadtrip", url: "https://www.reddit.com/r/BryceCanyon/top/?t=all", quote: "Days 1-3: Zion. Days 4-5: Bryce. Drive is gorgeous and only 1.5 hours. Connect in Springdale." }
    ],
    links: {
      nps: "https://www.nps.gov/brca/",
      lodging: "https://www.brycecanyonforever.com/bryce-canyon-lodging/",
      dining: "https://www.brycecanyonforever.com/bryce-canyon-dining/",
      activities: "https://recreation.gov/search?q=bryce+canyon",
      roadConditions: "https://www.nps.gov/brca/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Great Basin",
    seasonalVerdict: { best: "June - September (Alpine trails accessible), Early October (Fall colors and dark skies).", avoid: "Winter - Spring (Most of Wheeler Peak Scenic Drive is closed due to high altitude snow)." },
    minDays: 2,
    flightMinutes: 615,
    state: "NV",
    bestMonths: [6, 7, 8, 9],
    funFacts: [
      "The park is home to Bristlecone Pine trees that are nearly 5,000 years old, making them the oldest living non-clonal organisms on Earth.",
      "Wheeler Peak Glacier is the only glacier in Nevada, though it is rapidly receding.",
      "Lehman Caves was discovered in the 1880s by Absalom Lehman and features rare 'parachute shield' cave formations.",
      "There is literally zero cell phone service in or anywhere near the park boundary.",
      "It is one of the darkest places in the entire United States, making it a gold-tier Dark Sky Park."
    ],
    airport: "LAS (4.5hr drive)",
    flight: "~1h 15m + 4.5h drive",
    transport: "Drive + ranger-led cave tours",
    days: "2–3",
    avoid: [12, 1, 2],
    popularity: 40,
    uniqueness: 85,
    sfoAccessibility: 75,
    topActivities: ["Lehman Caves Tour", "Bristlecone Pine Trail", "Wheeler Peak Drive"],
    sunriseSunset: "Sunset: Wheeler Peak overlook.",
    stargazing: { isFriendly: true, spots: "Astronomy Amphitheater", description: "Among the darkest skies in the lower 48." },
    itinerary: [
      { day: "Day 1", plan: "Lehman Caves ranger-led tour (book in advance, 60-90 min underground). Wheeler Peak Scenic Drive to 10,000 ft. Alpine Lakes Loop trail (2.7 mi) past Stella and Teresa Lakes. Watch sunset from Wheeler Peak overlook." },
      { day: "Day 2", plan: "Bristlecone Pine Trail (2.8 mi RT) to the 5,000-year-old trees. Glacier Trail extension (4.6 mi) to Wheeler Peak Glacier if accessible. Night: Astronomy Amphitheater for ranger stargazing with telescopes." }
    ],
    travelHacks: ["Lehman Caves tours sell out quickly — book on recreation.gov exactly 30 days in advance at 7 AM PT. They release daily slots and peak summer tours vanish in seconds.", "There is zero cell service anywhere in or near the park. Download offline maps and the NPS Great Basin app before arrival.", "Fill your gas tank in Baker (12 miles east) or Ely (70 miles east). There is no fuel in the park.", "Wheeler Peak Scenic Drive opens around Memorial Day (snow-dependent). The drive to 10,000 ft takes 20 minutes and opens access to the Bristlecone Pine trail and glacier.", "The Great Basin Astronomy Festival in September is free. Ranger-telescopes let you see Saturn's rings, Jupiter's moons, and deep-sky nebulae from the darkest park in the lower 48."],
    dosAndDonts: [{ type: "do", text: "Fill up your gas tank in Baker or Ely before entering; there is no gas in the park." }],
    redditPosts: [
      { title: "Great Basin — the dark sky park nobody talks about", sub: "r/stargazing", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "Gold Tier dark sky designation. So dark that your eyes take 20 minutes to fully adjust and then you see 3,000+ stars." },
      { title: "Lehman Caves tour — book 30 days in advance at 7am or miss out", sub: "r/NationalParks", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "The shields (parachute formations) inside are incredibly rare cave formations. Best NPS tour I\'ve done." },
      { title: "The 5,000-year-old Bristlecone Pines at Wheeler Peak", sub: "r/Trees", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "Standing next to a living thing that was already 2,000 years old when the Roman Empire was founded breaks your brain." }
    ],
    links: {
      nps: "https://www.nps.gov/grba/",
      lodging: "https://www.tripadvisor.com/Hotels-g60964-Baker_Nevada-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60964-Baker_Nevada.html",
      activities: "https://recreation.gov/search?q=great+basin",
      roadConditions: "https://www.nps.gov/grba/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      6: { temp: "24°C / 75°F", reservations: "Standard Entry Fee (Free). Cave Tours must be booked.", reddit: "Wheeler Peak scenic drive finally opens all the way to the top. Incredible stargazing." },
      7: { temp: "29°C / 84°F", reservations: "Standard Entry Fee (Free). Cave Tours must be booked.", reddit: "Very hot in the basin, but perfectly cool up at 10,000ft on the Wheeler Peak trails." },
      8: { temp: "28°C / 82°F", reservations: "Standard Entry Fee (Free). Cave Tours must be booked.", reddit: "Peak season, but 'peak' here means you might see 10 other people on the trail." },
      9: { temp: "23°C / 73°F", reservations: "Standard Entry Fee (Free). Cave Tours must be booked.", reddit: "Great Basin Astronomy Festival happens this month! Book cave tours well in advance." }
    },

    redditPosts: [
      { title: "Great Basin — the dark sky park nobody talks about", sub: "r/stargazing", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "Gold Tier dark sky designation. So dark that your eyes take 20 minutes to fully adjust and then you see 3,000+ stars." },
      { title: "Lehman Caves tour — book 30 days in advance at 7am or miss out", sub: "r/NationalParks", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "The shields (parachute formations) inside are incredibly rare cave formations. Best NPS tour I\'ve done." },
      { title: "The 5,000-year-old Bristlecone Pines at Wheeler Peak", sub: "r/Trees", url: "https://www.reddit.com/r/GreatBasinNationalPark/top/?t=all", quote: "Standing next to a living thing that was already 2,000 years old when the Roman Empire was founded breaks your brain." }
    ],
    links: {
      nps: "https://www.nps.gov/grba/",
      lodging: "https://www.tripadvisor.com/Hotels-g60964-Baker_Nevada-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60964-Baker_Nevada.html",
      activities: "https://recreation.gov/search?q=great+basin",
      roadConditions: "https://www.nps.gov/grba/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Crater Lake",
    seasonalVerdict: { best: "July - September (Mazama Village open, Rim Drive fully accessible), Winter (Stunning snowshoeing).", avoid: "Late Spring (Many roads still closed by snow despite sunny weather)." },
    minDays: 2,
    flightMinutes: 270,
    state: "OR",
    bestMonths: [7, 8, 9],
    funFacts: [
      "At 1,943 feet deep, it is the deepest lake in the United States.",
      "The lake formed 7,700 years ago when the volcano Mount Mazama violently erupted and collapsed inward.",
      "There are no rivers or streams flowing in or out of the lake; all water comes strictly from rain and snowmelt.",
      "The 'Old Man of the Lake' is a 30-foot tree stump that has been bobbing vertically in the water since at least 1896.",
      "It is incredibly pristine because there is no sediment influx. You can sometimes see 140 feet down into the water."
    ],
    airport: "PDX (3hr drive)",
    flight: "~1h 30m direct",
    transport: "Drive Rim Drive",
    days: "1–2",
    avoid: [11, 12, 1, 2, 3, 4, 5],
    popularity: 80,
    uniqueness: 92,
    sfoAccessibility: 80,
    topActivities: ["Rim Drive", "Cleetwood Cove Trail", "Wizard Island Boat Tour"],
    sunriseSunset: "Sunrise: Discovery Point. Sunset: Watchman Overlook.",
    stargazing: { isFriendly: true, spots: "Anything on the Rim", description: "Very dark skies, high elevation, clean air." },
    itinerary: [
      { day: "Day 1", plan: "Drive the 33-mile Rim Drive clockwise, stopping at Phantom Ship Overlook, Cloudcap Overlook (highest viewpoint), and Watchman Overlook for sunset. The lake looks different from each vantage point." },
      { day: "Day 2", plan: "Cleetwood Cove Trail (2 mi RT, steep descent) to the lake shore — swim in 38°F impossibly blue water or take the Wizard Island boat tour. Hike Discovery Point trail (2.6 mi RT) for classic crater views." }
    ],
    travelHacks: ["Check the NPS Crater Lake webcam at nps.gov/crla before making the drive up — the lake is occasionally obscured by fog or smoke for days at a time.", "Wizard Island boat tours sell out months in advance. Book immediately when summer windows open (usually March). There is no standby option.", "The 33-mile Rim Drive is best driven clockwise starting from Steel Visitor Center — this keeps the lake views to your left (driver's side) for easier sightseeing.", "Cleetwood Cove is the only legal access to the water. The 1-mile descent (11% grade) is easy going down; allow double the time for the brutal climb back up in hot sun.", "Crater Lake Lodge has rooms with a direct view over the caldera. Book exactly 12 months in advance — the window-view rooms sell out in minutes."],
    dosAndDonts: [{ type: "do", text: "Hike Cleetwood Cove if you want to touch the water—it's the ONLY legal access point." }],
    redditPosts: [
      { title: "Crater Lake — no photo has ever prepared me for the actual blue", sub: "r/NationalParks", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "Every single person I\'ve ever taken there says the same thing the second they look over the rim: \'OH.\'" },
      { title: "Cleetwood Cove trail — the only place you can legally touch the water", sub: "r/hiking", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "It\'s a brutal 1-mile descent. Coming back up in the sun is awful. Jumping into 38° water is completely worth it." },
      { title: "September at Crater Lake — bugs gone, air crisp, water impossibly blue", sub: "r/solotravel", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "Early September is the secret window. Wildfire smoke risk starts dropping and the late summer haze clears out." }
    ],
    links: {
      nps: "https://www.nps.gov/crla/",
      lodging: "https://www.craterlakelodges.com/lodging/",
      dining: "https://www.craterlakelodges.com/dining/",
      activities: "https://recreation.gov/search?q=crater+lake",
      roadConditions: "https://www.nps.gov/crla/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      7: { temp: "22°C / 71°F", reservations: "Standard Entry Fee. Wizard Island Boat tours sell out months in advance.", reddit: "Rim Drive usually fully opens by mid-July. The water is freezing but the view is insane." },
      8: { temp: "23°C / 73°F", reservations: "Standard Entry Fee.", reddit: "Peak summer. Wildfire smoke from nearby Oregon fires can totally ruin visibility, check webcams." },
      9: { temp: "19°C / 66°F", reservations: "Standard Entry Fee.", reddit: "Best month. The mosquitoes are gone, the air is crisp, and the lake is at its bluest." }
    },

    redditPosts: [
      { title: "Crater Lake — no photo has ever prepared me for the actual blue", sub: "r/NationalParks", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "Every single person I\'ve ever taken there says the same thing the second they look over the rim: \'OH.\'" },
      { title: "Cleetwood Cove trail — the only place you can legally touch the water", sub: "r/hiking", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "It\'s a brutal 1-mile descent. Coming back up in the sun is awful. Jumping into 38° water is completely worth it." },
      { title: "September at Crater Lake — bugs gone, air crisp, water impossibly blue", sub: "r/solotravel", url: "https://www.reddit.com/r/CraterLake/top/?t=all", quote: "Early September is the secret window. Wildfire smoke risk starts dropping and the late summer haze clears out." }
    ],
    links: {
      nps: "https://www.nps.gov/crla/",
      lodging: "https://www.craterlakelodges.com/lodging/",
      dining: "https://www.craterlakelodges.com/dining/",
      activities: "https://recreation.gov/search?q=crater+lake",
      roadConditions: "https://www.nps.gov/crla/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Isle Royale",
    seasonalVerdict: { best: "July - August (Calmer winds, best island climate for backpacking and kayaking).", avoid: "Winter (The entire park is closed from Nov - mid-April due to extreme isolation and lake ice)." },
    minDays: 4,
    flightMinutes: 540,
    state: "MI",
    bestMonths: [7, 8, 9],
    funFacts: [
      "It is the least visited national park in the lower 48 states; Yellowstone gets more visitors in a day than Isle Royale gets in a year.",
      "The park famously hosts an isolated predator-prey study continuously tracking the wolf and moose populations since 1958.",
      "It is an island located in Lake Superior, but it has over 400 of its own internal lakes.",
      "There are zero wheeled vehicles allowed on the island—not even bicycles.",
      "Lake Superior's frigid waters preserve dozens of intact, diveable shipwrecks around the island's shores."
    ],
    airport: "CMX + ferry*",
    flight: "~4h 20m (1 stop)",
    transport: "Boat & hike only",
    days: "4–7",
    avoid: [11, 12, 1, 2, 3, 4],
    popularity: 30,
    uniqueness: 95,
    sfoAccessibility: 30,
    topActivities: ["Backpacking Greenstone Ridge", "Spotting Moose/Wolves", "Scuba diving"],
    sunriseSunset: "Sunrise/Sunset: Any rocky coastal point.",
    stargazing: { isFriendly: true, spots: "Any coast", description: "Outstanding dark skies. Occasional Northern Lights." },
    itinerary: [
      { day: "Day 1-2", plan: "Arrive by seaplane or ferry to Rock Harbor. Set up camp. Stoll Trail (4 mi) to Scoville Point for sweeping views of Superior. Watch for moose near the harbor marshes at dusk." },
      { day: "Day 3-4", plan: "Greenstone Ridge Trail — hike east or west section (trail is 42 mi total; do 10-14 mi of it). Lookout Louise gives the best island panorama. Thimbleberry picking in August along the ridge." },
      { day: "Day 5", plan: "Canoe or kayak from Rock Harbor out to Raspberry Island. Snorkel over the shallow ship wreck in Rock Harbor using the NPS rental snorkel gear. Depart seaplane or board the evening ferry." }
    ],
    travelHacks: ["Book your ferry (Rock Harbor or Copper Harbor) or seaplane (Houghton) months in advance — the seaplane from Houghton is $350 each way but saves 6 nausea-inducing hours on Lake Superior.", "Backcountry trips require advance permit registration (free, but required in 2026). Reserve sites at nps.gov/isro. Sites fill for July-August by early spring.", "Treat ALL water on the island — moose and wolf tapeworm (Echinococcus granulosus) is present in the lakes. Use a filter or iodine, no exceptions.", "Thimbleberries (a native raspberry-like fruit) ripen in late August along trail edges. They're edible and delicious — pick and eat freely.", "The island closes to public access October 31 and reopens late April. The exact date varies by ferry schedule — confirm on nps.gov/isro."],
    dosAndDonts: [{ type: "do", text: "Treat ALL water. Tapeworms transmitted by moose and wolves are present in the lakes." }],
    redditPosts: [
      { title: "Isle Royale — the most extreme national park adventure in the lower 48", sub: "r/ultralight", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "No wheeled vehicles. Complete wilderness. 165 miles of trails. Moose everywhere. Plan 5+ days." },
      { title: "Seaplane vs ferry to Isle Royale — which is actually worth it?", sub: "r/NationalParks", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "The ferry from Copper Harbor takes 6 nauseating hours each way. The seaplane is $350 but takes 30 minutes." },
      { title: "Spotting the Isle Royale wolves — tips from a researcher", sub: "r/Wolves", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "Early mornings, stay very quiet near the inland lakes. They\'re there. Most visitors never see them. The moose tracks will blow your mind." }
    ],
    links: {
      nps: "https://www.nps.gov/isro/",
      lodging: "https://www.isleroyaleresort.com/",
      dining: "https://www.isleroyaleresort.com/dining/",
      activities: "https://recreation.gov/search?q=isle+royale",
      roadConditions: "https://www.nps.gov/isro/planyourvisit/conditions.htm"
    },
    monthlyData: {
      7: { temp: "21°C / 70°F", reservations: "Ferry or Seaplane reservations required months in advance.", reddit: "Prepare for war against mosquitoes and black flies. Bring a head net and 100% DEET." },
      8: { temp: "22°C / 72°F", reservations: "Ferry/Seaplane required.", reddit: "Bugs begin to die down in late August. Thimbleberries are ripe and everywhere along the trails." },
      9: { temp: "17°C / 62°F", reservations: "Ferry runs reduce frequency. Closing late Sept.", reddit: "The bugs are finally gone! Fall colors arrive. But Lake Superior gets very rough." }
    },

    redditPosts: [
      { title: "Isle Royale — the most extreme national park adventure in the lower 48", sub: "r/ultralight", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "No wheeled vehicles. Complete wilderness. 165 miles of trails. Moose everywhere. Plan 5+ days." },
      { title: "Seaplane vs ferry to Isle Royale — which is actually worth it?", sub: "r/NationalParks", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "The ferry from Copper Harbor takes 6 nauseating hours each way. The seaplane is $350 but takes 30 minutes." },
      { title: "Spotting the Isle Royale wolves — tips from a researcher", sub: "r/Wolves", url: "https://www.reddit.com/r/IsleRoyale/top/?t=all", quote: "Early mornings, stay very quiet near the inland lakes. They\'re there. Most visitors never see them. The moose tracks will blow your mind." }
    ],
    links: {
      nps: "https://www.nps.gov/isro/",
      lodging: "https://www.isleroyaleresort.com/",
      dining: "https://www.isleroyaleresort.com/dining/",
      activities: "https://recreation.gov/search?q=isle+royale",
      roadConditions: "https://www.nps.gov/isro/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Big Bend",
    seasonalVerdict: { best: "November - March (Mild days, ideal for the Chisos Mountains and desert floor).", avoid: "Summer (Extreme Rio Grande valley heat, frequently exceeding 110°F on the trails)." },
    minDays: 3,
    flightMinutes: 390,
    state: "TX",
    bestMonths: [10, 11, 12, 1, 2, 3],
    funFacts: [
      "It contains more insect, bird, and reptile species than any other national park.",
      "You can legally rowboat across the Rio Grande river and eat lunch in the tiny Mexican village of Boquillas.",
      "The park spans three incredible environments: river, desert, and mountains (the Chisos).",
      "During the Cretaceous Period, this area was under a shallow sea; massive marine fossils and dinosaur bones are constantly found here.",
      "It has the darkest measured night skies of any national park in the lower 48 states."
    ],
    airport: "ELP (3.5hr drive)",
    flight: "~3h (1 stop)",
    transport: "Drive only",
    days: "3–4",
    avoid: [6, 7, 8],
    popularity: 65,
    uniqueness: 90,
    sfoAccessibility: 55,
    topActivities: ["Santa Elena Canyon", "Lost Mine Trail", "Emory Peak"],
    sunriseSunset: "Sunrise: Lost Mine Trail. Sunset: Window View Trail.",
    stargazing: { isFriendly: true, spots: "Anywhere", description: "Lowest light pollution of any NP in the lower 48 states. Phenomenal." },
    itinerary: [
      { day: "Day 1", plan: "Ross Maxwell Scenic Drive with stops at Sotol Vista and Mule Ears Viewpoint. Hike Santa Elena Canyon (1.7 mi RT) into the slot canyon carved by the Rio Grande. Hot Springs boardwalk trail at golden hour (2 mi RT, pools at 105°F)." },
      { day: "Day 2", plan: "Chisos Mountains: Lost Mine Trail (4.8 mi RT, 1,100 ft — best trail in the park) from Chisos Basin. Evening: Window View Trail (0.3 mi) for the sunset vista framed through the Window notch." },
      { day: "Day 3", plan: "Boquillas Crossing to Mexico (Wed-Sun, passport required). Walk or ride donkey to the tiny border village. Cross back and drive the River Road for desert solitude. Stargazing from your campsite at the darkest night sky in any lower-48 park." }
    ],
    travelHacks: ["Boquillas Port of Entry (cross to Mexico) is open Wed-Sun, 9 AM–6 PM. Bring your passport and some US dollar bills for the rowboat crossing ($5) and village snacks.", "The park has some of the worst conditions for cell service in the US. Download offline maps, the NPS app, and a weather radar app before leaving Terlingua.", "Rio Grande Village has the park's only gas station. Fill up there before driving remote dirt roads like Old Maverick Road or the River Road.", "Check the night sky forecast at darksky.org before your trip. Big Bend has the lowest light pollution of any lower-48 national park — when the moon is new, the Milky Way casts visible shadows.", "Chisos Basin lodge and campsite reservations should be made 6-12 months in advance for spring visits. The Basin is the most popular area and fills for March and April far in advance."],
    dosAndDonts: [{ type: "do", text: "Carry tweezers. Everything in the Chihuahuan desert has spikes, thorns, or fangs." }],
    redditPosts: [
      { title: "Big Bend has the darkest night sky of any national park — and it's not close", sub: "r/stargazing", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "Zero light pollution for 100+ miles in every direction. In December I could read a book by the Milky Way alone." },
      { title: "Rowing to Mexico at Boquillas Crossing — the most unique thing in the NPS", sub: "r/travel", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "A man rows you across the Rio Grande in a tiny boat for $5. Walk up to the village. Have a beer. Leave." },
      { title: "Big Bend in winter — the park completely transforms", sub: "r/NationalParks", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "Snow occasionally dusts the Chisos Basin at Christmas. The isolation and silence in December is profound." }
    ],
    links: {
      nps: "https://www.nps.gov/bibe/",
      lodging: "https://www.chisosminingco.com/lodging/",
      dining: "https://www.chisosminingco.com/dining/",
      activities: "https://recreation.gov/search?q=big+bend",
      roadConditions: "https://www.nps.gov/bibe/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      10: { temp: "27°C / 81°F", reservations: "Standard Entry Fee.", reddit: "Cooling down just enough for strenuous desert hikes. Chisos Mountains are perfect." },
      11: { temp: "21°C / 70°F", reservations: "Standard Entry Fee.", reddit: "Incredible weather. Hot Springs on the Rio Grande are very pleasant." },
      12: { temp: "16°C / 61°F", reservations: "Standard Entry Fee.", reddit: "Extremely quiet and peaceful. Freezing at night up in the Chisos Basin." },
      1: { temp: "16°C / 61°F", reservations: "Standard Entry Fee.", reddit: "Great temps for all-day hiking. Sometimes gets a strange, beautiful desert snow." },
      2: { temp: "19°C / 66°F", reservations: "Standard Entry Fee.", reddit: "Warming up nicely. The famous 'bluebonnet' wildflowers might start blooming late month." },
      3: { temp: "24°C / 75°F", reservations: "Standard Entry Fee.", reddit: "Spring break means max capacity. Wildflower blooms peak. Get to trailheads by 7am." }
    },

    redditPosts: [
      { title: "Big Bend has the darkest night sky of any national park — and it's not close", sub: "r/stargazing", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "Zero light pollution for 100+ miles in every direction. In December I could read a book by the Milky Way alone." },
      { title: "Rowing to Mexico at Boquillas Crossing — the most unique thing in the NPS", sub: "r/travel", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "A man rows you across the Rio Grande in a tiny boat for $5. Walk up to the village. Have a beer. Leave." },
      { title: "Big Bend in winter — the park completely transforms", sub: "r/NationalParks", url: "https://www.reddit.com/r/BigBend/top/?t=all", quote: "Snow occasionally dusts the Chisos Basin at Christmas. The isolation and silence in December is profound." }
    ],
    links: {
      nps: "https://www.nps.gov/bibe/",
      lodging: "https://www.chisosminingco.com/lodging/",
      dining: "https://www.chisosminingco.com/dining/",
      activities: "https://recreation.gov/search?q=big+bend",
      roadConditions: "https://www.nps.gov/bibe/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Biscayne",
    seasonalVerdict: { best: "Winter (Mosquito-free on the islands, clear water for snorkeling), Spring (Calm winds).", avoid: "Summer (Hurricane season, extreme humidity, and severe mosquito levels on the keys)." },
    minDays: 1,
    flightMinutes: 360,
    state: "FL",
    bestMonths: [12, 1, 2, 3, 4],
    funFacts: [
      "Biscayne is 95% water—you cannot see the park without getting on a boat.",
      "It protects the third-longest coral reef tract in the world.",
      "The park contains the only underwater archaeological trail in the US, featuring six distinct shipwrecks.",
      "The tiny islands (keys) inside the park are accessible only by boat, making them pristine tropical getaways.",
      "It was slated to be turned into a major Miami development called 'Islandia' until conservationists saved it in 1968."
    ],
    airport: "FLL (1hr drive)",
    flight: "~5h (1 stop)",
    transport: "Boat required",
    days: "1–2",
    avoid: [6, 7, 8, 9, 10],
    popularity: 55,
    uniqueness: 88,
    sfoAccessibility: 55,
    topActivities: ["Snorkeling coral reefs", "Boca Chita Key", "Maritime Heritage Trail"],
    sunriseSunset: "N/A",
    stargazing: { isFriendly: false, spots: "N/A", description: "Proximity to Miami limits dark skies." },
    itinerary: [
      { day: "Day 1", plan: "Dante Fascell Visitor Center. Kayak rental for Florida Bay paddling (3-4 hrs). Glass-bottom boat tour in the afternoon to see the coral reef without getting wet. Evening: watch the sunset from the marina dock." },
      { day: "Day 2", plan: "Boat to Elliott Key (rent or guide). Snorkel the Maritime Heritage Trail shipwrecks. Walk the Hurricane Creek Trail on Elliott Key (short, flat, through hardwood hammock). Swim in the crystal-clear shallows before the return boat." }
    ],
    travelHacks: ["You MUST take a boat to see the park. The mainland visitor center shows you virtually nothing. Book a glass-bottom boat tour or bring/rent your own kayak.", "The Dante Fascell Visitor Center (free entry) rents canoes ($20/hr) and kayaks ($30/hr). Go early — rentals can sell out on weekends.", "The Maritime Heritage Trail shipwrecks require snorkel or dive gear. Visibility is best Nov-April when the water is clearest and wind-chop is lowest.", "Elliott Key has a free campground accessible only by boat. Bring everything including water — there are no services on the island at all.", "Hurricanes damage the coral reef annually. Check nps.gov/bisc for current reef conditions before planning a snorkeling trip. Some zones may be closed for recovery."],
    dosAndDonts: [{ type: "dont", text: "Don't visit without booking a boat out to the keys; the mainland center is just a dock." }],
    redditPosts: [
      { title: "Biscayne — snorkeling above the Maritime Heritage Trail shipwrecks", sub: "r/scuba", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "Six shipwrecks, GPS coordinates, self-guided. The visibility on a calm day is 40+ feet." },
      { title: "Biscayne National Park is 95% water — you MUST take a boat tour", sub: "r/NationalParks", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "There is literally nothing to see from the mainland visitor center. Book the Dante Fascell boat tour." },
      { title: "Camping on Elliott Key — Miami's secret backcountry paradise", sub: "r/camping", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "15 minutes by boat from the visitor center. Crystal clear water. Hammock spots under gumbo limbo trees. Almost no one." }
    ],
    links: {
      nps: "https://www.nps.gov/bisc/",
      lodging: "https://www.tripadvisor.com/Hotels-g34281-Homestead_Florida-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g34281-Homestead_Florida.html",
      activities: "https://recreation.gov/search?q=biscayne",
      roadConditions: "https://www.nps.gov/bisc/planyourvisit/conditions.htm"
    },
    monthlyData: {
      12: { temp: "24°C / 75°F", reservations: "Boat tours must be booked.", reddit: "Water is getting cooler (70s), you might want a light wetsuit for long snorkels." },
      1: { temp: "24°C / 75°F", reservations: "Boat tours must be booked.", reddit: "Excellent weather, no humidity, no bugs on the islands. Perfect sailing conditions." },
      2: { temp: "24°C / 75°F", reservations: "Boat tours must be booked.", reddit: "Manatee viewing near the mainland marina is fantastic this time of year." },
      3: { temp: "26°C / 79°F", reservations: "Boat tours must be booked.", reddit: "Spring break brings some crowds, but since it requires a boat tour, it's artificially limited." },
      4: { temp: "28°C / 82°F", reservations: "Boat tours must be booked.", reddit: "Water warms up beautifully for snorkeling. Last great month before the severe heat and storms begin." }
    },

    redditPosts: [
      { title: "Biscayne — snorkeling above the Maritime Heritage Trail shipwrecks", sub: "r/scuba", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "Six shipwrecks, GPS coordinates, self-guided. The visibility on a calm day is 40+ feet." },
      { title: "Biscayne National Park is 95% water — you MUST take a boat tour", sub: "r/NationalParks", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "There is literally nothing to see from the mainland visitor center. Book the Dante Fascell boat tour." },
      { title: "Camping on Elliott Key — Miami's secret backcountry paradise", sub: "r/camping", url: "https://www.reddit.com/r/Biscayne/top/?t=all", quote: "15 minutes by boat from the visitor center. Crystal clear water. Hammock spots under gumbo limbo trees. Almost no one." }
    ],
    links: {
      nps: "https://www.nps.gov/bisc/",
      lodging: "https://www.tripadvisor.com/Hotels-g34281-Homestead_Florida-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g34281-Homestead_Florida.html",
      activities: "https://recreation.gov/search?q=biscayne",
      roadConditions: "https://www.nps.gov/bisc/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Dry Tortugas",
    seasonalVerdict: { best: "April - June (Calmest seas for ferry and seaplane, best snorkeling clarity).", avoid: "Winter (Strong winds can lead to ferry cancellations and poor underwater visibility)." },
    minDays: 1,
    flightMinutes: 480,
    state: "FL",
    bestMonths: [11, 12, 1, 2, 3, 4],
    funFacts: [
      "Fort Jefferson is the largest brick masonry structure in the Americas, built from 16 million bricks.",
      "The fort was never actually finished nor fully armed because the invention of rifled cannons made brick forts obsolete.",
      "During the Civil War, the remote fort was used as a prison, housing Dr. Samuel Mudd (who set John Wilkes Booth's broken leg).",
      "The name 'Las Tortugas' was given by Ponce de Leon because of the massive amount of sea turtles there.",
      "The park is nearly 70 miles west of Key West and relies entirely on rainwater collection."
    ],
    airport: "Key West (via FLL+drive)",
    flight: "~5h (1 stop) + ferry",
    transport: "Walk + snorkel",
    days: "1",
    avoid: [6, 7, 8, 9],
    popularity: 68,
    uniqueness: 98,
    sfoAccessibility: 40,
    topActivities: ["Fort Jefferson tour", "Snorkeling the moat wall", "Bird watching"],
    sunriseSunset: "Sunrise/Sunset: Spectacular if you camp overnight.",
    stargazing: { isFriendly: true, spots: "Anywhere", description: "70 miles out at sea. Pitch black skies if you camp." },
    itinerary: [
      { day: "Day 1 (Day Trip)", plan: "Board the Yankee Freedom III ferry at 8 AM from Key West. Arrive Ft. Jefferson at 10:30 AM. Ranger-led fort tour (1 hr), then snorkel off the sea wall immediately surrounding the fort. Excellent coral and sea turtles without a boat. Ferry departs 3 PM." },
      { day: "Day 1-2 (Camping)", plan: "Same arrival. Set up camp in the shade of the fort walls. After the day-trippers leave at 3 PM the island belongs to you (about 10 campers max). Night: completely dark skies, sea turtles emerge on the beach, bioluminescent plankton in the moat." }
    ],
    travelHacks: ["The Yankee Freedom III ferry from Key West is $225 per person roundtrip and the only boat service. Book 60+ days in advance for March-May as it sells out completely.", "The 10-boat camping spots at Garden Key fill within minutes of opening (usually November 15 for the following year). Set a recreation.gov alert.", "Bring every single item you need — there are ZERO services on the island beyond a small gift shop. Water, food, shade structures, snorkeling gear required.", "The ferry includes a ranger-led tour of Fort Jefferson. Do it — the military history (Samuel Mudd, Civil War, etc.) is genuinely fascinating and rangers here are exceptional.", "The reefs immediately around the fort are exceptional for snorkeling without a boat — coral walls within 100 feet of the shore in 6-15 feet of water."],
    dosAndDonts: [{ type: "do", text: "Reserve the Yankee Freedom ferry at least 4-6 months in advance. It sells out instantly." }],
    redditPosts: [
      { title: "Dry Tortugas overnight camping — the most surreal experience of my life", sub: "r/camping", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "After the ferry leaves, it\'s you, a handful of other campers, and a Civil War fort in the middle of the Caribbean. Nothing else." },
      { title: "Fort Jefferson and the story of Dr. Samuel Mudd — the most fascinating NPS history", sub: "r/history", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "Mudd set Booth\'s broken leg. He didn\'t know who Booth was. He was imprisoned here for 4 years anyway." },
      { title: "Snorkeling at Dry Tortugas — Caribbean reef in American waters", sub: "r/snorkeling", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "70+ miles from Key West, so rarely visited. Coral is absolutely pristine. Most colorful reef I\'ve seen in the US." }
    ],
    links: {
      nps: "https://www.nps.gov/drto/",
      lodging: "https://www.tripadvisor.com/Hotels-g34345-Key_West_Florida-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g34345-Key_West_Florida.html",
      activities: "https://www.drytortugasferry.com/",
      roadConditions: "https://www.nps.gov/drto/planyourvisit/conditions.htm"
    },
    monthlyData: {
      11: { temp: "26°C / 79°F", reservations: "Yankee Freedom Ferry reservation deeply required.", reddit: "Hurricane season is mostly over. The ferry ride is much smoother now." },
      12: { temp: "24°C / 75°F", reservations: "Ferry reservation required.", reddit: "Water temps drop into the low 70s. Brisk for snorkeling, but crystal clear." },
      1: { temp: "24°C / 75°F", reservations: "Ferry reservation required.", reddit: "Bring a light windbreaker for the 2.5 hour boat ride out there. Very pleasant on the island." },
      2: { temp: "25°C / 77°F", reservations: "Ferry reservation required.", reddit: "Gorgeous. The contrast of the red brick against the turquoise water is unbeatable." },
      3: { temp: "26°C / 79°F", reservations: "Ferry reservation required.", reddit: "The beginning of bird migration season—astounding numbers of birds stop on the island." },
      4: { temp: "28°C / 82°F", reservations: "Ferry reservation required.", reddit: "Water warms back up into the high 70s. Sooty Terns completely take over Bush Key." }
    },

    redditPosts: [
      { title: "Dry Tortugas overnight camping — the most surreal experience of my life", sub: "r/camping", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "After the ferry leaves, it\'s you, a handful of other campers, and a Civil War fort in the middle of the Caribbean. Nothing else." },
      { title: "Fort Jefferson and the story of Dr. Samuel Mudd — the most fascinating NPS history", sub: "r/history", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "Mudd set Booth\'s broken leg. He didn\'t know who Booth was. He was imprisoned here for 4 years anyway." },
      { title: "Snorkeling at Dry Tortugas — Caribbean reef in American waters", sub: "r/snorkeling", url: "https://www.reddit.com/r/DryTortugas/top/?t=all", quote: "70+ miles from Key West, so rarely visited. Coral is absolutely pristine. Most colorful reef I\'ve seen in the US." }
    ],
    links: {
      nps: "https://www.nps.gov/drto/",
      lodging: "https://www.tripadvisor.com/Hotels-g34345-Key_West_Florida-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g34345-Key_West_Florida.html",
      activities: "https://www.drytortugasferry.com/",
      roadConditions: "https://www.nps.gov/drto/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Haleakalā",
    seasonalVerdict: { best: "April - October (Clearer skies for sunrise at the summit, warmer hiking weather).", avoid: "Winter (The summit can experience freezing rain, high winds, and visibility-killing cloud cover)." },
    minDays: 1,
    flightMinutes: 375,
    state: "HI",
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    funFacts: [
      "Haleakalā means 'House of the Sun' in Hawaiian.",
      "The crater is so massive that the entire island of Manhattan could physically fit inside it.",
      "The summit is home to the incredibly rare 'Silversword' plant, which grows for up to 50 years, blooms exactly once, and then dies.",
      "The mountain rises 10,023 feet above sea level, but if measured from its base on the ocean floor, it is taller than Mount Everest.",
      "The summit features an array of astrophysics telescopes because it is above one-third of the earth's atmosphere."
    ],
    airport: "OGG (45min)",
    flight: "~5h 30m direct",
    transport: "Drive to summit",
    days: "1–2",
    avoid: [],
    popularity: 91,
    uniqueness: 95,
    sfoAccessibility: 75,
    topActivities: ["Sunrise at Summit (permit)", "Sliding Sands Trail", "Downhill Bike Tour"],
    sunriseSunset: "Sunrise: Summit (world famous). Sunset: Summit.",
    stargazing: { isFriendly: true, spots: "Summit", description: "World-class. Above the cloud inversion layer." },
    itinerary: [
      { day: "Day 1", plan: "Arrive at the summit by 3:30 AM for sunrise (reservation required). Witness sunrise above the clouds. Descend to the visitor center. Drive back down to the communities of Kula or Makawao for breakfast. Afternoon: hike the Pipiwai Trail in Hana if combining with Road to Hana." },
      { day: "Day 2", plan: "Return to lower elevation park for the Hosmer Grove bird walk (0.5 mi, rare Hawaiian honeycreepers). Drive to summit for sunset (no reservation required). Stay for stars in one of the darkest spots on Maui." }
    ],
    travelHacks: ["Sunrise reservoir permits ($1/car) open 60 days in advance at midnight HST and sell out in as little as 90 seconds. Set a phone alarm and have recreation.gov logged in and ready.", "The summit is at 10,023 feet. Altitude sickness is real — if you feel dizzy or have a bad headache, descend immediately. Drive slowly and take 20 minutes at the visitors center (7,000 ft) before continuing.", "Downhill bike tours (23 miles from summit to coast, $150) are heavily commercialized. Consider renting a standard bike at the bottom and only doing the lower road sections if you want a more authentic experience.", "Paia town on the north shore has the best breakfast on Maui. Hit Café des Amis or Paia Bay Coffee before your 3 AM drive up to the summit.", "Hosmer Grove (6,800 ft, just inside the park entrance) is free to walk and has native Hawaiian birds including the 'apapane and 'amakihi that you won't see at lower elevations."],
    dosAndDonts: [{ type: "do", text: "Bring a heavy winter coat, gloves, and a hat. Yes, in Hawaii. It is 35°F at the summit at dawn." }],
    redditPosts: [
      { title: "Haleakalā sunrise — what it's actually like to stand above the clouds", sub: "r/NationalParks", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "The exact moment the sun clears the horizon and turns the cloud sea pink and gold. I actually cried." },
      { title: "Haleakalā sunrise permit — the complete guide to actually getting one", sub: "r/Maui", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "Book exactly 60 days out at midnight HST. Seriously, set an alarm. They vanish in under 2 minutes." },
      { title: "Biking down Haleakalā — is it actually worth the $150?", sub: "r/bicycling", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "You coast 23 miles downhill from 10,000 feet to sea level barely pedaling. The answer is obviously yes." }
    ],
    links: {
      nps: "https://www.nps.gov/hale/",
      lodging: "https://www.tripadvisor.com/Hotels-g60630-Maui_Hawaii-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60630-Maui_Hawaii.html",
      activities: "https://recreation.gov/search?q=haleakala",
      roadConditions: "https://www.nps.gov/hale/planyourvisit/road-conditions.htm"
    },
    monthlyData: {
      1: { temp: "15°C / 59°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Expect high winds and freezing rain or even snow at the summit. Coastal Kipahulu is very rainy." },
      2: { temp: "16°C / 60°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Similar to January. The drive up in the dark through the cloud layer is intense." },
      3: { temp: "17°C / 62°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Sunrise is incredibly busy for Spring Break. The Sliding Sands trail is a must-do." },
      4: { temp: "18°C / 64°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Temperatures on the crater floor are warming up. Bring tons of water for the hike back up." },
      5: { temp: "20°C / 68°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "The silversword plants start getting ready to bloom. Beautiful clear mornings." },
      6: { temp: "22°C / 72°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Summer means a very thick inversion cloud layer below the summit. Looks like you're on an airplane." },
      7: { temp: "23°C / 74°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Warmest month at the summit, but you still absolutely need a heavy jacket before the sun comes up." },
      8: { temp: "24°C / 75°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Extremely busy with summer tourists. Get the permit strictly exactly 60 days in advance." },
      9: { temp: "22°C / 72°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Crowds drop off. Excellent time for the intense 11-mile crater floor backcountry hike." },
      10: { temp: "20°C / 68°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Very consistent weather. Sunsets are just as good as sunrise and require no permit!" },
      11: { temp: "18°C / 64°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Winter rains begin to return to the lower elevations, but the summit usually pokes through." },
      12: { temp: "16°C / 60°F (Summit)", reservations: "Sunrise Permit Required.", reddit: "Holiday crowds are huge. The Road to Hana (coastal section of the park) will be a traffic jam." }
    },

    redditPosts: [
      { title: "Haleakalā sunrise — what it's actually like to stand above the clouds", sub: "r/NationalParks", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "The exact moment the sun clears the horizon and turns the cloud sea pink and gold. I actually cried." },
      { title: "Haleakalā sunrise permit — the complete guide to actually getting one", sub: "r/Maui", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "Book exactly 60 days out at midnight HST. Seriously, set an alarm. They vanish in under 2 minutes." },
      { title: "Biking down Haleakalā — is it actually worth the $150?", sub: "r/bicycling", url: "https://www.reddit.com/r/Haleakala/top/?t=all", quote: "You coast 23 miles downhill from 10,000 feet to sea level barely pedaling. The answer is obviously yes." }
    ],
    links: {
      nps: "https://www.nps.gov/hale/",
      lodging: "https://www.tripadvisor.com/Hotels-g60630-Maui_Hawaii-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g60630-Maui_Hawaii.html",
      activities: "https://recreation.gov/search?q=haleakala",
      roadConditions: "https://www.nps.gov/hale/planyourvisit/road-conditions.htm"
    },

  },
  {
    name: "Cuyahoga Valley",
    seasonalVerdict: { best: "October (Stunning hardwood fall foliage), June (Lush hiking and waterfalls at peak flow).", avoid: "Winter (Lake effect snow can lead to icy trails and very grey/gloomy visibility)." },
    minDays: 1,
    flightMinutes: 290,
    state: "OH",
    bestMonths: [5, 6, 9, 10],
    funFacts: [
      "The park was created out of heavily polluted industrial land, making it one of the greatest environmental recovery success stories in the US.",
      "The Ohio & Erie Canal Towpath Trail was once used by mules to pull canal boats between Cleveland and Portsmouth.",
      "It is the only national park that features a dedicated scenic train that runs directly through its center.",
      "There are zero entrance gates and over 100 access points, as it intertwines with massive suburbs.",
      "It is a key sanctuary for Great Blue Herons, which nest in massive colonies here."
    ],
    airport: "CLE (30min drive)",
    flight: "~4h 20m (1 stop)",
    transport: "Scenic railroad + bike trail",
    days: "1–2",
    avoid: [12, 1, 2],
    popularity: 60,
    uniqueness: 65,
    sfoAccessibility: 55,
    topActivities: ["Scenic Railroad", "Brandywine Falls", "Ledges Trail"],
    sunriseSunset: "Sunrise: Ledges Overlook. Sunset: Tinkers Creek Gorge.",
    stargazing: { isFriendly: false, spots: "N/A", description: "Too close to Akron and Cleveland for good stargazing." },
    itinerary: [
      { day: "Day 1", plan: "Bike Aboard program: rent a bike at Peninsula, take the train one direction, cycle back on the 20-mile Ohio & Erie Towpath Trail. Brandywine Falls (0.25 mi boardwalk) — most dramatic at high water in spring. Beaver Marsh wildlife boardwalk at dusk." },
      { day: "Day 2", plan: "Ledges area: Ledges Trail (2.2 mi loop) through sandstone formations. Blue Hen Falls (2.1 mi). Kendall Lake area for a picnic. Stanford Trail and Haskell Run to the waterfall for the full park sampler." }
    ],
    travelHacks: ["The Bike Aboard program lets you load your bicycle on the Cuyahoga Valley Scenic Railroad, ride one way, and cycle back. The train runs weekends May-October ($3-5/bike, plus train fare).", "The park has no entrance fee — ever. It's fully free year-round including camping at the three backcountry campsites (permit required, also free).", "Brandywine Falls is the park's most dramatic waterfall. Visit in winter (January-February) when it's at least partially frozen — the boardwalk is accessible year-round.", "The Ohio & Erie Canalway Towpath Trail runs 20 miles through the park. The Ira Trailhead has the best free parking and starts you at the most scenic section.", "The Peninsula village (2 miles off I-271) has great local restaurants and a bike rental shop — much more charming than starting from the Visitor Center."],
    dosAndDonts: [{ type: "do", text: "Check the train schedule online, as it doesn't run every day in shoulder seasons." }],
    redditPosts: [
      { title: "Cuyahoga Valley Scenic Railroad Bike Aboard — the most unique park activity in America", sub: "r/NationalParks", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "Bike one way, put your bike on the train, ride back. Perfect half-day. One of the coolest park programs anywhere." },
      { title: "Cuyahoga Valley as your first NP — why it's the perfect gateway park", sub: "r/ClevelandCycling", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "12,000 acres, waterfalls, great blue heron rookeries, the towpath trail. And totally free to enter." },
      { title: "Brandywine Falls covered in ice in January — spectacular", sub: "r/hiking", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "The 65-foot waterfall partially freezes in hard winters. You can walk right up to it on the boardwalk." }
    ],
    links: {
      nps: "https://www.nps.gov/cuva/",
      lodging: "https://www.tripadvisor.com/Hotels-g50207-Akron_Ohio-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g50207-Akron_Ohio.html",
      activities: "https://www.cvsr.org/",
      roadConditions: "https://www.nps.gov/cuva/planyourvisit/conditions.htm"
    },
    monthlyData: {
      5: { temp: "21°C / 70°F", reservations: "Train tickets required.", reddit: "Spring migration brings tons of birds. Waterfalls are gushing." },
      6: { temp: "26°C / 78°F", reservations: "Train tickets required.", reddit: "Great biking weather. Very lush and green along the canal." },
      9: { temp: "24°C / 75°F", reservations: "Train tickets required.", reddit: "Cooling down, bugs die off. Perfect time for the Ledges trail." },
      10: { temp: "17°C / 62°F", reservations: "Train tickets required.", reddit: "The Fall Colors scenic train rides sell out instantly. Incredible autumnal views." }
    },

    redditPosts: [
      { title: "Cuyahoga Valley Scenic Railroad Bike Aboard — the most unique park activity in America", sub: "r/NationalParks", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "Bike one way, put your bike on the train, ride back. Perfect half-day. One of the coolest park programs anywhere." },
      { title: "Cuyahoga Valley as your first NP — why it's the perfect gateway park", sub: "r/ClevelandCycling", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "12,000 acres, waterfalls, great blue heron rookeries, the towpath trail. And totally free to enter." },
      { title: "Brandywine Falls covered in ice in January — spectacular", sub: "r/hiking", url: "https://www.reddit.com/r/CuyahogaValley/top/?t=all", quote: "The 65-foot waterfall partially freezes in hard winters. You can walk right up to it on the boardwalk." }
    ],
    links: {
      nps: "https://www.nps.gov/cuva/",
      lodging: "https://www.tripadvisor.com/Hotels-g50207-Akron_Ohio-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g50207-Akron_Ohio.html",
      activities: "https://www.cvsr.org/",
      roadConditions: "https://www.nps.gov/cuva/planyourvisit/conditions.htm"
    },

  },
  {
    name: "Kenai Fjords",
    seasonalVerdict: { best: "June - August (Whale watching peak, calmest seas for boat tours, Harding Icefield accessible).", avoid: "Winter (The park road is unplowed, boat tours don't run, and weather is dangerously unpredictable)." },
    minDays: 2,
    flightMinutes: 570,
    state: "AK",
    bestMonths: [6, 7, 8],
    funFacts: [
      "The park is crowned by the Harding Icefield, one of the largest ice fields in the United States, spawning nearly 40 glaciers.",
      "Nearly 60% of the park is covered in solid ice year-round.",
      "Exit Glacier is closely monitored as an indicator of global climate change, constantly retreating up the valley.",
      "The fjords were carved by massive glaciers that later retreated, allowing the ocean to fill the valleys.",
      "It is one of the premier locations on earth to witness orcas hunting and humpback whales bubble-net feeding."
    ],
    airport: "ANC (2.5hr drive)",
    flight: "~7h direct",
    transport: "Boat tours + drive to Exit Glacier",
    days: "2–3",
    avoid: [10, 11, 12, 1, 2, 3, 4],
    popularity: 75,
    uniqueness: 95,
    sfoAccessibility: 65,
    topActivities: ["Glacier Boat Cruise", "Harding Icefield Trail", "Exit Glacier"],
    sunriseSunset: "N/A (Midnight sun in summer)",
    stargazing: { isFriendly: false, spots: "N/A", description: "In summer, it barely gets dark enough to see stars." },
    itinerary: [
      { day: "Day 1", plan: "Exit Glacier (drive-in, free): walk Glacier View Loop (0.8 mi) and Harding Icefield trailhead for the glacier face. Return to Seward for excellent seafood dinner at Chinook's or Thorn's Showcase Lounge." },
      { day: "Day 2", plan: "Full-day Northwestern Fjord boat tour (8-9 hrs, $200-250): two tidewater glaciers calving, Steller sea lion haul-outs, humpback whale bubble-net feeding, puffins, orcas. This is the trip. Book it." }
    ],
    travelHacks: ["Book wildlife boat tours through Kenai Fjords Tours or Major Marine Tours 2-3 months in advance for July-August. The 8-hour Northwestern Fjord tour gives the best glacier and wildlife experience.", "Exit Glacier (free, walk-in) is the only section of the park accessible by road. The Harding Icefield Trail (8.2 mi, 3,800 ft gain) gives an unmatched aerial view of the icefield.", "The town of Seward has excellent accommodations and food 10 minutes from the park. Book lodging in Seward early — the town fills for July 4th weekend months in advance.", "Bear viewing at the boat tour is best in August-September when silver salmon are running. Steller sea lions, orcas, and porpoises are common year-round.", "Weather changes extremely fast in Kenai Fjords. Always pack a waterproof shell regardless of the forecast — the fjords create their own micro-weather system."],
    dosAndDonts: [{ type: "do", text: "Take motion sickness pills BEFORE you get on the boat, even if you never get sick." }],
    redditPosts: [
      { title: "Kenai Fjords boat tour — humpback whales bubble-net feeding changed my life", sub: "r/Alaska", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "A group of humpbacks corkscrewing up through a ball of fish 30 feet from our boat. Closest I\'ve come to crying in public." },
      { title: "Harding Icefield hike — the deceptively brutal trail with the best views in Alaska", sub: "r/hiking", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "8.2 miles, 3,800ft elevation gain. The icefield at the top stretches to the horizon. Truly humbling." },
      { title: "Exit Glacier in August vs 1917 — the retreat is staggering up close", sub: "r/climate", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "The historical markers showing where the glacier edge was each decade are gut-wrenching. Go before it\'s gone." }
    ],
    links: {
      nps: "https://www.nps.gov/kefj/",
      lodging: "https://www.tripadvisor.com/Hotels-g33220-Seward_Alaska-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g33220-Seward_Alaska.html",
      activities: "https://www.kenaifjords.com/",
      roadConditions: "https://www.nps.gov/kefj/planyourvisit/conditions.htm"
    },
    monthlyData: {
      6: { temp: "14°C / 57°F", reservations: "Advance booking required for boat tours out of Seward.", reddit: "Whale migrations are in full swing. The Harding Icefield trail will still be buried in deep snow." },
      7: { temp: "16°C / 60°F", reservations: "Boat tours must be booked months in advance.", reddit: "Peak season. Warmest month, but still frigid on the water near the calving glaciers." },
      8: { temp: "15°C / 59°F", reservations: "Boat tours strongly advised.", reddit: "Silver salmon fishing is huge right now. Rain frequency starts to heavily increase toward the end of August." }
    },

    redditPosts: [
      { title: "Kenai Fjords boat tour — humpback whales bubble-net feeding changed my life", sub: "r/Alaska", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "A group of humpbacks corkscrewing up through a ball of fish 30 feet from our boat. Closest I\'ve come to crying in public." },
      { title: "Harding Icefield hike — the deceptively brutal trail with the best views in Alaska", sub: "r/hiking", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "8.2 miles, 3,800ft elevation gain. The icefield at the top stretches to the horizon. Truly humbling." },
      { title: "Exit Glacier in August vs 1917 — the retreat is staggering up close", sub: "r/climate", url: "https://www.reddit.com/r/KenaiFjords/top/?t=all", quote: "The historical markers showing where the glacier edge was each decade are gut-wrenching. Go before it\'s gone." }
    ],
    links: {
      nps: "https://www.nps.gov/kefj/",
      lodging: "https://www.tripadvisor.com/Hotels-g33220-Seward_Alaska-Hotels.html",
      dining: "https://www.tripadvisor.com/Restaurants-g33220-Seward_Alaska.html",
      activities: "https://www.kenaifjords.com/",
      roadConditions: "https://www.nps.gov/kefj/planyourvisit/conditions.htm"
    },
  },
];

window.PARKS_DATA = _PARKS_RAW;
