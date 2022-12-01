import React, { useEffect, useState } from 'react'
import styles from './UserContacts.module.scss';
import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const UserContacts = () => {
	console.log('rendered');

	const schema = yup.object({
		name: yup.string().min(2, 'Two characters minimum!').required('That field is requared'),
		age: yup.number('Must be a number').positive('Thats not funny').integer('Must be an integer').min(5, 'I dont think he has a phone'),
		email: yup.string().email('Thats not an email'),
		phone: yup.number('Must be a number').required('That field is requared')
	})

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) });
	const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);

	const onSubmit = (data) => {
		setContacts(p => [...p, data]);
	}

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const cotactElems = contacts.map(e => (
		<div className={styles.contact} key={nanoid()}>
			<h5>{e.name}{e.age ? `, ${e.age}` : ''}</h5>
			<div className={styles.contact__body}>
				<p><span>Phone: </span>{e.number}</p>
				<p><span>Email: </span>{e.email}</p>
			</div>
		</div>
	))
	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<h2 className={styles.title}>Your contact list</h2>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<label>
						Name:
						<input {...register('name')} />
						{errors.name && <p className={styles.error}>{errors.name.message}</p>}
					</label>
					<label>
						Phone Number:
						<input {...register('phone')} />
						{errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
					</label>
					<label>
						Email:
						<input {...register('email')} />
						{errors.email && <p className={styles.error}>{errors.email.message}</p>}
					</label>
					<label>
						Age:
						<input {...register('age')} />
						{errors.age && <p className={styles.error}>{errors.age.message}</p>}
					</label>
					<button type='submit'>Add +</button>
				</form>

				<div className={styles.contacts__box}>
					{cotactElems}
				</div>
			</div>
		</section>
	)
}

export default UserContacts