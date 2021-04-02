import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from './user';



let contaner = null;
beforeEach(() => {
    contaner = document.createElement('div');
    document.body.appendChild(contaner)
})


afterEach(() => {
    unmountComponentAtNode(contaner);
    contaner.remove();
    contaner = null
})

it('render user data', () => {
    var user = {
        login:'irfan',
        avatar_url: 'https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png'
    }

    act(() => {
        render(<User item={user} />, contaner)
    })

    expect(contaner.querySelector('img').src).toBe(user.avatar_url)
    expect(contaner.querySelector('p').textContent).toBe(user.login)

})