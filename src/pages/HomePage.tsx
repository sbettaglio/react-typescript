import React from 'react'

const HomePage = () => {
  let firstValue: string = 'Stefan'
  let secondValue: number = 42
  let thirdValue: boolean = true
  let fourthValue: number[] = [5, 42, 32]
  let fifthValue: Array<string> = ['house', 'car', 'boat']

  return (
    <>
      <h1>Simple Data Tapes</h1>
      <p>
        The value {firstValue} is of {typeof firstValue} type!
      </p>
      <p>
        The value {secondValue} is of {typeof secondValue} type!
      </p>
      <p>
        The value {thirdValue} is of {typeof thirdValue} type!
      </p>
      <p>
        The value {fourthValue} is of {typeof fourthValue} type!
      </p>
      <p>
        The value {fifthValue} is of {typeof fifthValue} type!
      </p>
    </>
  )
}

export default HomePage
