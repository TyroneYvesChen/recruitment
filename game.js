class Games {
  constructor(lines = 3, total = 15, linesItemArr = [3, 5, 7]) {
    if (
      typeof lines !== 'number' ||
      typeof total !== 'number' ||
      !Array.isArray(linesItemArr)
    ) {
      throw Error('the type of props is invalid')
    }
    this.lines = lines || 3
    this.total = total || 15
    this.linesItemArr = linesItemArr || [3, 5, 7]
  }

  getOneLineItem(l = 1, itemNum = 0) {
    const line = l - 1
    if (this.linesItemArr[line] < itemNum) {
      throw Error('there are no enough items to pick in this line')
    }

    this.linesItemArr[line] = this.linesItemArr[line] - itemNum
    const curNum = this.linesItemArr.reduce((total, curItemNum) => {
      return total + curItemNum
    }, 0)
    if (curNum === 0) {
      return 'You win!'
    }
    return this
  }
}

const newGame = new Games()

console.log(newGame)
console.log(newGame.getOneLineItem(1, 3))
console.log(newGame.getOneLineItem(2, 5))
console.log(newGame.getOneLineItem(3, 2))
console.log(newGame.getOneLineItem(3, 3))
console.log(newGame.getOneLineItem(3, 2))
