---
outline: deep
---

# Problem Statement 7

::: info
This problem statement is shared by [Sharp Economy](https://sharpeconomy.org/)  - one of the technology partner for HackIndia 2025.

🏆 Work on this problem statement if you want to compete in the **$25,000 Prize Pool**. 
:::

##  Personalized Travel Itinerary Generator

**Difficulty:**  Intermediate – Advanced

### Problem
Build an AI agent that creates tailor-made travel plans based on user inputs like budget, location, travel dates, interests (e.g., food, history, nightlife), and travel style (solo, couple, family, backpacking). Bonus points for integrating live APIs for real-time recommendations!


#### 💡 Use Cases:

- "Plan a 5-day trip to Kerala under ₹30K with lots of beaches and local food."
- "Suggest things to do in Japan during cherry blossom season for a couple on a honeymoon."
- "Backpacking trip across Himachal with adventure spots and cheap stays."

#### 📦 Models

- **LLM:** GPT-3.5 / Mistral / Claude / LLaMA-3 for generating itineraries
- **Vector DB:** Use Pinecone or Chroma for retrieving location-specific embeddings
- **LangChain/LLamaIndex** for chaining user queries to external APIs and tools
- **Optional:** Travel LLM fine-tuned with custom dataset (TripAdvisor reviews, travel blogs)

### 🌐 API Integrations:
- **Google Maps API** – for live locations, routes, distances
- **Yelp API** – for food and activity recommendations
- **Booking.com / Skyscanner / Airbnb** – stay suggestions
- **OpenWeather API** – suggest activities based on weather

#### 🔎 Data Sources

- TripAdvisor review datasets (via Kaggle)
- Open travel guides & blogs (scrape LonelyPlanet, Reddit r/solotravel)
- Historical price datasets from Skyscanner (or simulate)
- Geo data for cities, monuments, restaurants

*“Why Google your next trip when you can AI-plan it the Indian way? Budget, biryani, and badaadmi vibes – sorted!”*

