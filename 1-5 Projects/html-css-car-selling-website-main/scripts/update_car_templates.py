from pathlib import Path

base_head = '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="css/app.css" />
  </head>
  <body class="{body_class}">
'''

footer = '''    <footer class="site-footer">
      <div class="container footer-inner">
        <p>CarFindal Service © 2026 · Modern responsive car marketplace.</p>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="s.html">Search</a>
          <a href="add_new.html">Add Car</a>
          <a href="login.html">Login</a>
        </div>
      </div>
    </footer>
'''

header = '''    <header class="navbar">
      <div class="container navbar-content">
        <a href="index.html" class="logo-wrapper">
          <img src="img/logoipsum-265.svg" alt="CarFindal" />
        </a>
        <nav class="navbar-links">
          <a href="index.html">Home</a>
          <a href="s.html">Browse</a>
          <a href="my_cars.html">My Cars</a>
          <a href="watchlist.html">Wishlist</a>
        </nav>
        <div class="navbar-actions">
          <a href="add_new.html" class="btn btn-outline">Add Car</a>
          <a href="signup.html" class="btn btn-primary">Signup</a>
          <a href="login.html" class="btn btn-login">Login</a>
          <button class="btn btn-default btn-navbar-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
'''

pages = {
    "index.html": {
        "body_class": "page-home",
        "title": "CarFindal · Buy & Sell Cars",
        "content": '''    <main>
      <section class="hero-slider">
        <div class="hero-slides">
          <div class="hero-slide active">
            <div class="slide-content">
              <p class="eyebrow">Discover your next ride</p>
              <h1 class="hero-slider-title">Buy, Sell and Explore premium cars with confidence.</h1>
              <p class="hero-slider-content">Search by brand, model, year, price and more. Every listing is curated for reliability and style.</p>
              <div class="hero-actions">
                <a href="s.html" class="btn btn-primary">Start browsing</a>
                <a href="add_new.html" class="btn btn-outline">List a car</a>
              </div>
            </div>
            <div class="slide-image">
              <img src="img/car-png-39071.png" alt="Car showcase" />
            </div>
          </div>
          <div class="hero-slide">
            <div class="slide-content">
              <p class="eyebrow">Sell quickly</p>
              <h1 class="hero-slider-title">Attract more buyers with beautiful car listings.</h1>
              <p class="hero-slider-content">Upload photos, describe your vehicle, and manage your offers with ease.</p>
              <div class="hero-actions">
                <a href="add_new.html" class="btn btn-primary">Add your car</a>
                <a href="login.html" class="btn btn-outline">Login to manage</a>
              </div>
            </div>
            <div class="slide-image">
              <img src="img/car-png-39071.png" alt="Sell a car" />
            </div>
          </div>
          <button type="button" class="hero-slide-prev" aria-label="Previous slide">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button type="button" class="hero-slide-next" aria-label="Next slide">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

      <section class="find-a-car">
        <div class="container card">
          <h2>Find your perfect car</h2>
          <form action="s.html" method="GET" class="find-a-car-form">
            <div class="find-a-car-inputs">
              <div class="form-group">
                <label for="makerSelect">Maker</label>
                <select id="makerSelect" name="maker_id">
                  <option value="">Any Maker</option>
                  <option>Chevrolet</option>
                  <option>Ford</option>
                  <option>Honda</option>
                  <option>Lexus</option>
                  <option>Nissan</option>
                  <option>Toyota</option>
                </select>
              </div>
              <div class="form-group">
                <label for="modelSelect">Model</label>
                <select id="modelSelect" name="model_id">
                  <option value="">Any Model</option>
                  <option value="370Z" data-parent="Nissan">370Z</option>
                  <option value="4Runner" data-parent="Toyota">4Runner</option>
                  <option value="Accord" data-parent="Honda">Accord</option>
                  <option value="RX200t" data-parent="Lexus">RX200t</option>
                </select>
              </div>
              <div class="form-group">
                <label for="priceRange">Max price</label>
                <select id="priceRange" name="price_range">
                  <option value="">Any Price</option>
                  <option value="25000">$25,000</option>
                  <option value="40000">$40,000</option>
                  <option value="60000">$60,000</option>
                  <option value="100000">$100,000</option>
                </select>
              </div>
            </div>
            <div class="hero-actions">
              <button type="submit" class="btn btn-primary">Search cars</button>
            </div>
          </form>
        </div>
      </section>

      <section class="container content-panel">
        <div class="grid grid-cols-3 gap-1"> 
          <article class="card">
            <h3>Wide selection</h3>
            <p>Browse hundreds of verified cars from top brands and trusted sellers.</p>
          </article>
          <article class="card">
            <h3>Easy management</h3>
            <p>List your car fast with smart forms and manage your inventory with a click.</p>
          </article>
          <article class="card">
            <h3>Secure offers</h3>
            <p>Keep your deals transparent with clear pricing and seller contacts.</p>
          </article>
        </div>
      </section>
    </main>
