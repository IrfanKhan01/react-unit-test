import React from 'react'
import User from '../User/user'
import './UsersList.css'

export default function UsersList({ loading, error, data }) {
    return (
        <div className="users-container">

            {loading ? <p>Loading...</p>
                :
                <>
                    {error && <p className={'error-msg'}>{error.message}</p>}

                    {data && data?.map((item, index) => {
                        return <User item={item} key={index} />
                    })}
                </>
            }
        </div>
    )
}
