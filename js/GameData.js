/*************************************************************
GameData.js - the javascript JSON storage for all Game Data
--------------------------------------------------------------
William Plachno - Data Layout
Austin Powers - Data Entry
12/01/2021 - 12/01/2021

--------------------------------------------------------------
*************************************************************/

// Meta Data

// Field -> Example -> Description

// id: "0"   Game Id for Persistence
// yearPublished  "2022"            Published Year
// minPlayers     "1"               Minimun Player Count
// maxPlayers     "5"               Max Plater Count
// minPlaytime    "30"              Minimun Player Count
// maxPlaytime    "75"              Max Plater Count
// age            "10"              Recomended Min Age
// name           "First Rat"       Game Title
/* description    "For generations, the rats in the old junkyard have been 
telling each other the great legend about a moon made out of cheese and they want 
nothing more than to reach this inexhaustible treasure. One day, the little rat children discovered a comic in the junkyard that described the first landing on the moon, and thus the plan was born: Build a rocket and take over the cheese moon!<br/><br/>Fortunately, the junkyard has everything the rats need to build their rocket, and the other animals are willing to support this daring venture &mdash; at least if they're well paid. Of course, all the rats work together to achieve this mighty goal. However, each rat family competes to build the most rocket parts and to train the most rattronauts so they can feast on as much of the lunar cheese as possible.<br/><br/>In First Rat, each player starts with two rats and may raise two more. On your turn, you either move one of your rats 1-5 spaces on the path or move 2-4 of your rats 1-3 spaces each as long as they end up on spaces of the same color. Your rats can never share the same space, and if you land in a space with another player's rat, you must pay them one cheese, borrowing cheese from the back as needed. After movement, you collect resources (cheese, tin cans, apple cores, baking soda, etc.) matching the color of the space you occupy or move your lightbulb along the light string, which will boost your income in future turns. (More lights in the junkyard makes it easier for you to find things!)<br/><br/>If you end movement near a store, you can spend resources to buy a backpack or bottle top &mdash; or you can steal an item instead, with the rat then returning to the start of the movement track. You can also spend resources to build rocket sections (and score points) or spend cheese in bulk as a donation (and score points).<br/><br/>When you pick up apple cores, you move around the rat burrow to pick up comics or stored food or raise one of your rats from the nursery. Alternatively, you automatically get a new rat when one of your rats reaches the launch pad and boards the spaceship. When a player places their fourth rat on the spaceship &mdash; or places their eighth scoring marker on the board &mdash; the game ends, and the player with the most points wins. In the event of a tie, the tied player with the most rattronauts in the rocket wins.<br/><br/>First Rat includes a solo mode as well as variable game set-ups described in the rulebook.<br/><br/>",
*/ 
// ShortDesc      "ShortDesc"       Short Highlight Description
// image          "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__original/img/sxlrsxj497dHDrWywWCKOL_senY=/0x0/filters:format(jpeg)/pic6502612.jpg",
// publisher      ["Pegasus Spiele"]                      List of Publishers
// designer       ["Gabriele Ausiello", "Virginio Gigli"] List of Designers
// artist         ["Dennis Lohausen"]                     List of Artists
// rating         "0"               Game Rating
// rank           "Not Ranked"      Game Rank
// weight         "2"               The Games complexity Rating out of 5
// Genre          "2"               The Id of the Genre Category of the game
// price          "25"              The Games Price is $USD


