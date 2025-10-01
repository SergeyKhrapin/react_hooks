import MainContainer from './MainContainer'
import Count from './hooks/useState/Count'
import Form from './hooks/useEffect/Form'
import ShowPreviousValue from './hooks/useRef/ShowPreviousValue'
import FocusElement from './hooks/useRef/FocusElement'
import ComputeValue from './hooks/useMemo/ComputeValue'
import GenerateItems from './hooks/useCallback/GenerateItems'
import ShowAlert from './hooks/useContext/ShowAlert'
import Counter from './hooks/useReducer/Counter'
import Input from './hooks/customHooks/Input'
import Toggle from './hooks/customHooks/Toggle'
import Login from './hooks/customHooks/login/Login'
import * as Memo from './preventRerendering/functionalComponent'
import * as Pure from './preventRerendering/classComponent'
import RenderProps from './renderProps/Counter'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Fetch from './hooks/useEffect/Fetch'

function ReactHooks() {
	console.log('ReactHooks render >>>>>');

	const [counter, setCounter] = useState(0)
	const prevCounter = useRef(null)

	// const arr = [10, 2, 5, 15, 20, 1, 33];

	// const sort = (arr) => {
	// 	const arrayOfArraysWithTwoNumbers = [];

	// 	const divideArrayInHalf = (arr: number[]) => {
	// 		if (arr.length === 1) {
	// 			return arr;
	// 		}
	// 		const firstHalf = arr.slice(0, arr.length/2);
	// 		const secondHalf = arr.slice(arr.length/2);


	// 	};

	// };

	const increaseCounter = () => {
		setCounter(val => {
			prevCounter.current = val + 1
			return ++val
		})		
	}

	const decreaseCounter = () => {
		setCounter(val => --val)
		prevCounter.current = counter
	}

	return (
		<>
			<MainContainer>
				<div>Parent counter - {counter}</div>
				{prevCounter.current !== null || counter ?
					<span>Counter has been {counter > prevCounter.current ? 'increased' : 'decreased'}</span> :
					null}
				<div>
					<script>console.log(666)</script>
				</div>
				<button onClick={increaseCounter}>+</button>
				<button onClick={decreaseCounter}>-</button>
				<Count hookName='useState' />
				<Form hookName='useEffect' />
				<Fetch hookName='useEffect' />
				<ShowPreviousValue hookName='useRef 1' />
				<FocusElement hookName='useRef 2' />
				<ComputeValue hookName='useMemo' />
				<GenerateItems hookName='useCallback' />
				<ShowAlert hookName='useContext' />
				<Counter hookName='useReducer 1' />
				<Counter hookName='useReducer 2' />
				<Input hookName='Custom Hook 1' />
				<Toggle hookName='Custom Hook 2' />
				<Login hookName='Custom Hook 3' />
			</MainContainer>
			<div className="extra-container container">
				<div className="row m-5">
					<div className="col-12">
						<h1 className="text-center">Prevent component rerendering</h1>
					</div>
				</div>
				<Memo.Parent />
				<Pure.Parent />
			</div>
			<div className="extra-container container">
				<div className="row m-5">
					<div className="col-12">
						<h1 className="text-center">Render Props</h1>
					</div>
				</div>
				<RenderProps />
			</div>
		</>
	)
}

export default ReactHooks
