import Project1 from "../public/images/elite.png";
import Project2 from "../public/images/nier.png";
import Project3 from "../public/images/taco.jpg";
// import Project4 from "../../public/images/weko.jpg";
// import Img1 from "../../public/images/aboutHouse.png";

export const benefits = [
  {
    heading: "Responsive",
    description:
      "We build responsive websites that display on all of your devices and screen sizes by automatically adapting to the screen, whether it is a desktop, laptop, tablet, smartphone, or even a smart TV. With our responsive web design approach, all of the elements on your page are scaled appropriately, taking advantage of whatever screen size the user has. This means that your website will look good on any device.",
  },
  {
    heading: "Accessible",
    description:
      "Our websites are accessible, meaning that they are designed and developed so that people with disabilities can use them as well. We build them in a way that allows people with disabilities to perceive, understand, navigate, and interact with your website, especially if they use screen readers. It is essential that the Web be accessible in order to provide equal access and equal opportunity to people with diverse abilities.",
  },
  {
    heading: "Search Engine Optimized",
    description:
      "SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration so its pages can become easily findable, boosting your credibility, earning you more traffic, and improving your online visibility.",
  },
  {
    heading: "Diversification",
    description:
      "Relying solely on Airbnb and VRBO can be risky, as their policies and algorithms can change at any time. Having your own website provides a level of diversification and independence.",
  },
] as const;

export const features = [
  {
    service: "Booking Engine",
    description:
      "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
  },
  {
    service: "Guest Reviews",
    description:
      "Showcase positive reviews and testimonials from previous guests to build trust and credibility. Visitors will only be able to review once they've booked a stay on your property.",
  },
  {
    service: "Admin Panel",
    description:
      "Your admin panel will allow you to create, update, and delete listings on your personalized booking websites. View the number of bookings, and make any updates as needed.",
  },
  {
    service: "Payment Processing",
    description:
      "We use Stripe payment processing so that you'll be able to secure online transactions, integrating a trusted payment gateway for businesses to accept credit card payments.",
  },
  {
    service: "Mobile Resposive",
    description:
      "Designed to adapt and display optimally on various devices and screen sizes, providing an optimal user experience by adjusting its layout and content dynamically.",
  },
  {
    service: "Accessible",
    description:
      "Ensures that people with disabilities can perceive, understand, navigate, and interact with its content, features, and functionalities effectively.",
  },
  {
    service: "Search Engine Optomization",
    description:
      "A search engine optimized website is configured to enhance its visibility and ranking on search engine results pages.",
  },
  {
    service: "Page Speed Optmization",
    description:
      "Ensure that webite pages load quickly and efficiently and has fast loading times for its pages and content, improving user experience search engine rankings.",
  },
  {
    service: "Blog Articles",
    description:
      "Blog articles enhance website visibility by providing fresh, relevant, and keyword-rich content that boosts organic search rankings, and engages potential clients.",
  },
  {
    service: "Site Map",
    description:
      "Site maps increase website visibility by helping search engines to understand the site's structure, improving rankings and ensuring that all pages are easily accessible.",
  },
  {
    service: "Social Media Intergration",
    description:
      "Enhances website visibility by connecting your website to social platforms, enabling easy sharing of content, ultimately expanding the online reach of your business.",
  },
  {
    service: "Google Indexing",
    description:
      "Allows google to crawl and analyze the content of your website, and then indexes it in its database, ensuring that your website is eligible to appear in Google search results.",
  },
] as const;

export const process = [
  {
    id: 58,
    processName: "",
    processDescription: "",
    icon: true,
  },
  {
    id: 59,
    processName: "Initial Consultation",
    processDescription:
      "We arrange a Zoom meeting to discuss your business needs, gather information, and send a tailored service contract afterward.",
    icon: false,
  },
  {
    id: 60,
    processName: "Onboarding",
    processDescription:
      "Once the Contract is signed and returned, you gain access to the client dashboard. Here, you complete a detailed questionnaire to inform our copywriting process.",
    icon: false,
  },
  {
    id: 61,
    processName: "Design & Development",
    processDescription:
      "Once your website meets approval, we'll deploy your booking application globally and provide a brief training session on using the dashboard.",
    icon: false,
  },
  {
    id: 62,
    processName: "Deployment and Going Live",
    processDescription:
      "Once your website meets approval, we'll deploy your booking application globally and provide a brief training session on using the dashboard.",
    icon: false,
  },
  {
    id: 63,
    processName: "",
    processDescription: "",
    icon: true,
  },
] as const;

