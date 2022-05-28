import React from "react";
import "./SeoList.css";
export default function SeoList() {
  const SEO_LIST = [
    {
      title: "iphone",
      desc: ": iphone 13 | iphone 13 pro | iphone 11 | Iphone 11Pro Max | iPHONE 12 | Iphone 12 Mini | phone 13 Mini | Iphone SE | Iphone XR",
    },
    {
      title: "Infinix",
      desc: ": INFINIX HOT 11 | INFINIX HOT 11 S | INFINIX HOT 9 PRO",
    },
    {
      title: "Motorola ",
      desc: " Motorola E7 + | Motorola G 5G | Motorola G6",
    },
    {
      title: "Nokia",
      desc: ": Nokia | Nokia N 10 DS | Nokia N 110 4G | Nokia N 215DS | Nokia N 225 4G | Nokia N3310 | Nokia N 5310 | Nokia N 6310",
    },
    {
      title: "Oppo",
      desc: "Oppo F19 Pro | Oppo A15 S | Oppo A16 | Oppo A 31 | Oppo A 53 | Oppo A 53S | Oppo A 54 | OppoA 54 | Oppo A 55 | Oppo F 19 PRO | Oppo F 19 PRO+ | Oppo F 19S | Oppo Reno 6 | Oppo Reno 6 PRO",
    },
    {
      title: "Vivo",
      desc: "Vivo V 21 | Vivo X 50 | VIivo X 60 | Vivo X 70 PRO | Vivo Y 12G | Vivo Y 12S | Vivo Y 20T | Vivo Y 21 | Vivo Y 53S | Vivo Y 72 | Vivo Y 73  ",
    },
    {
      title: "Xiaomi",
      desc: ": Mi 10 Prime | Mi 9i | Mi 10 Prime | Mi 10T | Mi 11X | MI 11 Lite NE | Mi 11 X Pro | MI 11X | Redmi 9 | Redmi 9 A | Redmi 9 Activ | Redmi 9 Power | Redmi 9 Prime | Redmi 9A Sport | MI Note 10 Lite | MI Note 10 Pro | MI Note 10 Pro Max | MI Note 10 5g | MI Note 10T",
    },
    {
      title: "Poco ",
      desc: ": Poco C 3 | Poco 13 GT | Poco M 2 | Poco M 2 PRO | Poco M 3 | Poco X 3 PRO | ",
    },
    {
      title: "Oneplus",
      desc: "One Plus 6T | One Plus 8 Pro | One Plus 8T | One Plus 9 | One Plus 9 Pro | One Plus 9R | One Plus Nord 2 | One Plus Nord CF",
    },
    {
      title: "Samsung",
      desc: " Samsung A 03S | Samsung A12 | Samsung A 50S | Samsung A 51 | Samsung A52S | Samsung A 80 | Samsung B110 | Samsung B315 | Samsung F 1215 | Samsung F12 | Samsung F22 | Samsung F41| Samsung F42 | Samsung M02 | Samsung M02S | Samsung M52 | Samsung Note 10 Lite | Samsung Note 20 | Samsung S20 | Samsung S20 Plus | Samsung S21 | Samsung S21 Plus | Samsung S21 Ultra | Samsung Tab A7 | Samsung Tab A 711TF | Samsung Z Filip 3 | Samsung A22 5G |",
    },
    {
      title: "Home Appliances",
      desc: ": Coffee maker | Blender | Mixer | Toaster | Microwave | Crock pot | Rice cooker | Pressure cooker | griller | Stove | Lamp | Light bulb | Lantern | Torch | iron | Electric drill | Kettle | Water cooker | Electric kettle | Hot pot | Water purifier | Kitchen hood | Electric guitar | Vacuum cleaner | Electric fan | Evaporative cooler | Air conditioner | Oven | Dishwasher | Television | Speaker | Clothes dryer | Washing machine |Refrigerator ",
    },
    {
      title: "Handicrafts",
      desc: "Woodwork | Pottery | Jute | Shell | Brass Handicrafts | Bamboo Handicraft | Phulkari | Buy Handicraft From Cartzone",
    },
    {
      title: "Men Fashion",
      desc: "Artsy | Beach Bum | Beatnik | Biker | Bohemian | Business Casual | Business Forma | Casual| Chav | Classic | Cocktail attire | Cyberpunk | Hip-hop | Hip-star | Military | Minimalist | Mod | Nautical | Rocker | Semi-formal | Ska | Skate-border | Sloane Ranger | Smart Casual | Soft-boy | White-Tie | Vintage",
    },
    {
      title: "Kids Fashion: Boys",
      desc: "T-Shirts | Polo’s | Dress Shirts | Shorts (4 athletic/play and 2 nicer) | Pants (1 pair that is 'nice' and 1 pair that rolls up into shorts) | Jeans | Pairs of Socks | Pajamas | Jacket | Swim Suit | Flip Flops/Sandals | Tennis Shoes | Dress Shoes | Belt | Underwear | Accessories",
    },
    {
      title: "Girls",
      desc: "T-Shirts | Tank Tops | Dress Shirts | Shorts | Capri’s | Pants | Jeans | Skirts | Dresses | Pairs of Socks | Pajamas | Cardigan | Jacket | Swim Suits | Flip Flops/Sandals | Tennis Shoes | Dress Shoes |Tights | Belt| Underwear | Accessories ",
    },
    {
      title: "Women Fashion ",
      desc: ": Midi Dress | Off The Shoulders | Shift Dress | Bodycon Dress | A-Line Dress | Mini Dress | Maxi Dress | Wrap Dress | Halter Dress | High-Low Dress | Sheath Dress | Peplum Dress | Sweater Dress | Pencil Dress | Shirt Dress | Slip Dress | Smock Dress | Ball gown | Mermaid Silhouette Dress | T-Shirt | Tea Length Dress | Cocktail Dress | Denim Dress | Pinafore Dress | Bardot Dress | Tube Dress | Qipao Dress | Long-Sleeve-Dress | Bell-Sleeve-Dress | Strapless Dress | Blazer Dress | Empire Waist Dress | Sun Dress | Kimono Dress | One Shoulder Dress | Handkerchief Hem Dress | Asymmetrical Dress | Bandage Dress | Pouf Dress | Princess Silhouette Dress ",
    },
    {
      title: "Business attire",
      desc: "V-Neck Pull over Sweater | Printed Button | Solid Button Down | Printed Long Sleeve | Sleeveless Shell | V-Neck Or High Collar |Navy Trouser | Black Trouser | Solid Colored | Printed Trouser | Printed Skirt | Pencil Skirt | A-Line Skirt | Flare Dress | Sheath Dress | Flats  Blazer | Jacket | Scarf | Leggings | Belt ",
    },
    {
      title: "Women Traditional Wear",
      desc: ": Sari | wrapped garments | Salwar Kameez | Churidaar | Lehenga Choli | skirt | blouse",
    },
    {
      title: "Women Shoe ",
      desc: "Pumps | Stilettos | Kitten Heels | Ankle Bootie | Ankle Strap Heels | Wedges | Cone Heels Gladiator Sandals | Gladiator Boots | Sling Back Heel | Ballerina Flats | Open Toe Sandals | Peep-Toe-Heels | Cork High Heels | Platform | Spool Heels | Marry Janes | Scarpin | Oxfords | Espadrille Heels | Mules | Trainers | Thigh High Boots | Loafer",
    },
    {
      title: "Men Shoe ",
      desc: "Sneaker | Trainer | Chukka Boot | Loafer | Service Boot | Oxford Shoe | High To  Sneaker | Low Top Sneaker | Derby Shoe | Blucher Shoes | Chelsea Boots | Brogue Shoe | Desert Boots",
    },
    {
      title: "Art",
      desc: "Pencil drawing | Ink drawing | Pen drawing | Photorealism/ Hyperrealism | Cartoon Style | Line Drawing | Architectural Drawing | Geometric Drawing | Tattoo Drawing | Typography Drawing |",
    },
  ];
  return (
    <div className="seolist">
      <div className="seolist__container">
        <div className="seolist__row">
          <span className="seolist__header">Cartzone</span>: E-
          Commerce + Social Commerce with community building for sellers
          headquartered in Kolkata, India. The company is expanding its product
          categories such as consumer electronics, fashion, with lifestyle
          products. We at Cartzone are building new technological
          capabilities mainly aimed to provide better and user friendly digital
          experience with use of Artificial Intelligence and Machine learning
          helping buyers to expand their reach having a delightful shopping
          experience using our platform.
        </div>
        <div className="seolist__header" style={{ margin: "5px 0" }}>
          Brand Directory :
        </div>
        <div className="seolist__header" style={{ margin: "5px 0" }}>
          Mobiles
        </div>
        {SEO_LIST.map((data, i) => {
          return (
            <div key={i} className="seolist__row">
              <span className="seolist__header">{data.title}</span>: {data.desc}
            </div>
          );
        })}
      </div>
    </div>
  );
}
