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
    title: "Northeastern Facility Tracker App",
    description:
      "A web application that tracks and displays historical gym facility traffic locations on Northeastern's campus. \
      Cleaned and processed data with Python and used JavaScript/HTML/CSS for cilent side display. \
      Currently working on hosting the web scraper using a Raspberry Pi for future data collection and analysis.",
    tech: ["Python", "JavaScript/HTML/CSS", "SQLite", "Web Scraping"],
    link: "https://github.com/jeremym3817/Northeastern-Marino-Squash-Buster-Status-Web-App",
    screenshot: "/screenshots/life-expectancy.png",
    images: [
        "./screenshots/Screenshot 2025-12-18 164000.png",
        "./screenshots/Screenshot 2025-12-18 164024.png"
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
    title: "Community Service Application Portal",
    description:
      "Application portal for volunteer program that reads, filters, manipulates, and displays applicant data. \
      Built with Streamlit for easy deployment and interaction to simplify volunteer matching process.",
    tech: ["Python", "Excel", "Jupyter", "Streamlit"],
    link: "https://github.com/jeremym3817/Community-Service-Application-Portal",
    screenshot: "/screenshots/life-expectancy.png",
    images: [
        "./screenshots/CVP_APP_SS.png",
        "./screenshots/CVP_APP_SS2.png",
    ]
  },
];

export default projects;
