import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import {createUrl} from '../scripts/helperFunctions'
 
const prisma = new PrismaClient()

async function maiaan() {
    const hashedPassword = await bcrypt.hash("asdEflk458ee!!", 10);
    const createdUser = await prisma.user.create({
        data: {
            name: "Felipe", 
            email: "felipe@felipe-gomes.com",
            password: hashedPassword 
        },
      })
}
async function main() {
  const artists = [
    { name: "The Beatlesa", hits: ["Yesterday", "Hey Jude", "Let It Be"] },
    { name: "Madonnaa", hits: ["Like a Prayer", "Like a Virgin", "La Isla Bonita"] },
    { name: "Elton Johna", hits: ["Your Song", "Rocket Man", "Bennie and the Jets"] },
    { name: "Elvis Presleya", hits: ["Can't Help Falling In Love", "Suspicious Minds", "Always On My Mind"] },
    { name: "Mariah Careya", hits: ["Hero", "We Belong Together", "Obsessed"] },
    { name: "Stevie Wondera", hits: ["I Want You Back", "Ben", "Don't Stop ‘Til You Get Enough"] },
    { name: "Janet Jacksona", hits: ["You Give Good Love", "Saving All My Love for You", "Greatest Love of All"] },
    { name: "Michael Jacksona", hits: ["Billie Jean", "Thriller", "Bad"] },
    { name: "Whitney Houstona", hits: ["I Will Always Love You", "I Wanna Dance with Somebody", "Greatest Love of All"] },
    { name: "Rihannaa", hits: ["Love On The Brain", "Stay", "Work"] },
  ]

  for (const artist of artists) {
    const createdArtist = await prisma.artist.create({
      data: {
        name: artist.name, 
        url: createUrl(artist.name),

      },
    })
    console.log(`Created artist: ${createdArtist.name}`)
  }
}

async function getArtists() {
  const createdSong = await prisma.song.create({
    data: {
        name: 'Hey aa',
        artistId: 11,
        url: createUrl('Hey aaa'),
        bpm: 60,
        notesPerBar:4,
        key: "C / Am",
        chords:'"C","4";"C","4";"C","4";"C","4";',
        lyrics:'"Hey Jude","4";"Dont make it bad","4";"You have found her","4";',
        createdBy: 4,
        updatedBy: 4, 
    },
  }) 
  console.log(`Created song: ${createdSong.name}`)
}

getArtists()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
