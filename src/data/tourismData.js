export const tourismCategories = {
  cultural: {
    id: 'cultural',
    title: 'Cultural Tourism',
    subtitle: 'Experience traditions, festivals, and arts',
    icon: 'IoColorPalette',
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
    icon: 'IoSunny',
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
    icon: 'IoBusiness',
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
    icon: 'IoLeaf',
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
    icon: 'IoFlame',
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
    icon: 'IoRestaurant',
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
    icon: 'IoPaw',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1170&auto=format&fit=crop',
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
    icon: 'IoFitness',
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
    icon: 'IoBriefcase',
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
  'Rajasthan': ['cultural', 'heritage', 'rural', 'culinary', 'wildlife'],
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

export const providersData = {
  resorts: [
    {
      id: 'r1', name: 'Ananta Resort', category: 'resort',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      services: 'Luxury villas, swimming pool, spa therapies',
      tags: ['Luxury', 'Spa', 'Pool'],
      price: '₹8,500/night', rating: 4.8, reviews: 124,
      facilities: ['Free WiFi', 'Restaurant', 'Spa', 'Pool', 'Parking'],
      description: 'Premium resort with luxury villas, world-class spa, and curated wildlife experiences.',
      link: 'https://wa.me/919876543210'
    },
    {
      id: 'r2', name: 'Ranthambore Eco Lodge', category: 'resort',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      services: 'Jungle safaris, eco-friendly stays, nature guides',
      tags: ['Eco', 'Safari', 'Nature'],
      price: '₹4,200/night', rating: 4.5, reviews: 89,
      facilities: ['Free WiFi', 'Restaurant', 'Safari Desk', 'Bonfire'],
      description: 'Eco-certified lodge at the edge of the forest with expert naturalist guides.',
      link: 'https://wa.me/919876543211'
    },
    {
      id: 'r3', name: 'Tiger View Resort', category: 'resort',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      services: 'Forest views, bonfire nights, tribal food',
      tags: ['Budget', 'Forest', 'Cultural'],
      price: '₹2,800/night', rating: 4.2, reviews: 67,
      facilities: ['Restaurant', 'Bonfire', 'Parking', 'Guided Tours'],
      description: 'Rustic forest resort offering authentic tribal cuisine and bonfire evenings.',
      link: 'https://wa.me/919876543212'
    }
  ],
  operators: [
    {
      id: 'o1', name: 'Rajasthan Jungle Tours', category: 'operator',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&h=400&fit=crop',
      services: 'Customized safari bookings, local transport',
      tags: ['Safari', 'Custom', 'Local'],
      price: '₹3,500/person', rating: 4.7, reviews: 203,
      facilities: ['Pickup & Drop', 'Guide', 'Camera Permit', 'Meals'],
      description: 'Expert-led safari tours with deep local knowledge and customised itineraries.',
      link: 'https://wa.me/919876543213'
    },
    {
      id: 'o2', name: 'Wild Trails Rajasthan', category: 'operator',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
      services: 'Wildlife photography tours, camping',
      tags: ['Photography', 'Camping', 'Adventure'],
      price: '₹4,800/person', rating: 4.6, reviews: 156,
      facilities: ['Photography Guide', 'Camping Gear', 'Meals', 'Transport'],
      description: 'Specialised wildlife photography tours with professional equipment support.',
      link: 'https://wa.me/919876543214'
    },
    {
      id: 'o3', name: 'Desert & Forest Tours', category: 'operator',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      services: 'All-inclusive wildlife + desert packages',
      tags: ['All-Inclusive', 'Desert', 'Wildlife'],
      price: '₹6,200/person', rating: 4.4, reviews: 98,
      facilities: ['All Meals', 'Transport', 'Guide', 'Accommodation'],
      description: 'Complete packages combining desert dunes and wildlife reserves in one trip.',
      link: 'https://wa.me/919876543215'
    }
  ],
  transport: [
    {
      id: 't1', name: 'Raj Safari Rides', category: 'transport',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
      services: 'Open jeep safaris, expert local drivers',
      tags: ['Jeep', 'Safari', 'Expert Driver'],
      price: '₹1,800/trip', rating: 4.6, reviews: 312,
      facilities: ['Open Jeep', 'Expert Driver', 'Binoculars', 'First Aid'],
      description: 'Iconic open-jeep safari rides with experienced local drivers and naturalists.',
      link: 'https://wa.me/919876543216'
    },
    {
      id: 't2', name: 'Desert Drive Tours', category: 'transport',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
      services: 'SUV rentals, inter-city transport',
      tags: ['SUV', 'Comfortable', 'Inter-city'],
      price: '₹2,500/day', rating: 4.3, reviews: 178,
      facilities: ['AC Vehicle', 'GPS', 'Driver', 'Fuel Included'],
      description: 'Premium SUV rentals for comfortable inter-city travel across Rajasthan.',
      link: 'https://wa.me/919876543217'
    }
  ]
};

export const stateDetails = {
  'Rajasthan': {
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=500&fit=crop',
    description: 'Land of kings, forts, and vibrant culture. Home to the Thar Desert and royal palaces.',
    highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
    bestTime: 'Oct – Mar',
  },
  'Kerala': {
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=500&fit=crop',
    description: "God's Own Country — backwaters, Ayurveda, and lush green landscapes.",
    highlights: ['Alleppey', 'Munnar', 'Kovalam', 'Wayanad'],
    bestTime: 'Sep – Mar',
  },
  'Goa': {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    description: 'Sun, sand, and sea. India\'s beach paradise with vibrant nightlife and Portuguese heritage.',
    highlights: ['Baga Beach', 'Old Goa', 'Panjim', 'Dudhsagar'],
    bestTime: 'Nov – Feb',
  },
  'Uttar Pradesh': {
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop',
    description: 'Home to the Taj Mahal, Varanasi ghats, and the spiritual heartland of India.',
    highlights: ['Agra', 'Varanasi', 'Ayodhya', 'Lucknow'],
    bestTime: 'Oct – Mar',
  },
  'Uttarakhand': {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop',
    description: 'The Yoga capital of the world with Himalayan peaks, rivers, and spiritual retreats.',
    highlights: ['Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie'],
    bestTime: 'Mar – Jun, Sep – Nov',
  },
  'West Bengal': {
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop',
    description: 'Cultural capital of India — Durga Puja, literature, art, and the Sundarbans.',
    highlights: ['Kolkata', 'Darjeeling', 'Sundarbans', 'Bishnupur'],
    bestTime: 'Oct – Mar',
  },
  'Tamil Nadu': {
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=500&fit=crop',
    description: 'Ancient Dravidian temples, classical dance, and pristine coastlines.',
    highlights: ['Chennai', 'Madurai', 'Ooty', 'Mahabalipuram'],
    bestTime: 'Nov – Feb',
  },
  'Madhya Pradesh': {
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&h=500&fit=crop',
    description: 'Heart of India — tiger reserves, Khajuraho temples, and tribal heritage.',
    highlights: ['Khajuraho', 'Bandhavgarh', 'Kanha', 'Bhopal'],
    bestTime: 'Oct – Jun',
  },
  'Karnataka': {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    description: 'From Hampi ruins to Coorg coffee estates and Mysore palaces.',
    highlights: ['Mysore', 'Hampi', 'Coorg', 'Bengaluru'],
    bestTime: 'Oct – Mar',
  },
  'Himachal Pradesh': {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    description: 'Snow-capped peaks, apple orchards, and serene hill stations.',
    highlights: ['Shimla', 'Manali', 'Dharamshala', 'Spiti'],
    bestTime: 'Mar – Jun, Sep – Nov',
  },
};
