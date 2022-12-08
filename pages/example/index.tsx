import { useSelector, useDispatch } from 'react-redux';
import { selectExample } from '@/store/reducers/example/selectors';
import { editExampleNameRequested } from '@/store/sagas/example/actionCreators';
import Image from 'next/image';

import Pic from '@/assets/images/b02.jpg';
import styles from '@/pages/example/style.module.css';

const Example = () => {
	const example = useSelector(selectExample);
	const dispatch = useDispatch();

	return (
		<div>
			<h3>{example.name}</h3>
			<Image
				src={Pic}
				alt='Picture of the author'
				width={200}
				height={200}
			/>
			<div></div>
			<button onClick={() => dispatch(editExampleNameRequested({ name: 'New name' }))}>
				Change name
			</button>
		</div>
	);
};

export default Example;
