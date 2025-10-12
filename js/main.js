
const sdgData = [
    { id: 1, title: 'No Poverty', color: '#E5243B', description: "Ensure that no one is too poor to eat, have a home, or go to school.", challenge: "Donate a toy or a piece of clothing you no longer use to a charity." },
    { id: 2, title: 'Zero Hunger', color: '#DDA63A', description: "Make sure everyone has enough good food to be healthy and strong.", challenge: "Don't waste food! Finish your plate and try new vegetables." },
    { id: 3, 'title': 'Good Health and Well-being', color: '#4C9F38', description: "Help everyone stay healthy, no matter their age.", challenge: "Wash your hands well before eating and after playing outside." },
    { id: 4, title: 'Quality Education', color: '#C5192D', description: "Allow all children in the world to go to school and learn many things.", challenge: "Read a book or learn something new every day." },
    { id: 5, 'title': 'Gender Equality', color: '#FF3A21', description: "Ensure that girls and boys have the same rights and opportunities to succeed.", challenge: "Play with everyone, girls and boys, and share the games fairly." },
    { id: 6, 'title': 'Clean Water and Sanitation', color: '#26BDE2', description: "Guarantee that everyone can drink clean water and have access to toilets.", challenge: "Don't let the water run when you brush your teeth." },
    { id: 7, 'title': 'Affordable and Clean Energy', color: '#FCC30B', description: "Use energy that doesn't pollute the planet, like the sun or the wind.", challenge: "Turn off the lights when you leave a room." },
    { id: 8, 'title': 'Decent Work and Economic Growth', color: '#A21942', description: "Allow adults to have good jobs to earn a living and be happy.", challenge: "Ask adults what their job is and why they like it." },
    { id: 9, 'title': 'Industry, Innovation and Infrastructure', color: '#FD6925', description: "Build useful things (roads, bridges, factories) in a smart and planet-friendly way.", challenge: "Imagine an invention that could help people or the planet." },
    { id: 10, 'title': 'Reduced Inequalities', 'color': '#DD1367', description: "Help people who are less fortunate so that everyone is treated fairly.", challenge: "Be kind and respectful to everyone, no matter their differences." },
    { id: 11, 'title': 'Sustainable Cities and Communities', 'color': '#FD9D24', description: "Make our cities beautiful, safe, and clean, with parks to play in.", challenge: "Throw your trash in the bin and help with recycling at home." },
    { id: 12, 'title': 'Responsible Consumption and Production', 'color': '#BF8B2E', description: "Make and use things without wasting resources or polluting.", challenge: "Fix a broken toy instead of throwing it away, or turn a cardboard box into a fort." },
    { id: 13, 'title': 'Climate Action', 'color': '#3F7E44', description: "Protect our planet from warming up by polluting less.", challenge: "Walk or ride your bike for short trips instead of taking the car." },
    { id: 14, 'title': 'Life Below Water', 'color': '#0A97D9', description: "Take care of the fish, whales, and all the animals that live in the oceans.", challenge: "Don't use plastic straws and pick up trash if you see it on the beach." },
    { id: 15, 'title': 'Life on Land', 'color': '#56C02B', description: "Protect the forests, animals, and plants that live on land.", challenge: "Plant a seed and watch it grow, or build a small shelter for insects." },
    { id: 16, 'title': 'Peace, Justice and Strong Institutions', 'color': '#00689D', description: "Ensure that everyone lives in peace and safety, and that the laws are fair for all.", challenge: "Learn to say 'sorry' and to solve small arguments with your friends without getting angry." },
    { id: 17, 'title': 'Partnerships for the Goals', 'color': '#19486A', description: "Work together (countries, companies, kids) to succeed in all these missions.", challenge: "Tell your friends and family about the Guardians of the Planet to build a super team!" }
];

const sdgGrid = document.getElementById('sdg-grid');
const modal = document.getElementById('sdg-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');

