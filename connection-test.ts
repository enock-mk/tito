// script.ts
import { prisma } from "./lib/prisma";

async function main() {
  // Test connection
  console.log("Testing database connection...");
  
  // Create a test customer
  const customer = await prisma.customer.create({
    data: {
      name: "Test Hotel",
      email: "test@example.com",
      phone: "+1 234 567 890",
      company: "Test Hotel Group",
      industry: "HOSPITALITY",
    },
  });
  console.log("Created customer:", customer);

  // Fetch all customers
  const allCustomers = await prisma.customer.findMany();
  console.log("All customers:", allCustomers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Done!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });