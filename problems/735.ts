// 735. Asteroid Collision

console.clear()

function asteroidCollision(asteroids: number[]): number[] {
  const stack = []

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid)
      continue
    }

    if (asteroid < 0) {
      if (!stack.at(-1) || stack.at(-1) < 0) {
        stack.push(asteroid)
        continue
      }

      while (true) {
        const lastAsteroid = stack.at(-1)

        if (!lastAsteroid || lastAsteroid < 0) {
          stack.push(asteroid)
          break
        }
        else {
          if (Math.abs(asteroid) > lastAsteroid) {
            stack.pop()
            continue
          }
          else if (Math.abs(asteroid) === lastAsteroid) {
            stack.pop()
            break
          }
          else if (Math.abs(asteroid) < lastAsteroid) {
            break
          }
        }
      }
    }
  }

  console.log(stack)
  return stack
}

asteroidCollision([5, 10, -5])
asteroidCollision([8, -8])
asteroidCollision([10, 2, -5])
asteroidCollision([-8, 8])
asteroidCollision([1, 2, -10])

export {}
