/* Central icon map so data files can reference icons by string name.
   Uses lucide-react; only the icons we use are imported (tree-shakeable). */
import {
  Cpu,
  Users,
  HeartHandshake,
  Sparkles,
  PencilRuler,
  Wrench,
  Code2,
  Trophy,
  RefreshCw,
  School,
  Library,
  Megaphone,
  Instagram,
  Globe,
  BarChart3,
  Bot,
  Lightbulb,
  Search,
  Box,
  FlaskConical,
  Fish,
} from 'lucide-react'

const MAP = {
  cpu: Cpu,
  users: Users,
  'heart-handshake': HeartHandshake,
  sparkles: Sparkles,
  'pencil-ruler': PencilRuler,
  wrench: Wrench,
  'code-2': Code2,
  trophy: Trophy,
  'refresh-cw': RefreshCw,
  school: School,
  library: Library,
  megaphone: Megaphone,
  instagram: Instagram,
  globe: Globe,
  'bar-chart': BarChart3,
  bot: Bot,
  lightbulb: Lightbulb,
  search: Search,
  box: Box,
  'flask-conical': FlaskConical,
  fish: Fish,
}

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name] ?? Bot
  return <Cmp aria-hidden="true" {...props} />
}
