// Profile View Component

export const ProfileView = (user) => {
  if (!user || !user.profile) return '<div class="section"><h2 class="section-title">User not found</h2></div>';

  const { name, role, bio, skills, projects, email } = user.profile;

  // Typing effect data
  const roles = role.split('&').map(r => r.trim());

  return `
    <header>
      <nav class="glass-nav">
        <a href="#/" class="logo">CJ</a>
        <ul class="nav-links">
          <li><a href="#/profile/${user.id}">Profile</a></li>
          <!-- <li><a href="#/edit">Edit My Profile</a></li> -->
          ${localStorage.getItem('student_platform_session') === user.id ? '<li><a href="#/edit">Edit</a></li>' : ''}
          <li><a href="#/" onclick="localStorage.removeItem('student_platform_session')">Logout</a></li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
      </nav>
    </header>

    <main>
      <section id="hero">
        <div class="hero-content">
          <p class="greeting">Hello, I'm</p>
          <h1 class="name">${name}</h1>
          <h2 class="role">I am <span class="typing-text">${role}</span></h2>
          <a href="mailto:${email}" class="cta-btn">Get in Touch</a>
        </div>
        <div class="hero-visual">
          <!-- Spacer -->
        </div>
      </section>

      <section id="about" class="section">
        <h2 class="section-title">About Me</h2>
        <div class="about-container glass-card">
          <p>${bio}</p>
        </div>
      </section>

      <section id="skills" class="section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          ${skills.map(skill => `<div class="skill-card glass-card">${skill}</div>`).join('')}
        </div>
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          ${projects.map(project => `
            <div class="project-card glass-card">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">Contact</h2>
        <div class="contact-container glass-card">
          <p>Interested in working together?</p>
          <a href="mailto:${email}" class="email-link">${email}</a>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 ${name}. Powered by Student Platform.</p>
    </footer>
  `;
};