'''
    },
    "s.html": {
        "body_class": "page-search",
        "title": "Search Cars · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="flex items-center justify-between my-medium">
          <div>
            <p class="eyebrow">Search results</p>
            <h2>Cars matching your criteria</h2>
          </div>
          <select class="sort-dropdown">
            <option value="">Sort by</option>
            <option value="price">Price: low to high</option>
            <option value="-price">Price: high to low</option>
          </select>
        </div>

        <div class="search-car-results-wrapper">
          <aside class="search-cars-sidebar card">
            <div class="sidebar-header">
              <h3>Filters</h3>
              <button type="button" class="close-filters-button">Close</button>
            </div>
            <form action="s.html" method="GET" class="find-a-car-form">
              <div class="form-group">
                <label>Maker</label>
                <select name="maker_id">
                  <option value="">All Makers</option>
                  <option>Chevrolet</option>
                  <option>Ford</option>
                  <option>Honda</option>
                  <option>Lexus</option>
                  <option>Nissan</option>
                  <option>Toyota</option>
                </select>
              </div>
              <div class="form-group">
                <label>Year</label>
                <select name="year">
                  <option value="">Any Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
              <div class="form-group">
                <label>Fuel Type</label>
                <select name="fuel_type">
                  <option value="">Any Fuel</option>
                  <option>Gasoline</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                </select>
              </div>
              <button class="btn btn-primary" type="submit">Apply filters</button>
            </form>
          </aside>

          <section class="search-results">
            <div class="grid grid-cols-3 gap-1">
              ''' + '\n'.join([f'''              <article class="car-item card">
                <a href="view.html"><img src="img/cars/Lexus-RX200t-2016/1.jpeg" alt="Lexus NX200t" class="car-item-img" /></a>
                <div class="p-medium">
                  <div class="flex items-center justify-between">
                    <small class="text-muted">New Jersey</small>
                    <button class="btn-heart"><i class="fas fa-heart"></i></button>
                  </div>
                  <h3 class="car-item-title">2016 · Lexus NX200t</h3>
                  <p class="car-item-price">$25,000</p>
                  <p class="m-0"><span class="car-item-badge">SUV</span><span class="car-item-badge">Hybrid</span></p>
                </div>
              </article>''' for _ in range(6)]) + '''
            </div>
          </section>
        </div>
      </section>
    </main>
'''
    },
    "add_new.html": {
        "body_class": "page-add-car",
        "title": "Add New Car · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="card">
          <div class="flex items-center justify-between mb-medium">
            <div>
              <p class="eyebrow">Sell your car</p>
              <h1 class="car-details-page-title">Add a new listing</h1>
            </div>
          </div>

          <form action="" method="POST" enctype="multipart/form-data" class="add-new-car-form">
            <div class="grid grid-cols-3 gap-1">
              <div class="form-group">
                <label>Maker</label>
                <select>
                  <option value="">Choose Maker</option>
                  <option>BMW</option>
                  <option>Lexus</option>
                  <option>Mercedes</option>
                </select>
              </div>
              <div class="form-group">
                <label>Model</label>
                <input type="text" placeholder="Enter model" />
              </div>
              <div class="form-group">
                <label>Year</label>
                <select>
                  <option value="">Choose Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-1">
              <div class="form-group">
                <label>Price</label>
                <input type="number" placeholder="Price" />
              </div>
              <div class="form-group">
                <label>Mileage</label>
                <input type="number" placeholder="Mileage" />
              </div>
              <div class="form-group">
                <label>VIN Code</label>
                <input type="text" placeholder="Vehicle Identification" />
              </div>
            </div>

            <div class="form-group">
              <label>Fuel Type</label>
              <div class="grid grid-cols-3 gap-1">
                <label class="inline-radio"><input type="radio" name="fuel" /> Gasoline</label>
                <label class="inline-radio"><input type="radio" name="fuel" /> Hybrid</label>
                <label class="inline-radio"><input type="radio" name="fuel" /> Electric</label>
              </div>
            </div>

            <div class="form-group">
              <label>Upload photos</label>
              <input id="carFormImageUpload" type="file" name="images[]" multiple accept="image/*" />
            </div>

            <div id="imagePreviews" class="car-form-images grid grid-cols-4 gap-1"></div>

            <div class="hero-actions">
              <button type="submit" class="btn btn-primary">Save listing</button>
              <a href="my_cars.html" class="btn btn-outline">Back to listings</a>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "edit_car.html": {
        "body_class": "page-edit-car",
        "title": "Edit Car · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="card">
          <div class="flex items-center justify-between mb-medium">
            <div>
              <p class="eyebrow">Update listing</p>
              <h1 class="car-details-page-title">Edit Lexus NX200t · 2016</h1>
            </div>
          </div>

          <form action="" class="add-new-car-form">
            <div class="grid grid-cols-3 gap-1">
              <div class="form-group">
                <label>Maker</label>
                <select>
                  <option>Lexus</option>
                </select>
              </div>
              <div class="form-group">
                <label>Model</label>
                <input type="text" placeholder="NX200t" value="NX200t" />
              </div>
              <div class="form-group">
                <label>Year</label>
                <select>
                  <option>2016</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-1">
              <div class="form-group">
                <label>Price</label>
                <input type="number" placeholder="25,000" value="25000" />
              </div>
              <div class="form-group">
                <label>Mileage</label>
                <input type="number" placeholder="78,000" value="78000" />
              </div>
              <div class="form-group">
                <label>VIN Code</label>
                <input type="text" placeholder="4T1BF1FK0HU123456" value="4T1BF1FK0HU123456" />
              </div>
            </div>

            <div class="form-group">
              <label>Fuel Type</label>
              <div class="grid grid-cols-3 gap-1">
                <label class="inline-radio"><input type="radio" name="fuel" checked /> Hybrid</label>
                <label class="inline-radio"><input type="radio" name="fuel" /> Electric</label>
                <label class="inline-radio"><input type="radio" name="fuel" /> Gasoline</label>
              </div>
            </div>

            <div class="hero-actions">
              <button type="submit" class="btn btn-primary">Update listing</button>
              <a href="my_cars.html" class="btn btn-outline">Cancel</a>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "car_images.html": {
        "body_class": "page-manage-images",
        "title": "Manage Car Images · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="card">
          <div class="flex items-center justify-between mb-medium">
            <div>
              <p class="eyebrow">Listing assets</p>
              <h1 class="car-details-page-title">Manage images for Lexus NX200t</h1>
            </div>
          </div>

          <div class="form-update-images">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Remove</th>
                    <th>Preview</th>
                    <th>Order</th>
                  </tr>
                </thead>
                <tbody>
                  ''' + '\n'.join([f'''                  <tr>
                    <td><input type="checkbox" name="delete_images[]" value="{i}" /></td>
                    <td><img src="img/cars/Lexus-RX200t-2016/{i}.jpeg" alt="Photo {i}" class="my-cars-img-thumbnail" /></td>
                    <td><input type="number" value="{i}" min="1" style="width:80px" /></td>
                  </tr>''' for i in range(1, 5)]) + '''
                </tbody>
              </table>
            </div>

            <div class="hero-actions">
              <button class="btn btn-primary">Update selection</button>
            </div>
          </div>

          <form action="" method="POST" enctype="multipart/form-data" class="form-images">
            <div class="form-group">
              <label>Upload new images</label>
              <input id="carFormImageUpload" type="file" name="images[]" multiple accept="image/*" />
            </div>
            <div id="imagePreviews" class="car-form-images grid grid-cols-4 gap-1"></div>
            <div class="hero-actions">
              <button class="btn btn-primary">Add Images</button>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "my_cars.html": {
        "body_class": "page-my-cars",
        "title": "My Cars · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="flex items-center justify-between mb-medium">
          <div>
            <p class="eyebrow">Your inventory</p>
            <h1 class="car-details-page-title">My Cars</h1>
          </div>
          <a href="add_new.html" class="btn btn-primary">Add New Car</a>
        </div>

        <div class="card table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ''' + '\n'.join([f'''              <tr>
                <td><img src="img/cars/Lexus-RX200t-2016/1.jpeg" alt="Listing" class="my-cars-img-thumbnail" /></td>
                <td>2016 · Lexus NX200t</td>
                <td>2026-01-10</td>
                <td>Published</td>
                <td>
                  <a href="edit_car.html" class="btn btn-outline">Edit</a>
                  <a href="car_images.html" class="btn btn-outline">Images</a>
                  <button class="btn btn-delete">Delete</button>
                </td>
              </tr>''' for _ in range(4)]) + '''
            </tbody>
          </table>
        </div>

        <nav class="pagination">
          <a href="#" class="pagination-item"><i class="fas fa-chevron-left"></i></a>
          <a href="#" class="pagination-item active">1</a>
          <a href="#" class="pagination-item">2</a>
          <a href="#" class="pagination-item">3</a>
          <a href="#" class="pagination-item"><i class="fas fa-chevron-right"></i></a>
        </nav>
      </section>
    </main>
'''
    },
    "watchlist.html": {
        "body_class": "page-watchlist",
        "title": "Watchlist · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="flex items-center justify-between mb-medium">
          <div>
            <p class="eyebrow">Favorites</p>
            <h1 class="car-details-page-title">My Watchlist</h1>
          </div>
        </div>

        <div class="car-items-listing">
          ''' + '\n'.join([f'''          <article class="car-item card">
            <a href="view.html"><img src="img/cars/Lexus-RX200t-2016/1.jpeg" alt="Wishlisted car" class="car-item-img" /></a>
            <div class="p-medium">
              <div class="flex items-center justify-between">
                <small class="text-muted">New Jersey</small>
                <button class="btn-heart"><i class="fas fa-heart"></i></button>
              </div>
              <h3 class="car-item-title">2016 · Lexus NX200t</h3>
              <p class="car-item-price">$25,000</p>
              <p class="m-0"><span class="car-item-badge">SUV</span><span class="car-item-badge">Hybrid</span></p>
            </div>
          </article>''' for _ in range(4)]) + '''
        </div>
      </section>
    </main>
'''
    },
    "view.html": {
        "body_class": "page-car-view",
        "title": "Lexus NX200t · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="flex items-center justify-between mb-medium">
          <div>
            <p class="eyebrow">Car details</p>
            <h1 class="car-details-page-title">2016 · Lexus NX200t</h1>
            <p class="car-details-region">New Jersey · Listed 2 days ago</p>
          </div>
        </div>

        <div class="car-details-content">
          <div class="car-images-and-description">
            <div class="car-images-carousel">
              <div class="car-image-wrapper">
                <img src="img/cars/Lexus-RX200t-2016/1.jpeg" alt="Lexus NX200t" class="car-active-image" id="activeImage" />
              </div>
              <div class="car-image-thumbnails">
                ''' + '\n'.join([f'                <img src="img/cars/Lexus-RX200t-2016/{i}.jpeg" alt="Thumbnail {i}" />' for i in range(1, 7)]) + '''
              </div>
              <button class="carousel-button prev-button" id="prevButton" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
              <button class="carousel-button next-button" id="nextButton" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
            </div>

            <div class="card car-detailed-description">
              <h2 class="car-details-title">Description</h2>
              <p>This Lexus NX200t blends style, comfort and advanced safety features. Ideal for city driving and long weekend journeys.</p>
              <p>It offers excellent fuel efficiency, premium interior materials, and modern infotainment controls. The seller has maintained the car with regular service and clean history.</p>
            </div>

            <div class="card car-detailed-description">
              <h2 class="car-details-title">Key highlights</h2>
              <ul class="car-specifications">
                <li><i class="fas fa-check-circle"></i> Air conditioning</li>
                <li><i class="fas fa-check-circle"></i> Leather interior</li>
                <li><i class="fas fa-check-circle"></i> GPS navigation</li>
                <li><i class="fas fa-check-circle"></i> Rear camera</li>
                <li><i class="fas fa-check-circle"></i> Heated seats</li>
                <li><i class="fas fa-check-circle"></i> Bluetooth</li>
              </ul>
            </div>
          </div>

          <aside class="car-details card">
            <div class="flex items-center justify-between">
              <p class="car-details-price">$25,000</p>
              <button class="btn-heart"><i class="fas fa-heart"></i></button>
            </div>
            <hr />
            <table class="car-details-table">
              <tbody>
                <tr><th>Maker</th><td>Lexus</td></tr>
                <tr><th>Model</th><td>NX200t</td></tr>
                <tr><th>Year</th><td>2016</td></tr>
                <tr><th>Type</th><td>SUV</td></tr>
                <tr><th>Fuel</th><td>Hybrid</td></tr>
                <tr><th>Mileage</th><td>78,000 mi</td></tr>
              </tbody>
            </table>
            <hr />
            <div class="flex gap-1 items-center">
              <img src="img/avatar.png" alt="Seller" class="car-details-owner-image" />
              <div>
                <h3 class="car-details-owner">John Smith</h3>
                <div class="text-muted">Seller since 2024</div>
              </div>
            </div>
            <a href="tel:+15551234567" class="car-details-phone"><i class="fas fa-phone"></i> +1 555 123 4567</a>
            <div class="hero-actions" style="margin-top:1rem;">
              <a href="watchlist.html" class="btn btn-outline">Save to watchlist</a>
              <a href="my_cars.html" class="btn btn-primary">Contact seller</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
'''
    },
    "login.html": {
        "body_class": "page-login",
        "title": "Login · CarFindal",
        "content": '''    <main>
      <section class="container-small">
        <div class="card auth-card">
          <div class="auth-primary">
            <div>
              <h1 class="auth-page-title">Welcome back</h1>
              <p class="text-muted">Enter your account credentials to access your dashboard.</p>
            </div>
            <div class="auth-page-image">
              <img src="img/car-png-39071.png" alt="Login illustration" />
            </div>
          </div>
          <form class="auth-page-form" action="" method="post">
            <div class="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <button class="btn btn-primary w-full">Login</button>
            <div class="login-text-dont-have-account">
              Don’t have an account? <a href="signup.html">Signup</a>
            </div>
            <div class="login-text-dont-have-account">
              <a href="password-reset.html">Forgot password?</a>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "signup.html": {
        "body_class": "page-signup",
        "title": "Signup · CarFindal",
        "content": '''    <main>
      <section class="container-small">
        <div class="card auth-card">
          <div class="auth-primary">
            <div>
              <h1 class="auth-page-title">Create your account</h1>
              <p class="text-muted">Join CarFindal to list cars, save favorites and manage your inventory.</p>
            </div>
            <div class="auth-page-image">
              <img src="img/car-png-39071.png" alt="Signup illustration" />
            </div>
          </div>
          <form class="auth-page-form" action="" method="post">
            <div class="grid form-auth-grid">
              <div class="form-group">
                <label>First name</label>
                <input type="text" placeholder="First name" required />
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Last name" required />
              </div>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <button class="btn btn-primary w-full">Create account</button>
            <div class="login-text-dont-have-account">
              Already have an account? <a href="login.html">Login</a>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "password-reset.html": {
        "body_class": "page-login",
        "title": "Password Reset · CarFindal",
        "content": '''    <main>
      <section class="container-small">
        <div class="card auth-card">
          <div class="auth-primary">
            <div>
              <h1 class="auth-page-title">Reset your password</h1>
              <p class="text-muted">Enter your email and we’ll send a link to reset your password.</p>
            </div>
            <div class="auth-page-image">
              <img src="img/car-png-39071.png" alt="Reset password illustration" />
            </div>
          </div>
          <form class="auth-page-form" action="" method="post">
            <div class="form-group">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <button class="btn btn-primary w-full">Send reset link</button>
            <div class="login-text-dont-have-account">
              Remembered your password? <a href="login.html">Login</a>
            </div>
          </form>
        </div>
      </section>
    </main>
'''
    },
    "verify_email.html": {
        "body_class": "page-verify-email",
        "title": "Verify Email · CarFindal",
        "content": '''    <main>
      <section class="container">
        <div class="card content-panel">
          <h1 class="car-details-page-title">Verify your email</h1>
          <p class="text-muted">We sent a verification link to your email address. Click the link to activate your account.</p>
          <div class="hero-actions" style="margin-top:1.5rem;">
            <button class="btn btn-primary">Resend email</button>
            <a href="login.html" class="btn btn-outline">Back to login</a>
          </div>
        </div>
      </section>
    </main>
'''
    },
}

for filename, page in pages.items():
    path = Path(filename)
    body = base_head.format(title=page['title'], body_class=page['body_class']) + header + page['content'] + footer + '    <script src="js/app.js"></script>\n  </body>\n</html>\n'
    path.write_text(body, encoding='utf-8')
    print(f'Wrote {filename}')