export const pricing = [
  {
    id: 2845654656,
    plan: "Business Website",
    for: "11 or more Properties",
    description: "Optimize your online presence and attract more visitors.",
    href: "/services/business-websites",
    prices: [
      {
        id: 1,
        price: "250 / Month",
      },
      {
        id: 2,
        price: "2,400 / Year",
      },
    ],
    includes: [
      {
        id: 28.1,
        feature: "5 Page website",
      },
      {
        id: 28.2,
        feature: "Custom Design",
      },
      {
        id: 28.3,
        feature: "Built in HTML, CSS & Javascript",
      },
      {
        id: 28.4,
        feature: "SEO Services",
      },
      {
        id: 28.5,
        feature: "12 Blog Articles/year",
      },
      {
        id: 28.6,
        feature: "$500 set up fee - one time",
      },
    ],
    btnType: "tertiary",
  },
  {
    id: 27,
    plan: "E-Commerce",
    description: "Comprehensive e-commerce platforms designed to drive sales.",
    href: "/services/ecommerce-stores",
    prices: [
      {
        id: 1,
        price: "350 / Month",
      },
      {
        id: 2,
        price: "3,360 / Year",
      },
    ],
    includes: [
      {
        id: 26.1,
        feature: "Everything in Business, plus:",
      },
      {
        id: 26.3,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 27.3,
        feature: "CMS Integration",
      },
      {
        id: 27.4,
        feature: "Product Variants",
      },
      {
        id: 27.6,
        feature: "User Reviews",
      },
      {
        id: 27.7,
        feature: "$500 set up fee - one time",
      },
    ],
    btnType: "secondary",
  },
  {
    id: 28,
    plan: "Booking Platform",
    description: "Optimize your online presence and attract more visitors.",
    href: "/services/booking-platforms",
    prices: [
      {
        id: 1,
        price: "375 / Month",
      },
      {
        id: 2,
        price: "3,600 / Year",
      },
    ],
    includes: [
      {
        id: 28.1,
        feature: "Everything in E-Commerce, plus:",
      },
      {
        id: 28.2,
        feature: "Admin Dashboard",
      },
      {
        id: 28.3333,
        feature: "Client Invoicing",
      },
      {
        id: 28.344534,
        feature: "Avaialbility Calendar",
      },
      {
        id: 28.54654655,
        feature: "Sales Charts",
      },
      {
        id: 28.354654656,
        feature: "$500 set up fee - one time",
      },
    ],
    btnType: "tertiary",
  },
] as const;

