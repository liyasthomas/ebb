import happyAnimation from '~/static/animations/happy.json'
import anxiousAnimation from '~/static/animations/anxious.json'
import stressAnimation from '~/static/animations/stress.json'
import sadAnimation from '~/static/animations/sad.json'
import depressedAnimation from '~/static/animations/depressed.json'

const moods = [
  {
    name: 'Happy',
    options: { animationData: happyAnimation },
    description: '',
  },
  {
    name: 'Anxious',
    options: { animationData: anxiousAnimation },
    description: '',
  },
  {
    name: 'Stress',
    options: { animationData: stressAnimation },
    description: '',
  },
  { name: 'Sad', options: { animationData: sadAnimation }, description: '' },
  {
    name: 'Depressed',
    options: { animationData: depressedAnimation },
    description: '',
  },
]

export default moods
