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


export const getAvatarName  = (name) => {
  if(!name) return "";

  return name.split(" ").map(word => word[0]).join('').toUpperCase();
}

export const formateDate = (date) => {
  const months = [
  "January", "February", "March", "April", "May", 
  "June", "July", "August", "September", "October", 
  "November", "December"
  ]

  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')},${date.getFullYear()}`
}