function createSdgCards() {
    if(!sdgGrid) return
    sdgData.forEach(sdg => {
        const card = document.createElement('div');
        card.className = 'sdg-card cursor-pointer shadow-lg';
        card.style.backgroundColor = sdg.color;
        card.innerHTML = `
            <div class="p-4 h-full flex flex-col justify-center items-center text-white text-center">
                <span class="text-3xl font-brand-heading">${sdg.id}</span>
                <h3 class="mt-2 font-semibold">${sdg.title}</h3>
            </div>
        `;
        card.addEventListener('click', () => openModal(sdg));
        sdgGrid.appendChild(card);
    });
}

function openModal(sdg) {
    document.getElementById('modal-title').textContent = `${sdg.id}: ${sdg.title}`;
    document.getElementById('modal-description').textContent = sdg.description;
    document.getElementById('modal-challenge-text').textContent = sdg.challenge;
    
    const iconContainer = document.getElementById('modal-icon-container');
    iconContainer.innerHTML = `<div class="w-full h-full rounded-lg flex items-center justify-center text-white font-brand-heading text-4xl" style="background-color: ${sdg.color};">${sdg.id}</div>`;

    modalContent.style.borderColor = sdg.color;
    modalContent.style.borderWidth = '4px';
    modalContent.style.borderStyle = 'solid';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if(modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

if(closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}
if(modal){
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if(modal && !modal.classList.contains('hidden')){
            closeModal();
        }
    }
});

createSdgCards();

// certificate.html
document.addEventListener('DOMContentLoaded', () => {
    const certificateDiv = document.getElementById('certificate');
    if(certificateDiv) {
        const params = new URLSearchParams(window.location.search);
        
        const name = params.get('name') || "Joe Mooo's";
        const score = parseInt(params.get('score') || "95");
        const sdg = params.get('sdg') || "An Important Mission";

        // Populate the certificate with the data
        document.getElementById('person-name').textContent = name;
        document.getElementById('sdg-name').textContent = sdg;
        document.getElementById('grade').textContent = `${score}%`;
        
        const today = new Date();
        document.getElementById('date').textContent = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Apply the correct color style based on the score
        const sealIcon = document.getElementById('seal-icon');

        if (score === 100) {
            certificateDiv.classList.add('excellence');
            sealIcon.textContent = '💎'; // Diamond for excellence
        } else if (score >= 80) {
            certificateDiv.classList.add('gold');
            sealIcon.textContent = '🏅'; // Gold medal
        } else if (score >= 70) {
            certificateDiv.classList.add('silver');
            sealIcon.textContent = '🥈'; // Silver medal
        } else {
            certificateDiv.classList.add('bronze');
            sealIcon.textContent = '🥉'; // Bronze medal for participation
        }
    }
});

// challenge_new.html
document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    if(imageUpload) {
        const previewImage = document.getElementById('preview-image');
        const placeholderText = document.getElementById('placeholder-text');
        const printButton = document.getElementById('print-button');
        
        imageUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImage.src = e.target.result;
                    previewImage.classList.remove('hidden');
                    placeholderText.classList.add('hidden');
                    printButton.disabled = false;
                }
                reader.readAsDataURL(file);
            }
        });

        printButton.addEventListener('click', () => {
            window.print();
        });
    }
});

// mission_1.html
document.addEventListener('DOMContentLoaded', () => {
    if(typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
        });
    }
});

// partner_1.html
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    if(quizForm) {
        document.querySelectorAll('.quiz-options').forEach(group => {
            group.addEventListener('click', (e) => {
                if (e.target.tagName === 'LABEL') {
                    group.querySelectorAll('label').forEach(label => label.classList.remove('selected'));
                    e.target.classList.add('selected');
                }
            });
        });

        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let score = 0;
            const totalQuestions = document.querySelectorAll('.quiz-options').length;

            document.querySelectorAll('.quiz-options').forEach(group => {
                const selected = group.querySelector('input:checked');
                if (selected && selected.value === group.dataset.answer) {
                    score++;
                }
            });
            
            if (score === totalQuestions) {
                document.getElementById('quiz-container').classList.add('hidden');
                document.getElementById('badge-section').classList.remove('hidden');
            } else {
                alert('Not quite! You need a perfect score to get the badge. Please try again!');
            }
        });

        const printBadgeBtn = document.getElementById('print-badge-btn');
        if(printBadgeBtn) {
            printBadgeBtn.addEventListener('click', function() {
                window.print();
            });
        }
    }
});

