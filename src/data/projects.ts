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
    title: "Chicago Resource Analysis",
    description:
      "Analyzed Chicago public resources data to identify trends and insights using data cleaning, \
      visualization, and machine learning techniques. An application of GIS methodiologies to communicate findings.",
    tech: ["Python", "Jupyter", "Pandas", "sklearn"],
    link: "https://github.com/jeremym3817/Chicago_Resources_Analysis",
    screenshot: "/screenshots/web-scraper.png",
    images: [
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide1.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide2.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide3.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide4.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide5.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide6.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide7.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide8.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide9.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide10.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide11.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide12.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide13.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide14.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide15.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide16.JPG",
        "./screenshots/Jeremy Marino - Chicago Resource Analysis/Slide17.JPG",
    ]
  },
  {
    title: "Basketball Computer Vision",
    description:
      "Used YOLO Vision to track and analyze player movements in video and store insights for later analysis. \
      A fun project I put together to gain a better understanding of Computer Vision.",
    tech: ["Python", "YOLO Vision", "OpenCV"],
    link: "https://github.com/jeremym3817/Basketball-Computer-Vision-",
    screenshot: "public/screenshots/yolo_basketball_1.gif",
    images: [
        "public/screenshots/yolo_basketball_1.gif"
    ]
  },
  {
    title: "Community Service Volunteer Application Portal",
    description:
      "Built a regression model with LASSO regularization, PCA, and gradient descent to predict life expectancy.",
    tech: ["Python", "NumPy", "Pandas", "SciPy"],
    link: "https://github.com/yourusername/life-expectancy-ml",
    screenshot: "/screenshots/life-expectancy.png",
    images: [
        "./screenshots/CVP_APP_SS.png",
        "./screenshots/CVP_APP_SS2.png",
    ]
  },
];

export default projects;
