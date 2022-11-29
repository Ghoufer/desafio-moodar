let n = 0

while(n < 20) {
  n = prompt('Digite um número maior ou igual a 20 ')
}

process.stdout.write('\nSua ampulheta\n\n')

function drawHourglass(lines) {
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < lines; j++) {
      process.stdout.write('#')
    }
  
    if(i === 0) process.stdout.write('\n')
  }
  
  for (let i = 1; i < (Math.floor(lines/2) -1); i++) {
  
    process.stdout.write('\n')
    process.stdout.write('#')
  
    for(let j = 0; j < i; j++) {
      process.stdout.write(' ')
    }
  
    for(let k = 0; k < (Math.floor(lines/2) - i) * 2 - 2; k++) {
      process.stdout.write('#')
    }
    
    for(let l = 0; l < i; l++) {
      process.stdout.write(' ')
    }
    
    process.stdout.write('#')
  }
  
  for (let i = 0; i < (Math.floor(lines/2) - 1); i++) {
  
    process.stdout.write('\n')
    process.stdout.write('#')
    
    for(let j = 0; j < Math.floor(lines/2) - i - 2; j++) {
      process.stdout.write(' ')
    }
  
    process.stdout.write('#')
  
    for(let k = 0; k < i * 2; k++) {
      process.stdout.write(' ')
    }
    
    process.stdout.write('#')
  
    for(let l = 0; l < Math.floor(lines/2) - i - 2; l++) {
      process.stdout.write(' ')
    }
    
    process.stdout.write('#')
  }
  
  process.stdout.write('\n')
  
  for (let i = 0; i < lines; i++) {
    process.stdout.write('#')
  }
}

drawHourglass(n)