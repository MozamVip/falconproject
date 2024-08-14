
// Sample project topics for each department and difficulty level with PDF links
const topics = {
    "computer-science": {
        "easy": [
            { title: "Basic Web Development", description: "Create a simple website using HTML and CSS.", pdf: "pdf/basic-web-development.pdf" },
            { title: "Introduction to JavaScript", description: "Learn the basics of JavaScript and its usage in web development.", pdf: "pdf/introduction-to-javascript.pdf" },
            { title: "Personal Budget Tracker", description: "Develop a basic application to track personal expenses.", pdf: "pdf/personal-budget-tracker.pdf" },
            { title: "Simple Calculator", description: "Build a basic calculator using JavaScript.", pdf: "pdf/simple-calculator.pdf" },
            { title: "Static Portfolio Website", description: "Create a personal portfolio website with static content.", pdf: "pdf/static-portfolio-website.pdf" },
            { title: "HTML Form Validation", description: "Implement form validation using HTML and JavaScript.", pdf: "pdf/html-form-validation.pdf" },
            { title: "To-Do List Application", description: "Develop a basic to-do list application using HTML, CSS, and JavaScript.", pdf: "pdf/to-do-list-application.pdf" },
            { title: "Basic Data Structures", description: "Explore fundamental data structures such as arrays and linked lists.", pdf: "pdf/basic-data-structures.pdf" },
            { title: "Simple Blog Platform", description: "Build a basic blog platform where users can create and read posts.", pdf: "pdf/simple-blog-platform.pdf" },
            { title: "Weather App", description: "Create an app that fetches and displays weather information from an API.", pdf: "pdf/weather-app.pdf" }
        ],
        "medium": [
            { title: "Online Quiz Application", description: "Develop a web-based quiz application with a database backend.", pdf: "pdf/online-quiz-application.pdf" },
            { title: "Expense Tracker with Charting", description: "Build an expense tracker with data visualization using charts.", pdf: "pdf/expense-tracker-with-charting.pdf" },
            { title: "E-commerce Website", description: "Create a basic e-commerce site with product listings and shopping cart functionality.", pdf: "pdf/e-commerce-website.pdf" },
            { title: "Chat Application", description: "Develop a real-time chat application using WebSocket.", pdf: "pdf/chat-application.pdf" },
            { title: "Personal Portfolio with CMS", description: "Create a dynamic personal portfolio with a content management system.", pdf: "pdf/personal-portfolio-with-cms.pdf" },
            { title: "Simple Game Development", description: "Develop a simple game using JavaScript and HTML5 Canvas.", pdf: "pdf/simple-game-development.pdf" },
            { title: "Restaurant Reservation System", description: "Build a system for managing restaurant reservations.", pdf: "pdf/restaurant-reservation-system.pdf" },
            { title: "Inventory Management System", description: "Develop a web-based inventory management system for small businesses.", pdf: "pdf/inventory-management-system.pdf" },
            { title: "Social Media Dashboard", description: "Create a dashboard to display and manage social media analytics.", pdf: "pdf/social-media-dashboard.pdf" },
            { title: "Job Portal", description: "Build a job portal with user profiles, job listings, and application features.", pdf: "pdf/job-portal.pdf" }
        ],
        "difficult": [
            { title: "Machine Learning Model", description: "Develop a machine learning model using a dataset to make predictions.", pdf: "pdf/machine-learning-model.pdf" },
            { title: "Blockchain-Based Voting System", description: "Create a decentralized voting system using blockchain technology.", pdf: "pdf/blockchain-based-voting-system.pdf" },
            { title: "Advanced E-commerce Platform", description: "Build a comprehensive e-commerce platform with advanced features like AI recommendations.", pdf: "pdf/advanced-e-commerce-platform.pdf" },
            { title: "Augmented Reality Application", description: "Develop an AR app using ARKit or ARCore for mobile devices.", pdf: "pdf/augmented-reality-application.pdf" },
            { title: "AI-Powered Chatbot", description: "Create an intelligent chatbot using natural language processing techniques.", pdf: "pdf/ai-powered-chatbot.pdf" },
            { title: "Distributed File Storage System", description: "Build a distributed file storage system with fault tolerance.", pdf: "pdf/distributed-file-storage-system.pdf" },
            { title: "Cybersecurity Threat Detection System", description: "Develop a system to detect and respond to cybersecurity threats.", pdf: "pdf/cybersecurity-threat-detection-system.pdf" },
            { title: "Real-Time Analytics Platform", description: "Create a platform for real-time data analytics and visualization.", pdf: "pdf/real-time-analytics-platform.pdf" },
            { title: "Smart Home Automation System", description: "Build a system for automating home devices and controlling them remotely.", pdf: "pdf/smart-home-automation-system.pdf" },
            { title: "Advanced Game Development", description: "Develop a complex game with advanced graphics and gameplay mechanics.", pdf: "pdf/advanced-game-development.pdf" }
        ]
    },
    "electrical-engineering": {
        "easy": [
            { title: "Basic Circuit Design", description: "Create and simulate basic electrical circuits using software.", pdf: "pdf/basic-circuit-design.pdf" },
            { title: "Introduction to Arduino", description: "Build simple projects using Arduino boards and components.", pdf: "pdf/introduction-to-arduino.pdf" },
            { title: "LED Blink Project", description: "Develop a project that blinks an LED on and off using a microcontroller.", pdf: "pdf/led-blink-project.pdf" },
            { title: "Battery Voltage Tester", description: "Create a device to measure and display battery voltage.", pdf: "pdf/battery-voltage-tester.pdf" },
            { title: "Simple Oscillator Circuit", description: "Design and test a basic oscillator circuit.", pdf: "pdf/simple-oscillator-circuit.pdf" },
            { title: "Power Supply Design", description: "Design a simple regulated power supply for electronic circuits.", pdf: "pdf/power-supply-design.pdf" },
            { title: "Digital Stopwatch", description: "Build a digital stopwatch using basic electronic components.", pdf: "pdf/digital-stopwatch.pdf" },
            { title: "Temperature Sensor", description: "Create a circuit to measure and display temperature using a sensor.", pdf: "pdf/temperature-sensor.pdf" },
            { title: "Automatic Light Control", description: "Develop a circuit to control lighting based on ambient light levels.", pdf: "pdf/automatic-light-control.pdf" },
            { title: "Simple Amplifier", description: "Design and test a basic audio amplifier circuit.", pdf: "pdf/simple-amplifier.pdf" }
        ],
        "medium": [
            { title: "Microcontroller-Based Temperature Logger", description: "Develop a system to log temperature data using a microcontroller.", pdf: "pdf/microcontroller-based-temperature-logger.pdf" },
            { title: "Wireless Sensor Network", description: "Create a network of wireless sensors for data collection and monitoring.", pdf: "pdf/wireless-sensor-network.pdf" },
            { title: "Smart Home Automation", description: "Build a system to control home appliances remotely.", pdf: "pdf/smart-home-automation.pdf" },
            { title: "Power Factor Correction Circuit", description: "Design a circuit to improve the power factor in AC circuits.", pdf: "pdf/power-factor-correction-circuit.pdf" },
            { title: "Inverter Design", description: "Develop a DC to AC inverter for powering appliances.", pdf: "pdf/inverter-design.pdf" },
            { title: "Digital Multimeter", description: "Build a digital multimeter for measuring various electrical parameters.", pdf: "pdf/digital-multimeter.pdf" },
            { title: "PLC-Based Automation System", description: "Create an automation system using a programmable logic controller (PLC).", pdf: "pdf/plc-based-automation-system.pdf" },
            { title: "Energy Meter Design", description: "Design a device to measure and display electrical energy consumption.", pdf: "pdf/energy-meter-design.pdf" },
            { title: "Battery Management System", description: "Develop a system for managing and monitoring battery health.", pdf: "pdf/battery-management-system.pdf" },
            { title: "Electromagnetic Field Analyzer", description: "Create a device to measure and analyze electromagnetic fields.", pdf: "pdf/electromagnetic-field-analyzer.pdf" }
        ],
        "difficult": [
            { title: "Design of a Power Converter", description: "Develop a power converter with specific voltage and current requirements.", pdf: "pdf/design-of-a-power-converter.pdf" },
            { title: "Advanced Circuit Simulation", description: "Use simulation tools to design and analyze complex circuits.", pdf: "pdf/advanced-circuit-simulation.pdf" },
            { title: "Wireless Power Transfer System", description: "Create a system for transferring power wirelessly over short distances.", pdf: "pdf/wireless-power-transfer-system.pdf" },
            { title: "Automated Control System", description: "Design an automated control system for industrial applications.", pdf: "pdf/automated-control-system.pdf" },
            { title: "Smart Grid Technology", description: "Develop a project on smart grid technology and its implementation.", pdf: "pdf/smart-grid-technology.pdf" },
            { title: "Advanced Robotics", description: "Build a robot with advanced sensors and control systems.", pdf: "pdf/advanced-robotics.pdf" },
            { title: "Renewable Energy Systems", description: "Design and implement a system for harnessing renewable energy.", pdf: "pdf/renewable-energy-systems.pdf" },
            { title: "High-Frequency Circuit Design", description: "Develop circuits for high-frequency applications such as RF communications.", pdf: "pdf/high-frequency-circuit-design.pdf" },
            { title: "Fault Detection in Electrical Systems", description: "Create a system for detecting and diagnosing faults in electrical systems.", pdf: "pdf/fault-detection-in-electrical-systems.pdf" },
            { title: "Integrated Circuit Design", description: "Design and simulate an integrated circuit for a specific application.", pdf: "pdf/integrated-circuit-design.pdf" }
        ]
    },
    // Add similar arrays for other departments...
    "civil-engineering": { /* Similar structure */ },
    "accounting": { /* Similar structure */ },
    "cybersecurity": { /* Similar structure */ },
    "business-administration": { /* Similar structure */ },
    "microbiology": { /* Similar structure */ },
    "biochemistry": { /* Similar structure */ }
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
                resultItem.innerHTML = `<strong>${topic.title}</strong><p>${topic.description}</p><a href="${topic.pdf}" target="_blank" class="read-more-button">Read More</a>`;

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

