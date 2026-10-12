# 🌾 Kisaan.AI — Intelligent Farming & Market System

A front-end prototype for an AI-powered farming assistant: crop recommendation, disease detection, weather forecast, mandi (market) prices, smart irrigation and a crop-selling marketplace.

> **Status:** UI prototype. All data (charts, prices, weather, recommendations) is static/dummy. Backend + AI integration is still to be built — that's where contributors can help!

## Screens
- **Landing page** — hero, features, stats, testimonials
- **Auth** — login, register, OTP, forgot password
- **Dashboard** — Home, AI Crop Recommendation, Disease Detection, Weather, Market Prices, Sell Crops, Irrigation, Profile

## Project structure
```
kisaan-ai/
├── index.html        # all screens (landing, auth, dashboard)
├── css/
│   └── styles.css    # design tokens + all styles
├── js/
│   ├── app.js        # screen/panel switching, hero animation
│   └── charts.js     # Chart.js charts for the dashboard
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## Run locally
No build step needed.

```bash
# Option 1: just open index.html in your browser

# Option 2: simple local server
python3 -m http.server 5500
# then open http://localhost:5500
```

Chart.js and Google Fonts load from a CDN, so you need internet access.

## Tech stack
HTML, CSS, vanilla JavaScript, [Chart.js 4.4.1](https://www.chartjs.org/)

## Ideas / roadmap
- [ ] Backend API (Node/Express or FastAPI) + database
- [ ] Real authentication (JWT + OTP)
- [ ] Crop recommendation model (soil NPK, pH, rainfall, temperature)
- [ ] Leaf disease detection (image classification)
- [ ] Live weather API integration
- [ ] Live mandi price data (e.g. Agmarknet / data.gov.in)
- [ ] Sell-crops listing + buyer flow (currently placeholder)
- [ ] Smart irrigation panel (currently placeholder)
- [ ] Hindi / regional language support
- [ ] Mobile responsiveness polish

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).
