import React from 'react'

const Page = () => {
  //tuple
  let aTuple: [string, number] = ['Name', 42]
  // enum
  enum Codes {
    first = 1,
    second = 'house',
  }
  // any
  let firstName: any = 4
  // void
  const warning = (): void => {
    console.log('Warning')
  }

  return (
    <>
      <h1>Complex Data Types</h1>
      <ul>
        <h4>Tuples</h4>
        <li>
          <p>
            The value of {aTuple} is of type {typeof aTuple}
          </p>
        </li>
        <li>
          <p>
            The value of {aTuple[1]} is of type {typeof aTuple[1]}
          </p>
        </li>
        <li>
          <p>
            The value of {aTuple[0]} is of type {typeof aTuple[0]}
          </p>
        </li>
      </ul>
      <ul>
        <h4>Enums</h4>
        <li>
          <p>
            The value of {Codes.first} is of {typeof Codes.first}
          </p>
        </li>
        <li>
          <p>
            The value of {Codes.second} is of {typeof Codes.second}
          </p>
        </li>
      </ul>
      <ul>
        <h4>Any</h4>
        <li>
          <p>
            The value of {firstName} is of {typeof firstName}
          </p>
        </li>
      </ul>
    </>
  )
}

export default Page
