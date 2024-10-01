CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- mobile, laptop, smartwatch, headphone/earbud
    price DECIMAL(10, 2) NOT NULL,
    brand VARCHAR(50),
    model VARCHAR(50),
    
    -- Features for mobiles
    ram VARCHAR(20), -- Example: 4GB, 8GB, etc.
    storage VARCHAR(20), -- Example: 64GB, 128GB, etc.
    battery VARCHAR(20), -- Example: 4000mAh, 5000mAh, etc.
    
    -- Features for laptops
    gpu VARCHAR(50), -- Example: Nvidia GTX 1650, etc.
    processor VARCHAR(50), -- Example: Intel i7, etc.
    screen_size VARCHAR(20), -- Example: 15.6", 17", etc.
    
    -- Features for smartwatches
    connectivity VARCHAR(50), -- Example: Bluetooth, Wi-Fi, etc.
    battery_life VARCHAR(20), -- Example: 24 hours, 48 hours, etc.
    water_resistance BOOLEAN, -- Example: TRUE or FALSE
    
    -- Features for headphones/earbuds
    sound_quality VARCHAR(50), -- Example: HD, Stereo, etc.
    wireless BOOLEAN, -- Example: TRUE or FALSE
    noise_cancellation BOOLEAN, -- Example: TRUE or FALSE

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
