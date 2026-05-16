/**
 * Discord Server Channel Automation Script
 * 
 * This script automates the creation of channels for your National Park Finder community.
 * It creates categories and channels for all 63 parks and 12 months.
 * 
 * Prerequisites:
 * 1. Create a Discord Server.
 * 2. Go to Discord Developer Portal (https://discord.com/developers/applications)
 * 3. Create a New Application -> Go to "Bot" -> "Reset Token" to get your BOT_TOKEN.
 * 4. Invite the bot to your server (OAuth2 -> URL Generator -> Scopes: bot, Permissions: Manage Channels).
 * 5. Get your Server ID (GUILD_ID) by right-clicking your server icon and selecting "Copy Server ID" (requires Developer Mode on in Discord settings).
 * 
 * Usage:
 * node scripts/setup-discord.js <YOUR_BOT_TOKEN> <YOUR_GUILD_ID>
 */

const fs = require('fs');
const path = require('path');

const token = process.argv[2];
const guildId = process.argv[3];

if (!token || !guildId) {
  console.error("❌ Missing arguments.");
  console.error("Usage: node setup-discord.js <BOT_TOKEN> <GUILD_ID>");
  process.exit(1);
}

// Load parks data
const parksDataPath = path.join(__dirname, '../data/parks-summary.js');
let parksDataContent = fs.readFileSync(parksDataPath, 'utf8');
// Extract just the JSON part
const match = parksDataContent.match(/window\.PARKS_SUMMARY\s*=\s*(\{[\s\S]*?\});/);
if (!match) {
  console.error("❌ Could not parse parks-summary.js");
  process.exit(1);
}

const parks = Object.values(eval(`(${match[1]})`));
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const headers = {
  'Authorization': `Bot ${token}`,
  'Content-Type': 'application/json'
};

const BASE_URL = `https://discord.com/api/v10/guilds/${guildId}/channels`;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createChannel(name, type, parentId = null) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: name,
        type: type, // 4 for category, 0 for text channel, 15 for forum
        parent_id: parentId
      })
    });

    if (response.status === 429) {
      const data = await response.json();
      console.log(`⚠️ Rate limited. Waiting ${data.retry_after}s...`);
      await delay(data.retry_after * 1000 + 1000);
      return createChannel(name, type, parentId); // Retry
    }

    if (!response.ok) {
      const error = await response.text();
      console.error(`❌ Failed to create ${name}:`, error);
      return null;
    }

    const data = await response.json();
    console.log(`✅ Created: ${name}`);
    return data.id;
  } catch (err) {
    console.error(`❌ Error creating ${name}:`, err);
    return null;
  }
}

async function setupServer() {
  console.log("🚀 Starting Discord Server Setup...");

  // 1. Create General Category & Channels
  const generalCategoryId = await createChannel("General & Planning", 4);
  if (generalCategoryId) {
    await createChannel("general-chat", 0, generalCategoryId);
    await createChannel("trip-reports", 0, generalCategoryId);
    await createChannel("gear-talk", 0, generalCategoryId);
  }
  await delay(1000);

  // 2. Create Travel Buddy Months
  const monthsCategoryId = await createChannel("Find Travel Buddies", 4);
  if (monthsCategoryId) {
    for (const month of months) {
      await createChannel(`planning-${month}`, 0, monthsCategoryId);
      await delay(500); // Avoid rate limits
    }
  }
  await delay(1000);

  // 3. Create Park Forums
  // Instead of 63 standard text channels which clutters the sidebar massively,
  // we use Discord's Forum channel type (type 15) for Parks, where each park is a TAG or we create a Category with channels.
  // Wait, standard Discord servers only support up to 500 channels, so 63 channels is fine. Let's group them alphabetically to be clean.
  
  const parksAlphabetical = parks.sort((a, b) => a.name.localeCompare(b.name));
  
  // Create categories for A-F, G-M, N-S, T-Z to keep it organized (Discord limits 50 channels per category)
  const groups = [
    { name: "Parks A-F", regex: /^[A-F]/i },
    { name: "Parks G-M", regex: /^[G-M]/i },
    { name: "Parks N-S", regex: /^[N-S]/i },
    { name: "Parks T-Z", regex: /^[T-Z]/i },
  ];

  for (const group of groups) {
    const categoryId = await createChannel(group.name, 4);
    if (!categoryId) continue;

    const groupParks = parksAlphabetical.filter(p => group.regex.test(p.name));
    for (const park of groupParks) {
      // Format park name for Discord (lowercase, dashes instead of spaces)
      const channelName = park.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      await createChannel(channelName, 0, categoryId);
      await delay(500); // 2 requests per second to avoid rate limits
    }
    await delay(1000);
  }

  console.log("🎉 Setup Complete!");
}

setupServer();
