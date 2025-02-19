export const getRandomBg = () => {
    const colors = [
      "#FF0000", // Red
      "#00FF00", // Green
      "#0000FF", // Blue
      "#FFFF00", // Yellow
      "#00FFFF", // Cyan
      "#FF00FF", // Magenta
      "#FFFFFF", // White
      "#000000", // Black
      "#808080", // Gray
      "#FFA500", // Orange
    ];
  
    return colors[Math.floor(Math.random() * colors.length)];
  };
  