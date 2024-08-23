const initialState = {
    cartItems: [
      { id: 1, name: "MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs", price: 759.99, image: "https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg",quantity:1 },
      { id: 2, name: "Victoria's Secret Lavender Vanilla Mist", price: 2099.99, image: "https://images-static.nykaa.com/media/catalog/product/f/3/f36e7a1667553848123.jpg" ,quantity:1},
      { id: 3, name: "Havells SC5065 Multifunction Skin Care Device - Pink", price: 3868.99, image: "https://images-static.nykaa.com/media/catalog/product/6/5/65a454c8901762141074__1_.jpg" ,quantity:1},
      { id: 4, name: "Love Beauty & Planet Curry Leaves- Biotin & Mandarin Orange Sulfate Free Shampoo", price: 529.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/82b17ffLOVEB00000102_1.jpg",quantity:1 },
      { id: 5, name: "Makeup Revolution Reloaded Fundamental Eyeshadow Palette", price: 594.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/5057566099462.jpg",quantity:1 },
      { id: 6, name: "Himalaya Purifying Neem Face Wash", price: 350.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg" ,quantity:1},
      { id: 7, name: "Lakme Lumi Skin Cream", price: 268.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/9/f9ea5efLAKME00000281_1.jpg",quantity:1 },
      { id: 8, name: "Cetaphil Baby Daily Lotion With Shea Butter(400ml)", price: 739.99, image: "https://images-static.nykaa.com/media/catalog/product/d/c/dc9921e9318637043316_1.jpg" ,quantity:1},
      { id: 9, name: "Nykaa Love Struck Body Lotion - First Date", price: 250.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae01cf48904245714567_1.jpg",quantity:1 },
    ],
  };
  
  // Save the cart items to localStorage
  localStorage.setItem("cart", JSON.stringify(initialState));
  