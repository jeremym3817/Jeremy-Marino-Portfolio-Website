export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    screenshot?: string;
    images: string[];
}

const projects: Project[] = [
  {
    title: "Machine Learning Life Expectancy Model",
    description:
      "Built a regression model with LASSO regularization, PCA, and gradient descent to predict life expectancy.",
    tech: ["Python", "NumPy", "Pandas", "SciPy"],
    link: "https://github.com/yourusername/life-expectancy-ml",
    screenshot: "/screenshots/life-expectancy.png",
    images: [
        "./screenshots/Marino_Jeremy.jpg",
        "./screenshots/WIN_20250508_14_29_35_Pro.jpg",
        "./screenshots/Marino_Jeremy.jpg",
    ]
  },
  {
    title: "Web Scraper + Dashboard",
    description:
      "Automated scraping pipeline with scheduled jobs, data cleaning, and a React-based dashboard.",
    tech: ["Python", "FastAPI", "React", "Docker"],
    link: "https://github.com/yourusername/web-scraper",
    screenshot: "/screenshots/web-scraper.png",
    images: [
        "./screenshots/Marino_Jeremy.jpg",
        "./screenshots/WIN_20250508_14_29_35_Pro.jpg",
        "./screenshots/Marino_Jeremy.jpg",
    ]
  },
  {
    title: "TikTok Trend Analyzer",
    description:
      "Analyzes demographic-linked TikTok trends using classification models and signal processing.",
    tech: ["Python", "sklearn", "TypeScript", "Node.js"],
    link: "https://github.com/yourusername/tiktok-trends",
    screenshot: "/screenshots/tiktok-trends.png",
    images: [
        "./screenshots/Marino_Jeremy.jpg",
        "./screenshots/WIN_20250508_14_29_35_Pro.jpg",
        "./screenshots/Marino_Jeremy.jpg",
    ]
  },
];

export default projects;
