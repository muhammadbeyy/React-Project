const menu = [
    {
      id: 1,
      title: 'bread and akara',
      category: 'breakfast',
      price: 15.99,
      img: './pic/bread-and-akara2.jpeg',
      desc: `Bread and akara is a Nigerian street food made up of whole unsliced bread and pieces of akara. It is eaten either by slicing or opening a section of the bread and forcing the akara into it, burger style. Or simply by eating the two snacks in alternating succession.`,
    },
    {
      id: 2,
      title: 'Jollof Rice and Chicken',
      category: 'lunch',
      price: 34.99,
      img: './pic/jollof-rice.jpeg',
      desc: `Jollof rice and chicken is a popular West African dish that is known for its vibrant red color and delicious taste. It is made by cooking rice in a tomato-based sauce that is flavored with various spices and seasonings. The dish is usually cooked with chicken pieces, which are marinated and then cooked along with the rice. Jollof rice and chicken is often served at special occasions and gatherings, and it is considered a staple dish in countries like Nigeria, Ghana, and Senegal. `,
    },
    {
      id: 3,
      title: 'Amala and Gbegiri',
      category: 'dinner',
      price: 40.99,
      img: './pic/amala.jpeg',
      desc: `Amala is a popular Nigerian food made from yam flour, traditionally eaten with various soups and stews. It is a staple food in many Nigerian households and is known for being rolled into balls and swallowed without chewing. The name "amala" comes from the Yoruba language, and its preparation requires continuous stirring to prevent lumps. It is a good source of carbohydrates and fiber, and in some regions, it is believed to have medicinal properties. Amala comes in different variations, such as white, brown, and elubo amala made from yellow yam.
       `,
    },
    {
      id: 4,
      title: 'Rice and Stew',
      category: 'breakfast',
      price: 22.3,
      img: './pic/White-rice-stew.jpeg',
      desc: `Nigerian rice and stew is a beloved and iconic dish in Nigeria. It typically consists of locally grown rice cooked to perfection and served with a flavorful stew. One interesting fact is that Nigerian rice and stew is often associated with special occasions and celebrations, such as weddings and festivals. The stew is made with a variety of ingredients including tomatoes, peppers, onions, and various spices, giving it a rich and vibrant flavor. Another fun fact is that Nigerian rice and stew is often enjoyed with side dishes such as plantains, coleslaw, or fried chicken, adding even more depth to the meal. It is a comforting and satisfying dish that showcases the diverse flavors and culinary traditions of Nigeria.
       `,
    },
    {
      id: 5,
      title: 'Tuwo Shinkafa',
      category: 'lunch',
      price: 19.99,
      img: './pic/tuwo-miyangeda.jpeg',
      desc: `Tuwo shinkafa is a popular Nigerian dish made from rice flour. It is a staple food in the northern part of Nigeria and is often served with a variety of stews and soups. One fun fact about tuwo shinkafa is that it is traditionally eaten with the hands, which is believed to enhance the flavor of the food. Another interesting fact is that the preparation of tuwo shinkafa requires a lot of physical effort, as the rice flour must be kneaded and rolled into balls. Tuwo shinkafa is also known for its nutritional benefits, as it is high in carbohydrates and fiber. It is a delicious and filling meal that showcases the rich culinary traditions of Nigeria's northern region.
       `,
    },
    {
      id: 6,
      title: 'eba and okro',
      category: 'dinner',
      price: 14.32,
      img: './pic/eba-okro.jpeg',
      desc: `Eba and okra is a popular Nigerian food combination made up of cassava flour (eba) and soup (okra) which is primarily made from okra vegetable with assorted meat and spices. One fun fact about eba and okra is that it is a staple food in many Nigerian households, particularly in the southern part of the country. The preparation of eba requires boiling water and adding cassava flour, which is then stirred until it forms a smooth dough-like consistency. Okra soup is made with chopped okra mixed with various spices, meat, and fish. Eba and okra are often eaten together as a one-pot meal and are traditionally eaten with the hands. It is a nutritious and filling meal that is enjoyed by many Nigerians. `,
    },
    {
      id: 7,
      title: 'Fried rice and chicken',
      category: 'breakfast',
      price: 44.99,
      img: './pic/friedrice-special.jpeg',
      desc: ` Nigerian fried rice and chicken is a popular dish that showcases the fusion of Nigerian and Chinese culinary influences. One interesting fact is that it is commonly served during festive occasions and celebrations, such as weddings and parties. The fried rice is typically cooked with a variety of vegetables like carrots, peas, and bell peppers, giving it a vibrant and colorful appearance. Nigerian fried rice often has a unique flavor profile due to the addition of local spices and seasonings. It is commonly paired with well-seasoned and crispy fried chicken, which adds another layer of deliciousness to the meal. This combination of flavors and textures makes Nigerian fried rice and chicken a beloved and satisfying dish enjoyed by many Nigerians.`,
    },
    {
      id: 8,
      title: 'Zobo',
      category: 'lunch',
      price: 13.99,
      img: './pic/zobo.jpeg',
      desc: `Zobo, a popular Nigerian beverage made from hibiscus leaves, is often paired with various snacks and dishes. Some common options to enjoy with zobo include suya (grilled meat skewers), puff puff (deep-fried dough balls), moi moi (steamed bean pudding), and akara (bean fritters). These savory treats complement the tangy and refreshing flavors of zobo, creating a delightful culinary experience.
  
      `,
    },
    {
      id: 9,
      title: 'Pounded Yam',
      category: 'dinner',
      price: 23.99,
      img: './pic/pounded-yam.jpeg',
      desc: `Pounded yam is a popular Nigerian food made from yam tubers. One fun fact about pounded yam is that it is a staple food in many Nigerian households, particularly in the southern part of the country. The preparation of pounded yam requires boiling yam tubers until they are soft, then pounding them with a mortar and pestle until they form a smooth and stretchy dough-like consistency. This process requires a lot of physical effort and is often done by hand. Pounded yam is typically eaten with various soups and stews, such as egusi soup or vegetable soup. It is also traditionally eaten with the hands, which is believed to enhance the flavor of the food. Pounded yam is a filling and nutritious meal that is enjoyed by many Nigerians. `,
    },
    {
      id: 10,
      title: 'Pap and Akara',
      category: 'breakfast',
      price: 20.99,
      img: 'https://www.fmnfoods.com/wp-content/uploads/2021/06/akara-and-pap.jpg',
      desc: `Pap and akara is a popular Nigerian breakfast combination that consists of pap (also known as ogi or akamu) and akara (bean cakes). One interesting fact about pap and akara is that it is a common street food in Nigeria, often sold by vendors in the mornings. Pap is a smooth and creamy porridge made from fermented corn or maize, while akara is made from ground beans mixed with onions, peppers, and spices, then deep-fried until golden brown. Another fun fact is that pap and akara are often enjoyed together due to the contrasting textures and flavors. The soft and comforting pap pairs well with the crispy and savory akara, creating a delicious and satisfying combination. It is a nutritious breakfast option as both pap and akara are rich in protein, fiber, and essential nutrients. Pap and akara are beloved by Nigerians for their taste, convenience, and cultural significance. `,
    },
    {
      id: 11,
      title: 'boli',
      category: 'lunch',
      price: 25.99,
      img: 'https://www.nigerianfoodtv.com/ezoimgfmt/1.bp.blogspot.com/-Wk1IDvtdAsg/U4hUAakcpGI/AAAAAAAADBo/rhn9M7fwZec/s1600/boli+and+fish.JPG?ezimgfmt=rs:737x553/rscb6/ng:webp/ngcb6',
      desc: `Boli is a popular Nigerian street food that consists of roasted plantains. One fun fact about boli is that it is commonly associated with outdoor grilling and is often sold by street vendors, especially in the evenings. The plantains are typically roasted over an open flame until they become caramelized and have a smoky flavor. Boli is often enjoyed with a variety of accompaniments such as groundnuts (peanuts), roasted fish, or spicy pepper sauce. It is a versatile and convenient snack that can be enjoyed on its own or paired with other foods. Boli is loved for its sweet and savory taste, and it is a favorite among Nigerians for its simplicity and deliciousness. `,
    },
    {
      id: 12,
      title: 'Agbado',
      category: 'lunch',
      price: 14.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlOpgRhpG4sM5hyZ9K_9f4zgMh1jb7LBxWg&usqp=CAU',
      desc: `Agbado, also known as roasted corn, is a popular street food in Nigeria. It is made by grilling corn over an open fire until it becomes charred and slightly blackened. Agbado is typically served with a variety of toppings such as butter, salt, pepper, and sometimes even mayonnaise or grated cheese. `,
    },
    {
      id: 14,
      title: 'Ewa Agoyin',
      category: 'breakfast',
      price: 24.99,
      img: 'https://www.thepretendchef.com/wp-content/uploads/2018/01/ewa-agoyin-1-5.jpg?ezimgfmt=ngcb2/notWebP',
      desc: `Ewa Agoyin is a popular Nigerian street food known for its spicy stew and soft, mashed black-eyed peas. It originated from the Yoruba people in southwestern Nigeria and has gained popularity across the country. Ewa Agoyin is usually served with a special sauce made from palm oil, dried peppers, onions, and spices, giving it a rich and flavorful taste. This flavorful dish is often enjoyed with bread or rice, and it is a staple food for many Nigerians.`,
    },
  ];
  
  export default menu;
  
  