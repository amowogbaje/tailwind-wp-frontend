// menuData.ts
export const menuData = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "#" },
  {
    name: "Our Services",
    submenu: [
      { name: "Health Education and Promotion", link: "/services/health-education" },
      // { name: "Health and Wellness Counselling", link: "#" },
      // { name: "Basic and Comprehensive Health Assessments and Screenings", link: "/services/health-assessment" },
      { name: "Health Assessments and Screenings", link: "/services/health-assessment" },
      { name: "Health Coaching and Lifestyle Modification Support", link: "/services/health-coaching" },
      { name: "Health Condition Management Support", link: "/services/hcms" },
      { name: "Sexual and Reproductive Health Counselling (for adolescents and young adults)", link: "#" },
      { name: "Elderly Care Programs", link: "/services/elderly-care" },
    ],
  },
  {
    name: "Blog",
    submenu: [
      { name: "Healthy Lifestyle", link: "/blogs/healthy-lifestyle" },
      { name: "Healthy Eating", link: "/blogs/healthy-eating" },
      { name: "Physical Activity", link: "/blogs/physical-activity" },
      { name: "Emotional Health", link: "/blogs/emotional-health" },
      { name: "Soul and Spirit", link: "/blogs/soul-and-spirit" },
      { name: "General Health Topics", link: "/blogs/general-health-topics" },
      { name: "Men and Women Health", link: "/blogs/men-and-women-health" },
      { name: "Health Conditions", link: "/blogs/health-conditions" },
      
    ],
  },
  { name: "Contact Us", link: "#" },
];
