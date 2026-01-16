// Login and Register Views

export const LoginView = () => `
  <div class="section" style="height: 100vh; display: flex; align-items: center; justify-content: center;">
    <div class="glass-card" style="padding: 3rem; max-width: 400px; width: 100%; text-align: center;">
      <h1 class="name" style="font-size: 2.5rem;">Welcome</h1>
      <p style="margin-bottom: 2rem; color: var(--text-secondary);">Sign in to your portfolio</p>
      
      <form id="login-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <input type="text" id="username" placeholder="Username" style="padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;" required>
        <input type="password" id="password" placeholder="Password" style="padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;" required>
        <button type="submit" class="cta-btn" style="border: none; cursor: pointer; margin-top: 1rem;">Login</button>
      </form>
      
      <p style="margin-top: 1.5rem; color: var(--text-secondary);">
        New here? <a href="#/register" style="color: var(--accent-color);">Create an Account</a>
      </p>
      
      <!-- List of Public Profiles -->
      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
        <h3 style="margin-bottom: 1rem;">Student Profiles</h3>
        <div id="public-profiles-list" style="display: flex; flex-direction: column; gap: 0.5rem;">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>
`;

export const RegisterView = () => `
  <div class="section" style="height: 100vh; display: flex; align-items: center; justify-content: center;">
    <div class="glass-card" style="padding: 3rem; max-width: 400px; width: 100%; text-align: center;">
      <h1 class="name" style="font-size: 2.5rem;">Join Us</h1>
      <p style="margin-bottom: 2rem; color: var(--text-secondary);">Create your student portfolio</p>
      
      <form id="register-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <input type="text" id="reg-username" placeholder="Choose a Username" style="padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;" required>
        <input type="password" id="reg-password" placeholder="Choose a Password" style="padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;" required>
        <button type="submit" class="cta-btn" style="border: none; cursor: pointer; margin-top: 1rem;">Register</button>
      </form>
      
      <p style="margin-top: 1.5rem; color: var(--text-secondary);">
        Already have an account? <a href="#/" style="color: var(--accent-color);">Login</a>
      </p>
    </div>
  </div>
`;
