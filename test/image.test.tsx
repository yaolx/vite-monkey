import React from 'react'
import renderer from 'react-test-renderer'

import { expect, test } from 'vitest'

import LoadImage from '../src/components/load-image'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('image will render when image exist', () => {
  const component = renderer.create(<LoadImage src="https://www.highcharts.com/docs/img/favicon.png" />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
