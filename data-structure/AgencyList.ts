class AgencyList {
  list = {}

  constructor () {
    this.list = {}
  }

  public addVertex (val: string | number) {
    if (this.list[val]) {
      this.list[val] = []
    }

  }
}

export {}