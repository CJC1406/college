// Mock Database using LocalStorage

const DB_KEY = 'student_platform_users';
const SESSION_KEY = 'student_platform_session';

export const getUsers = () => {
    const users = localStorage.getItem(DB_KEY);
    return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(DB_KEY, JSON.stringify(users));
};

export const findUser = (username) => {
    const users = getUsers();
    return users.find(u => u.username === username);
};

export const findUserById = (id) => {
    const users = getUsers();
    return users.find(u => u.id === id);
};

export const loginUser = (username, password) => {
    const user = findUser(username);
    if (user && user.password === password) {
        localStorage.setItem(SESSION_KEY, user.id);
        return user;
    }
    return null;
};

export const logoutUser = () => {
    localStorage.removeItem(SESSION_KEY);
};

export const getCurrentUser = () => {
    const userId = localStorage.getItem(SESSION_KEY);
    if (!userId) return null;
    return findUserById(userId);
};

export const updateUserProfile = (id, profileData) => {
    const users = getUsers();
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index].profile = { ...users[index].profile, ...profileData };
        localStorage.setItem(DB_KEY, JSON.stringify(users));
        return users[index];
    }
    return null;
};

// Seed initial user (Chiranth) if DB is empty
if (!getUsers().length) {
    const chiranth = {
        id: 'chiranth_1',
        username: 'chiranth',
        password: 'password', // Simple for demo
        profile: {
            name: 'Chiranth J',
            role: 'AIML Student & Web Dev',
            bio: 'I am a 2nd year AIML Student at PES College, Bangalore. I am passionate about building intelligent systems and web applications utilizing Python and React. With a strong foundation in C and modern web technologies, I aim to solve real-world problems through code.',
            skills: ['Python', 'C Programming', 'React', 'AI/ML', 'Web Development'],
            projects: [
                { title: 'Civic Connect', description: 'A React-based web app for registering civil complaints. Uses an AI model to analyze and prioritize complaints.' },
                { title: 'Library Management System', description: 'A comprehensive library management application built with Python to streamline book tracking.' },
                { title: 'Shopping Website', description: 'A fully functional e-commerce platform similar to Amazon, featuring product listings and cart management.' },
                { title: 'Finance Manager', description: 'A robust C program designed to manage and track the financial records of a company efficiently.' }
            ],
            email: 'chiranth1406@gmail.com'
        }
    };
    saveUser(chiranth);
}
