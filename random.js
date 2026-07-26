let allQuestionAnswers = [["Lion", "Tiger", "Owl", "Goat"],
["Kangaroo", "Camel", "Flamingo", "Giraffe"],
["Octopus", "Elephant", "Giraffe", "Crocodile"],
["Penguin", "Owl", "Falcon", "Flamingo"],
["Octopus", "Crocodile", "Kangaroo", "Eagle"],
["Tiger", "Snake", "Zebra", "Penguin"],
["Tiger", "Sheep", "Dog", "Cheetah"],
["Flamingo", "Dog", "Goat", "Monkey"],
["Bat", "Owl", "Parrot", "Eagle"],
["Platypus", "Chameleon", "Rhinoceros", "Turtle"],
["Jellyfish", "Whale", "Elephant", "Blue Whale"],
["Camel", "Turtle", "Giant Tortoise", "Panda"],
["Hippopotamus", "Leopard", "Ostrich", "Platypus"],
["Flamingo", "Bear", "Beaver", "Donkey"],
["Octopus", "Parrot", "Falcon", "Jellyfish"],
["Bat", "Chameleon", "Rabbit", "Platypus"],
["Hippopotamus", "Lion", "Crocodile", "Shark"], 
["Parrot", "Flamingo", "Bat", "Eagle"],
["Pangolin", "Crocodile", "Chimpanzee", "Snake"],
["Octopus", "Sperm Whale", "Orca", "Shark"],
["Apple", "Samsung", "Google", "Huawei"],
["Microsoft", "Apple", "Google", "IBM"], 
["Meta", "Snap", "Google", "X"],
["Sony", "Nintendo", "Microsoft", "Sega"],
["Google", "Microsoft", "Apple", "Yahoo"],
["Samsung", "Apple", "Xiaomi", "Huawei"],
["Meta", "Google", "Microsoft", "TikTok"],
["Nintendo", "Sony", "Sega", "Atari"],
["Microsoft", "Sony", "Nintendo", "Valve"],
["Nike", "Adidas", "Puma", "Reebok"],
["Puma", "Nike", "Adidas", "Under Armour"],
["Samsung", "Apple", "Google", "Microsoft"], 
["OpenAI", "Google", "Anthropic", "Meta"], 
["Adobe", "Corel", "Canva", "Autodesk"], 
["Google", "Meta", "Telegram", "Apple"], 
["Mozilla", "Opera", "Google", "Microsoft"], 
["Amazon", "eBay", "Alibaba", "Walmart"],
["Google", "Microsoft", "Apple", "IBM"],
["ByteDance", "Tencent", "Meta", "Google"],
["Dell", "Microsoft", "HP", "Lenovo"],
["Audi", "Mercedes-Benz", "Volvo", "BMW"], 
["Ferrari", "Porsche", "Maserati", "Lamborghini"],
["BMW", "Volkswagen", "Mercedes-Benz", "Audi"],
["BMW", "Mercedes-Benz", "Lexus", "Audi"],
["Lamborghini", "Ferrari", "Maserati", "Porsche"],
["Citroën", "Renault", "Peugeot", "Opel"],
["Chevrolet", "Ford", "Dodge", "GMC"],
["Honda", "Toyota", "Hyundai", "Nissan"],
["Tesla", "Toyota", "Porsche", "Nissan"],
["Suzuki", "Mazda", "Subaru", "Mitsubishi"],
["Jaguar", "Rolls-Royce", "Bentley", "Aston Martin"],
["Lancia", "Ferrari", "Maserati", "Alfa Romeo"],
["Lexus", "Genesis", "Acura", "Infiniti"],
["Citroën", "Peugeot", "Fiat", "Renault"], 
["Seat", "Opel", "Volkswagen", "Škoda"], 
["Ford", "Ram", "Chevrolet", "Jeep"], 
["Ford", "Ram", "Jeep", "GMC"], 
["Ferrari", "Alfa Romeo", "Fiat", "Maserati"],
["Lancia", "Alfa Romeo", "Abarth", "Fiat"],
["Bugatti", "Ferrari", "Porsche", "Lamborghini"],
["Real", "Peso", "Ruble", "Rand"],
["Thailand", "Vietnam", "Cambodia", "Laos"],
["Yen", "Yuan", "Won", "Baht"],
["20", "21", "18", "25"],
["US Dollar", "Euro", "Pound Sterling", "Yen"], 
["Kuwait", "Bahrain", "United Kingdom", "Switzerland"],
["Hungary", "Poland", "Romania", "Czech Republic"],
["Swiss Franc", "Euro", "Krone", "Pound Sterling"],
["Indian Rupee", "Pakistani Rupee", "Nepalese Rupee", "Sri Lankan Rupee"],
["1", "11", "5", "10"],
 ["Vietnam", "Thailand", "China", "South Korea"], 
["Lira", "Ruble", "Riyal", "Dirham"],
["Ruble", "Hryvnia", "Tenge", "Som"],
["Poland", "Hungary", "Czech Republic", "Slovakia"], 
["Krone", "Krona", "Euro", "Franc"],
["Turkish Lira", "Euro", "Egyptian Pound", "Dirham"],
["Euro", "US Dollar", "Swiss Franc", "Pound Sterling"], 
["Kazakhstan", "Uzbekistan", "Mongolia", "Kyrgyzstan"], 
["Rand", "Real", "Ruble", "Riyal"],
["South Africa", "Namibia", "Botswana", "Zimbabwe"],
["Allosaurus", "Tyrannosaurus Rex", "Velociraptor", "Carnotaurus"], 
["Triceratops", "Styracosaurus", "Protoceratops", "Pentaceratops"],
["Kentrosaurus", "Stegosaurus", "Ankylosaurus", "Iguanodon"],
["Euoplocephalus", "Ankylosaurus", "Stegosaurus", "Nodosaurus"], 
["Therizinosaurus", "Deinonychus", "Velociraptor", "Troodon"],
["Diplodocus", "Brachiosaurus", "Apatosaurus", "Camarasaurus"],
["Troodon", "Deinonychus", "Velociraptor", "Utahraptor"],
["Suchomimus", "Baryonyx", "Spinosaurus", "Allosaurus"],
["Parasaurolophus", "Hadrosaurus", "Edmontosaurus", "Iguanodon"], 
["Pachycephalosaurus", "Stegoceras", "Stygimoloch", "Dracorex"],
["Diplodocus", "Mamenchisaurus", "Apatosaurus", "Brachiosaurus"],
["Spinosaurus", "Carcharodontosaurus", "Allosaurus", "Giganotosaurus"],
["Dilophosaurus", "Ceratosaurus", "Allosaurus", "Coelophysis"],
["Brachiosaurus", "Diplodocus", "Mamenchisaurus", "Apatosaurus"],
["Gallimimus", "Ornithomimus", "Troodon", "Struthiomimus"],
["Iguanodon", "Parasaurolophus", "Maiasaura", "Ouranosaurus"],
["Styracosaurus", "Pentaceratops", "Triceratops", "Torosaurus"],
["Troodon", "Velociraptor", "Deinonychus", "Compsognathus"],
["Ankylosaurus", "Euoplocephalus", "Nodosaurus", "Stegosaurus"], 
["Spinosaurus", "Giganotosaurus", "Carcharodontosaurus", "Mapusaurus"],
["United Kingdom", "Australia", "New Zealand", "Iceland"],
["Japan", "Bangladesh", "South Korea", "Palau"],
["United States", "Liberia", "Malaysia", "Cuba"],
["Canada", "Austria", "Peru", "Latvia"],
["Pakistan", "Algeria", "Turkey", "Tunisia"],
["Bangladesh", "Japan", "Palau", "Greenland"], 
["France", "Netherlands", "Luxembourg", "Russia"],
["Finland", "Sweden", "Norway", "Denmark"],
["Sweden", "Finland", "Norway", "Iceland"], 
["China", "Vietnam", "North Korea", "Singapore"], 
["Ireland", "Ivory Coast", "Italy", "Mexico"],
["Germany", "Belgium", "Armenia", "Lithuania"],
["Canada", "Austria", "Peru", "Poland"], 
["Italy", "Mexico", "Ireland", "Hungary"],
["Australia", "New Zealand", "Fiji", "Tuvalu"], 
["Mexico", "Egypt", "Albania", "Germany"], 
["Turkey", "Tunisia", "Algeria", "Pakistan"],
["Switzerland", "Denmark", "England", "Georgia"],
["Wales", "Bhutan", "Scotland", "China"],
["Romania", "Chad", "Moldova", "Andorra"],
["Durian", "Mango", "Jackfruit", "Pineapple"],
["Japan", "China", "Thailand", "South Korea"],
["Mozzarella", "Cheddar", "Parmesan", "Gouda"], 
["Jackfruit", "Watermelon", "Pumpkin", "Coconut"],
["Mexico", "Spain", "Brazil", "Argentina"],
["Natto", "Tofu", "Miso", "Tempeh"],
["France", "Belgium", "Italy", "Germany"], 
["Potato", "Sweet Potato", "Carrot", "Turnip"], 
["South Korea", "Japan", "China", "Vietnam"],
["Mozzarella", "Cheddar", "Swiss", "Blue Cheese"], 
["Switzerland", "Belgium", "Germany", "Austria"],
["Banana", "Apple", "Orange", "Pear"],
["Spain", "Portugal", "Italy", "Greece"], 
["Peanut", "Almond", "Cashew", "Walnut"],
["Canada", "United States", "Norway", "Sweden"],
["Strawberry", "Raspberry", "Cherry", "Blueberry"],
["India", "Pakistan", "Thailand", "Malaysia"], 
["Wheat", "Rice", "Corn", "Barley"],
["Turkey", "Greece", "Iran", "Lebanon"],
["Avocado", "Cucumber", "Tomato", "Lime"],
["Spanish", "Portuguese", "French", "Italian"],
["Portuguese", "Spanish", "French", "Italian"],
["Chinese", "Japanese", "Korean", "Thai"], 
["Japanese", "Chinese", "Korean", "Vietnamese"],
["German", "Dutch", "Swedish", "Danish"],
["1", "25","29", "17"],
["Russian", "Ukrainian", "Bulgarian", "Serbian"],
["Portuguese", "Spanish", "Italian", "French"],
["Swedish", "Norwegian", "Danish", "Finnish"],
["Persian", "Arabic", "Turkish", "Urdu"],
["24", "34", "67", "55"],
["Arabic", "Hebrew", "Persian", "Turkish"],
["About 7,000", "About 3,000", "About 5,000", "About 10,000"],
["Latin", "Ancient Egyptian", "Sanskrit", "Old Norse"],
["English", "Mandarin Chinese", "Spanish", "Hindi"],
["India", "Indonesia", "Nigeria", "Papua New Guinea"],
["Arabic", "English", "French", "Russian"] ,
["11", "3", "5", "8"],
["Hindi", "Nepali", "Bengali", "Marathi"],
["Mandarin Chinese", "English", "Spanish", "Hindi"],
["4", "5", "6", "7"],
["5", "6", "7", "8"],
["25", "30", "35", "40"],
["5", "6", "8", "9"],
["64", "72", "81", "90"],
["42", "43", "44", "45"],
["11", "12", "14", "16"], 
["121", "144", "169", "196"],
["12", "13", "14", "15"],
["144", "153", "162", "171"],
["20", "24", "25", "30"],
["289", "324", "361", "400"],
["64", "125", "216", "343"], 
["26", "28", "30", "32"],
["25", "40", "50", "75"], 
["64", "81", "100", "125"],
["60", "70", "80", "90"],
["3.12", "3.14", "3.16", "3.18"],
["49", "56", "58", "63"],
["40", "42", "44", "45"],
["Soccer", "Basketball", "Tennis", "Cricket"],
["11", "9", "10", "12"], 
["Badminton", "Tennis", "Table Tennis", "Squash"],
["Qatar", "Russia", "Brazil", "France"], 
["6", "3", "7", "9"],
["Tennis", "Golf", "Cricket", "Rugby"],
["Cricket", "Baseball", "Softball", "Rugby"], 
["Canada", "United States", "England", "Australia"],
["5", "4", "6", "7"], ["Basketball", "Baseball", "Tennis", "Golf"], 
["Argentina", "France", "Brazil", "Germany"],
["Gymnastics", "Figure Skating", "Diving", "Fencing"], 
["147", "155", "140", "150"],
["Cycling", "Running", "Swimming", "Rowing"],
["Japan", "China", "South Korea", "Mongolia"],
["4 years", "2 years", "3 years", "5 years"], 
["Golf", "Baseball", "Hockey", "Polo"],
["Brazil", "Germany", "Italy", "Argentina"], 
["Ice Hockey", "Basketball", "Baseball", "Rugby"],
["Gymnastics", "Wrestling", "Weightlifting", "Fencing"],
["Russia", "Canada", "China", "United States"],
["Brazil", "Peru", "Colombia", "Venezuela"],
["Andorra", "Monaco", "San Marino", "Liechtenstein"], 
["Italy", "Greece", "Portugal", "Croatia"],
["Egypt", "Sudan", "Libya", "Jordan"], ["Japan", "China", "South Korea", "Thailand"], ["Turkey", "Russia", "Kazakhstan", "Georgia"], ["Canada", "Russia", "Indonesia", "Australia"], ["New Zealand", "Fiji", "Papua New Guinea", "Indonesia"], ["Algeria", "Libya", "Sudan", "Chad"], ["Belgium", "Luxembourg", "Netherlands", "Switzerland"], ["Nepal", "Bhutan", "India", "China"], ["Brazil", "Argentina", "Chile", "Peru"], ["India", "Pakistan", "Bangladesh", "Nepal"], ["Turkey", "Greece", "Romania", "Bulgaria"], ["Mexico", "Guatemala", "Belize", "Cuba"], ["Algeria", "Egypt", "Morocco", "Libya"], ["China", "Japan", "South Korea", "Mongolia"], ["Sri Lanka", "Maldives", "Madagascar", "Indonesia"], ["Poland", "Czech Republic", "Austria", "Denmark"]];




