// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
const changeCssHeaderNav = $$('.accordion-header');
const needCssHeaderNav = $$('.accordion-button')
const accordionCollapse = $$('.accordion-collapse')
// điều kiện
let isClickHeaderNav = false;
function clickChangeCSSHeader() {
    changeCssHeaderNav.forEach((ele,index) => {
        ele.onclick = e => {
            if(!isClickHeaderNav){
                isClickHeaderNav = true
                needCssHeaderNav[index].style.color = '#ffffff';
                needCssHeaderNav[index].style.backgroundColor = '#192533';
                accordionCollapse[index].style.backgroundColor = '#192533';
            }
            else {
                isClickHeaderNav =false
                needCssHeaderNav[index].style.color = '#bdbdbd';
                needCssHeaderNav[index].style.backgroundColor = 'rgb(43, 42, 42)';
                accordionCollapse[index].style.backgroundColor = 'rgb(43, 42, 42)'; 
            }
        }
    })
}

clickChangeCSSHeader();



// FEATURED & RECOMMENDED
const hoverImgDisplayMain = $$('.hover__img-display-main')
const hoverImgDisplay = $$('.hover__img-display')
const imageHover = $$('.hover__img-display-main img')
const gridRightImg = $$('.grid-right__img')
gridRightImg.forEach(ele => {

    console.log(ele)
})

function mainOne() {
    const hoverImage = {
        users : [
            {
                id:4,
                image:"https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_6d4e3b1021a489106f33c054bcb0e74ea4bd706f.600x338.jpg"
            },
            {
                id:5,
                image:"https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_79af6b4e7ea15b745c0c315e4ae8f7450bb64f58.600x338.jpg"
            },
            {
                id:6,
                image:"https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_0d619a68898400c9cd59b1afa2e36bd50f12d0b5.600x338.jpg"
            },
            {
                id:7,
                image:"https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_2f720e4694ba324ee6036a4ce8595a839de3f185.600x338.jpg"
            },
            {
                id:8,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/261550/ss_5405bdd8c041e200facb76908526cca961d9182e.600x338.jpg"
            },
            {
                id:9,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/261550/ss_f68f7f8b7d79ecf0bc2722d183c3a7a5fb615c08.600x338.jpg"
            },
            {
                id:10,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/261550/ss_cadb093dde983c31817e5aa910f4757c794eecc1.600x338.jpg"
            },
            {
                id:11,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/261550/ss_6ceae32c7c024b21eabe51569a31bb02d13ab640.600x338.jpg"
            },
            {
                id:12,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_1487c2c7ddd9a1ae6b55f7e50d5d63ada6915921.600x338.jpg"
            },
            {
                id:13,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/771300/ss_a39f019c1620b1d173967ac8c7f5d9c9cb445a00.600x338.jpg"
            },
            {
                id:14,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_e929649b2b98ad76795d92d8489470bc5dbffddb.600x338.jpg"
            },
            {
                id:15,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/771300/ss_b6029ebf7f934c995179e91d37c911d04d875704.600x338.jpg"
            },
            {
                id:16,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1094520/ss_ba450633927e8bbd555a888e7a659df2f909a62f.600x338.jpg"
            },
            {
                id:17,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1094520/ss_b3bc191e5a8e208fb3931e49838b2f405e6004ed.600x338.jpg"
            },
            {
                id:18,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1094520/ss_7586aad8db6403cdf56ead4645880d206ccc1184.600x338.jpg"
            },
            {
                id:19,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1094520/ss_75b72474a3c182588161eff8da0516bd33b48b96.600x338.jpg"
            },
            {
                id:20,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1517290/ss_359ba55164486c529df9e9b2c0eee6bd3967baf7.600x338.jpg"
            },
            {
                id:21,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1517290/ss_266fb5de64cdffb8e3261a771d32ba8edd5d5259.600x338.jpg"
            },
            {
                id:22,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1517290/ss_8343a3ea65031a2721447f57fd9447decb504051.600x338.jpg"
            },
            {
                id:23,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1517290/ss_d686299d32a8ff3c21114360fb73c7d9f60c0c0b.600x338.jpg"
            },
            {
                id:24,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_4b1cede6d9d8a2801f16b06bdc8358e6e728020b.600x338.jpg"
            },
            {
                id:25,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_efc9dce171067cccb1a4e603641f7459a2d49547.600x338.jpg"
            },
            {
                id:26,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_7cbbc976a50063d75972b90dcdc105132ecf319e.600x338.jpg"
            },
            {
                id:27,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/493520/ss_550d71cb3a80a1613085050200aa5316279e76d1.600x338.jpg"
            },
            {
                id:28,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.600x338.jpg"
            },
            {
                id:29,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3e556415d1bda00d749b2166ced264bec76f06ee.600x338.jpg"
            },
            {
                id:30,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg"
            },
            {
                id:31,
                image:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_25cd489871907387c1b915022a96b196661b6e17.600x338.jpg"
            }
        ],
        headleEvent() {
            const _this = this
            hoverImgDisplay.forEach((ele,index) => {
                ele.onmouseover = (e) => {
                    hoverImgDisplayMain.forEach((eleB,indexB) => {
                        eleB.style.background = `
                            url(${_this.users.filter(eleU => {
                                if(eleU.id ==index)
                                    return eleU
                            })[0].image}) center / cover no-repeat`;
                        eleB.style.height = "353px";
                    })
                    imageHover.forEach(img => {
                        img.style.display = "none"
                    })
                }
            })
            gridRightImg.forEach((ele,index) => {
                ele.onmouseout = (e) => {
                    imageHover.forEach(img => {
                        img.style.display = "block"
                    })
                }
            })
        },
        start(){
            this.headleEvent();
            const test = this.users.filter(ele => {
                if(ele.id ==4)
                    return ele
                // console.log(typeof ele.id)
            })
            console.log(test[0].image)
        }
    }

    hoverImage.start()
}

mainOne()
