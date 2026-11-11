import {
  Award, BadgeCheck, BatteryCharging, BatteryFull, Building2, Clock, Cpu, Droplets, Gauge, Grid3x3,
  HandCoins, House, Leaf, MessageCircle, PanelsTopLeft, PlugZap, Ruler, ShieldCheck, Tractor, Users, Wrench,
} from 'lucide-react';

// Explicit map keeps the bundle small (only these icons are included).
const map = {
  Award, BadgeCheck, BatteryCharging, BatteryFull, Building2, Clock, Cpu, Droplets, Gauge, Grid3x3,
  HandCoins, House, Leaf, MessageCircle, PanelsTopLeft, PlugZap, Ruler, ShieldCheck, Tractor, Users, Wrench,
};

export default function Icon({ name, size = 24, ...rest }) {
  const Cmp = map[name] || ShieldCheck;
  return <Cmp size={size} aria-hidden="true" {...rest} />;
}
