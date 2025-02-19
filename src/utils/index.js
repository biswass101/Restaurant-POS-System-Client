export const getRandomBg = () => {
  const colors = [
    "#FF00004D", // Light Red
    "#00FF004D", // Light Green
    "#0000FF4D", // Light Blue
    "#FFFF004D", // Light Yellow
    "#00FFFF4D", // Light Cyan
    "#FF00FF4D", // Light Magenta
    "#FFFFFF4D", // Light White
    "#0000004D", // Light Black (Grayish)
    "#8080804D", // Lighter Gray
    "#FFA5004D", // Light Orange
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
