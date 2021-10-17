const CONTESTANTS = [
    {
        id: "01",
        fullname: "Blessing Adeoye Jr.",
        from: "Kinda Funny",
        charity: "Black Girls Code",
        picture: "https://pbs.twimg.com/profile_images/1427506586126221322/9XA7W8TQ_400x400.jpg"
    },
    {
        id: "02",
        fullname: "Michael Huber",
        from: "Easy Allies",
        charity: "Cancer Research Institute",
        picture: "https://pbs.twimg.com/profile_images/787405122087170048/7IdbISXh_400x400.jpg"
    },
    {
        id: "03",
        fullname: "Kelsey Lewin",
        from: "Video Game History Foundation",
        charity: "Video Game History Foundation",
        picture: "https://pbs.twimg.com/profile_images/1269781386057023488/brb9q45H_400x400.jpg"
    },
    {
        id: "04",
        fullname: "Andrea Rene",
        from: "What's Good Games",
        charity: "Breast Cancer Research Foundation",
        picture: "https://pbs.twimg.com/profile_images/1448773077936992264/-RbUkc7a_400x400.jpg"
    },
    {
        id: "05",
        fullname: "Tamoor Hussain",
        from: "Gamespot",
        charity: "AbleGamers",
        picture: "https://pbs.twimg.com/profile_images/1286735906066464769/nti1mbr9_400x400.jpg"
    },
    {
        id: "06",
        fullname: "Alex Navarro",
        from: "Nextlander",
        charity: "The Phoenix Theater",
        picture: "https://pbs.twimg.com/profile_images/1400195655319146498/dulpcaLK_400x400.jpg"
    },
    {
        id: "07",
        fullname: "Mary Kish",
        from: "Twitch",
        charity: "St. Jude Children's Research Hospital",
        picture: "https://pbs.twimg.com/profile_images/1356492316203094017/ijIyL_vY_400x400.jpg"
    },
    {
        id: "08",
        fullname: "Marcus Stewart",
        from: "Game Informer",
        charity: "Orlando Dream Center",
        picture: "https://pbs.twimg.com/profile_images/1201603949406642181/Jr50Cxol_400x400.jpg"
    },
    {
        id: "09",
        fullname: "Kyle Bosman",
        from: "Delayed Input",
        charity: "Girls Who Code",
        picture: "https://pbs.twimg.com/profile_images/1258307847068069889/Qky3M15z_400x400.jpg"
    },
    {
        id: "10",
        fullname: "Janet Garcia",
        from: "Pen to Pixels",
        charity: "Black Girls Code",
        picture: "https://pbs.twimg.com/profile_images/1445847194293002244/GOYmR2qW_400x400.jpg"
    },
    {
        id: "11",
        fullname: "Alissa McAloon",
        from: "GameDeveloper.com",
        charity: "AbleGamers",
        picture: "https://pbs.twimg.com/profile_images/1411116630269116422/-REO4Clo_400x400.jpg"
    },
    {
        id: "12",
        fullname: "Imran Khan",
        from: "Fanbyte",
        charity: "Howard Brown Health Services",
        picture: "https://pbs.twimg.com/profile_images/1322960031134879744/aWL2z305_400x400.jpg"
    },
    {
        id: "13",
        fullname: "Jeff Bakalar",
        from: "Giant Bomb",
        charity: "American Stroke Association",
        picture: "https://pbs.twimg.com/profile_images/1179779841643700227/1SYPb3eo_400x400.jpg"
    },
    {
        id: "14",
        fullname: "Kate Sanchez",
        from: "But Why Tho?",
        charity: "St. Jude Children's Research Hospital",
        picture: "https://pbs.twimg.com/profile_images/1448664440958771200/_DVxIvzM_400x400.jpg"
    },
    {
        id: "15",
        fullname: "Dan Ryckert",
        from: "Fire Escape",
        charity: "Brain and Behavior Research Foundation",
        picture: "https://pbs.twimg.com/profile_images/1432119390573576203/T1JFRx5I_400x400.jpg"
    },
    {
        id: "16",
        fullname: "Ty Galiz-Rowe",
        from: "Uppercut",
        charity: "Trans Women of Color Collective",
        picture: "https://pbs.twimg.com/profile_images/1448848530131410944/RDDDVPW6_400x400.jpg"
    },
    {
        id: "17",
        fullname: "Diego Nicolás Arguello",
        from: "Into The Spine",
        charity: "Black Girls Code",
        picture: "https://pbs.twimg.com/profile_images/1437396525244719106/aNz3Xbs9_400x400.jpg"
    },
    {
        id: "18",
        fullname: "Steve Bowling",
        from: "Good Vibes Gaming",
        charity: "The Trevor Project",
        picture: "https://pbs.twimg.com/profile_images/1280285394475483136/fwG29DED_400x400.jpg"
    },
    {
        id: "19",
        fullname: "Kat Bailey",
        from: "IGN",
        charity: "Our Trans Home",
        picture: "https://pbs.twimg.com/profile_images/1379457403427512328/DXCyQ-29_400x400.jpg"
    },
    {
        id: "20",
        fullname: "Samit Sarkar",
        from: "Polygon",
        charity: "Against Malaria Foundation",
        picture: "https://pbs.twimg.com/profile_images/1438670879555215360/UpvNU5P4_400x400.jpg"
    },
    {
        id: "21",
        fullname: "Stephen Totilo",
        from: "Axios",
        charity: "Committee to Protect Journalists",
        picture: "https://pbs.twimg.com/profile_images/1232792542166573060/l2wJN7f-_400x400.jpg"
    },
    {
        id: "22",
        fullname: "Jared Petty",
        from: "The internet",
        charity: "Electronic Frontier Foundation",
        picture: "https://pbs.twimg.com/profile_images/661338714656780288/iwKLExQl_400x400.jpg"
    },
    {
        id: "23",
        fullname: "Rebecca Stone",
        from: "Twinfinite",
        charity: "AbleGamers",
        picture: "https://pbs.twimg.com/profile_images/1246948005514743816/pP81sOI6_400x400.jpg"
    },
    {
        id: "24",
        fullname: "Jeff Grubb",
        from: "Venture Beat",
        charity: "Apraxia Kids",
        picture: "https://pbs.twimg.com/profile_images/1374949172378357762/1GTo3OHp_400x400.jpg"
    },
];

module.exports = { CONTESTANTS };