export const projects = [
  {
    src: Project3,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. This is a full stack project similar to 'Elite Retreat Rentals', since it has an admin panel where menu items can be created, updated and deleted. Users can see menu items and reach out via a fully functional contact form.",
    techStack: [
      {
        title: "CSS Modules",
      },
      {
        title: "Nodemailer",
      },
    ],

    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
  {
    src: Project1,
    title: "Elite Retreat Rentals",
    description:
      "Elite Retreat Rentals is a Phoenix, AZ based company that provides lodging services to travelers at an affordable price. This full stack project was built with an admin panel that allows the owner to create, update and delete properties. Each property listing shows details and images, and gives users the ability to book in advance with a fully functional booking engine. Stripe payment gateway was added, allowing users can pay in advance with any major credit card.",

    techStack: [
      {
        title: "Redux",
      },
      {
        title: "Stripe",
      },
    ],

    href: "https://www.eliteretreatrentals.com/",
    github: "https://github.com/ChristianWare/Case-Study-One",
  },
  // {
  //   src: Project4,
  //   title: "AZ Golf Whisperer",
  //   description:
  //     "Golf Guise/AZ Golf Whisperer is a front end project for a client of mine who sells Golf Stay-and-Play packages. The site showcases the details of each package offered, which golf courses they are partnered with, as well as information on golf club rentals. This was built with Next.Js, styled with CSS Modules and Nodemailer was used for the contact form for email notifications.",
  //   techStack: [
  //     {
  //       title: "Next.JS",
  //     },
  //     {
  //       title: "CSS Modules",
  //     },
  //     {
  //       title: "React Hook Form",
  //     },
  //     {
  //       title: "Node Mailer",
  //     },
  //   ],
  //   href: "https://golf-guise.vercel.app/",
  //   github: "https://github.com/ChristianWare/golf-guise",
  // },
  {
    src: Project2,
    title: "Nier Transportaion",
    description:
      "Nier Transportation is a luxury black car driving service based in Phoenix, AZ, specializing in airport transfers, and long distance drives. Users have the ability to communicate witht the owner via a fully functional contact form that sends messages directly to the owners email address. The blog was built using Makrkdown nadn MDX.",
    techStack: [
      {
        title: "React Hook Form",
      },
      {
        title: "Node Mailer",
      },
    ],

    href: "https://www.niertransportation.com/",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
  },
] as const;

export const projectFaqs = [
  {
    id: 401,
    question: "What is the process for starting a new project?",
    answer:
      "To start a new project, contact us through our website. We'll set up an initial consultation to discuss your requirements, goals, and timelines. After that, we'll create a project plan and get started on development.",
  },
  {
    id: 402,
    question: "How do you manage project timelines?",
    answer:
      "We use project management tools to track progress and ensure timely delivery. Regular updates and milestones are shared with clients to keep them informed throughout the development process.",
  },
  {
    id: 403,
    question: "Can you work with tight deadlines?",
    answer:
      "Yes, we can accommodate tight deadlines. We assess each project's scope and requirements to provide a realistic timeline and ensure timely completion without compromising quality.",
  },
  {
    id: 404,
    question: "What information do you need from me to start a project?",
    answer:
      "We need details about your business, project goals, target audience, design preferences, and any specific features or functionalities you want to include. The more information you provide, the better we can tailor the project to your needs.",
  },
  {
    id: 405,
    question: "How do you handle project revisions and feedback?",
    answer:
      "We encourage client feedback throughout the project. Revisions are handled in stages, ensuring that your input is incorporated into the final product. Clear communication and collaboration are key to our process.",
  },
  {
    id: 406,
    question: "What happens if there are changes to the project scope?",
    answer:
      "If there are changes to the project scope, we discuss the impact on timelines and costs with you. Any adjustments are documented, and we ensure that all parties agree to the revised plan before proceeding.",
  },
  {
    id: 407,
    question: "How do you ensure the quality of your projects?",
    answer:
      "We follow best practices in development, conduct thorough testing, and perform quality assurance checks to ensure that the final product meets the highest standards of quality and functionality.",
  },
  {
    id: 408,
    question: "Do you offer support and maintenance after project completion?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website remains updated, secure, and performs optimally after the project is completed.",
  },
  {
    id: 409,
    question:
      "Can you integrate third-party tools and services into my project?",
    answer:
      "Yes, we can integrate various third-party tools and services, such as payment gateways, CRM systems, and marketing automation tools, to enhance the functionality of your website.",
  },
  {
    id: 410,
    question: "What technologies do you use for your projects?",
    answer:
      "We use a variety of technologies, including Next.js, MongoDB, and other modern frameworks and tools, to ensure that our projects are built to the highest standards of performance and scalability.",
  },
];

export const homePageFaqs = [
  {
    id: 301,
    question: "What services do you offer?",
    answer:
      "We offer custom-coded solutions for direct booking websites, e-commerce platforms, and business websites, tailored to enhance user experience and SEO.",
  },
  {
    id: 302,
    question: "Why should I choose custom-coded websites?",
    answer:
      "Custom-coded websites provide better performance, enhanced security, and improved SEO compared to templates or site builders. They are tailored specifically to your business needs.",
  },
  {
    id: 303,
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. Typically, a custom website can take anywhere from a few weeks to a few months to complete.",
  },
  {
    id: 304,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains updated, secure, and optimized for performance.",
  },
  {
    id: 305,
    question: "Can I update the content on my website myself?",
    answer:
      "Absolutely. We integrate user-friendly content management systems (CMS) that allow you to easily update and manage your website content.",
  },
  {
    id: 306,
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are designed to be fully responsive, ensuring they look and perform well on all devices, including smartphones and tablets.",
  },
  {
    id: 307,
    question: "What kind of businesses do you work with?",
    answer:
      "We work with a variety of businesses, including healthcare providers, hospitality services, e-commerce stores, and many other sectors that need a strong online presence.",
  },
  {
    id: 308,
    question: "How do you ensure my website is secure?",
    answer:
      "We implement advanced security measures, including secure payment gateways and regular security updates, to protect your website and customer data.",
  },
  {
    id: 309,
    question: "Do you offer SEO services?",
    answer:
      "Yes, our websites are built with SEO best practices in mind. We also offer additional SEO services to help improve your website's visibility in search engine results.",
  },
  {
    id: 310,
    question: "How do I get started with your services?",
    answer:
      "You can get started by contacting us through our website. We'll discuss your needs and provide a customized plan to help you achieve your business goals.",
  },
];

export const bookingWebsiteFaqs = [
  {
    id: 101,
    question: "What types of businesses can benefit from a booking website?",
    answer:
      "Any business that requires appointments or reservations, such as salons, spas, clinics, restaurants, and event venues, can benefit from a booking website.",
  },
  {
    id: 102,
    question: "How do customers make bookings on the website?",
    answer:
      "Customers can view available times, select their preferred slot, and complete the booking process directly on your website. The system will send a confirmation email automatically.",
  },
  {
    id: 103,
    question: "Can I customize the booking form fields?",
    answer:
      "Yes, you can customize the booking form fields to collect specific information from your customers, ensuring you have all the necessary details for their appointment or reservation.",
  },
  {
    id: 104,
    question: "How are booking notifications handled?",
    answer:
      "Both you and your customers will receive email or SMS notifications for new bookings, changes, and cancellations. This ensures everyone is kept informed and reduces no-shows.",
  },
  {
    id: 105,
    question: "Can the booking website handle payments?",
    answer:
      "Yes, we can integrate secure payment gateways into your booking website, allowing customers to make payments online during the booking process.",
  },
  {
    id: 106,
    question: "Will the booking system integrate with my existing calendar?",
    answer:
      "Yes, our booking system can integrate with popular calendar applications like Google Calendar and Outlook, allowing you to manage your schedule seamlessly.",
  },
  {
    id: 107,
    question:
      "Is it possible to manage multiple locations with one booking website?",
    answer:
      "Yes, our booking platforms support multi-location businesses, allowing you to manage appointments and reservations for all your locations from a centralized dashboard.",
  },
  {
    id: 108,
    question: "How do I manage bookings and customer information?",
    answer:
      "Our platform provides an intuitive dashboard where you can view, manage, and update bookings and customer information easily. We offer training to ensure you can use all features effectively.",
  },
  {
    id: 109,
    question: "Can customers cancel or reschedule their bookings online?",
    answer:
      "Yes, customers can easily cancel or reschedule their bookings through your website, which updates the system and sends notifications accordingly.",
  },
  {
    id: 110,
    question:
      "Do you offer ongoing support and maintenance for the booking website?",
    answer:
      "Yes, we provide ongoing maintenance and support packages to keep your booking website running smoothly, including updates, security checks, and technical assistance.",
  },
];

export const ecommerceWebsiteFaqs = [
  {
    id: 201,
    question:
      "What platforms do you work with for e-commerce website development?",
    answer:
      "We work with leading e-commerce platforms like Shopify, WooCommerce, and Magento, as well as custom solutions tailored to your business needs.",
  },
  {
    id: 202,
    question: "Can I customize the design of my e-commerce website?",
    answer:
      "Yes, we offer bespoke design services to ensure your e-commerce website reflects your brand’s identity and provides an engaging user experience.",
  },
  {
    id: 203,
    question: "How do you ensure the security of online transactions?",
    answer:
      "We implement robust security measures, including SSL certificates and PCI compliance, to protect customer data and ensure secure transactions.",
  },
  {
    id: 204,
    question: "Will my e-commerce website be mobile-friendly?",
    answer:
      "Yes, all our e-commerce websites are designed to be fully responsive, providing a seamless shopping experience across all devices.",
  },
  {
    id: 205,
    question: "Can I integrate third-party tools with my e-commerce website?",
    answer:
      "Yes, we seamlessly integrate third-party tools and services such as payment gateways, shipping providers, and CRM systems to enhance your website’s functionality.",
  },
  {
    id: 206,
    question: "Do you offer SEO services for e-commerce websites?",
    answer:
      "Yes, we build our e-commerce websites with SEO best practices in mind, including optimized content, meta tags, and site structure to improve search engine visibility.",
  },
  {
    id: 207,
    question: "How will I manage my e-commerce website?",
    answer:
      "We integrate user-friendly content management systems (CMS) that allow you to easily update and manage your website content without any technical knowledge. At This time, we are using Wix Studio, which is similar to Shopify.",
  },
  {
    id: 208,
    question:
      "What kind of support do you provide after the website is launched?",
    answer:
      "We offer ongoing maintenance and support packages to ensure your e-commerce website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 209,
    question: "Can I track the performance of my e-commerce website?",
    answer:
      "Yes, we provide comprehensive analytics and reporting tools that help you track key performance indicators (KPIs) such as sales, conversion rates, and customer behavior.",
  },
  {
    id: 210,
    question: "How long does it take to build an e-commerce website?",
    answer:
      "The timeline can vary based on the complexity of the project, but on average, a custom e-commerce website takes around 4 to 8 weeks from initial concept to launch.",
  },
];

export const businessWebsiteFaqs = [
  {
    id: 301,
    question:
      "What types of businesses can benefit from a custom business website?",
    answer:
      "Any business looking to enhance its online presence can benefit from a custom business website. This includes small businesses, startups, B2B companies, and more.",
  },
  {
    id: 302,
    question: "Can I customize the design of my business website?",
    answer:
      "Yes, we offer bespoke design services that reflect your brand’s identity and provide an engaging user experience.",
  },
  {
    id: 303,
    question: "Will my business website be mobile-friendly?",
    answer:
      "Yes, all our business websites are designed to be fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.",
  },

  {
    id: 305,
    question: "Do you offer SEO services for business websites?",
    answer:
      "Yes, we build our business websites with SEO best practices in mind, including optimized content, meta tags, and site structure to improve search engine visibility.",
  },

  {
    id: 307,
    question: "Can you help with branding and visual identity?",
    answer:
      "Yes, we offer comprehensive branding services, including logo design, color schemes, typography, and imagery, to ensure a consistent and attractive visual identity for your business.",
  },
  {
    id: 308,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 309,
    question: "How long does it take to build a business website?",
    answer:
      "The timeline can vary based on the complexity of the project, but on average, a custom business website takes around 2 to 4 weeks from initial concept to launch.",
  },
  {
    id: 310,
    question: "Can you help with content creation for my business website?",
    answer:
      "Yes, we offer content creation services to ensure your website has engaging and relevant content that resonates with your audience and supports your SEO efforts.",
  },
];

export const servicesFaqs = [
  {
    id: 201,
    question: "What types of businesses can benefit from your services?",
    answer:
      "Our services are ideal for any business requiring a strong online presence, including those in healthcare, hospitality, e-commerce, and general business sectors.",
  },
  {
    id: 202,
    question: "How do you ensure the security of my website?",
    answer:
      "We integrate secure payment gateways and employ advanced security measures to protect your website and customer data from potential threats.",
  },
  {
    id: 203,
    question: "Can I customize my website’s design and features?",
    answer:
      "Yes, we offer custom design and development tailored to your specific business needs and branding requirements, ensuring a unique and effective online presence.",
  },
  {
    id: 204,
    question: "How do you handle website maintenance and updates?",
    answer:
      "We provide ongoing maintenance and support, including regular updates, security monitoring, and performance optimization to keep your website running smoothly.",
  },
  {
    id: 205,
    question: "Will my website be optimized for search engines?",
    answer:
      "Absolutely, we focus on SEO optimization to ensure your website ranks well in search engine results, driving more traffic and potential customers to your site.",
  },
  {
    id: 206,
    question: "What kind of e-commerce features can you integrate?",
    answer:
      "We can integrate custom product pages, secure checkout processes, and booking options into your e-commerce website, providing a comprehensive solution for your online store.",
  },
  {
    id: 207,
    question: "Do you offer solutions for managing appointments and bookings?",
    answer:
      "Yes, we specialize in creating user-friendly booking interfaces with features like real-time availability, automated confirmations, and reminders to streamline your booking process.",
  },
  {
    id: 208,
    question: "How can I manage my website content?",
    answer:
      "We integrate user-friendly content management systems (CMS) that allow you to easily update and manage your website content without needing technical expertise.",
  },
  {
    id: 209,
    question: "Can you integrate my website with existing tools and platforms?",
    answer:
      "Yes, we can integrate your website with popular tools and platforms like Google Calendar, payment gateways, and CRM systems to enhance its functionality.",
  },
  {
    id: 210,
    question:
      "What support options do you offer after the website is launched?",
    answer:
      "We offer comprehensive support packages that include technical assistance, performance monitoring, and regular updates to ensure your website remains effective and secure.",
  },
];

export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/",
  },
  {
    id: 6,
    heading: "Benefits",
    href: "/benefits",
  },
  {
    id: 11,
    heading: "About Us",
    href: "/about",
  },
  {
    id: 11,
    heading: "Pricing",
    href: "/pricing",
  },
  {
    id: 11,
    heading: "FAQs",
    href: "/faqs",
  },
  {
    id: 17,
    heading: "Blog",
    href: "/blog",
  },
  {
    id: 17,
    heading: "Glossary",
    href: "/glossary",
  },
  {
    id: 16,
    heading: "Contact",
    href: "/contact",
  },
] as const;

