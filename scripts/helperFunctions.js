const getTime = (duration) => {
    const data = new Date(duration); 
    const min = data.getUTCMinutes();
    const sec = data.getUTCSeconds();
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

const getMiliseconds = (percentage, fullDuration) => {
    return percentage * fullDuration / 100;
}

const getPercentage = (parcialValue, totalValue) => {  
    return ((parcialValue / totalValue) * 100).toFixed(2);
  }

const getProcessedChords = (chords, noteDuration) => {
    const processedChords = [];
    let inTime = 0;

    for (const chord of chords) {
        const outTime = inTime + (chord.duration * noteDuration);
        processedChords.push({
            name: chord.name,
            notes: chord.duration,
            duration: chord.duration * noteDuration,
            inTime: inTime,
            outTime: outTime -1
        });
        inTime = outTime;
    }
    return processedChords;
}

const getProcessedLyrics = (lyrics, noteDuration) => {
    const processedLyrics = [];
    let inTime = 0;

    for (const lyric of lyrics) {
        const outTime = inTime + (lyric.duration * noteDuration);
        processedLyrics.push({
            phrase: lyric.phrase,
            notes: lyric.duration,
            duration: lyric.duration * noteDuration,
            inTime: inTime,
            outTime: outTime -1
        });
        inTime = outTime;
    }
    return processedLyrics;
}

const getSongDuration = (chords) => {
    return (chords.reduce((acc, chord) => acc + chord.duration, 0));
}

const createUrl = (str) => {
    return str
      .trim() 
      .toLowerCase() 
      .replace(/[^a-z0-9 ]/g, "") 
      .replace(/\s+/g, "-");
  }

  const parseLyricsFromString = (string) => {
    const lines = string.split(';');
    const result = lines.map(line => {
      const parts = line.split('","');
      return {
        phrase: parts[0].trim().replace(/"/g, ''),
        duration: parts[1].trim().replace(/"/g, '')
      };
    });
  
    return result;
  }
  const parseChordsFromString = (string) => {
    const lines = string.split(';');
    const result = lines.map(line => {
      const parts = line.split('","');
      return {
        name: parts[0].trim().replace(/"/g, ''),
        duration: parts[1].trim().replace(/"/g, '')
      };
    });
  
    return result;
  }

export {getTime, getMiliseconds, getPercentage, getProcessedChords, getSongDuration, getProcessedLyrics, createUrl, parseLyricsFromString, parseChordsFromString}