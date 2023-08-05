const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Warp" },
                { name: "Spectr" },
                { name: "Craetr" },
                { name: "Accounts" },
                { name: "Cortx" }
            ]
        })
    } catch (error) {
        console.log("Error seeding default categories" ,error);
    } finally {
        await db.$disconnect();
    }
};

main();