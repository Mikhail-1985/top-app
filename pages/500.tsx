import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';
import styles from '../styles/404.module.css'

export function Error500(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>
                <span className={styles.span}>Сервер не отвечает</span>
            </Htag>
		</>
	);
}

export default withLayout(Error500);