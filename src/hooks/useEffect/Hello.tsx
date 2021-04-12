import React, { memo, useEffect, FC } from 'react'

type Props = {
    name: string
}

const Hello: FC<Props> = ({ name }) => {
    useEffect(() => {
        const onMouseMove = (e: any) => {
            console.log(e)
        }

        window.addEventListener('mousemove', onMouseMove)
        
        console.log('Hello render') // It is called when Hello component is rendered from Form component for the first time
        
        return () => {
            console.log('Hello unmount') // It is called when Hello component is NOT rendered from Form component for the first time
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return <h6>Hello { name } - { Date.now() }</h6>
}

export default memo(Hello)
