import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleResize = () => {
      setMatches(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Add event listener to update the matches state on resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
