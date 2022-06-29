import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "Aston Martin DBS Superleggera",
    price: "$304,995",
    category: "Super Sports",
    img: "/public/Assets/Cars/Aston Martin DBS Superleggera/aston-martin-dbs-superleggera-exterior.jpg",
    description:
      "The V12-powered British coupe is supremely quick, able to hit 60 miles per hour in just 3.4 seconds and top out at a mind-bending 211 miles per hour. It also makes our list of best-looking cars of 2020, for reasons that are obvious to anyone who has eyes.",
  },
  {
    _id: uuid(),
    title: "Bugatti Chiron Super Sport 300+",
    price: "$4 Million",
    category: "Super Sports",
    img: "/public/Assets/Cars/Bugatti Chiron Super Sport 300+/bugatti-chiron-super-sport-300-exterior.jpg",
    description:
      "This is the fastest car in the world. It officially broke the production car speed record in 2019, when it hit 304.8 miles per hour on a closed stretch of road in Nevada. That insane top speed makes the Chiron 300+ more than 27 mph faster than the fastest Koenigsegg and nearly 90 mph faster than the fastest Lambo",
  },
  {
    _id: uuid(),
    title: "Bugatti Divo",
    price: "$5.4 Million",
    category: "Super Sports",
    img: "/public/Assets/Cars/Bugatti Divo/bugatti-divo-exterior.jpg",
    description:
      "Chiron Super Sport 300+, it gets the brand's iconic quad-turbocharged W16 engine capable of 1,479 horsepower and 1,180 pound-feet, giving it a 0 to 60 mile-per-hour sprint of 2.4 seconds and a top speed of 236 miles per hour.",
  },
  {
    _id: uuid(),
    title: "Chevrolet Corvette",
    price: "$58,900",
    category: "Super Sports",
    img: "/public/Assets/Cars/Chevrolet Corvette/chevrolet-corvette-exterior.jpg",
    description:
      "Powering the new Chevrolet Corvette is a 6.2-liter V8 good for 495 horsepower and 465 pound-feet. That means the C8 can sprint to 60 miles per hour in 3.0 seconds flat and on to a top speed of 194 mph. C8 Corvette – it's extremely stylish and performance-oriented",
  },
  {
    _id: uuid(),
    title: "Dodge Charger SRT Hellcat Widebody",
    price: "$71,140",
    category: "Super Sports",
    img: "/public/Assets/Cars/Dodge Charger SRT Hellcat Widebody/dodge-charger-srt-hellcat-widebody-exterior.jpg",
    description:
      "The Charger Hellcat Widebody produces 707 horsepower and 650 pound-feet of torque from its supercharged 6.2-liter V8, giving it the ability to sprint to 60 in 3.6 seconds and on to a top speed of 196 miles per hour. This is one ferocious sedan.",
  },
  {
    _id: uuid(),
    title: "Tesla Model 3 ",
    price: "$37,990",
    category: "Super Sports",
    img: "/public/Assets/Cars/Tesla Model 3/tesla-model-3-exterior.jpg",
    description:
      "Tesla Model 3 might be the best starting point for customers looking for their first battery-powered vehicle. The Tesla Model 3 offers 250 miles of range. But those wanting a bit more show and go can opt for the Long Range model, which starts at $46,990 offers 322 miles of range.",
  },
  {
    _id: uuid(),
    title: "Honda Civic Type R",
    price: "$37,495",
    category: "Seadan & Others",
    img: "/public/Assets/Cars/Honda Civic Type R/honda-civic-type-r-exterior.jpg",
    description:
      "Civic Type R soldiers into 2021 as the unrivaled king (although the Hyundai Veloster N might have something to say about that). With a turbocharged 2.0-liter four-cylinder engine and a slick six-speed manual, the Civic Type R produces 306 horsepower and 295 pound-feet of torque, which lets it run to 60 miles per hour in less than 5.0 seconds.",
  },
  {
    _id: uuid(),
    title: "Hyundai Velostere",
    price: "$18,800",
    category: "Seadan & Others",
    img: "/public/Assets/Cars/Hyundai Veloster/hyundai-veloster-exterior.jpg",
    description:
      "Turbo model offers many of the same thrills as the Veloster N, but at a fraction of the price. And if you do want to go all out on the Veloster N, you can take home the 275-hp hatch for just $27,000. All in all, the Hyundai Veloster is a cool option that's also attainable, which makes it great for young buyers.",
  },
  {
    _id: uuid(),
    title: "Genesis G80",
    price: "$47,700",
    img: "/public/Assets/Cars/Genesis G80/genesis-g80-exterior.jpg",
    category: "Seadan & Others",
    description:
      "It offers either a 2.5-liter inline-four engine good for 300 horsepower and 311 pound-feet, or an optional turbocharged 3.5-liter V6 that produces 375 hp and 391 lb-ft. Pricing and specs aside, it makes our list of coolest cars mainly for its stunning design. Plus it gets an all-new upscale interior with a unique steering wheel, massive 14.5-inch central display, and 12.3-inch digital instrument cluster.",
  },
  {
    _id: uuid(),
    title: "Maserati MC20",
    price: "$210,000",
    category: "Seadan & Others",
    img: "/public/Assets/Cars/Maserati MC20/maserati-mc20-exterior.jpg",
    description:
      "A stunning and stylish two-door, the MC20 gets a twin-turbocharged 3.0-liter V6 with 621 horsepower and 538 pound-feet, giving the sports car a 0-to-62 mile-per-hour sprint of just 2.9 seconds.",
  },
  {
    _id: uuid(),
    title: "Mazda Miata ",
    price: "$26,580",
    img: "/public/Assets/Cars/Mazda Miata/mazda-miata-exterior.jpg",
    category: "Seadan & Others",
    description:
      "With more powerful 2.0-liter engine, now producing 181 horsepower and 151 pound-feet, the Miata is pretty quick, too.The standard Miata soft top starts at $26,580 in the US for the 2020 model year, and the hard-top RF costs $33,045. And both models are great to drive out of the box. But if you want your Miata with a bit more performance, you can always opt for the Brembo / BBS package ($4,670), which tweaks the suspension and adds bolstered Recaro buckets",
  },
  {
    _id: uuid(),
    title: "Mercedes-Benz S-Class ",
    price: "$95,000",
    category: "Seadan & Others",
    img: "/public/Assets/Cars/Mercedes-Benz S-Class/mercedes-benz-s-class-exterior.jpg",
    description:
      "A new 12.8-inch touchscreen is the centerpiece replacing last year's 10.3-inch screen and it replaces 27 knobs and dials from the previous model. There's also a new MBUX infotainment system, an updated voice assistant now capable of recognizing up to 27 different languages, and a 12.3-inch digital instrument cluster. The 2021 Mercedes-Benz S-Class is a technological tour de force.",
  },
  {
    _id: uuid(),
    title: "Subaru BRZ tS",
    price: "$31,495",
    category: "Seadan & Others",
    img: "/public/Assets/Cars/Subaru BRZ tS/subaru-brz-ts-exterior.jpg",
    description:
      "BRZ tS is a more-aggressive take on the two-door, sporting a massive carbon-fiber-reinforced polymer wing, 18-inch black wheels, and red accents draped atop the exterior, plus suspension upgrades that make the car even more agile.",
  },
  {
    _id: uuid(),
    title: "Acura RDX PMC Edition",
    price: "$50,000",
    category: "SUV",
    img: "/public/Assets/Cars/Acura RDX PMC Edition/acura-rdx-pmc-edition-exterior.jpg",
    description:
      "The Acura RDX PMC Edition gets a host of visual upgrades that include 20-inch gloss black alloy wheels, a body-color grille surround, black chrome exhaust finishers, and a stunning Thermal Orange Pearl paint job borrowed from the NSX. Plus it gets the same turbocharged 272-horsepower turbocharged 2.0-liter four-cylinder from the rest of the RDX range.",
  },
  {
    _id: uuid(),
    title: "Bentley Bentayga Speed",
    price: "$245,000",
    category: "SUV",
    img: "/public/Assets/Cars/Bentley Bentayga Speed/bentley-bentayga-speed-exterior.jpg",
    description:
      "It produces 626 horsepower and 664 pound-feet from a massive 6.0-liter W12 engine. That gives the Bentayga a 0-to-60 time of just 3.9 seconds and an unrivaled top speed of 190 miles per hour.",
  },
  {
    _id: uuid(),
    title: "Ford Bronco",
    price: "$28,500",
    category: "SUV",
    img: "/public/Assets/Cars/Ford Bronco/ford-bronco-exterior.jpg",
    description:
      "Complete with retro cues, rugged capabilities, and an optional 2.7-liter V6 EcoBoost engine that makes 310 horsepower and 400 pound-feet. And the new Bronco is certifiably cool. The rugged SUV officially hits dealerships early next year with a starting price of $28,500 for the two-door model, and $33,200 for the four-door.",
  },
  {
    _id: uuid(),
    title: "Ford Mustang Mach-E",
    price: "$42,895",
    category: "SUV",
    img: "/public/Assets/Cars/Ford Mustang Mach-E/ford-mustang-mach-e-exterior.jpg",
    description:
      "The Mustang Mach-E is Ford's first fully electric crossover. And based on our short time with it, the battery-powered SUV does not disappoint. The base Mustang Mach-E gets 266 horsepower and a driving range of up to 230 miles, while the GT model offers a whopping 459 horsepower and can hit 60 in just about 3.5 seconds.",
  },
  {
    _id: uuid(),
    title: "Kia Telluride",
    price: "$31,990",
    category: "SUV",
    img: "/public/Assets/Cars/Kia Telluride/kia-telluride-exterior.jpg",
    description:
      "The Kia Telluride is one of the best three-row crossovers you can buy today. It's nice to drive, upscale inside, and relatively affordable with a starting price of just $31,990. Plus it just looks cool; the boxy, rugged styling gives this family crossover a distinctive, capable look that you won't find anywhere else in the class. The brand-synonymous “tiger nose” grille and upright, rectangular headlights offer a tapered look up front, while the “TELLURIDE” lettering on the trunk gives it a more rugged look.",
  },
  {
    _id: uuid(),
    title: "Lamborghini Urus",
    price: "$207,326",
    category: "SUV",
    img: "/public/Assets/Cars/Lamborghini Urus/lamborghini-urus-exterior.jpg",
    description:
      "The Lamborghini Urus is a high-powered, aggressively styled SUV that just reeks of cool. It can rocket to 60 miles per hour in as little as 3.6 seconds and on to a top speed of 189 miles per hour.",
  },
  {
    _id: uuid(),
    title: "Rolls-Royce Cullinan Black Badge",
    price: "$382,000",
    category: "SUV",
    img: "/public/Assets/Cars/Rolls-Royce Cullinan Black Badge/rolls-royce-cullinan-black-badge-exterior.jpg",
    description:
      "The Black Badge model ups the cool factor with more power, bumping the figure from 573 horses to 600, more style, and a cabin built for a king. The inside of the Rolls-Royce Cullinan Black Badge is opulence defined.",
  },
  {
    _id: uuid(),
    title: "Ford F-150 Raptor",
    price: "$53,455",
    category: "Trucks",
    img: "/public/Assets/Cars/Ford F-150 Raptor/ford-raptor-exterior.jpg",
    description:
      "Powered by a twin-turbocharged 3.5-liter Ecoboost V6 engine, the Raptor produces 450 horsepower and 510 pound-feet of torque, able to propel it to 60 miles per hour in 6.0 seconds flat. Pair that to an off-road focused suspension, knobby off-road tires, and a quick-shifting 10-speed automatic transmission, and the Ford Raptor is capable of taking on any terrain.",
  },
  {
    _id: uuid(),
    title: "Ram TRX",
    price: "$69,995",
    category: "Trucks",
    img: "/public/Assets/Cars/Ram TRX/ram-trx-exterior.jpg",
    description:
      "Supercharged 6.2-liter V8 good 702 horsepower and 650 pound-feet, able to sprint to 60 miles per hour in just 4.5 seconds. Plus it packs Raptor-rivaling levels of off-road capability, including a Dana 60 solid rear axle with an electronic-locking rear differential, and massive 35-inch tall off-road tires. But the Ram TRX is a bit pricier than the rival Raptor.",
  },
  {
    _id: uuid(),
    title: "Rivian R1T",
    price: "$79,900",
    category: "Trucks",
    img: "/public/Assets/Cars/Rivian R1T/rivian-r1t-exterior.jpg",
    description:
      "Rivian R1T looks sharp, offers up to 754 horsepower, and has a unique “Tank Turn” feature that you can't get on any other truck currently",
  },
  {
    _id: uuid(),
    title: "Tesla Cybertruck",
    price: "$39,900",
    category: "Trucks",
    img: "/public/Assets/Cars/Tesla Cybertruck/tesla-cybertruck-exterior.jpg",
    description:
      "The Tesla Cybertruck is not a traditional pickup, but that's what makes it so interesting. With Blade Runner esque styling and a stainless steel exterior, the Cybertruck promises a 0-to-60 time of 2.9 seconds with the tri-motor all-wheel-drive model and a driving range of more than 500 miles. The base single-motor rear-wheel-drive Cybertruck, meanwhile, promises a 0-to-60 time of under 6.5 seconds and a range of 250-plus miles.",
  },
  {
    _id: uuid(),
    title: "Chevrolet Colorado ZR2 Bison",
    price: "$43,995",
    category: "Trucks",
    img: "/public/Assets/Cars/Chevrolet Colorado ZR2 Bison/chevrolet-colorado-zr2-bison.jpg",
    description:
      "The Bison upgrade adds new dampers, increases the ride height by 1.25 inches, and adds meaty 35-inch BFGoodrich KM3 tires. Plus there are two punchy engine options to choose from: either a 3.6-liter V-6 with 308 horsepower and 275 pound-feet or a 2.8-liter turbodiesel capable of 186 horsepower and 369 pound-feet.",
  },
];