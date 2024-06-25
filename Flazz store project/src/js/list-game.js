// Data + Render
const data = [
  {
    id: 1,
    nama: 'Mobile Legends: Bang Bang',
    perusahaan: 'Moonton',
    satuan: 'Diamonds',
    image: '../img/ML.jpg',
    background: '../img/Bg-ML.jpg',
    itemImage: '../img/Diamond.png',
    nominal: [
      {
        jumlah: 100,
        harga: 20000,
      },
      {
        jumlah: 200,
        harga: 30000,
      },
      {
        jumlah: 300,
        harga: 40000,
      },
      {
        jumlah: 400,
        harga: 50000,
      },
      {
        jumlah: 500,
        harga: 60000,
      },
      {
        jumlah: 600,
        harga: 70000,
      },
      {
        jumlah: 700,
        harga: 80000,
      },
      {
        jumlah: 800,
        harga: 90000,
      },
    ],
  },
  {
    id: 2,
    nama: 'Free Fire',
    perusahaan: 'Garena',
    satuan: 'Diamonds',
    image: '../img/FF.png',
    background: '../img/Bg-FF.jpg',
    itemImage: '../img/Freefire_diamonds.png',
    nominal: [
      {
        jumlah: 100,
        harga: 19000,
      },
      {
        jumlah: 210,
        harga: 39000,
      },
      {
        jumlah: 355,
        harga: 59000,
      },
      {
        jumlah: 545,
        harga: 99000,
      },
      {
        jumlah: 725,
        harga: 129000,
      },
      {
        jumlah: 1080,
        harga: 199000,
      },
    ],
  },
  {
    id: 3,
    nama: 'PUBG Mobile',
    perusahaan: 'PUBG Corporation',
    satuan: 'Unknown Cash (UC)',
    image: '../img/PUBGM.jpg',
    background: '../img/Bg-PUBGM.jpg',
    itemImage: '../img/PUBGM-UC.png',
    nominal: [
      {
        jumlah: 60,
        harga: 4900,
      },
      {
        jumlah: 600,
        harga: 49000,
      },
      {
        jumlah: 1500,
        harga: 99000,
      },
      {
        jumlah: 3000,
        harga: 199000,
      },
      {
        jumlah: 6000,
        harga: 399000,
      },
      {
        jumlah: 8100,
        harga: 499000,
      },
    ],
  },
  {
    id: 4,
    nama: 'Genshin Impact',
    perusahaan: 'miHoYo',
    satuan: 'Genesis Crystals',
    image: '../img/Genshin.webp',
    background: '../img/Bg-Genshin.webp',
    itemImage: '../img/Genshin-Diamond.png',
    nominal: [
      {
        jumlah: 60,
        harga: 1000,
      },
      {
        jumlah: 300,
        harga: 4800,
      },
      {
        jumlah: 980,
        harga: 14800,
      },
      {
        jumlah: 1980,
        harga: 29800,
      },
      {
        jumlah: 3280,
        harga: 48800,
      },
      {
        jumlah: 6480,
        harga: 96800,
      },
    ],
  },
  {
    id: 5,
    nama: 'Call of Duty: Mobile',
    perusahaan: 'Activision',
    satuan: 'CP (Call of Duty Points)',
    image: '../img/CODM.webp',
    background: '../img/Bg-CODM.jpg',
    itemImage: '../img/CallofDuty_CP.png',
    nominal: [
      { jumlah: 80, harga: 990 },
      {
        jumlah: 400,
        harga: 4900,
      },
      {
        jumlah: 800,
        harga: 9900,
      },
      {
        jumlah: 2000,
        harga: 24900,
      },
      {
        jumlah: 4000,
        harga: 49900,
      },
      {
        jumlah: 8000,
        harga: 99900,
      },
    ],
  },
  {
    id: 6,
    nama: 'Honkai Impact 3rd',
    perusahaan: 'miHoYo',
    satuan: 'Crystals',
    image: '../img/Honkai.webp',
    background: '../img/Bg-Honkai.png',
    itemImage: '../img/Honkai-crystal.png',
    nominal: [
      {
        jumlah: 60,
        harga: 1000,
      },
      {
        jumlah: 300,
        harga: 4800,
      },
      {
        jumlah: 980,
        harga: 14800,
      },
      {
        jumlah: 1980,
        harga: 29800,
      },
      {
        jumlah: 3280,
        harga: 48800,
      },
      {
        jumlah: 6480,
        harga: 96800,
      },
    ],
  },
  {
    id: 7,
    nama: 'Clash of Clans',
    perusahaan: 'Supercell',
    satuan: 'Gems',
    image: '../img/Coc.jpg',
    background: '../img/Bg-coc.jpg',
    itemImage: '../img/Coc_gems.png',
    nominal: [
      {
        jumlah: 500,
        harga: 4200,
      },
      {
        jumlah: 1200,
        harga: 9900,
      },
      {
        jumlah: 2500,
        harga: 19900,
      },
      {
        jumlah: 6500,
        harga: 49900,
      },
      {
        jumlah: 14000,
        harga: 99000,
      },
      {
        jumlah: 30000,
        harga: 199000,
      },
    ],
  },
  {
    id: 8,
    nama: 'Clash Royale',
    perusahaan: 'Supercell',
    satuan: 'Gems',
    image: '../img/CR.jpg',
    background: '../img/Bg-Cr.jpg',
    itemImage: '../img/CR_Gems.png',
    nominal: [
      { jumlah: 80, harga: 10000 },
      { jumlah: 170, harga: 20000 },
      { jumlah: 250, harga: 30000 },
      { jumlah: 650, harga: 80000 },
      { jumlah: 1400, harga: 160000 },
      { jumlah: 6500, harga: 750000 },
    ],
  },
  {
    id: 9,
    nama: 'Arena of Valor (AOV)',
    perusahaan: 'Tencent Games',
    satuan: 'Vouchers',
    image: '../img/AOV.jpg',
    background: '../img/Bg-AOV.jpg',
    itemImage: '../img/AOV_Voucher.png',
    nominal: [
      { jumlah: 50, harga: 10000 },
      { jumlah: 100, harga: 20000 },
      { jumlah: 200, harga: 40000 },
      { jumlah: 400, harga: 80000 },
      { jumlah: 800, harga: 160000 },
    ],
  },
  {
    id: 10,
    nama: 'FIFA Mobile',
    perusahaan: 'EA Sports',
    satuan: 'FIFA Points',
    image: '../img/FIFA.jpg',
    background: '../img/Bg-FIFA.jpg',
    itemImage: '../img/FIFA_P.png',
    nominal: [
      { jumlah: 500, harga: 10000 },
      { jumlah: 1050, harga: 20000 },
      { jumlah: 2200, harga: 40000 },
      { jumlah: 4600, harga: 80000 },
      { jumlah: 12000, harga: 200000 },
    ],
  },
  {
    id: 11,
    nama: 'Garena Speed Drifters',
    perusahaan: 'Garena',
    satuan: 'Diamonds',
    image: '../img/Speedrifter.jpg',
    background: '../img/Bg-speed.jpg',
    itemImage: '../img/SPEEDDRIFTERS_Diamonds.png',
    nominal: [
      { jumlah: 120, harga: 10000 },
      { jumlah: 250, harga: 20000 },
      { jumlah: 530, harga: 40000 },
      { jumlah: 1100, harga: 80000 },
      { jumlah: 2300, harga: 160000 },
    ],
  },
  {
    id: 12,
    nama: 'Ragnarok M: Eternal Love',
    perusahaan: 'Gravity Interactive',
    satuan: 'Big Cat Coins',
    image: '../img/Ragnarok M_Eternal Love_logo.png',
    background: '../img/Ragnarok M_Eternal Love_BG.jpg',
    itemImage: '../img/ROM_coins.png',
    nominal: [
      { jumlah: 60, harga: 10000 },
      { jumlah: 300, harga: 50000 },
      { jumlah: 680, harga: 100000 },
      { jumlah: 1280, harga: 180000 },
      { jumlah: 3280, harga: 450000 },
    ],
  },
  {
    id: 13,
    nama: 'Laplace M',
    perusahaan: 'ZlongGames',
    satuan: 'Diamonds',
    image: '../img/Laplace M_logo.png',
    background: '../img/Laplace M_BG.png',
    itemImage: '',
    nominal: [
      { jumlah: 100, harga: 10000 },
      { jumlah: 300, harga: 30000 },
      { jumlah: 680, harga: 60000 },
      { jumlah: 1280, harga: 100000 },
    ],
  },
  {
    id: 14,
    nama: 'Rise of Kingdoms',
    perusahaan: 'Lilith Games',
    satuan: 'Gems',
    image: '../img/Rise of Kingdoms_logo.png',
    background: '../img/Rise of Kingfoms__BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 600, harga: 10000 },
      { jumlah: 1200, harga: 20000 },
      { jumlah: 2500, harga: 40000 },
      { jumlah: 6500, harga: 100000 },
    ],
  },
  {
    id: 15,
    nama: 'Dragon Raja',
    perusahaan: 'Archosaur Games',
    satuan: 'Gems',
    image: '../img/Dragon Raja_logo.png',
    background: '../img/Dragon Raja_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 300, harga: 10000 },
      { jumlah: 680, harga: 20000 },
      { jumlah: 1680, harga: 50000 },
      { jumlah: 3280, harga: 100000 },
    ],
  },
  {
    id: 16,
    nama: 'State of Survival',
    perusahaan: 'KingsGroup Holdings',
    satuan: 'Biocaps',
    image: '../img/State of Survival_logo.png',
    background: '../img/State of Survival_BG2.png',
    itemImage: '../img/SOS_diamond.png',
    nominal: [
      { jumlah: 500, harga: 10000 },
      { jumlah: 1100, harga: 20000 },
      { jumlah: 2400, harga: 40000 },
      { jumlah: 6100, harga: 100000 },
    ],
  },
  {
    id: 17,
    nama: 'Brawl Stars',
    perusahaan: 'Supercell',
    satuan: 'Gems',
    image: '../img/Brawl Stars_logo.png',
    background: '../img/Brawl Stars_BG2.png',
    itemImage: '../img/BrawlStars_Gems.png',
    nominal: [
      { jumlah: 80, harga: 10000 },
      { jumlah: 170, harga: 20000 },
      { jumlah: 350, harga: 40000 },
      { jumlah: 900, harga: 100000 },
    ],
  },
  {
    id: 18,
    nama: 'Lineage 2: Revolution',
    perusahaan: 'Netmarble',
    satuan: 'Red Diamonds',
    image: '../img/Lineage 2_Revolution_logo.png',
    background: '../img/Lineage 2_Revolution_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 1200, harga: 10000 },
      { jumlah: 2500, harga: 20000 },
      { jumlah: 5500, harga: 40000 },
      { jumlah: 12000, harga: 80000 },
    ],
  },
  {
    id: 19,
    nama: 'Lords Mobile',
    perusahaan: 'IGG',
    satuan: 'Gems',
    image: '../img/Lords Mobile_logo.png',
    background: '../img/Lords Mobile_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 800, harga: 10000 },
      { jumlah: 1800, harga: 20000 },
      { jumlah: 3800, harga: 40000 },
      { jumlah: 9800, harga: 100000 },
    ],
  },
  {
    id: 20,
    nama: 'Brave Frontier',
    perusahaan: 'gumi Inc.',
    satuan: 'Gems',
    image: '../img/Brave Frontier_logo.png',
    background: '../img/Brave Frontier_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 24, harga: 10000 },
      { jumlah: 50, harga: 20000 },
      { jumlah: 100, harga: 40000 },
      { jumlah: 150, harga: 60000 },
    ],
  },
  {
    id: 21,
    nama: 'Summoners War',
    perusahaan: 'Com2uS',
    satuan: 'Crystals',
    image: '../img/Summoners War_logo.png',
    background: '../img/Summoners War_BG1.png',
    itemImage: '',
    nominal: [
      { jumlah: 100, harga: 10000 },
      { jumlah: 300, harga: 30000 },
      { jumlah: 750, harga: 75000 },
      { jumlah: 1350, harga: 120000 },
    ],
  },
  {
    id: 22,
    nama: 'Idle Heroes',
    perusahaan: 'DHGames',
    satuan: 'Gems',
    image: '../img/Idle Heroes_logo.png',
    background: '../img/Idle Heroes_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 500, harga: 10000 },
      { jumlah: 1100, harga: 20000 },
      { jumlah: 2400, harga: 40000 },
      { jumlah: 6500, harga: 100000 },
    ],
  },
  {
    id: 23,
    nama: 'Saint Seiya: Awakening',
    perusahaan: 'Yoozoo Games',
    satuan: 'Diamonds',
    image: '../img/Saint Seiya_Awakening_logo.png',
    background: '../img/Saint Seiya_Awakening_BG2.png',
    itemImage: '',
    nominal: [
      { jumlah: 100, harga: 10000 },
      { jumlah: 300, harga: 30000 },
      { jumlah: 680, harga: 70000 },
      { jumlah: 1280, harga: 130000 },
    ],
  },
  {
    id: 24,
    nama: 'Dota 2',
    perusahaan: 'Valve',
    satuan: 'Steam Wallet',
    image: '../gambar22/Dota 2_logo.jpg',
    background: '../gambar22/Dota 2_BG1.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 5, harga: 499 },
      { jumlah: 10, harga: 999 },
      { jumlah: 20, harga: 1999 },
      { jumlah: 50, harga: 4999 },
      { jumlah: 100, harga: 9999 },
      { jumlah: 200, harga: 19999 },
    ],
  },
  {
    id: 25,
    nama: 'Counter-Strike: Global Offensive (CS: GO)',
    perusahaan: 'Valve',
    satuan: 'Steam Wallet',
    image: '../gambar22/CSGO_logo.jpg',
    background: '../gambar22/CSGO_BG1.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 5, harga: 499 },
      { jumlah: 10, harga: 999 },
      { jumlah: 20, harga: 1999 },
      { jumlah: 50, harga: 4999 },
      { jumlah: 100, harga: 9999 },
      { jumlah: 200, harga: 19999 },
    ],
  },
  {
    id: 26,
    nama: 'League of Legends',
    perusahaan: 'Riot Games',
    satuan: 'RP (Riot Points)',
    image: '../gambar22/League of Legends_logo.jpg',
    background: '../gambar22/League of Legends_BG1.jpg',
    itemImage: '../img/LOL_RP.png',
    nominal: [
      { jumlah: 650, harga: 5000 },
      { jumlah: 1380, harga: 10000 },
      { jumlah: 2800, harga: 20000 },
      { jumlah: 5000, harga: 35000 },
      { jumlah: 7200, harga: 50000 },
      { jumlah: 15000, harga: 100000 },
    ],
  },
  {
    id: 27,
    nama: 'Fortnite',
    perusahaan: 'Epic Games',
    satuan: 'V-Bucks',
    image: '../gambar22/Fortnite_logo.jpg',
    background: '../gambar22/Fortnite_BG2.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 1000, harga: 799 },
      { jumlah: 2800, harga: 2399 },
      { jumlah: 5000, harga: 3999 },
      { jumlah: 13500, harga: 9999 },
      { jumlah: 28000, harga: 19999 },
      { jumlah: 135000, harga: 79999 },
    ],
  },
  {
    id: 28,
    nama: 'Valorant',
    perusahaan: 'Riot Games',
    satuan: 'Valorant Points',
    image: '../gambar22/Valorant_logo.jpg',
    background: '../gambar22/Valorant_BG1.jpg',
    itemImage: '../img/VALORANT_Points.png',
    nominal: [
      { jumlah: 475, harga: 499 },
      { jumlah: 1000, harga: 999 },
      { jumlah: 2050, harga: 1999 },
      { jumlah: 4200, harga: 3999 },
      { jumlah: 11000, harga: 9999 },
    ],
  },
  {
    id: 29,
    nama: 'Apex Legends',
    perusahaan: 'Respawn Entertainment',
    satuan: 'Apex Coins',
    image: '../gambar22/Apex Legends_logo.jpg',
    background: '../gambar22/Apex Legends_BG2.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 1000, harga: 999 },
      { jumlah: 2150, harga: 1999 },
      { jumlah: 4350, harga: 3999 },
      { jumlah: 6700, harga: 5999 },
      { jumlah: 11500, harga: 9999 },
    ],
  },
  {
    id: 30,
    nama: 'World of Warcraft',
    perusahaan: 'Blizzard Entertainment',
    satuan: 'WoW Tokens',
    image: '../gambar22/World of Warcraft_logo.jpg',
    background: '../gambar22/World of Warcraft_BG2.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 1, harga: 20000 },
      { jumlah: 2, harga: 40000 },
      { jumlah: 6, harga: 120000 },
      { jumlah: 12, harga: 240000 },
      { jumlah: 25, harga: 500000 },
    ],
  },
  {
    id: 31,
    nama: 'Overwatch',
    perusahaan: 'Blizzard Entertainment',
    satuan: 'Credits',
    image: '../gambar22/OverWatch_logo.jpg',
    background: '../gambar22/OverWatch_BG2.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 2, harga: 200 },
      { jumlah: 5, harga: 500 },
      { jumlah: 11, harga: 1000 },
      { jumlah: 24, harga: 2000 },
      { jumlah: 50, harga: 4000 },
    ],
  },
  {
    id: 32,
    nama: 'Final Fantasy XIV',
    perusahaan: 'Square Enix',
    satuan: 'Mog Station Points',
    image: '../gambar22/Final Fantasy XIV_logo.jpg',
    background: '../gambar22/Final Fantasy XIV_BG1.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 1000, harga: 999 },
      { jumlah: 2000, harga: 1999 },
      { jumlah: 5000, harga: 4999 },
      { jumlah: 10000, harga: 9999 },
      { jumlah: 20000, harga: 19999 },
    ],
  },
  {
    id: 33,
    nama: 'Rainbow Six Siege',
    perusahaan: 'Ubisoft',
    satuan: 'R6 Credits',
    image: '../gambar22/Rainbow Six Siege_logo.jpg',
    background: '../gambar22/Rainbow Six Siege_BG2.jpg',
    itemImage: '',
    nominal: [
      { jumlah: 600, harga: 499 },
      { jumlah: 1200, harga: 999 },
      { jumlah: 2670, harga: 1999 },
      { jumlah: 4920, harga: 3499 },
      { jumlah: 7560, harga: 4999 },
    ],
  },
];
const mobileTab = document.querySelector('.operations__Mobile');
const pcTab = document.querySelector('.operations__PC');
const allTab = document.querySelector('.operations__All');