let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let theResult = document.getElementById("results");
let next = document.getElementById("next");
let back = document.getElementById("back");
let finsh = document.getElementById("finsh");
let randomPlace = Math.floor(Math.random() * 4);
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");








let questions = [ 


    "Which animal is known as the King of the Jungle?",
    "Which animal has a very long neck?",
    "Which animal is the largest land animal?",
    "Which bird cannot fly but can swim?",
    "Which animal is famous for carrying its baby in a pouch?",
    "Which animal is known for its black and white stripes?",
    "Which is the fastest land animal?",
    "Which animal is known as man's best friend?",
    "Which mammal can fly?",
    "Which animal changes its color to blend into its surroundings?",
    "Which is the largest animal on Earth?",
    "Which animal has the longest lifespan among reptiles?",
    "Which bird is the largest in the world?",
    "Which animal is famous for building dams?",
    "Which sea animal has eight arms?",
    "Which mammal lays eggs instead of giving birth?",
    "Which animal has the strongest bite force among land animals?",
    "Which bird is known for imitating human speech?",
    "Which animal is the only mammal covered in scales?",
    "Which marine animal is considered the largest predator on Earth?",
    "Which brand makes the iPhone?",
    "Which brand created Windows?",
    "Which brand owns Instagram?",
    "Which brand makes PlayStation?",
    "Which brand created Android?",
    "Which brand makes the Galaxy phones?",
    "Which brand owns YouTube?",
    "Which brand makes the Switch console?",
    "Which brand created the Xbox?",
    "Which brand makes Air Jordan shoes?",
    "Which brand has the slogan 'Just Do It'?",
    "Which brand has a bitten apple logo?",
    "Which brand created ChatGPT?",
    "Which brand makes Photoshop?",
    "Which brand owns WhatsApp?",
    "Which brand created the Chrome browser?",
    "Which brand makes the Kindle?",
    "Which brand owns LinkedIn?",
    "Which brand created TikTok?",
    "Which brand makes the Surface laptop?",
    "Which car brand uses the three-pointed star logo?",
    "Which car brand uses the prancing horse logo?",
    "Which car brand uses the four rings logo?",
    "Which car brand uses the blue and white roundel logo?",
    "Which car brand uses the raging bull logo?",
    "Which car brand uses the lion logo?",
    "Which car brand uses the bowtie logo?",
    "Which car brand uses the H logo?",
    "Which car brand uses the T logo?",
    "Which car brand uses the star cluster logo?",
    "Which car brand uses the Spirit of Ecstasy mascot?",
    "Which car brand uses the trident logo?",
    "Which car brand uses the V-shaped logo?",
    "Which car brand uses the diamond logo?",
    "Which car brand uses the winged arrow logo?",
    "Which car brand uses the blue oval logo?",
    "Which car brand uses the ram head logo?",
    "Which car brand uses the snake and cross logo?",
    "Which car brand uses the scorpion logo?",
    "Which car brand uses the crest logo with a black horse?",
    "What is the currency of Brazil?",
    "Which country uses the Baht?",
    "Which currency has the symbol ¥?",
    "How many countries use the Euro?",
    "Which currency is used by the largest number of countries?",
    "Which country has the highest-valued currency in the world?",
    "Which country uses the Forint?",
    "What is the currency of Switzerland?",
    "Which currency has the symbol ₹?",
    "How many countries officially use the US Dollar?",
    "Which country uses the Dong?",
    "What is the currency of Turkey?",
    "Which currency has the symbol ₽?",
    "Which country uses the Zloty?",
    "What is the currency of Norway?",
    "Which currency has the symbol ₺?",
    "Which currency is used in the European Union?",
    "Which country uses the Tenge?",
    "What is the currency of South Africa?",
    "Which country uses the Rand?",
    "Which dinosaur is known as the 'King of the Dinosaurs'?",
    "Which dinosaur had three horns on its face?",
    "Which dinosaur had large plates along its back?",
    "Which dinosaur had a club-like tail?",
    "Which dinosaur had the longest claws of any known dinosaur?",
    "Which dinosaur had a long neck and was one of the tallest dinosaurs?",
    "Which dinosaur is famous for its sickle-shaped claw?",
    "Which dinosaur had a sail on its back?",
    "Which dinosaur had a duck-like bill?",
    "Which dinosaur had a dome-shaped skull?",
    "Which dinosaur had one of the longest bodies of any dinosaur?",
    "Which dinosaur was larger than Tyrannosaurus rex in length?",
    "Which dinosaur had two thin crests on its head?",
    "Which dinosaur had a long neck with up to 19 vertebrae?",
    "Which dinosaur was one of the fastest known dinosaurs?",
    "Which dinosaur had thumb spikes for defense?",
    "Which dinosaur had a large bony frill and horns?",
    "Which dinosaur is considered one of the closest non-avian relatives of birds?",
    "Which dinosaur had armor covering most of its body?",
    "Which dinosaur was one of the largest meat-eating dinosaurs ever discovered?",
    "Which country's flag is known as the Union Jack?",
    "Which country's flag has a red circle on a white background?",
    "Which country's flag features 50 stars and 13 stripes?",
    "Which country's flag has a red maple leaf in the center?",
    "Which country's flag is green with a white crescent and star?",
    "Which country's flag has a red circle in the middle of a green background?",
    "Which country's flag has three vertical stripes: blue, white, and red?",
    "Which country's flag has a blue cross on a white background?",
    "Which country's flag has a yellow cross on a blue background?",
    "Which country's flag has a red background with five yellow stars?",
    "Which country's flag is green, white, and orange with vertical stripes?",
    "Which country's flag has black, red, and yellow horizontal stripes?",
    "Which country's flag has a red and white design with two red bars and a maple leaf?",
    "Which country's flag has green, white, and red vertical stripes?",
    "Which country's flag features the Union Jack and stars representing the Southern Cross?",
    "Which country's flag features an eagle in the center?",
    "Which country's flag is red with a white crescent and star?",
    "Which country's flag has a white cross on a red background?",
    "Which country's flag has a red dragon on a green and white background?",
    "Which country's flag has a blue, yellow, and red vertical tricolor?",    "Which fruit is known as the King of Fruits?",
    "Which country is famous for sushi?",
    "Which food is traditionally eaten on Italian pizza?",
    "Which fruit is the largest in the world?",
    "Which country is famous for tacos?",
    "Which food is made from fermented soybeans in Japan?",
    "Which country is famous for croissants?",
    "Which vegetable is used to make French fries?",
    "Which country is famous for kimchi?",
    "Which cheese is traditionally used on a Margherita pizza?",
    "Which country is famous for chocolate?",
    "Which fruit is yellow and rich in potassium?",
    "Which country is famous for paella?",
    "Which nut is used to make peanut butter?",
    "Which country is famous for maple syrup?",
    "Which fruit has seeds on the outside?",
    "Which country is famous for curry dishes?",
    "Which grain is the main ingredient in bread?",
    "Which country is famous for baklava?",
    "Which fruit is commonly used to make guacamole?",
    "Which country speaks Portuguese as its official language?",
    "Which language is mainly spoken in Brazil?",
    "Which language uses Hiragana and Katakana?",
    "Which language is written with Hangul?",
    "Which language is mainly spoken in Austria?",
    "How many countries speak French as an official language?",    "Which language uses the Cyrillic alphabet?",
    "Which language is mainly spoken in Argentina?",
    "Which country speaks Swedish as its official language?",
    "Which language is mainly spoken in Iran?",
    "How many countries have English as an official language?",    "Which language is mainly spoken in Egypt?",
    "Approximately how many languages are spoken in the world?",
    "Which language is considered the most famous dead language?",
    "Which is the most widely spoken language in the world?",
    "Which country has the highest number of languages?",
    "Which language is written from right to left?",
    "How many official languages does South Africa have?",
    "Which language uses the Devanagari script?",
    "Which language has the most native speakers in the world?",
    "What is 2 + 3?",
    "What is 10 - 4?",
    "What is 5 × 6?",
    "What is 36 ÷ 6?",
    "What is 9 × 8?",
    "What is 15 + 28?",
    "What is 84 ÷ 7?",
    "What is 12²?",
    "What is the square root of 196?",
    "What is 17 × 9?",
    "What is 125 ÷ 5?",
    "What is 18²?",
    "What is the cube of 5?",
    "What is 144 ÷ 12 + 8 × 2?",
    "What is 25% of 200?",
    "What is 3⁴?",
    "If a triangle has angles of 50° and 60°, what is the third angle?",
    "What is the value of π rounded to 2 decimal places?",
    "Solve: 7 × (12 - 5) + 9",
    "What is the square root of 2025?",
    "Which sport is known as the 'King of Sports'?",
    "How many players are on a soccer team on the field?",
    "Which sport uses a racket and a shuttlecock?",
    "Which country hosted the 2022 FIFA World Cup?",
    "How many points is a touchdown worth in American football?",
    "Which sport is played at Wimbledon?",
    "Which sport uses a bat, ball, and wickets?",
    "Which country invented basketball?",
    "How many Olympic rings are there?",
    "Which sport is Michael Jordan famous for?",
    "Which country won the FIFA World Cup in 2022?",
    "Which sport includes the events vault, balance beam, and uneven bars?",
    "What is the highest possible break in snooker?",
    "Which sport is played in the Tour de France?",
    "Which country is famous for sumo wrestling?",
    "How often are the Summer Olympic Games held?",
    "Which sport uses clubs and a small white ball?",
    "Which country has won the most FIFA World Cups?",
    "Which sport features the Stanley Cup?",
    "Which sport uses a pommel horse?",
    "Which is the largest country in the world by land area?",
    "Which country is home to the Amazon Rainforest?",
    "What country is located between France and Spain?",
    "Which country is shaped like a boot?",
    "Which country has the Great Pyramid of Giza?",
    "Which country is known as the Land of the Rising Sun?",
    "Which country is both in Europe and Asia?",
    "Which country has the longest coastline in the world?",
    "Which country is separated from Australia by the Tasman Sea?",
    "Which country is the largest in Africa?",
    "Which country shares a border with both Germany and France?",
    "Which country is home to Mount Everest?",
    "Which country has the city of Rio de Janeiro?",
    "Which country is famous for the Taj Mahal?",
    "Which country has the city of Istanbul?",
    "Which country is located directly south of the United States?",
    "Which country has the largest desert in the world (Sahara)?",
    "Which country is known for the Great Wall?",
    "Which country is an island in the Indian Ocean southeast of India?",
    "Which country borders Germany to the east?"
]; 
let rightAnswers = 0;
let userAnswers = [];
let text = [];

