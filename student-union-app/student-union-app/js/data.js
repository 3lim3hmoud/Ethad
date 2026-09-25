// ===== MOCK DATA — replace each block with Firebase/Firestore reads later =====
const DATA = {

  hero: [
    {tag:'Scientific Day', title:'Scientific Day 2026', place:'Main Hall', date:'Sep 25, 2026', ends: new Date(Date.now()+1000*60*60*30)},
    {tag:'Competition', title:'Medical Quiz Finals', place:'Amphitheatre', date:'Oct 2, 2026', ends: new Date(Date.now()+1000*60*60*90)},
    {tag:'Campaign', title:'Blood Donation Drive', place:'Blood Bank', date:'Sep 30, 2026', ends: new Date(Date.now()+1000*60*60*60)},
  ],

  quick: [
    {ic:'👤', label:'Profile', go:'profile'},
    {ic:'🏆', label:'Points', go:'ranking'},
    {ic:'📅', label:'Events', go:'events'},
    {ic:'📚', label:'Magazines', go:'magazines'},
  ],

  studentOfWeek: {name:'Omar Ahmed', level:'Level 3 — Nursing', points:850, note:'For his outstanding participation in scientific and community activities.'},

  sowArchive: [
    {week:'Week 1', name:'Ahmed'}, {week:'Week 2', name:'Sara'}, {week:'Week 3', name:'Mohamed'}, {week:'Week 4', name:'Lina'}
  ],

  me: {name:'Ahmed Mohamed', level:'Level 3 — Nursing', points:850, rank:7, goal:1000,
    events:12, workshops:5, competitions:3, campaigns:2},

  achievements: ['🎓 Active Student', '🏆 Competition Winner', '🩺 Volunteer', '⭐ Student of the Week'],

  badges: [
    {ic:'🥉', name:'First Step', locked:false}, {ic:'🔥', name:'Active Student', locked:false},
    {ic:'🧠', name:'Scientific Mind', locked:false}, {ic:'🤝', name:'Volunteer', locked:true},
    {ic:'🏆', name:'Champion', locked:true}, {ic:'⭐', name:'Union Star', locked:true},
  ],

  events: [
    {cat:'sci', title:'Medical Innovation Workshop', date:'Sep 25, 2026 · 10:00 AM', place:'Main Hall', ic:'🔬'},
    {cat:'cul', title:'Poetry Competition', date:'Sep 30, 2026 · 4:00 PM', place:'Library Hall', ic:'🎭'},
    {cat:'spo', title:'Football Tournament', date:'Oct 5, 2026 · 9:00 AM', place:'Sports Center', ic:'⚽'},
    {cat:'art', title:'Art Exhibition', date:'Oct 8, 2026 · 10:00 AM', place:'Faculty Garden', ic:'🎨'},
    {cat:'sci', title:'First Aid Workshop', date:'Today · 5:00 PM', place:'Skills Lab', ic:'🩺'},
  ],

  news: [
    {t:'New Scientific Program launched', s:'2h ago'},
    {t:'Competition Results announced', s:'5h ago'},
    {t:'Important Announcement from the Dean', s:'1d ago'},
    {t:'Student Achievement recognized', s:'2d ago'},
  ],

  leaderboard: [
    {n:'Ahmed Mohamed', p:920}, {n:'Sara Mostafa', p:810}, {n:'Mohamed Salah', p:760},
    {n:'Fatma Wael', p:720}, {n:'Omar Khaled', p:690}, {n:'Reem Ahmed', p:670},
    {n:'Ahmed Mohamed (You)', p:850, me:true}, {n:'Nada Hassan', p:620}, {n:'Youssef Ali', p:600}, {n:'Hala Essam', p:580}
  ],

  competitions: [
    {title:'Medical Quiz Competition', date:'Oct 5, 2026 · Main Hall', pts:'+30 pts'},
    {title:'Poster Competition', date:'Oct 10, 2026 · Library Hall', pts:'+25 pts'},
    {title:'Photography Competition', date:'Oct 12, 2026 · Campus', pts:'+25 pts'},
    {title:'Scientific Article Competition', date:'Oct 20, 2026 · Virtual', pts:'+50 pts'},
  ],

  campaigns: [
    {title:'Diabetes Awareness Campaign', sub:'Learn. Prevent. Protect.', date:'Oct 10, 2026 · Main Hall'},
    {title:'Mental Health Awareness', sub:'Take care of your mind.', date:'Oct 15, 2026 · Counseling Center'},
    {title:'Blood Donation Campaign', sub:'Give blood, save lives.', date:'Sep 30, 2026 · Blood Bank'},
  ],

  magazines: {
    scientific: [
      {title:'The Role of AI in Nursing', date:'Sep 2026'},
      {title:'Latest Advances in Cardiology', date:'Sep 2026'},
      {title:'Student Research Highlights', date:'Aug 2026'},
    ],
    cultural: [
      {title:'Voices of the Ward — Poetry', date:'Sep 2026'},
      {title:'Student Talent Stories', date:'Aug 2026'},
    ]
  },

  leadership: [
    {name:'Prof. Dr. Hanan Mohamed', role:'Dean of Faculty', bio:'Over 20 years of experience in academic leadership, research and healthcare education.'},
    {name:'Dr. Mostafa Kamel', role:'Vice Dean', bio:'Leads student affairs and academic development initiatives across the faculty.'},
  ],

  union: {
    president:'Ahmed Mohamed', vp:'Sara Ali',
    committees: ['🧪 Scientific Committee', '🎭 Cultural Committee', '🏃 Sports Committee', '🎨 Artistic Committee', '🤝 Social Committee', '🩺 Medical Committee', '📱 Media Committee']
  },

  passport: [
    {d:'Sep 10', a:'First Aid Workshop', t:'Workshop', p:'+20'},
    {d:'Sep 15', a:'Blood Campaign', t:'Volunteer', p:'+30'},
    {d:'Sep 20', a:'Medical Quiz', t:'Competition', p:'+30'},
    {d:'Sep 25', a:'Scientific Day', t:'Event', p:'+10'},
  ],

  notifications: [
    {t:'🔥 Starting Soon!', s:'Scientific Workshop starts in 30 minutes.'},
    {t:'🏆 You moved up!', s:'You are now #7 in the student ranking.'},
    {t:'⭐ Almost there', s:'You need 40 more points for a new badge.'},
    {t:'📢 New Competition', s:'Registration is open for the Medical Quiz.'},
  ],

  mediaGallery: 9,
};
