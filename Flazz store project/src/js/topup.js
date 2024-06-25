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
    background: '../img/Rise of Kingdoms_BG2.png',
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
];

const dataGame = data.find(data => data.id === +window.location.hash.slice(1));

const parentElement = document.querySelector('.main');
const inputQuantity = document.querySelector('.form__input--qty');
const btnTambah = document.querySelector('.form__qty-btn--tambah');
const btnKurang = document.querySelector('.form__qty-btn--kurang');
const btnApplyPromo = document.querySelector('.form__btn--apply');
const imgHero = document.querySelector('.img-hero__img');
const imgGame = document.querySelector('.game__photo');
const itemListContainer = document.querySelector('.form__items--list');
const gameTitle = document.querySelector('.game-title__name');
const gameCompany = document.querySelector('.game-title__company');
const cartContainer = document.querySelector('.form__cart');
const paymentContainer = document.querySelector('.form__content-payment');
const cartRow = document.querySelector('.form__row-cart');
const inputPromo = document.querySelector('.form__input--promo');
const message = document.querySelector('.message');
const btnSubmit = document.querySelector('.btn-submit');
const btnCara = document.querySelector('.topup__text');
const listCaraContainer = document.querySelector('.topup__step');

let isSelected = false;
let payment = '';
let cart = '';

// const cart = `
//     <div class="form__cart-item">
//         <img src="../img/unnamed.png" alt="IMg" />
//             <div class="form__cart-details">
//                 <div class="form__cart-details--row">
//                     <span class="cart__nominal"></span>
//                     &times;
//                     <span class="cart__qty"></span>
//                 </div>

//                 <div class="form__cart-details--row">
//                     <span class="cart__price"></span>
//                     &hyphen;
//                     <span class="cart__payment-method"></span>
//                 </div>
//             </div>
//     </div>`;

const formatRupiah = function (values) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(values);
};

const item = function (item) {
  const checkImg =
    dataGame.itemImage === '' ? '' : `<img src="${dataGame.itemImage}"/>`;
  console.log(checkImg);

  return `
                    <div class="form__items--item" data-jumlah="${
                      item.jumlah
                    }" data-harga="${item.harga}">
                        <div>
                            <p>${item.jumlah} ${dataGame.satuan}</p>
                            <p>${formatRupiah(item.harga)}</p>
                        </div>
                    ${checkImg}
                    </div>`;
};

const init = function () {
  const markup = dataGame.nominal.map(item).join('');

  imgHero.src = dataGame.background;
  imgGame.src = dataGame.image;
  gameTitle.textContent = dataGame.nama;
  gameCompany.textContent = dataGame.perusahaan;
  itemListContainer.insertAdjacentHTML('afterbegin', markup);
};
window.addEventListener('load', init);

const renderCart = function () {
  if (!isSelected) return;

  const jumlah = cart.dataset.jumlah;
  const harga = cart.dataset.harga;

  const markup = `
  <div class="form__cart-item">
        <img src="${dataGame.image}" alt="IMg" />
            <div class="form__cart-details">
                <div class="form__cart-details--row">
                    <span class="cart__nominal">${jumlah} ${
    dataGame.satuan
  }</span>
                    &times;
                    <span class="cart__qty">${inputQuantity.value}</span>
                </div>

                <div class="form__cart-details--row">
                    <span class="cart__price">${formatRupiah(
                      harga * inputQuantity.value
                    )}</span>
                    &hyphen;
                    <span class="cart__payment-method">${payment}</span>
                </div>
            </div>
    </div>`;

  cartContainer.innerHTML = '';
  cartRow.classList.add('active');
  cartContainer.insertAdjacentHTML('afterbegin', markup);
};

// Toggle cara pembelian
btnCara.addEventListener('click', e => {
  listCaraContainer.classList.toggle('hidden');

  const panah = e.target.closest('.topup__text').querySelector('.topup__icon');

  panah.classList.toggle('rotate');
});

// Quantity
inputQuantity.addEventListener('input', () => {
  if (+inputQuantity.value < 1) inputQuantity.value = 1;

  if (+inputQuantity.value === 1) {
    btnKurang.classList.add('form__qty-btn--noactive');
    return;
  }
  btnKurang.classList.remove('form__qty-btn--noactive');
  renderCart();
});

btnTambah.addEventListener('click', e => {
  e.preventDefault();
  inputQuantity.value = +inputQuantity.value + 1;
  btnKurang.classList.remove('form__qty-btn--noactive');
  renderCart();
});

btnKurang.addEventListener('click', e => {
  e.preventDefault();
  let currentValue = +inputQuantity.value;
  if (currentValue > 1) {
    inputQuantity.value = currentValue - 1;
    if (currentValue - 1 === 1) {
      btnKurang.classList.add('form__qty-btn--noactive');
    }
  }

  renderCart();
});

// Payment method
paymentContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.form__payment');

  if (!clicked || !isSelected) return;
  const siblings = clicked
    .closest('.form__content-payment')
    .querySelectorAll('.form__payment');
  siblings.forEach(el => el.classList.remove('form__payment--selected'));

  clicked.classList.add('form__payment--selected');
  payment = clicked.dataset.payment;
  renderCart();
});

// Apply Promo
btnApplyPromo.addEventListener('click', e => {
  e.preventDefault();

  if (inputPromo.value === '') return;

  message.style.animationPlayState = 'running';

  setTimeout(() => {
    message.style.animationPlayState = 'paused';
  }, 4000);
});

// Cart
itemListContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.form__items--item');

  if (!clicked) return;
  isSelected = true;
  cart = clicked;
  renderCart();
});

// Submit
btnSubmit.addEventListener('click', e => {
  e.preventDefault();

  if (!isSelected) return;

  const url = 'Thankyoupage.html';

  window.location.href = url;
});
