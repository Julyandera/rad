// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    await prisma.size.deleteMany();
    await prisma.product.deleteMany();
    await prisma.product_Brand.deleteMany();
    await prisma.product_Category.deleteMany();
    await prisma.product_Gender.deleteMany();
    await prisma.banner.deleteMany();
    // await prisma.user.deleteMany();

    await prisma.product_Category.createMany({
        data: [{ name: "FOOTWEAR" }, { name: "APPAREL" }, { name: "BAG" }],
    });

    await prisma.product_Gender.createMany({
        data: [{ name: "MALE" }, { name: "FEMALE" }, { name: "UNISEX" }],
    });

    await prisma.product_Brand.createMany({
        data: [
            { name: "NIKE" },
            { name: "ADIDAS" },
            { name: "VANS" },
            { name: "CONVERSE" },
            { name: "PUMA" },
            { name: "NEW BALANCE" },
        ],
    });

    const categories = await prisma.product_Category.findMany();

    const footwearId = categories.find((category) => category.name === "FOOTWEAR")?.id || 1;
    const apparelId = categories.find((category) => category.name === "APPAREL")?.id || 1;
    const bagId = categories.find((category) => category.name === "BAG")?.id || 1;

    const brands = await prisma.product_Brand.findMany();

    const nikeId = brands.find((brand) => brand.name === "NIKE")?.id || 1;
    const adidasId = brands.find((brand) => brand.name === "ADIDAS")?.id || 1;
    const vansId = brands.find((brand) => brand.name === "VANS")?.id || 1;
    const converseId = brands.find((brand) => brand.name === "CONVERSE")?.id || 1;
    const pumaId = brands.find((brand) => brand.name === "PUMA")?.id || 1;
    const newBalanceId = brands.find((brand) => brand.name === "NEW BALANCE")?.id || 1;

    const genders = await prisma.product_Gender.findMany();

    const maleId = genders.find((gender) => gender.name === "MALE")?.id || 1;
    const femaleId = genders.find((gender) => gender.name === "FEMALE")?.id || 1;

    await prisma.product.createMany({
        data: [
            // FOOTWEAR //
            {
                name: "NIKE ISPA SENSE FLYKNIT",
                colorway: "PHANTOM/BLACK-COCONUT MILK",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHSLH001-2000_1360x.jpg?v=1683106868",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCFH001-2000_1360x.png?v=1683106869",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCTH001-2000_1360x.png?v=1683106869",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCBH000-2000_1360x.png?v=1683106869",
                ],
                description: "Breathe in. Breathe out. The ISPA Sense is your ticket to tranquility. Mixing sustainable materials (it's made with at least 20% recycled content by weight) with meditative comfort, the design pulls inspiration from Zen gardens. The stretchy, bootie-like upper with an airy Flyknit design integrates venting and padding for extra on-foot bliss. Tie it all together with the sleek lacing system and then stay upright with added traction on the outsole. Do good, look good, and overcome the urban environment’s most challenging obstacles with this fresh design that gives new meaning to rest and relaxation.",
                price: 3099000,
                slug: "nike-ispa-sense-flyknit-phantom-black-coconut-milk",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR JORDAN 1 MID",
                colorway: "AQUATONE/CELESTIAL GOLD-WHITE",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHSLH000-2000_1360x.jpg?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCFH001-2000_1360x.png?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCTH001-2000_1360x.png?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCBH000-2000_1360x.png?v=1682737157",
                ],
                description: "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.",
                price: 1939000,
                slug: "nike-air-jordan-1-mid-aquatone-celestial-gold-white",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR JORDAN 1 ZM AIR CMFT 2",
                colorway: "LT OREWOOD BRN/BRIGHT CITRUS-SAIL",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHSLH000-2000_1360x.jpg?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCFH001-2000_1360x.png?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCTH001-2000_1360x.png?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCBH000-2000_1360x.png?v=1682656298",
                ],
                description: "Premium suede and Jordan Brand's signature Formula 23 foam come together to give you an extra luxurious (and extra cozy) AJ1. You don't need to play \"either or\" when it comes to choosing style or comfort with this one—which is nice, 'cause you deserve both.",
                price: 2249000,
                slug: "nike-air-jordan-1-zm-air-cmft-2-lt-orewood-brn-bright-citrus-sail",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR FORCE 1 07 LX",
                colorway: "MICA GREEN/COCONUT MILK-PHOTON DUST",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHSLH000-2000_1360x.jpg?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCFH001-2000_1360x.png?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCTH001-2000_1360x.png?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCBH000-2000_1360x.png?v=1682590263",
                ],
                description: "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                price: 2099000,
                slug: "nike-air-force-1-07-lx-mica-green-coconut-milk-photon-dust",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR FORCE 1 07 LX",
                colorway: "TEAM GOLD/BLACK-SAIL",
                images: [
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHSLH000-2000_1360x.jpg?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCFH001-2000_1360x.png?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCTH001-2000_1360x.png?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCBH000-2000_1360x.png?v=1680536984",
                ],
                description: "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                price: 2099000,
                slug: "nike-air-force-1-07-lx-team-gold-black-sail",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR FORCE 1 07 LX",
                colorway: "PALE IVORY/BLACK-STADIUM GREEN",
                images: [
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHSLH000-2000_1360x.jpg?v=1674726502",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHCFH001-2000_1360x.png?v=1674726499",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHSTH001-2000_1360x.png?v=1674726499",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHCBH000-2000_1360x.png?v=1674726500",
                ],
                description: "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                price: 2099000,
                slug: "nike-air-force-1-07-lx-pale-ivory-black-stadium-green",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NEW BALANCE BB550IST",
                colorway: "SEA SALT/TIMBERWOLF/ALABASTER",
                images: [
                    "https://atmos.co.id/cdn/shop/files/6_1360x.png?v=1682401838",
                    "https://atmos.co.id/cdn/shop/files/5_1360x.png?v=1682401839",
                    "https://atmos.co.id/cdn/shop/files/7_1360x.png?v=1682401839",
                    "https://atmos.co.id/cdn/shop/files/9_1360x.png?v=1682401839",
                ],
                description: "We recreated a timeless classic with the New Balance 550, a tribute to ‘80s pro ballers and the streetwear that defined a hoops generation. With a premium leather upper and a simple and clean design that isn't overbuilt, these shoes were made for the player who knows authenticity.",
                price: 2799000,
                slug: "new-balance-bb550ist-sea-salt-timberwolf-alabaster",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: newBalanceId,
            },
            {
                name: "VANS OLD SKOOL VR3",
                colorway: "BLACK/MARSHMALLOW",
                images: [
                    "https://atmos.co.id/cdn/shop/products/Untitleddesign_25_1360x.png?v=1681285456",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-ALT2_1360x.jpg?v=1681285457",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-ALT1_1360x.jpg?v=1681285455",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-HERO_1360x.jpg?v=1681285456",
                ],
                description: "This season, some of our most iconic Classics have been rebuilt with purposeful choices about the materials we use. Along with uppers made from suede and organic cotton canvas, the Old Skool VR3 utilizes a biobased foam VR3Cush™ footbed for comfort you can feel good about and the new VR3Waffle™ outsole that uses natural rubber while still maintaining the grip and durability that Vans has been known for since ’66.\nOur team has set ambitious sustainability goals. Big or small, all of our efforts add up to positive change. To earn the VR3 Checkerboard globe logo, at least 30% of the product must be made up of one or a combination of recycled, renewable, and/or regenerative materials.",
                price: 1499000,
                slug: "vans-old-skool-vr3-black-marshmallow",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: vansId,
            },
            {
                name: "ADIDAS ADILETTE 22",
                colorway: "GREY FIVE (HP6522)",
                images: [
                    "https://atmos.co.id/cdn/shop/products/HP6522_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663568",
                    "https://atmos.co.id/cdn/shop/products/HP6522_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1680663568",
                    "https://atmos.co.id/cdn/shop/products/HP6522_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1680663567",
                    "https://atmos.co.id/cdn/shop/products/HP6522_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1680663568",
                ],
                description: "For the design of these adidas slides we looked to topographic maps illustrating expeditions to Mars and the dimensional stages of a new planet. And the futuristic vibes don't end there. They're built with material made in part from sugarcane, one step on the road to a more sustainable future. Wear them on diverse terrain from wet to dry.These slides are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
                price: 840000,
                slug: "adidas-adelite-22-grey-five-hp6522",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: adidasId,
            },
            {
                name: "ADIDAS ADILETTE 22",
                colorway: "MAGIC LIME (GY1597)",
                images: [
                    "https://atmos.co.id/cdn/shop/products/GY1597_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1670927500",
                    "https://atmos.co.id/cdn/shop/products/GY1597_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1670927501",
                    "https://atmos.co.id/cdn/shop/products/GY1597_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1670927499",
                    "https://atmos.co.id/cdn/shop/products/GY1597_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1670927499",
                ],
                description: "These adidas Adilette Slides answer the question, \"What would slides look like in space?\" Inspired by 3D topography and human expeditions to Mars, they defy gravity with futuristic design details. The contoured footbed and soft rubber outsole ensure maximum comfort whether you're hitting the showers or the streets.",
                price: 840000,
                slug: "adidas-adelite-22-magic-lime-gy1597",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: adidasId,
            },
            {
                name: "ADIDAS ADILETTE 22",
                colorway: "TECH PURPLE (HP6524)",
                images: [
                    "https://atmos.co.id/cdn/shop/products/HP6524_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663726",
                    "https://atmos.co.id/cdn/shop/products/HP6524_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1680663727",
                    "https://atmos.co.id/cdn/shop/products/HP6524_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1680663728",
                    "https://atmos.co.id/cdn/shop/products/HP6524_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1680663727",
                ],
                description: "For the design of these adidas slides we looked to topographic maps illustrating expeditions to Mars and the dimensional stages of a new planet. And the futuristic vibes don't end there. They're built with material made in part from sugarcane, one step on the road to a more sustainable future. Wear them on diverse terrain from wet to dry.These slides are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
                price: 840000,
                slug: "adidas-adelite-22-tech-purple-hp6524",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: adidasId,
            },
            {
                name: "CONVERSE CHUCK TAYLOR ALL STAR PRO CUT OFF",
                colorway: "BLACK/BLACK/EGRET",
                images: [
                    "https://atmos.co.id/cdn/shop/products/A02136C_2_93e8e388-2d5b-4477-b539-34f34a24c1fd_1360x.jpg?v=1655981412",
                    "https://atmos.co.id/cdn/shop/products/A02136C_1_848ba939-3c8a-4f92-a21b-9eee09bd691f_1360x.jpg?v=1655981412",
                    "https://atmos.co.id/cdn/shop/products/A02136C_4_e0e6261a-d094-4316-ad97-90d053993dd2_1360x.jpg?v=1655981409",
                    "https://atmos.co.id/cdn/shop/products/A02136C_5_28d7a0cf-fa00-4a9d-86eb-0dbda67891ed_1360x.jpg?v=1655981410",
                ],
                description: "Reborn for skateboarding. The Converse CONS Chuck Taylor All Star Pro Mid Top shoe infuses all of the essential design cues of the 1917 original with performance technology to make it a true, skate-ready silhouette. Fully updated for summer with a cut-off, mid-top look inspired by our skateboarding team's customization preferences and a 100% recycled polyester canvas upper, this go-to is ready to ride. A molded CX foam sockliner for cushioning, traction rubber outsole for better boardfeel, and rubber-backed suede for durability rounds out the performance package.",
                price: 1199000,
                slug: "converse-chuck-taylor-all-star-pro-cut-off-black-black-egret",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: converseId,
            },
            {
                name: "CONVERSE CHUCK TAYLOR ALL STAR PRO CUT OFF",
                colorway: "EGRET/RED/CLEMATIS BLUE",
                images: [
                    "https://atmos.co.id/cdn/shop/products/A02137C_2_323ca8cb-0502-49fd-8cdb-3778b73e5607_1360x.jpg?v=1655981393",
                    "https://atmos.co.id/cdn/shop/products/A02137C_1_79bb4388-4ee2-477c-8fb4-5472bc9e4876_1360x.jpg?v=1655981393",
                    "https://atmos.co.id/cdn/shop/products/A02137C_4_3a4a28b7-1edc-48f5-8f50-74fa4ab09ea3_1360x.jpg?v=1655981389",
                    "https://atmos.co.id/cdn/shop/products/A02137C_5_57415c5d-7b40-4ee5-ac8b-85c74889255f_1360x.jpg?v=1655981388",
                ],
                description: "Reborn for skateboarding. The Converse CONS Chuck Taylor All Star Pro Mid Top shoe infuses all of the essential design cues of the 1917 original with performance technology to make it a true, skate-ready silhouette. Fully updated for summer with a cut-off, mid-top look inspired by our skateboarding team's customization preferences and a 100% recycled polyester canvas upper, this go-to is ready to ride. A molded CX foam sockliner for cushioning, traction rubber outsole for better boardfeel, and rubber-backed suede for durability rounds out the performance package.",
                price: 1199000,
                slug: "converse-chuck-taylor-all-star-pro-cut-off-egret-red-clematis-blue",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: converseId,
            },
            {
                name: "PUMA MAYZE SD X DUA LIPA",
                colorway: "BLUE BLACK",
                images: [
                    "https://atmos.co.id/cdn/shop/products/387294_05_sv01_1360x.jpg?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_1360x.png?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_sv04_1360x.png?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_bv_1360x.png?v=1657784653",
                ],
                description: "The second season of PUMA x DUA LIPA is here, and the collection is filled with bold styles with ‘90s influence. This version of the Mayze is no exception, with a stacked sole, and vibrant accents throughout. It’s for the hype girls and the trendsetters – just like Dua.",
                price: 2199000,
                slug: "puma-mayze-sd-x-dua-lipa-blue-black",
                category_id: footwearId,
                gender_id: femaleId,
                brand_id: pumaId,
            },
            {
                name: "ADIDAS SUPERSTAR MILLENCON W",
                colorway: "FTWR WHITE (HQ9018)",
                images: [
                    "https://atmos.co.id/cdn/shop/files/HQ9018_5_FOOTWEAR_Photography_SideMedialCenterView_transparent_1360x.jpg?v=1683173597",
                    "https://atmos.co.id/cdn/shop/files/HQ9018_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1683173598",
                    "https://atmos.co.id/cdn/shop/files/HQ9018_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1683173598",
                    "https://atmos.co.id/cdn/shop/files/HQ9018_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1683173598",
                ],
                description: "From '70s hardwood classic to everyday footwear staple, the adidas Superstar sneaker is a boundary-breaking icon. This version of the shoes dials it up a notch with statement-making proportions emphasized through the interplay of the upper and midsole. The sleek leather upper is taken over by a thick, fluid midsole with double-layered foxing tape for a futuristic feel. A memory foam sockliner lets you stride in comfort and confidence.",
                price: 1800000,
                slug: "adidas-superstar-millencon-w-ftwr-white",
                category_id: footwearId,
                gender_id: femaleId,
                brand_id: adidasId,
            },
            {
                name: "NEW BALANCE M990BT3",
                colorway: "TAN/BLUE",
                images: [
                    "https://atmos.co.id/cdn/shop/files/19_1360x.png?v=1682568861",
                    "https://atmos.co.id/cdn/shop/files/18_1360x.png?v=1682568861",
                    "https://atmos.co.id/cdn/shop/files/16_1360x.png?v=1682568862",
                    "https://atmos.co.id/cdn/shop/files/17_1360x.png?v=1682568861",
                ],
                description: "The 990’s original designers were tasked with creating the single best running shoe on the market. The finished product more than lived up to its billing. When it hit shelves for the first time in 1982 the 990 sported an elegantly understated grey colorway, and a then unheard of three-figure price tag. For avid runners and ahead of the curve tastemakers alike, the 990 was a mark of quality and superior taste. There have been updates to the design since ’82, and more color options, but the 990’s aspirational status symbol aura has never changed. Simply put, the 990 is the shoe so good, that we’ve never stopped making it. The 990v3 features a premium upper construction and ENCAP midsole cushioning.",
                price: 4999000,
                slug: "new-balance-m990bt3-tan-blue",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: newBalanceId,
            },
            {
                name: "CONVERSE X A-COLD-WALL CHUCK 70 GEO",
                colorway: "LILY WHITE/POPPY SEED",
                images: [
                    "https://atmos.co.id/cdn/shop/products/NewProject-2023-03-16T142458.152_1360x.png?v=1678951631",
                    "https://atmos.co.id/cdn/shop/products/NewProject-2023-03-16T142307.512_1360x.png?v=1678951631",
                    "https://atmos.co.id/cdn/shop/products/NewProject-2023-03-16T142445.672_1360x.png?v=1678951631",
                    "https://atmos.co.id/cdn/shop/products/NewProject-2023-03-16T142517.361_1360x.png?v=1678951631",
                ],
                description: "Converse and A-COLD-WALL* continue their successful collaboration with this innovative functional-progressive geo-forma boot. The futuristic sneaker is completely in different shades of white and combines futuristic design with avant-garde style.",
                price: 2999000,
                slug: "converse-x-a-cold-wall-chuck-70-geo-lily-white-poppy-seed",
                category_id: footwearId,
                gender_id: femaleId,
                brand_id: converseId,
            },
            // APPAREL //
            // {
            //     name: "PUMA X DUA LIPA BRALETTE BLACK",
            //     colorway: "BLACK",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1360x.webp?v=1683189598",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1360x.webp?v=1683189598",
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_2_1360x.webp?v=1683189597",
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1_1360x.webp?v=1683189598",
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_3_1360x.webp?v=1683189598",
            //     ],
            //     description: "The second season of PUMA x DUA LIPA has arrived. This season’s line mixes streetwear and sport with bright, ‘90s rave-inspired colours and bold graphics that draw inspiration from basketball and football culture. This cute bralette features a boatneck neckline and the signature DUA LIPA butterfly embroidered on the chest – for that playful DUA LIPA style we love.",
            //     sku: [
            //         { size: "S", qty: 10 },
            //         { size: "M", qty: 10 }
            //     ],
            //     price: 949000,
            //     slug: "puma-x-dua-lipa-bralette-black",
            //     category_id: apparelId,
            //     gender_id: femaleId,
            //     brand_id: pumaId,
            // },
            // {
            //     name: "PUMA X DUA LIPA DRESS PUMA BLACK",
            //     colorway: "BLACK",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Dress-Women_1360x.webp?v=1683188976",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Dress-Women_1360x.webp?v=1683188976",
            //         "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Dress-Women_1_1360x.webp?v=1683188975",
            //     ],
            //     description: "The second season of PUMA x DUA LIPA has arrived. This season’s line mixes streetwear and sport with bright, ‘90s rave-inspired colours and bold graphics that draw inspiration from basketball and football culture, and celebrates the pop icon. This regular-length dress features double-faced jacquard fabric, making it a versatile casual piece for everyday wear.",
            //     sku: [
            //         { size: "S", qty: 10 },
            //         { size: "M", qty: 10 },
            //         { size: "L", qty: 10 },
            //         { size: "XL", qty: 10 }
            //     ],
            //     price: 1499000,
            //     slug: "puma-x-dua-lipa-dress-puma-black",
            //     category_id: apparelId,
            //     gender_id: femaleId,
            //     brand_id: pumaId,
            // },
            // {
            //     name: "PUMA X BUTTER GOODS LIGHTWEIGHT POP OVER",
            //     colorway: "BLUE",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/22-04-2022_JA_534055-84_1_1_1360x.webp?v=1681282631",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/22-04-2022_JA_534055-84_1_1_1360x.webp?v=1681282631",
            //     ],
            //     description: "PUMA X BUTTER GOODS LIGHTWEIGHT POP OVER",
            //     sku: [
            //         { size: "M", qty: 10 }
            //     ],
            //     price: 3199000,
            //     slug: "puma-x-butter-goods-lightweight-pop-over",
            //     category_id: apparelId,
            //     gender_id: maleId,
            //     brand_id: pumaId,
            // },
            // {
            //     name: "VANS MOONEYES FLEECE PO",
            //     colorway: "BLACK",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/VN0000BCBLK-ALT9_1360x.jpg?v=1662967777",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/VN0000BCBLK-ALT9_1360x.jpg?v=1662967777",
            //         "https://atmos.co.id/cdn/shop/products/VN0000BCBLK-HERO_1360x.jpg?v=1662967777",
            //         "https://atmos.co.id/cdn/shop/products/VN0000BCBLK-ALT1_1360x.jpg?v=1662967778",
            //         "https://atmos.co.id/cdn/shop/products/VN0000BCBLK-ALT2_1360x.jpg?v=1662967778",
            //     ],
            //     description: "Mooneyes products and logos are an indelible part of hot rod nostalgia, easily recognizable to gearheads and novices alike. Located in Santa Fe Springs, California, since the 1950s, Mooneyes is known for producing high quality parts for hot rods and motorcycles that look great and get the job done right. Paying tribute to the storied histories of both Vans and Mooneyes, the Mooneyes Fleece Pullover blends iconic branding from both companies with comfy fleece and classic hoodie styling",
            //     sku: [
            //         { size: "M", qty: 10 },
            //         { size: "L", qty: 10 },
            //         { size: "XL", qty: 10 }
            //     ],
            //     price: 1399000,
            //     slug: "vans-mooneyes-fleece-po-black",
            //     category_id: apparelId,
            //     gender_id: maleId,
            //     brand_id: vansId,
            // },
            // {
            //     name: "VANS MOONEYES SS TEE",
            //     colorway: "VIBRANT YELLOW",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/VN0000B9189-ALT9_1360x.webp?v=1661771148",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/VN0000B9189-ALT9_1360x.webp?v=1661771148",
            //         "https://atmos.co.id/cdn/shop/products/VN0000B9189-ALT10_1360x.webp?v=1661771149",
            //         "https://atmos.co.id/cdn/shop/products/VN0000B9189-ALT2_1360x.webp?v=1661771149",
            //         "https://atmos.co.id/cdn/shop/products/VN0000B9189-HERO_1360x.jpg?v=1661771150",
            //     ],
            //     description: "Mooneyes products and logos are an indelible part of hot rod nostalgia, easily recognizable to gearheads and novices alike. Located in Santa Fe Springs, California, since the 1950s, Mooneyes is known for producing high quality parts for hot rods and motorcycles that look great and get the job done right. Paying tribute to the storied histories of both Vans and Mooneyes, the Mooneyes T-Shirt blends iconic branding from both companies with heavy weight carded ringspun cotton and an eye-catching yellow colorway.",
            //     sku: [
            //         { size: "S", qty: 10 },
            //         { size: "M", qty: 0 },
            //         { size: "L", qty: 10 },
            //         { size: "XL", qty: 0 }
            //     ],
            //     price: 699000,
            //     slug: "vans-mooneyes-ss-tee-vibrant-yellow",
            //     category_id: apparelId,
            //     gender_id: maleId,
            //     brand_id: vansId,
            // },
            // {
            //     name: "NIKE AS M NK NRG MTZ TEE SS",
            //     colorway: "OCEAN CUBE",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/DV0679-366-PHSYM001-2000_1360x.png?v=1677760251",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/DV0679-366-PHSYM001-2000_1360x.png?v=1677760251",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-366-PHSFM001-2000_1360x.png?v=1677760250",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-366-PHSYM002-2000_1360x.png?v=1677760251",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-366-PHSBM001-2000_1360x.png?v=1677760252",
            //     ],
            //     description: "Made with heavyweight cotton in a roomy fit for easy comfort and laid-back vibes, this Nike tee features geometric graphics on the front, with our Pinwheel Swoosh design at the center, nodding to our journey forward.",
            //     sku: [
            //         { size: "M", qty: 0 },
            //     ],
            //     price: 549000,
            //     slug: "nike-as-m-nk-nrg-mtz-tee-ss-ocean-cube",
            //     category_id: apparelId,
            //     gender_id: maleId,
            //     brand_id: nikeId,
            // },
            // {
            //     name: "NIKE AS M NK NRG MTZ TEE SS",
            //     colorway: "DOLL",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/DV0679-530-PHSYM001-2000_1360x.png?v=1677760087",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/DV0679-530-PHSYM001-2000_1360x.png?v=1677760087",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-530-PHSYM003-2000_1360x.png?v=1677760087",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-530-PHSYM002-2000_1360x.png?v=1677760088",
            //         "https://atmos.co.id/cdn/shop/products/DV0679-530-PHSBM001-2000_1360x.png?v=1677760088",
            //     ],
            //     description: "Made with heavyweight cotton in a roomy fit for easy comfort and laid-back vibes, this Nike tee features geometric graphics on the front, with our Pinwheel Swoosh design at the center, nodding to our journey forward.",
            //     sku: [
            //         { size: "M", qty: 0 },
            //         { size: "L", qty: 0 },
            //     ],
            //     price: 549000,
            //     slug: "nike-as-m-nk-nrg-mtz-tee-ss-doll",
            //     category_id: apparelId,
            //     gender_id: maleId,
            //     brand_id: nikeId,
            // },
            // // BAG //
            // {
            //     name: "ADIDAS A.S SHOPPER",
            //     colorway: "BLACK",
            //     main_image:
            //         "https://atmos.co.id/cdn/shop/products/HZ7256_1_HARDWARE_Photography_FrontCenterView_transparent_1360x.png?v=1674642434",
            //     images: [
            //         "https://atmos.co.id/cdn/shop/products/HZ7256_1_HARDWARE_Photography_FrontCenterView_transparent_1360x.png?v=1674642434",
            //         "https://atmos.co.id/cdn/shop/products/HZ7256_4_HARDWARE_Photography_FrontInsideView_transparent_1360x.png?v=1674642435",
            //         "https://atmos.co.id/cdn/shop/products/HZ7256_6_HARDWARE_Photography_DetailView2_transparent_1360x.png?v=1674642436",
            //         "https://atmos.co.id/cdn/shop/products/HZ7256_2_HARDWARE_Photography_BackCenterView_transparent_1360x.png?v=1674642435",
            //     ],
            //     description: "Walk in style with this adidas shopper, created in collaboration with graffiti artist Andre Saraiva. Equipped with two carry straps, using durable canvas. A bag featuring graphics that celebrate love and acceptance. It's a style that doesn't choose the scene, so you can take it anywhere. Let's leave footprints of love wherever we go.",
            //     sku: [
            //         { size: "NS", qty: 10 }
            //     ],
            //     price: 900000,
            //     slug: "adidas-a-s-shopper-black",
            //     category_id: bagId,
            //     gender_id: femaleId,
            //     brand_id: adidasId,
            // }
        ],
    });

    const products = await prisma.product.findMany();

    const nikeispasenseflyknitphantomblackcoconutmilk =
        products.find((product) => product.slug === "nike-ispa-sense-flyknit-phantom-black-coconut-milk")
            ?.id || 1;
    const nikeairjordan1midaquatonecelestialgoldwhite =
        products.find((product) => product.slug === "nike-air-jordan-1-mid-aquatone-celestial-gold-white")
            ?.id || 1;
    const nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail =
        products.find((product) => product.slug === "nike-air-jordan-1-zm-air-cmft-2-lt-orewood-brn-bright-citrus-sail")
            ?.id || 1;
    const nikeairforce107lxmicagreencoconutmilkphotondust =
        products.find((product) => product.slug === "nike-air-force-1-07-lx-mica-green-coconut-milk-photon-dust")
            ?.id || 1;
    const nikeairforce107lxteamgoldblacksail =
        products.find((product) => product.slug === "nike-air-force-1-07-lx-team-gold-black-sail")
            ?.id || 1;
    const nikeairforce107lxpaleivoryblackstadiumgreen =
        products.find((product) => product.slug === "nike-air-force-1-07-lx-pale-ivory-black-stadium-green")
            ?.id || 1;
    const newbalancebb550istseasalttimberwolfalabaster =
        products.find((product) => product.slug === "new-balance-bb550ist-sea-salt-timberwolf-alabaster")
            ?.id || 1;
    const vansoldskoolvr3blackmarshmallow =
        products.find((product) => product.slug === "vans-old-skool-vr3-black-marshmallow")
            ?.id || 1;
    const adidasadelite22greyfivehp6522 =
        products.find((product) => product.slug === "adidas-adelite-22-grey-five-hp6522")
            ?.id || 1;
    const adidasadelite22magiclimegy1597 =
        products.find((product) => product.slug === "adidas-adelite-22-magic-lime-gy1597")
            ?.id || 1;
    const adidasadelite22techpurplehp6524 =
        products.find((product) => product.slug === "adidas-adelite-22-tech-purple-hp6524")
            ?.id || 1;
    const conversechucktaylorallstarprocutoffblackblackegret =
        products.find((product) => product.slug === "converse-chuck-taylor-all-star-pro-cut-off-black-black-egret")
            ?.id || 1;
    const conversechucktaylorallstarprocutoffegretredclematisblue =
        products.find((product) => product.slug === "converse-chuck-taylor-all-star-pro-cut-off-egret-red-clematis-blue")
            ?.id || 1;
    const pumamayzesdxdualipablueblack =
        products.find((product) => product.slug === "puma-mayze-sd-x-dua-lipa-blue-black")
            ?.id || 1;
    const adidassuperstarmillenconwftwrwhite =
        products.find((product) => product.slug === "adidas-superstar-millencon-w-ftwr-white")
            ?.id || 1;
    const newbalancem990bt3tanblue =
        products.find((product) => product.slug === "new-balance-m990bt3-tan-blue")
            ?.id || 1;
    const conversexacoldwallchuck70geolilywhitepoppyseed =
        products.find((product) => product.slug === "converse-x-a-cold-wall-chuck-70-geo-lily-white-poppy-seed")
            ?.id || 1;

    await prisma.size.createMany({
        data: [
            {
                size: "US 9.5",
                price: 3100000,
                qty: 5,
                product_id: nikeispasenseflyknitphantomblackcoconutmilk
            },
            {
                size: "US 10",
                price: 3099000,
                qty: 5,
                product_id: nikeispasenseflyknitphantomblackcoconutmilk
            },
            {
                size: "US 10.5",
                price: 3099000,
                qty: 5,
                product_id: nikeispasenseflyknitphantomblackcoconutmilk
            },
            {
                size: "US 8",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 8.5",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 9",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 9.5",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 10",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 10.5",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 11",
                price: 1939000,
                qty: 5,
                product_id: nikeairjordan1midaquatonecelestialgoldwhite
            },
            {
                size: "US 8",
                price: 2249000,
                qty: 0,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 8.5",
                price: 2249000,
                qty: 0,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 9",
                price: 2249000,
                qty: 0,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 9.5",
                price: 2249000,
                qty: 0,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 10",
                price: 2300000,
                qty: 10,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 10.5",
                price: 2249000,
                qty: 0,
                product_id: nikeairjordan1zmaircmft2ltorewoodbrnbrightcitrussail
            },
            {
                size: "US 7",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 7,5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 8",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 8.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 9",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 9.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 10",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 10.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxmicagreencoconutmilkphotondust
            },
            {
                size: "US 6",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 6.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 7",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 7,5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 8",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 8.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 9",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 9.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 10",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 10.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxteamgoldblacksail
            },
            {
                size: "US 7",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 8",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 8.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 9",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 9.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 10",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 10.5",
                price: 2099000,
                qty: 5,
                product_id: nikeairforce107lxpaleivoryblackstadiumgreen
            },
            {
                size: "US 5",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 5.5",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 6",
                price: 2799000,
                qty: 0,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 7",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 7.5",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 8",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 8.5",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 9",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 9.5",
                price: 2799000,
                qty: 0,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 10",
                price: 2799000,
                qty: 0,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 11",
                price: 2799000,
                qty: 5,
                product_id: newbalancebb550istseasalttimberwolfalabaster
            },
            {
                size: "US 7",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 8",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 8.5",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 9",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 9.5",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 10",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 11",
                price: 1499000,
                qty: 5,
                product_id: vansoldskoolvr3blackmarshmallow
            },
            {
                size: "US 5",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 6",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 7",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 8",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 9",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 10",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 11",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 12",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22greyfivehp6522
            },
            {
                size: "US 5",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 6",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 7",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 8",
                price: 840000,
                qty: 10,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 9",
                price: 840000,
                qty: 10,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 10",
                price: 840000,
                qty: 5,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 11",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 12",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22magiclimegy1597
            },
            {
                size: "US 6",
                price: 840000,
                qty: 15,
                product_id: adidasadelite22techpurplehp6524
            },
            {
                size: "US 7",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22techpurplehp6524
            },
            {
                size: "US 8",
                price: 840000,
                qty: 0,
                product_id: adidasadelite22techpurplehp6524
            },
            {
                size: "US 7",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 7.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 8.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 9.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 10",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 11",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffblackblackegret
            },
            {
                size: "US 7",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "US 7.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "US 8.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "US 9.5",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "US 10",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "US 11",
                price: 1199000,
                qty: 10,
                product_id: conversechucktaylorallstarprocutoffegretredclematisblue
            },
            {
                size: "UK 4",
                price: 2199000,
                qty: 10,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 4.5",
                price: 2199000,
                qty: 10,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 5",
                price: 2199000,
                qty: 10,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 5.5",
                price: 2199000,
                qty: 0,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 6",
                price: 2199000,
                qty: 10,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 6.5",
                price: 2199000,
                qty: 0,
                product_id: pumamayzesdxdualipablueblack
            },
            {
                size: "UK 4",
                price: 1800000,
                qty: 10,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 4.5",
                price: 1800000,
                qty: 10,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 5",
                price: 1800000,
                qty: 10,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 5.5",
                price: 1800000,
                qty: 0,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 6",
                price: 1800000,
                qty: 10,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 6.5",
                price: 1800000,
                qty: 0,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 7",
                price: 1800000,
                qty: 10,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "UK 7.5",
                price: 1800000,
                qty: 0,
                product_id: adidassuperstarmillenconwftwrwhite
            },
            {
                size: "US 7",
                price: 4999000,
                qty: 10,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 7.5",
                price: 4999000,
                qty: 10,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 8",
                price: 4999000,
                qty: 10,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 8.5",
                price: 4999000,
                qty: 0,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 9",
                price: 4999000,
                qty: 10,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 9.5",
                price: 4999000,
                qty: 0,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 10",
                price: 4999000,
                qty: 0,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 11",
                price: 4999000,
                qty: 10,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 12",
                price: 4999000,
                qty: 0,
                product_id: newbalancem990bt3tanblue
            },
            {
                size: "US 4",
                price: 2999000,
                qty: 10,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 5.5",
                price: 2999000,
                qty: 10,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 6.5",
                price: 2999000,
                qty: 10,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 7",
                price: 2999000,
                qty: 0,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 7.5",
                price: 2999000,
                qty: 0,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 8.5",
                price: 2999000,
                qty: 0,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
            {
                size: "US 9.5",
                price: 2999000,
                qty: 0,
                product_id: conversexacoldwallchuck70geolilywhitepoppyseed
            },
        ]
    })


    await prisma.banner.createMany({
        data: [
            {
                related_product: "adidas-superstar-millencon-w-ftwr-white",
                images: [
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_MINI_BANNER_SUPERSTAR_MILLENCON_W_480x@2x.progressive.jpg?v=1683183873",
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_2808_x_936_Ftwr_White_480x@2x.progressive.jpg?v=1683183873",
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_2808_x_936_Ftwr_White_768x@2x.progressive.jpg?v=1683183873",
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_2808_x_936_Ftwr_White_992x@2x.progressive.jpg?v=1683183873",
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_2808_x_936_Ftwr_White_1280x@2x.progressive.jpg?v=1683183873",
                    "//atmos.co.id/cdn/shop/files/ATMOS_-_2808_x_936_Ftwr_White_1440x@2x.progressive.jpg?v=1683183873",
                ]
            },
            {
                related_product: "new-balance-m990bt3-tan-blue",
                images: [
                    "//atmos.co.id/cdn/shop/files/4_2_d709073c-9976-45a3-97ff-9292d625b5a9_480x@2x.progressive.jpg?v=1683003596",
                    "//atmos.co.id/cdn/shop/files/3_3_b1a77da0-035e-464d-936a-2fa022f56e6e_480x@2x.progressive.jpg?v=1683003598",
                    "//atmos.co.id/cdn/shop/files/3_3_b1a77da0-035e-464d-936a-2fa022f56e6e_768x@2x.progressive.jpg?v=1683003598",
                    "//atmos.co.id/cdn/shop/files/3_3_b1a77da0-035e-464d-936a-2fa022f56e6e_992x@2x.progressive.jpg?v=1683003598",
                    "//atmos.co.id/cdn/shop/files/3_3_b1a77da0-035e-464d-936a-2fa022f56e6e_1280x@2x.progressive.jpg?v=1683003598",
                    "//atmos.co.id/cdn/shop/files/3_3_b1a77da0-035e-464d-936a-2fa022f56e6e_1440x@2x.progressive.jpg?v=1683003598"
                ]
            },
            {
                related_product: "converse-x-a-cold-wall-chuck-70-geo-lily-white-poppy-seed",
                images: [
                    "//atmos.co.id/cdn/shop/files/atmos_6_april_mini_480x@2x.progressive.jpg?v=1681111662",
                    "//atmos.co.id/cdn/shop/files/banner_6_april_480x@2x.progressive.jpg?v=1681111662",
                    "//atmos.co.id/cdn/shop/files/banner_6_april_768x@2x.progressive.jpg?v=1681111662",
                    "//atmos.co.id/cdn/shop/files/banner_6_april_992x@2x.progressive.jpg?v=1681111662",
                    "//atmos.co.id/cdn/shop/files/banner_6_april_1280x@2x.progressive.jpg?v=1681111662",
                    "//atmos.co.id/cdn/shop/files/banner_6_april_1440x@2x.progressive.jpg?v=1681111662"
                ]
            }
        ]
    })

    //   const userLaith = await prisma.user.create({
    //     data: {
    //       first_name: "Laith",
    //       last_name: "Harb",
    //       email: "laith@hotmail.com",
    //       city: "ottawa",
    //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
    //       phone: "1112223333",
    //     },
    //   });

    //   const userJosh = await prisma.user.create({
    //     data: {
    //       first_name: "Josh",
    //       last_name: "Allen",
    //       email: "josh@hotmail.com",
    //       city: "toronto",
    //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
    //       phone: "1112223333",
    //     },
    //   });

    //   const userLebron = await prisma.user.create({
    //     data: {
    //       first_name: "LeBron",
    //       last_name: "James",
    //       email: "lebron@hotmail.com",
    //       city: "niagara",
    //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
    //       phone: "1112223333",
    //     },
    //   });

    //   const userCassidy = await prisma.user.create({
    //     data: {
    //       first_name: "Cassidy",
    //       last_name: "Marksom",
    //       email: "cassidy@hotmail.com",
    //       city: "toronto",
    //       password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
    //       phone: "1112223333",
    //     },
    //   });

    //   await prisma.review.createMany({
    //     data: [
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
    //         rating: 5,
    //         restaurant_id: vivaanId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
    //         rating: 5,
    //         restaurant_id: bluRistoranteId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
    //         rating: 5,
    //         restaurant_id: elCatrinId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
    //         rating: 4,
    //         restaurant_id: stelvioId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "Extremely disappointing in our experience.",
    //         rating: 2,
    //         restaurant_id: laBartolaId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
    //         rating: 5,
    //         restaurant_id: elCatrinId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
    //         rating: 5,
    //         restaurant_id: kamasutraIndianId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Laith",
    //         last_name: "Harb",
    //         text: "Restaurant was loud and crowded. Food is not worth the price.",
    //         rating: 3,
    //         restaurant_id: eldoradoTacoId,
    //         user_id: userLaith.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
    //         rating: 4,
    //         restaurant_id: vivaanId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
    //         rating: 5,
    //         restaurant_id: sofiaId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
    //         rating: 3,
    //         restaurant_id: curryishTavernId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
    //         rating: 3,
    //         restaurant_id: adrakYorkvilleId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "Wonderful food and service.",
    //         rating: 5,
    //         restaurant_id: coconutLagoonId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "Josh",
    //         last_name: "Allen",
    //         text: "Great food, great staff. You can’t ask for much more from a restaurant.",
    //         rating: 5,
    //         restaurant_id: bluRistoranteId,
    //         user_id: userJosh.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
    //         rating: 5,
    //         restaurant_id: RamaKrishnaId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
    //         rating: 4,
    //         restaurant_id: lastTrainToDelhiId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
    //         rating: 4,
    //         restaurant_id: curryishTavernId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
    //         rating: 5,
    //         restaurant_id: pukkaId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "Very nice evening spent with special family.",
    //         rating: 5,
    //         restaurant_id: mariachisId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "LeBron",
    //         last_name: "James",
    //         text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
    //         rating: 4,
    //         restaurant_id: eldoradoTacoId,
    //         user_id: userLebron.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
    //         rating: 5,
    //         restaurant_id: mariachisId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
    //         rating: 4,
    //         restaurant_id: stelvioId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
    //         rating: 5,
    //         restaurant_id: coconutLagoonId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
    //         rating: 4,
    //         restaurant_id: bluRistoranteId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
    //         rating: 3,
    //         restaurant_id: laBartolaId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
    //         rating: 4,
    //         restaurant_id: eldoradoTacoId,
    //         user_id: userCassidy.id,
    //       },
    //       {
    //         first_name: "Cassidy",
    //         last_name: "Mancher",
    //         text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
    //         rating: 4,
    //         restaurant_id: utsavId,
    //         user_id: userCassidy.id,
    //       },
    //     ],
    //   });

    //   await prisma.table.createMany({
    //     data: [
    //       {
    //         restaurant_id: vivaanId,
    //         seats: 4,
    //       },
    //       {
    //         restaurant_id: vivaanId,
    //         seats: 4,
    //       },
    //       {
    //         restaurant_id: vivaanId,
    //         seats: 2,
    //       },
    //     ],
    //   });

    res.status(200).json({ name: "Prisma Seeding" });
}
