import meditateAnimation from '~/static/animations/meditate.json'
import jogAnimation from '~/static/animations/jog.json'
import readAnimation from '~/static/animations/read.json'
import listenAnimation from '~/static/animations/listen.json'
import talkAnimation from '~/static/animations/talk.json'

// TODO : Fix content
const tasks = [
  {
    name: 'Meditate',
    duration: '20 mins',
    description: [
      'Do 10 sets of breathing exercises.',
      'Lorem ipsum dolor sit amet adipisicing.',
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
      'Do 10 sets of breathing exercises.',
      'Lorem ipsum dolor sit amet adipisicing.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
    options: { animationData: jogAnimation },
  },
  {
    name: 'Read',
    duration: '20 mins',
    description: [
      'Do 10 sets of breathing exercises.',
      'Lorem ipsum dolor sit amet adipisicing.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
    options: { animationData: readAnimation },
  },
  {
    name: 'Listen',
    duration: '20 mins',
    description: [
      'Do 10 sets of breathing exercises.',
      'Lorem ipsum dolor sit amet adipisicing.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
    options: { animationData: listenAnimation },
  },
  {
    name: 'Talk',
    duration: '20 mins',
    description: [
      'Do 10 sets of breathing exercises.',
      'Lorem ipsum dolor sit amet adipisicing.',
    ],
    quote: {
      description:
        '“Meditation and concentration are the way to a life of serenity.”',
      author: '— Baba Ram Dass',
    },
    options: { animationData: talkAnimation },
  },
]

export default tasks
