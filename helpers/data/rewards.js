import icecreamAnimation from '~/static/animations/icecream.json'
import volunteerAnimation from '~/static/animations/volunteer.json'
import gameAnimation from '~/static/animations/game.json'
import picnicAnimation from '~/static/animations/picnic.json'
import napAnimation from '~/static/animations/nap.json'

const rewards = [
  { name: 'Ice cream', options: { animationData: icecreamAnimation } },
  { name: 'Volunteer', options: { animationData: volunteerAnimation } },
  { name: 'Game', options: { animationData: gameAnimation } },
  { name: 'Picnic', options: { animationData: picnicAnimation } },
  { name: 'Nap', options: { animationData: napAnimation } },
]

export default rewards
