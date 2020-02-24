var allCategoriesTemp = [
  {
    "Id": 419,
    "Name": "Feedmill Supply",
    "ParentCategoryId": 0
  },
  {
    "Id": 429,
    "Name": "Feedmill Ingredients",
    "ParentCategoryId": 419
  },
  {
    "Id": 434,
    "Name": "Corn",
    "ParentCategoryId": 429
  },
  {
    "Id": 435,
    "Name": "DDGS",
    "ParentCategoryId": 429
  },
  {
    "Id": 436,
    "Name": "Protein Meal",
    "ParentCategoryId": 429
  },
  {
    "Id": 480,
    "Name": "Soybean Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 521,
    "Name": "Full Fat Soya",
    "ParentCategoryId": 480
  },
  {
    "Id": 522,
    "Name": "Soybean Cake",
    "ParentCategoryId": 480
  },
  {
    "Id": 523,
    "Name": "Soybean Crushed",
    "ParentCategoryId": 480
  },
  {
    "Id": 481,
    "Name": "Fish Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 482,
    "Name": "Corn Gluten Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 483,
    "Name": "Microbial Protein Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 484,
    "Name": "Yeast Protein Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 485,
    "Name": "Rapeseed Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 486,
    "Name": "Cottonseed Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 487,
    "Name": "Poultry Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 488,
    "Name": "Sunflower Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 489,
    "Name": "Sorghum Protein Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 490,
    "Name": "Palm Kernel Meal",
    "ParentCategoryId": 436
  },
  {
    "Id": 491,
    "Name": "Lupins",
    "ParentCategoryId": 436
  },
  {
    "Id": 492,
    "Name": "Others",
    "ParentCategoryId": 436
  },
  {
    "Id": 437,
    "Name": "Fiber",
    "ParentCategoryId": 429
  },
  {
    "Id": 493,
    "Name": "Rice Polish",
    "ParentCategoryId": 437
  },
  {
    "Id": 494,
    "Name": "DORB",
    "ParentCategoryId": 437
  },
  {
    "Id": 495,
    "Name": "Others",
    "ParentCategoryId": 437
  },
  {
    "Id": 438,
    "Name": "Limestone",
    "ParentCategoryId": 429
  },
  {
    "Id": 439,
    "Name": "Salt",
    "ParentCategoryId": 429
  },
  {
    "Id": 440,
    "Name": "Vegetable Oil",
    "ParentCategoryId": 429
  },
  {
    "Id": 441,
    "Name": "Fish Oil",
    "ParentCategoryId": 429
  },
  {
    "Id": 430,
    "Name": "Feedmill Feed Additives",
    "ParentCategoryId": 419
  },
  {
    "Id": 442,
    "Name": "Amino Acids",
    "ParentCategoryId": 430
  },
  {
    "Id": 496,
    "Name": "DL-Methionine",
    "ParentCategoryId": 442
  },
  {
    "Id": 497,
    "Name": "L-Lysine",
    "ParentCategoryId": 442
  },
  {
    "Id": 498,
    "Name": "L-Threonine",
    "ParentCategoryId": 442
  },
  {
    "Id": 499,
    "Name": "L-Tryptophan",
    "ParentCategoryId": 442
  },
  {
    "Id": 500,
    "Name": "Valine",
    "ParentCategoryId": 442
  },
  {
    "Id": 443,
    "Name": "Toxin Binder/Mould Inhibitor",
    "ParentCategoryId": 430
  },
  {
    "Id": 444,
    "Name": "Enzymes",
    "ParentCategoryId": 430
  },
  {
    "Id": 445,
    "Name": "Coccidiostats",
    "ParentCategoryId": 430
  },
  {
    "Id": 446,
    "Name": "Calcium & Phosphate Supplements",
    "ParentCategoryId": 430
  },
  {
    "Id": 501,
    "Name": "Di Calcium Posphate",
    "ParentCategoryId": 446
  },
  {
    "Id": 502,
    "Name": "Mono Calcium Phosphate",
    "ParentCategoryId": 446
  },
  {
    "Id": 447,
    "Name": "Sodium Bi-Carbonate (Soda)",
    "ParentCategoryId": 430
  },
  {
    "Id": 448,
    "Name": "Emulsifiers",
    "ParentCategoryId": 430
  },
  {
    "Id": 449,
    "Name": "Probiotics & Prebiotics",
    "ParentCategoryId": 430
  },
  {
    "Id": 450,
    "Name": "Pellet Binder",
    "ParentCategoryId": 430
  },
  {
    "Id": 451,
    "Name": "Growth Promoter (Organic)",
    "ParentCategoryId": 430
  },
  {
    "Id": 452,
    "Name": "Vitamins & Mineral Premix",
    "ParentCategoryId": 430
  },
  {
    "Id": 453,
    "Name": "Choline Chloride",
    "ParentCategoryId": 430
  },
  {
    "Id": 454,
    "Name": "Antioxidant",
    "ParentCategoryId": 430
  },
  {
    "Id": 431,
    "Name": "Feedmill Machinery",
    "ParentCategoryId": 419
  },
  {
    "Id": 455,
    "Name": "Fish Feed Processing Plant",
    "ParentCategoryId": 431
  },
  {
    "Id": 456,
    "Name": "Poultry Feed Processing Plant",
    "ParentCategoryId": 431
  },
  {
    "Id": 457,
    "Name": "Cattle Feed Processing Plant",
    "ParentCategoryId": 431
  },
  {
    "Id": 458,
    "Name": "Mini Feed Processing Plant",
    "ParentCategoryId": 431
  },
  {
    "Id": 432,
    "Name": "Feedmill Machinery Spare parts",
    "ParentCategoryId": 419
  },
  {
    "Id": 459,
    "Name": "Handling of feed ingredients",
    "ParentCategoryId": 432
  },
  {
    "Id": 460,
    "Name": "Bulk feed ingredients storage",
    "ParentCategoryId": 432
  },
  {
    "Id": 461,
    "Name": "Feed Ingredients: Bagged or Bulk Purchases",
    "ParentCategoryId": 432
  },
  {
    "Id": 462,
    "Name": "Hammer Mill Perforated Screens",
    "ParentCategoryId": 432
  },
  {
    "Id": 503,
    "Name": "Hammer Mill Hammers - Beaters",
    "ParentCategoryId": 462
  },
  {
    "Id": 504,
    "Name": "Hammer mills: hammer mills",
    "ParentCategoryId": 462
  },
  {
    "Id": 505,
    "Name": "Hammer Mill Rods",
    "ParentCategoryId": 462
  },
  {
    "Id": 463,
    "Name": "Pellet Feed Parts",
    "ParentCategoryId": 432
  },
  {
    "Id": 506,
    "Name": "Pellet Presses",
    "ParentCategoryId": 463
  },
  {
    "Id": 507,
    "Name": "Pellet Feed Coolers",
    "ParentCategoryId": 463
  },
  {
    "Id": 508,
    "Name": "Pellet mills",
    "ParentCategoryId": 463
  },
  {
    "Id": 509,
    "Name": "Pellet Feed Crumblers",
    "ParentCategoryId": 463
  },
  {
    "Id": 510,
    "Name": "Pellet dies",
    "ParentCategoryId": 463
  },
  {
    "Id": 511,
    "Name": "Pellet dies: Relief of a pellet die",
    "ParentCategoryId": 463
  },
  {
    "Id": 512,
    "Name": "Pellet dies: Materials",
    "ParentCategoryId": 463
  },
  {
    "Id": 513,
    "Name": "Pellet Feed Dryers",
    "ParentCategoryId": 463
  },
  {
    "Id": 514,
    "Name": "Pellet dies: The life of a Pellet Die",
    "ParentCategoryId": 463
  },
  {
    "Id": 515,
    "Name": "Pellet Rolls & Shells",
    "ParentCategoryId": 463
  },
  {
    "Id": 516,
    "Name": "Tapered Pellet Die Relief",
    "ParentCategoryId": 463
  },
  {
    "Id": 517,
    "Name": "Tapered Pellet Dies: Compression ratio",
    "ParentCategoryId": 463
  },
  {
    "Id": 518,
    "Name": "Standard Pellet Relief",
    "ParentCategoryId": 463
  },
  {
    "Id": 519,
    "Name": "Variable Pellet Relief (VR)",
    "ParentCategoryId": 463
  },
  {
    "Id": 520,
    "Name": "Tapered Pellet Dies: Countersink",
    "ParentCategoryId": 463
  },
  {
    "Id": 464,
    "Name": "Anti-bridging devices",
    "ParentCategoryId": 432
  },
  {
    "Id": 465,
    "Name": "Bagging and Packaging Equipment",
    "ParentCategoryId": 432
  },
  {
    "Id": 466,
    "Name": "Roller mill",
    "ParentCategoryId": 432
  },
  {
    "Id": 467,
    "Name": "Feed Conveying Equipment",
    "ParentCategoryId": 432
  },
  {
    "Id": 468,
    "Name": "Particle Size Reduction",
    "ParentCategoryId": 432
  },
  {
    "Id": 469,
    "Name": "Feed screeners, sieves and separators",
    "ParentCategoryId": 432
  },
  {
    "Id": 470,
    "Name": "Oil Coating Machinery",
    "ParentCategoryId": 432
  },
  {
    "Id": 471,
    "Name": "Computerized Feed Dosing and Batching Systems",
    "ParentCategoryId": 432
  },
  {
    "Id": 472,
    "Name": "Cookers - Post Conditioners",
    "ParentCategoryId": 432
  },
  {
    "Id": 473,
    "Name": "test article",
    "ParentCategoryId": 432
  },
  {
    "Id": 474,
    "Name": "Freezers - Feed Machinery & Equipment",
    "ParentCategoryId": 432
  },
  {
    "Id": 475,
    "Name": "Scales, Weighing, Batching equipment",
    "ParentCategoryId": 432
  },
  {
    "Id": 476,
    "Name": "Steam Boilers",
    "ParentCategoryId": 432
  },
  {
    "Id": 477,
    "Name": "Extruders for Feed Production",
    "ParentCategoryId": 432
  },
  {
    "Id": 478,
    "Name": "Feed Mixer",
    "ParentCategoryId": 432
  },
  {
    "Id": 479,
    "Name": "Steam Feed Conditioners",
    "ParentCategoryId": 432
  },
  {
    "Id": 433,
    "Name": "Feedmill Lab Equipment",
    "ParentCategoryId": 419
  },
  {
    "Id": 420,
    "Name": "Cattle",
    "ParentCategoryId": 0
  },
  {
    "Id": 524,
    "Name": "Cattle Ready Feed",
    "ParentCategoryId": 420
  },
  {
    "Id": 532,
    "Name": "Fattening feed",
    "ParentCategoryId": 524
  },
  {
    "Id": 533,
    "Name": "Dairy Feed",
    "ParentCategoryId": 524
  },
  {
    "Id": 534,
    "Name": "TMR",
    "ParentCategoryId": 524
  },
  {
    "Id": 535,
    "Name": "Silage",
    "ParentCategoryId": 524
  },
  {
    "Id": 525,
    "Name": "Cattle Feed Ingredients",
    "ParentCategoryId": 420
  },
  {
    "Id": 536,
    "Name": "Corn",
    "ParentCategoryId": 525
  },
  {
    "Id": 537,
    "Name": "Fiber",
    "ParentCategoryId": 525
  },
  {
    "Id": 610,
    "Name": "Grass & Hay",
    "ParentCategoryId": 537
  },
  {
    "Id": 611,
    "Name": "Napier",
    "ParentCategoryId": 537
  },
  {
    "Id": 612,
    "Name": "Alfalfa",
    "ParentCategoryId": 537
  },
  {
    "Id": 613,
    "Name": "Rice Bran",
    "ParentCategoryId": 537
  },
  {
    "Id": 614,
    "Name": "Wheat brans/ Germ/Husk",
    "ParentCategoryId": 537
  },
  {
    "Id": 615,
    "Name": "Barley bran/Germ/Husk",
    "ParentCategoryId": 537
  },
  {
    "Id": 616,
    "Name": "Oat bran/Germ/Husk",
    "ParentCategoryId": 537
  },
  {
    "Id": 617,
    "Name": "Pulse Husk",
    "ParentCategoryId": 537
  },
  {
    "Id": 618,
    "Name": "Corn Husk",
    "ParentCategoryId": 537
  },
  {
    "Id": 619,
    "Name": "DDGS",
    "ParentCategoryId": 537
  },
  {
    "Id": 620,
    "Name": "Broken Rice",
    "ParentCategoryId": 537
  },
  {
    "Id": 538,
    "Name": "Calcium Supplement",
    "ParentCategoryId": 525
  },
  {
    "Id": 621,
    "Name": "Limestone",
    "ParentCategoryId": 538
  },
  {
    "Id": 622,
    "Name": "DCP",
    "ParentCategoryId": 538
  },
  {
    "Id": 539,
    "Name": "Protein",
    "ParentCategoryId": 525
  },
  {
    "Id": 623,
    "Name": "Corn Gluten Meal",
    "ParentCategoryId": 539
  },
  {
    "Id": 624,
    "Name": "Soybean Meal",
    "ParentCategoryId": 539
  },
  {
    "Id": 644,
    "Name": "Full Fat Soya",
    "ParentCategoryId": 624
  },
  {
    "Id": 645,
    "Name": "Soybean Cake",
    "ParentCategoryId": 624
  },
  {
    "Id": 646,
    "Name": "Soybean Crushed",
    "ParentCategoryId": 624
  },
  {
    "Id": 625,
    "Name": "Palm Kernel",
    "ParentCategoryId": 539
  },
  {
    "Id": 626,
    "Name": "Sunflower meal",
    "ParentCategoryId": 539
  },
  {
    "Id": 627,
    "Name": "Cottonseed Meal",
    "ParentCategoryId": 539
  },
  {
    "Id": 628,
    "Name": "Rapeseed Meal",
    "ParentCategoryId": 539
  },
  {
    "Id": 629,
    "Name": "Others",
    "ParentCategoryId": 539
  },
  {
    "Id": 540,
    "Name": "Fats & Oil",
    "ParentCategoryId": 525
  },
  {
    "Id": 630,
    "Name": "Rumen Bypass Fat",
    "ParentCategoryId": 540
  },
  {
    "Id": 631,
    "Name": "Rumen Protected Fat",
    "ParentCategoryId": 540
  },
  {
    "Id": 632,
    "Name": "Vegetable Oil",
    "ParentCategoryId": 540
  },
  {
    "Id": 633,
    "Name": "Fish Oil",
    "ParentCategoryId": 540
  },
  {
    "Id": 541,
    "Name": "Salt",
    "ParentCategoryId": 525
  },
  {
    "Id": 542,
    "Name": "Mollasses",
    "ParentCategoryId": 525
  },
  {
    "Id": 543,
    "Name": "Vitamins & Mineral Premixes",
    "ParentCategoryId": 525
  },
  {
    "Id": 526,
    "Name": "Cattle Medication",
    "ParentCategoryId": 420
  },
  {
    "Id": 544,
    "Name": "Anthelmintics",
    "ParentCategoryId": 526
  },
  {
    "Id": 545,
    "Name": "NSAID & Pain killer",
    "ParentCategoryId": 526
  },
  {
    "Id": 546,
    "Name": "Antibiotics",
    "ParentCategoryId": 526
  },
  {
    "Id": 547,
    "Name": "Antihistaminics",
    "ParentCategoryId": 526
  },
  {
    "Id": 548,
    "Name": "Dermatological Product",
    "ParentCategoryId": 526
  },
  {
    "Id": 634,
    "Name": "Eye Care",
    "ParentCategoryId": 548
  },
  {
    "Id": 635,
    "Name": "Skin Care",
    "ParentCategoryId": 548
  },
  {
    "Id": 636,
    "Name": "Hoof Care",
    "ParentCategoryId": 548
  },
  {
    "Id": 637,
    "Name": "Wound Care",
    "ParentCategoryId": 548
  },
  {
    "Id": 638,
    "Name": "Spray",
    "ParentCategoryId": 548
  },
  {
    "Id": 639,
    "Name": "Others",
    "ParentCategoryId": 548
  },
  {
    "Id": 549,
    "Name": "Immune Enhancers",
    "ParentCategoryId": 526
  },
  {
    "Id": 527,
    "Name": "Cattle Nutrition",
    "ParentCategoryId": 420
  },
  {
    "Id": 550,
    "Name": "Calcium Supplement",
    "ParentCategoryId": 527
  },
  {
    "Id": 551,
    "Name": "Digestive Stimulants",
    "ParentCategoryId": 527
  },
  {
    "Id": 552,
    "Name": "Appetizer",
    "ParentCategoryId": 527
  },
  {
    "Id": 553,
    "Name": "General Premix",
    "ParentCategoryId": 527
  },
  {
    "Id": 554,
    "Name": "Growth Promoter (Organic)",
    "ParentCategoryId": 527
  },
  {
    "Id": 555,
    "Name": "Antibiotic Replacement Feed Additives",
    "ParentCategoryId": 527
  },
  {
    "Id": 640,
    "Name": "Probiotics",
    "ParentCategoryId": 555
  },
  {
    "Id": 641,
    "Name": "Prebiotics",
    "ParentCategoryId": 555
  },
  {
    "Id": 642,
    "Name": "Phytobiotics",
    "ParentCategoryId": 555
  },
  {
    "Id": 643,
    "Name": "Blends & others",
    "ParentCategoryId": 555
  },
  {
    "Id": 556,
    "Name": "Colostrum & Milk Replacer",
    "ParentCategoryId": 527
  },
  {
    "Id": 557,
    "Name": "Vitamins & Minerals",
    "ParentCategoryId": 527
  },
  {
    "Id": 558,
    "Name": "Toxin Nutrilizer",
    "ParentCategoryId": 527
  },
  {
    "Id": 559,
    "Name": "Milk Booster",
    "ParentCategoryId": 527
  },
  {
    "Id": 560,
    "Name": "Energy & Electrolyte",
    "ParentCategoryId": 527
  },
  {
    "Id": 528,
    "Name": "Cattle Hygiene & Grooming",
    "ParentCategoryId": 420
  },
  {
    "Id": 561,
    "Name": "Disinfectant",
    "ParentCategoryId": 528
  },
  {
    "Id": 562,
    "Name": "Sanitizer",
    "ParentCategoryId": 528
  },
  {
    "Id": 563,
    "Name": "Water Purifier",
    "ParentCategoryId": 528
  },
  {
    "Id": 564,
    "Name": "Lice, Mites, Flies & Mosquito repellent",
    "ParentCategoryId": 528
  },
  {
    "Id": 565,
    "Name": "Castration & Dehorning",
    "ParentCategoryId": 528
  },
  {
    "Id": 566,
    "Name": "Brushes & Combs",
    "ParentCategoryId": 528
  },
  {
    "Id": 567,
    "Name": "Shampoo & Styling",
    "ParentCategoryId": 528
  },
  {
    "Id": 568,
    "Name": "Gloves & Protection",
    "ParentCategoryId": 528
  },
  {
    "Id": 569,
    "Name": "Protective Gear",
    "ParentCategoryId": 528
  },
  {
    "Id": 570,
    "Name": "Boots",
    "ParentCategoryId": 528
  },
  {
    "Id": 571,
    "Name": "Vests",
    "ParentCategoryId": 528
  },
  {
    "Id": 529,
    "Name": "Dairy Reproductive & Genetics",
    "ParentCategoryId": 420
  },
  {
    "Id": 572,
    "Name": "Semen",
    "ParentCategoryId": 529
  },
  {
    "Id": 573,
    "Name": "Dairy Hormonal",
    "ParentCategoryId": 529
  },
  {
    "Id": 574,
    "Name": "Teat & Udder Treatments",
    "ParentCategoryId": 529
  },
  {
    "Id": 575,
    "Name": "Heat Detection & Breeding",
    "ParentCategoryId": 529
  },
  {
    "Id": 576,
    "Name": "Artificial Insemination Equipment",
    "ParentCategoryId": 529
  },
  {
    "Id": 530,
    "Name": "Cattle Vaccine",
    "ParentCategoryId": 420
  },
  {
    "Id": 577,
    "Name": "FMD",
    "ParentCategoryId": 530
  },
  {
    "Id": 578,
    "Name": "Mastitis",
    "ParentCategoryId": 530
  },
  {
    "Id": 579,
    "Name": "Rabies",
    "ParentCategoryId": 530
  },
  {
    "Id": 580,
    "Name": "Black Quarter",
    "ParentCategoryId": 530
  },
  {
    "Id": 581,
    "Name": "Hemorrhagic Septicemia",
    "ParentCategoryId": 530
  },
  {
    "Id": 582,
    "Name": "Anthrax",
    "ParentCategoryId": 530
  },
  {
    "Id": 583,
    "Name": "Goat Pox Vaccine",
    "ParentCategoryId": 530
  },
  {
    "Id": 584,
    "Name": "PPR (Peste Des Petits Ruminants)",
    "ParentCategoryId": 530
  },
  {
    "Id": 585,
    "Name": "LSD (Lumpy Skin Disease)",
    "ParentCategoryId": 530
  },
  {
    "Id": 531,
    "Name": "Equipments, Tools & Medical Supplies",
    "ParentCategoryId": 420
  },
  {
    "Id": 586,
    "Name": "Tags & Trackers",
    "ParentCategoryId": 531
  },
  {
    "Id": 587,
    "Name": "Wire Fence Equipment",
    "ParentCategoryId": 531
  },
  {
    "Id": 588,
    "Name": "Electrical Fencing",
    "ParentCategoryId": 531
  },
  {
    "Id": 589,
    "Name": "Buckets, Feeders & Waterers",
    "ParentCategoryId": 531
  },
  {
    "Id": 590,
    "Name": "Test Kits",
    "ParentCategoryId": 531
  },
  {
    "Id": 591,
    "Name": "Milking Machines/Cans",
    "ParentCategoryId": 531
  },
  {
    "Id": 592,
    "Name": "Scales/Weighing Machines",
    "ParentCategoryId": 531
  },
  {
    "Id": 593,
    "Name": "Dehorning & Castrating Tools",
    "ParentCategoryId": 531
  },
  {
    "Id": 594,
    "Name": "Cages & Ropes",
    "ParentCategoryId": 531
  },
  {
    "Id": 595,
    "Name": "Stands & Stanchions",
    "ParentCategoryId": 531
  },
  {
    "Id": 596,
    "Name": "Spray Equipments",
    "ParentCategoryId": 531
  },
  {
    "Id": 597,
    "Name": "Grain and Hay Testing",
    "ParentCategoryId": 531
  },
  {
    "Id": 598,
    "Name": "Applicator Guns",
    "ParentCategoryId": 531
  },
  {
    "Id": 599,
    "Name": "CCTV",
    "ParentCategoryId": 531
  },
  {
    "Id": 600,
    "Name": "Syringes & Needles",
    "ParentCategoryId": 531
  },
  {
    "Id": 601,
    "Name": "Fitting Stands & Equipment",
    "ParentCategoryId": 531
  },
  {
    "Id": 602,
    "Name": "Spades",
    "ParentCategoryId": 531
  },
  {
    "Id": 603,
    "Name": "Trolleys",
    "ParentCategoryId": 531
  },
  {
    "Id": 604,
    "Name": "Gate Latches & Gate Openers",
    "ParentCategoryId": 531
  },
  {
    "Id": 605,
    "Name": "Needles & Syringes",
    "ParentCategoryId": 531
  },
  {
    "Id": 606,
    "Name": "Shed Infrastructure development",
    "ParentCategoryId": 531
  },
  {
    "Id": 607,
    "Name": "Milk Chiller",
    "ParentCategoryId": 531
  },
  {
    "Id": 608,
    "Name": "Pausterizer Machine",
    "ParentCategoryId": 531
  },
  {
    "Id": 609,
    "Name": "Feed Mixer",
    "ParentCategoryId": 531
  },
  {
    "Id": 421,
    "Name": "Poultry",
    "ParentCategoryId": 0
  },
  {
    "Id": 648,
    "Name": "Poultry Feed",
    "ParentCategoryId": 421
  },
  {
    "Id": 656,
    "Name": "Broiler",
    "ParentCategoryId": 648
  },
  {
    "Id": 657,
    "Name": "Layer",
    "ParentCategoryId": 648
  },
  {
    "Id": 658,
    "Name": "Sonali",
    "ParentCategoryId": 648
  },
  {
    "Id": 659,
    "Name": "Others",
    "ParentCategoryId": 648
  },
  {
    "Id": 649,
    "Name": "Poultry Day old chicks",
    "ParentCategoryId": 421
  },
  {
    "Id": 660,
    "Name": "Broiler",
    "ParentCategoryId": 649
  },
  {
    "Id": 661,
    "Name": "Pullets or Layer",
    "ParentCategoryId": 649
  },
  {
    "Id": 662,
    "Name": "Sonali",
    "ParentCategoryId": 649
  },
  {
    "Id": 663,
    "Name": "Others",
    "ParentCategoryId": 649
  },
  {
    "Id": 650,
    "Name": "Poultry Parent Stock",
    "ParentCategoryId": 421
  },
  {
    "Id": 664,
    "Name": "White Layer Breeder",
    "ParentCategoryId": 650
  },
  {
    "Id": 665,
    "Name": "Brown Layer Breeder",
    "ParentCategoryId": 650
  },
  {
    "Id": 666,
    "Name": "cobb 500",
    "ParentCategoryId": 650
  },
  {
    "Id": 667,
    "Name": "Lohmann",
    "ParentCategoryId": 650
  },
  {
    "Id": 651,
    "Name": "Poultry Equipment & Tools",
    "ParentCategoryId": 421
  },
  {
    "Id": 668,
    "Name": "Chicken Cages",
    "ParentCategoryId": 651
  },
  {
    "Id": 669,
    "Name": "Incubators",
    "ParentCategoryId": 651
  },
  {
    "Id": 670,
    "Name": "Feeders & Drinkers",
    "ParentCategoryId": 651
  },
  {
    "Id": 671,
    "Name": "Chicken Egg Crates",
    "ParentCategoryId": 651
  },
  {
    "Id": 672,
    "Name": "Defeathering & Debeaking Machines",
    "ParentCategoryId": 651
  },
  {
    "Id": 673,
    "Name": "Weighing Scales",
    "ParentCategoryId": 651
  },
  {
    "Id": 674,
    "Name": "Syringes",
    "ParentCategoryId": 651
  },
  {
    "Id": 675,
    "Name": "Needles",
    "ParentCategoryId": 651
  },
  {
    "Id": 676,
    "Name": "Spades",
    "ParentCategoryId": 651
  },
  {
    "Id": 677,
    "Name": "Poultry Processing machines",
    "ParentCategoryId": 651
  },
  {
    "Id": 678,
    "Name": "Brooders",
    "ParentCategoryId": 651
  },
  {
    "Id": 679,
    "Name": "Heater (Coop)",
    "ParentCategoryId": 651
  },
  {
    "Id": 680,
    "Name": "Shed Infrastructure development",
    "ParentCategoryId": 651
  },
  {
    "Id": 652,
    "Name": "Poultry Medication",
    "ParentCategoryId": 421
  },
  {
    "Id": 681,
    "Name": "Anthelmintics",
    "ParentCategoryId": 652
  },
  {
    "Id": 682,
    "Name": "Antibotics",
    "ParentCategoryId": 652
  },
  {
    "Id": 683,
    "Name": "Dermatological products",
    "ParentCategoryId": 652
  },
  {
    "Id": 730,
    "Name": "Poultry Wound Care",
    "ParentCategoryId": 683
  },
  {
    "Id": 731,
    "Name": "Poultry Health Care",
    "ParentCategoryId": 683
  },
  {
    "Id": 684,
    "Name": "Disinfectants",
    "ParentCategoryId": 652
  },
  {
    "Id": 685,
    "Name": "Anticoccidial",
    "ParentCategoryId": 652
  },
  {
    "Id": 653,
    "Name": "Poultry Nutrition",
    "ParentCategoryId": 421
  },
  {
    "Id": 686,
    "Name": "General Premixes",
    "ParentCategoryId": 653
  },
  {
    "Id": 732,
    "Name": "Broiler",
    "ParentCategoryId": 686
  },
  {
    "Id": 733,
    "Name": "Layer",
    "ParentCategoryId": 686
  },
  {
    "Id": 734,
    "Name": "Sonali",
    "ParentCategoryId": 686
  },
  {
    "Id": 687,
    "Name": "Toxin Nutrilizer",
    "ParentCategoryId": 653
  },
  {
    "Id": 688,
    "Name": "Growth Promoter (Organic)",
    "ParentCategoryId": 653
  },
  {
    "Id": 689,
    "Name": "Livertonic",
    "ParentCategoryId": 653
  },
  {
    "Id": 690,
    "Name": "Probiotics & Prebiotics",
    "ParentCategoryId": 653
  },
  {
    "Id": 691,
    "Name": "Electrolyte/Antistress",
    "ParentCategoryId": 653
  },
  {
    "Id": 692,
    "Name": "Immune Stimulator",
    "ParentCategoryId": 653
  },
  {
    "Id": 693,
    "Name": "Respiratory Stimulant",
    "ParentCategoryId": 653
  },
  {
    "Id": 694,
    "Name": "Digestive Stimulant",
    "ParentCategoryId": 653
  },
  {
    "Id": 695,
    "Name": "Fever & Stroke Prevention",
    "ParentCategoryId": 653
  },
  {
    "Id": 696,
    "Name": "Kidney Protector",
    "ParentCategoryId": 653
  },
  {
    "Id": 697,
    "Name": "Gut Coordinator",
    "ParentCategoryId": 653
  },
  {
    "Id": 698,
    "Name": "Egg Shell Hardness",
    "ParentCategoryId": 653
  },
  {
    "Id": 699,
    "Name": "Superbiotic",
    "ParentCategoryId": 653
  },
  {
    "Id": 700,
    "Name": "Enzyme",
    "ParentCategoryId": 653
  },
  {
    "Id": 701,
    "Name": "Appetizer Solution",
    "ParentCategoryId": 653
  },
  {
    "Id": 702,
    "Name": "Vitamins & Minerals",
    "ParentCategoryId": 653
  },
  {
    "Id": 703,
    "Name": "Poultry Supplements",
    "ParentCategoryId": 653
  },
  {
    "Id": 654,
    "Name": "Poultry Hygiene & Biosecurity",
    "ParentCategoryId": 421
  },
  {
    "Id": 704,
    "Name": "Ammonia Gas reducer",
    "ParentCategoryId": 654
  },
  {
    "Id": 705,
    "Name": "Disinfectant",
    "ParentCategoryId": 654
  },
  {
    "Id": 706,
    "Name": "Sanitizer",
    "ParentCategoryId": 654
  },
  {
    "Id": 707,
    "Name": "Water Purifier",
    "ParentCategoryId": 654
  },
  {
    "Id": 708,
    "Name": "Lice, Mites, Flies & Mosquito repellent",
    "ParentCategoryId": 654
  },
  {
    "Id": 709,
    "Name": "Bacterial Soap",
    "ParentCategoryId": 654
  },
  {
    "Id": 710,
    "Name": "Litter Management",
    "ParentCategoryId": 654
  },
  {
    "Id": 711,
    "Name": "Cleanliness",
    "ParentCategoryId": 654
  },
  {
    "Id": 735,
    "Name": "Water Drinkers",
    "ParentCategoryId": 711
  },
  {
    "Id": 736,
    "Name": "Distribution Piping",
    "ParentCategoryId": 711
  },
  {
    "Id": 737,
    "Name": "Water Tanks",
    "ParentCategoryId": 711
  },
  {
    "Id": 712,
    "Name": "Fumigation",
    "ParentCategoryId": 654
  },
  {
    "Id": 713,
    "Name": "Disposable Workwear",
    "ParentCategoryId": 654
  },
  {
    "Id": 655,
    "Name": "Poultry Vaccine",
    "ParentCategoryId": 421
  },
  {
    "Id": 714,
    "Name": "New Castle Disease",
    "ParentCategoryId": 655
  },
  {
    "Id": 715,
    "Name": "Bursal Disease",
    "ParentCategoryId": 655
  },
  {
    "Id": 716,
    "Name": "Fowlpox",
    "ParentCategoryId": 655
  },
  {
    "Id": 717,
    "Name": "Fowl Cholera",
    "ParentCategoryId": 655
  },
  {
    "Id": 718,
    "Name": "Egg Drop Syndrome",
    "ParentCategoryId": 655
  },
  {
    "Id": 719,
    "Name": "Marek's",
    "ParentCategoryId": 655
  },
  {
    "Id": 720,
    "Name": "Bronchitis",
    "ParentCategoryId": 655
  },
  {
    "Id": 721,
    "Name": "Avian Encephalomyelitis",
    "ParentCategoryId": 655
  },
  {
    "Id": 722,
    "Name": "Coryza",
    "ParentCategoryId": 655
  },
  {
    "Id": 723,
    "Name": "Typhoid",
    "ParentCategoryId": 655
  },
  {
    "Id": 724,
    "Name": "Duck Plague",
    "ParentCategoryId": 655
  },
  {
    "Id": 725,
    "Name": "Salmonella",
    "ParentCategoryId": 655
  },
  {
    "Id": 726,
    "Name": "Mycoplasma",
    "ParentCategoryId": 655
  },
  {
    "Id": 727,
    "Name": "Rhanikhet",
    "ParentCategoryId": 655
  },
  {
    "Id": 728,
    "Name": "Pigeon Pox",
    "ParentCategoryId": 655
  },
  {
    "Id": 729,
    "Name": "Gamburo",
    "ParentCategoryId": 655
  },
  {
    "Id": 422,
    "Name": "Aqua",
    "ParentCategoryId": 0
  },
  {
    "Id": 738,
    "Name": "Fish Ready Feed",
    "ParentCategoryId": 422
  },
  {
    "Id": 744,
    "Name": "Tilapia",
    "ParentCategoryId": 738
  },
  {
    "Id": 745,
    "Name": "Pangus",
    "ParentCategoryId": 738
  },
  {
    "Id": 746,
    "Name": "Koi/Shing/Magur",
    "ParentCategoryId": 738
  },
  {
    "Id": 747,
    "Name": "Carp",
    "ParentCategoryId": 738
  },
  {
    "Id": 748,
    "Name": "Hatchery",
    "ParentCategoryId": 738
  },
  {
    "Id": 749,
    "Name": "Fish Nursery 1, 2",
    "ParentCategoryId": 738
  },
  {
    "Id": 750,
    "Name": "Shrimp",
    "ParentCategoryId": 738
  },
  {
    "Id": 739,
    "Name": "Fish Hatchery",
    "ParentCategoryId": 422
  },
  {
    "Id": 751,
    "Name": "Tilapia eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 752,
    "Name": "Pangus eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 753,
    "Name": "Koi / Shing / Magur eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 754,
    "Name": "Carp fish eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 755,
    "Name": "Cat fish eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 756,
    "Name": "Shrimp eggs / fingerlings / juveniles / broodstock",
    "ParentCategoryId": 739
  },
  {
    "Id": 740,
    "Name": "Pond Management",
    "ParentCategoryId": 422
  },
  {
    "Id": 757,
    "Name": "Water Management",
    "ParentCategoryId": 740
  },
  {
    "Id": 758,
    "Name": "Biosecurity",
    "ParentCategoryId": 740
  },
  {
    "Id": 759,
    "Name": "Soil Treatment",
    "ParentCategoryId": 740
  },
  {
    "Id": 760,
    "Name": "Water Treatment",
    "ParentCategoryId": 740
  },
  {
    "Id": 761,
    "Name": "Hygiene",
    "ParentCategoryId": 740
  },
  {
    "Id": 741,
    "Name": "Aqua Nutrition",
    "ParentCategoryId": 422
  },
  {
    "Id": 762,
    "Name": "General Premix",
    "ParentCategoryId": 741
  },
  {
    "Id": 763,
    "Name": "Growth Promoter",
    "ParentCategoryId": 741
  },
  {
    "Id": 764,
    "Name": "Energy & Electrolyte",
    "ParentCategoryId": 741
  },
  {
    "Id": 765,
    "Name": "Digestive Stimulants",
    "ParentCategoryId": 741
  },
  {
    "Id": 766,
    "Name": "Probiotics/Prebiotics",
    "ParentCategoryId": 741
  },
  {
    "Id": 809,
    "Name": "Feed Probiotics",
    "ParentCategoryId": 766
  },
  {
    "Id": 810,
    "Name": "Water Probiotics",
    "ParentCategoryId": 766
  },
  {
    "Id": 811,
    "Name": "Soil Probiotics",
    "ParentCategoryId": 766
  },
  {
    "Id": 767,
    "Name": "Toxin Nutrilizer",
    "ParentCategoryId": 741
  },
  {
    "Id": 768,
    "Name": "Vitamins & Minerals",
    "ParentCategoryId": 741
  },
  {
    "Id": 769,
    "Name": "Supplements",
    "ParentCategoryId": 741
  },
  {
    "Id": 770,
    "Name": "Oxygen",
    "ParentCategoryId": 741
  },
  {
    "Id": 771,
    "Name": "Zeolite",
    "ParentCategoryId": 741
  },
  {
    "Id": 772,
    "Name": "BKC",
    "ParentCategoryId": 741
  },
  {
    "Id": 773,
    "Name": "Hormone",
    "ParentCategoryId": 741
  },
  {
    "Id": 742,
    "Name": "Equipments & Tools",
    "ParentCategoryId": 422
  },
  {
    "Id": 774,
    "Name": "DO Test Kit",
    "ParentCategoryId": 742
  },
  {
    "Id": 775,
    "Name": "pH Test Kit",
    "ParentCategoryId": 742
  },
  {
    "Id": 776,
    "Name": "Ammonia Test Kit",
    "ParentCategoryId": 742
  },
  {
    "Id": 777,
    "Name": "Aeration & Diffuser Devices",
    "ParentCategoryId": 742
  },
  {
    "Id": 778,
    "Name": "Seine Reels",
    "ParentCategoryId": 742
  },
  {
    "Id": 779,
    "Name": "Handling & Grading Equipment",
    "ParentCategoryId": 742
  },
  {
    "Id": 780,
    "Name": "Pumps & Elevators",
    "ParentCategoryId": 742
  },
  {
    "Id": 781,
    "Name": "Storage Tank & Filters",
    "ParentCategoryId": 742
  },
  {
    "Id": 782,
    "Name": "Fish Graders",
    "ParentCategoryId": 742
  },
  {
    "Id": 783,
    "Name": "Ozonator",
    "ParentCategoryId": 742
  },
  {
    "Id": 784,
    "Name": "Submersible Cages & Nets",
    "ParentCategoryId": 742
  },
  {
    "Id": 785,
    "Name": "Feeders",
    "ParentCategoryId": 742
  },
  {
    "Id": 786,
    "Name": "Water Quality Monitoring & Treatment Devices",
    "ParentCategoryId": 742
  },
  {
    "Id": 743,
    "Name": "Aqua Vaccine",
    "ParentCategoryId": 422
  },
  {
    "Id": 787,
    "Name": "Enteric Redmouth (ERM) vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 788,
    "Name": "Vibrio anguillarum vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 789,
    "Name": "Furunculosis vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 790,
    "Name": "Vibrio salmonicida vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 791,
    "Name": "Combined Vibriosis/Furunculosis vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 792,
    "Name": "IPN Virus vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 793,
    "Name": "Pasteurella vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 794,
    "Name": "Combined Pasteurella/Vibriosis vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 795,
    "Name": "Vibriosis vaccine for cod",
    "ParentCategoryId": 743
  },
  {
    "Id": 796,
    "Name": "Shrimp Vibriosis vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 797,
    "Name": "SVC virus vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 798,
    "Name": "Lactococcus garvieae/Streptococcus iniae vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 799,
    "Name": "KHV vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 800,
    "Name": "Carp Erythrodermatitis/Ulcer disease vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 801,
    "Name": "Piscirickettsia salmonis vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 802,
    "Name": "ISA virus vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 803,
    "Name": "Flavobacterium psychrophilum vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 804,
    "Name": "Nodavirus vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 805,
    "Name": "Pancreas disease virus vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 806,
    "Name": "Edwardsiella ictaluri vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 807,
    "Name": "Streptococcus agalactiae vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 808,
    "Name": "PD vaccine",
    "ParentCategoryId": 743
  },
  {
    "Id": 423,
    "Name": "Agri Supply",
    "ParentCategoryId": 0
  },
  {
    "Id": 817,
    "Name": "Seed",
    "ParentCategoryId": 423
  },
  {
    "Id": 824,
    "Name": "Fruit",
    "ParentCategoryId": 817
  },
  {
    "Id": 825,
    "Name": "Vegetable",
    "ParentCategoryId": 817
  },
  {
    "Id": 826,
    "Name": "Crop",
    "ParentCategoryId": 817
  },
  {
    "Id": 818,
    "Name": "Fertilizer",
    "ParentCategoryId": 423
  },
  {
    "Id": 827,
    "Name": "Biological Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 828,
    "Name": "Micronutrient Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 829,
    "Name": "Organic Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 830,
    "Name": "Chemical Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 831,
    "Name": "Earthworm Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 832,
    "Name": "Imported Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 833,
    "Name": "Liquid Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 834,
    "Name": "Zymes Fertilizers",
    "ParentCategoryId": 818
  },
  {
    "Id": 819,
    "Name": "Organic Farming",
    "ParentCategoryId": 423
  },
  {
    "Id": 835,
    "Name": "Plant Growth Promoter",
    "ParentCategoryId": 819
  },
  {
    "Id": 836,
    "Name": "Organic Fertilizer",
    "ParentCategoryId": 819
  },
  {
    "Id": 837,
    "Name": "Organic Pesticides",
    "ParentCategoryId": 819
  },
  {
    "Id": 838,
    "Name": "Organic Fungicides",
    "ParentCategoryId": 819
  },
  {
    "Id": 839,
    "Name": "Viricides",
    "ParentCategoryId": 819
  },
  {
    "Id": 840,
    "Name": "Waste Decomposer",
    "ParentCategoryId": 819
  },
  {
    "Id": 820,
    "Name": "Crops",
    "ParentCategoryId": 423
  },
  {
    "Id": 821,
    "Name": "Crop Protection",
    "ParentCategoryId": 423
  },
  {
    "Id": 841,
    "Name": "Insecticides",
    "ParentCategoryId": 821
  },
  {
    "Id": 842,
    "Name": "Pesticides",
    "ParentCategoryId": 821
  },
  {
    "Id": 843,
    "Name": "Fungicides",
    "ParentCategoryId": 821
  },
  {
    "Id": 844,
    "Name": "Herbicides/Weedicide",
    "ParentCategoryId": 821
  },
  {
    "Id": 845,
    "Name": "Rhodenticides",
    "ParentCategoryId": 821
  },
  {
    "Id": 846,
    "Name": "Plant Growth Promoter",
    "ParentCategoryId": 821
  },
  {
    "Id": 847,
    "Name": "Sticking/Wetting Agent",
    "ParentCategoryId": 821
  },
  {
    "Id": 822,
    "Name": "Irrigation",
    "ParentCategoryId": 423
  },
  {
    "Id": 848,
    "Name": "Sprinkler",
    "ParentCategoryId": 822
  },
  {
    "Id": 849,
    "Name": "Drip Irrigation",
    "ParentCategoryId": 822
  },
  {
    "Id": 850,
    "Name": "Pipe & Fiting",
    "ParentCategoryId": 822
  },
  {
    "Id": 823,
    "Name": "Agri Machineries",
    "ParentCategoryId": 423
  },
  {
    "Id": 851,
    "Name": "Hand Use Equipment",
    "ParentCategoryId": 823
  },
  {
    "Id": 852,
    "Name": "Small Machinery",
    "ParentCategoryId": 823
  },
  {
    "Id": 853,
    "Name": "Bigger Machinery",
    "ParentCategoryId": 823
  },
  {
    "Id": 854,
    "Name": "Fly & Insect Killer",
    "ParentCategoryId": 823
  },
  {
    "Id": 855,
    "Name": "Spray Pump",
    "ParentCategoryId": 823
  },
  {
    "Id": 856,
    "Name": "Tractors & Parts",
    "ParentCategoryId": 823
  },
  {
    "Id": 857,
    "Name": "Tarpaulin",
    "ParentCategoryId": 823
  },
  {
    "Id": 858,
    "Name": "Mulching",
    "ParentCategoryId": 823
  },
  {
    "Id": 859,
    "Name": "Sprayer Accessories",
    "ParentCategoryId": 823
  },
  {
    "Id": 860,
    "Name": "Brush Cutter",
    "ParentCategoryId": 823
  },
  {
    "Id": 861,
    "Name": "Weeders",
    "ParentCategoryId": 823
  },
  {
    "Id": 424,
    "Name": "Gardening",
    "ParentCategoryId": 0
  },
  {
    "Id": 870,
    "Name": "Seeds & Plants",
    "ParentCategoryId": 424
  },
  {
    "Id": 871,
    "Name": "Gardening Tools & Accessories",
    "ParentCategoryId": 424
  },
  {
    "Id": 872,
    "Name": "Planting Support & Accessories",
    "ParentCategoryId": 424
  },
  {
    "Id": 873,
    "Name": "Landscaping Services",
    "ParentCategoryId": 424
  },
  {
    "Id": 874,
    "Name": "Water & Irrigation Support",
    "ParentCategoryId": 424
  },
  {
    "Id": 875,
    "Name": "Soils & Fertilizers",
    "ParentCategoryId": 424
  },
  {
    "Id": 876,
    "Name": "Pest & Disease Control",
    "ParentCategoryId": 424
  },
  {
    "Id": 877,
    "Name": "Others",
    "ParentCategoryId": 424
  },
  {
    "Id": 425,
    "Name": "Pets, Birds & Fish",
    "ParentCategoryId": 0
  },
  {
    "Id": 878,
    "Name": "Cats",
    "ParentCategoryId": 425
  },
  {
    "Id": 883,
    "Name": "Live Cats",
    "ParentCategoryId": 878
  },
  {
    "Id": 884,
    "Name": "Cat food & Toys",
    "ParentCategoryId": 878
  },
  {
    "Id": 885,
    "Name": "Cat Treats & Chews",
    "ParentCategoryId": 878
  },
  {
    "Id": 886,
    "Name": "Cat Carriers, Furnitures, Feeders & Accessories",
    "ParentCategoryId": 878
  },
  {
    "Id": 887,
    "Name": "Cat Hygiene",
    "ParentCategoryId": 878
  },
  {
    "Id": 888,
    "Name": "Cat Medication & Supplies",
    "ParentCategoryId": 878
  },
  {
    "Id": 889,
    "Name": "Cat Grooming",
    "ParentCategoryId": 878
  },
  {
    "Id": 890,
    "Name": "Litter & Waste",
    "ParentCategoryId": 878
  },
  {
    "Id": 879,
    "Name": "Dogs",
    "ParentCategoryId": 425
  },
  {
    "Id": 891,
    "Name": "Live dogs",
    "ParentCategoryId": 879
  },
  {
    "Id": 892,
    "Name": "Dog food & Toys",
    "ParentCategoryId": 879
  },
  {
    "Id": 893,
    "Name": "Treats & Chews",
    "ParentCategoryId": 879
  },
  {
    "Id": 894,
    "Name": "Dog Carriers, Furnitures, Feeders & Apparel",
    "ParentCategoryId": 879
  },
  {
    "Id": 895,
    "Name": "Dog Hygiene",
    "ParentCategoryId": 879
  },
  {
    "Id": 896,
    "Name": "Dog Medication & Supplies",
    "ParentCategoryId": 879
  },
  {
    "Id": 897,
    "Name": "Dog Grooming",
    "ParentCategoryId": 879
  },
  {
    "Id": 898,
    "Name": "Dog Litter & Waste",
    "ParentCategoryId": 879
  },
  {
    "Id": 880,
    "Name": "Birds",
    "ParentCategoryId": 425
  },
  {
    "Id": 899,
    "Name": "Bird Cages & Aviary accessories",
    "ParentCategoryId": 880
  },
  {
    "Id": 900,
    "Name": "Bird Grooming",
    "ParentCategoryId": 880
  },
  {
    "Id": 901,
    "Name": "Bird Foods",
    "ParentCategoryId": 880
  },
  {
    "Id": 902,
    "Name": "Bird Medications",
    "ParentCategoryId": 880
  },
  {
    "Id": 903,
    "Name": "Mites & Parasite Control",
    "ParentCategoryId": 880
  },
  {
    "Id": 904,
    "Name": "Disinfectant & Cleaners",
    "ParentCategoryId": 880
  },
  {
    "Id": 905,
    "Name": "Supplements",
    "ParentCategoryId": 880
  },
  {
    "Id": 906,
    "Name": "First Aid/Health Support",
    "ParentCategoryId": 880
  },
  {
    "Id": 881,
    "Name": "Aquarium Fish",
    "ParentCategoryId": 425
  },
  {
    "Id": 907,
    "Name": "Aquarium Supplies",
    "ParentCategoryId": 881
  },
  {
    "Id": 908,
    "Name": "Cleaning & Maintenance Supplies",
    "ParentCategoryId": 881
  },
  {
    "Id": 909,
    "Name": "Co2 Equipment",
    "ParentCategoryId": 881
  },
  {
    "Id": 910,
    "Name": "Decorations",
    "ParentCategoryId": 881
  },
  {
    "Id": 911,
    "Name": "Dosing Equipment",
    "ParentCategoryId": 881
  },
  {
    "Id": 912,
    "Name": "Filter Media & Cartridges",
    "ParentCategoryId": 881
  },
  {
    "Id": 913,
    "Name": "Fish Medication",
    "ParentCategoryId": 881
  },
  {
    "Id": 914,
    "Name": "Fish Food",
    "ParentCategoryId": 881
  },
  {
    "Id": 915,
    "Name": "Fish Tank/ Heater/Bowls",
    "ParentCategoryId": 881
  },
  {
    "Id": 916,
    "Name": "Tubing & Testing Equipment",
    "ParentCategoryId": 881
  },
  {
    "Id": 917,
    "Name": "Protein skimmers & Wavemakers",
    "ParentCategoryId": 881
  },
  {
    "Id": 918,
    "Name": "UV Sterilizers",
    "ParentCategoryId": 881
  },
  {
    "Id": 882,
    "Name": "Rabbit",
    "ParentCategoryId": 425
  },
  {
    "Id": 919,
    "Name": "Live Rabbit",
    "ParentCategoryId": 882
  },
  {
    "Id": 920,
    "Name": "Rabbit Food",
    "ParentCategoryId": 882
  },
  {
    "Id": 921,
    "Name": "Rabbit Medication & Supplies",
    "ParentCategoryId": 882
  },
  {
    "Id": 922,
    "Name": "Rabbit Hygiene",
    "ParentCategoryId": 882
  },
  {
    "Id": 923,
    "Name": "Rabbit grooming",
    "ParentCategoryId": 882
  },
  {
    "Id": 924,
    "Name": "Rabbit Litter & Waste",
    "ParentCategoryId": 882
  },
  {
    "Id": 426,
    "Name": "HaatBazar",
    "ParentCategoryId": 0
  },
  {
    "Id": 925,
    "Name": "Poultry Aroth",
    "ParentCategoryId": 426
  },
  {
    "Id": 928,
    "Name": "Mature Broiler",
    "ParentCategoryId": 925
  },
  {
    "Id": 929,
    "Name": "Mature Sonali (Roast)",
    "ParentCategoryId": 925
  },
  {
    "Id": 930,
    "Name": "Mature Ducks",
    "ParentCategoryId": 925
  },
  {
    "Id": 931,
    "Name": "Mature Turkeys",
    "ParentCategoryId": 925
  },
  {
    "Id": 932,
    "Name": "Deshi Chicken",
    "ParentCategoryId": 925
  },
  {
    "Id": 933,
    "Name": "Day Old Chicks",
    "ParentCategoryId": 925
  },
  {
    "Id": 934,
    "Name": "Eggs",
    "ParentCategoryId": 925
  },
  {
    "Id": 943,
    "Name": "Hen",
    "ParentCategoryId": 934
  },
  {
    "Id": 944,
    "Name": "Duck",
    "ParentCategoryId": 934
  },
  {
    "Id": 945,
    "Name": "Turkey",
    "ParentCategoryId": 934
  },
  {
    "Id": 946,
    "Name": "Koyel",
    "ParentCategoryId": 934
  },
  {
    "Id": 926,
    "Name": "Fish Aroth",
    "ParentCategoryId": 426
  },
  {
    "Id": 935,
    "Name": "Wholesale",
    "ParentCategoryId": 926
  },
  {
    "Id": 936,
    "Name": "Retail",
    "ParentCategoryId": 926
  },
  {
    "Id": 927,
    "Name": "Cattle Haat",
    "ParentCategoryId": 426
  },
  {
    "Id": 937,
    "Name": "Bull",
    "ParentCategoryId": 927
  },
  {
    "Id": 947,
    "Name": "Brahma",
    "ParentCategoryId": 937
  },
  {
    "Id": 948,
    "Name": "Shahiwal",
    "ParentCategoryId": 937
  },
  {
    "Id": 949,
    "Name": "Friesian",
    "ParentCategoryId": 937
  },
  {
    "Id": 950,
    "Name": "Deshal",
    "ParentCategoryId": 937
  },
  {
    "Id": 951,
    "Name": "Bhutti",
    "ParentCategoryId": 937
  },
  {
    "Id": 952,
    "Name": "Shindhi",
    "ParentCategoryId": 937
  },
  {
    "Id": 953,
    "Name": "Gyr",
    "ParentCategoryId": 937
  },
  {
    "Id": 938,
    "Name": "Milk Cows & Heifer",
    "ParentCategoryId": 927
  },
  {
    "Id": 954,
    "Name": "Pure Friesian",
    "ParentCategoryId": 938
  },
  {
    "Id": 955,
    "Name": "Jersey",
    "ParentCategoryId": 938
  },
  {
    "Id": 956,
    "Name": "Cross Breed",
    "ParentCategoryId": 938
  },
  {
    "Id": 957,
    "Name": "Deshal",
    "ParentCategoryId": 938
  },
  {
    "Id": 958,
    "Name": "Mundi",
    "ParentCategoryId": 938
  },
  {
    "Id": 939,
    "Name": "Calf",
    "ParentCategoryId": 927
  },
  {
    "Id": 959,
    "Name": "Male",
    "ParentCategoryId": 939
  },
  {
    "Id": 960,
    "Name": "Female",
    "ParentCategoryId": 939
  },
  {
    "Id": 940,
    "Name": "Goat",
    "ParentCategoryId": 927
  },
  {
    "Id": 961,
    "Name": "Black Bengal",
    "ParentCategoryId": 940
  },
  {
    "Id": 962,
    "Name": "Cross Breed",
    "ParentCategoryId": 940
  },
  {
    "Id": 963,
    "Name": "Kids",
    "ParentCategoryId": 940
  },
  {
    "Id": 966,
    "Name": "Male",
    "ParentCategoryId": 963
  },
  {
    "Id": 967,
    "Name": "Female",
    "ParentCategoryId": 963
  },
  {
    "Id": 941,
    "Name": "Dumba",
    "ParentCategoryId": 927
  },
  {
    "Id": 964,
    "Name": "Kids",
    "ParentCategoryId": 941
  },
  {
    "Id": 968,
    "Name": "Male",
    "ParentCategoryId": 964
  },
  {
    "Id": 969,
    "Name": "Female",
    "ParentCategoryId": 964
  },
  {
    "Id": 942,
    "Name": "Lamb",
    "ParentCategoryId": 927
  },
  {
    "Id": 965,
    "Name": "Kids",
    "ParentCategoryId": 942
  },
  {
    "Id": 970,
    "Name": "Male",
    "ParentCategoryId": 965
  },
  {
    "Id": 971,
    "Name": "Female",
    "ParentCategoryId": 965
  },
  {
    "Id": 427,
    "Name": "Services",
    "ParentCategoryId": 0
  },
  {
    "Id": 972,
    "Name": "Vet Doctors Consultancy",
    "ParentCategoryId": 427
  },
  {
    "Id": 973,
    "Name": "Agri Consultancy",
    "ParentCategoryId": 427
  },
  {
    "Id": 974,
    "Name": "Closest Clininc Info",
    "ParentCategoryId": 427
  },
  {
    "Id": 975,
    "Name": "Call Center 24/7",
    "ParentCategoryId": 427
  },
  {
    "Id": 976,
    "Name": "Payment Methods",
    "ParentCategoryId": 427
  },
  {
    "Id": 978,
    "Name": "Bkash",
    "ParentCategoryId": 976
  },
  {
    "Id": 979,
    "Name": "Rocket",
    "ParentCategoryId": 976
  },
  {
    "Id": 980,
    "Name": "Ukash",
    "ParentCategoryId": 976
  },
  {
    "Id": 981,
    "Name": "Nagad",
    "ParentCategoryId": 976
  },
  {
    "Id": 982,
    "Name": "Cash On Delivery",
    "ParentCategoryId": 976
  },
  {
    "Id": 983,
    "Name": "Master Card",
    "ParentCategoryId": 976
  },
  {
    "Id": 984,
    "Name": "Visa Card",
    "ParentCategoryId": 976
  },
  {
    "Id": 987,
    "Name": "Courier Partners",
    "ParentCategoryId": 0
  },
  {
    "Id": 988,
    "Name": "Courier Partner 1",
    "ParentCategoryId": 987
  },
  {
    "Id": 989,
    "Name": "Courier Partner 2",
    "ParentCategoryId": 987
  },
  {
    "Id": 990,
    "Name": "Courier Partner 3",
    "ParentCategoryId": 987
  },
  {
    "Id": 991,
    "Name": "Courier Partner 4",
    "ParentCategoryId": 987
  }
];