export const reviews = [
  {
    id: 71,
    review:
      "Fonts & Footers transformed our vacation rental business! Their direct booking website is sleek, user-friendly, and has significantly increased our bookings.",
    reviewer: "Jason W.",
    company: "Gilbert, AZ",
  },
  {
    id: 72,
    review:
      "Working with Fonts & Footers was a game-changer for us. Their expertise in creating direct booking websites helped streamline our rental process and boost our revenue.",
    reviewer: "Linda R.",
    company: "Mesa, AZ",
  },
  {
    id: 73,
    review:
      "Impressed with the results! Fonts & Footers designed a custom booking platform that perfectly showcases our properties and has made managing bookings a breeze.",
    reviewer: "Michael S.",
    company: "Chandler, AZ",
  },
  {
    id: 74,
    review:
      "Fonts & Footers exceeded our expectations with our new direct booking website. It's professional, easy to navigate, and has improved our guests' booking experience.",
    reviewer: "Daniel P.",
    company: "Brooklyn, NY",
  },
  {
    id: 75,
    review:
      "Highly recommend Fonts & Footers for anyone in the vacation rental industry. Their direct booking websites are top-notch, and the support team is fantastic.",
    reviewer: "Kirk U.",
    company: "Queens, NY",
  },
  {
    id: 76,
    review:
      "Thanks to Fonts & Footers, we now have a modern, efficient direct booking website. Our guests love the seamless booking process, and so do we!",
    reviewer: "Reggie R.",
    company: "Houston, Tx",
  },
  {
    id: 77,
    review:
      "Fonts & Footers took our online presence to the next level. Our direct booking website is visually stunning and has helped us attract more guests than ever.",
    reviewer: "Indar R.",
    company: "Los Angeles, CA",
  },
  {
    id: 78,
    review:
      "Great experience working with Fonts & Footers. They tailored our direct booking website to our specific needs, and the results have been phenomenal.",
    reviewer: "Lawrence S.",
    company: "Portland, Or",
  },
  {
    id: 79,
    review:
      "Fonts & Footers' direct booking solution has simplified our business operations. It's user-friendly for both us and our guests, resulting in increased bookings.",
    reviewer: "Jared U.",
    company: "Trenton, NJ",
  },
  {
    id: 80,
    review:
      "Impressive work from Fonts & Footers. Our new direct booking website is generating more leads and conversions, making our rental business more profitable.",
    reviewer: "William S.",
    company: "Sacramento, CA",
  },
  {
    id: 81,
    review:
      "Fonts & Footers delivered exactly what we needed for our vacation rental business. Our direct booking website is professional, efficient, and has boosted our online presence.",
    reviewer: "Chris N.",
    company: "Las Vegas, NV",
  },
] as const;

