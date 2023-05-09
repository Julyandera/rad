// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product_Gender, Product_Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //   await prisma.table.deleteMany();
    // await prisma.review.deleteMany();
    await prisma.product.deleteMany();
    await prisma.product_Brand.deleteMany();
    await prisma.product_Category.deleteMany();
    await prisma.product_Gender.deleteMany();
    await prisma.product_Size.deleteMany();
    await prisma.product_Style.deleteMany();
    // await prisma.user.deleteMany();

    await prisma.product_Category.createMany({
        data: [{ name: "FOOTWEAR" }, { name: "APPAREL" }, { name: "BAG" }],
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

    await prisma.product_Gender.createMany({
        data: [{ name: "MALE" }, { name: "FEMALE" }],
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
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR JORDAN 1 MID",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR JORDAN 1 ZM AIR CMFT 2",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NIKE AIR FORCE 1 07 LX",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "NEW BALANCE BB550IST",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: newBalanceId,
            },
            {
                name: "VANS OLD SKOOL VR3",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: vansId,
            },
            {
                name: "NIKE AIR JORDAN 1 MID",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: nikeId,
            },
            {
                name: "ADIDAS ADILETTE 22",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: adidasId,
            },
            {
                name: "CONVERSE CHUCK TAYLOR ALL STAR PRO CUT OFF",
                category_id: footwearId,
                gender_id: maleId,
                brand_id: converseId,
            },
            {
                name: "PUMA MAYZE SD X DUA LIPA",
                category_id: footwearId,
                gender_id: femaleId,
                brand_id: pumaId,
            },
            // APPAREL //
            {
                name: "PUMA X DUA LIPA BRALETTE BLACK",
                category_id: apparelId,
                gender_id: femaleId,
                brand_id: pumaId,
            },
            // BAG //
            {
                name: "ADIDAS A.S SHOPPER",
                category_id: bagId,
                gender_id: femaleId,
                brand_id: adidasId,
            }
        ],
    });

    const products = await prisma.product.findMany();

    const nikeIspaSenseFlyknitId = products.find((product) => product.name === "NIKE ISPA SENSE FLYKNIT")?.id || 1;
    const nikeAirJordan1MidId = products.find((product) => product.name === "NIKE AIR JORDAN 1 MID")?.id || 1;
    const nikeAirJordan1ZmAirCmft2Id = products.find((product) => product.name === "NIKE AIR JORDAN 1 ZM AIR CMFT 2")?.id || 1;
    const nikeAirForce107LxId = products.find((product) => product.name === "NIKE AIR FORCE 1 07 LX")?.id || 1;
    const newBalanceBb550istId = products.find((product) => product.name === "NEW BALANCE BB550IST")?.id || 1;
    const vansOldSkoolVr3Id = products.find((product) => product.name === "VANS OLD SKOOL VR3")?.id || 1;
    const adidasAdelite22Id = products.find((product) => product.name === "ADIDAS ADILETTE 22")?.id || 1;
    const converseChuckTaylorAllStarProCutOffId = products.find((product) => product.name === "CONVERSE CHUCK TAYLOR ALL STAR PRO CUT OFF")?.id || 1;
    const pumaMayzeSdXDuaLipaId = products.find((product) => product.name === "PUMA MAYZE SD X DUA LIPA")?.id || 1;
    const pumaXDuaLipaBraletteBlackId = products.find((product) => product.name === "PUMA X DUA LIPA BRALETTE BLACK")?.id || 1;
    const adidasASShopperId = products.find((product) => product.name === "PUMA MAYZE SD X DUA LIPA")?.id || 1;

    await prisma.product_Style.createMany({
        data: [
            {
                color: "PHANTOM/BLACK-COCONUT MILK",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHSLH001-2000_1360x.jpg?v=1683106868",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHSLH001-2000_1360x.jpg?v=1683106868",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCFH001-2000_1360x.png?v=1683106869",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCTH001-2000_1360x.png?v=1683106869",
                    "https://atmos.co.id/cdn/shop/files/AURORA_CW3203-001_PHCBH000-2000_1360x.png?v=1683106869",
                ],
                description:
                    "Breathe in. Breathe out. The ISPA Sense is your ticket to tranquility. Mixing sustainable materials (it's made with at least 20% recycled content by weight) with meditative comfort, the design pulls inspiration from Zen gardens. The stretchy, bootie-like upper with an airy Flyknit design integrates venting and padding for extra on-foot bliss. Tie it all together with the sleek lacing system and then stay upright with added traction on the outsole. Do good, look good, and overcome the urban environment’s most challenging obstacles with this fresh design that gives new meaning to rest and relaxation.",
                product_id: nikeIspaSenseFlyknitId,
                slug: "nike-ispa-sense-flyknit-phantom",
            },
            {
                color: "AQUATONE/CELESTIAL GOLD-WHITE",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHSLH000-2000_1360x.jpg?v=1682737157",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHSLH000-2000_1360x.jpg?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCFH001-2000_1360x.png?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCTH001-2000_1360x.png?v=1682737157",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DQ8426-400_PHCBH000-2000_1360x.png?v=1682737157",
                ],
                description:
                    "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.",
                product_id: nikeAirJordan1MidId,
                slug: "nike-air-jordan-1-mid-aquatone",
            },
            {
                color: "LT OREWOOD BRN/BRIGHT CITRUS-SAIL",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHSLH000-2000_1360x.jpg?v=1682656298",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHSLH000-2000_1360x.jpg?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCFH001-2000_1360x.png?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCTH001-2000_1360x.png?v=1682656298",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV1307-180_PHCBH000-2000_1360x.png?v=1682656298",
                ],
                description:
                    "Premium suede and Jordan Brand's signature Formula 23 foam come together to give you an extra luxurious (and extra cozy) AJ1. You don't need to play \"either or\" when it comes to choosing style or comfort with this one—which is nice, 'cause you deserve both.",
                product_id: nikeAirJordan1ZmAirCmft2Id,
                slug: "nike-air-jordan-1-zm-air-cmft-2-lt-orewood-brn",
            },
            {
                color: "MICA GREEN/COCONUT MILK-PHOTON DUST",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHSLH000-2000_1360x.jpg?v=1682590263",
                images: [
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHSLH000-2000_1360x.jpg?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCFH001-2000_1360x.png?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCTH001-2000_1360x.png?v=1682590263",
                    "https://atmos.co.id/cdn/shop/files/AURORA_DV7186-300_PHCBH000-2000_1360x.png?v=1682590263",
                ],
                description:
                    "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                product_id: nikeAirForce107LxId,
                slug: "nike-air-force-1-07-lx-mica-green",
            },
            {
                color: "TEAM GOLD/BLACK-SAIL",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHSLH000-2000_1360x.jpg?v=1680536984",
                images: [
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHSLH000-2000_1360x.jpg?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCFH001-2000_1360x.png?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCTH001-2000_1360x.png?v=1680536984",
                    "https://atmos.co.id/cdn/shop/products/AURORA_DV7186-700_PHCBH000-2000_1360x.png?v=1680536984",
                ],
                description:
                    "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                product_id: nikeAirForce107LxId,
                slug: "nike-air-force-1-07-lx-team-gold",
            },
            {
                color: "PALE IVORY/BLACK-STADIUM GREEN",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHSLH000-2000_1360x.jpg?v=1674726502",
                images: [
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHSLH000-2000_1360x.jpg?v=1674726502",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHCFH001-2000_1360x.png?v=1674726499",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHSTH001-2000_1360x.png?v=1674726499",
                    "https://atmos.co.id/cdn/shop/products/DV0791-100-PHCBH000-2000_1360x.png?v=1674726500",
                ],
                description:
                    "Tumbled leather. Premium canvas. Easy-to-style colors. This AF1 makes a subdued statement, adding the perfect polish to your 'fit. With era-echoing ‘80s construction, we kept everything you love about this modern style staple.",
                product_id: nikeAirForce107LxId,
                slug: "nike-air-force-1-07-lx-plae-ivory",
            },
            {
                color: "SEA SALT/TIMBERWOLF/ALABASTER",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/6_1360x.png?v=1682401838",
                images: [
                    "https://atmos.co.id/cdn/shop/files/6_1360x.png?v=1682401838",
                    "https://atmos.co.id/cdn/shop/files/5_1360x.png?v=1682401839",
                    "https://atmos.co.id/cdn/shop/files/7_1360x.png?v=1682401839",
                    "https://atmos.co.id/cdn/shop/files/9_1360x.png?v=1682401839",
                ],
                description:
                    "We recreated a timeless classic with the New Balance 550, a tribute to ‘80s pro ballers and the streetwear that defined a hoops generation. With a premium leather upper and a simple and clean design that isn't overbuilt, these shoes were made for the player who knows authenticity.",
                product_id: newBalanceBb550istId,
                slug: "new-balance-bb550ist-sea-salt-timberwolf-alabaster",
            },
            {
                color: "BLACK/MARSHMALLOW",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/Untitleddesign_25_1360x.png?v=1681285456",
                images: [
                    "https://atmos.co.id/cdn/shop/products/Untitleddesign_25_1360x.png?v=1681285456",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-ALT2_1360x.jpg?v=1681285457",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-ALT1_1360x.jpg?v=1681285455",
                    "https://atmos.co.id/cdn/shop/products/VN0005UB1KP-HERO_1360x.jpg?v=1681285456",
                ],
                description:
                    "This season, some of our most iconic Classics have been rebuilt with purposeful choices about the materials we use. Along with uppers made from suede and organic cotton canvas, the Old Skool VR3 utilizes a biobased foam VR3Cush™ footbed for comfort you can feel good about and the new VR3Waffle™ outsole that uses natural rubber while still maintaining the grip and durability that Vans has been known for since ’66.\nOur team has set ambitious sustainability goals. Big or small, all of our efforts add up to positive change. To earn the VR3 Checkerboard globe logo, at least 30% of the product must be made up of one or a combination of recycled, renewable, and/or regenerative materials.",
                product_id: vansOldSkoolVr3Id,
                slug: "vans-old-skool-vr3-black-marshmallow",
            },
            {
                color: "GREY FIVE (HP6522)",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/HP6522_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663568",
                images: [
                    "https://atmos.co.id/cdn/shop/products/HP6522_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663568",
                    "https://atmos.co.id/cdn/shop/products/HP6522_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1680663568",
                    "https://atmos.co.id/cdn/shop/products/HP6522_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1680663567",
                    "https://atmos.co.id/cdn/shop/products/HP6522_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1680663568",
                ],
                description: "For the design of these adidas slides we looked to topographic maps illustrating expeditions to Mars and the dimensional stages of a new planet. And the futuristic vibes don't end there. They're built with material made in part from sugarcane, one step on the road to a more sustainable future. Wear them on diverse terrain from wet to dry.These slides are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
                product_id: adidasAdelite22Id,
                slug: "adidas-adelite-22-grey-five-hp6522",
            },
            {
                color: "TECH PURPLE (HP6524)",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/HP6524_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663726",
                images: [
                    "https://atmos.co.id/cdn/shop/products/HP6524_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1680663726",
                    "https://atmos.co.id/cdn/shop/products/HP6524_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1680663727",
                    "https://atmos.co.id/cdn/shop/products/HP6524_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1680663728",
                    "https://atmos.co.id/cdn/shop/products/HP6524_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1680663727",
                ],
                description: "For the design of these adidas slides we looked to topographic maps illustrating expeditions to Mars and the dimensional stages of a new planet. And the futuristic vibes don't end there. They're built with material made in part from sugarcane, one step on the road to a more sustainable future. Wear them on diverse terrain from wet to dry.These slides are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
                product_id: adidasAdelite22Id,
                slug: "adidas-adelite-22-tech-purple-hp6524",
            },
            {
                color: "MAGIC LIME (GY1597)",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/GY1597_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1670927500",
                images: [
                    "https://atmos.co.id/cdn/shop/products/GY1597_1_FOOTWEAR_Photography_SideLateralCenterView_transparent_1360x.png?v=1670927500",
                    "https://atmos.co.id/cdn/shop/products/GY1597_6_FOOTWEAR_Photography_FrontLateralTopView_transparent_1360x.png?v=1670927501",
                    "https://atmos.co.id/cdn/shop/products/GY1597_7_FOOTWEAR_Photography_BackLateralTopView_transparent_1360x.png?v=1670927499",
                    "https://atmos.co.id/cdn/shop/products/GY1597_3_FOOTWEAR_Photography_TopPortraitView_transparent_1360x.png?v=1670927499",
                ],
                description: "These adidas Adilette Slides answer the question, \"What would slides look like in space?\" Inspired by 3D topography and human expeditions to Mars, they defy gravity with futuristic design details. The contoured footbed and soft rubber outsole ensure maximum comfort whether you're hitting the showers or the streets.",
                product_id: adidasAdelite22Id,
                slug: "adidas-adelite-22-magic-lime-gy1597",
            },
            {
                color: "BLACK/BLACK/EGRET",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/A02136C_2_93e8e388-2d5b-4477-b539-34f34a24c1fd_1360x.jpg?v=1655981412",
                images: [
                    "https://atmos.co.id/cdn/shop/products/A02136C_2_93e8e388-2d5b-4477-b539-34f34a24c1fd_1360x.jpg?v=1655981412",
                    "https://atmos.co.id/cdn/shop/products/A02136C_1_848ba939-3c8a-4f92-a21b-9eee09bd691f_1360x.jpg?v=1655981412",
                    "https://atmos.co.id/cdn/shop/products/A02136C_4_e0e6261a-d094-4316-ad97-90d053993dd2_1360x.jpg?v=1655981409",
                    "https://atmos.co.id/cdn/shop/products/A02136C_5_28d7a0cf-fa00-4a9d-86eb-0dbda67891ed_1360x.jpg?v=1655981410",
                ],
                description: "Reborn for skateboarding. The Converse CONS Chuck Taylor All Star Pro Mid Top shoe infuses all of the essential design cues of the 1917 original with performance technology to make it a true, skate-ready silhouette. Fully updated for summer with a cut-off, mid-top look inspired by our skateboarding team's customization preferences and a 100% recycled polyester canvas upper, this go-to is ready to ride. A molded CX foam sockliner for cushioning, traction rubber outsole for better boardfeel, and rubber-backed suede for durability rounds out the performance package.",
                product_id: converseChuckTaylorAllStarProCutOffId,
                slug: "converse-chuck-taylor-all-star-pro-cut-off-black-egret",
            },
            {
                color: "EGRET/RED/CLEMATIS BLUE",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/A02137C_2_323ca8cb-0502-49fd-8cdb-3778b73e5607_1360x.jpg?v=1655981393",
                images: [
                    "https://atmos.co.id/cdn/shop/products/A02137C_2_323ca8cb-0502-49fd-8cdb-3778b73e5607_1360x.jpg?v=1655981393",
                    "https://atmos.co.id/cdn/shop/products/A02137C_1_79bb4388-4ee2-477c-8fb4-5472bc9e4876_1360x.jpg?v=1655981393",
                    "https://atmos.co.id/cdn/shop/products/A02137C_4_3a4a28b7-1edc-48f5-8f50-74fa4ab09ea3_1360x.jpg?v=1655981389",
                    "https://atmos.co.id/cdn/shop/products/A02137C_5_57415c5d-7b40-4ee5-ac8b-85c74889255f_1360x.jpg?v=1655981388",
                ],
                description: "Reborn for skateboarding. The Converse CONS Chuck Taylor All Star Pro Mid Top shoe infuses all of the essential design cues of the 1917 original with performance technology to make it a true, skate-ready silhouette. Fully updated for summer with a cut-off, mid-top look inspired by our skateboarding team's customization preferences and a 100% recycled polyester canvas upper, this go-to is ready to ride. A molded CX foam sockliner for cushioning, traction rubber outsole for better boardfeel, and rubber-backed suede for durability rounds out the performance package.",
                product_id: converseChuckTaylorAllStarProCutOffId,
                slug: "converse-chuck-taylor-all-star-pro-cut-off-egret-red-clematis-blue"
            },
            {
                color: "BLUE BLACK",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/387294_05_sv01_1360x.jpg?v=1657784653",
                images: [
                    "https://atmos.co.id/cdn/shop/products/387294_05_sv01_1360x.jpg?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_1360x.png?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_sv04_1360x.png?v=1657784653",
                    "https://atmos.co.id/cdn/shop/products/387294_05_bv_1360x.png?v=1657784653",
                ],
                description: "The second season of PUMA x DUA LIPA is here, and the collection is filled with bold styles with ‘90s influence. This version of the Mayze is no exception, with a stacked sole, and vibrant accents throughout. It’s for the hype girls and the trendsetters – just like Dua.",
                product_id: pumaMayzeSdXDuaLipaId,
                slug: "puma-mayze-sd-dua-lipa-blue-black",
            },
            {
                color: "BLACK",
                main_image:
                    "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1360x.webp?v=1683189598",
                images: [
                    "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1360x.webp?v=1683189598",
                    "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_2_1360x.webp?v=1683189597",
                    "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_1_1360x.webp?v=1683189598",
                    "https://atmos.co.id/cdn/shop/files/PUMA-x-DUA-LIPA-Bralette-Women_3_1360x.webp?v=1683189598",
                ],
                description: "The second season of PUMA x DUA LIPA has arrived. This season’s line mixes streetwear and sport with bright, ‘90s rave-inspired colours and bold graphics that draw inspiration from basketball and football culture. This cute bralette features a boatneck neckline and the signature DUA LIPA butterfly embroidered on the chest – for that playful DUA LIPA style we love.",
                product_id: pumaXDuaLipaBraletteBlackId,
                slug: "puma-x-dua-lipa-bralette-black",
            },
            {
                color: "BLACK",
                main_image:
                    "https://atmos.co.id/cdn/shop/products/HZ7256_1_HARDWARE_Photography_FrontCenterView_transparent_1360x.png?v=1674642434",
                images: [
                    "https://atmos.co.id/cdn/shop/products/HZ7256_1_HARDWARE_Photography_FrontCenterView_transparent_1360x.png?v=1674642434",
                    "https://atmos.co.id/cdn/shop/products/HZ7256_4_HARDWARE_Photography_FrontInsideView_transparent_1360x.png?v=1674642435",
                    "https://atmos.co.id/cdn/shop/products/HZ7256_6_HARDWARE_Photography_DetailView2_transparent_1360x.png?v=1674642436",
                    "https://atmos.co.id/cdn/shop/products/HZ7256_2_HARDWARE_Photography_BackCenterView_transparent_1360x.png?v=1674642435",
                ],
                description: "Walk in style with this adidas shopper, created in collaboration with graffiti artist Andre Saraiva. Equipped with two carry straps, using durable canvas. A bag featuring graphics that celebrate love and acceptance. It's a style that doesn't choose the scene, so you can take it anywhere. Let's leave footprints of love wherever we go.",
                product_id: adidasASShopperId,
                slug: "adidas-a-s-shopper-black",
            },
            // {
            //     color: "",
            //     main_image:
            //         "",
            //     images: [
            //         "",
            //         "",
            //         "",
            //         "",
            //     ],
            //     description:"",
            //     product_id: ,
            //     slug: "",
            // },
        ],
    });

    const productStyles = await prisma.product_Style.findMany();

    const phantomBlackCoconutMilkId = productStyles
        .find((style) => style.color === "PHANTOM/BLACK-COCONUT MILK" && style.product_id === nikeIspaSenseFlyknitId)?.id || 1;
    const aquatoneCelestialGoldWhiteId = productStyles
        .find((style) => style.color === "AQUATONE/CELESTIAL GOLD-WHITE" && style.product_id === nikeAirJordan1MidId)?.id || 1;
    const ltOrewoodBrnBrightCitrusSailId = productStyles
        .find((style) => style.color === "LT OREWOOD BRN/BRIGHT CITRUS-SAIL" && style.product_id === nikeAirJordan1ZmAirCmft2Id)?.id || 1;
    const micaGreenCoconutMilkPhotonDustId = productStyles
        .find((style) => style.color === "MICA GREEN/COCONUT MILK-PHOTON DUST" && style.product_id === nikeAirForce107LxId)?.id || 1;
    const teamGoldBlackSailId = productStyles
        .find((style) => style.color === "TEAM GOLD/BLACK-SAIL" && style.product_id === nikeAirForce107LxId)?.id || 1;
    const paleIvoryBlackStadiumGreenId = productStyles
        .find((style) => style.color === "PALE IVORY/BLACK-STADIUM GREEN" && style.product_id === nikeAirForce107LxId)?.id || 1;
    const seaSaltTimberwolfAlabasterId = productStyles
        .find((style) => style.color === "SEA SALT/TIMBERWOLF/ALABASTER" && style.product_id === newBalanceBb550istId)?.id || 1;
    const blackMarshmallowId = productStyles
        .find((style) => style.color === "BLACK/MARSHMALLOW" && style.product_id === vansOldSkoolVr3Id)?.id || 1;
    const greyFiveHp6522Id = productStyles
        .find((style) => style.color === "GREY FIVE (HP6522)" && style.product_id === adidasAdelite22Id)?.id || 1;
    const techPurpleHp6524Id = productStyles
        .find((style) => style.color === "TECH PURPLE (HP6524)" && style.product_id === adidasAdelite22Id)?.id || 1;
    const magicLimeGy1597Id = productStyles
        .find((style) => style.color === "MAGIC LIME (GY1597)" && style.product_id === adidasAdelite22Id)?.id || 1;
    const blackBlackEgretId = productStyles
        .find((style) => style.color === "BLACK/BLACK/EGRET" && style.product_id === converseChuckTaylorAllStarProCutOffId)?.id || 1;
    const egretRedClematisBlueId = productStyles
        .find((style) => style.color === "EGRET/RED/CLEMATIS BLUE" && style.product_id === converseChuckTaylorAllStarProCutOffId)?.id || 1;
    const blueBlackId = productStyles
        .find((style) => style.color === "BLUE BLACK" && style.product_id === pumaMayzeSdXDuaLipaId)?.id || 1;
    const braletteBlackId = productStyles
        .find((style) => style.color === "BLACK" && style.product_id === pumaXDuaLipaBraletteBlackId)?.id || 1;
    const adidasShopperBlackId = productStyles
        .find((style) => style.color === "BLACK" && style.product_id === adidasASShopperId)?.id || 1;

    await prisma.product_Size.createMany({
        data: [
            {
                sku: [
                    { size: "US 9.5", qty: 10 },
                    { size: "US 10", qty: 10 },
                    { size: "US 10.5", qty: 5 },
                ],
                price: 3099000,
                style_id: phantomBlackCoconutMilkId,
            },
            {
                sku: [
                    { size: "US 8", qty: 0 },
                    { size: "US 8.5", qty: 0 },
                    { size: "US 9", qty: 0 },
                    { size: "US 9.5", qty: 0 },
                    { size: "US 10", qty: 0 },
                    { size: "US 10.5", qty: 0 },
                    { size: "US 11", qty: 10 },
                ],
                price: 1939000,
                style_id: aquatoneCelestialGoldWhiteId,
            },
            {
                sku: [
                    { size: "US 8", qty: 0 },
                    { size: "US 8.5", qty: 0 },
                    { size: "US 9", qty: 0 },
                    { size: "US 9.5", qty: 0 },
                    { size: "US 10", qty: 10 },
                    { size: "US 10.5", qty: 0 },
                ],
                price: 2249000,
                style_id: ltOrewoodBrnBrightCitrusSailId,
            },
            {
                sku: [
                    { size: "7", qty: 5 },
                    { size: "7.5", qty: 5 },
                    { size: "8", qty: 5 },
                    { size: "8.5", qty: 10 },
                    { size: "9", qty: 20 },
                    { size: "9.5", qty: 10 },
                    { size: "10", qty: 10 },
                    { size: "10.5", qty: 10 },
                ],
                price: 2099000,
                style_id: micaGreenCoconutMilkPhotonDustId,
            },
            {
                sku: [
                    { size: "6", qty: 5 },
                    { size: "6.5", qty: 5 },
                    { size: "7", qty: 5 },
                    { size: "7.5", qty: 5 },
                    { size: "8", qty: 5 },
                    { size: "8.5", qty: 10 },
                    { size: "9", qty: 20 },
                    { size: "9.5", qty: 10 },
                    { size: "10", qty: 10 },
                    { size: "10.5", qty: 10 },
                ],
                price: 2099000,
                style_id: teamGoldBlackSailId,
            },
            {
                sku: [
                    { size: "US 7", qty: 0 },
                    { size: "US 8", qty: 0 },
                    { size: "US 8.5", qty: 0 },
                    { size: "US 9", qty: 0 },
                    { size: "US 9.5", qty: 0 },
                    { size: "US 10", qty: 0 },
                    { size: "US 10.5", qty: 10 },
                ],
                price: 2099000,
                style_id: paleIvoryBlackStadiumGreenId,
            },
            {
                sku: [
                    { size: "US 5", qty: 10 },
                    { size: "US 5.5", qty: 10 },
                    { size: "US 6", qty: 0 },
                    { size: "US 7", qty: 10 },
                    { size: "US 7.5", qty: 10 },
                    { size: "US 8", qty: 10 },
                    { size: "US 8.5", qty: 10 },
                    { size: "US 9", qty: 10 },
                    { size: "US 9.5", qty: 0 },
                    { size: "US 10", qty: 0 },
                    { size: "US 11", qty: 10 },
                ],
                price: 2799000,
                style_id: seaSaltTimberwolfAlabasterId,
            },
            {
                sku: [
                    { size: "US 7", qty: 10 },
                    { size: "US 8", qty: 10 },
                    { size: "US 8.5", qty: 10 },
                    { size: "US 9", qty: 0 },
                    { size: "US 9.5", qty: 0 },
                    { size: "US 10", qty: 10 },
                    { size: "US 11", qty: 10 },
                ],
                price: 1499000,
                style_id: blackMarshmallowId,
            },
            {
                sku: [
                    { size: "UK 5", qty: 10 },
                    { size: "UK 6", qty: 10 },
                    { size: "UK 7", qty: 10 },
                    { size: "UK 8", qty: 0 },
                    { size: "UK 9", qty: 0 },
                    { size: "UK 10", qty: 10 },
                    { size: "UK 11", qty: 10 },
                    { size: "UK 12", qty: 10 },
                ],
                price: 840000,
                style_id: greyFiveHp6522Id,
            },
            {
                sku: [
                    { size: "UK 5", qty: 10 },
                    { size: "UK 6", qty: 10 },
                    { size: "UK 7", qty: 10 },
                    { size: "UK 8", qty: 10 },
                    { size: "UK 9", qty: 10 },
                    { size: "UK 10", qty: 10 },
                    { size: "UK 11", qty: 0 },
                    { size: "UK 12", qty: 0 },
                ],
                price: 840000,
                style_id: techPurpleHp6524Id,
            },
            {
                sku: [
                    { size: "UK 6", qty: 10 },
                    { size: "UK 7", qty: 0 },
                    { size: "UK 8", qty: 0 },
                ],
                price: 840000,
                style_id: magicLimeGy1597Id,
            },
            {
                sku: [
                    { size: "US 7", qty: 10 },
                    { size: "US 7.5", qty: 10 },
                    { size: "US 8.5", qty: 10 },
                    { size: "US 9.5", qty: 10 },
                    { size: "US 10", qty: 10 },
                    { size: "US 11", qty: 10 },
                ],
                price: 1199000,
                style_id: blackBlackEgretId,
            },
            {
                sku: [
                    { size: "US 7", qty: 10 },
                    { size: "US 7.5", qty: 10 },
                    { size: "US 8.5", qty: 10 },
                    { size: "US 9.5", qty: 10 },
                    { size: "US 10", qty: 10 },
                    { size: "US 11", qty: 10 },
                ],
                price: 1199000,
                style_id: egretRedClematisBlueId,
            },
            {
                sku: [
                    { size: "UK 4", qty: 10 },
                    { size: "UK 4.5", qty: 10 },
                    { size: "UK 5", qty: 10 },
                    { size: "UK 5.5", qty: 0 },
                    { size: "UK 6", qty: 10 },
                    { size: "UK 6.5", qty: 0 },
                ],
                price: 2199000,
                style_id: blueBlackId,
            },
            {
                sku: [
                    { size: "S", qty: 10 },
                    { size: "M", qty: 10 }
                ],
                price: 949000,
                style_id: braletteBlackId,
            },
            {
                sku: [
                    { size: "NS", qty: 10 }
                ],
                price: 900000,
                style_id: adidasShopperBlackId,
            },
        ],
    });

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

    res.status(200).json({ name: "hello" });
}
