import React, { useContext } from 'react';
import { ThemesContext, DarkModeContext } from '../../App';

export default function SecondComponent() {
  const themes = useContext(ThemesContext);
  const isDarkMode = useContext(DarkModeContext);

  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <p style={styles}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus quae,
      reprehenderit, eum temporibus earum iste ad dolorem amet obcaecati, expedita quis cum
      eligendi! Debitis illo expedita eos sed placeat?
    </p>
  );
}
