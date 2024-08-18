
// Sample seminar topics for each department and difficulty level with whatsapp links
const topics = {
    "computer-science": {
        "easy": [
            { title: "The Role of ICT in Enhancing Education in Nigeria", description: "Examine how Information and Communication Technology (ICT) has improved the educational sector in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Mobile Apps on Nigerian Society", description: "Discuss the influence of mobile applications on daily life and economic activities in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Introduction to E-Government in Nigeria", description: "Explore the implementation and benefits of e-government services in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity Awareness in Nigerian SMEs", description: "Discuss the importance of cybersecurity awareness and its implementation in small and medium-sized enterprises in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Growth of Fintech in Nigeria", description: "Analyze the rapid development of financial technology (Fintech) in Nigeria and its impact on the economy.", link: "https://wa.me/2348071272293" },
            { title: "Understanding the Digital Divide in Nigeria", description: "Examine the causes and implications of the digital divide between urban and rural areas in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Mobile Banking and Its Impact on Nigerian Economy", description: "Discuss how mobile banking has transformed the financial landscape in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of ICT in Agricultural Development in Nigeria", description: "Explore how ICT solutions have contributed to the growth of the agricultural sector in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Challenges of E-Learning Adoption in Nigerian Universities", description: "Discuss the obstacles and opportunities related to the adoption of e-learning in Nigerian higher institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Influence of Social Media on Nigerian Youth", description: "Analyze how social media platforms have affected the behavior, communication, and activism of Nigerian youth.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of E-Government on Public Service Delivery in Nigeria", description: "Discuss how the adoption of e-government services has improved public service delivery in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Social Media in Political Mobilization in Nigeria", description: "Examine the influence of social media platforms on political participation and mobilization in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Data Protection in Nigerian Businesses", description: "Explore the significance of data protection measures for Nigerian businesses and how they can be implemented effectively.", link: "https://wa.me/2348071272293" },
            { title: "Adoption of E-Learning Platforms in Nigerian Secondary Schools", description: "Discuss the challenges and benefits of implementing e-learning platforms in Nigerian secondary schools.", link: "https://wa.me/2348071272293" },
            { title: "ICT and Rural Development in Nigeria", description: "Analyze the role of ICT in promoting development and improving the quality of life in rural areas of Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Mobile Technology in Enhancing Agricultural Productivity in Nigeria", description: "Examine how mobile technology is being used to improve agricultural productivity in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Social Media on Consumer Behavior in Nigeria", description: "Discuss how social media platforms influence consumer purchasing decisions and brand loyalty in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of ICT in Combating Corruption in Nigeria", description: "Explore how ICT tools and systems can be leveraged to reduce corruption in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Cybersecurity in Nigerian E-Commerce", description: "Discuss the cybersecurity challenges faced by e-commerce businesses in Nigeria and how they can be addressed.", link: "https://wa.me/2348071272293" },
            { title: "ICT and Sustainable Development in Nigeria", description: "Analyze the contribution of ICT to sustainable development goals in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "medium": [
            { title: "The Future of E-Commerce in Nigeria", description: "Examine the growth trends, challenges, and potential future of e-commerce in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Mobile Health Applications and Their Impact on Healthcare Delivery in Nigeria", description: "Discuss the role of mobile health apps in improving access to healthcare in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Adoption of Cloud Computing in Nigerian Businesses", description: "Explore the extent to which Nigerian businesses have adopted cloud computing and the benefits they’ve gained.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Artificial Intelligence in Nigerian Agriculture", description: "Discuss how AI technologies are being applied in the Nigerian agricultural sector.", link: "https://wa.me/2348071272293" },
            { title: "Cybercrime in Nigeria: Challenges and Solutions", description: "Analyze the rise of cybercrime in Nigeria and discuss potential strategies to combat it.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Social Media Marketing on Nigerian Businesses", description: "Examine how businesses in Nigeria are using social media for marketing and customer engagement.", link: "https://wa.me/2348071272293" },
            { title: "Blockchain Technology and Its Potential in Nigeria", description: "Discuss the potential applications of blockchain technology in Nigeria’s financial and public sectors.", link: "https://wa.me/2348071272293" },
            { title: "Development of E-Library Systems for Nigerian Universities", description: "Explore the design, implementation, and benefits of e-library systems in Nigerian educational institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Role of ICT in Enhancing Public Service Delivery in Nigeria", description: "Discuss how ICT can improve the efficiency and effectiveness of public service delivery in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Big Data Analytics in Nigerian Business Decision-Making", description: "Explore how big data analytics is being used by Nigerian businesses to drive strategic decisions.", link: "https://wa.me/2348071272293" },
            { title: "The Role of ICT in Disaster Management in Nigeria", description: "Examine how ICT can be used to manage and respond to natural disasters in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Design and Implementation of E-Health Systems in Nigeria", description: "Discuss the benefits and challenges of implementing e-health systems in Nigerian healthcare facilities.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Digital Transformation on Nigerian Businesses", description: "Analyze how digital transformation is reshaping business operations and customer interactions in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Adoption of Smart Home Technology in Nigeria", description: "Explore the growing trend of smart home technology in Nigeria and its implications for home automation.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Geographic Information Systems (GIS) in Urban Planning in Nigeria", description: "Discuss how GIS technology is being used in urban planning and development in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of ICT in Promoting Financial Inclusion in Nigeria", description: "Examine how ICT solutions are being used to promote financial inclusion among the unbanked population in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of ICT in Enhancing Electoral Processes in Nigeria", description: "Analyze how ICT tools and platforms can improve the transparency and efficiency of electoral processes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of 5G Technology on Nigerian Telecommunications", description: "Discuss the potential impact of 5G technology on the telecommunications industry in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Artificial Intelligence in Nigerian Education", description: "Explore how AI is being used to enhance teaching and learning in Nigerian educational institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Smart Grids in Nigeria", description: "Discuss the challenges and opportunities associated with the implementation of smart grids in Nigeria’s energy sector.", link: "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { title: "The Development and Challenges of Smart Cities in Nigeria", description: "Analyze the concept of smart cities, their development in Nigeria, and the challenges faced in implementation.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Machine Learning in Predicting Epidemics in Nigeria", description: "Discuss how machine learning models can be applied to predict and manage epidemics in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Design and Implementation of a Blockchain-Based Voting System for Nigeria", description: "Explore the design, implementation, and potential impact of a blockchain-based voting system in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Artificial Intelligence in Nigerian Healthcare: Opportunities and Challenges", description: "Analyze the application of AI in the Nigerian healthcare sector, including the opportunities it presents and the challenges it faces.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Data Privacy Regulations on Nigerian Businesses", description: "Discuss how data privacy laws and regulations affect Nigerian businesses, especially in terms of compliance and operations.", link: "https://wa.me/2348071272293" },
            { title: "The Role of IoT in Enhancing Security in Nigerian Homes", description: "Examine how the Internet of Things (IoT) can be leveraged to improve home security systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity Threats in Nigeria’s Financial Sector: A Case Study", description: "Analyze cybersecurity threats in Nigeria’s financial sector and propose solutions to mitigate these risks.", link: "https://wa.me/2348071272293" },
            { title: "Designing a Reliable Mobile Payment System for Rural Nigeria", description: "Explore the challenges and solutions in designing a mobile payment system tailored for rural areas in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Challenges and Opportunities of Implementing E-Government in Nigeria", description: "Discuss the obstacles and potential benefits of implementing e-government solutions in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Developing a Real-Time Traffic Management System Using IoT for Nigerian Cities", description: "Examine how IoT can be utilized to create an efficient traffic management system in Nigeria’s urban areas.", link: "https://wa.me/2348071272293" },
            { title: "The Application of Quantum Computing in Nigerian Financial Systems", description: "Discuss the potential of quantum computing in revolutionizing financial systems and transactions in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Artificial Intelligence in Crime Detection and Prevention in Nigeria", description: "Analyze how AI can be utilized in detecting and preventing criminal activities in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Future of Autonomous Vehicles in Nigeria", description: "Examine the prospects and challenges of implementing autonomous vehicles on Nigerian roads.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Emerging Technologies on Nigerian Higher Education", description: "Discuss how emerging technologies such as VR, AR, and AI are transforming higher education in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Blockchain Technology in Nigerian Land Registry Systems", description: "Explore the application of blockchain technology in land registry systems to reduce fraud and enhance transparency.", link: "https://wa.me/2348071272293" },
            { title: "The Role of AI in Personalized Medicine in Nigeria", description: "Discuss the potential of AI in providing personalized medical treatments tailored to individual patients in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Smart Grid Technologies in Nigeria", description: "Analyze the prospects and challenges of implementing smart grid technologies in Nigeria’s energy sector.", link: "https://wa.me/2348071272293" },
            { title: "The Application of Big Data in Enhancing Public Health in Nigeria", description: "Explore how big data analytics can be used to improve public health outcomes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cybersecurity Threats on Nigeria's National Security", description: "Discuss how cybersecurity threats are evolving and their impact on Nigeria’s national security.", link: "https://wa.me/2348071272293" },
            { title: "The Role of AI in Enhancing Renewable Energy Systems in Nigeria", description: "Examine how AI can be applied to optimize and enhance renewable energy systems in Nigeria.", link: "https://wa.me/2348071272293" }
        ]
    },
    "software-engineering": {
        "easy": [
            { title: "The Role of Software Engineering in Nigeria's Digital Economy", description: "Explore the contributions of software engineering to the growth and development of Nigeria's digital economy.", link: "https://wa.me/2348071272293" },
            { title: "Agile Software Development Practices in Nigeria", description: "Discuss the adoption and impact of agile methodologies in Nigerian software development projects.", link: "https://wa.me/2348071272293" },
            { title: "The Evolution of Mobile Application Development in Nigeria", description: "Examine the trends and growth of mobile app development in Nigeria over the years.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Software Testing in Nigerian Software Projects", description: "Highlight the role of software testing in ensuring the quality and reliability of software products in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "An Overview of Software Licensing in Nigeria", description: "Discuss the different types of software licenses and their relevance in the Nigerian software industry.", link: "https://wa.me/2348071272293" },
            { title: "Open Source Software Adoption in Nigeria", description: "Explore the growth and benefits of open-source software in Nigerian businesses and educational institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineers in Nigerian Startups", description: "Analyze the contributions and challenges faced by software engineers working in Nigerian startups.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Software Engineering on Nigerian SMEs", description: "Discuss how software engineering practices have helped small and medium-sized enterprises in Nigeria improve their operations.", link: "https://wa.me/2348071272293" },
            { title: "User Interface Design Trends in Nigeria", description: "Examine the latest trends in user interface design and how they are being applied in Nigerian software projects.", link: "https://wa.me/2348071272293" },
            { title: "The Growth of E-Learning Platforms in Nigeria", description: "Explore the development and impact of e-learning platforms in Nigeria, focusing on software engineering aspects.", link: "https://wa.me/2348071272293" },
            { title: "Cloud Computing Adoption in Nigerian Software Development", description: "Discuss the adoption of cloud computing technologies in software development projects in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineers in Nigeria's Fintech Industry", description: "Analyze the contributions of software engineers to the growth of the fintech sector in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Cybersecurity in Nigerian Software Projects", description: "Highlight the role of cybersecurity practices in ensuring the safety and security of software systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of DevOps in Nigerian Software Development", description: "Explore the adoption and benefits of DevOps practices in Nigerian software development projects.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Social Media Applications on Nigerian Society", description: "Discuss how software engineering has contributed to the development of social media platforms in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Software Maintenance Challenges in Nigeria", description: "Examine the challenges associated with maintaining software systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Artificial Intelligence in Nigerian Software Development", description: "Explore how AI technologies are being integrated into software development processes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Mobile App Security in Nigeria", description: "Discuss the importance of mobile app security and the challenges faced in securing mobile applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Growth of Software as a Service (SaaS) in Nigeria", description: "Examine the adoption and impact of SaaS models in Nigerian businesses and educational institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Healthcare Sector", description: "Analyze how software engineering practices are being applied to improve healthcare delivery in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "medium": [
            { title: "The Application of Agile Methodologies in Nigerian Software Projects", description: "Discuss the effectiveness and challenges of using agile methodologies in Nigerian software development projects.", link: "https://wa.me/2348071272293" },
            { title: "Developing Scalable Software Solutions for Nigerian Businesses", description: "Explore the techniques and practices for building scalable software systems that can support growing Nigerian businesses.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Continuous Integration in Nigerian Software Development", description: "Analyze the adoption and benefits of continuous integration practices in Nigerian software projects.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Software Project Management in Nigeria", description: "Discuss the common challenges faced by software project managers in Nigeria and how they can be addressed.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Mobile Technology on Software Development in Nigeria", description: "Examine how the growth of mobile technology has influenced software development practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Design Patterns in Nigerian Software Engineering", description: "Explore the adoption and application of design patterns in Nigerian software projects.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Enhancing E-Government Services in Nigeria", description: "Discuss how software engineering practices can be applied to improve e-government services in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Software Engineering for E-Commerce in Nigeria", description: "Analyze the software engineering challenges and solutions associated with developing e-commerce platforms in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Adoption of Microservices Architecture in Nigerian Software Projects", description: "Discuss the benefits and challenges of adopting microservices architecture in Nigerian software development.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Education Sector", description: "Explore how software engineering is being applied to develop educational tools and platforms in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Version Control Systems in Nigerian Software Development", description: "Examine the importance of version control systems in managing software projects in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cloud Computing on Software Development in Nigeria", description: "Discuss how cloud computing technologies are transforming software development practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Software Engineering for Financial Systems in Nigeria", description: "Analyze the software engineering practices used to develop secure and reliable financial systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineers in Nigeria's Tech Ecosystem", description: "Explore the contributions and challenges faced by software engineers in Nigeria's growing tech ecosystem.", link: "https://wa.me/2348071272293" },
            { title: "Developing Secure Software Systems for Nigerian Businesses", description: "Discuss the best practices for developing secure software systems that can protect Nigerian businesses from cyber threats.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Oil and Gas Sector", description: "Examine how software engineering practices are being applied to improve operations in Nigeria's oil and gas industry.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Artificial Intelligence on Software Development in Nigeria", description: "Discuss how AI technologies are transforming software development processes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing Real-Time Software Systems in Nigeria", description: "Analyze the challenges associated with developing real-time software systems for Nigerian businesses and government agencies.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Big Data in Nigerian Software Engineering", description: "Explore how big data technologies are being integrated into software engineering practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Smart City Initiatives", description: "Discuss how software engineering is contributing to the development of smart city projects in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { title: "The Development of AI-Powered Software Solutions in Nigeria", description: "Analyze the challenges and opportunities associated with developing AI-powered software systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Application of Blockchain Technology in Nigerian Software Projects", description: "Discuss the potential of blockchain technology in revolutionizing software systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Scalable Cloud-Based Software Solutions in Nigeria", description: "Examine the challenges and best practices for developing scalable cloud-based software systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing DevOps in Nigerian Software Development", description: "Analyze the adoption of DevOps practices in Nigerian software projects and the challenges faced during implementation.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Machine Learning in Nigerian Software Projects", description: "Explore how machine learning techniques are being integrated into software development processes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Real-Time Distributed Systems in Nigeria", description: "Discuss the challenges associated with developing real-time distributed software systems for Nigerian businesses.", link: "https://wa.me/2348071272293" },
            { title: "The Application of Quantum Computing in Nigerian Software Engineering", description: "Examine the potential of quantum computing technologies in transforming software engineering practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing Secure Mobile Payment Systems in Nigeria", description: "Analyze the security challenges associated with developing mobile payment systems for the Nigerian market.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Fintech Revolution", description: "Discuss how software engineering practices are driving the growth and innovation in Nigeria's fintech sector.", link: "https://wa.me/2348071272293" },
            { title: "The Development of AI-Driven Healthcare Software in Nigeria", description: "Explore the challenges and opportunities associated with developing AI-driven software systems for the Nigerian healthcare sector.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Natural Language Processing in Nigerian Software Projects", description: "Discuss how natural language processing technologies are being applied in Nigerian software systems.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Secure E-Commerce Platforms in Nigeria", description: "Analyze the challenges and best practices for developing secure e-commerce platforms in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Application of Virtual Reality in Nigerian Software Engineering", description: "Examine how virtual reality technologies are being integrated into software engineering practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing High-Performance Software Systems in Nigeria", description: "Discuss the challenges associated with developing high-performance software systems for Nigerian businesses.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Software Engineering in Nigeria's Telecommunications Industry", description: "Explore how software engineering practices are being applied to improve telecommunications services in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Big Data on Nigerian Software Engineering Practices", description: "Discuss how big data technologies are transforming software engineering practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Scalable Software Solutions for Nigeria's Banking Sector", description: "Analyze the challenges and best practices for developing scalable software systems for Nigerian banks.", link: "https://wa.me/2348071272293" },
            { title: "The Application of AI in Nigerian Cybersecurity Systems", description: "Examine how AI technologies are being used to enhance cybersecurity practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Development of Smart City Software Solutions in Nigeria", description: "Discuss the role of software engineering in developing smart city initiatives in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing Scalable Cloud-Native Applications in Nigeria", description: "Explore the challenges and solutions for developing scalable cloud-native applications in Nigeria.", link: "https://wa.me/2348071272293" }
        ]
    },
    "cybersecurity": {
        "easy": [
            { title: "An Overview of Cybersecurity Challenges in Nigeria", description: "Discuss the major cybersecurity threats facing Nigeria and the measures taken to combat them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Financial Institutions", description: "Examine how cybersecurity practices safeguard banks and other financial institutions in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Cybersecurity Awareness in Nigerian Organizations", description: "Explore the need for cybersecurity awareness programs in Nigerian businesses and government agencies.", link: "https://wa.me/2348071272293" },
            { title: "Social Engineering: A Growing Threat in Nigeria", description: "Analyze the prevalence of social engineering attacks in Nigeria and ways to mitigate them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Encryption in Protecting Nigerian Data", description: "Discuss the importance of encryption in securing sensitive information in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity in Nigerian E-commerce Platforms", description: "Examine the security challenges and solutions for Nigerian online shopping platforms.", link: "https://wa.me/2348071272293" },
            { title: "The Growth of Cybersecurity Education in Nigeria", description: "Explore the development of cybersecurity courses and certifications in Nigerian educational institutions.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Firewalls in Nigerian Cybersecurity Infrastructure", description: "Discuss how firewalls contribute to the overall cybersecurity strategy in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cybercrime on Nigerian Small Businesses", description: "Analyze how cybercrime affects small businesses in Nigeria and what can be done to protect them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Antivirus Software in Nigerian Cybersecurity", description: "Explore the effectiveness of antivirus software in protecting Nigerian computers and networks.", link: "https://wa.me/2348071272293" },
            { title: "The Threat of Ransomware in Nigeria", description: "Discuss the increasing threat of ransomware attacks in Nigeria and how organizations can protect themselves.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity Measures for Nigerian Government Agencies", description: "Examine the cybersecurity protocols in place for protecting Nigerian government data and systems.", link: "https://wa.me/2348071272293" },
            { title: "Phishing Attacks in Nigeria: Prevention and Response", description: "Analyze the prevalence of phishing attacks in Nigeria and strategies for preventing them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Two-Factor Authentication in Nigerian Cybersecurity", description: "Discuss the importance and effectiveness of two-factor authentication in protecting Nigerian accounts.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Securing Nigerian Mobile Applications", description: "Explore the security challenges faced by developers of mobile applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity in Nigerian Higher Education Institutions", description: "Examine how universities and colleges in Nigeria are addressing cybersecurity threats.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Online Services", description: "Discuss how cybersecurity measures are essential for protecting various online services in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cybersecurity on Nigerian Digital Transformation", description: "Explore how cybersecurity is influencing the digital transformation of Nigerian businesses and government.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigerian Telecommunications", description: "Analyze the importance of cybersecurity in protecting Nigerian telecommunications networks.", link: "https://wa.me/2348071272293" },
            { title: "Cybersecurity Best Practices for Nigerian Internet Users", description: "Provide an overview of essential cybersecurity practices that all Nigerian internet users should follow.", link: "https://wa.me/2348071272293" }
        ],
        "medium": [
            { title: "Cybersecurity Threats to Nigeria's Critical Infrastructure", description: "Discuss the potential threats to critical infrastructure in Nigeria and how they can be mitigated.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's National Security", description: "Analyze how cybersecurity measures are integrated into Nigeria's national security strategy.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cybersecurity Laws and Regulations in Nigeria", description: "Examine the effectiveness of current cybersecurity laws and regulations in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Artificial Intelligence in Nigerian Cybersecurity", description: "Explore the application of AI in enhancing cybersecurity defenses in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Incident Response Plans for Nigerian Organizations", description: "Discuss why Nigerian organizations need effective incident response plans and how to implement them.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Cybersecurity in Nigerian SMEs", description: "Analyze the obstacles faced by small and medium enterprises in Nigeria when implementing cybersecurity measures.", link: "https://wa.me/2348071272293" },
            { title: "The Future of Cybersecurity in Nigeria's Healthcare Sector", description: "Examine how cybersecurity is being integrated into healthcare systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Data Breaches on Nigerian Businesses", description: "Discuss the consequences of data breaches for Nigerian businesses and strategies to prevent them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Online Banking Systems", description: "Explore the cybersecurity measures used to secure online banking platforms in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Voting Systems", description: "Analyze how cybersecurity can be used to protect the integrity of voting systems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Cybersecurity in Nigeria's Oil and Gas Industry", description: "Discuss the unique cybersecurity challenges faced by Nigeria's oil and gas sector.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's E-Government Initiatives", description: "Explore how cybersecurity is being integrated into e-government services in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Cybersecurity for Nigerian Fintech Startups", description: "Discuss the role of cybersecurity in protecting the rapidly growing fintech industry in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Biometrics in Nigerian Cybersecurity Systems", description: "Examine the role of biometric technology in enhancing cybersecurity in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's Digital Economy", description: "Analyze how cybersecurity is influencing the growth of Nigeria's digital economy.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Cyber Threat Intelligence for Nigerian Organizations", description: "Discuss the role of cyber threat intelligence in protecting Nigerian businesses and government agencies.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's Educational Institutions", description: "Explore how schools and universities in Nigeria are implementing cybersecurity measures.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cloud Computing on Cybersecurity in Nigeria", description: "Examine the cybersecurity implications of cloud computing adoption in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Financial Data", description: "Discuss how cybersecurity measures are essential for securing financial data in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's Media Industry", description: "Analyze how cybersecurity is protecting the integrity of media and communication platforms in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { title: "Advanced Threat Detection in Nigerian Cybersecurity Systems", description: "Explore the use of advanced threat detection techniques in Nigerian cybersecurity systems.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Machine Learning in Enhancing Nigerian Cybersecurity", description: "Examine how machine learning is being used to improve cybersecurity practices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of International Cybersecurity Policies on Nigeria", description: "Discuss how international cybersecurity policies affect Nigerian cybersecurity strategies.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing GDPR in Nigerian Organizations", description: "Analyze the challenges faced by Nigerian organizations in complying with the European Union's General Data Protection Regulation (GDPR).", link: "https://wa.me/2348071272293" },
            { title: "The Future of Quantum Computing in Nigerian Cybersecurity", description: "Explore how quantum computing could revolutionize cybersecurity in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Blockchain Technology in Nigerian Cybersecurity", description: "Examine the potential of blockchain technology to enhance cybersecurity in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cyber Espionage on Nigerian National Security", description: "Discuss how cyber espionage threatens Nigeria's national security and measures to counter it.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigeria's Energy Sector", description: "Analyze how cybersecurity measures are being implemented in Nigeria's energy sector.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Cybersecurity in Nigerian Smart Cities", description: "Examine the cybersecurity challenges associated with developing smart cities in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian E-Health Systems", description: "Discuss how cybersecurity measures are essential for securing electronic health records in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Cyber Terrorism on Nigeria's National Security", description: "Explore how cyber terrorism poses a threat to Nigeria's national security and how it can be countered.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Cybersecurity in Nigerian IoT Devices", description: "Analyze the cybersecurity challenges associated with the growing use of IoT devices in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigeria's Critical Infrastructure", description: "Discuss the importance of cybersecurity measures in protecting Nigeria's critical infrastructure.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Nigeria's Defense Systems", description: "Explore how cybersecurity is integrated into Nigeria's defense systems to protect against cyber threats.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Zero Trust Architecture in Nigerian Organizations", description: "Examine the challenges and benefits of adopting a Zero Trust cybersecurity architecture in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Future of Cybersecurity in Nigeria's Transportation Systems", description: "Discuss how cybersecurity measures are being implemented to protect Nigeria's transportation systems.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigerian Intellectual Property", description: "Analyze how cybersecurity measures are essential for protecting intellectual property in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Cybersecurity in Nigerian Cloud Computing Environments", description: "Explore the cybersecurity challenges associated with cloud computing in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Cybersecurity in Protecting Nigeria's Financial Markets", description: "Discuss how cybersecurity measures are being implemented to protect Nigeria's financial markets.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Global Cybersecurity Trends on Nigeria", description: "Analyze how global cybersecurity trends are influencing Nigeria's cybersecurity landscape.", link: "https://wa.me/2348071272293" }
        ]
    },
    "microbiology": {
        "easy": [
            { title: "The Role of Microorganisms in Nigerian Agriculture", description: "Discuss the importance of microorganisms in enhancing soil fertility and crop production in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Pathogenic Microorganisms on Public Health in Nigeria", description: "Explore how pathogenic microorganisms contribute to disease outbreaks in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Food Preservation", description: "Examine the methods used to prevent microbial spoilage of food products in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Sterilization in Nigerian Healthcare Settings", description: "Discuss the significance of sterilization techniques in preventing infections in Nigerian hospitals.", link: "https://wa.me/2348071272293" },
            { title: "Microbial Contamination of Nigerian Water Sources", description: "Analyze the causes and effects of microbial contamination in Nigeria's water supply.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Probiotics in Nigerian Nutrition", description: "Explore how probiotics contribute to human health and nutrition in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Microorganisms in Nigerian Traditional Fermented Foods", description: "Discuss the role of microorganisms in the production of fermented foods such as ogi and fufu.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Waste Management", description: "Examine how microorganisms contribute to the breakdown of waste in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Antimicrobial Resistance in Nigeria", description: "Analyze the growing concern of antimicrobial resistance in Nigerian healthcare settings.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microorganisms in Nigerian Aquatic Ecosystems", description: "Discuss the importance of microorganisms in maintaining the health of Nigerian water bodies.", link: "https://wa.me/2348071272293" },
            { title: "The Significance of Microbiology in Nigerian Environmental Protection", description: "Explore how microorganisms are used in environmental conservation and pollution control in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Pharmaceutical Production", description: "Examine how microorganisms are utilized in the production of antibiotics and other pharmaceuticals in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Microbiology in Nigerian Food Safety", description: "Discuss how microbiology helps ensure the safety of food products in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Water Purification", description: "Analyze how microorganisms are used in the treatment and purification of water in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Bioremediation Efforts", description: "Examine how microorganisms are used to clean up environmental pollutants in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Climate Change on Microbial Life in Nigeria", description: "Discuss how climate change is affecting microbial ecosystems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microorganisms in Nigerian Industrial Processes", description: "Explore how microorganisms are utilized in various industrial applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Microbial Ecology in Nigerian Agriculture", description: "Examine the role of microbial interactions in promoting sustainable agriculture in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Disease Control", description: "Discuss how microbiology contributes to the prevention and control of infectious diseases in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbiology on Nigerian Food Production", description: "Analyze how microbiology plays a vital role in enhancing food production and preservation in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "medium": [
            { title: "The Role of Microbiology in Combating Malaria in Nigeria", description: "Explore the contributions of microbiology in understanding and controlling malaria in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of HIV/AIDS on Microbial Infections in Nigeria", description: "Discuss how HIV/AIDS affects the susceptibility to microbial infections in Nigerian patients.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in the Development of Nigerian Vaccines", description: "Examine how microbiology contributes to the research and development of vaccines in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Use of Microorganisms in Nigerian Biotechnology", description: "Analyze the role of microorganisms in various biotechnological applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Controlling Waterborne Diseases in Nigeria", description: "Discuss the microbial causes of waterborne diseases and the challenges in controlling them in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Disease Surveillance", description: "Explore how microbiology aids in monitoring and controlling disease outbreaks in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbiology on Nigerian Public Health Policies", description: "Examine how microbiological research influences public health policies in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microorganisms in Nigerian Environmental Biotechnology", description: "Discuss how microorganisms are used in biotechnological solutions to environmental problems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Antimicrobial Stewardship in Nigeria", description: "Analyze the difficulties in implementing antimicrobial stewardship programs in Nigerian healthcare settings.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Wastewater Treatment", description: "Examine how microorganisms are used in the treatment of wastewater in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Antibiotic Resistance on Nigerian Healthcare", description: "Discuss the challenges posed by antibiotic-resistant bacteria in Nigerian healthcare facilities.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Agro-industries", description: "Explore how microorganisms are utilized in agricultural industries in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Importance of Microbial Genetics in Nigerian Research", description: "Analyze the role of microbial genetics in advancing scientific research in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microorganisms in Nigerian Waste Decomposition", description: "Discuss how microorganisms contribute to the natural process of waste decomposition in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbiology on Nigerian Fisheries", description: "Examine the role of microorganisms in maintaining the health of aquatic life in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Microbial Quality Control in Nigeria", description: "Discuss the obstacles faced by Nigerian industries in maintaining microbial quality control.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Food Industry", description: "Analyze how microbiology contributes to food safety and quality in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microorganisms in Nigerian Environmental Conservation", description: "Explore how microorganisms play a role in preserving Nigeria's natural resources.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbial Infections on Nigerian Maternal Health", description: "Discuss how microbial infections affect maternal health in Nigeria and the measures to control them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Public Health Initiatives", description: "Examine how microbiology supports various public health programs in Nigeria.", link: "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { title: "The Role of Microbiome in Nigerian Human Health", description: "Explore the relationship between the human microbiome and overall health in Nigerian populations.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Climate Change on Microbial Biodiversity in Nigeria", description: "Analyze how climate change is affecting microbial diversity in various ecosystems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing Antimicrobial Agents from Nigerian Medicinal Plants", description: "Discuss the potential and challenges of discovering new antimicrobial agents from Nigerian flora.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Cancer Research", description: "Examine how microbiology contributes to the understanding and treatment of cancer in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Controlling Emerging Infectious Diseases in Nigeria", description: "Discuss the microbial causes of emerging diseases in Nigeria and the strategies to control them.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Genomic Research", description: "Explore how microbiological studies are advancing genomic research in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbial Contamination on Nigerian Pharmaceutical Production", description: "Analyze the risks and prevention strategies for microbial contamination in the Nigerian pharmaceutical industry.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Epidemiological Studies", description: "Examine how microbiology aids in understanding the spread of diseases in Nigerian populations.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Developing Nigerian Probiotics", description: "Discuss the potential and obstacles in developing probiotic products tailored for Nigerian consumers.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Urbanization on Microbial Ecosystems in Nigerian Cities", description: "Explore how urbanization is altering microbial ecosystems in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Biomedical Research", description: "Analyze the contributions of microbiology to advancements in Nigerian biomedical research.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Implementing Bioinformatics in Nigerian Microbial Research", description: "Discuss the role of bioinformatics in Nigerian microbial research and the challenges in its adoption.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Global Health Trends on Nigerian Microbial Research", description: "Analyze how global health trends influence microbial research and public health policies in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbial Forensics in Nigerian Crime Investigation", description: "Explore the emerging field of microbial forensics and its potential applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Controlling Multidrug-Resistant Bacteria in Nigerian Hospitals", description: "Discuss the strategies and challenges in combating multidrug-resistant bacteria in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbial Enzymes in Nigerian Industrial Applications", description: "Examine the use of microbial enzymes in various industrial processes in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Impact of Microbiology on Nigerian Vaccine Development", description: "Analyze the contributions of microbiology to the development of vaccines for Nigerian public health.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Biodefense", description: "Discuss how microbiology is integrated into Nigeria's strategies for defending against biological threats.", link: "https://wa.me/2348071272293" },
            { title: "The Challenges of Microbial Bioprospecting in Nigerian Ecosystems", description: "Explore the potential and challenges of discovering new microbial species with biotechnological applications in Nigeria.", link: "https://wa.me/2348071272293" },
            { title: "The Role of Microbiology in Nigerian Nanotechnology Research", description: "Examine how microbiology is contributing to the development of nanotechnology in Nigeria.", link: "https://wa.me/2348071272293" }
        ]
    },
    "biochemistry": {
        "easy": [
            { "title": "The Role of Enzymes in Nigerian Food Industries", "description": "Discuss the application of enzymes in the production and processing of food in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nutritional Biochemistry on Public Health in Nigeria", "description": "Explore how understanding nutritional biochemistry contributes to public health in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Biochemistry of Nigerian Traditional Medicinal Plants", "description": "Analyze the biochemical properties of medicinal plants commonly used in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Vitamins in Nigerian Diets", "description": "Discuss the importance of vitamins in the Nigerian diet and their biochemical roles.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Protein Structure in Nigerian Agricultural Products", "description": "Examine the role of protein structure in determining the quality of Nigerian agricultural products.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Lipids in Nigerian Health and Disease", "description": "Explore how lipids contribute to health and disease in Nigerian populations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Carbohydrates in Nigerian Staple Foods", "description": "Discuss the biochemical importance of carbohydrates in Nigerian staple foods.", "link": "https://wa.me/2348071272293" },
            { "title": "Biochemical Pathways in Nigerian Herbal Medicine", "description": "Analyze the biochemical pathways involved in the action of Nigerian herbal medicines.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Environmental Biochemistry on Nigerian Ecosystems", "description": "Examine how environmental biochemistry affects Nigerian ecosystems.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Antioxidants in Nigerian Foods", "description": "Discuss the importance of antioxidants in Nigerian diets and their biochemical roles.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Biochemistry in Nigerian Disease Diagnosis", "description": "Explore how biochemical methods are used in diagnosing diseases in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Waste Management", "description": "Analyze the contribution of biochemistry to waste management practices in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Biochemistry on Nigerian Agricultural Practices", "description": "Discuss how biochemistry influences agricultural practices in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Food Preservation", "description": "Examine the biochemical principles involved in food preservation methods in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Biochemistry of Nigerian Fermented Foods", "description": "Discuss the biochemical processes involved in the fermentation of Nigerian foods.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Drug Development", "description": "Explore how biochemistry contributes to the development of drugs in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Mineral Metabolism in Nigerian Populations", "description": "Analyze the role of mineral metabolism in health and disease among Nigerians.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Disease Prevention", "description": "Discuss how biochemical research contributes to disease prevention strategies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Biochemistry on Nigerian Pharmaceutical Industry", "description": "Examine how biochemistry influences pharmaceutical production and innovation in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Environmental Conservation", "description": "Discuss how biochemistry aids in environmental conservation efforts in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "medium": [
            { "title": "The Role of Biochemistry in Understanding Nigerian Metabolic Disorders", "description": "Explore how biochemical research helps in understanding metabolic disorders prevalent in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nigerian Dietary Habits on Biochemical Health", "description": "Discuss the relationship between Nigerian dietary habits and biochemical health outcomes.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Cancer Research", "description": "Analyze how biochemistry contributes to the understanding and treatment of cancer in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Biochemical Basis of Nigerian Traditional Medicine", "description": "Examine the biochemical principles underlying the use of traditional medicine in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Infectious Disease Research", "description": "Discuss how biochemistry aids in understanding and combating infectious diseases in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Biochemistry on Nigerian Nutritional Policies", "description": "Explore how biochemical research influences nutritional policies and programs in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Agricultural Biotechnology", "description": "Analyze the application of biochemical techniques in Nigerian agricultural biotechnology.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Enzyme Kinetics in Nigerian Industrial Processes", "description": "Discuss how enzyme kinetics is applied in various industrial processes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Food Security", "description": "Examine how biochemistry contributes to ensuring food security in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Biochemical Mechanisms of Nigerian Medicinal Plants", "description": "Explore the biochemical mechanisms behind the therapeutic effects of Nigerian medicinal plants.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Public Health Initiatives", "description": "Discuss how biochemistry supports public health initiatives and disease prevention in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Biochemistry on Nigerian Water Purification Methods", "description": "Analyze the role of biochemistry in developing and optimizing water purification methods in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Renewable Energy Research", "description": "Examine how biochemistry contributes to the development of renewable energy sources in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Biochemistry of Nigerian Anti-Malarial Drugs", "description": "Discuss the biochemical properties and mechanisms of action of anti-malarial drugs used in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Environmental Biotechnology", "description": "Explore how biochemistry is applied in environmental biotechnology projects in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Biochemical Education in Nigerian Universities", "description": "Analyze the role of biochemistry education in advancing scientific knowledge in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Disease Management Strategies", "description": "Discuss how biochemistry aids in the development of effective disease management strategies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Biochemistry on Nigerian Food Safety Standards", "description": "Examine how biochemistry contributes to setting and maintaining food safety standards in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Drug Formulation", "description": "Explore how biochemistry is involved in the formulation and production of pharmaceuticals in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Biochemical Research in Nigerian Health Policies", "description": "Discuss the influence of biochemical research on the development and implementation of health policies in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { "title": "The Role of Biochemistry in Nigerian Genomic Research", "description": "Explore how biochemical studies are advancing genomic research in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Implementing Biochemical Research in Nigerian Healthcare", "description": "Discuss the challenges and opportunities in applying biochemical research to healthcare in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Understanding Nigerian Genetic Disorders", "description": "Analyze how biochemistry contributes to understanding and treating genetic disorders prevalent in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Climate Change on Biochemical Research in Nigeria", "description": "Examine how climate change is affecting biochemical research and its implications in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Nanotechnology Research", "description": "Explore how biochemistry is contributing to the development of nanotechnology in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Developing Biochemical Technologies in Nigeria", "description": "Discuss the potential and obstacles in developing new biochemical technologies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Biomedical Research", "description": "Analyze the contributions of biochemistry to advancements in Nigerian biomedical research.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Biochemical Research in Nigerian Public Health", "description": "Discuss the role of biochemistry in Nigerian public health research and the challenges faced.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Global Health Trends on Nigerian Biochemical Research", "description": "Analyze how global health trends influence biochemical research and public health policies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Agricultural Sustainability", "description": "Explore how biochemical research is contributing to sustainable agricultural practices in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Developing Nigerian Probiotics", "description": "Discuss the potential and obstacles in developing probiotic products tailored for Nigerian consumers.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Renewable Energy Innovations", "description": "Examine how biochemical research is driving innovations in renewable energy in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Controlling Emerging Infectious Diseases in Nigeria", "description": "Discuss the biochemical causes of emerging diseases in Nigeria and the strategies to control them.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Disease Surveillance", "description": "Explore how biochemical methods are used in disease surveillance systems in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Urbanization on Biochemical Ecosystems in Nigerian Cities", "description": "Examine how urbanization is altering biochemical ecosystems in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Food Biotechnology", "description": "Discuss how biochemistry contributes to the development of food biotechnology in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Implementing Bioinformatics in Nigerian Biochemical Research", "description": "Discuss the role of bioinformatics in Nigerian biochemical research and the challenges in its adoption.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Microbial Biochemistry on Nigerian Public Health", "description": "Analyze the contributions of microbial biochemistry to Nigerian public health initiatives.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Biochemistry in Nigerian Disease Eradication Programs", "description": "Examine how biochemistry supports disease eradication efforts in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Challenges of Biochemical Education in Nigerian Research Institutions", "description": "Discuss the challenges and opportunities for advancing biochemical education and research in Nigeria.", "link": "https://wa.me/2348071272293" }
        ]
    },
    "mass_communication": {
        "easy": [
            { "title": "The Role of Social Media in Political Campaigns in Nigeria", "description": "Discuss the impact of social media on political campaigns and election outcomes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Radio Broadcasting on Rural Development in Nigeria", "description": "Explore how radio broadcasting contributes to rural development in Nigerian communities.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Nigerian Television on Youth Culture", "description": "Analyze how Nigerian television programming influences the culture and behavior of Nigerian youth.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Relations in Nigerian Corporate Organizations", "description": "Examine how public relations strategies are implemented in Nigerian companies to manage corporate image.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Print Media on Education in Nigeria", "description": "Discuss how newspapers and magazines contribute to educational development in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Community Journalism in Enhancing Civic Engagement in Nigeria", "description": "Explore how community journalism promotes active participation in local governance and civic duties.", "link": "https://wa.me/2348071272293" },
            { "title": "The Use of New Media in Promoting Nigerian Cultural Heritage", "description": "Analyze how digital platforms are used to preserve and promote Nigeria's cultural heritage.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Health Communication Campaigns in Nigeria", "description": "Discuss the role of communication in promoting health awareness and behavior change in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Media in Combating Fake News in Nigeria", "description": "Examine the strategies used by Nigerian media outlets to counter misinformation and fake news.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Digital Advertising on Consumer Behavior in Nigeria", "description": "Explore how digital advertising influences the purchasing decisions of Nigerian consumers.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Film in Shaping Nigerian National Identity", "description": "Discuss how the Nigerian film industry, Nollywood, contributes to the construction of national identity.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Celebrity Endorsement on Brand Perception in Nigeria", "description": "Analyze how celebrity endorsements affect the perception of brands among Nigerian consumers.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Investigative Journalism in Nigeria", "description": "Examine the impact of investigative journalism on exposing corruption and promoting transparency in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Globalization on Nigerian Media Content", "description": "Discuss how globalization affects the content produced and consumed by Nigerian media audiences.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Communication in Disaster Management in Nigeria", "description": "Explore how communication strategies are employed in managing disasters and emergencies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Radio Drama on Social Change in Nigeria", "description": "Analyze how radio drama programs address social issues and promote change in Nigerian society.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Service Announcements in Nigerian Media", "description": "Discuss the effectiveness of public service announcements in promoting social good in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Social Media on Nigerian Youth Political Participation", "description": "Explore how social media platforms encourage political participation among Nigerian youth.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Mobile Journalism on News Reporting in Nigeria", "description": "Analyze the impact of mobile journalism on the speed and accuracy of news reporting in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Media in Promoting Nigerian Tourism", "description": "Discuss how mass media campaigns are used to boost tourism in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "medium": [
            { "title": "The Role of Mass Communication in Promoting Gender Equality in Nigeria", "description": "Examine how mass communication channels are used to advocate for gender equality in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Media Ownership on News Objectivity in Nigeria", "description": "Discuss how the ownership of media organizations affects the objectivity of news reporting in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Relations in Crisis Management in Nigerian Companies", "description": "Explore how public relations strategies are employed in managing crises in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Television Programming on Nigerian Cultural Values", "description": "Analyze how television content shapes and reflects cultural values in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Social Media on Nigerian Political Discourse", "description": "Examine the role of social media in shaping political discussions and opinions in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Community Radio in Promoting Development in Nigeria", "description": "Discuss how community radio stations contribute to local development initiatives in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Global Media on Nigerian Cultural Identity", "description": "Analyze how global media influences the cultural identity of Nigerians.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Promoting Health Awareness in Nigeria", "description": "Explore how mass communication strategies are used to raise awareness about health issues in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Mass Media on Nigerian Electoral Processes", "description": "Discuss how mass media affects the conduct and outcomes of elections in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Film in Addressing Social Issues in Nigeria", "description": "Analyze how Nigerian films are used to address and raise awareness about social issues.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Media Censorship on Freedom of Expression in Nigeria", "description": "Examine the impact of media censorship on freedom of speech and expression in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Communication in Promoting Democracy in Nigeria", "description": "Discuss how communication strategies are used to promote democratic values and processes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nigerian Films on the Perception of Africa Globally", "description": "Analyze how Nollywood films influence global perceptions of Africa and African culture.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Managing Ethnic Conflicts in Nigeria", "description": "Explore how mass communication strategies are employed to manage and resolve ethnic conflicts in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Online News Platforms on Traditional Journalism in Nigeria", "description": "Discuss how the rise of online news platforms is affecting traditional journalism practices in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Relations in Shaping Public Opinion in Nigeria", "description": "Examine how public relations campaigns influence public opinion on social and political issues in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Media Representation on Gender Roles in Nigeria", "description": "Analyze how Nigerian media portrays gender roles and its impact on societal perceptions.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Digital Media in Promoting Civic Engagement in Nigeria", "description": "Discuss how digital media platforms encourage civic participation and engagement in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Fake News on Nigerian Political Stability", "description": "Examine how the spread of fake news affects political stability and governance in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Communication in Addressing Climate Change in Nigeria", "description": "Explore how communication strategies are used to raise awareness and address climate change issues in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { "title": "The Role of Communication in Nigerian Environmental Sustainability Efforts", "description": "Examine how mass communication is used to promote environmental sustainability in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Global Media on Nigerian Foreign Policy", "description": "Analyze how global media coverage influences Nigeria's foreign policy decisions.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Media in Promoting Human Rights in Nigeria", "description": "Discuss how mass media campaigns are used to advocate for human rights and social justice in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Social Media Algorithms on Information Consumption in Nigeria", "description": "Explore how social media algorithms shape the information that Nigerian users consume.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Nigerian Peacebuilding Efforts", "description": "Examine how mass communication strategies are employed in peacebuilding and conflict resolution in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Mass Media on Public Health Policy in Nigeria", "description": "Analyze how media coverage influences public health policy decisions in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Communication in Nigerian Anti-Corruption Campaigns", "description": "Discuss how communication strategies are used to combat corruption and promote transparency in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Media Convergence on Nigerian Journalism", "description": "Explore how the convergence of different media platforms is affecting journalism practices in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Managing Public Perception During Crises in Nigeria", "description": "Examine how communication strategies are used to manage public perception during crises in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Social Media Influencers on Nigerian Consumer Behavior", "description": "Analyze how social media influencers shape consumer behavior and marketing strategies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Media in Nigerian Educational Reforms", "description": "Discuss how mass media campaigns are used to advocate for and implement educational reforms in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Digital Media on Nigerian Political Campaign Strategies", "description": "Examine how digital media platforms are transforming political campaign strategies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Promoting Social Inclusion in Nigeria", "description": "Explore how communication strategies are used to promote social inclusion and diversity in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Fake News on Nigerian Media Credibility", "description": "Analyze how the proliferation of fake news affects the credibility and trustworthiness of Nigerian media outlets.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Communication in Nigerian Disaster Preparedness", "description": "Discuss how communication strategies are used to prepare for and respond to disasters in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Social Media on Nigerian Electoral Integrity", "description": "Examine how social media platforms affect the integrity of electoral processes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Mass Communication in Nigerian Anti-Terrorism Efforts", "description": "Analyze how communication strategies are employed in the fight against terrorism in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Media Globalization on Nigerian Cultural Production", "description": "Discuss how media globalization influences the production and consumption of Nigerian cultural content.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Relations in Nigerian Government Accountability", "description": "Examine how public relations campaigns are used to promote government accountability and transparency in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Digital Literacy on Nigerian Media Consumption Patterns", "description": "Explore how digital literacy affects the way Nigerians consume and engage with media content.", "link": "https://wa.me/2348071272293" }
        ]
    },
    "nursing": {
        "easy": [
            { "title": "The Role of Nurses in Managing Hypertension in Nigerian Patients", "description": "Discuss the role of nursing care in managing and controlling hypertension among Nigerian patients.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Maternal Education on Child Health in Nigeria", "description": "Examine how maternal education influences child health outcomes in Nigerian communities.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Promoting Breastfeeding Practices in Nigeria", "description": "Explore how nurses can promote and support breastfeeding practices among Nigerian mothers.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Hand Hygiene Practices in Nigerian Hospitals", "description": "Analyze the impact of hand hygiene practices on infection control in Nigerian healthcare settings.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Community Health Nurses in Preventing Malaria in Nigeria", "description": "Discuss how community health nurses contribute to malaria prevention efforts in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Diabetes in Nigerian Patients", "description": "Examine the strategies used by nurses in managing diabetes among patients in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Health Education on Preventing HIV/AIDS in Nigeria", "description": "Explore how health education provided by nurses can help in preventing the spread of HIV/AIDS in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Reducing Infant Mortality in Nigeria", "description": "Discuss the contributions of nursing care to reducing infant mortality rates in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Vaccination Campaigns Led by Nurses in Nigeria", "description": "Analyze the impact of nurse-led vaccination campaigns on public health in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Promoting Mental Health Awareness in Nigeria", "description": "Examine how nurses contribute to raising awareness and providing care for mental health issues in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of School Nurses in Promoting Adolescent Health in Nigeria", "description": "Explore the impact of school nurses on the health and well-being of adolescents in Nigerian schools.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to Palliative Care in Nigeria", "description": "Discuss the role of nurses in providing palliative care for terminally ill patients in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurse-Patient Communication on Treatment Outcomes in Nigeria", "description": "Analyze how effective communication between nurses and patients can improve treatment outcomes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing COVID-19 in Nigerian Hospitals", "description": "Examine the strategies employed by nurses in managing COVID-19 cases in Nigerian healthcare facilities.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Promoting Safe Childbirth Practices in Nigeria", "description": "Explore how nurses can ensure safe childbirth practices and reduce maternal mortality in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Cultural Beliefs on Nursing Care in Nigeria", "description": "Discuss how cultural beliefs and practices influence nursing care and patient outcomes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Chronic Diseases in Nigeria", "description": "Examine how nurses contribute to the management of chronic diseases like hypertension and diabetes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to Public Health Education in Nigeria", "description": "Analyze the role of nurses in educating the public about health issues and promoting healthy lifestyles in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurse-Led Interventions on Maternal Health in Nigeria", "description": "Discuss how interventions led by nurses can improve maternal health outcomes in Nigerian communities.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Tuberculosis in Nigeria", "description": "Explore the strategies used by nurses in the diagnosis, treatment, and prevention of tuberculosis in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "medium": [
            { "title": "The Role of Nurses in Managing Sickle Cell Disease in Nigeria", "description": "Examine how nurses contribute to the care and management of sickle cell disease in Nigerian patients.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nursing Leadership on Healthcare Delivery in Nigeria", "description": "Discuss how effective nursing leadership can improve healthcare services in Nigerian hospitals.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Promoting Reproductive Health in Nigeria", "description": "Explore the strategies used by nurses to promote reproductive health and family planning in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Workplace Stress on Nigerian Nurses' Performance", "description": "Analyze how workplace stress affects the performance and well-being of nurses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Drug-Resistant Infections in Nigeria", "description": "Examine how nurses contribute to the management and prevention of drug-resistant infections in Nigerian hospitals.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Continuing Education on Nigerian Nurses' Competency", "description": "Discuss the importance of continuing education and training in enhancing the skills and competency of Nigerian nurses.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to Maternal and Child Health in Rural Nigeria", "description": "Explore how nurses can improve maternal and child health outcomes in rural areas of Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Pain Management for Cancer Patients in Nigeria", "description": "Discuss how nurses can effectively manage pain in cancer patients receiving treatment in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Technology on Nursing Practice in Nigeria", "description": "Analyze how advancements in medical technology are transforming nursing practice in Nigerian hospitals.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Mental Health Disorders in Nigeria", "description": "Examine the strategies used by nurses to care for patients with mental health disorders in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Nurse Staffing Levels on Patient Care in Nigeria", "description": "Discuss how nurse staffing levels impact the quality of patient care in Nigerian healthcare facilities.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Preventing and Managing Malnutrition in Nigeria", "description": "Explore the role of nurses in addressing malnutrition and promoting proper nutrition in Nigerian communities.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Cultural Competency on Nursing Care in Nigeria", "description": "Analyze how cultural competency among nurses can improve patient care and satisfaction in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to the Management of Infectious Diseases in Nigeria", "description": "Examine how nurses play a critical role in the diagnosis, treatment, and prevention of infectious diseases in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Promoting Adolescent Sexual Health in Nigeria", "description": "Discuss how nurses can provide education and support to promote sexual health among adolescents in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Ethical Issues on Nursing Practice in Nigeria", "description": "Analyze how ethical challenges impact the practice and decision-making of nurses in Nigerian healthcare settings.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Chronic Kidney Disease in Nigeria", "description": "Examine how nurses contribute to the care and management of patients with chronic kidney disease in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurse-Led Health Promotion Programs in Nigeria", "description": "Discuss how nurse-led health promotion initiatives can improve public health outcomes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to End-of-Life Care in Nigeria", "description": "Explore the role of nurses in providing compassionate and ethical end-of-life care for patients in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Pediatric Asthma in Nigeria", "description": "Discuss how nurses can effectively manage and support children with asthma in Nigerian healthcare settings.", "link": "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { "title": "The Role of Nurses in Managing Multi-Drug Resistant Tuberculosis in Nigeria", "description": "Examine the challenges and strategies involved in managing multi-drug resistant tuberculosis by nurses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurses' Advocacy on Healthcare Policy in Nigeria", "description": "Analyze how nurses' advocacy efforts influence healthcare policies and reforms in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing the Ebola Virus Disease in Nigeria", "description": "Discuss the role of nurses in the prevention, treatment, and control of Ebola outbreaks in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Advanced Nursing Practice on Healthcare Delivery in Nigeria", "description": "Examine how advanced nursing roles, such as nurse practitioners, are impacting healthcare delivery in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing HIV-Positive Pregnant Women in Nigeria", "description": "Discuss the strategies used by nurses to manage and support HIV-positive pregnant women in Nigerian healthcare settings.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to Combating Antimicrobial Resistance in Nigeria", "description": "Analyze how nurses can play a key role in the fight against antimicrobial resistance in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Global Health Initiatives on Nursing Practice in Nigeria", "description": "Explore how global health initiatives, such as WHO programs, affect nursing practices and healthcare delivery in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Promoting Health Equity in Nigeria", "description": "Discuss how nurses can contribute to achieving health equity and reducing healthcare disparities in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Cardiovascular Diseases in Nigeria", "description": "Examine the strategies used by nurses in the prevention and management of cardiovascular diseases in Nigerian patients.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Cultural Beliefs on End-of-Life Nursing Care in Nigeria", "description": "Analyze how cultural beliefs and practices influence end-of-life care provided by nurses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Patients with Dual Diagnoses in Nigeria", "description": "Discuss how nurses can effectively care for patients with dual diagnoses, such as mental health and substance abuse issues, in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Healthcare System Challenges on Nursing Practice in Nigeria", "description": "Analyze how systemic challenges, such as funding and infrastructure issues, impact the practice of nursing in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Contribution to Reducing Maternal Mortality in Nigeria", "description": "Examine how nursing interventions can help reduce the high rates of maternal mortality in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Substance Abuse in Nigerian Adolescents", "description": "Discuss the strategies employed by nurses to prevent and treat substance abuse among Nigerian adolescents.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurse-Led Interventions on Patient Safety in Nigerian Hospitals", "description": "Analyze how interventions led by nurses can improve patient safety and reduce medical errors in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Emerging Infectious Diseases in Nigeria", "description": "Examine the preparedness and response strategies of nurses in managing emerging infectious diseases in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Promoting Safe Motherhood in Nigeria", "description": "Discuss how nurses can contribute to safe motherhood initiatives and improve maternal health outcomes in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Nurse-Patient Ratios on Healthcare Quality in Nigeria", "description": "Analyze how nurse-patient ratios affect the quality of care and patient outcomes in Nigerian hospitals.", "link": "https://wa.me/2348071272293" },
            { "title": "Nurses' Role in Managing Pediatric Malaria in Nigeria", "description": "Explore the strategies used by nurses in the prevention and treatment of malaria in Nigerian children.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Nurses in Managing Non-Communicable Diseases in Nigeria", "description": "Discuss how nurses can contribute to the prevention and management of non-communicable diseases, such as diabetes and hypertension, in Nigeria.", "link": "https://wa.me/2348071272293" }
        ]
    },
    "accounting": {
        "easy": [
            { "title": "The Role of Accounting Information in Business Decision-Making in Nigeria", "description": "Examine how accounting information is utilized by businesses in Nigeria to make informed decisions.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Reporting on Investment Decisions in Nigerian Firms", "description": "Analyze the influence of financial reports on the investment decisions made by firms in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Internal Auditing in Enhancing Financial Accountability in Nigeria", "description": "Discuss how internal auditing contributes to financial accountability and transparency in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Budgetary Control in Public Sector Organizations in Nigeria", "description": "Explore the effectiveness of budgetary control mechanisms in public sector organizations in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Taxation on Small and Medium Enterprises (SMEs) in Nigeria", "description": "Analyze how taxation policies affect the growth and profitability of SMEs in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Forensic Accounting in Fraud Detection and Prevention in Nigeria", "description": "Discuss how forensic accounting practices can help in detecting and preventing fraud in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Cash Flow Management for Nigerian Businesses", "description": "Examine the significance of effective cash flow management for the sustainability of businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Corporate Governance on Financial Performance in Nigerian Banks", "description": "Analyze how corporate governance practices influence the financial performance of banks in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting Standards in Financial Reporting in Nigeria", "description": "Explore the importance of adhering to accounting standards for accurate financial reporting in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Auditing on the Performance of Nigerian Commercial Banks", "description": "Discuss how auditing practices impact the overall performance and stability of commercial banks in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting in Managing Corporate Social Responsibility (CSR) in Nigeria", "description": "Examine how accounting practices are used to manage and report CSR activities in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Literacy on Personal Savings and Investment in Nigeria", "description": "Analyze how financial literacy affects personal savings and investment decisions among Nigerians.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting Information Systems in Nigerian Organizations", "description": "Explore the use of accounting information systems and their impact on decision-making in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Government Regulations on Financial Reporting in Nigeria", "description": "Discuss how government regulations impact financial reporting practices in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Importance of Ethical Accounting Practices in Nigerian Businesses", "description": "Examine the role of ethical accounting practices in maintaining the integrity and reputation of Nigerian businesses.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Ratios in Assessing Business Performance in Nigeria", "description": "Analyze how financial ratios are used to evaluate the performance of businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Inflation on Financial Statements in Nigeria", "description": "Discuss how inflation affects the accuracy and relevance of financial statements in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting in Non-Profit Organizations in Nigeria", "description": "Explore how accounting practices are applied in non-profit organizations to ensure financial transparency and accountability.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Financial Regulations on the Nigerian Banking Sector", "description": "Examine how financial regulations impact the operations and performance of the banking sector in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Audits in Enhancing Stakeholder Confidence in Nigeria", "description": "Discuss how financial audits contribute to building stakeholder confidence in Nigerian businesses.", "link": "https://wa.me/2348071272293" }
        ],
        "medium": [
            { "title": "The Impact of International Financial Reporting Standards (IFRS) on Nigerian Firms", "description": "Examine how the adoption of IFRS has affected the financial reporting practices of firms in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting Ethics in Corporate Governance in Nigeria", "description": "Discuss the importance of accounting ethics in ensuring effective corporate governance in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Tax Administration in Nigeria: Challenges and Prospects", "description": "Analyze the challenges and opportunities in improving tax administration in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Cost Accounting in Managing Production Costs in Nigerian Manufacturing Firms", "description": "Explore how cost accounting practices are used to manage and control production costs in Nigerian manufacturing firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Budgeting on Financial Performance in Nigerian Organizations", "description": "Examine the role of budgeting in improving the financial performance of organizations in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Management Accounting in Strategic Planning in Nigerian Firms", "description": "Discuss how management accounting information is used in the strategic planning process of Nigerian firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Corporate Tax on Business Profitability in Nigeria", "description": "Analyze how corporate tax policies impact the profitability of businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Statements in Credit Risk Assessment in Nigerian Banks", "description": "Explore how financial statements are used by banks in Nigeria to assess the creditworthiness of borrowers.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Auditing on Fraud Prevention in Nigerian Organizations", "description": "Discuss how auditing practices can help in preventing fraud in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting in Managing Public Funds in Nigeria", "description": "Examine how accounting practices are used to ensure transparency and accountability in the management of public funds in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Financial Planning on the Success of Nigerian SMEs", "description": "Analyze how effective financial planning contributes to the success and growth of SMEs in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Corporate Governance in Financial Reporting Quality in Nigeria", "description": "Discuss how corporate governance practices influence the quality of financial reporting in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Markets on Economic Growth in Nigeria", "description": "Examine how the development of financial markets contributes to economic growth in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Auditing in Detecting and Preventing Money Laundering in Nigeria", "description": "Discuss how financial auditing practices are used to detect and prevent money laundering activities in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Exchange Rate Fluctuations on Financial Performance in Nigerian Firms", "description": "Analyze how exchange rate fluctuations impact the financial performance of firms in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Statements in Investment Decisions in Nigeria", "description": "Explore how investors use financial statements to make informed investment decisions in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Corporate Social Responsibility on Financial Performance in Nigeria", "description": "Discuss how corporate social responsibility initiatives affect the financial performance of Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Analysis in Business Valuation in Nigeria", "description": "Examine how financial analysis is used to determine the value of businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Auditing Standards in Enhancing Financial Reporting in Nigeria", "description": "Analyze how auditing standards contribute to improving the quality of financial reporting in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting in the Management of Foreign Exchange Risk in Nigerian Firms", "description": "Discuss how accounting practices are used to manage foreign exchange risk in Nigerian firms.", "link": "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { "title": "The Impact of Corporate Governance on Financial Reporting Transparency in Nigeria", "description": "Analyze how corporate governance practices influence the transparency of financial reporting in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Innovation in the Nigerian Banking Sector", "description": "Discuss the impact of financial innovations, such as digital banking, on the operations of Nigerian banks.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of International Financial Reporting Standards (IFRS) on Taxation in Nigeria", "description": "Examine how the adoption of IFRS has impacted taxation practices and policies in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Reporting in Corporate Governance in Nigeria", "description": "Discuss how financial reporting practices contribute to effective corporate governance in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Regulation on the Nigerian Capital Market", "description": "Analyze how financial regulations influence the operations and performance of the capital market in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Risk Management in Nigerian Banks", "description": "Examine how financial risk management practices are implemented in Nigerian banks to mitigate risks.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Financial Auditing in Detecting Financial Fraud in Nigeria", "description": "Discuss how effective financial auditing practices are in detecting and preventing financial fraud in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Reporting in Enhancing Corporate Accountability in Nigeria", "description": "Analyze how financial reporting practices contribute to corporate accountability in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Economic Recession on Financial Reporting Practices in Nigeria", "description": "Examine how economic recessions affect financial reporting practices and financial performance in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Accounting in Managing Financial Risks in Nigerian Firms", "description": "Discuss how accounting practices are used to identify, assess, and manage financial risks in Nigerian firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Corporate Governance on the Financial Performance of Nigerian Banks", "description": "Analyze how corporate governance practices impact the financial performance of banks in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Reporting in Stakeholder Management in Nigeria", "description": "Discuss how financial reporting practices are used to manage stakeholder relationships in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Globalization on Accounting Practices in Nigeria", "description": "Examine how financial globalization influences accounting practices and standards in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Auditing in Enhancing Corporate Governance in Nigeria", "description": "Discuss how financial auditing practices contribute to effective corporate governance in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Financial Regulation in Preventing Bank Failures in Nigeria", "description": "Analyze how effective financial regulations are in preventing bank failures and maintaining financial stability in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Technology (FinTech) in Financial Inclusion in Nigeria", "description": "Examine how financial technology innovations are promoting financial inclusion in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Corporate Governance on Earnings Management in Nigerian Firms", "description": "Discuss how corporate governance practices influence earnings management and financial reporting in Nigerian firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Accounting in Corporate Mergers and Acquisitions in Nigeria", "description": "Analyze how financial accounting practices are applied in corporate mergers and acquisitions in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Financial Statement Disclosure on Investment Decisions in Nigeria", "description": "Examine how the disclosure of financial statements influences investment decisions made by investors in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Financial Accounting in Managing Corporate Liquidity in Nigeria", "description": "Discuss how financial accounting practices are used to manage corporate liquidity and cash flow in Nigerian firms.", "link": "https://wa.me/2348071272293" }
        ]
    },
    "business_administration": {
        "easy": [
            { "title": "The Impact of Digital Marketing on Small Businesses in Nigeria", "description": "Discuss how digital marketing strategies, including social media and online advertising, affect the growth and visibility of small businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Customer Relationship Management (CRM) in Enhancing Business Performance in Nigeria", "description": "Explore how CRM systems and practices contribute to improving customer satisfaction and business performance in Nigerian firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Employee Turnover on Organizational Performance in Nigeria", "description": "Examine how high employee turnover rates impact organizational performance, productivity, and morale in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Public Relations in Crisis Management in Nigerian Businesses", "description": "Analyze how effective public relations strategies help Nigerian businesses manage crises and protect their reputations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Consumer Behavior on Product Development in Nigeria", "description": "Discuss how understanding consumer behavior guides product development and marketing strategies in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of E-Commerce on Retail Businesses in Nigeria", "description": "Explore how the growth of e-commerce is transforming the retail sector and consumer shopping habits in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Corporate Culture in Shaping Business Success in Nigeria", "description": "Examine how corporate culture influences employee behavior, job satisfaction, and overall business success in Nigerian organizations.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effectiveness of Employee Engagement Programs in Nigerian Companies", "description": "Analyze how employee engagement initiatives impact job satisfaction, retention, and productivity in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Organizational Communication in Enhancing Employee Performance in Nigeria", "description": "Discuss how effective internal communication practices contribute to employee performance and organizational harmony in Nigerian businesses.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Supply Chain Management on Business Competitiveness in Nigeria", "description": "Explore how efficient supply chain management practices enhance business competitiveness and customer satisfaction in Nigeria.", "link": "https://wa.me/2348071272293" }
        ],
        "medium": [
            { "title": "The Role of Entrepreneurship in Economic Development in Nigeria", "description": "Analyze how entrepreneurship contributes to economic growth, job creation, and poverty reduction in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Brand Loyalty on Consumer Purchasing Decisions in Nigeria", "description": "Examine how brand loyalty influences consumer choices and long-term business success in the Nigerian market.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Mobile Banking on Financial Inclusion in Nigeria", "description": "Discuss how mobile banking services are expanding access to financial services and promoting financial inclusion in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Human Capital Development in Enhancing Business Productivity in Nigeria", "description": "Explore how investing in human capital development, such as training and education, improves business productivity in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Organizational Structure on Employee Performance in Nigeria", "description": "Analyze how different organizational structures impact employee roles, responsibilities, and overall performance in Nigerian firms.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Digital Transformation on Business Operations in Nigeria", "description": "Discuss how digital transformation initiatives are reshaping business operations, efficiency, and competitiveness in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Ethical Leadership in Promoting Corporate Integrity in Nigeria", "description": "Examine how ethical leadership practices contribute to maintaining corporate integrity, trust, and sustainability in Nigerian businesses.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Financial Planning on Business Sustainability in Nigeria", "description": "Explore how strategic financial planning contributes to the long-term sustainability and growth of businesses in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Consumer Protection Laws in Enhancing Business Practices in Nigeria", "description": "Discuss how consumer protection regulations influence business practices, consumer rights, and corporate accountability in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Organizational Ethics on Employee Behavior in Nigeria", "description": "Analyze how organizational ethics and values shape employee behavior, decision-making, and corporate culture in Nigerian companies.", "link": "https://wa.me/2348071272293" }
        ],
        "difficult": [
            { "title": "The Role of Innovation in Enhancing Business Competitiveness in Nigeria", "description": "Analyze how innovation drives business competitiveness, market positioning, and long-term success in Nigerian industries.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Corporate Governance on Financial Performance in Nigerian Banks", "description": "Discuss how corporate governance practices influence the financial performance, stability, and ethical conduct of Nigerian banks.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Economic Recession on Business Strategies in Nigeria", "description": "Examine how businesses adapt their strategies and operations to survive and thrive during economic recessions in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Strategic Alliances in Enhancing Business Growth in Nigeria", "description": "Explore how forming strategic alliances with other organizations contributes to business growth, market expansion, and innovation in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Influence of Corporate Social Responsibility on Brand Loyalty in Nigeria", "description": "Discuss how CSR initiatives influence brand loyalty, consumer perception, and corporate reputation in Nigerian businesses.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Leadership Styles on Organizational Change in Nigeria", "description": "Analyze how different leadership styles affect the management and outcomes of organizational change processes in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Strategic Marketing in Business Expansion in Nigeria", "description": "Examine how strategic marketing efforts contribute to identifying new markets, reaching new customers, and expanding business operations in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Effect of Corporate Mergers and Acquisitions on Business Growth in Nigeria", "description": "Discuss how mergers and acquisitions strategies impact business growth, market share, and operational efficiency in Nigeria.", "link": "https://wa.me/2348071272293" },
            { "title": "The Role of Employee Engagement in Enhancing Business Performance in Nigeria", "description": "Analyze how employee engagement initiatives contribute to improving business performance, customer satisfaction, and organizational culture in Nigerian companies.", "link": "https://wa.me/2348071272293" },
            { "title": "The Impact of Corporate Culture on Business Innovation in Nigeria", "description": "Explore how corporate culture fosters innovation, creativity, and competitive advantage in Nigerian businesses.", "link": "https://wa.me/2348071272293" }
        ]
    },
    
    
    
    
    
    

    
    
    
    

    // Add similar arrays for other departments...
    "civil-engineering": { /* Similar structure */ },
    
};

// Function to generate topics based on user selections
function generateTopics() {
    const department = document.getElementById('department').value;
    const difficulty = document.getElementById('difficulty').value;
    const resultContainer = document.getElementById('result-container');

    if (department && difficulty) {
        let filteredTopics = topics[department][difficulty];

        // Shuffle the topics array
        filteredTopics = filteredTopics.sort(() => 0.5 - Math.random());

        // Limit results to 5 items
        const displayTopics = filteredTopics.slice(0, 5);

        resultContainer.innerHTML = '';

        if (displayTopics.length > 0) {
            displayTopics.forEach((topic, index) => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `<strong>${topic.title}</strong><p>${topic.description}</p><a href="${topic.link}" target="_blank" class="read-more-button">Get PDF and Slide Presentation</a>`;

                resultContainer.appendChild(resultItem);

                // Add animation to the result item
                setTimeout(() => {
                    resultItem.classList.add('visible');
                }, index * 100); // Stagger animation
            });

            // Add shuffle button
            const shuffleButton = document.createElement('button');
            shuffleButton.textContent = 'Shuffle Topics';
            shuffleButton.className = 'shuffle-button';
            shuffleButton.onclick = () => generateTopics();
            resultContainer.appendChild(shuffleButton);
        } else {
            resultContainer.innerHTML = '<p>No topics found for the selected criteria.</p>';
        }
    } else {
        resultContainer.innerHTML = '<p>Please select both department and difficulty level.</p>';
    }
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

