import { ReactElement } from 'react'
import {render as renderComponent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
export * from '@testing-library/react'

type RenderOptions = Parameters<typeof renderComponent>[1]

export const render = (ui:ReactElement, options?: RenderOptions)=>{
    // merge the return key values of default render function with the
    // 'user' key
    return {
        ...renderComponent(ui, options),
        user: userEvent.setup()
    }
}
