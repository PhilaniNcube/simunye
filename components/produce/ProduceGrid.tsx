import Image from "next/image";
import { fraunces } from "../home/HomeHero";

export default function ProduceGrid() {

  const produce = [
    {
      id: 1,
      title: "Lemon Tree Seedlings",
      slug: "lemon-tree-seedlings",
      price: "$3.00 - $5.00",
      image: "/images/lemon_tree.jpg",
      description:
        "Introducing our healthy and vibrant lemon tree seedlings, your first step towards a flourishing citrus garden. These seedlings are not only easy to grow but will also yield a bountiful harvest of fresh, zesty lemons in no time. Ideal for adding a tangy twist to your cooking, baking, and refreshing beverages, these seedlings are a must-have addition to any gardening enthusiast's collection.",
      category: "Seedlings",
    },
    {
      id: 2,
      title: "Assorted Vegetables",
      slug: "assorted-vegetables",
      price: "",
      image: "/images/organic_vegetables.jpg",
      description:
        "Indulge in our diverse selection of farm-fresh, organic vegetables, carefully handpicked at the peak of ripeness to ensure unmatched flavor and quality. Our colorful and nutritious assortment will not only elevate your culinary creations but also contribute to a wholesome and satisfying diet. Treat yourself and your loved ones to the best that nature has to offer with our premium assortment of vegetables.",
      category: "Vegetables",
    },
    {
      id: 3,
      title: "Haas Avocados Seedlings",
      slug: "haas-avocados-seedlings",
      price: "$5.00 - $8.00",
      image: "/images/haas_avocado.jpg",
      description:
        "Embark on a fruitful avocado tree journey with our robust Haas avocado seedlings. Renowned for their rich, buttery texture and delectable taste, these seedlings will grow into prolific trees that produce an abundance of mouthwatering avocados. Perfect for whipping up some velvety guacamole, enhancing your salads, or simply enjoying on their own, these seedlings are a fantastic investment in your home garden and culinary adventures.",
      category: "Seedlings",
    },
    {
      id: 4,
      title: "Sweet Potatoes",
      slug: "sweet-potatoes",
      price: "$4.00 - $8.00",
      image: "/images/sweet-potatoes.jpg",
      description:
        "Indulge in our scrumptious, nutrient-rich sweet potatoes that are perfect for baking, roasting, or mashing. Their natural sweetness and vibrant orange color make them a versatile ingredient for a variety of delectable dishes, both savory and sweet. Give your meals a healthy and flavorful boost with these delicious sweet potatoes.",
      category: "Vegetables",
    },
    {
      id: 5,
      title: "Covo",
      slug: "covo",
      price: "$2.00 - $3.00",
      image: "/images/covo.jpg",
      description:
        "Savor the freshness of our tender covo leaves, brimming with essential nutrients and rich flavor. This versatile green can be sautéed, steamed, or added to soups and stews, offering a delightful taste and texture to any meal. Elevate your culinary experience with the exquisite taste of our fresh covo.",
      category: "Vegetables",
    },
    {
      id: 6,
      title: "Washington Navel Orange Seedlings",
      slug: "washington-navel-oranges",
      price: "$4.00 - $5.00",
      image: "/images/washington-navel-oranges.jpeg",
      description:
        "Jumpstart your home garden with our healthy Washington navel orange seedlings and enjoy the delight of growing your own sweet, seedless oranges. These trees will provide you with a bountiful harvest of delicious, juicy oranges perfect for snacking, juicing, or adding a zesty touch to your favorite recipes. Experience the joy of homegrown freshness with our Washington navel orange seedlings.",
      category: "Seedlings",
    },
    {
      id: 7,
      title: "Eureka Lemons Seedlings",
      slug: "eureka-lemons-seedlings",
      price: "$4.00 - $5.00",
      image: "/images/eureka-lemons.jpeg",
      description:
        "Our Eureka Lemons Seedlings are perfect for those who appreciate the tangy and zesty flavor of fresh lemons. Grown with care, these seedlings will produce an abundant harvest of bright yellow, juicy lemons that are perfect for adding a splash of citrus to your favorite recipes, beverages or even homemade cleaning products. Invest in these seedlings today and enjoy the satisfaction of growing your own fruitful lemon tree!",
      category: "Seedlings",
    },
    {
      id: 8,
      title: "Tommy Atkins Mango Seedlings",
      slug: "tommy-atkins-mango-seedlings",
      price: "$5.00 - $8.00",
      image: "/images/tommy-atkins.jpeg",
      description:
        "Get ready to experience the sweet, tropical taste of your own homegrown Tommy Atkins Mangoes! Our seedlings are carefully grown to ensure a strong and healthy start for your future mango tree. Once mature, the tree will produce large, juicy mangoes with a deliciously sweet and mildly tangy flavor. Perfect for enjoying fresh, in smoothies, or as a delightful addition to salads and desserts. Start your mango-growing journey today and enjoy the fruits of your labor!",
      category: "Seedlings",
    },
    {
      id: 9,
      title: "Clementine Naartjies Seedlings",
      slug: "clementine-naartjies-seedlings",
      price: "$4.00 - $5.00",
      image: "/images/clementine-oranges.jpeg",
      description:
        "Introducing our Clementine Naartjies Seedlings, a wonderful choice for those looking to grow their own sweet and juicy citrus fruits! These seedlings are nurtured to provide a strong foundation for a thriving tree, which will eventually produce an abundance of seedless, easy-to-peel naartjies. Their delightful flavor and convenient size make them perfect for snacking, adding to lunchboxes, or incorporating into a variety of dishes. Start growing your own naartjies today and enjoy the benefits of fresh, homegrown citrus!",
      category: "Seedlings",
    },
  ];


  return (
    <div className="overflow-y-hidden">
      <div className="py-12 2xl:container 2xl:mx-auto flex flex-col justify-center items-center px-4 md:px-6 xl:px-20">
        <h1
          className={`text-xl md:text-2xl xl:text-4xl font-medium leading-5 md:leading-6 xl:leading-9 text-gray-800 ${fraunces.className}`}
        >
         Our Produce
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 xl:mt-12">
          {produce.map((product) => (
            <div key={product.id} className="w-full rounded-lg overflow-hidden">
              <Image src={product.image} width={300} height={450} alt={product.title} className="w-full aspect-square object-cover" />
              <div className="w-full mt-4">
                <div className="flex justify-between items-end">
                 <h3 className="text-neutral-700 font-medium text-xl">{product.title}</h3>
                 <small className="text-sm text-neutral-500">{product.category}</small>
                </div>
                <p className="text-sm text-slate-600">{product.description}</p>
                <h2 className="text-3xl text-slate-700 font-bold mt-2">{product.price}</h2>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
