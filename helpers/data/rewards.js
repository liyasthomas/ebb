import icecreamAnimation from '~/static/animations/icecream.json'
import volunteerAnimation from '~/static/animations/volunteer.json'
import gameAnimation from '~/static/animations/game.json'
import picnicAnimation from '~/static/animations/picnic.json'
import napAnimation from '~/static/animations/nap.json'

const rewards = [
  {
    name: 'Ice cream',
    options: { animationData: icecreamAnimation },
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
  },
  {
    name: 'Volunteer',
    options: { animationData: volunteerAnimation },
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
  },
  { name: 'Game', options: { animationData: gameAnimation }, description: '' },
  {
    name: 'Picnic',
    options: { animationData: picnicAnimation },
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
  },
  { name: 'Nap', options: { animationData: napAnimation }, description: '' },
]

export default rewards