const renderMobile = function () {
  const markup1 = data
    .filter(data => data.id <= 12)
    .map(data => {
      return `
         <a href="Topup.html#${data.id}">
                <img src="${data.image}" alt="${data.nama}"
              />
              <div class="overlay-link"></div>
                <div class="game-title">
                  <span class="game-title__title">${data.nama}</span
                  ><span class="game-title__company">${data.perusahaan}</span>
                </div></a>`;
    })
    .join('');

  const markup2 = data
    .filter(data => data.id > 12 && data.id <= 23)
    .map(data => {
      return `
         <a href="Topup.html#${data.id}">
                <img src="${data.image}" alt="${data.nama}"
              />
              <div class="overlay-link"></div>
                <div class="game-title">
                  <span class="game-title__title">${data.nama}</span
                  ><span class="game-title__company">${data.perusahaan}</span>
                </div></a>`;
    })
    .join('');

  mobileTab
    .querySelector('.operations__content')
    .insertAdjacentHTML('afterbegin', markup1);
  mobileTab
    .querySelector('.operations__content--more')
    .insertAdjacentHTML('afterbegin', markup2);
};

const renderPC = function () {
  const markup = data
    .filter(data => data.id > 23)
    .map(data => {
      return `
         <a href="Topup.html#${data.id}">
                <img src="${data.image}" alt="${data.nama}"
              />
              <div class="overlay-link"></div>
                <div class="game-title">
                  <span class="game-title__title">${data.nama}</span
                  ><span class="game-title__company">${data.perusahaan}</span>
                </div></a>`;
    })
    .join('');

  pcTab
    .querySelector('.operations__content')
    .insertAdjacentHTML('afterbegin', markup);
};

