// ============ National Parks Enriched Data (Monthly Granularity) ============
const _PARKS_RAW = [
  {
    name: "Zion",
    minDays: 2,
    flightMinutes: 75,
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
    flight: "~1h 15m SFO→LAS (Southwest)",
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
    travelHacks: [ "In 2026, the park shuttle is free — arrive before 7 AM to board directly without waiting. By 9 AM lines can be 45+ minutes.", "Rent an e-bike in Springdale ($60-80/day) to entirely bypass the shuttle system and explore at your own pace.", "Book the Angels Landing permit via the day-before lottery on recreation.gov — far less competitive than the seasonal lottery. Apply every night starting one week before your hike.", "The Canyon Overlook Trail (1 mile, easy) is never crowded and gives stunning rim-level views without a permit or shuttle.", "June 7, 2026 onward: vehicle size and weight restrictions apply on Zion-Mt. Carmel Hwy. Check NPS.gov if driving a large RV or truck." ],
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
    minDays: 2,
    flightMinutes: 105,
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
    flight: "~1h 45m SFO→PHX (Southwest)",
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
    travelHacks: [ "Pick up entrance passes in advance on recreation.gov to skip the often 30-45 minute gate line, especially on spring weekends.", "The Hermit Road is closed to private vehicles year-round. Use the free red route shuttle — the Hopi Point stop is the best sunset spot.", "The Phantom Ranch canteen sells beer and lemonade. You don't need a cabin reservation to walk down and buy one — ideal for day hikers on Bright Angel.", "Start any rim-to-river hike no later than 6 AM in spring/fall, 4 AM in summer. The heat multiplies every 1,000 feet you descend.", "Bright Angel Campground does not require a lottery — only cabin stays at Phantom Ranch do. Reserve backcountry permits separately." ],
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
    minDays: 2,
    flightMinutes: 100,
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
    flight: "~1h 40m SFO→SLC (Southwest)",
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
    travelHacks: [ "As of 2026, timed entry reservations are no longer required. Arrive before 8 AM or after 4 PM to avoid peak parking congestion at Delicate Arch trailhead.", "Fiery Furnace still requires a $10 permit per person (self-guided) or a ranger-led tour. Book on recreation.gov — they still sell out.", "Carry 4+ liters of water on any hike April through October. There is zero water on trail beyond the visitor center.", "Drive Devils Garden at dawn — the slickrock glows deep red and the parking lot hasn't filled yet. The Landscape Arch trail is best done before 9 AM.", "Check the park webcam ( nps.gov/arch) before driving in — when the parking areas are full, rangers implement temporary closures at the entrance." ],
    dosAndDonts: [ { type: "do", text: "Stay on the trail to protect the fragile biological soil crust." } ],
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
    minDays: 3,
    flightMinutes: 0,
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
    flight: "Drive from SFO (~3.5hr, no flight needed)",
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
    travelHacks: [ "No vehicle reservation required in 2026, but parking still fills by 8 AM. Bring a bicycle — the 12-mile valley loop is faster and way more enjoyable than driving.", "Pay the $35 entrance fee online on recreation.gov in advance to skip the gate line. Mobile passes work at all entry points.", "Half Dome permit lottery opens in February for the full season. If you miss it, watch recreation.gov daily — cancelled permits are re-released at 7 AM each morning.", "The Mist Trail is significantly more crowded than the John Muir Trail but shares the same waterfalls. Go up Mist, down John Muir for variety with zero backtracking.", "Tioga Pass opens around Memorial Day weekend depending on snowpack. Check nps.gov/yose before planning a Tuolumne Meadows trip." ],
    dosAndDonts: [ { type: "do", text: "Empty your car entirely of food and scented items due to bears." } ],
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
    minDays: 2,
    flightMinutes: 135,
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
    flight: "~2h 15m SFO→DEN (Southwest)",
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
    travelHacks: [ "In 2026, timed entry is required May 22–Oct 12 from 9 AM–2 PM ($2/vehicle). You can enter freely before 9 AM or after 2 PM — both are actually great times to be in the park.", "Bear Lake Road requires its own separate timed entry permit (5 AM–6 PM). Book it the same day as your regular permit or early morning entry becomes your best bet.", "Reserve permits on recreation.gov starting May 1 for May/June dates. Set a 7:59 AM alarm — they go live at 8 AM and sell out in minutes.", "For elk rut (mid-Sep to mid-Oct), drive Moraine Park Road before sunrise and stay in your car. Bulls are extremely aggressive during rut season.", "Trail Ridge Road summit closes in bad weather — check nps.gov/romo before driving up. The Alpine Visitor Center makes a good turnaround point if the summit is socked in." ],
    dosAndDonts: [ { type: "do", text: "Be off exposed peaks and ridges before noon to avoid deadly summer lightning." } ],
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
    minDays: 2,
    flightMinutes: 135,
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
    flight: "~2h 15m SFO→SEA (Southwest)",
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
    travelHacks: [ "The park has no central hub — plan your route by ecosystem. Rainforest (Hoh), Alpine (Hurricane Ridge), and Coast (Rialto/Ruby) are each 2+ hours apart.", "Hurricane Ridge Road is open Fridays through Sundays year-round, plus daily in summer. Check nps.gov/olym before driving up — it closes for snow/ice with no warning.", "Check tide tables before visiting the coast. Hole-in-the-Wall at Rialto Beach is cut off at high tide, and Second and Third Beach have tide-dependent sea stacks.", "The Hoh Rain Forest day-use parking fills by 10 AM in summer. Get there before 8:30 AM or be prepared for a 2-hour parking queue on the access road.", "Sol Duc Hot Springs is a hidden Olympic gem that most visitors skip. The nearby Sol Duc Falls trail (1.6 mi) is one of the park's best easy hikes." ],
    dosAndDonts: [ { type: "do", text: "Bring rain gear even in August. It's a rainforest." } ],
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
    minDays: 3,
    flightMinutes: 140,
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
    flight: "~2h 20m SFO→SLC + shuttle (Southwest)",
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
    travelHacks: [ "Download the GeyserTimes app (free, works offline) and check eruption predictions for major geysers. Grand Geyser erupts every 8-12 hours — you can time your arrival.", "Enter from the South (Flagg Ranch) or East gates to avoid the notoriously jammed West and North entrances, especially in summer.", "Wildlife jams can stall traffic for hours — always carry binoculars, snacks, and patience. The worst jams are on Lamar Valley Road at dawn.", "Book lodges inside the park 12-13 months in advance. All Yellowstone lodges open reservations on the same date — set a calendar reminder.", "The boardwalk trails at Grand Prismatic and Midway Geyser Basin get the best aerial perspective from the Fairy Falls trailhead overlook, not the boardwalk itself (1.2 mi hike)." ],
    dosAndDonts: [ { type: "dont", text: "DO NOT approach the bison. They are incredibly fast and dangerous." } ],
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
    minDays: 3,
    flightMinutes: 150,
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
    flight: "~2h 30m SFO→GEG or MSO (Southwest)",
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
    travelHacks: [ "In 2026, no vehicle reservation is needed. However, a ticketed shuttle is now required to access the Going-to-the-Sun Road corridor. Purchase shuttle tickets in advance at recreation.gov.", "Logan Pass parking has a 3-hour limit starting July 1, 2026. Take the early express shuttle instead — it gets you there before crowds with no parking stress.", "Enter before 6 AM to access the park before shuttle ticketing begins, which gives you access to Logan Pass trailheads without needing a shuttle ticket.", "Bear spray is mandatory — not optional — in Glacier. Grizzlies outnumber black bears. Buy at any park store ($45) or many Whitefish/Kalispell retailers.", "Many Glacier area (east side) has shorter shuttle queues and fewer crowds than the west side. Grinnell Glacier and Iceberg Lake trails start here." ],
    dosAndDonts: [ { type: "do", text: "Always hike with bear spray in an accessible holster, not buried in your pack." } ],
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
    minDays: 2,
    flightMinutes: 75,
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
    flight: "~1h 15m SFO→LAS (Southwest)",
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
    travelHacks: [ "Drive Artists Drive in the late afternoon (3-5 PM). The low-angle sun hits the painted hills from the west, turning them every shade of red, purple, and green.", "For the Racetrack Playa and Ubehebe Crater, fill your gas tank at Panamint Springs — it's the last gas station before a 2-3 hour drive on washboard dirt road.", "Mesquite Flat Sand Dunes are best shot at sunrise or sunset. The light rakes across the ripple patterns. Arrive 30 minutes before sunrise for footprint-free sand.", "Badwater Basin is accessible by car and requires only a short walk. Do it at night in winter — laying on the salt flat under stars with no light pollution is extraordinary.", "Mosaic Canyon (near Stovepipe Wells) is rarely visited but has smooth marble narrows you can slot-canyon scramble for free without any permits." ],
    dosAndDonts: [ { type: "dont", text: "DO NOT hike after 10 AM between May and September. People literally die from heat stroke." } ],
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
    minDays: 2,
    flightMinutes: 300,
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
    flight: "~5h SFO→BOS + 4hr drive (1 stop)",
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
    travelHacks: [ "Cadillac Mountain Summit Road requires a vehicle reservation ($6 + entry fee) May 20 – Oct 25, 2026, sunrise to sunset. Book on recreation.gov. 70% of spots release 2 days before — check at 10 AM ET.", "Use the free Island Explorer bus from Bar Harbor to reach Jordan Pond, Eagle Lake, and Sieur de Monts. Parking at Jordan Pond fills by 9 AM.", "Beehive and Precipice Trails are closed mid-spring through July/August for peregrine falcon nesting. Check nps.gov/acad for exact closure dates before planning.", "Acadia's carriage road system (45 miles) is perfect for cycling. Rent bikes from Bar Harbor Bicycle Shop and access directly from town via the Village Connector path.", "Bass Harbor Head Lighthouse is technically in the park but on private property. Park in the small lot and visit the south-facing rocks below for the classic framed-by-spruce-trees shot at sunset." ],
    dosAndDonts: [ { type: "do", text: "Reserve Cadillac Summit Road permits for sunrise 90 days in advance." } ],
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
    minDays: 2,
    flightMinutes: 70,
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
    flight: "~1h 10m SFO→LAX or ONT (Southwest)",
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
    travelHacks: [ "The park has no water sources. Every trailhead has a sign stating the water deficit — carry a minimum of 1 liter per mile in spring, 2 liters per mile in summer.", "The West entrance has the longest queues. Enter from the North (29 Palms) or South (Cottonwood) entrances for quick access to the park interior.", "Cell service is extremely limited. Download offline Google Maps and the NPS Joshua Tree app before arriving. Many trailheads are marked incorrectly on regular GPS.", "Check the NPS wildflower hotline (760-367-5522) in February-March. After winter rains, desert wildflower blooms can cover entire sections of the park.", "Rock climbing permits are not required for most routes. Visit the Mountain Project app or Nomad Ventures (in-park) for route beta." ],
    dosAndDonts: [ { type: "dont", text: "Don't depend on GPS. Pre-download Google Maps." } ],
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
    minDays: 2,
    flightMinutes: 140,
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
    flight: "~2h 20m SFO→SLC + 4hr drive (Southwest)",
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
    travelHacks: [ "Moose-Wilson Road (between Teton Village and Moose) is closed to RVs and trailers and is the single best road in the park for wildlife. Drive it slowly at dawn and dusk.", "Buy bear spray at Costco in Jackson ($30-35) before arriving — park stores charge $50+. It's required for Cascade Canyon and backcountry trails.", "The Jenny Lake Boathouse shuttle boat saves 2 miles of flat trail each way — worth the $18 roundtrip to go straight to Hidden Falls and Inspiration Point.", "Schwabacher Landing is free, unmarked, and requires a short dirt road drive south of Moose. Dawn light on the Teton reflection in the beaver ponds is one of the best sunrise shots in the NPS.", "Delta Lake (9 mi roundtrip, 2,900 ft gain) requires an early 5 AM start — the boulder field section takes longer than expected, and afternoon thunderstorms are common." ],
    dosAndDonts: [ { type: "do", text: "Drive Moose-Wilson Road early morning or late evening to guarantee moose sightings." } ],
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
    minDays: 2,
    flightMinutes: 240,
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
    flight: "~4h SFO→BNA + 3.5hr drive (Southwest)",
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
    travelHacks: [ "The park is free to enter but a parking tag ($5/day, $15/week) is required at major trailheads. Buy it in advance on recreation.gov or risk an expensive ticket.", "Cades Cove Loop Road is closed to cars until 10 AM on Wednesdays (late May–late September) and all day Saturdays — bike or walk the full 11-mile loop in peace.", "Synch firefly lottery (r/NationalParks): apply in April for the June event. Applications open for only a few days and 5,000+ people apply for 700 spots.", "The Alum Cave Trail (4.4 mi roundtrip to Arch Rock, 10 mi to LeConte) is the park's best all-purpose trail — dramatic geology, waterfalls, and high elevation views.", "Avoid Gatlinburg entirely on fall foliage weekends (mid-Oct). Clingmans Dome and Newfound Gap roads become parking lots. Stay in Bryson City (NC side) instead." ],
    dosAndDonts: [ { type: "do", text: "Buy an annual parking tag if you're staying more than 2 days." } ],
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
    minDays: 2,
    flightMinutes: 285,
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
    flight: "~4h 45m SFO→IAD (1 stop, Southwest)",
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
    travelHacks: [ "Old Rag Mountain requires a $2 day-use ticket per person (recreation.gov), good for all 3 connector trails. Tickets release 30 days out at 10 AM ET and 400 more release 5 days out — both sell out fast.", "The Skyline Drive speed limit is 35 mph and strictly enforced. Budget 3-4 hours to drive the entire 105 miles, including stops at the best overlooks.", "Bearfence Mountain (off mile 56 on Skyline Drive) is a 20-minute scramble to a rock summit with 360° views — one of the best bang-for-buck hikes in the entire park.", "Fall color peak is typically Oct 12-22 (north district) and Oct 18-28 (south). Check NPS webcams at dawn — fog in the valleys with colored trees above it is spectacular.", "The park has 4 campgrounds that do not require timed entry, but Mathews Arm, Loft Mountain, and Big Meadows fill by noon on October weekends. Arrive the night before." ],
    dosAndDonts: [ { type: "do", text: "Get the day-use ticket for Old Rag online before you arrive." } ],
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
    minDays: 2,
    flightMinutes: 135,
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
    flight: "~2h 15m SFO→SEA + 2hr drive (Southwest)",
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
    travelHacks: [ "The park has NO entrance fee — Highway 20 simply passes through it. There's no entrance gate or ticket booth.", "Sahale Arm backcountry camp requires a permit from recreation.gov. Apply as soon as they open (usually March or April) as the site fills for all of July and August.", "Check WTA.org (Washington Trails Association) for current trail conditions. Major trails above 5,500 ft often have snow through mid-August.", "Maple Pass Loop in late September during golden larch season is the most popular hike in the park — arrive by 7 AM. The trailhead lot fits only 30 cars.", "The Diablo Lake Overlook is 15 seconds off Highway 20. The turquoise color from rock flour is real — you'll stop the car in genuine disbelief." ],
    dosAndDonts: [ { type: "do", text: "Check trail trip reports (WTA.org) for snow levels. High trails hold snow into August." } ],
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
    minDays: 1,
    flightMinutes: 105,
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
    flight: "~1h 45m SFO→TUS direct",
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
    travelHacks: [ "The park is split by Tucson into East (Rincon Mountain) and West (Tucson Mountain) districts — visit both if you have a second day. West has older, denser cacti.", "Gates Pass Road (just outside the west district) is free and has arguably better saguaro scenery than sections inside the paid park boundary.", "The Arizona-Sonora Desert Museum (2 miles from the west entrance) is not technically part of the park — separately ticketed, but it's voted #1 thing to do in Tucson. Do it first.", "Carry a blacklight flashlight on any evening walk. Scorpions glow bright green-yellow under UV light. There are far more than you think near rocks and logs.", "Visit in late April-May for the saguaro bloom — giant white flowers appear only at night and close by morning. Spot them at dawn before the heat wilts them." ],
    dosAndDonts: [ { type: "do", text: "Carry a blacklight at night to easily spot the glowing scorpions." } ],
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
    minDays: 2,
    flightMinutes: 310,
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
    flight: "~5h SFO→FLL or MIA (1 stop, Southwest)",
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
    travelHacks: [ "The dry season (Nov-April) is the only time the park is safely visitable for most people. Mosquito levels in May-October are described by rangers as 'beyond tolerance'.", "The Anhinga Trail (0.8 mi) has a higher wildlife density per foot than almost anywhere in North America — do it first, at dawn, when anhingas are perched and spreading wings.", "Airboat tours operate OUTSIDE the park boundary. Shark Valley Tram or bicycle rental ($35 for 2hrs) gives a proper in-park experience on official trails.", "Flamingo Visitor Center (the end of the main road) is 38 miles into the park. Bring lunch — there are no food services and camping requires advance booking.", "Florida Bay in winter (Dec-Feb) has spectacular birdwatching from Eco Pond and the Flamingo area. Roseate spoonbills, herons, and ospreys are common sightings." ],
    dosAndDonts: [ { type: "dont", text: "Don't even attempt visiting between May and October without a head-to-toe mosquito net." } ],
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
    minDays: 2,
    flightMinutes: 75,
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
    flight: "~1h 15m SFO→LAS + 2.5hr drive (Southwest)",
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
    travelHacks: [ "Start the Navajo Loop at Wall Street (the steep section) and go down, connecting to Queens Garden Trail to come back up. Going the reverse direction is significantly harder.", "The park sits at 8,000-9,100 ft elevation. Even in summer, temperatures can drop below freezing overnight — pack more layers than you think you need.", "Shuttle service is free and runs May through early October. Use it to avoid the Sunrise/Sunset/Inspiration Point parking scramble.", "Book the ranger-led astronomy programs in advance (free but fill up). Bryce's skies are among the best in the US — over 7,500 stars visible to the naked eye.", "Bryce Canyon City (outside the south entrance) has lodging far cheaper than inside the park. Bryce Canyon Grand Hotel is particularly well reviewed for the price." ],
    dosAndDonts: [ { type: "do", text: "Pack layers. At 8,000 feet, mornings are freezing even in July." } ],
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
    minDays: 2,
    flightMinutes: 75,
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
    flight: "~1h 15m SFO→LAS + 4.5hr drive (Southwest)",
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
    travelHacks: [ "Lehman Caves tours sell out quickly — book on recreation.gov exactly 30 days in advance at 7 AM PT. They release daily slots and peak summer tours vanish in seconds.", "There is zero cell service anywhere in or near the park. Download offline maps and the NPS Great Basin app before arrival.", "Fill your gas tank in Baker (12 miles east) or Ely (70 miles east). There is no fuel in the park.", "Wheeler Peak Scenic Drive opens around Memorial Day (snow-dependent). The drive to 10,000 ft takes 20 minutes and opens access to the Bristlecone Pine trail and glacier.", "The Great Basin Astronomy Festival in September is free. Ranger-telescopes let you see Saturn's rings, Jupiter's moons, and deep-sky nebulae from the darkest park in the lower 48." ],
    dosAndDonts: [ { type: "do", text: "Fill up your gas tank in Baker or Ely before entering; there is no gas in the park." } ],
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
    minDays: 2,
    flightMinutes: 90,
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
    flight: "~1h 30m SFO→RDM or MFR (Southwest)",
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
    travelHacks: [ "Check the NPS Crater Lake webcam at nps.gov/crla before making the drive up — the lake is occasionally obscured by fog or smoke for days at a time.", "Wizard Island boat tours sell out months in advance. Book immediately when summer windows open (usually March). There is no standby option.", "The 33-mile Rim Drive is best driven clockwise starting from Steel Visitor Center — this keeps the lake views to your left (driver's side) for easier sightseeing.", "Cleetwood Cove is the only legal access to the water. The 1-mile descent (11% grade) is easy going down; allow double the time for the brutal climb back up in hot sun.", "Crater Lake Lodge has rooms with a direct view over the caldera. Book exactly 12 months in advance — the window-view rooms sell out in minutes." ],
    dosAndDonts: [ { type: "do", text: "Hike Cleetwood Cove if you want to touch the water—it's the ONLY legal access point." } ],
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
    minDays: 4,
    flightMinutes: 260,
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
    flight: "~4h 20m SFO→DTW + flight/ferry (1 stop)",
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
    travelHacks: [ "Book your ferry (Rock Harbor or Copper Harbor) or seaplane (Houghton) months in advance — the seaplane from Houghton is $350 each way but saves 6 nausea-inducing hours on Lake Superior.", "Backcountry trips require advance permit registration (free, but required in 2026). Reserve sites at nps.gov/isro. Sites fill for July-August by early spring.", "Treat ALL water on the island — moose and wolf tapeworm (Echinococcus granulosus) is present in the lakes. Use a filter or iodine, no exceptions.", "Thimbleberries (a native raspberry-like fruit) ripen in late August along trail edges. They're edible and delicious — pick and eat freely.", "The island closes to public access October 31 and reopens late April. The exact date varies by ferry schedule — confirm on nps.gov/isro." ],
    dosAndDonts: [ { type: "do", text: "Treat ALL water. Tapeworms transmitted by moose and wolves are present in the lakes." } ],
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
    minDays: 3,
    flightMinutes: 185,
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
    flight: "~3h SFO→SAT + 5hr drive (Southwest)",
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
    travelHacks: [ "Boquillas Port of Entry (cross to Mexico) is open Wed-Sun, 9 AM–6 PM. Bring your passport and some US dollar bills for the rowboat crossing ($5) and village snacks.", "The park has some of the worst conditions for cell service in the US. Download offline maps, the NPS app, and a weather radar app before leaving Terlingua.", "Rio Grande Village has the park's only gas station. Fill up there before driving remote dirt roads like Old Maverick Road or the River Road.", "Check the night sky forecast at darksky.org before your trip. Big Bend has the lowest light pollution of any lower-48 national park — when the moon is new, the Milky Way casts visible shadows.", "Chisos Basin lodge and campsite reservations should be made 6-12 months in advance for spring visits. The Basin is the most popular area and fills for March and April far in advance." ],
    dosAndDonts: [ { type: "do", text: "Carry tweezers. Everything in the Chihuahuan desert has spikes, thorns, or fangs." } ],
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
    minDays: 1,
    flightMinutes: 310,
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
    flight: "~5h SFO→MIA or FLL (1 stop, Southwest)",
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
    travelHacks: [ "You MUST take a boat to see the park. The mainland visitor center shows you virtually nothing. Book a glass-bottom boat tour or bring/rent your own kayak.", "The Dante Fascell Visitor Center (free entry) rents canoes ($20/hr) and kayaks ($30/hr). Go early — rentals can sell out on weekends.", "The Maritime Heritage Trail shipwrecks require snorkel or dive gear. Visibility is best Nov-April when the water is clearest and wind-chop is lowest.", "Elliott Key has a free campground accessible only by boat. Bring everything including water — there are no services on the island at all.", "Hurricanes damage the coral reef annually. Check nps.gov/bisc for current reef conditions before planning a snorkeling trip. Some zones may be closed for recovery." ],
    dosAndDonts: [ { type: "dont", text: "Don't visit without booking a boat out to the keys; the mainland center is just a dock." } ],
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
    minDays: 1,
    flightMinutes: 310,
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
    flight: "~5h SFO→FLL + ferry/plane (1 stop)",
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
    travelHacks: [ "The Yankee Freedom III ferry from Key West is $225 per person roundtrip and the only boat service. Book 60+ days in advance for March-May as it sells out completely.", "The 10-boat camping spots at Garden Key fill within minutes of opening (usually November 15 for the following year). Set a recreation.gov alert.", "Bring every single item you need — there are ZERO services on the island beyond a small gift shop. Water, food, shade structures, snorkeling gear required.", "The ferry includes a ranger-led tour of Fort Jefferson. Do it — the military history (Samuel Mudd, Civil War, etc.) is genuinely fascinating and rangers here are exceptional.", "The reefs immediately around the fort are exceptional for snorkeling without a boat — coral walls within 100 feet of the shore in 6-15 feet of water." ],
    dosAndDonts: [ { type: "do", text: "Reserve the Yankee Freedom ferry at least 4-6 months in advance. It sells out instantly." } ],
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
    minDays: 1,
    flightMinutes: 330,
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
    flight: "~5h 30m SFO→OGG direct (Southwest)",
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
    travelHacks: [ "Sunrise reservoir permits ($1/car) open 60 days in advance at midnight HST and sell out in as little as 90 seconds. Set a phone alarm and have recreation.gov logged in and ready.", "The summit is at 10,023 feet. Altitude sickness is real — if you feel dizzy or have a bad headache, descend immediately. Drive slowly and take 20 minutes at the visitors center (7,000 ft) before continuing.", "Downhill bike tours (23 miles from summit to coast, $150) are heavily commercialized. Consider renting a standard bike at the bottom and only doing the lower road sections if you want a more authentic experience.", "Paia town on the north shore has the best breakfast on Maui. Hit Café des Amis or Paia Bay Coffee before your 3 AM drive up to the summit.", "Hosmer Grove (6,800 ft, just inside the park entrance) is free to walk and has native Hawaiian birds including the 'apapane and 'amakihi that you won't see at lower elevations." ],
    dosAndDonts: [ { type: "do", text: "Bring a heavy winter coat, gloves, and a hat. Yes, in Hawaii. It is 35°F at the summit at dawn." } ],
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
    minDays: 1,
    flightMinutes: 260,
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
    flight: "~4h 20m SFO→CLE (1 stop, Southwest)",
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
    travelHacks: [ "The Bike Aboard program lets you load your bicycle on the Cuyahoga Valley Scenic Railroad, ride one way, and cycle back. The train runs weekends May-October ($3-5/bike, plus train fare).", "The park has no entrance fee — ever. It's fully free year-round including camping at the three backcountry campsites (permit required, also free).", "Brandywine Falls is the park's most dramatic waterfall. Visit in winter (January-February) when it's at least partially frozen — the boardwalk is accessible year-round.", "The Ohio & Erie Canalway Towpath Trail runs 20 miles through the park. The Ira Trailhead has the best free parking and starts you at the most scenic section.", "The Peninsula village (2 miles off I-271) has great local restaurants and a bike rental shop — much more charming than starting from the Visitor Center." ],
    dosAndDonts: [ { type: "do", text: "Check the train schedule online, as it doesn't run every day in shoulder seasons." } ],
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
    minDays: 2,
    flightMinutes: 420,
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
    flight: "~7h SFO→ANC (direct or 1 stop)",
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
    travelHacks: [ "Book wildlife boat tours through Kenai Fjords Tours or Major Marine Tours 2-3 months in advance for July-August. The 8-hour Northwestern Fjord tour gives the best glacier and wildlife experience.", "Exit Glacier (free, walk-in) is the only section of the park accessible by road. The Harding Icefield Trail (8.2 mi, 3,800 ft gain) gives an unmatched aerial view of the icefield.", "The town of Seward has excellent accommodations and food 10 minutes from the park. Book lodging in Seward early — the town fills for July 4th weekend months in advance.", "Bear viewing at the boat tour is best in August-September when silver salmon are running. Steller sea lions, orcas, and porpoises are common year-round.", "Weather changes extremely fast in Kenai Fjords. Always pack a waterproof shell regardless of the forecast — the fjords create their own micro-weather system." ],
    dosAndDonts: [ { type: "do", text: "Take motion sickness pills BEFORE you get on the boat, even if you never get sick." } ],
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
