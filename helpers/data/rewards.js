import icecreamAnimation from '~/static/animations/icecream.json'
import volunteerAnimation from '~/static/animations/volunteer.json'
import gameAnimation from '~/static/animations/game.json'
import picnicAnimation from '~/static/animations/picnic.json'
import napAnimation from '~/static/animations/nap.json'

const rewards = [
  {
    name: 'Ice cream',
    options: { animationData: icecreamAnimation },
    description: '',
  },
  {
    name: 'Volunteer',
    options: { animationData: volunteerAnimation },
    description: '',
  },
  { name: 'Game', options: { animationData: gameAnimation }, description: '' },
  {
    name: 'Picnic',
    options: { animationData: picnicAnimation },
    description: '',
  },
  { name: 'Nap', options: { animationData: napAnimation }, description: '' },
]

export default rewards
