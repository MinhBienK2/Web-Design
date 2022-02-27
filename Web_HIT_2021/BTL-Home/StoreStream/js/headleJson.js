const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// const users = require('../json/listTrending.json')

const listJsonHeadleJson1 = $('.listJson__headleJson-one')
const listJsonContainerRight1 = $('.listJson__container-right-one')
const listJsonHeadleJson2 = $('.listJson__headleJson-two')
const listJsonContainerRight2 = $('.listJson__container-right-two')
const listJsonHeadleJson3 = $('.listJson__headleJson-three')
const listJsonContainerRight3 = $('.listJson__container-right-three')
const listJsonHeadleJson4 = $('.listJson__headleJson-four')
const listJsonContainerRight4 = $('.listJson__container-right-four')

// one
const leftUsersOne = [
            {
                "id" : 0,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/capsule_184x69.jpg?t=1639472405",
                "title" : "The Chronicles Of Myrtana: Archolos",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 1,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1184760/capsule_184x69.jpg?t=1639420933",
                "title" : "Five Nights at Freddy's: Security Breach",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 2,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/capsule_184x69.jpg?t=1639251301",
                "title" : "Kubifaktorium",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 3,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1467450/capsule_184x69.jpg?t=1639235498",
                "title" : "Milk outside a bag of milk outside ",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 4,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/capsule_184x69.jpg?t=1639072547",
                "title" : "moon: Remix RPG Adventure",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 5,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/capsule_184x69.jpg?t=1639328820",
                "title" : "Praey for the Gods",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 6,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/capsule_184x69.jpg?t=1639472405",
                "title" : "Shovel Knight Pocket Dungeon",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 7,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/capsule_184x69.jpg?t=1638905373",
                "title" : "Bitburner",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" :8,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1138850/capsule_184x69.jpg?t=1638885865",
                "title" : "GTFO",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 9,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/capsule_184x69.jpg?t=1639100251",
                "title" : "Chronicles Of Myrtana",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            }
    ]
const rightUsersOne = [
            { 
                "id_right" : 0,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
                }
            },
            { 
                "id_right" : 1,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_e112280e8f552d2ddff89cc3e673b3f6b9b5c8f3.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8e9e570615f3e64786f41d60dae1480392eaed11.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8595dede43d745341ee3821c3a58d6ef3bcb9797.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_4099845aff88c008271a099f55eacd868dad0461.600x338.jpg"
                }
            },
            { 
                "id_right" : 2,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1467450/ss_8f8a994bd96328302f319199b863a59bef638458.600x338.jpg"
                }
            },
            { 
                "id_right" : 3,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_efc9dce171067cccb1a4e603641f7459a2d49547.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_550d71cb3a80a1613085050200aa5316279e76d1.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_7cbbc976a50063d75972b90dcdc105132ecf319e.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_4b1cede6d9d8a2801f16b06bdc8358e6e728020b.600x338.jpg"
                }
            },
            { 
                "id_right" : 4,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_183b756588307e023d442a63081616160086159c.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_6fdda1946269f2b38663508927b296a982e60fa9.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_e78f8b8c829d2661ced1d9d792f264eb220bf2ed.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_136ae602216b3fabbd0f6210bf129470f2e6c70c.600x338.jpg"
                }
            },
            { 
                "id_right" : 5,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_982bace4d1a04e71e36dec0cc034e044a17f2768.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_664d8dc5d1a93e29e90345c974c919a5dd4503fd.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_15dd1f3ef8a0c66f5de0f018603bbcdef40c615a.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_27309b658ac656cb9b9967db4f0e34aaaebeace2.600x338.jpg"
                }
            },
            { 
                "id_right" : 6,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_2567045f0c6e56442ede487b42dfc803f0dbc368.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_bfba8971a9a3be9809fcc9c0832f536c81d44339.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_a82f77972966b01ca15c929e431f63861fe3f416.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_4c404de6d069c0b90d37e3f5a0796b29c1b1418c.600x338.jpg"
                }
            },
            { 
                "id_right" : 7,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_a2cc00fe5033e200f3d0432690329864e30547bc.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_1a9a3e1b3d92fae5bc2ed8c81ec0ab1058f39d33.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_c7ca8fa702912ab91aeafd7d710d40138d5d389e.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_9ed08cf9293f9c75c2128c9281b4328e4655b078.600x338.jpg"
                }
            },
            { 
                "id_right" : 8,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
                }
            },
            { 
                "id_right" : 9,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_ed9d6d002fa111524b87a395c67f32ade4476bb0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_70a5723b1b1045f298f728a28f56777a9b2ec1e5.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_43e7b7df69f79d7de9e0cb5a426ecc02f1610f15.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_8e97c5c8d8e1eb9cd43ac1bea6f0cc72612224db.600x338.jpg"
                }
            },
           
    ]
