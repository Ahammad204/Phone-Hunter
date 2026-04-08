# Phone Hunter

A modern, responsive web application that allows users to search for and discover detailed information about various phone models using real-time data.

## 🌐 Live Demo

**[Phone Hunter - Live Application](https://ahammad204.github.io/Phone-Hunter/)**

## 📱 Project Overview

Phone Hunter is a dynamic single-page application (SPA) built with vanilla JavaScript that fetches phone data from the Programming Hero API. Users can browse, search, and view detailed specifications of different smartphone models in an intuitive and user-friendly interface.

## ✨ Features

- **📍 Real-time Search**: Search for phones by brand, model, or keyword
- **📊 Grid Display**: Responsive grid layout displaying phone cards with images and basic information
- **🔍 Detailed Information**: View comprehensive phone specifications in a modal dialog
  - Phone name and image
  - Storage capacity
  - GPS information
  - Additional feature details
- **📱 Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **⏳ Loading Spinner**: Visual feedback while fetching data from the API
- **🎯 Show All Feature**: Display all search results with pagination support

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3 & Tailwind CSS**: Modern styling with utility-first CSS framework
- **DaisyUI**: Pre-built Tailwind components for enhanced UI/UX
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **REST API**: Programming Hero Phone API for real-time phone data

## 📂 Project Structure

```
Phone-Hunter/
├── index.html              # Main HTML structure
├── js/
│   └── phone.js           # JavaScript logic and API calls
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch phone data and load external CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Phone-Hunter.git
   cd Phone-Hunter
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     npx http-server
     # or
     python -m http.server 8000
     ```

3. **Access the application**
   - Open `http://localhost:8000` (or your local server URL) in your browser

## 💡 How to Use

1. **Search for Phones**
   - Enter a phone brand or model name in the search field
   - Click the "Search" button
   - View the results in a responsive grid layout

2. **View Phone Details**
   - Click on the "Show Details" button on any phone card
   - A modal will display comprehensive phone specifications
   - Click "Close" to dismiss the modal

3. **Show All Results**
   - If more than 12 results are found, a "Show All" button will appear
   - Click it to view all search results at once

## 🔌 API Integration

The application uses the **Programming Hero Phone API**:
- **Base URL**: `https://openapi.programming-hero.com/api/phones`
- **Search Endpoint**: `/api/phones?search={searchText}`
- **Details Endpoint**: `/api/phone/{phoneSlug}`

## 🎨 UI Components

- **Search Bar**: Clean input field with search button
- **Phone Cards**: Grid layout cards displaying phone image, name, and details button
- **Modal Dialog**: Beautiful modal for displaying detailed phone information
- **Loading Spinner**: Animated spinner for visual feedback during data fetching
- **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)

## 📦 Dependencies

- **Tailwind CSS** (CDN): `https://cdn.tailwindcss.com`
- **DaisyUI** (CDN): `https://cdn.jsdelivr.net/npm/daisyui@3.6.2/dist/full.css`

All dependencies are loaded via CDN, no installation required!

## 🚦 Code Highlights

### Async Data Fetching
```javascript
const loadPhone = async (searchText='13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}
```

### Dynamic DOM Manipulation
```javascript
const displayPhone = (phones, isShowAll) => {
    // Dynamic phone card creation
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `...`;
        phoneContainer.appendChild(phoneCard);
    });
}
```

## 🔧 Future Enhancements

- Add pagination for improved performance
- Implement filtering options (price range, brand, specifications)
- Add favorites/bookmarks functionality
- Implement sorting features (by price, specs, rating)
- Add user reviews and ratings
- Enhance error handling and validation
- Add dark mode support
- Implement caching for better performance

## 📋 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a learning project for modern web development practices.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## 📞 Support

For questions or support, please feel free to open an issue or contact the project maintainer.

---

**Happy Phone Hunting!** 📱✨
