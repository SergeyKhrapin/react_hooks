import { FC, ChangeEvent } from 'react'

type Props = {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    name: string,
    placeholder: string
}

const Input: FC<Props> = props => <input {...props} />

export default Input