// two
const leftUsersTwo = [
            {
                "id" : 0,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/747660/capsule_184x69.jpg?t=1639706417",
                "title" : "Five Nights at Freddy's: Security Breach",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 1,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/524220/capsule_184x69.jpg?t=1624266255",
                "title" : "NieR:Automata™",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 2,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1094520/capsule_184x69.jpg?t=1639648602",
                "title" : "Sands of Salzaar",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 3,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1517290/capsule_184x69.jpg?t=1639701632",
                "title" : "Battlefield™ 2042",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 4,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/capsule_184x69.jpg?t=1639072547",
                "title" : "moon: Remix RPG Adventure",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 5,
                "image" : "https://cdn.akamai.steamstatic.com/steam/bundles/5699/qipqf90z2z7h4x3i/capsule_184x69.jpg?t=1611191314",
                "title" : "Grand Theft Auto V: Premium Edition",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 6,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/capsule_184x69.jpg?t=1639430342",
                "title" : "GTFO",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 7,
                "image" : "https://cdn.akamai.steamstatic.com/steam/apps/1289670/capsule_184x69.jpg?t=1634331719",
                "title" : "EA Play",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" :8,
                "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/261550/capsule_184x69.jpg?t=1626026727",
                "title" : "GTFO",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            },
            {
                "id" : 9,
                "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/493520/capsule_184x69.jpg?t=1639430342",
                "title" : "Chronicles Of Myrtana",
                "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
                "description" : "RPG, Open World, Story Rich, Singleplayer",
                "price" : "Free"
            }
    ]
const rightUsersTwo = [
            { 
                "id_right" : 0,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
                }
            },
            { 
                "id_right" : 1,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_e112280e8f552d2ddff89cc3e673b3f6b9b5c8f3.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8e9e570615f3e64786f41d60dae1480392eaed11.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8595dede43d745341ee3821c3a58d6ef3bcb9797.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_4099845aff88c008271a099f55eacd868dad0461.600x338.jpg"
                }
            },
            { 
                "id_right" : 2,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1467450/ss_8f8a994bd96328302f319199b863a59bef638458.600x338.jpg"
                }
            },
            { 
                "id_right" : 3,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_efc9dce171067cccb1a4e603641f7459a2d49547.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_550d71cb3a80a1613085050200aa5316279e76d1.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_7cbbc976a50063d75972b90dcdc105132ecf319e.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_4b1cede6d9d8a2801f16b06bdc8358e6e728020b.600x338.jpg"
                }
            },
            { 
                "id_right" : 4,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_183b756588307e023d442a63081616160086159c.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_6fdda1946269f2b38663508927b296a982e60fa9.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_e78f8b8c829d2661ced1d9d792f264eb220bf2ed.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_136ae602216b3fabbd0f6210bf129470f2e6c70c.600x338.jpg"
                }
            },
            { 
                "id_right" : 5,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_982bace4d1a04e71e36dec0cc034e044a17f2768.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_664d8dc5d1a93e29e90345c974c919a5dd4503fd.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_15dd1f3ef8a0c66f5de0f018603bbcdef40c615a.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_27309b658ac656cb9b9967db4f0e34aaaebeace2.600x338.jpg"
                }
            },
            { 
                "id_right" : 6,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_2567045f0c6e56442ede487b42dfc803f0dbc368.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_bfba8971a9a3be9809fcc9c0832f536c81d44339.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_a82f77972966b01ca15c929e431f63861fe3f416.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_4c404de6d069c0b90d37e3f5a0796b29c1b1418c.600x338.jpg"
                }
            },
            { 
                "id_right" : 7,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_a2cc00fe5033e200f3d0432690329864e30547bc.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_1a9a3e1b3d92fae5bc2ed8c81ec0ab1058f39d33.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_c7ca8fa702912ab91aeafd7d710d40138d5d389e.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_9ed08cf9293f9c75c2128c9281b4328e4655b078.600x338.jpg"
                }
            },
            { 
                "id_right" : 8,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
                }
            },
            { 
                "id_right" : 9,
                "title" : "The Chronicles Of Myrtana: Archolos",
                "description" : {
                    "descript1" :  "Overall user reviews:",
                    "descript2" :  "Very Positive (22,345)"
                },
                "button" : {
                    "btn1" : "Adventure",
                    "btn2" : "Online Co-Op",
                    "btn3" : "FPS",
                    "btn4" : "Shooter",
                },
                "image" : {
                    "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_ed9d6d002fa111524b87a395c67f32ade4476bb0.600x338.jpg",
                    "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_70a5723b1b1045f298f728a28f56777a9b2ec1e5.600x338.jpg",
                    "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_43e7b7df69f79d7de9e0cb5a426ecc02f1610f15.600x338.jpg",
                    "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_8e97c5c8d8e1eb9cd43ac1bea6f0cc72612224db.600x338.jpg"
                }
            },
           
    ]
