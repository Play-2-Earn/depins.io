// products.js
export const products = [
  {
    id: "1",
    title: "DIMO x Macaron - Drive & Earn",
    price: 100.83,
    image: "/DimoXMacron.jpg",
    description: "Connect DIMO, collect data, earn money",
    category: "Vehicle",
    tagline: "Transform Your Car Into a Data-Earning Machine",
    specs: [
      "DIMO Token Rewards",
      "Vehicle Data Collection",
      "Easy Installation",
      "Real-time Monitoring",
    ],
    features: {
      security: "Military-grade encryption",
      performance: "Low latency connection",
      battery: "6-month battery life",
      connectivity: "Multi-network support",
    },
    isPreOrder: false,
    networkType: "DIMO Network",
    estimatedRewards: "150-300 DIMO/month",
    powerConsumption: "2W",
  },
  {
    id: "2",
    title: "Nubila Weather Node (Pre-Order)",
    price: 268.66,
    image: "/NubilaWeather.jpg",
    description: "Accurate weather data collection and analytics",
    category: "Weather",
    tagline: "Your Reliable Weather Partner",
    specs: [
      "Weather Data Node",
      "High Precision Sensors",
      "Easy Integration",
      "Low Power Usage",
    ],
    features: {
      security: "Data encryption for secure transmission",
      performance: "Real-time weather updates",
      battery: "Solar-powered backup",
      connectivity: "WiFi and LoRaWAN",
    },
    isPreOrder: true,
    networkType: "Nubila Network",
    estimatedRewards: "50-80 Nubila Coins/month",
    powerConsumption: "5W",
  },
  {
    id: "3",
    title: "Aethir Edge",
    price: 1360.0,
    image: "/AethirEdge.jpg",
    description: "High-performance edge computing device",
    category: "Edge Computing",
    tagline: "Empower Your Network with Edge Technology",
    specs: [
      "Decentralized Network Support",
      "Scalable Architecture",
      "Low Latency",
      "Energy Efficient",
    ],
    features: {
      security: "Advanced encryption protocols",
      performance: "Optimized for AI and ML workloads",
      battery: "No battery, direct power",
      connectivity: "Multi-network compatibility",
    },
    isPreOrder: false,
    networkType: "Aethir Network",
    estimatedRewards: "200-500 Aethir Tokens/month",
    powerConsumption: "20W",
  },
  {
    id: "4",
    title: "Starpower Plug & Play Smartdevice",
    price: 98.99,
    image: "/StarpowerDevice.jpg",
    description: "Smart device for seamless connectivity",
    category: "Smart Device",
    tagline: "Connect and Automate Your World",
    specs: [
      "Plug & Play Design",
      "IoT Integration",
      "Compact Size",
      "Energy Saving",
    ],
    features: {
      security: "Secure IoT protocols",
      performance: "Instant connection setup",
      battery: "Built-in rechargeable battery",
      connectivity: "WiFi and Bluetooth",
    },
    isPreOrder: false,
    networkType: "Starpower Network",
    estimatedRewards: "Not applicable",
    powerConsumption: "3W",
  },

  {
    id: "6",
    title: "QUAKE Core Seismic Data Miner (Pre-Order)",
    price: 125.21,
    image: "/QuakeMiner.jpg",
    description: "Seismic data mining device for research and analytics",
    category: "Weather",
    tagline: "Mining Data, Predicting Earthquakes",
    specs: [
      "Seismic Activity Monitoring",
      "High Sensitivity Sensors",
      "Durable Build",
      "Low Power Consumption",
    ],
    features: {
      security: "Secure data transmission",
      performance: "Continuous seismic data recording",
      battery: "Backup battery support",
      connectivity: "WiFi and LoRaWAN",
    },
    isPreOrder: true,
    networkType: "QUAKE Network",
    estimatedRewards: "30-50 QUAKE Tokens/month",
    powerConsumption: "8W",
  },
  {
    id: "7",
    title:
      "Crankk / Helium Amplifier HNT Booster EU 868 / US 915 MHz - Outdoor",
    price: 112.6,
    image: "/OutdoorBooster.jpg",
    description: "Enhance your Helium network coverage",
    category: "Helium",
    tagline: "Reliable Amplification for Your Helium Network",
    specs: [
      "EU 868 / US 915 MHz support",
      "Indoor and outdoor usage",
      "High signal strength",
      "Compact design",
    ],
    features: {
      security: "Data integrity assurance",
      performance: "Supports long-range transmission",
      battery: "No battery required",
      connectivity: "Optimized for Helium LoRaWAN",
    },
    isPreOrder: false,
    networkType: "Helium",
    estimatedRewards: "20-50 HNT/month",
    powerConsumption: "5W",
  },
  {
    id: "8",
    title: "3x Bundle - Nubila Weather Node (Pre-Order)",
    price: 780.0,
    image: "/NubilaWeather.jpg",
    description: "Pre-order bundle of three Nubila Weather Nodes",
    category: "Weather",
    tagline: "Advanced Weather Tracking with Economical Bundles",
    specs: [
      "Multi-node package",
      "Enhanced data collection",
      "Pre-order exclusive pricing",
      "Durable weather-resistant build",
    ],
    features: {
      security: "Encrypted data transfer",
      performance: "Real-time analytics",
      battery: "Integrated power backup",
      connectivity: "Seamless integration with IoT",
    },
    isPreOrder: true,
    networkType: "Nubila",
    estimatedRewards: "Up to 900 tokens/month",
    powerConsumption: "10W/node",
  },
  {
    id: "9",
    title: "ROVR TarantulaX",
    price: 138.9,
    image: "/TarantulaX.jpg",
    description: "State-of-the-art rover for edge computing",
    category: "Edge Computing",
    tagline: "Redefining Mobility in Edge Applications",
    specs: [
      "All-terrain navigation",
      "Robust AI integration",
      "Modular design",
      "Compatible with various sensors",
    ],
    features: {
      security: "Tamper-proof software",
      performance: "High processing speed",
      battery: "6-hour battery life",
      connectivity: "WiFi and 4G LTE",
    },
    isPreOrder: false,
    networkType: "ROVR",
    estimatedRewards: "Variable based on tasks",
    powerConsumption: "30W",
  },
  {
    id: "10",
    title: "OBD-2 Dual Y-Splitter",
    price: 10.92,
    image: "/OBDSplitter.jpg",
    description: "Split your OBD-2 connection for multiple uses",
    category: "Vehicle",
    tagline: "Double Your Connectivity Effortlessly",
    specs: [
      "Supports dual simultaneous connections",
      "Flexible wiring",
      "Compact and lightweight",
      "Durable material",
    ],
    features: {
      security: "Safe power transfer",
      performance: "Zero signal interference",
      battery: "Not applicable",
      connectivity: "OBD-2 compliant",
    },
    isPreOrder: false,
    networkType: "OBD",
    estimatedRewards: "Not applicable",
    powerConsumption: "Negligible",
  },
  {
    id: "11",
    title: "Crankk / Helium Cavity Filter",
    price: 78.98,
    image: "/CavityFilter.jpg",
    description: "Optimize your Helium antenna setup",
    category: "Helium",
    tagline: "Precision Filtering for Superior Helium Performance",
    specs: [
      "High signal clarity",
      "Durable metal construction",
      "Compact design",
      "EU and US frequencies",
    ],
    features: {
      security: "Prevents frequency interference",
      performance: "Enhanced signal reception",
      battery: "Not applicable",
      connectivity: "Compatible with Helium antennas",
    },
    isPreOrder: false,
    networkType: "Helium",
    estimatedRewards: "Improves antenna efficiency",
    powerConsumption: "None",
  },
  {
    id: "12",
    title: "RG58 Pigtail Kabel",
    price: 3.35,
    image: "/PigtailKabel.jpg",
    description: "High-quality RG58 coaxial cable",
    category: "Cables",
    tagline: "Superior Signal Transmission Simplified",
    specs: [
      "Low signal loss",
      "Flexible and durable",
      "Universal compatibility",
      "Standard RG58 specifications",
    ],
    features: {
      security: "Minimal data leakage",
      performance: "Efficient power transfer",
      battery: "Not applicable",
      connectivity: "Versatile usage",
    },
    isPreOrder: false,
    networkType: "None",
    estimatedRewards: "Not applicable",
    powerConsumption: "None",
  },
  {
    id: "13",
    title: "WeatherXM WB1200 D1 | WiFi",
    price: 367.9,
    image: "/WB1200D1.jpg",
    description: "Advanced weather station with WiFi",
    category: "Weather",
    tagline: "Stay Ahead with Accurate Weather Updates",
    specs: [
      "WiFi-enabled",
      "Precision sensors",
      "Weatherproof design",
      "Real-time reporting",
    ],
    features: {
      security: "Secure cloud storage",
      performance: "High data accuracy",
      battery: "Rechargeable battery included",
      connectivity: "WiFi integration",
    },
    isPreOrder: false,
    networkType: "WeatherXM",
    estimatedRewards: "500 tokens/month",
    powerConsumption: "8W",
  },
  {
    id: "14",
    title: "Crankk / Helium Antenna Splitter EU",
    price: 579.82,
    image: "/AntennaSplitter.jpg",
    description: "Divide and optimize your Helium antenna signal",
    category: "Helium",
    tagline: "Effortless Signal Distribution",
    specs: [
      "Dual signal output",
      "High-frequency clarity",
      "Compact and robust",
      "Optimized for Helium usage",
    ],
    features: {
      security: "Minimizes signal interference",
      performance: "Stable dual output",
      battery: "Not required",
      connectivity: "Seamless integration with Helium antennas",
    },
    isPreOrder: false,
    networkType: "Helium",
    estimatedRewards: "Maximizes network efficiency",
    powerConsumption: "None",
  },
  {
    id: "15",
    title: "Hivemapper Dashcam Bee - WiFi only",
    price: 452.1,
    image: "/DashcamBee.jpg",
    description: "Smart dashcam optimized for mapping",
    category: "Vehicle",
    tagline: "Turn Every Drive into a Mapping Adventure",
    specs: [
      "WiFi-enabled",
      "High-resolution video",
      "Compact design",
      "Real-time data upload",
    ],
    features: {
      security: "Encrypted video storage",
      performance: "Seamless connectivity",
      battery: "In-built rechargeable battery",
      connectivity: "WiFi",
    },
    isPreOrder: false,
    networkType: "Hivemapper",
    estimatedRewards: "Earn mapping credits",
    powerConsumption: "6W",
  },
];

export const categories = [
  ...new Set(products.map((product) => product.category)),
];

export const getProduct = (id) => products.find((p) => p.id === id);
