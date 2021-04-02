import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../components/Counter/Counter'
import CustomButton from '../../components/CustomButton/CustomButton'
import ListItem from '../../components/ListItem/ListItem'
import useFetch from '../../hooks/useFetch'
import useInput from '../../hooks/useInput'
import { Button, Layout } from 'antd';

import './Home.css'
import User from '../../components/User/user'
import UsersList from '../../components/UsersList/UsersList'


const ref = React.createRef();

const { Header, Sider, Content, Footer } = Layout;

export default function HomeView(props) {
    // const [name, setName] = useState('');
    // const [color, setColor] = useState('');
    const [nameProps, resetName] = useInput('');
    const [colorProps, resetColor] = useInput('');
    const [loading, data, error] = useFetch('https://api.github.com/users');

    // function onSubmit(e) {
    //     e.preventDefault();
    //     alert(`${nameProps.value} is a new color ${colorProps.value} has been added!`)
    //     resetName();
    //     resetColor()
    // }

    // function handleClick() {
    //     console.log(ref.current)
    // }


    return (
        <>
            <Layout>
                <Header>
                    <Link className="link" to="/about">
                        About
                    </Link>
                </Header>
                <Layout>
                    <Sider></Sider>
                    <Content>
                        <h1>Github users</h1>
                       
                       <UsersList loading={loading} error={error} data={data} />
                        {/* <div className="users-container">

                            {loading ?
                                <p>Loading...</p>
                                :
                                <>
                                    {error && <p>{error.message}</p>}

                                    {data && data?.map((item, index) => {
                                        return  <User item={item} key={index} />
                                    })}
                                </>
                            }
                        </div> */}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
