const words = ['spray', 'limit', 'elite', 'exuberant', 'present'];

function wordsToUpperCase(words) {
    const upperWords = words.map(item => item.toUpperCase());
    return upperWords;
};

const upperWords = wordsToUpperCase(words);

console.log(upperWords);