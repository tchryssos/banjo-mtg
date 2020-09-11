import banjoHi from '/src/static/audio/banjo_hi.wav'
import banjoMid from '/src/static/audio/banjo_mid.wav'
import banjoLo from '/src/static/audio/banjo_lo.wav'
import banjoIcon from '/src/static/images/banjo_icon.png'

import kazooieHi from '/src/static/audio/kazooie_hi.wav'
import kazooieMid from '/src/static/audio/kazooie_mid.wav'
import kazooieLo from '/src/static/audio/kazooie_lo.wav'
import kazooieIcon from '/src/static/images/kazooie_icon.png'

import gruntyHi from '/src/static/audio/grunty_hi.wav'
import gruntyMid from '/src/static/audio/grunty_mid.wav'
import gruntyLo from '/src/static/audio/grunty_lo.wav'
import gruntyIcon from '/src/static/images/grunty_icon.png'

export const BANJO = 'banjo'
export const KAZOOIE = 'kazooie'
export const GRUNTILDA = 'gruntilda'

export const CHARACTER_DATA = {
	[BANJO]: {
		audio: {
			hi: banjoHi,
			mid: banjoMid,
			low: banjoLo,
		},
		icon: banjoIcon,
	},
	[KAZOOIE]: {
		audio: {
			hi: kazooieHi,
			mid: kazooieMid,
			low: kazooieLo,
		},
		icon: kazooieIcon,
	},
	[GRUNTILDA]: {
		audio: {
			hi: gruntyHi,
			mid: gruntyMid,
			low: gruntyLo,
		},
		icon: gruntyIcon,
	},
}