export const glossaryMenu = [
  {
    letter: "A",
    section: [
      {
        term: "Accommodation Types",
        description:
          "Different kinds of properties available for vacation rental.",
      },
      {
        term: "Advanced Pricing Strategies",
        description:
          "Using various kinds of data to implement dynamic pricing.",
      },
      {
        term: "API",
        description: "Application Programming Interface.",
      },
      {
        term: "Automated Guest Communication",
        description:
          "The use of email or messaging platforms to send messages to guests.",
      },
      {
        term: "Availability Calendar",
        description:
          "A visual representation of a vacation rental property's open dates for booking",
      },
    ],
  },
  {
    letter: "B",
    section: [
      {
        term: "Backup Booking System",
        description:
          "Alternative arrangements put in place by property owners in case of unexpected issues.",
      },
      {
        term: "Booking Confirmation",
        description:
          "Formal acknowledgment sent to guests after they make a reservation with you.",
      },
      {
        term: "Booking Engine",
        description:
          "Software that allows guests to book vacation rentals directly from the website.",
      },
      {
        term: "Booking Fee",
        description:
          "Fee charged to guests by vacation rental platforms for each booking.",
      },
      {
        term: "Brand Identity",
        description:
          "The visual and conceptual representation of a vacation rental brand.",
      },
      {
        term: "Business Intelligence",
        description:
          "The process of gathering and analyzing data to make informed business decisions.",
      },
    ],
  },
  {
    letter: "C",
    section: [
      {
        term: "Check-in Check-out Procedures",
        description:
          "Guidelines for guests to follow when arriving at/departing from a vacation rental property.",
      },
      {
        term: "Channel Manager",
        description:
          "Tool used for managing listings across multiple online platforms.",
      },
      {
        term: "CRM",
        description:
          "Customer Relationship Management - software systems for managing interactions with guests.",
      },
      {
        term: "Cleaning Standards",
        description:
          "Guidelines for maintaining cleanliness and hygiene in vacation rental properties.",
      },
      {
        term: "Cancellation Policies",
        description:
          "Outlines the terms and conditions for guest cancellations and refunds.",
      },
      {
        term: "Competitive Analysis",
        description:
          "Researching competitors in the vacation rental market to understand their strengths, weaknesses, and pricing strategies.",
      },
    ],
  },
  {
    letter: "D",
    section: [
      {
        term: "Dynamic Pricing",
        description:
          "A pricing strategy that adjusts rental rates based on demand, seasonality, and market trends.",
      },
      {
        term: "Direct Booking",
        description:
          "Allowing guests to book vacation rentals directly from the property owner or manager.",
      },
      {
        term: "Digital Key",
        description:
          "A virtual key that allows guests to access vacation rental properties using their smartphones.",
      },
      {
        term: "Data Analytics",
        description:
          "Using data to analyze guest behavior, market trends, and performance metrics in the vacation rental industry.",
      },
      {
        term: "Data Security",
        description:
          "Measures implemented to protect sensitive information related to any and all confidential data.",
      },
      {
        term: "Digital Marketing",
        description:
          "Encompasses strategies used to promote vacation rental properties online.",
      },
    ],
  },
  {
    letter: "E",
    section: [
      {
        term: "Enhanced Listing",
        description:
          "An optimized listing with attractive features, photos, and descriptions to attract more guests.",
      },
      {
        term: "Electronic Signature",
        description:
          "A digital signature used to sign rental agreements and other documents electronically.",
      },
      {
        term: "Escrow Service",
        description:
          "A secure payment service that holds funds until the rental transaction is completed.",
      },
      {
        term: "Experiential Marketing",
        description:
          "A marketing approach that focuses on creating memorable experiences for guests.",
      },
      {
        term: "Expense Tracking",
        description:
          "Monitoring and tracking expenses related to managing vacation rental properties.",
      },
      {
        term: "Email Marketing",
        description:
          "Using email campaigns to promote vacation rental properties, discounts, and special offers to potential guests.",
      },
      {
        term: "Extra Guest Fee",
        description:
          "Additional charges for accommodating more guests than the standard occupancy limit in vacation rental properties.",
      },
      {
        term: "Exit Cleaning",
        description:
          "Cleaning services provided after guests check out to prepare the vacation rental property for the next guests.",
      },
    ],
  },
  // {
  //   letter: "F",
  //   section: [
  //     {
  //       term: "Flexible Booking Policies",
  //       description:
  //         "Accommodation options that offer guests more flexibility for reservations.",
  //     },
  //     {
  //       term: "Front Desk Services",
  //       description:
  //         "Services provided to guests at the front desk of vacation rental properties, including check-in, check-out, and assistance.",
  //     },
  //     {
  //       term: "Fraud Prevention",
  //       description:
  //         "Strategies and technologies implemented to protect vacation rental businesses and guests from fraudulent activities.",
  //     },
  //     {
  //       term: "Financial Reporting",
  //       description:
  //         "Generation of financial statements and reports related to vacation rental properties.",
  //     },
  //   ],
  // },
  // {
  //   letter: "G",
  //   section: [
  //     {
  //       term: "Guest Reviews",
  //       description:
  //         "Reviews, ratings, and comments provided by guests about their experience staying at a vacation rental property.",
  //     },
  //     {
  //       term: "GDS",
  //       description:
  //         "A Global Distribution System is a network enabling travel agents and online booking platforms to access and sell inventor.",
  //     },
  //     {
  //       term: "Guest Communication",
  //       description:
  //         "Communicating with guests before, during, and after their stay to provide information, answer questions, and address concerns.",
  //     },
  //     {
  //       term: "Guest Experience Management",
  //       description:
  //         "Managing and enhancing the overall experience for guests staying at vacation rental properties.",
  //     },
  //     {
  //       term: "Google Analytics",
  //       description:
  //         "Web analytics tool provided by Google that allows website owners to track and analyze visitor traffic.",
  //     },
  //     {
  //       term: "Guest Verification",
  //       description:
  //         "Process of verifying the identity and credentials of guests before confirming bookings.",
  //     },
  //   ],
  // },
  // {
  //   letter: "H",
  //   section: [
  //     {
  //       term: "Home Automation",
  //       description:
  //         "Automating tasks and controls within vacation rental properties using smart home technology.",
  //     },
  //     {
  //       term: "House Rules",
  //       description:
  //         "Rules established by property owners or managers for guests staying at vacation rental properties.",
  //     },
  //     {
  //       term: "High-Speed Internet",
  //       description:
  //         "Fast and reliable internet access provided to guests staying at vacation rental properties.",
  //     },
  //     {
  //       term: "Hospitality Services",
  //       description:
  //         "Amenities, services, and experiences provided to guests during their stay at a vacation rental property.",
  //     },
  //     {
  //       term: "Hospitality Management Software",
  //       description:
  //         "A tool used by vacation rental owners/managers to manage all aspects of property operations.",
  //     },
  //   ],
  // },
  // {
  //   letter: "I",
  //   section: [
  //     {
  //       term: "Instant Booking",
  //       description:
  //         "Allowing guests to book vacation rentals instantly without waiting for approval from the property owner or manager.",
  //     },
  //     {
  //       term: "Inventory Management",
  //       description:
  //         "Managing and tracking the availability and status of vacation rental properties and their amenities.",
  //     },
  //     {
  //       term: "Integration",
  //       description:
  //         "Combining different software systems, tools, or platforms to work together seamlessly.",
  //     },
  //     {
  //       term: "Insurance Coverage",
  //       description:
  //         "Policies that protect owners/managers against potential risks and liabilitie.",
  //     },
  //     {
  //       term: "Interactive Map",
  //       description:
  //         "Feature allowing guests to view the location of rental properties on a map interface.",
  //     },
  //     {
  //       term: "Integrated Payment Gateway",
  //       description:
  //         "Secure system that allows vacation rental websites to accept online payments from guests.",
  //     },
  //   ],
  // },
  // {
  //   letter: "J",
  //   section: [
  //     {
  //       term: "Junior Suite",
  //       description:
  //         "A smaller suite or room with additional amenities designed for younger guests or smaller groups.",
  //     },
  //     {
  //       term: "JV",
  //       description:
  //         "Joint Venture is a partnership between two or more entities to collaborate on a specific rental property.",
  //     },
  //   ],
  // },
  // {
  //   letter: "K",
  //   section: [
  //     {
  //       term: "Keyless Entry Systems",
  //       description:
  //         "Systems that allow guests to access vacation rental properties using digital codes without physical keys.",
  //     },
  //     {
  //       term: "Kitchenette",
  //       description:
  //         "A small kitchen area in vacation rental properties equipped with basic cooking facilities.",
  //     },
  //   ],
  // },
  // {
  //   letter: "L",
  //   section: [
  //     {
  //       term: "Landing Page",
  //       description:
  //         "A web page designed to capture visitor's attention and encourage them to take a specific action, such as booking a vacation rental.",
  //     },
  //     {
  //       term: "Listing Optimization",
  //       description:
  //         "Strategies and techniques used to enhance the visibility, attractiveness, and performance of vacation rental properties.",
  //     },
  //     {
  //       term: "Local Regulations",
  //       description:
  //         "Laws, ordinances, and regulations imposed by local governments or authorities that govern vacation rental properties.",
  //     },
  //     {
  //       term: "Loyalty Programs",
  //       description:
  //         "Initiatives implemented by vacation rental businesses to reward and incentivize repeat bookings by guests.",
  //     },
  //     {
  //       term: "Late Checkout",
  //       description:
  //         "Allows guests to check out of vacation rental properties later than the standard checkout time for an additional fee.",
  //     },
  //     {
  //       term: "Local Attractions",
  //       description:
  //         "Points of interest, activities, and attractions near vacation rental properties that guests may want to visit.",
  //     },
  //     {
  //       term: "Long-Term Rentals",
  //       description:
  //         "Rental properties that are rented out for extended periods.",
  //     },
  //   ],
  // },
  // {
  //   letter: "M",
  //   section: [
  //     {
  //       term: "Multi-Property Management",
  //       description:
  //         "Managing multiple vacation rental properties from a single platform or software.",
  //     },
  //     {
  //       term: "Mobile Compatibility",
  //       description:
  //         "Ensurs that vacation rental websites and platforms are optimized for mobile devices.",
  //     },
  //     {
  //       term: "Market Analysis",
  //       description:
  //         "Analyzing market trends, competition, demand, and pricing strategies in the vacation rental industry.",
  //     },
  //     {
  //       term: "Maintenance Services",
  //       description:
  //         "Regular upkeep, repairs, and maintenance tasks to ensure that rental properties are in good condition for guests.",
  //     },
  //   ],
  // },
  // {
  //   letter: "N",
  //   section: [
  //     {
  //       term: "Net Revenue",
  //       description:
  //         "The total revenue generated from vacation rental properties after deducting expenses, taxes, and other costs.",
  //     },
  //     {
  //       term: "Niche Market",
  //       description:
  //         "Targeting a specific segment or niche within the vacation rental market.",
  //     },
  //     {
  //       term: "Notification System",
  //       description:
  //         "Feature in vacation rental websites and booking platforms that provides alerts, updates, and notifications.",
  //     },
  //   ],
  // },
  // {
  //   letter: "O",
  //   section: [
  //     {
  //       term: "Occupancy Rate",
  //       description:
  //         "The percentage of time that vacation rental properties are occupied by guests compared to their availability.",
  //     },
  //     {
  //       term: "Online Payment Processing",
  //       description:
  //         "Accepting payments from guests for bookings and reservations through online payment gateways.",
  //     },
  //     {
  //       term: "Owner Portal",
  //       description:
  //         "Secure online portal for property owners to manage their vacation rental properties, bookings, and financials.",
  //     },
  //     {
  //       term: "Occupancy Calendar",
  //       description:
  //         "Visual representation of a vacation rental property's availability over a specific period.",
  //     },
  //   ],
  // },
  // {
  //   letter: "P",
  //   section: [
  //     {
  //       term: "Payment Gateway",
  //       description:
  //         "A secure platform that processes payments from guests for bookings and reservations.",
  //     },
  //     {
  //       term: "Peak Season Pricing",
  //       description:
  //         "Adjusting rental rates during peak seasons or high-demand periods for vacation rental properties.",
  //     },
  //     {
  //       term: "Professional Photography",
  //       description:
  //         "High-quality photos taken by professional photographers to showcase vacation rental properties.",
  //     },
  //     {
  //       term: "Property Management System",
  //       description:
  //         "Software used by vacation rental owners and managers to oversee all aspects of property operations.",
  //     },
  //     {
  //       term: "Promotional Offers",
  //       description:
  //         "Discounts, deals, or special promotions offered to attract guests and increase bookings.",
  //     },
  //   ],
  // },
  // {
  //   letter: "Q",
  //   section: [
  //     {
  //       term: "Quality Assurance",
  //       description:
  //         "Ensuring that vacation rental properties meet high standards of cleanliness, maintenance, and guest satisfaction.",
  //     },
  //     {
  //       term: "QR Code",
  //       description:
  //         "An array of black and white squares or pixels set in a grid that stores data for a machine to read.",
  //     },
  //   ],
  // },
  // {
  //   letter: "R",
  //   section: [
  //     {
  //       term: "Reservation Management",
  //       description:
  //         "Handling bookings, reservations, and guest inquiries for vacation rental properties.",
  //     },
  //     {
  //       term: "Review Management",
  //       description:
  //         "Monitoring and responding to guest reviews and feedback for vacation rental properties.",
  //     },
  //     {
  //       term: "Revenue Management",
  //       description:
  //         "Strategies for maximizing revenue and profitability for vacation rental properties.",
  //     },
  //     {
  //       term: "Rate Parity",
  //       description:
  //         "Maintaining consistent pricing for vacation rental properties across different distribution channels.",
  //     },
  //   ],
  // },
  // {
  //   letter: "S",
  //   section: [
  //     {
  //       term: "Search Engine Optimization",
  //       description:
  //         "Optimizing vacation rental websites and content to improve visibility and ranking in search engine results.",
  //     },
  //     {
  //       term: "Security Deposits",
  //       description:
  //         "Refundable deposits collected from guests to cover damages or losses during their stay.",
  //     },
  //     {
  //       term: "Social Media Marketing",
  //       description:
  //         "Promoting vacation rental properties and engaging with guests through social media platforms.",
  //     },
  //     {
  //       term: "Superhost",
  //       description:
  //         "A designation on Airbnb for hosts who provide exceptional hospitality and meet certain criteria.",
  //     },
  //   ],
  // },
  // {
  //   letter: "T",
  //   section: [
  //     {
  //       term: "Trust and Safety Measures",
  //       description:
  //         "Policies and protocols implemented to ensure the safety and security of guests.",
  //     },
  //     {
  //       term: "Trip Planning Tools",
  //       description:
  //         "Tools and resources provided to guests to plan their trips, activities, and itineraries.",
  //     },
  //     {
  //       term: "Technology Integration",
  //       description:
  //         "Incorporating digital tools and platforms into vacation rental operations for efficiency and guest experience.",
  //     },
  //     {
  //       term: "Terms and Conditions",
  //       description:
  //         "Legal terms and policies governing guest stays, payments, cancellations, and property rules.",
  //     },
  //   ],
  // },
  // {
  //   letter: "U",
  //   section: [
  //     {
  //       term: "User Experience",
  //       description:
  //         "The overall experience and satisfaction of guests using vacation rental platforms and services.",
  //     },
  //     {
  //       term: "Upselling",
  //       description:
  //         "Offering additional services to guests to enhance their experience and increase revenue.",
  //     },
  //     {
  //       term: "Unique Selling Proposition",
  //       description:
  //         "Distinctive features that set vacation rental properties apart from competitors and attract guests.",
  //     },
  //   ],
  // },
  // {
  //   letter: "V",
  //   section: [
  //     {
  //       term: "Vacation Rental Management Software",
  //       description:
  //         "Software platforms designed to manage bookings, reservations, and operations for vacation rental properties.",
  //     },
  //     {
  //       term: "Virtual Tours",
  //       description:
  //         "Interactive virtual tours that showcase vacation rental properties and amenities to potential guests.",
  //     },
  //     {
  //       term: "Value-added Services",
  //       description:
  //         "Additional services and amenities provided to guests to enhance their stay and overall experience.",
  //     },
  //   ],
  // },
  // {
  //   letter: "W",
  //   section: [
  //     {
  //       term: "Website Design",
  //       description:
  //         "The visual and functional design of vacation rental websites to attract visitors and facilitate bookings.",
  //     },
  //     {
  //       term: "Wireless Internet Access",
  //       description:
  //         "Providing fast and reliable internet connectivity to guests staying at vacation rental properties.",
  //     },
  //     {
  //       term: "Welcome Packages",
  //       description:
  //         "Personalized packages or amenities provided to guests upon their arrival to enhance their welcome and experience.",
  //     },
  //     {
  //       term: "Weather Information",
  //       description:
  //         "Providing guests with weather forecasts and information to help them plan their activities and stay.",
  //     },
  //   ],
  // },
  // {
  //   letter: "X",
  //   section: [
  //     {
  //       term: "XML Integration",
  //       description:
  //         "Integrating vacation rental systems and platforms using XML technology for seamless data exchange.",
  //     },
  //   ],
  // },
  // {
  //   letter: "Y",
  //   section: [
  //     {
  //       term: "Yield Management",
  //       description:
  //         "Strategies and techniques for optimizing pricing and revenue for vacation rental properties.",
  //     },
  //   ],
  // },
  // {
  //   letter: "Z",
  //   section: [
  //     {
  //       term: "Zero Contact Check-In",
  //       description:
  //         "Implementing contactless check-in processes to minimize physical interactions between guests and staff.",
  //     },
  //     {
  //       term: "Zone-Based Pricing",
  //       description:
  //         "Adjusting rental rates based on different geographic zones or areas within a destination.",
  //     },
  //   ],
  // },
] as const;

