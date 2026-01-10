import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const isDark: boolean = localStorage.getItem('theme') === 'dark';
  const [darkMode, setDarkMode] = useState(true);
  const classList: DOMTokenList = document.documentElement.classList;

  const handleClick = () => {
    setDarkMode(!darkMode);
    classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    if (!classList.contains('dark') && darkMode) {
      classList.toggle('dark');
    }
  }, [darkMode, classList]);

  return (
    <div className="mt-1">
      <button
        className="w-12 h-5 pointer rounded-[24px] bg-[#333] dark:bg-white"
        onClick={handleClick}
      >
        <div className="w-5 h-5 bg-white dark:bg-[#333] dark:translate-x-full rounded-full transition-all ease-in-out delay-150 duration-300" />
      </button>
    </div>
  );
};

export default ToggleTheme;
