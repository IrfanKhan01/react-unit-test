import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UsersList from "./UsersList";




let container = null
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
})

it('render list of users', () => {

    act(() => {
        render(<UsersList loading={true} />, container)
    });
    expect(container.querySelector('p').textContent).toBe('Loading...')

    let error = {
        message: '404 error'
    }
    act(() => {
        render(<UsersList loading={false} error={error} />, container)
    });
    expect(container.querySelector('.error-msg').textContent).toBe(error.message);

    act(() => {
        render(<UsersList loading={false} error={null} data={[]} />, container)
    });
    expect(container.querySelector('.users-container').hasChildNodes()).toEqual(false)

})