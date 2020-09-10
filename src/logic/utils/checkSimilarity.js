import symmetricDifference from 'ramda/src/symmetricDifference'
import intersection from 'ramda/src/intersection'

export const createNGram = (str) => {
	// When using trigrams, assume each string begins with two spaces and ends with one
	const compStr = `  ${str} `
	const size = 3 // 3 for trigrams
	const grams = []
	for (let i = 0; i < compStr.length - (size - 1); i++) {
		grams[i] = compStr.substr(i, size)
	}	
  return grams
}

export default (str, queryNGram = []) => {
	const compareNGram = createNGram(str)
	const numUnique = symmetricDifference(compareNGram, queryNGram).length
	const numShared = intersection(compareNGram, queryNGram).length
	return { nGram: compareNGram, score: numShared / numUnique }
}