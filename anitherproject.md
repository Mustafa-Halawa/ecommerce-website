<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusShop - Premium E-commerce</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .bg-primary {
            background-color: #222831;
        }
        .bg-secondary {
            background-color: #31363F;
        }
        .bg-accent {
            background-color: #76ABAE;
        }
        .text-primary {
            color: #222831;
        }
        .text-secondary {
            color: #31363F;
        }
        .text-accent {
            color: #76ABAE;
        }
        .text-light {
            color: #eeeeee;
        }
        .text-danger {
            color: #FF0000;
        }
        .border-accent {
            border-color: #76ABAE;
        }
        .hover\:bg-accent:hover {
            background-color: #76ABAE;
        }
        .cart-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #FF0000;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .dropdown:hover .dropdown-menu {
            display: block;
        }
    </style>
</head>
<body class="bg-gray-100 text-primary">
    <!-- Header/Navbar -->
    <header class="bg-primary text-light sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <a href="#" class="text-2xl font-bold text-accent">Nexus<span class="text-light">Shop</span></a>
                    <nav class="hidden md:flex space-x-6">
                        <a href="#" class="hover:text-accent transition">Home</a>
                        <div class="dropdown relative">
                            <button class="hover:text-accent transition flex items-center">
                                Shop <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="dropdown-menu absolute hidden bg-secondary mt-2 py-2 w-48 rounded-md shadow-lg">
                                <a href="#" class="block px-4 py-2 hover:bg-accent hover:text-light">All Products</a>
                                <a href="#" class="block px-4 py-2 hover:bg-accent hover:text-light">New Arrivals</a>
                                <a href="#" class="block px-4 py-2 hover:bg-accent hover:text-light">Best Sellers</a>
                            </div>
                        </div>
                        <a href="#" class="hover:text-accent transition">About</a>
                        <a href="#" class="hover:text-accent transition">Contact</a>
                    </nav>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <button id="search-btn" class="hover:text-accent transition">
                            <i class="fas fa-search"></i>
                        </button>
                        <div id="search-bar" class="hidden absolute right-0 mt-2 w-64 bg-secondary p-2 rounded-md shadow-lg">
                            <input type="text" placeholder="Search products..." class="w-full bg-gray-100 text-primary px-3 py-1 rounded">
                        </div>
                    </div>
                    <a href="#" class="hover:text-accent transition">
                        <i class="fas fa-user"></i>
                    </a>
                    <div class="relative">
                        <button id="cart-btn" class="hover:text-accent transition">
                            <i class="fas fa-shopping-cart"></i>
                            <span id="cart-count" class="cart-badge">0</span>
                        </button>
                        <div id="cart-dropdown" class="hidden absolute right-0 mt-2 w-72 bg-secondary p-4 rounded-md shadow-lg">
                            <h4 class="font-bold border-b border-accent pb-2">Your Cart</h4>
                            <div id="cart-items" class="max-h-60 overflow-y-auto py-2">
                                <p class="text-center py-4">Your cart is empty</p>
                            </div>
                            <div class="border-t border-accent pt-3">
                                <div class="flex justify-between mb-2">
                                    <span>Subtotal:</span>
                                    <span id="cart-subtotal">$0.00</span>
                                </div>
                                <a href="#" class="block w-full bg-accent text-light text-center py-2 rounded hover:bg-opacity-90">Checkout</a>
                            </div>
                        </div>
                    </div>
                    <button id="mobile-menu-btn" class="md:hidden hover:text-accent transition">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden mt-3 pb-2">
                <a href="#" class="block py-2 hover:text-accent">Home</a>
                <a href="#" class="block py-2 hover:text-accent">Shop</a>
                <a href="#" class="block py-2 hover:text-accent">About</a>
                <a href="#" class="block py-2 hover:text-accent">Contact</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-secondary text-light py-16">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Premium Products <span class="text-accent">For Everyone</span></h1>
                <p class="text-lg mb-6">Discover our exclusive collection of high-quality products at unbeatable prices.</p>
                <div class="flex space-x-4">
                    <a href="#" class="bg-accent text-light px-6 py-3 rounded hover:bg-opacity-90 transition">Shop Now</a>
                    <a href="#" class="border border-accent text-accent px-6 py-3 rounded hover:bg-accent hover:text-light transition">Learn More</a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img src="https://via.placeholder.com/500x350/31363F/76ABAE?text=NexusShop" alt="Hero Image" class="rounded-lg shadow-xl">
            </div>
        </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center">Shop By Category</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/300x200/31363F/76ABAE?text=Electronics" alt="Electronics" class="w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Electronics</h3>
                        <a href="#" class="text-accent hover:underline">Shop Now</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/300x200/31363F/76ABAE?text=Fashion" alt="Fashion" class="w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Fashion</h3>
                        <a href="#" class="text-accent hover:underline">Shop Now</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/300x200/31363F/76ABAE?text=Home" alt="Home" class="w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Home & Garden</h3>
                        <a href="#" class="text-accent hover:underline">Shop Now</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                    <img src="https://via.placeholder.com/300x200/31363F/76ABAE?text=Sports" alt="Sports" class="w-full h-40 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">Sports & Outdoors</h3>
                        <a href="#" class="text-accent hover:underline">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold">Featured Products</h2>
                <a href="#" class="text-accent hover:underline">View All</a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- Product 1 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                    <div class="relative">
                        <img src="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+1" alt="Product 1" class="w-full h-64 object-cover">
                        <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-lg">Wireless Headphones</h3>
                            <div class="flex items-center">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="ml-1 text-sm">4.8</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Premium noise-cancelling wireless headphones with 30hr battery</p>
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-accent font-bold text-lg">$89.99</span>
                                <span class="text-gray-400 text-sm line-through ml-2">$129.99</span>
                            </div>
                            <button class="add-to-cart bg-accent text-white p-2 rounded-full hover:bg-opacity-90 transition" data-id="1" data-name="Wireless Headphones" data-price="89.99" data-image="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+1">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                    <img src="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+2" alt="Product 2" class="w-full h-64 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-lg">Smart Watch</h3>
                            <div class="flex items-center">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="ml-1 text-sm">4.5</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Fitness tracker with heart rate monitor and GPS</p>
                        <div class="flex justify-between items-center">
                            <span class="text-accent font-bold text-lg">$149.99</span>
                            <button class="add-to-cart bg-accent text-white p-2 rounded-full hover:bg-opacity-90 transition" data-id="2" data-name="Smart Watch" data-price="149.99" data-image="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+2">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                    <img src="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+3" alt="Product 3" class="w-full h-64 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-lg">Bluetooth Speaker</h3>
                            <div class="flex items-center">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="ml-1 text-sm">4.7</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Portable waterproof speaker with 20hr playtime</p>
                        <div class="flex justify-between items-center">
                            <span class="text-accent font-bold text-lg">$59.99</span>
                            <button class="add-to-cart bg-accent text-white p-2 rounded-full hover:bg-opacity-90 transition" data-id="3" data-name="Bluetooth Speaker" data-price="59.99" data-image="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+3">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                    <div class="relative">
                        <img src="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+4" alt="Product 4" class="w-full h-64 object-cover">
                        <span class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-semibold text-lg">Wireless Charger</h3>
                            <div class="flex items-center">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="ml-1 text-sm">4.3</span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">Fast charging pad compatible with all Qi devices</p>
                        <div class="flex justify-between items-center">
                            <span class="text-accent font-bold text-lg">$34.99</span>
                            <button class="add-to-cart bg-accent text-white p-2 rounded-full hover:bg-opacity-90 transition" data-id="4" data-name="Wireless Charger" data-price="34.99" data-image="https://via.placeholder.com/300x300/31363F/76ABAE?text=Product+4">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Special Offer -->
    <section class="py-12 bg-accent text-light">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Limited Time Offer</h2>
            <p class="text-xl mb-6">Get 30% off on all products this weekend only!</p>
            <div class="flex justify-center space-x-2 mb-8">
                <div class="bg-secondary px-4 py-2 rounded">
                    <span class="text-2xl font-bold" id="days">00</span>
                    <span class="block text-sm">Days</span>
                </div>
                <div class="bg-secondary px-4 py-2 rounded">
                    <span class="text-2xl font-bold" id="hours">00</span>
                    <span class="block text-sm">Hours</span>
                </div>
                <div class="bg-secondary px-4 py-2 rounded">
                    <span class="text-2xl font-bold" id="minutes">00</span>
                    <span class="block text-sm">Minutes</span>
                </div>
                <div class="bg-secondary px-4 py-2 rounded">
                    <span class="text-2xl font-bold" id="seconds">00</span>
                    <span class="block text-sm">Seconds</span>
                </div>
            </div>
            <a href="#" class="inline-block bg-secondary text-light px-8 py-3 rounded hover:bg-opacity-90 transition">Shop Now</a>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="flex items-center text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"The wireless headphones are amazing! Great sound quality and comfortable to wear for hours."</p>
                    <div class="flex items-center">
                        <img src="https://via.placeholder.com/50x50/31363F/76ABAE?text=J" alt="John D." class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <h4 class="font-semibold">John D.</h4>
                            <p class="text-gray-500 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="flex items-center text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Fast shipping and excellent customer service. The smart watch has all the features I need for my workouts."</p>
                    <div class="flex items-center">
                        <img src="https://via.placeholder.com/50x50/31363F/76ABAE?text=S" alt="Sarah M." class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <h4 class="font-semibold">Sarah M.</h4>
                            <p class="text-gray-500 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="flex items-center text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"I'm impressed with the quality of the Bluetooth speaker. The sound is crisp and the battery lasts forever!"</p>
                    <div class="flex items-center">
                        <img src="https://via.placeholder.com/50x50/31363F/76ABAE?text=M" alt="Mike T." class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <h4 class="font-semibold">Mike T.</h4>
                            <p class="text-gray-500 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-12 bg-secondary text-light">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p class="text-lg mb-6 max-w-2xl mx-auto">Stay updated with our latest products, exclusive offers, and special discounts.</p>
            <form class="max-w-md mx-auto flex">
                <input type="email" placeholder="Your email address" class="flex-grow px-4 py-3 rounded-l focus:outline-none text-primary">
                <button type="submit" class="bg-accent px-6 py-3 rounded-r hover:bg-opacity-90 transition">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-light py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4 text-accent">NexusShop</h3>
                    <p class="mb-4">Premium e-commerce platform offering high-quality products at competitive prices.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:text-accent transition"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="hover:text-accent transition"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="hover:text-accent transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="hover:text-accent transition"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-accent transition">Home</a></li>
                        <li><a href="#" class="hover:text-accent transition">Shop</a></li>
                        <li><a href="#" class="hover:text-accent transition">About Us</a></li>
                        <li><a href="#" class="hover:text-accent transition">Contact</a></li>
                        <li><a href="#" class="hover:text-accent transition">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Customer Service</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-accent transition">Shipping Policy</a></li>
                        <li><a href="#" class="hover:text-accent transition">Return Policy</a></li>
                        <li><a href="#" class="hover:text-accent transition">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-accent transition">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Contact Us</h4>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-2 text-accent"></i>
                            <span>123 Main Street, City, Country</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-phone-alt mt-1 mr-2 text-accent"></i>
                            <span>+1 (234) 567-8900</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-envelope mt-1 mr-2 text-accent"></i>
                            <span>info@nexusshop.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center">
                <p>&copy; 2023 NexusShop. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Shopping Cart Modal -->
    <div id="cart-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div class="bg-white w-full max-w-md h-full overflow-y-auto">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-lg font-bold">Your Shopping Cart</h3>
                <button id="close-cart" class="text-gray-500 hover:text-primary">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div id="modal-cart-items" class="p-4">
                <!-- Cart items will be inserted here -->
            </div>
            <div class="p-4 border-t border-gray-200">
                <div class="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span id="modal-cart-subtotal">$0.00</span>
                </div>
                <div class="flex justify-between mb-4">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div class="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span id="modal-cart-total">$0.00</span>
                </div>
                <a href="#" class="block w-full bg-accent text-white text-center py-3 rounded hover:bg-opacity-90 mb-2">Proceed to Checkout</a>
                <a href="#" class="block w-full border border-accent text-accent text-center py-3 rounded hover:bg-accent hover:text-white">Continue Shopping</a>
            </div>
        </div>
    </div>

    <script>
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Search bar toggle
        const searchBtn = document.getElementById('search-btn');
        const searchBar = document.getElementById('search-bar');

        searchBtn.addEventListener('click', () => {
            searchBar.classList.toggle('hidden');
        });

        // Cart dropdown toggle
        const cartBtn = document.getElementById('cart-btn');
        const cartDropdown = document.getElementById('cart-dropdown');

        cartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cartDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            cartDropdown.classList.add('hidden');
            searchBar.classList.add('hidden');
        });

        // Prevent dropdown from closing when clicking inside
        cartDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        searchBar.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Shopping cart functionality
        let cart = [];
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const modalCartItems = document.getElementById('modal-cart-items');
        const modalCartSubtotal = document.getElementById('modal-cart-subtotal');
        const modalCartTotal = document.getElementById('modal-cart-total');
        const cartModal = document.getElementById('cart-modal');
        const closeCartBtn = document.getElementById('close-cart');

        // Add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const name = button.getAttribute('data-name');
                const price = parseFloat(button.getAttribute('data-price'));
                const image = button.getAttribute('data-image');

                addToCart(id, name, price, image);
            });
        });

        // Add item to cart
        function addToCart(id, name, price, image) {
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }

            updateCart();
        }

        // Remove item from cart
        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCart();
        }

        // Update quantity
        function updateQuantity(id, newQuantity) {
            const item = cart.find(item => item.id === id);

            if (item) {
                item.quantity = parseInt(newQuantity);

                if (item.quantity <= 0) {
                    removeFromCart(id);
                } else {
                    updateCart();
                }
            }
        }

        // Update cart UI
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;

            // Update cart dropdown
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-center py-4">Your cart is empty</p>';
                cartSubtotal.textContent = '$0.00';
            } else {
                let itemsHTML = '';
                let subtotal = 0;

                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;

                    itemsHTML += `
                        <div class="flex items-center py-2 border-b border-gray-200">
                            <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                            <div class="ml-3 flex-grow">
                                <h4 class="font-medium">${item.name}</h4>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-accent font-bold">$${item.price.toFixed(2)}</span>
                                    <div class="flex items-center">
                                        <button class="decrease-quantity px-2 text-gray-500 hover:text-primary" data-id="${item.id}">-</button>
                                        <span class="quantity mx-2">${item.quantity}</span>
                                        <button class="increase-quantity px-2 text-gray-500 hover:text-primary" data-id="${item.id}">+</button>
                                    </div>
                                </div>
                            </div>
                            <button class="remove-item ml-2 text-gray-500 hover:text-danger" data-id="${item.id}">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                });

                cartItems.innerHTML = itemsHTML;
                cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

                // Add event listeners to new buttons
                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        removeFromCart(id);
                    });
                });

                document.querySelectorAll('.decrease-quantity').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) updateQuantity(id, item.quantity - 1);
                    });
                });

                document.querySelectorAll('.increase-quantity').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) updateQuantity(id, item.quantity + 1);
                    });
                });
            }

            // Update modal cart
            updateModalCart();
        }

        // Update modal cart
        function updateModalCart() {
            if (cart.length === 0) {
                modalCartItems.innerHTML = '<p class="text-center py-8">Your cart is empty</p>';
                modalCartSubtotal.textContent = '$0.00';
                modalCartTotal.textContent = '$0.00';
            } else {
                let itemsHTML = '';
                let subtotal = 0;

                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;

                    itemsHTML += `
                        <div class="flex items-center py-4 border-b border-gray-200">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                            <div class="ml-4 flex-grow">
                                <h4 class="font-medium">${item.name}</h4>
                                <div class="flex justify-between items-center mt-2">
                                    <span class="text-accent font-bold">$${item.price.toFixed(2)}</span>
                                    <div class="flex items-center">
                                        <button class="modal-decrease-quantity px-2 text-gray-500 hover:text-primary" data-id="${item.id}">-</button>
                                        <input type="number" value="${item.quantity}" min="1" class="modal-quantity w-12 text-center border rounded" data-id="${item.id}">
                                        <button class="modal-increase-quantity px-2 text-gray-500 hover:text-primary" data-id="${item.id}">+</button>
                                    </div>
                                </div>
                            </div>
                            <button class="modal-remove-item ml-4 text-gray-500 hover:text-danger" data-id="${item.id}">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                });

                modalCartItems.innerHTML = itemsHTML;
                modalCartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
                modalCartTotal.textContent = `$${subtotal.toFixed(2)}`;

                // Add event listeners to modal buttons
                document.querySelectorAll('.modal-remove-item').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        removeFromCart(id);
                    });
                });

                document.querySelectorAll('.modal-decrease-quantity').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) updateQuantity(id, item.quantity - 1);
                    });
                });

                document.querySelectorAll('.modal-increase-quantity').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) updateQuantity(id, item.quantity + 1);
                    });
                });

                document.querySelectorAll('.modal-quantity').forEach(input => {
                    input.addEventListener('change', (e) => {
                        const id = e.target.getAttribute('data-id');
                        const newQuantity = parseInt(e.target.value);
                        if (!isNaN(newQuantity)) updateQuantity(id, newQuantity);
                    });
                });
            }
        }

        // Cart modal toggle
        cartBtn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                cartModal.classList.remove('hidden');
            }
        });

        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });

        // Countdown timer for special offer
        function updateCountdown() {
            const now = new Date();
            const weekend = new Date();

            // Set to next Saturday at 12:00 PM
            weekend.setDate(now.getDate() + (6 - now.getDay()));
            weekend.setHours(12, 0, 0, 0);

            const diff = weekend - now;

            if (diff <= 0) {
                // If the weekend has passed, set to next weekend
                weekend.setDate(weekend.getDate() + 7);
                updateCountdown();
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown();
    </script>

</body>
</html> -->
