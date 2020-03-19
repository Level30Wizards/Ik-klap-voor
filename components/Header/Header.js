import React from 'react';
import { mq, theme } from '../../styles/global';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
    HeaderHamburgerMenu,
} from './_Components';
import { HasNotification } from '../../pages';

const Header = props => {

    const Header = styled.header`
        border-radius: 0 0 .5rem .5rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 2;

        li {
            list-style-type: none;
        }

        .logo {
            height: 2rem;
            position: absolute;
            left: 0;
            bottom: 50%;
            transform: translateY(50%);
        }
        @media ${mq.max.medium} {
            .logo {
                height: 1.25rem;
            }
        }
    `;

    const LogoTitle = styled.h1`
        position: relative;
        margin: 0;
        font-size: calc(3.125rem + 1vh);
        top: 1rem;
    `;

    const Nav = styled.nav`
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;

        a {
            text-decoration: none;
        }

        .header-holder {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            > div {
                margin-left: 0.75rem;
                position: relative;
                height: 100%;
                display: flex;
                align-items: center;

            }
        }
    `;

    return (
        <Header>
            <Nav>
                <LogoTitle>
					<HasNotification>123</HasNotification>
					👏
                </LogoTitle>
                <div className={'header-holder'}>
					<HeaderHamburgerMenu />
                </div>
            </Nav>
        </Header>
    );
};

export default Header