// three
const leftUsersThree = [
        {
            "id" : 0,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1203420/capsule_184x69.jpg?t=1639544224",
            "title" : "Miss Neko 2",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 1,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1180320/capsule_184x69.jpg?t=1639624494",
            "title" : " War of the Three Kingdoms",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 2,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1347540/capsule_184x69.jpg?t=1639674729",
            "title" : "Sky Fleet",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 3,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1720090/capsule_184x69.jpg?t=1639578669",
            "title" : "Aspire: Ina's Tale",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 4,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/capsule_184x69.jpg?t=1639703142",
            "title" : "Ready or Not",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 5,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1680000/capsule_184x69.jpg?t=1638562029",
            "title" : "Rewrite+",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 6,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1334780/capsule_184x69.jpg?t=1633662925",
            "title" : "Onsen Master",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 7,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1369670/capsule_184x69.jpg?t=1639707741",
            "title" : "Motor Town: Behind The Wheel",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" :8,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1191800/capsule_184x69.jpg?t=1635984467",
            "title" : "City Block Builder",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 9,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1363740/capsule_184x69.jpg?t=1639337688",
            "title" : "The Troop",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        }
]
const rightUsersThree = [
        { 
            "id_right" : 0,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
            }
        },
        { 
            "id_right" : 1,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_e112280e8f552d2ddff89cc3e673b3f6b9b5c8f3.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8e9e570615f3e64786f41d60dae1480392eaed11.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8595dede43d745341ee3821c3a58d6ef3bcb9797.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_4099845aff88c008271a099f55eacd868dad0461.600x338.jpg"
            }
        },
        { 
            "id_right" : 2,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1467450/ss_8f8a994bd96328302f319199b863a59bef638458.600x338.jpg"
            }
        },
        { 
            "id_right" : 3,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_efc9dce171067cccb1a4e603641f7459a2d49547.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_550d71cb3a80a1613085050200aa5316279e76d1.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_7cbbc976a50063d75972b90dcdc105132ecf319e.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_4b1cede6d9d8a2801f16b06bdc8358e6e728020b.600x338.jpg"
            }
        },
        { 
            "id_right" : 4,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_183b756588307e023d442a63081616160086159c.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_6fdda1946269f2b38663508927b296a982e60fa9.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_e78f8b8c829d2661ced1d9d792f264eb220bf2ed.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_136ae602216b3fabbd0f6210bf129470f2e6c70c.600x338.jpg"
            }
        },
        { 
            "id_right" : 5,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_982bace4d1a04e71e36dec0cc034e044a17f2768.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_664d8dc5d1a93e29e90345c974c919a5dd4503fd.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_15dd1f3ef8a0c66f5de0f018603bbcdef40c615a.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_27309b658ac656cb9b9967db4f0e34aaaebeace2.600x338.jpg"
            }
        },
        { 
            "id_right" : 6,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_2567045f0c6e56442ede487b42dfc803f0dbc368.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_bfba8971a9a3be9809fcc9c0832f536c81d44339.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_a82f77972966b01ca15c929e431f63861fe3f416.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_4c404de6d069c0b90d37e3f5a0796b29c1b1418c.600x338.jpg"
            }
        },
        { 
            "id_right" : 7,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_a2cc00fe5033e200f3d0432690329864e30547bc.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_1a9a3e1b3d92fae5bc2ed8c81ec0ab1058f39d33.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_c7ca8fa702912ab91aeafd7d710d40138d5d389e.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_9ed08cf9293f9c75c2128c9281b4328e4655b078.600x338.jpg"
            }
        },
        { 
            "id_right" : 8,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
            }
        },
        { 
            "id_right" : 9,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_ed9d6d002fa111524b87a395c67f32ade4476bb0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_70a5723b1b1045f298f728a28f56777a9b2ec1e5.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_43e7b7df69f79d7de9e0cb5a426ecc02f1610f15.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_8e97c5c8d8e1eb9cd43ac1bea6f0cc72612224db.600x338.jpg"
            }
        },
       
]
// four
const leftUsersFour = [
        {
            "id" : 0,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/capsule_184x69.jpg?t=1624266255",
            "title" : "NieR:Automata™",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 1,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/613100/capsule_184x69.jpg?t=1639603867",
            "title" : "House Flipper",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 2,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/261550/capsule_184x69.jpg?t=1626026727",
            "title" : "Mount & Blade II: Bannerlord",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 3,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1113560/capsule_184x69.jpg?t=1634745644",
            "title" : "NieR Replicant™ ver.1.22474487139...",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 4,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/capsule_184x69.jpg?t=1639678333",
            "title" : "ARK: Survival Evolved",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 5,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/capsule_184x69.jpg?t=1639701879",
            "title" : "Assassin's Creed® Odyssey",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 6,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/capsule_184x69.jpg?t=1637678523",
            "title" : "Marvel's Guardians of the Galaxy",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 7,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/457140/capsule_184x69_alt_assets_5.jpg?t=1639689037",
            "title" : "Oxygen Not Included",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" :8,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/subs/633707/capsule_184x69.jpg?t=1632328910",
            "title" : "Dying Light Platinum Edition",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        },
        {
            "id" : 9,
            "image" : "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/capsule_184x69.jpg?t=1629997522",
            "title" : "OCTOPATH TRAVELER™",
            "icon" : "https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3",
            "description" : "RPG, Open World, Story Rich, Singleplayer",
            "price" : "Free"
        }
]
const rightUsersFour = [
        { 
            "id_right" : 0,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
            }
        },
        { 
            "id_right" : 1,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_e112280e8f552d2ddff89cc3e673b3f6b9b5c8f3.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8e9e570615f3e64786f41d60dae1480392eaed11.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_8595dede43d745341ee3821c3a58d6ef3bcb9797.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1812820/ss_4099845aff88c008271a099f55eacd868dad0461.600x338.jpg"
            }
        },
        { 
            "id_right" : 2,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1467450/ss_8f8a994bd96328302f319199b863a59bef638458.600x338.jpg"
            }
        },
        { 
            "id_right" : 3,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_efc9dce171067cccb1a4e603641f7459a2d49547.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_550d71cb3a80a1613085050200aa5316279e76d1.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_7cbbc976a50063d75972b90dcdc105132ecf319e.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_4b1cede6d9d8a2801f16b06bdc8358e6e728020b.600x338.jpg"
            }
        },
        { 
            "id_right" : 4,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_183b756588307e023d442a63081616160086159c.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_6fdda1946269f2b38663508927b296a982e60fa9.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_e78f8b8c829d2661ced1d9d792f264eb220bf2ed.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_136ae602216b3fabbd0f6210bf129470f2e6c70c.600x338.jpg"
            }
        },
        { 
            "id_right" : 5,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_982bace4d1a04e71e36dec0cc034e044a17f2768.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_664d8dc5d1a93e29e90345c974c919a5dd4503fd.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_15dd1f3ef8a0c66f5de0f018603bbcdef40c615a.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1814010/ss_27309b658ac656cb9b9967db4f0e34aaaebeace2.600x338.jpg"
            }
        },
        { 
            "id_right" : 6,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_2567045f0c6e56442ede487b42dfc803f0dbc368.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_bfba8971a9a3be9809fcc9c0832f536c81d44339.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_a82f77972966b01ca15c929e431f63861fe3f416.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1580240/ss_4c404de6d069c0b90d37e3f5a0796b29c1b1418c.600x338.jpg"
            }
        },
        { 
            "id_right" : 7,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_a2cc00fe5033e200f3d0432690329864e30547bc.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_1a9a3e1b3d92fae5bc2ed8c81ec0ab1058f39d33.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_c7ca8fa702912ab91aeafd7d710d40138d5d389e.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/1716120/ss_9ed08cf9293f9c75c2128c9281b4328e4655b078.600x338.jpg"
            }
        },
        { 
            "id_right" : 8,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "	https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_381ca89ab003973a39c9b25d693d27c7c8191ca0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_c264e26cc985b733866691fd449b50e116c5d566.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_b5c706abacf932c95851ab3c74ef5555f2151215.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/729000/ss_f01cbdd526860019aa2c05b2a925113f8c3b85d3.600x338.jpg"
            }
        },
        { 
            "id_right" : 9,
            "title" : "The Chronicles Of Myrtana: Archolos",
            "description" : {
                "descript1" :  "Overall user reviews:",
                "descript2" :  "Very Positive (22,345)"
            },
            "button" : {
                "btn1" : "Adventure",
                "btn2" : "Online Co-Op",
                "btn3" : "FPS",
                "btn4" : "Shooter",
            },
            "image" : {
                "img1" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_ed9d6d002fa111524b87a395c67f32ade4476bb0.600x338.jpg",
                "img2" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_70a5723b1b1045f298f728a28f56777a9b2ec1e5.600x338.jpg",
                "img3" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_43e7b7df69f79d7de9e0cb5a426ecc02f1610f15.600x338.jpg",
                "img4" : "https://cdn.akamai.steamstatic.com/steam/apps/494430/ss_8e97c5c8d8e1eb9cd43ac1bea6f0cc72612224db.600x338.jpg"
            }
        },
       
]