// quiz.html
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    if(quizForm) {
        const quizData = [
            { question: "What is the main goal of SDG 1?", options: ["No Hunger", "No Poverty", "Good Health"], answer: "No Poverty" },
            { question: "Poverty means not having enough...", options: ["Toys", "Money for basic needs", "Friends"], answer: "Money for basic needs" },
            { question: "Which of these is a 'basic need'?", options: ["A fancy car", "A safe place to live", "A new phone"], answer: "A safe place to live" },
            { question: "What kind of food helps our brains and bodies grow?", options: ["Candy", "Nutritious food", "Fast food"], answer: "Nutritious food" },
            { question: "Why is a safe home important?", options: ["To store video games", "To protect from rain and cold", "To have big parties"], answer: "To protect from rain and cold" },
            { question: "Clean toilets help to...", options: ["Save water", "Stop sickness from spreading", "Look nice"], answer: "Stop sickness from spreading" },
            { question: "What does education give us?", options: ["Tools to build our dreams", "More time to play", "Lots of homework"], answer: "Tools to build our dreams" },
            { question: "Ending poverty helps people...", options: ["Become famous", "Unlock their superpowers", "Travel the world"], answer: "Unlock their superpowers" },
            { question: "A child with a good education might grow up to be...", options: ["Only a teacher", "Anything they dream of", "A video game player"], answer: "Anything they dream of" },
            { question: "When adults have good jobs, it helps build stronger...", options: ["Muscles", "Communities", "Houses"], answer: "Communities" },
            { question: "SDG 1 is about making the world...", options: ["Richer", "Fairer", "Bigger"], answer: "Fairer" },
            { question: "What is a simple way you can help?", options: ["Buy more things", "Donate clothes you've outgrown", "Keep everything for yourself"], answer: "Donate clothes you've outgrown" },
            { question: "The 'Power of Not Wasting' means you should...", options: ["Leave the lights on", "Save water and electricity", "Throw away leftovers"], answer: "Save water and electricity" },
            { question: "What is 'empathy'?", options: ["Being good at math", "Understanding how someone else feels", "Running very fast"], answer: "Understanding how someone else feels" },
            { question: "How can you show the 'Power of Kindness'?", options: ["By being the best at games", "By inviting someone new to play", "By having the most toys"], answer: "By inviting someone new to play" },
            { question: "Why is it important to learn about other cultures?", options: ["So you can travel", "To build empathy", "To learn new languages"], answer: "To build empathy" },
            { question: "What is a 'foundation' for a good life?", options: ["Having lots of money", "Having your basic needs met", "Being famous"], answer: "Having your basic needs met" },
            { question: "Ending poverty helps make everyone...", options: ["Taller and stronger", "Healthier and happier", "Smarter and faster"], answer: "Healthier and happier" },
            { question: "What is a small action that makes a huge difference?", options: ["Turning off a light", "Buying a new toy", "Watching TV"], answer: "Turning off a light" },
            { question: "Being a Guardian of the Planet means you use your powers...", options: ["Only on weekends", "To show off", "Every day in small ways"], answer: "Every day in small ways" }
        ];

        const quizContainer = quizForm.querySelector('.space-y-8');

        // Populate Quiz
        quizData.forEach((item, index) => {
            const questionId = `q${index + 1}`;
            const optionsHtml = item.options.map(option => `
                <label class="quiz-option block p-4 border-2 rounded-lg cursor-pointer">
                    <input type="radio" name="${questionId}" value="${option}" class="mr-3" required>
                    ${option}
                </label>
            `).join('');

            const questionHtml = `
                <div class="question-card p-6 md:p-8">
                    <p class="font-bold text-xl mb-4">${index + 1}. ${item.question}</p>
                    <div class="space-y-3">${optionsHtml}</div>
                </div>
            `;
            quizContainer.innerHTML += questionHtml;
        });

        // Handle Submission
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let score = 0;
            quizData.forEach((item, index) => {
                const questionId = `q${index + 1}`;
                const selectedOption = quizForm.querySelector(`input[name="${questionId}"]:checked`);
                if (selectedOption && selectedOption.value === item.answer) {
                    score++;
                }
            });

            const percentage = (score / quizData.length) * 100;
            
            const resultsSection = document.getElementById('results-section');
            const resultsTitle = document.getElementById('results-title');
            const resultsScore = document.getElementById('results-score');
            const resultsMessage = document.getElementById('results-message');
            const certificateButton = document.getElementById('certificate-button');

            resultsScore.textContent = `${percentage.toFixed(0)}%`;

            if (percentage === 100) {
                resultsTitle.textContent = "🏆 Certificate of Excellence! 🏆";
                resultsMessage.textContent = "PERFECT SCORE! You are a true expert on fighting poverty. Your knowledge is as bright as your heart. Well done, Guardian!";
                certificateButton.textContent = "Claim Your Excellence Certificate!";
            } else if (percentage >= 80) {
                resultsTitle.textContent = "🎉 Mission Passed! 🎉";
                resultsMessage.textContent = "Congratulations! You have successfully passed the final challenge and shown you have what it takes to be a Guardian of the Planet.";
                certificateButton.textContent = "Claim Your Certificate!";
            } else {
                resultsTitle.textContent = "🤔 Keep Trying, Guardian! 🤔";
                resultsMessage.textContent = `You scored ${percentage.toFixed(0)}%. You need at least 80% to pass. Review the course material and try the challenge again! You can do it!`;
                certificateButton.style.display = 'none';
            }

            resultsSection.classList.remove('hidden');
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// shopping_cart.html
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items-container');
    if(cartItemsContainer) {
        function updateSummary() {
            let subtotal = 0;
            const cartItems = document.querySelectorAll('#cart-items-container .cart-item');
            
            if (cartItems.length === 0) {
                subtotal = 0;
            } else {
                cartItems.forEach(item => {
                    const priceElement = item.querySelector('.item-price');
                    subtotal += parseFloat(priceElement.textContent);
                });
            }


            const shipping = cartItems.length > 0 ? 5.00 : 0;
            const total = subtotal + shipping;

            document.getElementById('summary-subtotal').textContent = `€${subtotal.toFixed(2)}`;
            document.getElementById('summary-shipping').textContent = `€${shipping.toFixed(2)}`;
            document.getElementById('summary-total').textContent = `€${total.toFixed(2)}`;
        }

        function updateItemPrice(item) {
            const quantityElement = item.querySelector('.quantity-value');
            const priceElement = item.querySelector('.item-price');
            const basePrice = parseFloat(priceElement.dataset.price);
            const quantity = parseInt(quantityElement.dataset.quantity);
            const newPrice = basePrice * quantity;
            priceElement.textContent = newPrice.toFixed(2);
            updateSummary();
        }

        cartItemsContainer.addEventListener('click', (e) => {
            const item = e.target.closest('.cart-item');
            if (!item) return;
            
            const quantityElement = item.querySelector('.quantity-value');
            let quantity = parseInt(quantityElement.dataset.quantity);

            // Plus button
            if (e.target.classList.contains('plus-btn')) {
                quantity++;
                quantityElement.dataset.quantity = quantity;
                quantityElement.textContent = quantity;
                updateItemPrice(item);
            }

            // Minus button
            if (e.target.classList.contains('minus-btn')) {
                if (quantity > 1) {
                    quantity--;
                    quantityElement.dataset.quantity = quantity;
                    quantityElement.textContent = quantity;
                    updateItemPrice(item);
                }
            }

            // Remove button
            if (e.target.classList.contains('remove-btn')) {
                item.remove();
                updateSummary();
            }
        });

        // Initial calculation
        updateSummary();
    }
});
