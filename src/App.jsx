import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'humberDEV',
        name: 'Humberto García',
        isFollowing: true
    },
    {
        userName: 'adrigomezz',
        name: 'Adrián Gómez',
        isFollowing: true
    },
    {
        userName: 'jdiefor',
        name: 'Jorge Díez',
        isFollowing: false
    },
    {
        userName: 'arthy',
        name: 'Arturo Galisteo',
        isFollowing: false
    },
    {
        userName: 'DavidEstelles',
        name: 'David Estellés',
        isFollowing: false
    }
]


export function App() {
    return (
        <>
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                        
                    )
                })
            }
        </section>
        </>
    )
}