import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { formItemLayout, style, itemStyle, buttonStyle } from './styles';

const { Item } = Form;

function AddressForm() {
	const [ cep, setCep ] = useState('');
	const [ bairro, setBairro ] = useState('');
	const [ logradouro, setLogradouro ] = useState('');
	const [ localidade, setLocalidade ] = useState('');
	const [ uf, setUf ] = useState('');
	const [ numero, setNumero ] = useState('');
	const [ status, setStatus ] = useState('');
	const [ error, setError ] = useState('');

	useEffect(
		() => {
			setStatus('');
			setError('');

			if (cep.length === 8) {
				setStatus('validating');

				setTimeout(() => {
					fetch(`http://viacep.com.br/ws/${cep}/json/`)
						.then((res) => res.json())
						.then((cepResult) => {
							if (cepResult.erro) {
								setStatus('error');
								setError('Não foi possível encontrar este CEP');
								return;
							}

							setStatus('success');
							setLogradouro(cepResult.logradouro);
							setBairro(cepResult.bairro);
							setLocalidade(cepResult.localidade);
							setUf(cepResult.uf);
						})
						.catch((error) => setError(error));
				}, 2000);
			}
		},
		[ cep ]
	);

	return (
		<Form {...formItemLayout} style={style}>
			<Item label="CEP" hasFeedback validateStatus={status} help={error} style={itemStyle}>
				<Input
					placeholder="Apenas números"
					maxLength={8}
					value={cep}
					onChange={(e) => setCep(e.target.value)}
				/>
			</Item>

			<Item label="Logradouro" style={itemStyle}>
				<Input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
			</Item>

			<Item label="Bairro" style={itemStyle}>
				<Input value={bairro} onChange={(e) => setBairro(e.target.value)} />
			</Item>

			<Item label="Localidade" style={itemStyle}>
				<Input value={localidade} onChange={(e) => setLocalidade(e.target.value)} />
			</Item>

			<Item label="UF" style={itemStyle}>
				<Input value={uf} onChange={(e) => setUf(e.target.value)} />
			</Item>

			<Item label="Número" style={itemStyle}>
				<Input value={numero} onChange={(e) => setNumero(e.target.value)} />
			</Item>

			<Button style={buttonStyle}>Enviar</Button>
		</Form>
	);
}

export default AddressForm;
