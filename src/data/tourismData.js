export const tourismCategories = {
  cultural: {
    id: 'cultural',
    title: 'Cultural Tourism',
    subtitle: 'Experience traditions, festivals, and arts',
    icon: '🎭',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
    whatItIs: 'Experiencing traditions, festivals, arts, crafts, folk music, dance, and cuisine.',
    states: [
      { name: 'Rajasthan', highlights: 'Folk dance, music, royal traditions, handicrafts' },
      { name: 'West Bengal', highlights: 'Durga Puja, literature, art and theatre' },
      { name: 'Tamil Nadu', highlights: 'Classical dance (Bharatanatyam), temple culture' },
      { name: 'Odisha', highlights: 'Tribal culture, classical arts' }
    ],
    thingsToDo: [
      'Attend festivals and fairs',
      'Explore local crafts and handloom markets',
      'Experience regional cuisine',
      'Cultural performances and village tours'
    ]
  },
  leisure: {
    id: 'leisure',
    title: 'Leisure & Recreational Tourism',
    subtitle: 'Relax and enjoy sightseeing',
    icon: '🏖️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    whatItIs: 'Travel for relaxation, enjoyment, sightseeing, and entertainment.',
    states: [
      { name: 'Goa', highlights: 'Beaches, nightlife, water sports' },
      { name: 'Kerala', highlights: 'Backwaters, houseboats, resorts' },
      { name: 'Himachal Pradesh', highlights: 'Hill stations like Shimla, Manali' },
      { name: 'Maharashtra', highlights: 'Urban leisure, coastal tourism' }
    ],
    thingsToDo: [
      'Beach stays and resorts',
      'Sightseeing and city tours',
      'Cruise rides and entertainment zones',
      'Family vacations and leisure retreats'
    ]
  },
  heritage: {
    id: 'heritage',
    title: 'Heritage Tourism',
    subtitle: 'Discover historical monuments',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
    color: 'from-amber-500 to-orange-500',
    whatItIs: 'Travel focused on historical monuments, UNESCO sites, forts, palaces, and ancient cities.',
    states: [
      { name: 'Rajasthan', highlights: 'Forts of Jaipur, Jodhpur, Udaipur' },
      { name: 'Uttar Pradesh', highlights: 'Taj Mahal, Agra Fort' },
      { name: 'Madhya Pradesh', highlights: 'Khajuraho temples' },
      { name: 'Karnataka', highlights: 'Hampi heritage site' }
    ],
    thingsToDo: [
      'Heritage walks and guided tours',
      'Palace stays and museums',
      'Light & sound shows',
      'Architectural exploration'
    ]
  },
  rural: {
    id: 'rural',
    title: 'Rural Tourism',
    subtitle: 'Experience authentic village life',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
    whatItIs: 'Experiencing rural life, local traditions, farming, and village hospitality.',
    states: [
      { name: 'Rajasthan', highlights: 'Desert villages, homestays' },
      { name: 'Gujarat', highlights: 'Handicraft and artisan villages' },
      { name: 'Maharashtra', highlights: 'Agro and rural circuits' },
      { name: 'Odisha & Chhattisgarh', highlights: 'Tribal villages' }
    ],
    thingsToDo: [
      'Village stays and homestays',
      'Farming and craft activities',
      'Folk performances',
      'Traditional cooking experiences'
    ]
  },
  spiritual: {
    id: 'spiritual',
    title: 'Spiritual & Religious Tourism',
    subtitle: 'Sacred journeys and pilgrimages',
    icon: '🕉️',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
    color: 'from-yellow-500 to-orange-500',
    whatItIs: 'Travel for pilgrimage, spiritual learning, and faith-based journeys.',
    states: [
      { name: 'Uttar Pradesh', highlights: 'Varanasi, Ayodhya' },
      { name: 'Uttarakhand', highlights: 'Char Dham Yatra' },
      { name: 'Tamil Nadu', highlights: 'Temple circuits' },
      { name: 'Punjab', highlights: 'Golden Temple' }
    ],
    thingsToDo: [
      'Pilgrimage and sacred rituals',
      'Spiritual retreats and satsangs',
      'Temple and monastery visits',
      'Cultural-spiritual experiences'
    ]
  },
  culinary: {
    id: 'culinary',
    title: 'Culinary / Food Tourism',
    subtitle: 'Savor authentic local cuisines',
    icon: '🍛',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    color: 'from-red-500 to-pink-500',
    whatItIs: 'Exploring regional food, traditional cooking, and food culture.',
    states: [
      { name: 'Punjab', highlights: 'North Indian cuisine' },
      { name: 'Rajasthan', highlights: 'Traditional royal dishes' },
      { name: 'West Bengal', highlights: 'Sweets and fish cuisine' },
      { name: 'South India', highlights: 'Regional vegetarian cuisines' }
    ],
    thingsToDo: [
      'Food trails and tasting tours',
      'Cooking workshops',
      'Traditional food markets',
      'Food festivals'
    ]
  },
  wildlife: {
    id: 'wildlife',
    title: 'Wildlife Tourism',
    subtitle: 'Experience nature\'s incredible wildlife',
    icon: '🐅',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-teal-500 to-green-500',
    whatItIs: 'Tourism focused on wildlife conservation and natural habitats.',
    states: [
      { name: 'Madhya Pradesh', highlights: 'Tiger reserves' },
      { name: 'Assam', highlights: 'One-horned rhino, tea gardens' },
      { name: 'Karnataka', highlights: 'Wildlife sanctuaries' }
    ],
    thingsToDo: [
      'Jungle safaris and wildlife spotting',
      'Bird watching and nature trails',
      'Conservation education',
      'Eco-lodges near reserves'
    ],
    significance: 'Supports wildlife conservation, promotes environmental awareness, generates sustainable local employment'
  },
  wellness: {
    id: 'wellness',
    title: 'Wellness & AYUSH Tourism',
    subtitle: 'Rejuvenate mind, body and soul',
    icon: '🧘',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-purple-500',
    whatItIs: 'Preventive health, rejuvenation, and traditional healing systems.',
    states: [
      { name: 'Kerala', highlights: 'Ayurveda therapies' },
      { name: 'Uttarakhand', highlights: 'Yoga and wellness retreats' },
      { name: 'Karnataka', highlights: 'Naturopathy centers' },
      { name: 'Himachal Pradesh', highlights: 'Meditation retreats' }
    ],
    thingsToDo: [
      'Yoga and meditation programs',
      'Ayurveda and wellness therapies',
      'Detox and rejuvenation retreats',
      'Wellness hospitality experiences'
    ]
  },
  business: {
    id: 'business',
    title: 'Business & MICE Tourism',
    subtitle: 'Meetings, Incentives, Conferences & Exhibitions',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    color: 'from-gray-600 to-gray-800',
    whatItIs: 'Travel for meetings, incentives, conferences, and exhibitions.',
    states: [
      { name: 'Delhi NCR', highlights: 'National capital region' },
      { name: 'Mumbai', highlights: 'Financial capital' },
      { name: 'Bengaluru', highlights: 'Tech hub' },
      { name: 'Hyderabad', highlights: 'IT and pharma center' }
    ],
    thingsToDo: [
      'Business conferences',
      'Trade exhibitions',
      'Corporate events',
      'Networking and industry meets'
    ]
  }
};

