import { PrismaClient } from "@prisma/client";
export declare class Prisma {
    private prisma;
    connection(): Promise<PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>>;
}
