import { fetchData } from './fetchData.js'

// test('fetchData 返回结果为{ success: true }', () => {
//   return fetchData().then(response => {
//     expect(response.data).toEqual({
//       success: true
//     })
//   })
// })

test('fetchData 返回结果为404', () => {
  expect.assertions(1);
  return fetchData().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})

// done+promise