const renderAll = function () {
  const markup1 = data
    .filter(data => data.id <= 12)
    .map(data => {
      return `
         <a href="Topup.html#${data.id}">
                <img src="${data.image}" alt="${data.nama}"
              />
              <div class="overlay-link"></div>
                <div class="game-title">
                  <span class="game-title__title">${data.nama}</span
                  ><span class="game-title__company">${data.perusahaan}</span>
                </div></a>`;
    })
    .join('');
  const markup2 = data
    .filter(data => data.id > 12)
    .map(data => {
      return `
         <a href="Topup.html#${data.id}">
                <img src="${data.image}" alt="${data.nama}"
              />
              <div class="overlay-link"></div>
                <div class="game-title">
                  <span class="game-title__title">${data.nama}</span
                  ><span class="game-title__company">${data.perusahaan}</span>
                </div></a>`;
    })
    .join('');

  allTab
    .querySelector('.operations__content')
    .insertAdjacentHTML('afterbegin', markup1);
  allTab
    .querySelector('.operations__content--more')
    .insertAdjacentHTML('afterbegin', markup2);
};

const init = function () {
  renderMobile();
  renderAll();
  renderPC();
};

window.addEventListener('load', init);

/////////////////////////////////////////////////////////
const btnsShow = document.querySelectorAll('.btn__show');
const btnOperations = document.querySelector('.operations__btn');

const toggleBtnShow = function (e) {
  const click = e.target.closest('.operations__active');

  const btns = e.target
    .closest('.operations__content-box')
    .querySelectorAll('.btn__show');

  btns.forEach(btn => btn.classList.toggle('btn__show--active'));

  // btnsShow.forEach(btn => btn.classList.toggle('btn__show--active'));
  click
    .querySelector('.operations__content--more')
    .classList.toggle('operations__content--more-active');
};

const operationsTab = function (e) {
  const clicked = e.target.closest('.btn');

  if (!clicked) return;
  const siblings = e.target
    .closest('.operations__btn')
    .querySelectorAll('.btn');
  const dataset = clicked.dataset.list;
  console.log(dataset);
  const operationsTab = document.querySelectorAll('.operations__content-box');

  siblings.forEach(el => el.classList.remove('btn__operations--active'));
  clicked.classList.add('btn__operations--active');

  operationsTab.forEach(el => el.classList.remove('operations__active'));
  document
    .querySelector(`.operations__${dataset}`)
    .classList.add('operations__active');
};

btnOperations.addEventListener('click', operationsTab);

btnsShow.forEach(e => e.addEventListener('click', toggleBtnShow));
