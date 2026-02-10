# Valentine's Day Special Website ❤️

A romantic, single-page website template designed to impress your Valentine.

## 📂 Project Structure
- `index.html`: The main structure of the website.
- `style.css`: Contains all the styling, colors, and animations.
- `script.js`: Handles the interactive elements like the countdown, typewriter effect, and music player.

## 🛠 How to Customize

### 1. Music 🎵
The website uses a placeholder music file. To use your own romantic song:
1. Put your `.mp3` file in this folder.
2. Open `index.html`.
3. Find the `<audio>` tag (~line 22) and change the `src` attribute:
   ```html
   <source src="your-song-name.mp3" type="audio/mp3">
   ```

### 2. Images 📸
The gallery uses placeholder images from Unsplash. To use your own memories:
1. Add your photos to this folder (e.g., `photo1.jpg`, `photo2.jpg`).
2. Open `index.html`.
3. Find the "Our Memories" section (~line 63).
4. Replace the `src` links with your filenames:
   ```html
   <img src="photo1.jpg" alt="Our First Date">
   ```

### 3. Love Letter 💌
To write your own message:
1. Open `script.js`.
2. Find the `text` variable (~line 22).
3. Type your message inside the quotes. Use `\n` for new lines.

### 4. Reasons Why I Love You 💖
1. Open `index.html`.
2. Find the "Reasons Why I Love You" section (~line 85).
3. Change the text inside the `<p>` tags for each card.

## ✨ Features
- **Floating Hearts**: Animated background.
- **Countdown**: automatically counts down to Feb 14th.
- **Surprise Button**: A special popup message.
- **Falling Petals**: Beautiful animation at the bottom.

Happy Valentine's Day! 🌹
