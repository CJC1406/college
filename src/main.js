import './style.css';
import { getUsers, saveUser, findUser, loginUser, logoutUser, getCurrentUser, findUserById, updateUserProfile, deleteUser } from './utils/storage.js';
import { LoginView, RegisterView } from './views/LoginView.js';
import { ProfileView } from './views/ProfileView.js';
import { EditorView } from './views/EditorView.js';

// Router
const router = async () => {
  const app = document.getElementById('app');
  const hash = window.location.hash || '#/';

  // Clear app
  app.innerHTML = '';

  if (hash === '#/' || hash === '') {
    // Login / Landing
    if (getCurrentUser()) {
      window.location.hash = `#/profile/${getCurrentUser().id}`;
      return;
    }
    app.innerHTML = LoginView();
    setupLoginEvents();
    renderPublicProfilesList();
  } else if (hash === '#/register') {
    app.innerHTML = RegisterView();
    setupRegisterEvents();
  } else if (hash.startsWith('#/profile/')) {
    const userId = hash.split('/')[2];
    const user = findUserById(userId);
    if (user) {
      app.innerHTML = ProfileView(user);
    } else {
      app.innerHTML = '<h1 style="text-align:center; padding: 5rem;">User Not Found</h1><p style="text-align:center;"><a href="#/">Go Home</a></p>';
    }
  } else if (hash === '#/edit') {
    const user = getCurrentUser();
    if (!user) {
      window.location.hash = '#/';
      return;
    }
    app.innerHTML = EditorView(user);
    setupEditorEvents(user);
  }
};

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Setup Functions
function setupLoginEvents() {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const user = loginUser(username, password);
      if (user) {
        window.location.hash = `#/profile/${user.id}`;
      } else {
        alert('Invalid credentials');
      }
    });
  }
}

function renderPublicProfilesList() {
  const list = document.getElementById('public-profiles-list');
  if (list) {
    const users = getUsers();
    if (users.length === 0) {
      list.innerHTML = '<p>No profiles yet.</p>';
    } else {
      list.innerHTML = users.map(u => `
                <a href="#/profile/${u.id}" class="glass-card" style="padding: 1rem; display: block; text-decoration: none; transition: transform 0.2s;">
                    <strong style="color: white;">${u.profile.name}</strong>
                    <span style="color: var(--text-secondary); font-size: 0.9em; display: block;">${u.profile.role}</span>
                </a>
            `).join('');
    }
  }
}

function setupRegisterEvents() {
  const form = document.getElementById('register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;

      if (findUser(username)) {
        alert('Username already taken');
        return;
      }

      const newUser = {
        id: 'user_' + Date.now(),
        username,
        password,
        profile: {
          name: username, // Default to username
          role: 'Student',
          bio: 'I am a new student here.',
          skills: ['Coding'],
          projects: [],
          email: 'email@example.com'
        }
      };

      saveUser(newUser);
      loginUser(username, password);
      window.location.hash = '#/edit'; // Send to edit page to fill details
    });
  }
}

function setupEditorEvents(user) {
  const form = document.getElementById('editor-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedProfile = {
        name: document.getElementById('edit-name').value,
        role: document.getElementById('edit-role').value,
        bio: document.getElementById('edit-bio').value,
        skills: document.getElementById('edit-skills').value.split(',').map(s => s.trim()),
        email: document.getElementById('edit-email').value,
        projects: [
          {
            title: document.getElementById('proj-1-title').value,
            description: document.getElementById('proj-1-desc').value
          },
          {
            title: document.getElementById('proj-2-title').value,
            description: document.getElementById('proj-2-desc').value
          },
          {
            title: document.getElementById('proj-3-title').value,
            description: document.getElementById('proj-3-desc').value
          }
        ].filter(p => p.title)
      };

      updateUserProfile(user.id, updatedProfile);
      alert('Profile Saved!');
      window.location.hash = `#/profile/${user.id}`;
    });

    const deleteBtn = document.getElementById('delete-btn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your profile? This cannot be undone.')) {
          deleteUser(user.id);
          logoutUser();
          alert('Profile deleted.');
          window.location.hash = '#/';
        }
      });
    }
  }
}

// Scroll Color Logic
const createColorButton = () => {
  const btn = document.createElement('button');
  btn.innerHTML = '🎨';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.width = '50px';
  btn.style.height = '50px';
  btn.style.borderRadius = '50%';
  btn.style.border = 'none';
  btn.style.background = 'var(--accent-color)';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '1001';
  btn.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  btn.style.fontSize = '24px';
  btn.title = "Toggle Scroll Color Mode";

  let active = false;

  btn.addEventListener('click', () => {
    active = !active;
    if (active) {
      btn.style.transform = 'scale(1.1)';
      window.addEventListener('scroll', handleScrollColor);
    } else {
      btn.style.transform = 'scale(1)';
      window.removeEventListener('scroll', handleScrollColor);
      document.documentElement.style.removeProperty('--accent-color');
    }
  });

  document.body.appendChild(btn);
};

const handleScrollColor = () => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const hue = Math.floor(scrollPercent * 360); // 0 to 360
  document.documentElement.style.setProperty('--accent-color', `hsl(${hue}, 80%, 60%)`);
};

// Initialize
createColorButton();
