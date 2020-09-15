const encode = d => {
    const encoded = [];
    d.split('').map(c => {
      encoded.push((c.charCodeAt(0) / 255))
    })
    return encoded
  }
  
  const encodeData = data => data.map( d => encode(d) )
  
  encodeData("I am happy");