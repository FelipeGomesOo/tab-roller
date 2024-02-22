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

export const getArtistByUrl = async (artistUrl : string) => {
    const query = await prisma.artist.findUnique(
        {
            where: {
                url: artistUrl
            }
        }
    )
    return query;
}

export const getSongsByArtist = async (artistId : number) => {
    const query = await prisma.song.findMany(
        {
            where: {
                artistId: artistId
            }
        }
    )
    return query;
}

export const getArtistAndSong = async (artistUrl : string, songUrl : string) => {
    const query = await prisma.artist.findUnique({
        where: {
            url: artistUrl
        },
        include: {
            songs: {
                where: {
                url: songUrl
                }
            }
        }
    });
    //console.log(query)
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
    //console.log(query)
    return query;
}