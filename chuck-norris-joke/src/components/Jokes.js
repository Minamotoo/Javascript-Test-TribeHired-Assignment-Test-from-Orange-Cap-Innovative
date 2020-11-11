import axios from 'axios'
import { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Jokes() {
  const [jokes, setJokes] = useState([])
  const [numberOfResult, setNumberOfResult] = useState(10)
  const [name, setName] = useState('Chuck')
  const [lastName, setLastName] = useState('Norris')
  const [loading, setLoading] = useState(true)
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `
  const numberValidation = /^[0-9\b]+$/

  // eslint-disable-next-line
  useEffect(() => getJokes(), [])

  function handelNumberOfResult(e) {
    if (e.target.value === '') {
      setNumberOfResult(10)
    } else {
      if (numberValidation.test(e.target.value)) {
        setNumberOfResult(e.target.value)
      } else {
        setNumberOfResult(10)
      }
    }
  }

  function handelNameChange(e) {
    if (e.target.value === '') {
      setName('Chuck')
    } else {
      setName(e.target.value)
    }
  }

  function handleLastNameChange(e) {
    if (e.target.value === '') {
      setLastName('Norris')
    } else {
      setLastName(e.target.value)
    }
  }

  function detectEnter(e) {
    if (e.key === 'Enter') {
      getJokes()
    }
  }

  async function getJokes() {
    setLoading(true)
    try {
      await axios
        .get(
          `http://api.icndb.com/jokes/random/${numberOfResult}?escape=javascript&&firstName=${name}&&lastName=${lastName}`
        )
        .then((result) => setJokes(result.data.value))
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className='container p-3'>
      <h1 className='font-weight-bold h1 text-center'>
        Welocome to Chuck Norris Jokes API getting!
      </h1>
      <div className='row  offset-md-3'>
        <div className='col-md-8'>
          <label>Number of jokes result</label>
          <input
            type='text'
            className='form-control mb-3'
            name='numberOfResult'
            placeholder='Number of result'
            onChange={handelNumberOfResult}
            autoComplete='off'
            onKeyPress={detectEnter}
          />
          <label>Your name</label>
          <input
            type='text'
            className='form-control mb-3'
            name='name'
            placeholder='Change Chuck to your own name'
            onChange={handelNameChange}
            autoComplete='off'
            onKeyPress={detectEnter}
          />
          <label>Last name</label>
          <input
            type='text'
            className='form-control  mb-3'
            name='lastName'
            placeholder='Change his Norris to your last name too'
            onChange={handleLastNameChange}
            autoComplete='off'
            onKeyPress={detectEnter}
          />
          <button
            className='btn btn-primary btn-block mt-4'
            onClick={() => getJokes()}
          >
            Get Jokes!
          </button>
        </div>
      </div>
      <div className='mt-3'>
        {loading === true ? (
          <div className='sweet-loading'>
            <ClipLoader
              css={override}
              size={150}
              color={'#123abc'}
              loading={loading}
            />
          </div>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Jokes</th>
              </tr>
            </thead>
            <tbody>
              {jokes.length !== 0 &&
                jokes.map((joke, index) => (
                  <tr key={joke.id}>
                    <td>{index + 1}</td>
                    <td>{joke.joke}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