var Games = [
  {
    id: "0",
    yearPublished: "2022",
    minPlayers: "1",
    maxPlayers: "5",
    minPlaytime: "30",
    maxPlaytime: "75",
    age: "10",
    name: "First Rat",
    description: "For generations, the rats in the old junkyard have been telling each other the great legend about a moon made out of cheese and they want nothing more than to reach this inexhaustible treasure. One day, the little rat children discovered a comic in the junkyard that described the first landing on the moon, and thus the plan was born: Build a rocket and take over the cheese moon!<br/><br/>Fortunately, the junkyard has everything the rats need to build their rocket, and the other animals are willing to support this daring venture &mdash; at least if they're well paid. Of course, all the rats work together to achieve this mighty goal. However, each rat family competes to build the most rocket parts and to train the most rattronauts so they can feast on as much of the lunar cheese as possible.<br/><br/>In First Rat, each player starts with two rats and may raise two more. On your turn, you either move one of your rats 1-5 spaces on the path or move 2-4 of your rats 1-3 spaces each as long as they end up on spaces of the same color. Your rats can never share the same space, and if you land in a space with another player's rat, you must pay them one cheese, borrowing cheese from the back as needed. After movement, you collect resources (cheese, tin cans, apple cores, baking soda, etc.) matching the color of the space you occupy or move your lightbulb along the light string, which will boost your income in future turns. (More lights in the junkyard makes it easier for you to find things!)<br/><br/>If you end movement near a store, you can spend resources to buy a backpack or bottle top &mdash; or you can steal an item instead, with the rat then returning to the start of the movement track. You can also spend resources to build rocket sections (and score points) or spend cheese in bulk as a donation (and score points).<br/><br/>When you pick up apple cores, you move around the rat burrow to pick up comics or stored food or raise one of your rats from the nursery. Alternatively, you automatically get a new rat when one of your rats reaches the launch pad and boards the spaceship. When a player places their fourth rat on the spaceship &mdash; or places their eighth scoring marker on the board &mdash; the game ends, and the player with the most points wins. In the event of a tie, the tied player with the most rattronauts in the rocket wins.<br/><br/>First Rat includes a solo mode as well as variable game set-ups described in the rulebook.<br/><br/>",
    ShortDesc: "Rats collect items for building a rocket.",
    image: "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__original/img/sxlrsxj497dHDrWywWCKOL_senY=/0x0/filters:format(jpeg)/pic6502612.jpg",
    publisher: ["Pegasus Spiele"],
    designer: ["Gabriele Ausiello", "Virginio Gigli"],
    artist: ["Dennis Lohausen"],
    rating: "0",
    rank: "Not Ranked",
    weight: "2",
    Genre: "3",
    price: "39.99"
  }, {
    id: "1",
    yearPublished: "2022",
    minPlayers: "1",
    maxPlayers: "5",
    minPlaytime: "30",
    maxPlaytime: "75",
    age: "10",
    name: "Second Rat",
    description: "For generations, the rats in the old junkyard have been telling each other the great legend about a moon made out of cheese and they want nothing more than to reach this inexhaustible treasure. One day, the little rat children discovered a comic in the junkyard that described the first landing on the moon, and thus the plan was born: Build a rocket and take over the cheese moon!<br/><br/>Fortunately, the junkyard has everything the rats need to build their rocket, and the other animals are willing to support this daring venture &mdash; at least if they're well paid. Of course, all the rats work together to achieve this mighty goal. However, each rat family competes to build the most rocket parts and to train the most rattronauts so they can feast on as much of the lunar cheese as possible.<br/><br/>In First Rat, each player starts with two rats and may raise two more. On your turn, you either move one of your rats 1-5 spaces on the path or move 2-4 of your rats 1-3 spaces each as long as they end up on spaces of the same color. Your rats can never share the same space, and if you land in a space with another player's rat, you must pay them one cheese, borrowing cheese from the back as needed. After movement, you collect resources (cheese, tin cans, apple cores, baking soda, etc.) matching the color of the space you occupy or move your lightbulb along the light string, which will boost your income in future turns. (More lights in the junkyard makes it easier for you to find things!)<br/><br/>If you end movement near a store, you can spend resources to buy a backpack or bottle top &mdash; or you can steal an item instead, with the rat then returning to the start of the movement track. You can also spend resources to build rocket sections (and score points) or spend cheese in bulk as a donation (and score points).<br/><br/>When you pick up apple cores, you move around the rat burrow to pick up comics or stored food or raise one of your rats from the nursery. Alternatively, you automatically get a new rat when one of your rats reaches the launch pad and boards the spaceship. When a player places their fourth rat on the spaceship &mdash; or places their eighth scoring marker on the board &mdash; the game ends, and the player with the most points wins. In the event of a tie, the tied player with the most rattronauts in the rocket wins.<br/><br/>First Rat includes a solo mode as well as variable game set-ups described in the rulebook.<br/><br/>",
    ShortDesc: "Rats collect items for building a rocket.  IN SPPAAACCEEE!",
    image: "https://cf.geekdo-images.com/TAmP5w8gDSXe7APvp8tMVw__original/img/sxlrsxj497dHDrWywWCKOL_senY=/0x0/filters:format(jpeg)/pic6502612.jpg",
    publisher: ["Pegasus Spiele"],
    designer: ["Gabriele Ausiello", "Virginio Gigli"],
    artist: ["Dennis Lohausen"],
    rating: "0",
    rank: "Not Ranked",
    weight: "2",
    Genre: "3",
    price: "39.99"
  }, {
    id: "2",
    yearPublished: "2017",
    minPlayers: "1",
    maxPlayers: "4",
    minPlaytime: "60",
    maxPlaytime: "120",
    age: "14+",
    name: "Gloomhaven",
    description: 'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.' +
    "<br/><br/>" +
    'This is a game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a “Choose Your Own Adventure” book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn.' +
    '<br/><br/>' +
    'Each turn, a player chooses two cards to play out of their hand. The number on the top card determines their initiative for the round. Each card also has a top and bottom power, and when it is a player’s turn in the initiative order, they determine whether to use the top power of one card and the bottom power of the other, or vice-versa. Players must be careful, though, because over time they will permanently lose cards from their hands. If they take too long to clear a dungeon, they may end up exhausted and be forced to retreat.',
    ShortDesc: "Vanquish monsters with strategic cardplay.",
    image: "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepage/img/pBaOL7vV402nn1I5dHsdSKsFHqA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2437871.jpg",
    publisher: ["Cephalofair Games"],
    designer: ["Isaac Childres"],
    artist: ["Alexandr Elichev", "Josh T. McDowell", "Alvaro Nebot"],
    rating: "4.6",
    rank: "1580",
    weight: "2.6",
    Genre: "2",
    price: "140"
  }, {
    id: "3",
    yearPublished: "2015",
    minPlayers: "2",
    maxPlayers: "4",
    minPlaytime: "60",
    maxPlaytime: "60",
    age: "13+",
    name: "Pandemic Legacy: Season 1",
    description: 
    'Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand.' +
    '<br/><br/>' +
    'During a player\'s turn, they have four actions available, with which they may travel around in the world in various ways (sometimes needing to discard a card), build structures like research stations, treat diseases (removing one cube from the board; if all cubes of a color have been removed, the disease has been eradicated), trade cards with other players, or find a cure for a disease (requiring five cards of the same color to be discarded while at a research station). Each player has a unique role with special abilities to help them at these actions.' +
    '<br/><br/>' +
    'After a player has taken their actions, they draw two cards. These cards can include epidemic cards, which will place new disease cubes on the board, and can lead to an outbreak, spreading disease cubes even further. Outbreaks additionally increase the panic level of a city, making that city more expensive to travel to.' +
    '<br/><br/>' +
    'Each month in the game, you have two chances to achieve that month\'s objectives. If you succeed, you win and immediately move on to the next month. If you fail, you have a second chance, with more funding for beneficial event cards.' +
    '<br/><br/>' +
    'During the campaign, new rules and components will be introduced. These will sometimes require you to permanently alter the components of the game; this includes writing on cards, ripping up cards, and placing permanent stickers on components. Your characters can gain new skills, or detrimental effects. A character can even be lost entirely, at which point it\'s no longer available for play.',
    ShortDesc: "Mutating diseases are spreading around the world!",
    image: "https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__imagepage/img/qZybAu8uJ9_sZlU2A65DIF6Y2Zw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2452831.png",
    publisher: ["Z-Man Games"],
    designer: ["Rob Daviau", "Matt Leacock"],
    artist: ["Chris Quilliams"],
    rating: "4.8",
    rank: "5",
    weight: "1.5",
    Genre: "2",
    price: "79.99"
  }, {
    id: "4",
    yearPublished: "2016",
    minPlayers: "1",
    maxPlayers: "5",
    minPlaytime: "120",
    maxPlaytime: "120",
    age: "14+",
    name: "Terraforming Mars",
    description: 
    'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.'+
    '<br/><br/>' +
    'The players acquire unique project cards (from over two hundred different ones) by buying them to their hand. The projects (cards) can represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, to mining the moons of Jupiter and establishing greenhouse gas industries to heat up the atmosphere. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards (3 megacredits per card) and actually playing them (which can cost anything between 0 to 41 megacredits, depending on the project). Standard Projects are always available to complement your cards.',
    ShortDesc: "Compete with rival CEOs to make Mars habitable ",
    image: "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg",
    publisher: ["FryxGames"],
    designer: ["Jacob Fryxelius"],
    artist: ["Isaac Fryxelius"],
    rating: "5",
    rank: "186",
    weight: "3",
    Genre: "3",
    price: "69.95"
  }, {
    id: "5",
    yearPublished: "2018",
    minPlayers: "2",
    maxPlayers: "4",
    minPlaytime: "60",
    maxPlaytime: "120",
    age: "14+",
    name: "Brass: Birmingham",
    description: 
    'Brass: Birmingham is an economic strategy game sequel to Martin Wallace\' 2007 masterpiece, Brass. Brass: Birmingham tells the story of competing entrepreneurs in Birmingham during the industrial revolution, between the years of 1770-1870.'+
    '<br/><br/>' +
'As in its predecessor, you must develop, build, and establish your industries and network, in an effort to exploit low or high market demands.'+
'<br/><br/>' +
'Each round, players take turns according to the turn order track, receiving two actions to perform any of the following actions (found in the original game):'+
'<br/><br/>' +
'1) Build - Pay required resources and place an industry tile.'+
'2) Network - Add a rail / canal link, expanding your network.'+
'3) Develop - Increase the VP value of an industry.'+
'4) Sell - Sell your cotton, manufactured goods and pottery.'+
'5) Loan - Take a £30 loan and reduce your income.',


    ShortDesc: "Build networks, grow industries, and navigate the world",
    image: "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/-17KkOmxbTu2slJTabGrkO8ZW8s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg",
    publisher: ["Roxley"],
    designer: ["Gavan Brown", "Matt Tolman", "Martin Wallace"],
    artist: ["Lina Cossette", "David Forest", "Damien Mammoliti"],
    rating: "3.7",
    rank: "98",
    weight: "4",
    Genre: "3",
    price: "79.99"
  }, {
    id: "6",
    yearPublished: "2016",
    minPlayers: "2",
    maxPlayers: "4",
    minPlaytime: "180",
    maxPlaytime: "240",
    age: "14+",
    name: "Star Wars: Rebellion",
    description: 
    'Star Wars: Rebellion is a board game of epic conflict between the Galactic Empire and Rebel Alliance for two to four players.'+
    '<br/><br/>' +
    'Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and you\'ll need to adjust your play style depending on who you represent:'+
    'As the Imperial player, you can command legions of Stormtroopers, swarms of TIEs, Star Destroyers, and even the Death Star. You rule the galaxy by fear, relying on the power of your massive military to enforce your will. To win the game, you need to snuff out the budding Rebel Alliance by finding its base and obliterating it. Along the way, you can subjugate worlds or even destroy them.'+
    'As the Rebel player, you can command dozens of troopers, T-47 airspeeders, Corellian corvettes, and fighter squadrons. However, these forces are no match for the Imperial military. In terms of raw strength, you\'ll find yourself clearly overmatched from the very outset, so you\'ll need to rally the planets to join your cause and execute targeted military strikes to sabotage Imperial build yards and steal valuable intelligence. To win the Galactic Civil War, you\'ll need to sway the galaxy\'s citizens to your cause. If you survive long enough and strengthen your reputation, you inspire the galaxy to a full-scale revolt, and you win.',

    ShortDesc: "Strike from your hidden base as the Rebels",
    image: "https://cf.geekdo-images.com/7SrPNGBKg9IIsP4UQpOi8g__imagepage/img/89ViRUkHkCJhvZA5fay7A9-46mY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4325841.jpg",
    publisher: ["Fantasy Flight Games"],
    designer: ["Corey Konieczka"],
    artist: ["Matt Allsopp", "David Ardila", "Balaskas", "Tiziano Baracchi"],
    rating: "3.9",
    rank: "168",
    weight: "3",
    Genre: "3",
    price: "109.99"
  }, {
    id: "7",
    yearPublished: "2017",
    minPlayers: "1",
    maxPlayers: "4",
    minPlaytime: "60",
    maxPlaytime: "150",
    age: "14+",
    name: "Gaia Project",
    description: 
    'Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. In addition, Gaia planets can be used by all factions for colonization, and Transdimensional planets can be changed into Gaia planets.'+
    '<br/><br/>' +

    'All factions can improve their skills in six different areas of development — Terraforming, Navigation, Artificial Intelligence, Gaiaforming, Economy, Research — leading to advanced technology and special bonuses. To do all of that, each group has special skills and abilities.'+
    '<br/><br/>' +

    'The playing area is made of ten sectors, allowing a variable set-up and thus an even bigger replay value than its predecessor Terra Mystica. A two-player game is hosted on seven sectors.',
    ShortDesc: "Expand, research, upgrade, and settle the galaxy",
    image: "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__imagepage/img/l0fffSKu6wscHhUNGWRh-0n-bqQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5375625.png",
    publisher: ["Feuerland Spiele"],
    designer: ["Jens Drögemüller", "Helge Ostertag"],
    artist: ["Dennis Lohausen"],
    rating: "4.2",
    rank: "9",
    weight: "1",
    Genre: "3",
    price: "99.99"
  }, {
    id: "8",
    yearPublished: "2020",
    minPlayers: "2",
    maxPlayers: "6",
    minPlaytime: "30",
    maxPlaytime: "45",
    age: "10",
    name: "Mysterium Park",
    description: 
    'Welcome to Mysterium Park!<br/>Its cotton candies, its circus, its dark secrets...<br/><br/>The park&rsquo;s former director has disappeared, but the investigation came to nothing. Since that night, weird things are happening on the fairground. As psychics, you&rsquo;re convinced that a ghost haunts this carnival... You&rsquo;re now intent on giving it a chance to reveal the truth.<br/><br/>In this cooperative stand-alone game, the ghost sends visions with illustrated cards. The psychics try to interpret them in order to rule out certain suspects and locations. Then, they&rsquo;ll seize their only chance to piece together what happened to the director. You have only six nights before the carnival leaves town... Open your minds and find the truth!<br/><br/>Set in the lights of a 1950\'s US fairground, Mysterium Park shares the same core mechanism with the famous award-winning game it reimplements, though bringing a different approach: it is smaller and faster, thanks to very quick setup and simplified rules.<br/><br/>Mysterium is a milestone in immersive and eye-catching experiences close to role-playing; with Mysterium Park, you can enjoy the heart of it in a more condensed way.<br/><br/>Mysterium Park will be released at the end of 2020.<br/><br/>&mdash; description from the publisher<br/><br/>',
    ShortDesc: "There was a murder at the carnival, and you and your firend must solve it!",
    image: "https://cf.geekdo-images.com/U2CYPYgIEC1cLF45Rh0UGw__original/img/472oJ1mqGHWxFxuOsnXFiZBshUc=/0x0/filters:format(jpeg)/pic5581038.jpg",
    publisher: ["Libellud", "Publisher"],
    designer: ["Oleksandr Nevskiy", "Oleg Sidorenko"],
    artist: ["Xavier Collette"],
    rating: "7.34",
    rank: "1237",
    weight: "1.53",
    Genre: "1",
    price: "29.99"
  }, {
    id: "9",
    yearPublished: "2021",
    minPlayers: "1",
    maxPlayers: "4",
    minPlaytime: "30",
    maxPlaytime: "45",
    age: "10",
    name: "Cascadia",
    description: 
    'Cascadia is a puzzly tile-laying and token-drafting game featuring the habitats and wildlife of the Pacific Northwest.<br/><br/>In the game, you take turns building out your own terrain area and populating it with wildlife. You start with three hexagonal habitat tiles (with five types of habitat in the game), and on a turn you choose a new habitat tile that\'s paired with a wildlife token, then place that tile next to your other ones and place the wildlife token on an appropriate habitat. (Each tile depicts 1-3 types of wildlife from the five types in the game, and you can place at most one tile on a habitat.) Four tiles are on display, with each tile being paired at random with a wildlife token, so you must make the best of what\'s available &mdash; unless you have a nature token to spend so that you can pick your choice of each item.<br/><br/>Ideally you can place habitat tiles to create matching terrain that reduces fragmentation and creates wildlife corridors, mostly because you score for the largest area of each type of habitat at game\'s end, with a bonus if your group is larger than each other player\'s. At the same time, you want to place wildlife tokens so that you can maximize the number of points scored by them, with the wildlife goals being determined at random by one of the three scoring cards for each type of wildlife. Maybe hawks want to be separate from other hawks, while foxes want lots of different animals surrounding them and bears want to be in pairs. Can you make it happen?<br/><br/>',
    ShortDesc: "Build your habitats to best feed the wildlife!",
    image: "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__original/img/B374C04Eip7fmQBGJzgiOTp-jyQ=/0x0/filters:format(jpeg)/pic5100691.jpg",
    publisher: ["Flatout Games", "Alderac Entertainment Group"],
    designer: ["Randy Flynn"],
    artist: ["Beth Sobel"],
    rating: "8.05",
    rank: "255",
    weight: "1.99",
    Genre: "3",
    price: "49.99"
  }
  
  ];