let wrongAnswers = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let level = -1;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let answerList = ["Lion", "Giraffe", "Elephant", "Penguin", "Kangaroo", "Zebra", "Cheetah", "Dog", "Bat", "Chameleon", "Blue Whale", "Giant Tortoise", "Ostrich", "Beaver", "Octopus", "Platypus", "Hippopotamus", "Parrot", "Pangolin", "Orca", "Apple", "Microsoft", "Meta", "Sony", "Google", "Samsung", "Google", "Nintendo", "Microsoft", "Nike", "Nike", "Apple", "OpenAI", "Adobe", "Meta", "Google", "Amazon", "Microsoft", "ByteDance", "Microsoft", "Mercedes-Benz", "Ferrari", "Audi", "BMW", "Lamborghini", "Peugeot", "Chevrolet", "Honda", "Tesla", "Subaru", "Rolls-Royce", "Maserati", "Citroën", "Renault", "Škoda", "Ford", "Ram", "Alfa Romeo", "Abarth", "Porsche", "Real", "Thailand", "Yen", "21", "US Dollar", "Kuwait", "Hungary", "Swiss Franc", "Indian Rupee", "11", "Vietnam", "Lira", "Ruble", "Poland", "Krone", "Turkish Lira", "Euro", "Kazakhstan", "Rand", "South Africa", "Tyrannosaurus Rex", "Triceratops", "Stegosaurus", "Ankylosaurus", "Therizinosaurus", "Brachiosaurus", "Velociraptor", "Spinosaurus", "Hadrosaurus", "Pachycephalosaurus", "Diplodocus", "Spinosaurus", "Dilophosaurus", "Mamenchisaurus", "Ornithomimus", "Iguanodon", "Triceratops", "Velociraptor", "Ankylosaurus", "Giganotosaurus", "United Kingdom", "Japan", "United States", "Canada", "Pakistan", "Bangladesh", "France", "Finland", "Sweden", "China", "Ireland", "Germany", "Canada", "Italy", "New Zealand", "Mexico", "Turkey", "Switzerland", "Wales", "Romania", "Durian", "Japan", "Mozzarella", "Jackfruit", "Mexico", "Natto", "France", "Potato", "South Korea", "Mozzarella", "Switzerland", "Banana", "Spain", "Peanut", "Canada", "Strawberry", "India", "Wheat", "Turkey", "Avocado", "Brazil", "Portuguese", "Japanese", "Korean", "German", "29", "Russian", "Spanish", "Sweden", "Persian", "67", "Arabic", "About 7,000", "Latin", "English", "Papua New Guinea", "Arabic", "11", "Hindi", "Mandarin Chinese", "5", "6", "30", "6", "72", "43", "12", "144", "14", "153", "25", "324", "125", "28", "50", "81", "70", "3.14", "58", "45", "Soccer", "11", "Badminton", "Qatar", "6", "Tennis", "Cricket", "Canada", "5", "Basketball", "Argentina", "Gymnastics", "147", "Cycling", "Japan", "4 years", "Golf", "Brazil", "Ice Hockey", "Gymnastics", "Russia", "Brazil", "Andorra", "Italy", "Egypt", "Japan", "Turkey", "Canada", "New Zealand", "Algeria", "Luxembourg", "Nepal", "Brazil", "India", "Turkey", "Mexico", "Algeria", "China", "Sri Lanka", "Poland"];
let progres = document.getElementById("progres");

