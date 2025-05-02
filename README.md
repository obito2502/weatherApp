# WeatherApp 🌤️

_React Native 0.79.1 — cross-platform client for OpenWeatherMap_

---

## 📦 Prerequisites

| Tool            | Min. version | Install                        |
| --------------- | ------------ | ------------------------------ |
| **Node.js**     | 20 LTS       | `nvm install 20`               |
| **Yarn**        | ≥ 1.22       | `corepack enable`              |
| **Watchman**    | —            | macOS: `brew install watchman` |
| **Xcode**       | 15           | for iOS build                  |
| **Android SDK** | 33           | via Android Studio             |
| **CocoaPods**   | 1.14         | `sudo gem install cocoapods`   |

---

## 🚀 Quick Start

```bash
# 1 · clone repo
Clone the repository

#1.1 install all packages
yarn

# 2 · create env vars
create .env file in root of the project and pass your API KEY FROM Open Weather Map
API_KEY="YOUR API KEY FROM OPEN WEATHER MAP"

# 3 · install iOS pods (skip on Windows / Linux)
cd ios && pod install && cd ..

# 4 · run the app
yarn ios      # ⬅︎ iOS simulator  (requires Xcode)
# – or –
yarn android  # ⬅︎ Android emulator / device must be running
```