export const experince = [
  {
    title: "Freelance Developer",
    years: "JAN 2020 - Present",
  },
  {
    title: "Contract Web Developer - KNI",
    years: "JAN 2023 - AUG 2023",
  },
  {
    title: "Contract Software Engineer - Joyous App",
    years: "OCT 2022 - DEC 2022",
  },
  {
    title: "Software Engineer - Mentorworks",
    years: "JAN 2022 - DEC 2022",
  },
  {
    title: "Contract Frontend Developer - Fandem",
    years: "JAN 2021 - Jan 2022",
  },
] as const;

export const comparison = [
  {
    id: 1,
    model: "Landing Page",
    loft: "10.5",
    dim: "48 x 4.8 x 6",
    weight: "0.75kg",
    year: "2022",
    price: "Check Price",
  },
  {
    id: 2,
    model: "Business Website",
    loft: "10.5",
    dim: "48 x 4.8 x 6",
    weight: "0.75kg",
    year: "2022",
    price: "Check Price",
  },
  {
    id: 3,
    model: "E-Commerce",
    loft: "10.5",
    dim: "48 x 4.8 x 6",
    weight: "0.75kg",
    year: "2022",
    price: "Check Price",
  },
  {
    id: 4,
    model: "Booking Platform",
    loft: "10.5",
    dim: "48 x 4.8 x 6",
    weight: "0.75kg",
    year: "2022",
    price: "Check Price",
  },
] as const;
