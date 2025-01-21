const data = [
  {
    id: "ghi789",
    cuisine: ["Japan"],
    price_rage_start: 70000,
    price_rage_end: 150000,
    rating: 5,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508006728353-6ecef00dcbb8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    map: {
      latitude: "35.6762",
      longtitude: "139.6503",
    },
    review: [
      {
        name: "Mia Clark",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 5,
        message: "The sushi was exceptional, one of the best I’ve had!",
      },
      {
        name: "Liam White",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 4,
        message: "Great sushi, but the miso soup was a bit too salty.",
      },
    ],
  },
  {
    id: "jkl012",
    cuisine: ["America"],
    price_rage_start: 40000,
    price_rage_end: 90000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1513618364580-fe1596762e8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522120331923-bd99e51eb26e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522683280249-025c6e03d311?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    map: {
      latitude: "41.878113",
      longtitude: "-87.629799",
    },
    review: [
      {
        name: "Olivia Harris",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 4,
        message: "The burgers were juicy, but the fries could be crispier.",
      },
      {
        name: "Daniel Davis",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        rating: 5,
        message: "Amazing atmosphere, and the milkshakes are a must-try!",
      },
    ],
  },
  {
    id: "mno345",
    cuisine: ["Mexico"],
    price_rage_start: 30000,
    price_rage_end: 75000,
    rating: 5,
    status: "Closed",
    image: [
      "https://images.unsplash.com/photo-1557113166-6bf8102e535b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508006728353-6ecef00dcbb8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    map: {
      latitude: "32.715736",
      longtitude: "-117.161087",
    },
    review: [
      {
        name: "Jacob Lee",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 5,
        message: "I absolutely loved the tacos and guacamole!",
      },
      {
        name: "Ella Brown",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        rating: 4,
        message: "The food was great, but it was a bit crowded when I visited.",
      },
    ],
  },
  {
    id: "pqr678",
    cuisine: ["China", "Japan"],
    price_rage_start: 20000,
    price_rage_end: 60000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1522120331923-bd99e51eb26e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522683280249-025c6e03d311?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    map: {
      latitude: "39.904202",
      longtitude: "116.407394",
    },
    review: [
      {
        name: "Henry Johnson",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        rating: 5,
        message: "Delicious dumplings and crispy Peking duck!",
      },
      {
        name: "Zoe Kim",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 4,
        message: "Good food, but I would prefer a bit more spice.",
      },
    ],
  },
  {
    id: "stu890",
    cuisine: ["Indonesia"],
    price_rage_start: 30000,
    price_rage_end: 80000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1561948954-d12289759b66",
      "https://images.unsplash.com/photo-1586250088875-8f5f7b29963a",
      "https://images.unsplash.com/photo-1611533770422-08ed85e77e16",
    ],
    map: {
      latitude: "14.599512",
      longtitude: "120.984222",
    },
    review: [
      {
        name: "Ben Smith",
        avatar: "https://randomuser.me/api/portraits/men/16.jpg",
        rating: 4,
        message: "Great nasi goreng, though the serving size was a bit small.",
      },
      {
        name: "Ava Martinez",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        rating: 5,
        message: "Amazing flavors! The rendang is a must-try.",
      },
    ],
  },
  {
    id: "pqr901",
    cuisine: ["Indonesia"],
    price_rage_start: 30000,
    price_rage_end: 70000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1561948954-d12289759b66",
      "https://images.unsplash.com/photo-1586250088875-8f5f7b29963a",
      "https://images.unsplash.com/photo-1611533770422-08ed85e77e16",
    ],
    map: {
      latitude: "51.507351",
      longtitude: "-0.127758",
    },
    review: [
      {
        name: "Lucas Grey",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        message: "The most delicious sate I’ve ever had!",
      },
      {
        name: "Chloe Thompson",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        message: "Authentic Indonesian flavors.",
      },
    ],
  },
  {
    id: "stu234",
    cuisine: ["Mexico"],
    price_rage_start: 25000,
    price_rage_end: 60000,
    rating: 5,
    status: "Closed",
    image: [
      "https://images.unsplash.com/photo-1606995506824-3ffeb5e6d8e7",
      "https://images.unsplash.com/photo-1562916390-fd22e7b9bb5a",
      "https://images.unsplash.com/photo-1604787033835-478fc3f72c68",
    ],
    map: {
      latitude: "34.052235",
      longtitude: "-118.243683",
    },
    review: [
      {
        name: "Isaiah Black",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        message: "Absolutely amazing tacos!",
      },
      {
        name: "Grace White",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        message: "The enchiladas were incredible.",
      },
    ],
  },
  {
    id: "uvw567",
    cuisine: ["Japan"],
    price_rage_start: 50000,
    price_rage_end: 120000,
    rating: 5,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1572383033-3b8d88bdbf6e",
      "https://images.unsplash.com/photo-1599401787797-b2fc213db96d",
      "https://images.unsplash.com/photo-1585262285009-c1d271cd4074",
    ],
    map: {
      latitude: "48.856613",
      longtitude: "2.352222",
    },
    review: [
      {
        name: "Liam Green",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        message: "I love sushi and this place did not disappoint!",
      },
      {
        name: "Oliver Davis",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 5,
        message: "The ambiance was perfect and the sashimi was top notch.",
      },
      {
        name: "Sophia Lee",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        message: "Great service and delicious food.",
      },
    ],
  },
  {
    id: "xyz890",
    cuisine: ["America"],
    price_rage_start: 40000,
    price_rage_end: 90000,
    rating: 3,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1572152423247-92ac242bb2ea",
      "https://images.unsplash.com/photo-1602864620531-c1a0c3f24a57",
      "https://images.unsplash.com/photo-1587606464933-f64a279b879b",
    ],
    map: {
      latitude: "40.730610",
      longtitude: "-73.935242",
    },
    review: [
      {
        name: "Daniel Green",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        rating: 3,
        message: "Not bad, but the burgers could use more flavor.",
      },
      {
        name: "Emma Brown",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        message: "Loved the fries and the milkshakes!",
      },
      {
        name: "Ryan Harris",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 2,
        message: "Very overpriced for the quality.",
      },
    ],
  },
  {
    id: "abc123",
    cuisine: ["China"],
    price_rage_start: 15000,
    price_rage_end: 50000,
    rating: 4,
    status: "Closed",
    image: [
      "https://images.unsplash.com/photo-1574529541397-70a2cd351929",
      "https://images.unsplash.com/photo-1564249754-c158f4ac1c1c",
      "https://images.unsplash.com/photo-1581490577440-83d48a62ff5d",
    ],
    map: {
      latitude: "39.904202",
      longtitude: "116.407394",
    },
    review: [
      {
        name: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        message: "The dumplings were amazing!",
      },
      {
        name: "Lilly Wang",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        message: "Good, but I prefer a bit more spice.",
      },
      {
        name: "Carlos Perez",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 3,
        message: "The food was okay but could be better.",
      },
    ],
  },
  {
    id: "def456",
    cuisine: ["Mexico"],
    price_rage_start: 25000,
    price_rage_end: 70000,
    rating: 5,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1606995506824-3ffeb5e6d8e7",
      "https://images.unsplash.com/photo-1562916390-fd22e7b9bb5a",
      "https://images.unsplash.com/photo-1604787033835-478fc3f72c68",
    ],
    map: {
      latitude: "34.052235",
      longtitude: "-118.243683",
    },
    review: [
      {
        name: "Sophia King",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        message: "Perfectly cooked burritos!",
      },
      {
        name: "Ethan Johnson",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        rating: 5,
        message: "Excellent tacos and margaritas.",
      },
    ],
  },
  {
    id: "xzy123",
    cuisine: ["Indonesia", "Japan"],
    price_rage_start: 20000,
    price_rage_end: 50000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1556742046-4b2d6f3c1a1d",
      "https://images.unsplash.com/photo-1567435886-126f1e5e1d09",
      "https://images.unsplash.com/photo-1578312491112-50843c573b94",
    ],
    map: {
      latitude: "40.712776",
      longtitude: "-74.005974",
    },
    review: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        message: "Amazing food and atmosphere!",
      },
      {
        name: "Maria Green",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        message: "Really nice experience, loved the sushi!",
      },
      {
        name: "Liam Black",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 3,
        message: "Good but could be better, especially the service.",
      },
    ],
  },
  {
    id: "abc456",
    cuisine: ["Mexico"],
    price_rage_start: 30000,
    price_rage_end: 70000,
    rating: 3,
    status: "Closed",
    image: [
      "https://images.unsplash.com/photo-1611627754544-e39c39f9b7b6",
      "https://images.unsplash.com/photo-1566162761-70d9a86a91ea",
      "https://images.unsplash.com/photo-1597731183020-7f2cfd674ce4",
    ],
    map: {
      latitude: "34.052235",
      longtitude: "-118.243683",
    },
    review: [
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        message: "Good food but could be spicier.",
      },
      {
        name: "James Brown",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 3,
        message: "Nice but not authentic enough.",
      },
      {
        name: "Sophia Clark",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 2,
        message: "Too expensive for what it offers.",
      },
    ],
  },
  {
    id: "def789",
    cuisine: ["Japan"],
    price_rage_start: 50000,
    price_rage_end: 150000,
    rating: 5,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1506332582233-c8f627a04d1d",
      "https://images.unsplash.com/photo-1578722117234-32890a9b5e19",
      "https://images.unsplash.com/photo-1558506453-24eb57c1227a",
    ],
    map: {
      latitude: "48.856613",
      longtitude: "2.352222",
    },
    review: [
      {
        name: "Alice Lee",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5,
        message: "Best sushi I've ever had!",
      },
      {
        name: "Oliver Kim",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 5,
        message: "Incredible, a true taste of Japan.",
      },
      {
        name: "David Lee",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        rating: 4,
        message: "Excellent service, would visit again.",
      },
      {
        name: "Emily Park",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        message: "Love the ambiance and the food!",
      },
    ],
  },
  {
    id: "ghi012",
    cuisine: ["Indonesia"],
    price_rage_start: 100000,
    price_rage_end: 300000,
    rating: 4,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1511070892548-b9e02eaa1204",
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      "https://images.unsplash.com/photo-1560165008-fdd415e32c59",
    ],
    map: {
      latitude: "51.507351",
      longtitude: "-0.127758",
    },
    review: [
      {
        name: "Bob Brown",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 4,
        message: "Delicious curry, will come again!",
      },
      {
        name: "Mia Cooper",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        rating: 5,
        message: "An authentic taste of Indonesia, absolutely love it!",
      },
      {
        name: "Jack Turner",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 3,
        message: "The food is good but a little on the salty side.",
      },
      {
        name: "Chloe Davis",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        rating: 4,
        message: "Great place for a cozy dinner with friends.",
      },
    ],
  },
  {
    id: "jkl345",
    cuisine: ["America"],
    price_rage_start: 150000,
    price_rage_end: 350000,
    rating: 4,
    status: "Closed",
    image: [
      "https://images.unsplash.com/photo-1556740749-b6a17e7f2d91",
      "https://images.unsplash.com/photo-1605226266902-32ff19857a18",
      "https://images.unsplash.com/photo-1597935722197-e36b8b94e020",
    ],
    map: {
      latitude: "40.730610",
      longtitude: "-73.935242",
    },
    review: [
      {
        name: "Sophia Green",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 4,
        message: "Nice ambiance, food was good.",
      },
      {
        name: "Ethan White",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        message: "Best burger I've ever tasted!",
      },
      {
        name: "Grace Black",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 4,
        message: "Great food, a little pricey though.",
      },
    ],
  },
  {
    id: "mno678",
    cuisine: ["China"],
    price_rage_start: 20000,
    price_rage_end: 70000,
    rating: 3,
    status: "Open",
    image: [
      "https://images.unsplash.com/photo-1576435617-2a0fc8b4d62f",
      "https://images.unsplash.com/photo-1600992234532-c6d4c0bc3b8f",
      "https://images.unsplash.com/photo-1587578687731-0418748b5664",
    ],
    map: {
      latitude: "40.730610",
      longtitude: "-73.935242",
    },
    review: [
      {
        name: "James White",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 3,
        message: "Great food but service was slow.",
      },
      {
        name: "Olivia Jones",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        rating: 4,
        message: "I enjoyed the dim sum, will be back.",
      },
      {
        name: "Henry Brown",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 2,
        message: "Not impressed with the quality of the ingredients.",
      },
      {
        name: "Lily Moore",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        rating: 3,
        message: "The food was decent, but the place was too noisy.",
      },
    ],
  },
  // Additional restaurant data entries...
];

module.exports = data;
