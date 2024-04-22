// profilesData.js
import Img1 from '../images/1.jpg';
import Img2 from '../images/2.jpg';
import Img3 from '../images/3.jpg';
import Img4 from '../images/4.jpg';
import Img5 from '../images/5.jpg';
import Img6 from '../images/6.jpg';
import Img7 from '../images/7.jpg';
import Img8 from '../images/8.jpg';

const profilesData = [
  {
    id: 1,
    name: "Aarav Sharma",
    photo: `${Img1}`,
    description: "Aarav Sharma is a senior software engineer with 10 years of experience in web development. He specializes in front-end technologies such as React and Angular, and has worked on several high-traffic websites.",
    address: { lat: 40.7128, lng: -74.006 }
  },
  {
    id: 2,
    name: "Aashi Singh",
    photo: `${Img2}`,
    description: "Aashi Singh is a data scientist with expertise in machine learning and natural language processing. She has a strong background in statistics and programming, and has led projects in predictive analytics and recommendation systems.",
    address: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "Aaradhya Patel",
    photo: `${Img3}`,
    description: "Aaradhya Patel is a cybersecurity specialist with a focus on network security and penetration testing. She has experience working in both corporate and government sectors, and is passionate about educating others on cybersecurity best practices.",
    address: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: 4,
    name: "Aaditya Kumar",
    photo: `${Img4}`,
    description: "Aaditya Kumar is a DevOps engineer with expertise in cloud infrastructure and automation tools. He has managed large-scale deployments on AWS and Azure, and is experienced in containerization technologies such as Docker and Kubernetes.",
    address: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 5,
    name: "Ananya Gupta",
    photo: `${Img5}`,
    description: "Ananya Gupta is a UX/UI designer with a passion for creating intuitive and visually appealing user interfaces. She has worked on various digital products, from mobile apps to e-commerce websites, and is skilled in prototyping and user testing.",
    address: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 6,
    name: "Akshay Mishra",
    photo: `${Img6}`,
    description: "Akshay Mishra is a full-stack developer specializing in Python and JavaScript. He has experience building scalable web applications and RESTful APIs, and is proficient in frameworks such as Django and React.",
    address: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 7,
    name: "Aditi Jain",
    photo: `${Img7}`,
    description: "Aditi Jain is a product manager with a background in agile development and product strategy. She has led cross-functional teams to deliver successful software products and is passionate about creating products that solve real-world problems.",
    address: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: 8,
    name: "Arjun Verma",
    photo: `${Img8}`,
    description: "Arjun Verma is a systems administrator with expertise in Linux and Windows environments. He has managed IT infrastructure for large organizations and is skilled in troubleshooting and security management.",
    address: { lat: 37.7749, lng: -122.4194 },
  },
];

export default profilesData;
