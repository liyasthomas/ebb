import happyAnimation from '~/static/animations/happy.json'
import anxiousAnimation from '~/static/animations/anxious.json'
import stressAnimation from '~/static/animations/stress.json'
import sadAnimation from '~/static/animations/sad.json'
import depressedAnimation from '~/static/animations/depressed.json'

const moods = [
  {
    name: 'Happy',
    options: { animationData: happyAnimation },
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
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
    name: 'Anxious',
    options: { animationData: anxiousAnimation },
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
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
    name: 'Stress',
    options: { animationData: stressAnimation },
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
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
    name: 'Sad',
    options: { animationData: sadAnimation },
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
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
    name: 'Depressed',
    options: { animationData: depressedAnimation },
    duration: '20 mins',
    how: 'https://www.youtube.com/watch?v=',
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
]

export default moods
