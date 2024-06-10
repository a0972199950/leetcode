// 733. Flood Fill

console.clear()

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const queue = [[sr, sc]]
  const originColor = image[sr][sc]

  while (queue.length) {
    const [sr, sc] = queue.shift()!
    image[sr][sc] = color

    const connects = [
      [sr - 1, sc], // up
      [sr, sc + 1], // right
      [sr + 1, sc], // bottom
      [sr, sc - 1] // left
    ]

    for (const connect of connects) {
      // console.log(connect[0], connect[1], image[connect[0]]?.[connect[1]])
      if (image[connect[0]]?.[connect[1]] === originColor && image[connect[0]]?.[connect[1]] !== color) {
        queue.push(connect)
      }
    }

    console.log(queue)
  }

  return image
}

console.log(floodFill(
  [[0, 0, 0], [0, 0, 0]],
  0,
  0,
  0
))