let ranqu = Math.floor(
    Math.random()*220
)
let saves = []

let rananswer1 = Math.floor(Math.random() * 4);

let rananswer2 = Math.floor(Math.random() * 4);
while (rananswer2 === rananswer1) {
    rananswer2 = Math.floor(Math.random() * 4);
}

let rananswer3 = Math.floor(Math.random() * 4);
while (rananswer3 === rananswer1 || rananswer3 === rananswer2) {
    rananswer3 = Math.floor(Math.random() * 4);
}

let rananswer4 = Math.floor(Math.random() * 4);
while (
    rananswer4 === rananswer1 ||
    rananswer4 === rananswer2 ||
    rananswer4 === rananswer3
) {
    rananswer4 = Math.floor(Math.random() * 4);
}


function random(){
while (rananswer2 === rananswer1) {
    rananswer2 = Math.floor(Math.random() * 4);
}

while (rananswer3 === rananswer1 || rananswer3 === rananswer2) {
    rananswer3 = Math.floor(Math.random() * 4);
}

while (
    rananswer4 === rananswer1 ||
    rananswer4 === rananswer2 ||
    rananswer4 === rananswer3
) {
    rananswer4 = Math.floor(Math.random() * 4);
}  
}

function backup(){
ranqu = Math.floor(
    Math.random()*220
)
}
function notEqual() {
    while (saves.includes(ranqu)) {
        backup();
    }
}
function checkRightAnswer1(){
    yourAnswer.textContent = `You selected : ${answer1.textContent}`;
userAnswers[level] = answer1.textContent
text[level] = yourAnswer.textContent
}

