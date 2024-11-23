const COOKIE_OPTIONS = {
    path: '/',
    maxAge: 60 * 60 * 24, // 1 día
    sameSite: 'strict' as const,
  };

const setCookie = (name: string, value: string, options = COOKIE_OPTIONS) => {
    const optionsString = Object.entries(options)
      .map(([key, val]) => (key === 'maxAge' ? `Max-Age=${val}` : `${key}=${val}`))
      .join('; ');
    document.cookie = `${name}=${value}; ${optionsString}`;
  };
  
  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, val] = cookie.split('=');
      acc[key] = decodeURIComponent(val);
      return acc;
    }, {} as Record<string, string>);
    return cookies[name] || null;
  };
  
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  };

  export {
    setCookie,
    getCookie,
    deleteCookie
  }