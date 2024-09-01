export const getTelegramUserData = () => {
    const tg = window.Telegram.WebApp;
  
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      const { id, first_name, username, photo_url } = tg.initDataUnsafe.user;
      const accountAge = calculateAccountAge(tg.initDataUnsafe.user.date);
      const isPremium = tg.initDataUnsafe.user.is_premium || false;
  
      return {
        id,
        name: username || first_name,
        avatarUrl: photo_url,
        accountAge,
        isPremium
      };
    }
  
    return null;
  };
  
  const calculateAccountAge = (creationDate) => {
    const now = new Date();
    const created = new Date(creationDate * 1000);
    const diffYears = now.getFullYear() - created.getFullYear();
    const diffMonths = now.getMonth() - created.getMonth();
    const diffDays = now.getDate() - created.getDate();
  
    if (diffYears > 0) return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
    if (diffMonths > 0) return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  };
  
  export const getRandomAvatar = () => {
    // Implement logic to generate or fetch a random avatar URL
    return 'https://example.com/random-avatar.png';
  };