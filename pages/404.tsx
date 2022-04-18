import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';
import styles from '../styles/404.module.css'

export function Error404(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>
                <span className={styles.span}>Страница не найдена</span>
            </Htag>
		</>
	);
}

export default withLayout(Error404);