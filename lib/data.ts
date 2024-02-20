import prisma from '@/prisma/prisma'

export const getArtists = async () => {
    const query = await prisma.artist.findMany(
        {
            orderBy: {
                views: 'desc'
            },
            take: 5,
        }
    )
    return query;
}

export const getArtist = async (artistUrl : string) => {
    const query = await prisma.artist.findUnique(
        {
            where: {
                url: artistUrl
            }
        }
    )
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