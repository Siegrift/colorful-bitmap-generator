const COLORS = ['red', 'green', 'blue', 'yellow']
const TOTAL_BITMAPS = 30;
const BITMAP_SIZE = 5

let bitmaps = document.getElementById('bitmaps')

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}

for (let b = 0; b < TOTAL_BITMAPS; b++) {
    const bitmap = document.createElement('div')
    bitmap.classList.add('bitmap')

    for (let i = 0; i < BITMAP_SIZE; i++) {
        let bitmapRow = document.createElement('div')
        bitmapRow.classList.add('bitmapRow')

        for(let j = 0; j < BITMAP_SIZE; j++) {
            let bitmapCell = document.createElement('div')
            bitmapCell.classList.add('bitmapCell')
            bitmapCell.style.backgroundColor = randomColor()
            
            bitmapRow.appendChild(bitmapCell)
        }

        bitmap.appendChild(bitmapRow)
    }

    bitmaps.appendChild(bitmap)
}