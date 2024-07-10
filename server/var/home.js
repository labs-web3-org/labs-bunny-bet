module.exports = Object.freeze({
    PRODUCTS: [
        {table_id: '001', table_name: "roulette", table_type: "european"},
        {table_id: '002', table_name: "roulette", table_type: "american"},
        {table_id: '003', table_name: "roulette", table_type: "european"},
        {table_id: '004', table_name: "roulette", table_type: "american"},
        {table_id: '005', table_name: "blackjack"},
        {table_id: '006', table_name: "blackjack"},
        {table_id: '007', table_name: "blackjack"},
        {table_id: '008', table_name: "slots", table_type: "reel_3"},
        {table_id: '009', table_name: "slots", table_type: "reel_5"},
        {table_id: '010', table_name: "slots", table_type: "reel_3"},
        {table_id: '011', table_name: "slots", table_type: "reel_5"},
        {table_id: '012', table_name: "craps"},
        {table_id: '013', table_name: "craps"},
        {table_id: '014', table_name: "craps"},
        {table_id: '015', table_name: "poker", table_type: "poker_texas_holdem"},
        {table_id: '016', table_name: "poker", table_type: "poker_5_card_draw"},
        {table_id: '017', table_name: "poker", table_type: "poker_texas_holdem"},
        {table_id: '018', table_name: "poker", table_type: "poker_5_card_draw"},
        {table_id: '019', table_name: "poker", table_type: "poker_texas_holdem"},
        {table_id: '020', table_name: "poker", table_type: "poker_5_card_draw"},
    ],
    MARKET: [
        {id: "carrot", name_eng: "carrot", name_ro: "morcov", name_fr: "carotte", name_de: "karotte", name_es: "zanahoria", name_it: "carota", name_pt: "cenoura", name_ru: "морковь", price: 1},
        {id: "garlic", name_eng: "garlic", name_ro: "usturoi", name_fr: "ail", name_de: "knoblauch", name_es: "ajo", name_it: "aglio", name_pt: "alho", name_ru: "чеснок", price: 2},
        {id: "onion", name_eng: "onion", name_ro: "ceapa", name_fr: "oignon", name_de: "zwiebel", name_es: "cebolla", name_it: "cipolla", name_pt: "cebola", name_ru: "лук", price: 3},
        {id: "radish", name_eng: "radish", name_ro: "ridiche", name_fr: "radis", name_de: "radieschen", name_es: "rábano", name_it: "ravanello", name_pt: "rabanete", name_ru: "редис", price: 5},
        {id: "turnip", name_eng: "turnip", name_ro: "nap", name_fr: "navet", name_de: "steckrübe", name_es: "nabo", name_it: "rape", name_pt: "nabo", name_ru: "репа", price: 10},
        {id: "potato", name_eng: "potato", name_ro: "cartof", name_fr: "pomme de terre", name_de: "kartoffel", name_es: "patata", name_it: "patata", name_pt: "batata", name_ru: "картофель", price: 20},
        {id: "cabbage", name_eng: "cabbage", name_ro: "varza", name_fr: "chou", name_de: "kohl", name_es: "col", name_it: "cavolo", name_pt: "repolho", name_ru: "капуста", price: 30},
    ],
    CURRENCIES: ['USD', 'EUR', 'GBP', 'CHF', 'RON'],
    PROFILES: [
        {id: 1, name_eng: "weasel", name_ro: "nevastuica", name_fr: "belette", name_de: "wiesel", name_es: "comadreja", name_it: "donnola", name_pt: "doninha", name_ru: "ласка", free: true},
        {id: 2, name_eng: "fox", name_ro: "vulpe", name_fr: "renard", name_de: "fuchs", name_es: "zorro", name_it: "volpe", name_pt: "raposa", name_ru: "лиса", free: false},
        {id: 3, name_eng: "wolf", name_ro: "lup", name_fr: "loup", name_de: "wolf", name_es: "lobo", name_it: "lupo", name_pt: "lobo", name_ru: "волк", free: false},
        {id: 4, name_eng: "lynx", name_ro: "ras", name_fr: "lynx", name_de: "luchs", name_es: "lince", name_it: "lince", name_pt: "lince", name_ru: "рысь", free: false},
        {id: 5, name_eng: "ferret", name_ro: "dihor", name_fr: "furet", name_de: "frettchen", name_es: "hurón", name_it: "furetto", name_pt: "furão", name_ru: "хорёк", free: true},
        {id: 6, name_eng: "marten", name_ro: "jder", name_fr: "martre", name_de: "marder", name_es: "marta", name_it: "martora", name_pt: "marta", name_ru: "кунгуря", free: true},
    ],
    DONATIONS: [
        {type: "crypto", title: "Bitcoin", text: "bc1qhpj7gpflqumppla8p9rk6f3fsq2qrmslakgmha", link: "bitcoin:bc1qhpj7gpflqumppla8p9rk6f3fsq2qrmslakgmha"},
        {type: "crypto", title: "Ethereum", text: "-"},
        {type: "crypto", title: "Litecoin", text: "-"},
        {type: "crypto", title: "Bitcoin Cash", text: "-"},
        {type: "crypto", title: "Dogecoin", text: "-"},
        {type: "paypal", title: "PaypalMe", link: "https://paypal.me/oanapopescu93?country.x=RO&locale.x=en_US"},
        {type: "paypal", title: "Paypal Donate", link: "https://www.paypal.com/donate/?hosted_button_id=FBUHUHZCKWZRA"},
        {type: "bank", title: "IBAN", text: "RO93BTRLRONCRT0316896401"}
    ],    
    RACE_RABBITS: [
        {id: 1, participating: false, name: "Bunny_01", breed: "American Fuzzy Lop", img: "/img/rabbit_list/american_fuzzy_lop.png"},
        {id: 2, participating: false, name: "Bunny_02", breed: "American", img: "/img/rabbit_list/american.png"},
        {id: 3, participating: false, name: "Bunny_03", breed: "Belgian Hare", img: "/img/rabbit_list/belgian_hare.png"},
        {id: 4, participating: false, name: "Bunny_04", breed: "Dutch", img: "/img/rabbit_list/dutch.png"},
        {id: 5, participating: false, name: "Bunny_05", breed: "Dwarf Hotot", img: "/img/rabbit_list/dwarf_hotot.png"},
        {id: 6, participating: false, name: "Bunny_06", breed: "English angora", img: "/img/rabbit_list/english_angora.png"},
        {id: 7, participating: false, name: "Bunny_07", breed: "English Lop", img: "/img/rabbit_list/english_lop.png"},
        {id: 8, participating: false, name: "Bunny_08", breed: "English Spot", img: "/img/rabbit_list/english_spot.png"},
        {id: 9, participating: false, name: "Bunny_09", breed: "Flemish giant", img: "/img/rabbit_list/flemish_giant.png"},
        {id: 10, participating: false, name: "Bunny_10", breed: "Florida White", img: "/img/rabbit_list/florida_white.png"},
        {id: 11, participating: false, name: "Bunny_11", breed: "French Angora", img: "/img/rabbit_list/french_angora.png"},
        {id: 12, participating: false, name: "Bunny_12", breed: "Harlequin", img: "/img/rabbit_list/harlequin.png"},
        {id: 13, participating: false, name: "Bunny_13", breed: "Havana", img: "/img/rabbit_list/havana.png"},
        {id: 14, participating: false, name: "Bunny_14", breed: "Himalayan", img: "/img/rabbit_list/himalayan.png"},
        {id: 15, participating: false, name: "Bunny_15", breed: "Holland Lop", img: "/img/rabbit_list/holland_lop.png"},
        {id: 16, participating: false, name: "Bunny_16", breed: "Jersey Wooly", img: "/img/rabbit_list/jersey_wooly.png"},
        {id: 17, participating: false, name: "Bunny_17", breed: "Lionhead", img: "/img/rabbit_list/lionhead.png"},
        {id: 18, participating: false, name: "Bunny_18", breed: "Mini Lop", img: "/img/rabbit_list/mini_lop.png"},
        {id: 19, participating: false, name: "Bunny_19", breed: "Mini Rex", img: "/img/rabbit_list/mini_rex.png"},
        {id: 20, participating: false, name: "Bunny_20", breed: "Neatherland", img: "/img/rabbit_list/neatherland.png"},
    ],
    KENO_PRIZES: [
        [{numbers_matched: 1, win: 3}],
        [{numbers_matched: 2, win: 12}],
        [{numbers_matched: 2, win: 1}, {numbers_matched: 3, win: 44}],
        [{numbers_matched: 2, win: 1}, {numbers_matched: 3, win: 4}, {numbers_matched: 4, win: 122}],
        [{numbers_matched: 3, win: 2}, {numbers_matched: 4, win: 14}, {numbers_matched: 5, win: 640}],
        [{numbers_matched: 3, win: 1}, {numbers_matched: 4, win: 5}, {numbers_matched: 5, win: 80}, {numbers_matched: 6, win: 1800}],
        [{numbers_matched: 3, win: 1}, {numbers_matched: 4, win: 3}, {numbers_matched: 5, win: 12}, {numbers_matched: 6, win: 125}, {numbers_matched: 7, win: 5000}],
        [{numbers_matched: 4, win: 2}, {numbers_matched: 5, win: 7}, {numbers_matched: 6, win: 60}, {numbers_matched: 7, win: 675}, {numbers_matched: 8, win: 25000}],
        [{numbers_matched: 4, win: 1}, {numbers_matched: 5, win: 5}, {numbers_matched: 6, win: 20}, {numbers_matched: 7, win: 210}, {numbers_matched: 8, win: 2500}, {numbers_matched: 9, win: 30000}],
        [{numbers_matched: 4, win: 1}, {numbers_matched: 5, win: 2}, {numbers_matched: 6, win: 6}, {numbers_matched: 7, win: 50}, {numbers_matched: 8, win: 580}, {numbers_matched: 9, win: 30000}, {numbers_matched: 10, win: 50000}],
    ],
    CONTACT: [
        {
            DE: {country: "Rumänien", city: "Bukarest", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            ENG: {country: "Romania", city: "Bucharest", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            ES: {country: "Rumanía", city: "Bucarest", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            FR: {country: "Roumanie", city: "Bucarest", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            IT: {country: "Romania", city: "Bucarest", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            PT: {country: "Romênia", city: "Bucareste", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            RO: {country: "România", city: "București", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            RU: {country: "Румыния", city: "Бухарест", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
            ZH: {country: "罗马尼亚", city: "布加勒斯特", map: {lat: 44.469663, lng: 26.096306}, marker: [44.439663, 26.096306], email: "oanapopescu93@gmail.com", phone: "+40 711 111 111"},
        },
        {
            DE: {country: "USA", city: "New York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            ENG: {country: "USA", city: "New York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            ES: {country: "EE. UU.", city: "Nueva York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            FR: {country: "États-Unis", city: "New York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            IT: {country: "Stati Uniti", city: "New York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            PT: {country: "EUA", city: "Nova Iorque", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            RO: {country: "SUA", city: "New York", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            RU: {country: "США", city: "Нью-Йорк", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
            ZH: {country: "美国", city: "纽约", map: {lat: 40.730610, lng: -73.935242}, marker: [40.730610, -73.935242], email: "oanapopescu93@gmail.com", phone: "+1 111-111-1111"},
        },
        {
            DE: {country: "Deutschland", city: "Berlin", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            ENG: {country: "Germany", city: "Berlin", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            ES: {country: "Alemania", city: "Berlín", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            FR: {country: "Allemagne", city: "Berlin", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            IT: {country: "Germania", city: "Berlino", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            PT: {country: "Alemanha", city: "Berlim", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            RO: {country: "Germania", city: "Berlin", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            RU: {country: "Германия", city: "Берлин", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
            ZH: {country: "德国", city: "柏林", map: {lat: 52.5200, lng: 13.4050}, marker: [52.5200, 13.4050], email: "oanapopescu93@gmail.com", phone: "+49 111 11111111"},
        }, 
    ],
    COUPONS: [
        {name: "coupon01", discount: 10},
        {name: "coupon02", discount: 20},
        {name: "coupon03", discount: 30},
    ],
})