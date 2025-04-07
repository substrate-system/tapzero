import { test } from '../../../index.js'

test('ok handles "truthy" values', async t => {
    t.ok({}, 'should handle truthy value')
})