function checkRightAnswer2(){
    yourAnswer.textContent = `You selected : ${answer2.textContent}`;
userAnswers[level] = answer2.textContent
text[level] = yourAnswer.textContent

}

function checkRightAnswer3(){
    yourAnswer.textContent = `You selected : ${answer3.textContent}`;
userAnswers[level] = answer3.textContent
text[level] = yourAnswer.textContent

}

function checkRightAnswer4(){
    yourAnswer.textContent = `You selected : ${answer4.textContent}`;
userAnswers[level] = answer4.textContent
text[level] = yourAnswer.textContent
}




function NEXTfUNCTION (){


if (saves[level + 1] === undefined) {
    do {
        ranqu = Math.floor(Math.random() * questions.length);
    } while (saves.includes(ranqu));

    saves[level + 1] = ranqu;
}

ranqu = saves[level + 1];



saves[level+1] = ranqu


    progres.textContent = `Level : ${level + 2}/20`
 yourAnswer.textContent = text[level +1]
mainQuestion.textContent = questions[saves[level+1]]
QuestionNum.textContent = `${level+2}.`
answer1.style.display="inline-block"
answer2.style.display="inline-block"
answer3.style.display="inline-block"
answer4.style.display="inline-block"

console.log(saves)

 answer1.textContent = allQuestionAnswers[ranqu][rananswer1];
 answer2.textContent = allQuestionAnswers[ranqu][rananswer2];
 answer3.textContent = allQuestionAnswers[ranqu][rananswer3];
 answer4.textContent = allQuestionAnswers[ranqu][rananswer4];
     answer = answerList[ranqu];
    notEqual()
if(level == 0){
    back.style.display="block"
}
if(level == -1 ){
    back.style.display="none"
}
if(level == 18){
    next.style.display="none"
    finsh.style.display="block"
}

level++
    rananswer1 = Math.floor(Math.random() * 4);
    rananswer2 = Math.floor(Math.random() * 4);
    rananswer3 = Math.floor(Math.random() * 4);
    rananswer4 = Math.floor(Math.random() * 4);
    random()
 console.log(answer)
if (yourAnswer.textContent == ""){
    backup()
}
}









