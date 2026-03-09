export async function onRequest(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const data = {
    navigationMenu: [
      { id: 'home', label: 'HOME', href: '/' },
      { id: 'destination', label: 'DESTINATION', href: '/destination' },
      { id: 'education', label: 'EDUCATION', href: '/education' },
      { id: 'media', label: 'MEDIA', href: '/media' },
      { id: 'contact', label: 'CONTACT US', href: '/contact' },
    ],
    tourismCategories: [
      { id: 1, title: 'Cultural Tourism', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', description: 'Explore rich cultural heritage' },
      { id: 2, title: 'Heritage Tourism', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800', description: 'Discover historical landmarks' }
    ],
    whatWeDoCards: [
      { id: 1, title: 'Capacity Building', description: 'Training programs', icon: '🎓' }
    ],
    boardMembers: [
      { id: 1, name: 'Dr. Rajesh Kumar', designation: 'Chairman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }
    ],
    educationData: {
      title: "LEARN FOR EVERY TOURISM OPPORTUNITY",
      subtitle: "Education & Training Programs",
      introduction: { title: "Course Introduction", content: "Education forms the foundation." },
      objectives: ["Support tourism industry growth"],
      courses: []
    },
    mediaData: {
      events: [
        { id: 1, title: 'Cultural Festival 2026', date: 'March 15-17, 2026', location: 'New Delhi', category: 'Culture', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', description: 'Experience traditions.', color: 'from-purple-500 to-pink-500' }
      ],
      articles: [
        { id: 1, title: 'Sustainable Tourism', excerpt: 'Eco-friendly practices.', author: 'Dr. Priya Sharma', date: 'Jan 25, 2026', readTime: '8 min', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800', category: 'Sustainability', featured: true }
      ]
    }
  };

  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
