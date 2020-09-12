import meditateAnimation from '~/static/animations/meditate.json'
import jogAnimation from '~/static/animations/jog.json'
import readAnimation from '~/static/animations/read.json'
import listenAnimation from '~/static/animations/listen.json'
import talkAnimation from '~/static/animations/talk.json'

const tasks = [
  {
    name: 'Meditate',
    duration: '20 mins',
    description: [
      'Do 10 sets of breathing exercises.',
      'Do 10 minutes Yoga sequence.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
    options: { animationData: meditateAnimation },
  },
  {
    name: 'Jog',
    duration: '20 mins',
    description: [
      'Do 5 minutes brisk walking (warm up).',
      'Do 10 minutes jogging.',
      'Do 5 minutes marching in place or knee lifts.',
    ],
    quote: {
      description: '“Running allows me to set my mind free.”',
      author: '— Kara Goucher',
    },
    options: { animationData: jogAnimation },
  },
  {
    name: 'Read',
    duration: '20 mins',
    description: [
      'Read novels, poetry, humor, fiction etc.',
      'Read newspaper.',
    ],
    quote: {
      description:
        '“There is more treasure in books than in all the pirate’s loot on Treasure Island.”',
      author: '— Walt Disney',
    },
    options: { animationData: readAnimation },
  },
  {
    name: 'Listen',
    duration: '20 mins',
    description: ['Listen to podcast.', 'Listen to music.'],
    quote: {
      description:
        '“We have two ears and one tongue so that we would listen more and talk less.”',
      author: '— Diogenes',
    },
    options: { animationData: listenAnimation },
  },
  {
    name: 'Talk',
    duration: '20 mins',
    description: ['Talk to your friends.', 'Talk to your family.'],
    quote: {
      description:
        '“A lot of problems in the world would be solved if we talked to each other instead of about each other.”',
      author: '— Nickey Gumbel',
    },
    options: { animationData: talkAnimation },
  },
]

export default tasks