function BACKfUNCTION (){
        yourAnswer.textContent = text[level - 1]
    level--
        progres.textContent = `Level : ${level +1}/20`

mainQuestion.textContent = questions[saves[level]]
QuestionNum.textContent = `${level+1}.`

if (randomPlace === 0) {
    randomAnswer1 = answer.indexOf(answer);
}else if (randomPlace === 1) {
    randomAnswer2 = answer.indexOf(answer);
}else if (randomPlace === 2){
    randomAnswer3 = answer.indexOf(answer);
}else {
    randomAnswer4 = answer.indexOf(answer);
}


 answer1.textContent = allQuestionAnswers[saves[level]][rananswer1] ;
 answer2.textContent = allQuestionAnswers[saves[level]][rananswer2];
 answer3.textContent = allQuestionAnswers[saves[level]][rananswer3];
 answer4.textContent = allQuestionAnswers[saves[level]][rananswer4];



if(level == 18){
    next.style.display="block"
        finsh.style.display="none"

}
if (level == 0){
    back.style.display="none"
}
}

function FINSHfUNCTION(){
    theResult.style.visibility="visible";
   
for (let i = 0; i < 20 ; i++){
    if(userAnswers[i]== answerList[saves[i]]){
        rightAnswers++
        correct.textContent = `correct answers : ${rightAnswers}`
    }else{
        wrongAnswers++
        wrong.textContent = `wrong answers : ${wrongAnswers}`

    }

}
rightAnswers = 0;
wrongAnswers = 0;
}
