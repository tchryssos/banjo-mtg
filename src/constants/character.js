import banjoHi from 'ttt/static/audio/banjo_hi.wav'
import banjoMid from 'ttt/static/audio/banjo_mid.wav'
import banjoLo from 'ttt/static/audio/banjo_lo.wav'
import banjoIcon from 'ttt/static/images/banjo_icon.png'
import banjoAnimated from 'ttt/static/images/banjo_ani.webp'

import kazooieHi from 'ttt/static/audio/kazooie_hi.wav'
import kazooieMid from 'ttt/static/audio/kazooie_mid.wav'
import kazooieLo from 'ttt/static/audio/kazooie_lo.wav'
import kazooieIcon from 'ttt/static/images/kazooie_icon.png'
import kazooieAnimated from 'ttt/static/images/kazooie_ani.webp'

import gruntyHi from 'ttt/static/audio/grunty_hi.wav'
import gruntyMid from 'ttt/static/audio/grunty_mid.wav'
import gruntyLo from 'ttt/static/audio/grunty_lo.wav'
import gruntyIcon from 'ttt/static/images/grunty_icon.png'
import gruntyAnimated from 'ttt/static/images/grunty_ani.webp'

export const BANJO = 'banjo'
export const KAZOOIE = 'kazooie'
export const GRUNTILDA = 'gruntilda'

export const CHARACTER_DATA = {
	[BANJO]: {
		name: BANJO,
		audio: {
			hi: banjoHi,
			mid: banjoMid,
			low: banjoLo,
		},
		icon: banjoIcon,
		animated: banjoAnimated
	},
	[KAZOOIE]: {
		name: KAZOOIE,
		audio: {
			hi: kazooieHi,
			mid: kazooieMid,
			low: kazooieLo,
		},
		icon: kazooieIcon,
		animated: kazooieAnimated
	},
	[GRUNTILDA]: {
		name: GRUNTILDA,
		audio: {
			hi: gruntyHi,
			mid: gruntyMid,
			low: gruntyLo,
		},
		icon: gruntyIcon,
		animated: gruntyAnimated
	},
}
