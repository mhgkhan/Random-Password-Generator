# 🔐 Random Password Generator

A free, fast, and secure online tool for generating strong, customizable passwords to protect your digital accounts.

## 🌟 Features

- **Instant Password Generation** - Generate 5 unique passwords with a single click
- **Customizable Length** - Set password length between 8-20 characters
- **Character Options** - Toggle uppercase, lowercase, numbers, and special symbols
- **One-Click Copy** - Copy any generated password to clipboard instantly
- **Password Selection** - Select and highlight passwords for easy reference
- **Secure** - Passwords are generated locally in your browser; nothing is stored or transmitted
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Progressive Web App** - Installable as a web app for offline access

## 🚀 Quick Start

1. **Open the App** - Visit the Random Password Generator in your browser
2. **Adjust Settings** (Optional)
   - Drag the length slider to set desired password length (8-20 characters)
   - Character types are enabled by default (uppercase, lowercase, numbers, symbols)
3. **Generate Passwords** - Click the "Generate" button
4. **Copy Password** - Click the copy icon next to any password to copy it
5. **Use It** - Paste the password into your account

## 💻 Technology Stack

- **HTML5** - Semantic markup for accessibility
- **CSS3** - Modern styling with responsive design
- **JavaScript (Vanilla)** - Pure JavaScript without dependencies

## 📁 Project Structure

```
RANDOMPASSWORDGENERATOR/
├── index.html              # Main application page
├── readme.md               # Documentation (this file)
├── site.webmanifest        # PWA manifest configuration
├── favicon.ico             # Favicon for browser tab
├── favicon-code.html       # Favicon metadata
├── public/
│   ├── image.jpeg          # Banner image
│   └── copyicon.png        # Copy button icon
├── scripts/
│   └── main.js             # Core password generation logic
└── styles/
    └── style.css           # Application styling
```

## 🎯 How It Works

### Password Generation Algorithm

The application generates strong passwords by:
1. Creating a mix of uppercase letters, lowercase letters, numbers, and symbols
2. Shuffling the character combination randomly
3. Trimming to the specified length
4. Ensuring a good distribution of all character types

### Generated Passwords

Each time you click "Generate," the app creates **5 different passwords** with the same specifications, giving you multiple secure options to choose from.

## 🔒 Security

- ✅ **No Server Storage** - Passwords are generated entirely in your browser
- ✅ **No Data Transmission** - Generated passwords never leave your device
- ✅ **Open Source** - Code is transparent and can be audited
- ✅ **Cryptographically Secure** - Uses browser's Math.random() for entropy

## 📱 Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Features in Detail

### Password Length Control
- Slider from 8 to 20 characters
- Default: 12 characters
- Adjust in real-time before generating

### Character Type Options
- **Uppercase Letters (A-Z)** - Enabled by default
- **Lowercase Letters (a-z)** - Enabled by default
- **Numbers (0-9)** - Enabled by default
- **Symbols (!@#$%^&*)** - Enabled by default

### Copy Functionality
- Click the copy icon next to any password
- Password automatically copied to clipboard
- Confirmation alert shows copied password
- Graceful error handling for permission issues

### Password Selection
- Click on a password to select/highlight it
- Easy to copy text manually if needed

## 🚦 Usage Examples

### Generate a Strong Account Password
1. Keep all character types enabled
2. Set length to 16 characters
3. Click Generate
4. Copy the first password

### Create a PIN-Like Password
1. Disable symbols and letters
2. Set length to 8
3. Click Generate
4. Use the numeric-only password

### Professional Password for Work Accounts
1. Enable all character types
2. Set length to 20 (maximum)
3. Click Generate
4. Select and copy the strongest-looking option

## 🐛 Troubleshooting

### Password Copy Not Working
- Check browser permissions for clipboard access
- Try refreshing the page
- Ensure you're using a modern browser
- Use the manual selection method as a fallback

### Passwords Look Similar
- This is normal; each password is randomly generated
- Click Generate again for new options
- Password similarity decreases with longer lengths

## 📞 Support & Contact

- **About** - [Visit GHAZNA DEV](https://ghazna.online/about/)
- **Contact** - [Contact Us](https://ghazna.online/contactus)
- **Home** - [GHAZNA DEV Home](https://ghazna.online)

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Developed by **GHAZNA DEV**

---

## Tips for Strong Passwords

✓ Use at least 12 characters
✓ Mix uppercase, lowercase, numbers, and symbols
✓ Avoid dictionary words and personal information
✓ Use unique passwords for different accounts
✓ Update passwords regularly for sensitive accounts
✓ Never share passwords via email or messaging

---

**Start generating secure passwords today! Keep your accounts safe.** 🔐