export const stateWiseTourism = {
  'Rajasthan': ['cultural', 'heritage', 'rural', 'culinary'],
  'Kerala': ['leisure', 'wellness', 'culinary'],
  'Goa': ['leisure'],
  'Uttar Pradesh': ['heritage', 'spiritual'],
  'Uttarakhand': ['spiritual', 'wellness'],
  'West Bengal': ['cultural', 'culinary'],
  'Tamil Nadu': ['cultural', 'spiritual'],
  'Odisha': ['cultural', 'rural'],
  'Punjab': ['spiritual', 'culinary'],
  'Himachal Pradesh': ['leisure', 'wellness'],
  'Maharashtra': ['leisure', 'rural'],
  'Gujarat': ['rural'],
  'Madhya Pradesh': ['heritage', 'wildlife'],
  'Karnataka': ['heritage', 'wellness', 'wildlife'],
  'Assam': ['wildlife'],
  'Delhi NCR': ['business'],
  'Mumbai': ['business'],
  'Bengaluru': ['business'],
  'Hyderabad': ['business']
};

export const indianStates = [
  'Rajasthan', 'Kerala', 'Goa', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Tamil Nadu', 'Odisha', 'Punjab', 'Himachal Pradesh',
  'Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Karnataka', 'Assam',
  'Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad'
];
