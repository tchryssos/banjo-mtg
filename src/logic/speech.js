// START - DEFS - START
// Multiplier to convert seconds from audio duration to milliseconds
// By dropping the multiplier from 1000, we're able to speed up playback.
const audioTimeMult = 850
// END - DEFS - END

// START - STYLE - START
const descriptionOverflow = (descriptionElement) => {
	const { descEl } = descriptionElement.current
	if (descEl.offsetHeight < descEl.scrollHeight) {
		descEl.scrollTop = descEl.scrollHeight
	}
}
// END - STYLE - END

// START - AUDIO PLAYBACK - START
const playAudio = (audio, audioArray) => {
	// This pauses any playing audio before playback of the next sample
	// which allows us to speed up sample playback more naturally.
	audioArray.forEach(sample => {
		sample.pause()
	})
	audio.currentTime = 0
	audio.play()
}

const stopAllAudio = (audioArray) => {
	audioArray.forEach(audio => (
		audio.src = ''
	))
}
// END - AUDIO PLAYBACK - END

// START - SYLLABLE - START
// Overall, this function works 'okay' ¯\_(ツ)_/¯
const syllableBreaker = (word) => {
	word = word.toLowerCase()
	const oneSyl = ['fff']
	if (word.length <= 4) {
		return oneSyl
	}
	// The following lines replace all characters that aren't
	// (commonly) syllable breakpoints with empty strings
	// leaving us with a string of syllable break vowels
	word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
	word = word.replace(/^y/, '')
	// The following line makes sure that of the remaining vowels
	// we chunk on a maximum of two at a time
	const parsedSyllables = word.match(/[aeiouy]{1,2}/g)
	return parsedSyllables || oneSyl
}

const syllableWordChunker = (word) => {
	let wordChunkObj = {
		remainingWord: word,
		chunkedWord: [],
	}
	const sylBreaks = syllableBreaker(word)
	wordChunkObj = sylBreaks.reduce(
		(wordObj, syllableBreak) => {
			// This builds a regex which selects a substring
			// up to and including the first instance of the current syllable break point
			const regex = new RegExp(
				`(^[^${syllableBreak}]*${syllableBreak})`
			)
			let split = []
			// This filter removes empty strings created when the regex test
			// splits up a string on the first character
			if (wordObj.remainingWord) {
				split = wordObj.remainingWord.split(regex).filter(x => x)
			}
			return {
				remainingWord: split[1],
				chunkedWord: [...wordObj.chunkedWord, split[0]]
			}
		}, wordChunkObj
	)
	wordChunkObj.chunkedWord.push(wordChunkObj.remainingWord)
	// This filter removes falsey values pushed on the line above
	return wordChunkObj.chunkedWord.filter(x => x)
}

const playSyllablePushWord = (
	syllables, audioArray, sylTimeouts, boxText, setBoxText,
	descriptionElement,
) => {
	audioArray.forEach(
		(audio, i) => {
			sylTimeouts.current.push(setTimeout(() => {
				playAudio(audio, audioArray)
				let newText = `${boxText}${syllables}`
				// add a space if this is the last time through the loop
				// aka the end of the word
				if (i === audioArray.length - 1) {
					newText = `${newText} `
				}
				setBoxText(newText)
				descriptionOverflow(descriptionElement)
			}, (i * audio.duration * audioTimeMult)))
		}
	)
}
// END - SYLLABLE - END

const samplePicker = (voiceArray) => voiceArray[Math.floor(
	Math.random() * voiceArray.length
)]

export const speakAndSet = ({
		responseText, boxText, setBoxText, voiceArray, sylTimeouts,
		wordTimeouts, descriptionElement,
	}) => {
	const words = responseText.split(/\s/)
	let speechPause = 0
	words.forEach(
		(word) => {
			/*
				1) Get an array of the given word's syllable break points
				2) Get an array consisting of one audio sample per syllable
				3) Add the durations of these audio samples together.
					(The durations are in seconds, so convert to milliseconds)
				4) Create a timeout function that plays audio samples and writes the words to the page.
					This is delayed by the current total audio duration of all samples for all words preceeding,
					so that each word is added and played in order.
					Push this timeout into the appropriate timeout array.
				5) Update the timeout timer for the next iteration with this word's audio duration.
			*/

			const syllables = syllableWordChunker(word)
			const audioArray = syllables.map(() => samplePicker(voiceArray))
			const audioDuration = Math.ceil(audioArray.reduce(
				(totalTime, audioObj) => totalTime += (audioObj.duration * audioTimeMult), 0
			))
			wordTimeouts.push(setTimeout(
				() => playSyllablePushWord(
					syllables, audioArray, sylTimeouts, boxText, setBoxText,
					descriptionElement,
				),
				speechPause
			))
			speechPause += audioDuration
		}
	)
}