import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withTranslation } from '../i18n';
import Header from '../components/Header/Header';
import FadeIn from '../utils/FadeIn';
import { theme } from '../styles/global';
import { Button } from '../components/Button';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';

// MEES FIREBASE SET UP
// const db = firebase.firestore()
// let user = firebase.auth().currentUser;
//
// if (!user) {
// 	console.log('fu');
// 	Router.push('/login')
// }
//
// const data = {
// 	age: 24
// }
// console.clear()
// async function checkIfUserDataAndAddOrUpdate(newData, uid){
// 	let userRef = db.collection('users').doc(uid);
// 	const oldData = await userRef.get()
// 		.then(doc => {
// 			if (!doc.exists) {
// 				console.log('No such document!');
// 				return {}
// 			} else {
// 				return doc.data()
// 			}
// 		})
// 		.catch(err => {
// 			console.log('Error getting document', err);
// 		});
// 	console.log(oldData, newData);
// 	const dataForUser = Object.assign(oldData, newData);
// 	console.log(dataForUser);
// 	return await firebase.firestore().collection('users').doc(uid).set(dataForUser)
// }
//
// checkIfUserDataAndAddOrUpdate({saus: 'test', sexPref: 'male', sex: 'female'}, user.uid).then( data => {
// 	console.log('updated', data)
// 	checkIfUserDataAndAddOrUpdate({saus: 'test2', sexPref: 'female'}, user.uid).then( data => {
// 		console.log('updated', data)
// 	})
// })

const ContainerForm = styled.form`
    width: 2.75rem;
    height: 2.75rem;
    position: absolute;
    right: 0.5rem;
    top: 65%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 200ms ease-out;
    cursor: pointer;
    transform-origin: center;

    &:hover {
        .heart-svg {
            fill: ${theme.colors.primary};
            transform: scale(1.1);
        }
    }

    button {
        width: 2.75rem;
        height: 2.75rem;
        border: 0;
        background: none;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        outline: none;
        cursor: pointer;

        &:active {
            + .icon .heart-svg {
                transform: scale(0.6);
            }
        }
    }
`;

export const FabLike = props => {
    const { id, checked, defaultValue, disabled, name, label, styles } = props;
    const [clicked, setClicked] = useState(false);

    const handleOnChange = event => {
        const { onChange } = this.props;
        const newChecked = event.target.checked;

        if (onChange) {
            onChange(newChecked);
        }
    };

    function animateHeart(e) {
        e.preventDefault();
        setClicked(!clicked);
    }

    return (
        <ContainerForm action="" onSubmit={e => animateHeart(e)} css={styles ? styles : undefined}>
            <input type="hidden" value={id} name={'id'} />
            <button type={'submit'} aria-label={'Like'}>
                <span style={{ position: 'absolute', opacity: '0', pointerEvents: 'none' }}>Like</span>
            </button>
            <div className={'icon'}>
                {/*<Heart animationClassName={clicked ? 'clicked' : null} />*/}
                icon hier
            </div>
            {label}
        </ContainerForm>
    );
};

export const BlueGradientBackground = styled(motion.div)`
    background-image: linear-gradient(0deg, ${theme.colors.darkBlue} 0%, ${theme.colors.lightBlue} 100%);
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow-y: auto;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-button {
		width: 0;
		height: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-thumb {
		background: #80D0C7;
		border: 0 none #ffffff;
		border-radius: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #13547A;
	}
	&::-webkit-scrollbar-thumb:active {
		background: #13547A;
	}
	&::-webkit-scrollbar-track {
		background: #13547A;
		border-radius: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-track:hover {
		background: #80D0C7;
	}
	&::-webkit-scrollbar-track:active {
		background: #333333;
	}
	&::-webkit-scrollbar-corner {
		background: transparent;
		transition: all 300ms ease-in-out;
	}
`;
export const BlackGradientBackground = styled(motion.div)`
    background-image: linear-gradient(180deg, #434343 0%, ${theme.colors.black} 100%);
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow-y: auto;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-button {
		width: 0;
		height: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-thumb {
		background: #434343;
		border: 0 none #ffffff;
		border-radius: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: ${theme.colors.black};
	}
	&::-webkit-scrollbar-thumb:active {
		background: ${theme.colors.black};
	}
	&::-webkit-scrollbar-track {
		background: ${theme.colors.black};
		border-radius: 0;
		transition: all 300ms ease-in-out;
	}
	&::-webkit-scrollbar-track:hover {
		background: #434343;
	}
	&::-webkit-scrollbar-track:active {
		background: #333333;
	}
	&::-webkit-scrollbar-corner {
		background: transparent;
		transition: all 300ms ease-in-out;
	}
`;
export const defaultHeaderProps = {
    languageSelector: false,
    registerLink: false,
    loginLink: false,
    loginSidebar: false,
    loggedIn: false,
    chat: false,
    hasChatNotification: false,
    hasProfileNotification: false,
};

export const BigText = styled(motion.div)`
    font-size: calc(1.875rem + 1vh);
    color: white;
    max-width: 40rem;
    margin: 2rem auto;
    strong {
        font-weight: bold;
    }
    p {
    	margin: 0 auto calc(1.875rem + 1vh);
    }
    a {
		color: white;
		text-decoration: none;
		border-bottom: 1px solid white;
    }
    footer {
    	font-size: calc(1.5rem + 1vh);
    }
`;

export const ContentWrapper = styled(motion.article)`
    margin: 0 auto;
    padding: 5% 10%;

    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 4rem);
`;

export const ButtonHolder = styled(motion.div)`
    width: fit-content;
    margin: 0 auto;
`;

export const BottomPosition = styled(motion.div)`
    align-self: flex-end;
`;

export const HasNotification = styled.div`
    border-radius: 3px;
    background-color: ${theme.colors.statusRed};
    color: white;
    padding: 0.25rem;
    width: 1.875rem;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    transform: translate(20%, -20%);
    text-align: center;
    font-size: 0.75rem;
`;

let easing = [0.175, 0.85, 0.42, 0.96];
export const staggerTransition = {
	staggerChildren: .75,
	duration: .85,
	delayChildren: 0.5,
};
export const textVariants = {
    exit: {
        y: 20,
        opacity: 0,
        transition: staggerTransition,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: staggerTransition,
    },
};

export const fade = {
    exit: { opacity: 0 },
    enter: { opacity: 1 },
};

const LoginPage = ({ t }) => {
    return (
        <BlueGradientBackground initial="exit" animate="enter" exit="exit" variants={fade}>
            <Header {...{ t }} {...defaultHeaderProps} />
            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                <main>
                    <ContentWrapper variants={textVariants}>
                        <BigText variants={textVariants}>
                            <div>
                                <p>Geef <strong>steun</strong> aan de eerste linie <strong>Corona bestrijders</strong> en
									de <strong>andere helden</strong> die ons land draaiend houden.</p>
                            </div>
                        </BigText>
                        <BottomPosition>
                            <ButtonHolder variants={textVariants}>
                                <Button
                                    icon={'👏'}
                                    styles={css`
                                        color: #80d0c7;
                                        margin-bottom: 1rem;
                                    `}
                                    key={1}
                                    to={'/over-het-initiatief'}
                                >
                                    Applaudisseer
                                </Button>
                                <Button key={2} icon={'💌'}>
                                    Stuur een bericht
                                </Button>
                            </ButtonHolder>
                        </BottomPosition>
                    </ContentWrapper>
                </main>
            </motion.div>
        </BlueGradientBackground>
    );
};

LoginPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

withTranslation('common')(LoginPage);
export default withTranslation('common')(LoginPage);