// function 
function tabListJson(leftUsers,rightUsers,listJsonHeadleJson,listJsonContainerRight) {
    const headleJson = {
        currentIndex : 0,
        isHover : false,
        render() {
            let htmlRights = leftUsers.map((user,index) => {
                return `
                    <li class ="listJson__headleJson-li ${index == this.currentIndex ? "active" : ""}" data-index ="${index}">
                        <img src="${user.image}" alt="">
                        <div class="listJson__headleJson-li-box">
                            <div class = "tab_item_name">${user.title}</div>
                            <img src="${user.icon}" alt="">
                            <p>${user.description}</p>
                            <p class="listJosn-price">${user.price}</p>
                        </div>
                    </li>
                `
            }).join(' ');
            let htmlLefts = rightUsers.map((user,index) => {
                return `
                    <div class="listJson__box-right ${index===this.currentIndex ?"active":""}" data-index ="${index}">
                        <h2>${user.title}</h2>
                        <div class="fix__width-100pt">
                            <div class = "tab_review_summary fix__width-100pt">
                                <div>${user.description.descript1}</div>
                                <span style="color:#66C0F4;">${user.description.descript2}</span>
                            </div>
                            <div class = "tags">
                                <a href="">${user.button.btn1}</a>
                                <a href="">${user.button.btn2}</a>
                                <a href="">${user.button.btn3}</a>
                                <a href="">${user.button.btn4}</a>
                            </div>
                        </div>
                        <div class="screenshot box__img-one fix__width-100pt" style="background-image: url(${user.image.img1});"></div>
                        <div class="screenshot box__img-two fix__width-100pt" style="background-image: url(${user.image.img2});"></div>
                        <div class="screenshot box__img-three fix__width-100pt" style="background-image: url(${user.image.img3});"></div>
                        <div class="screenshot box__img-four fix__width-100pt" style="background-image: url(${user.image.img4});"></div>
                    </div>
                    `
            }).join(' ');
            listJsonHeadleJson.innerHTML = htmlRights
            listJsonContainerRight.innerHTML = htmlLefts
        },
    
        headleEvent () {
            const _this = this
                listJsonHeadleJson.onmouseover = e => {
                    const subList = e.target.closest(".listJson__headleJson-li")
                    const parents = e.target.closest(".listJson__headleJson")
                    if(subList || parents)
                        if(subList){
                            // _this.currentIndex = Number(subList.getAttribute('data-index'))
                            _this.currentIndex = Number(subList.dataset.index)
                            _this.render() 
                                     
                        }   
                }
                
         },
    
        start(){
            this.render()
            this.headleEvent()
        }
    }
    
    headleJson.start();
}


tabListJson(leftUsersOne,rightUsersOne,listJsonHeadleJson1,listJsonContainerRight1) 
tabListJson(leftUsersTwo,rightUsersTwo,listJsonHeadleJson2,listJsonContainerRight2) 
tabListJson(leftUsersThree,rightUsersThree,listJsonHeadleJson3,listJsonContainerRight3) 
tabListJson(leftUsersFour,rightUsersFour,listJsonHeadleJson4,listJsonContainerRight4) 


// btn click
const bthClick = $$('.btn-outline-primary')
const rowBtnDisplay = $$('.row__btn-display')


function btnClickDisplay () {
    bthClick.forEach((element,index) => {
        element.onclick = e => { 
            rowBtnDisplay.forEach((elementR,indexR) => {
                if(index ==indexR) {
                    elementR.classList.add("active")
                }
                else {
                    elementR.classList.remove("active")
                }
            })
        }
        
    })
}

setTimeout(() => {
    btnClickDisplay()
},1000)

