import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import {createUrl} from '@/scripts/helperFunctions'

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
    { name: "The Beatles", hits: ["Yesterday", "Hey Jude", "Let It Be"] },
    { name: "Madonna", hits: ["Like a Prayer", "Like a Virgin", "La Isla Bonita"] },
    { name: "Elton John", hits: ["Your Song", "Rocket Man", "Bennie and the Jets"] },
    { name: "Elvis Presley", hits: ["Can't Help Falling In Love", "Suspicious Minds", "Always On My Mind"] },
    { name: "Mariah Carey", hits: ["Hero", "We Belong Together", "Obsessed"] },
    { name: "Stevie Wonder", hits: ["I Want You Back", "Ben", "Don't Stop ‘Til You Get Enough"] },
    { name: "Janet Jackson", hits: ["You Give Good Love", "Saving All My Love for You", "Greatest Love of All"] },
    { name: "Michael Jackson", hits: ["Billie Jean", "Thriller", "Bad"] },
    { name: "Whitney Houston", hits: ["I Will Always Love You", "I Wanna Dance with Somebody", "Greatest Love of All"] },
    { name: "Rihanna", hits: ["Love On The Brain", "Stay", "Work"] },
  ]

  for (const artist of artists) {
    let hits = artist.hits.map((hit) => (
        { 
            name: hit,
            key: "C",
            createdBy: 1, 
            updatedBy: 1
        }
    )) 
    const createdArtist = await prisma.artist.create({
      data: {
        name: artist.name, 
        url: createUrl(artist.name),

      },
    })
    console.log(`Created artist: ${createdArtist.name}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
