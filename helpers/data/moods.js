import happyAnimation from '~/static/animations/happy.json'
import anxiousAnimation from '~/static/animations/anxious.json'
import stressAnimation from '~/static/animations/stress.json'
import sadAnimation from '~/static/animations/sad.json'
import depressedAnimation from '~/static/animations/depressed.json'

const moods = [
  { name: 'Happy', options: { animationData: happyAnimation } },
  { name: 'Anxious', options: { animationData: anxiousAnimation } },
  { name: 'Stress', options: { animationData: stressAnimation } },
  { name: 'Sad', options: { animationData: sadAnimation } },
  { name: 'Depressed', options: { animationData: depressedAnimation } },
]

export default moods
