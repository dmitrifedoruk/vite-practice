export function setupCounter(element,length) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is <span id="amount">${counter+1}</span>&nbsp;of&nbsp;<span id="total">${length}</span>`
  }
  element.addEventListener('click', () => setCounter((counter + 1)%length))
  setCounter(0)

}
