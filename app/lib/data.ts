import prisma from '@/prisma/prisma'

export const getArtists = async () => {
    const query = await prisma.artist.findMany()
    return query;
}