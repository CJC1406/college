// Editor View

export const EditorView = (user) => {
  const { name, role, bio, skills, email } = user.profile;
  const skillsString = skills.join(', ');

  return `
    <div class="section" style="padding-top: 100px;">
      <div class="glass-card" style="padding: 2rem; max-width: 800px; margin: 0 auto;">
        <h2 class="section-title">Edit Profile</h2>
        
        <form id="editor-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Full Name</label>
            <input type="text" id="edit-name" value="${name}" style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Role / Title</label>
            <input type="text" id="edit-role" value="${role}" style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Bio</label>
            <textarea id="edit-bio" rows="5" style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">${bio}</textarea>
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Skills (comma separated)</label>
            <input type="text" id="edit-skills" value="${skillsString}" style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
          </div>

          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Email</label>
            <input type="email" id="edit-email" value="${email}" style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
          </div>
          
          <!-- Project Editor -->
          <div>
            <hr style="border: 0; border-top: 1px solid var(--glass-border); margin: 2rem 0;">
            <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Projects</h3>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
               <div class="glass-card" style="padding: 1rem;">
                 <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Project 1</label>
                 <input type="text" id="proj-1-title" placeholder="Title" value="${user.profile.projects[0]?.title || ''}" style="width: 100%; margin-bottom: 0.5rem; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
                 <textarea id="proj-1-desc" placeholder="Description" rows="2" style="width: 100%; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">${user.profile.projects[0]?.description || ''}</textarea>
               </div>
               
               <div class="glass-card" style="padding: 1rem;">
                 <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Project 2</label>
                 <input type="text" id="proj-2-title" placeholder="Title" value="${user.profile.projects[1]?.title || ''}" style="width: 100%; margin-bottom: 0.5rem; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
                 <textarea id="proj-2-desc" placeholder="Description" rows="2" style="width: 100%; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">${user.profile.projects[1]?.description || ''}</textarea>
               </div>
               
               <div class="glass-card" style="padding: 1rem;">
                 <label style="display: block; margin-bottom: 0.5rem; color: var(--accent-color);">Project 3</label>
                 <input type="text" id="proj-3-title" placeholder="Title" value="${user.profile.projects[2]?.title || ''}" style="width: 100%; margin-bottom: 0.5rem; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">
                 <textarea id="proj-3-desc" placeholder="Description" rows="2" style="width: 100%; padding: 0.8rem; border-radius: 6px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.05); color: white;">${user.profile.projects[2]?.description || ''}</textarea>
               </div>
            </div>
          </div>
          
          <div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; justify-content: space-between;">
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="cta-btn" style="border: none; cursor: pointer;">Save Changes</button>
                <a href="#/profile/${user.id}" style="padding: 12px 30px; color: var(--text-secondary);">Cancel</a>
            </div>
            <button type="button" id="delete-btn" style="background: none; border: 1px solid #ef4444; color: #ef4444; padding: 10px 20px; border-radius: 20px; cursor: pointer;">Delete Profile</button>
          </div>
        </form>
      </div>
    </div>
  `;
};
