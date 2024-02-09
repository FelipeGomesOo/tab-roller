import prisma from '@/prisma/prisma'

export const getArtists = async () => {
    const query = await prisma.artist.findMany()
    return query;
}

export const getUserByEmail = async (userMail: string) => {
    const query = await prisma.user.findUnique(
        {
            where: {
                email: userMail
            }
        }
    )
    console.log(query)
    return query;
}