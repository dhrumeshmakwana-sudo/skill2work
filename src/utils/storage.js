const USERS_DB_KEY = 'skill2work_users_db';
const ACTIVE_EMAIL_KEY = 'skill2work_active_email';

export const storage = {
    getUsers: () => {
        try {
            const data = localStorage.getItem(USERS_DB_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading users database', e);
            return [];
        }
    },

    saveUsers: (users) => {
        try {
            localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
        } catch (e) {
            console.error('Error saving users database', e);
        }
    },

    getActiveEmail: () => {
        return localStorage.getItem(ACTIVE_EMAIL_KEY) || '';
    },

    setActiveEmail: (email) => {
        if (email) {
            localStorage.setItem(ACTIVE_EMAIL_KEY, email);
        } else {
            localStorage.removeItem(ACTIVE_EMAIL_KEY);
        }
    },

    getCurrentUser: () => {
        const email = storage.getActiveEmail();
        if (!email) return null;
        const users = storage.getUsers();
        return users.find(u => u.email === email) || null;
    },

    updateCurrentUser: (updatedFields) => {
        const email = storage.getActiveEmail();
        if (!email) return null;
        const users = storage.getUsers();
        const updatedUsers = users.map(user => {
            if (user.email === email) {
                return { ...user, ...updatedFields };
            }
            return user;
        });
        storage.saveUsers(updatedUsers);
        return updatedUsers.find(u => u.email === email);
    }
};
