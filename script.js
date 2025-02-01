// JavaScript for Sign-Up Page

document.addEventListener('DOMContentLoaded', () => {
    // Elements for sign up and verification
    const emailForm = document.querySelector('.email-signup');
    const verifyForm = document.querySelector('.verify-code1');
    const googleSignUpButton = document.querySelector('.google-signup');
    const signUpButton = document.querySelector('.email-signup button');
    const verifyButton = document.querySelector('.verify-code button');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const codeInput = document.getElementById('code');

    // Handle Google sign up button (example)
    googleSignUpButton.addEventListener('click', () => {
        alert('Redirecting to Google Sign Up...');
        // Add Google OAuth or API integration here.
    });

    // Handle email/password form submission
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple validation check
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Fake sending the form data to a server (e.g., via fetch)
        console.log('Sending data to server:', { email, password });

        // Show verification section after form submission
        emailForm.style.display = 'none';  // Hide the sign-up form
        verifyForm.style.display = 'block';  // Show verification section

        // Simulate sending a verification code (this is where you'd trigger an API call)
        alert('A verification code has been sent to your email/phone.');
    });

    // Handle verification form submission
    verifyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const code = codeInput.value;

        // Simple validation for code input
        if (!code) {
            alert('Please enter the verification code.');
            return;
        }

        // Fake verification code check (you would actually check the code on your server)
        console.log('Verifying code:', code);
        if (code === '123456') {  // Assuming '123456' is the correct verification code
            alert('Account successfully verified! Welcome aboard.');
            // Redirect user to a welcome page or dashboard
            window.location.href = 'user-dashboard.html';  // Example redirection
        } else {
            alert('Invalid code. Please try again.');
        }
    });

    // Optional: Enhance password field with some validation on input (e.g., length check)
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 6) {
            passwordInput.setCustomValidity('Password must be at least 6 characters long');
        } else {
            passwordInput.setCustomValidity('');
        }
    });
});

// Sample JSON data (you can replace this with a fetch request to load from a file or API)
const productsData = {
    "categories": [
        {
            "id": 1,
            "name": "Lipbalm",
            "image": "images/image.3.jpg",
            "description": "A nourishing lip balm that keeps your lips soft and hydrated all day long.",
            "price": 250,
            "rating": 4.7
        },
        {
            "id": 2,
            "name": "Shampoo",
            "image": "images/img.6.jpg",
            "description": "A gentle shampoo that cleanses and nourishes your hair, leaving it shiny and healthy.",
            "price": 450,
            "rating": 4.5
        },
        {
            "id": 3,
            "name": "Body Wash",
            "image": "images/image.5.jpg",
            "description": "A refreshing body wash that hydrates and revitalizes your skin with every use.",
            "price": 350,
            "rating": 4.6
        },
        {
            "id": 4,
            "name": "Body Lotion",
            "image": "images/img.7.jpg",
            "description": "A rich and creamy body lotion that deeply moisturizes and softens your skin.",
            "price": 400,
            "rating": 4.8
        },
        {
            "id": 5,
            "name": "Moisturizer",
            "image": "images/ncifera..jpg",
            "description": "A lightweight moisturizer that hydrates and protects your skin from environmental damage.",
            "price": 500,
            "rating": 4.9
        },
        {
            "id": 6,
            "name": "Lipscrub",
            "image": "images/lipscrub.9.jpg",
            "description": "A natural lip scrub that exfoliates and smoothens your lips for a soft finish.",
            "price": 300,
            "rating": 4.4
        },
        {
            "id": 7,
            "name": "Perfume",
            "image": "images/perfume.8.jpg",
            "description": "A long-lasting perfume with a captivating fragrance for everyday wear.",
            "price": 800,
            "rating": 4.7
        },
        {
            "id": 8,
            "name": "Coco Roller",
            "image": "images/roller.9.jpg",
            "description": "A portable roller ball infused with natural oils for on-the-go hydration.",
            "price": 600,
            "rating": 4.6
        },
        {
            "id": 9,
            "name": "Serum",
            "image": "images/serum.1.jpg",
            "description": "A powerful serum that targets fine lines and brightens your complexion.",
            "price": 700,
            "rating": 4.8
        },
        {
            "id": 10,
            "name": "Settingspray",
            "image": "images/settingspray.5.jpg",
            "description": "A setting spray that locks your makeup in place for hours without smudging.",
            "price": 550,
            "rating": 4.5
        },
        {
            "id": 11,
            "name": "Sunscreen",
            "image": "images/sun.8.jpg",
            "description": "A lightweight sunscreen that protects your skin from harmful UV rays.",
            "price": 450,
            "rating": 4.7
        },
        {
            "id": 12,
            "name": "FaceToner",
            "image": "images/toner.4.jpg",
            "description": "A refreshing toner that balances your skin's pH and removes impurities.",
            "price": 380,
            "rating": 4.6
        }
    ]
};

// Function to dynamically generate product categories
function displayProducts() {
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) {
        productsData.categories.forEach(category => {
            // Create a div for each category
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category-item');

            // Add the image
            const img = document.createElement('img');
            img.src = category.image;
            img.alt = category.name;
            categoryItem.appendChild(img);

            // Add the category name
            const h3 = document.createElement('h3');
            h3.textContent = category.name;
            categoryItem.appendChild(h3);

            // Add the "View Products" button
            const button = document.createElement('a');
            button.href = `products.html#${category.id}`;
            button.classList.add('btn');
            button.textContent = 'View Products';
            categoryItem.appendChild(button);

            // Append the category item to the grid
            categoryGrid.appendChild(categoryItem);
        });
    }
}

// Function to dynamically generate product categories
function displayProductDetails() {
    const productId = window.location.hash.substring(1); // Extract the ID from the URL hash (e.g., "#1")
    const product = productsData.categories.find(category => category.id === parseInt(productId));    

    if (product) {
        const productDetailsContainer = document.getElementById('product-details-container');
        if (productDetailsContainer) {
            // Clear any existing content
            productDetailsContainer.innerHTML = '';

            // Create a div for the product details
            const productDetails = document.createElement('div');
            productDetails.classList.add('product-details-item');

            // Add the image
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            productDetails.appendChild(img);

            // Add the product name
            const h3 = document.createElement('h3');
            h3.textContent = product.name;
            productDetails.appendChild(h3);

            // Add the description
            const pDescription = document.createElement('p');
            pDescription.textContent = product.description;
            productDetails.appendChild(pDescription);

            // Add the price
            const pPrice = document.createElement('p');
            pPrice.textContent = `Price: ₹${product.price}`;
            productDetails.appendChild(pPrice);

            // Add the rating
            const pRating = document.createElement('p');
            pRating.textContent = `Rating: ${product.rating}/5`;
            productDetails.appendChild(pRating);

            // Append the product details to the container
            productDetailsContainer.appendChild(productDetails);
        }
    } else {
        // If no product is found, display an error message
        const productDetailsContainer = document.getElementById('product-details-container');
        if (productDetailsContainer) {
            productDetailsContainer.innerHTML = '<p>Product not found.</p>';
        }
    }
}

// Call the function to display products
window.addEventListener('DOMContentLoaded', displayProducts());
window.addEventListener('DOMContentLoaded', displayProductDetails());