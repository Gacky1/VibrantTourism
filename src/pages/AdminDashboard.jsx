import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiUrl } from '../config/api';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [content, setContent] = useState(null);
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();
  const API_URL = getApiUrl();

  useEffect(() => {
    checkAuth();
    fetchContent();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/admin/check', { credentials: 'include' });
      const data = await response.json();
      if (!data.authenticated) navigate('/admin');
      else setUser(data.user);
    } catch (err) {
      navigate('/admin');
    }
  };

  const fetchContent = async () => {
    const response = await fetch('/api/content/all');
    const data = await response.json();
    setContent(data);
  };

  const handleLogout = async () => {
    await fetch('/admin/logout', { method: 'POST', credentials: 'include' });
    navigate('/admin');
  };

  const startEdit = (type, data) => {
    setEditMode(type);
    setEditData(JSON.parse(JSON.stringify(data)));
  };

  const saveEdit = async () => {
    await fetch(`/api/content/${editMode}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(editData)
    });
    fetchContent();
    setEditMode(null);
    setEditData(null);
  };

  const updateField = (path, value) => {
    const keys = path.split('.');
    const newData = { ...editData };
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setEditData(newData);
  };

  if (!user || !content) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Logout</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Overview</button>
          <button onClick={() => setActiveTab('categories')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'categories' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Categories</button>
          <button onClick={() => setActiveTab('whatwedo')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'whatwedo' ? 'bg-blue-600 text-white' : 'bg-white'}`}>What We Do</button>
          <button onClick={() => setActiveTab('board')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'board' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Board</button>
          <button onClick={() => setActiveTab('education')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Education</button>
          <button onClick={() => setActiveTab('media')} className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === 'media' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Media</button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tourism Categories</h3>
              <p className="text-3xl font-bold text-blue-600">{content.tourismCategories.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What We Do Cards</h3>
              <p className="text-3xl font-bold text-green-600">{content.whatWeDoCards.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Board Members</h3>
              <p className="text-3xl font-bold text-orange-600">{content.boardMembers.length}</p>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Tourism Categories</h2>
              <button onClick={() => startEdit('categories', content.tourismCategories)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit All</button>
            </div>
            {editMode === 'categories' ? (
              <div className="space-y-4">
                {editData.map((cat, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded space-y-2">
                    <input value={cat.title} onChange={(e) => updateField(`${idx}.title`, e.target.value)} className="w-full p-2 border rounded" placeholder="Title" />
                    <textarea value={cat.description} onChange={(e) => updateField(`${idx}.description`, e.target.value)} className="w-full p-2 border rounded" placeholder="Description" rows="2" />
                    <input value={cat.image} onChange={(e) => updateField(`${idx}.image`, e.target.value)} className="w-full p-2 border rounded" placeholder="Image URL" />
                  </div>
                ))}
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                  <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.tourismCategories.map(cat => (
                  <div key={cat.id} className="p-4 bg-gray-50 rounded">
                    <h3 className="font-bold">{cat.title}</h3>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'whatwedo' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">What We Do Cards</h2>
              <button onClick={() => startEdit('what-we-do', content.whatWeDoCards)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit All</button>
            </div>
            {editMode === 'what-we-do' ? (
              <div className="space-y-4">
                {editData.map((card, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded space-y-2">
                    <input value={card.icon} onChange={(e) => updateField(`${idx}.icon`, e.target.value)} className="w-20 p-2 border rounded" placeholder="Icon" />
                    <input value={card.title} onChange={(e) => updateField(`${idx}.title`, e.target.value)} className="w-full p-2 border rounded" placeholder="Title" />
                    <textarea value={card.description} onChange={(e) => updateField(`${idx}.description`, e.target.value)} className="w-full p-2 border rounded" placeholder="Description" rows="2" />
                  </div>
                ))}
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                  <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.whatWeDoCards.map(card => (
                  <div key={card.id} className="p-4 bg-gray-50 rounded">
                    <div className="text-2xl mb-2">{card.icon}</div>
                    <h3 className="font-bold">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'board' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Board Members</h2>
              <button onClick={() => startEdit('board-members', content.boardMembers)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit All</button>
            </div>
            {editMode === 'board-members' ? (
              <div className="space-y-4">
                {editData.map((member, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded space-y-2">
                    <input value={member.name} onChange={(e) => updateField(`${idx}.name`, e.target.value)} className="w-full p-2 border rounded" placeholder="Name" />
                    <input value={member.designation} onChange={(e) => updateField(`${idx}.designation`, e.target.value)} className="w-full p-2 border rounded" placeholder="Designation" />
                    <input value={member.image} onChange={(e) => updateField(`${idx}.image`, e.target.value)} className="w-full p-2 border rounded" placeholder="Image URL" />
                  </div>
                ))}
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                  <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.boardMembers.map(member => (
                  <div key={member.id} className="p-4 bg-gray-50 rounded text-center">
                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" />
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.designation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Education Programs</h2>
              <button onClick={() => startEdit('education', content.educationData)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
            </div>
            {editMode === 'education' ? (
              <div className="space-y-4">
                <input value={editData.title} onChange={(e) => updateField('title', e.target.value)} className="w-full p-2 border rounded font-bold" placeholder="Title" />
                <input value={editData.subtitle} onChange={(e) => updateField('subtitle', e.target.value)} className="w-full p-2 border rounded" placeholder="Subtitle" />
                <textarea value={editData.introduction.content} onChange={(e) => updateField('introduction.content', e.target.value)} className="w-full p-2 border rounded" rows="4" placeholder="Introduction" />
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                  <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-lg">{content.educationData.title}</h3>
                <p className="text-gray-600 mb-4">{content.educationData.subtitle}</p>
                <p className="text-sm text-gray-700">{content.educationData.introduction.content}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'media' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Media Content</h2>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Events</h3>
                <button onClick={() => { setEditMode('new-event'); setEditData({ title: '', date: '', location: '', category: '', image: '', description: '', color: 'from-blue-500 to-cyan-500' }); }} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Event</button>
              </div>
              {editMode === 'new-event' && (
                <div className="mb-4 p-4 bg-gray-50 rounded space-y-2">
                  <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} className="w-full p-2 border rounded" placeholder="Title" />
                  <input value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} className="w-full p-2 border rounded" placeholder="Date" />
                  <input value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} className="w-full p-2 border rounded" placeholder="Location" />
                  <input value={editData.category} onChange={(e) => setEditData({ ...editData, category: e.target.value })} className="w-full p-2 border rounded" placeholder="Category" />
                  <input value={editData.image} onChange={(e) => setEditData({ ...editData, image: e.target.value })} className="w-full p-2 border rounded" placeholder="Image URL" />
                  <textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} className="w-full p-2 border rounded" placeholder="Description" rows="2" />
                  <div className="flex gap-2">
                    <button onClick={async () => { await fetch('/api/content/media/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(editData) }); fetchContent(); setEditMode(null); }} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                    <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.mediaData?.events?.map(event => (
                  <div key={event.id} className="p-4 bg-gray-50 rounded">
                    <h4 className="font-bold">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
                    <p className="text-xs text-gray-500 mt-2">{event.description}</p>
                    <button onClick={async () => { await fetch(`/api/content/media/events/${event.id}`, { method: 'DELETE', credentials: 'include' }); fetchContent(); }} className="mt-2 text-red-600 text-sm hover:underline">Delete</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Articles</h3>
                <button onClick={() => { setEditMode('new-article'); setEditData({ title: '', excerpt: '', author: '', date: '', readTime: '', image: '', category: '', featured: false }); }} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Article</button>
              </div>
              {editMode === 'new-article' && (
                <div className="mb-4 p-4 bg-gray-50 rounded space-y-2">
                  <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} className="w-full p-2 border rounded" placeholder="Title" />
                  <textarea value={editData.excerpt} onChange={(e) => setEditData({ ...editData, excerpt: e.target.value })} className="w-full p-2 border rounded" placeholder="Excerpt" rows="2" />
                  <input value={editData.author} onChange={(e) => setEditData({ ...editData, author: e.target.value })} className="w-full p-2 border rounded" placeholder="Author" />
                  <input value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} className="w-full p-2 border rounded" placeholder="Date" />
                  <input value={editData.readTime} onChange={(e) => setEditData({ ...editData, readTime: e.target.value })} className="w-full p-2 border rounded" placeholder="Read Time" />
                  <input value={editData.image} onChange={(e) => setEditData({ ...editData, image: e.target.value })} className="w-full p-2 border rounded" placeholder="Image URL" />
                  <input value={editData.category} onChange={(e) => setEditData({ ...editData, category: e.target.value })} className="w-full p-2 border rounded" placeholder="Category" />
                  <div className="flex gap-2">
                    <button onClick={async () => { await fetch('/api/content/media/articles', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(editData) }); fetchContent(); setEditMode(null); }} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
                    <button onClick={() => setEditMode(null)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.mediaData?.articles?.map(article => (
                  <div key={article.id} className="p-4 bg-gray-50 rounded">
                    <h4 className="font-bold">{article.title}</h4>
                    <p className="text-sm text-gray-600">{article.author} - {article.date}</p>
                    <p className="text-xs text-gray-500 mt-2">{article.excerpt}</p>
                    <button onClick={async () => { await fetch(`/api/content/media/articles/${article.id}`, { method: 'DELETE', credentials: 'include' }); fetchContent(); }} className="mt-2 text-red-600 text-sm hover:underline">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
