import React, { useState, useEffect } from 'react';
import './style.css';

import Avatar from '@material-ui/core/Avatar';
import { ReactComponent as Search } from '../../assets/search.svg';

import { getCurrentSession } from '../../service/authService'

const BetHeader = () => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const getUserName = async () => {
            const session = await getCurrentSession()
            setUserName(session?.nome)
        }
        getUserName()
    }, [])

    return (
        <div className="bet-header">
            <div className="content">
                <span className="title">BET HACKER</span>
                <div className="left">
                    <div className="input-search">
                        <Search className="svg" />
                        <input placeholder="Search" />
                    </div>

                    <div className="profile">
                        <Avatar />
                        <div className="info">
                            <div className="username">{userName}</div>
                            <div className="money">USD 117.98</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default BetHeader;
